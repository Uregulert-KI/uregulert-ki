// Regner ut statustabellen i README.md, totallinjen i id-register.md og kolonnen «Brukt i» i kilderegisteret på nytt.
// Kilden til sannhet er utkastfilene (status i metadata), pastander.md (beslutning) og mappenes kilder.md.
// Bruk (fra prosjektroten): node 00-styring/verktoy/oppdater-status.js
const fs = require('fs');
const path = require('path');
const root = path.resolve(__dirname, '..', '..');
const rd = f => fs.readFileSync(path.join(root, f), 'utf8');
const wr = (f, t) => fs.writeFileSync(path.join(root, f), t, 'utf8');
const STATUSER = ['kandidat', 'ikke startet', 'stikkord', 'utkast', 'utkast-høy-prioritet', 'fagfellelest', 'ferdig', 'forkastet'];
const BESLUTNING = ['inkluderes', 'styrkes', 'forkastet', 'ikke scoret'];
const dato = new Date().toISOString().slice(0, 10);

const mapper = fs.readdirSync(root).filter(d => /^(0[1-9]|1[0-3])-/.test(d)).sort();
const rader = [];
const sum = { temaer: 0, status: {}, beslutning: {} };
for (const m of mapper) {
  const status = {};
  const filer = fs.readdirSync(path.join(root, m, 'utkast')).filter(f => f.endsWith('.md'));
  for (const f of filer) {
    const s = rd(`${m}/utkast/${f}`).match(/^status: (.*)$/m)[1].trim();
    status[s] = (status[s] || 0) + 1;
    sum.status[s] = (sum.status[s] || 0) + 1;
  }
  const besl = {};
  for (const r of rd(`${m}/pastander.md`).matchAll(/^\| [A-Z]{3}-\d{2}\.P\d{2} [^\n]*$/gm)) {
    const b = r[0].split('|')[10].trim();
    besl[b] = (besl[b] || 0) + 1;
    sum.beslutning[b] = (sum.beslutning[b] || 0) + 1;
  }
  sum.temaer += filer.length;
  rader.push([`[${m}](${m}/PLAN.md)`, filer.length, fmtStatus(status), BESLUTNING.map(b => besl[b] || 0).join(' / ')]);
}
function fmtStatus(s) { return STATUSER.filter(x => s[x]).map(x => `${x}: ${s[x]}`).join(', '); }
rader.push(['**Totalt**', sum.temaer, fmtStatus(sum.status), BESLUTNING.map(b => sum.beslutning[b] || 0).join(' / ')]);
const tabell = ['| Mappe | Antall temaer | Per status | Påstander inkl. / styrkes / forkastet / ikke scoret |', '|---|---|---|---|', ...rader.map(r => `| ${r.join(' | ')} |`)].join('\n');

let readme = rd('README.md');
readme = readme.replace(/\| Mappe \| Antall temaer[\s\S]*?\n\| \*\*Totalt\*\*[^\n]*/, tabell);
readme = readme.replace(/Sist oppdatert: \d{4}-\d{2}-\d{2}/, `Sist oppdatert: ${dato}`);
wr('README.md', readme);

// ID-register: totallinje
let idr = rd('metode/id-register.md');
const temaRader = [...idr.matchAll(/^\| [A-Z]{3}-\d{2} \| [^|]+\| [^|]+\| ([^|]+) \|/gm)];
const forkastet = temaRader.filter(r => r[1].trim() === 'forkastet').length;
const påstander = Object.values(sum.beslutning).reduce((a, b) => a + b, 0);
const nesteK = rd('99-kilder/kilderegister.md').match(/Neste ledige K-ID: (K\d{4})/)[1];
idr = idr.replace(/(\| 99-kilder\/kilderegister\.md \| )K\d{4} \|/, `$1${nesteK} |`);
idr = idr.replace(/^Totalt [^\n]*$/m,`Totalt ${sum.temaer} aktive temaer (${temaRader.length} ID-er, hvorav ${forkastet} forkastet/sammenslått) og ${påstander} påstander.`);
wr('metode/id-register.md', idr);

// PLAN.md: kolonnene «Status» og «Påstander» i hver mappes tabell (lagt til 2026-10-14)
// Sammenslåtte temaer beholder påstands-ID-ene sine, men telles hos temaet de ble slått sammen med.
const SAMMENSLÅTT = { 'OKO-17': 'TVG-05' }; // E012
for (const m of mapper) {
  const antall = {};
  for (const r of rd(`${m}/pastander.md`).matchAll(/^\| ([A-Z]{3}-\d{2})\.P\d{2} /gm)) { const id = SAMMENSLÅTT[r[1]] || r[1]; antall[id] = (antall[id] || 0) + 1; }
  const statusAv = {};
  for (const f of fs.readdirSync(path.join(root, m, 'utkast')).filter(f => f.endsWith('.md'))) statusAv[f.slice(0, 6)] = rd(`${m}/utkast/${f}`).match(/^status: (.*)$/m)[1].trim();
  const plan = rd(`${m}/PLAN.md`).replace(/^(\| \d+ \| ([A-Z]{3}-\d{2}) \| [^|]+\| [^|]+\| )[^|]+\| [^|]+\|$/gm,
    (a, pre, id) => `${pre}${statusAv[id] || 'ukjent'} | ${antall[id] || 0} |`);
  wr(`${m}/PLAN.md`, plan);
}

// Kilderegister: «Brukt i»
const bruk = new Map();
for (const m of mapper) for (const x of rd(`${m}/kilder.md`).matchAll(/^\| (K\d{4}) \| ([A-Z]{3}-\d{2}) \|/gm)) {
  if (!bruk.has(x[1])) bruk.set(x[1], []);
  if (!bruk.get(x[1]).includes(x[2])) bruk.get(x[1]).push(x[2]);
}
let reg = rd('99-kilder/kilderegister.md');
reg = reg.replace(/^(\| (K\d{4}) \|(?:[^|]*\|){9})([^|]*)(\|[^\n]*)$/gm, (a, pre, id, gammel, post) => `${pre} ${(bruk.get(id) || []).join(', ')} ${post}`);
wr('99-kilder/kilderegister.md', reg);
// Kilder med status «fjernet» står igjen i registeret (ID-ene er permanente) og telles ikke som ubrukt.
const ubrukt = [...reg.matchAll(/^\| (K\d{4}) \|((?:[^|]*\|){9})/gm)].filter(m => m[2].split('|')[8].trim() !== 'fjernet').map(m => m[1]).filter(id => !bruk.has(id));

console.log(`${sum.temaer} temaer, ${påstander} påstander. Status: ${fmtStatus(sum.status)}.`);
if (ubrukt.length) console.log('Kilder som ikke brukes i noen kilder.md: ' + ubrukt.join(', '));
