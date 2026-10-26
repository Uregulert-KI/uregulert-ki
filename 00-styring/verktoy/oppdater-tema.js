// Generisk oppdatering av ett tema etter gjennomgang. Bruk: node oppdater-tema.js <prosjektrot> <data.js>
// data.js eksporterer { id, mappe, kilder, materiale, påstander, datering, merknader }
//  - kilder: [[nøkkel, forfattere, tittel, år, utgiver, type, fagfellevurdert, merknad]]
//  - materiale: ny tekst med @@nøkkel@@ (ny kilde) eller @@K0001@@ (eksisterende) og [[ID]]
//  - påstander: [[tekst, [nøkler]]]
//  - datering: tekst til dateringslista (valgfri)
//  - merknader: [[relativ fil, tekst]] som legges til nederst i andre temaer (valgfri)
const fs = require('fs'), path = require('path');
const [ROOT, DATA] = process.argv.slice(2);
const d = require(path.resolve(DATA));
const DATO = new Date().toISOString().slice(0, 10);
const P = f => path.join(ROOT, f), rd = f => fs.readFileSync(P(f), 'utf8'), wr = (f, t) => fs.writeFileSync(P(f), t, 'utf8');

// Kilder
let reg = rd('99-kilder/kilderegister.md');
const finnes = new Set([...reg.matchAll(/^\| (K\d{4}) /gm)].map(m => m[1]));
let neste = +reg.match(/Neste ledige K-ID: K(\d{4})/)[1];
const K = new Map();
const nyeRader = (d.kilder || []).map(([key, f, t, y, u, type, ff, merk]) => {
  const id = 'K' + String(neste++).padStart(4, '0'); K.set(key, id);
  return { id, f, t, rad: `| ${id} | ${f} | ${t} | ${y || '–'} | ${u || '–'} |  | ${type} | ${ff || 'ukjent'} |  | ikke verifisert |  | Lagt til ${DATO} (${d.id}). ${merk || ''} |` };
});
const k = key => {
  if (/^K\d{4}$/.test(key)) { if (!finnes.has(key)) throw new Error('Ukjent K-ID ' + key); return key; }
  if (!K.has(key)) throw new Error('Ukjent kildenøkkel ' + key); return K.get(key);
};
const løs = s => s.replace(/\s?@@([A-Za-z0-9]+)@@/g, (_, x) => ` [${k(x)}]`);

// Temafil
const mappe = d.mappe;
const fil = `${mappe}/utkast/` + fs.readdirSync(P(`${mappe}/utkast`)).find(f => f.startsWith(d.id + '-'));
let t = rd(fil);
const i = t.search(/^## Stikkord og materiale/m);
const head = t.slice(0, i), gammel = t.slice(i);
const linjer = gammel.split('\n');
const opphIdx = linjer.findIndex(l => l.startsWith('*Opprinnelse'));
const opph = linjer[opphIdx];
const kropp = linjer.slice(opphIdx + 1).join('\n').trim().replace(/^(#{3,}) /gm, (m, h) => '#' + h + ' ');
const materiale = løs(d.materiale.trim());
let ny;
if (d.modus === 'tillegg') {
  // Legg til et avsnitt uten å strukturere om: foran en gitt overskrift, ellers sist
  if (d.foran && !gammel.includes(d.foran)) throw new Error('Fant ikke ' + d.foran);
  ny = d.foran ? gammel.replace(d.foran, materiale + '\n\n' + d.foran) : gammel.replace(/\n*$/, '\n') + '\n' + materiale + '\n';
} else {
  // Det opprinnelige materialet flyttes til <mappe>/opprinnelig/<ID>.md, som holdes utenfor det delte repoet (2026-10-26).
  fs.mkdirSync(P(`${mappe}/opprinnelig`), { recursive: true });
  const tittel = (head.match(/^# (.*)$/m) || [, d.id])[1];
  wr(`${mappe}/opprinnelig/${d.id}.md`, `# ${tittel} – opprinnelig materiale\n\n*Flyttet ut av temafila ${DATO}. Holdes utenfor det delte repoet (.gitignore). Ordrett slik det sto.*\n\n${opph}\n\n${kropp}\n`);
  ny = `## Stikkord og materiale\n\n*Utvidet ${DATO} etter gjennomgang. «Sjekk» betyr at kilden er satt opp fra hukommelsen og at detaljer må bekreftes.*\n\n${materiale}\n`;
}

// Påstander
const R = ' |  |  |  |  |  |  | ikke scoret | 0 | – |';
let pa = rd(`${mappe}/pastander.md`);
const eks = [...pa.matchAll(new RegExp(`^\\| ${d.id}\\.P(\\d{2}) [^\\n]*\\n`, 'gm'))];
let n = eks.length ? Math.max(...eks.map(m => +m[1])) : 0;
const pr = (d.påstander || []).map(([tekst, keys]) => { n++; const ids = keys.map(k); return { id: `${d.id}.P${String(n).padStart(2, '0')}`, tekst, ids }; });
// Etter siste påstand i temaet, ellers etter siste påstand i fila, ellers rett under tabellhodet (tomt register).
const etter = (eks.length ? eks[eks.length - 1] : [...pa.matchAll(/^\| [A-Z]{3}-\d{2}\.P\d{2} [^\n]*\n/gm)].pop())
  || [...pa.matchAll(/^\|---[^\n]*\n/gm)].pop();
if (!etter && pr.length) throw new Error(`Fant ikke påstandstabellen i ${mappe}/pastander.md`);
if (etter) {
  const pos = etter.index + etter[0].length;
  pa = pa.slice(0, pos) + pr.map(p => `| ${p.id} | ${p.tekst} | ${p.ids.join(', ') || '– (mangler kilde)'}${R}`).join('\n') + (pr.length ? '\n' : '') + pa.slice(pos);
}

let nyHead = head.replace(/^sist_endret: .*/m, `sist_endret: ${DATO}`);
if (n) nyHead = nyHead.replace(/^> Påstander: [^\n]*? i \[pastander\.md\]/m, `> Påstander: ${d.id}.P01–${d.id}.P${String(n).padStart(2, '0')} i [pastander.md]`);

// Skriv kilder først (alt validert over)
const s = [...reg.matchAll(/^\| K\d{4} [^\n]*\n/gm)].pop();
reg = reg.slice(0, s.index + s[0].length) + nyeRader.map(r => r.rad).join('\n') + (nyeRader.length ? '\n' : '') + reg.slice(s.index + s[0].length);
reg = reg.replace(/Neste ledige K-ID: K\d{4}/, `Neste ledige K-ID: K${String(neste).padStart(4, '0')}`);
wr('99-kilder/kilderegister.md', reg);
fs.appendFileSync(P('99-kilder/bibliografi.bib'), nyeRader.map(r => `\n% ${r.id} – ${r.f}: ${r.t} – ikke verifisert\n@misc{${r.id},\n  author = {},\n  title = {},\n  year = {},\n  howpublished = {},\n  doi = {},\n  url = {},\n  note = {ikke verifisert}\n}\n`).join(''));
wr(fil, nyHead + ny);
wr(`${mappe}/pastander.md`, pa);

// Kildebruk
const brukt = [...new Set([...materiale.matchAll(/\[(K\d{4})\]/g)].map(m => m[1]).concat(pr.flatMap(p => p.ids)))];
const ex = new Set([...rd(`${mappe}/kilder.md`).matchAll(new RegExp(`^\\| (K\\d{4}) \\| ${d.id} \\|`, 'gm'))].map(m => m[1]));
const kr = brukt.filter(x => !ex.has(x)).map(x => {
  const c = pr.filter(p => p.ids.includes(x));
  return `| ${x} | ${d.id} | ${c.length ? 'Belegg for ' + c.map(p => `${p.id} (${p.tekst})`).join('; ') : 'Bakgrunn i materialet etter gjennomgang'} |`;
});
wr(`${mappe}/kilder.md`, rd(`${mappe}/kilder.md`).replace(/\n*$/, '\n') + kr.join('\n') + (kr.length ? '\n' : ''));

// Dateringsliste
if (d.datering) wr('metode/dateringsliste.md', rd('metode/dateringsliste.md').replace(/\n*$/, '\n') + `| [[${d.id}]] | ${løs(d.datering.tekst)} | ${d.datering.kilder.map(k).join(', ')} |  |  |\n`);

// Merknader til andre temaer: arbeidsnotater, legges i det private <mappe>/opprinnelig/<ID>.md (2026-10-26)
for (const [f, tekst] of d.merknader || []) {
  const [m] = f.split('/');
  const id = path.basename(f).match(/^([A-Z]{3}-\d{2})/)[1];
  const pf = `${m}/opprinnelig/${id}.md`;
  fs.mkdirSync(P(`${m}/opprinnelig`), { recursive: true });
  let pt = fs.existsSync(P(pf)) ? rd(pf) : `# ${id} – opprinnelig materiale\n\n*Privat – holdes utenfor det delte repoet (.gitignore).*\n`;
  if (!/^## Arbeidsnotater/m.test(pt)) pt = pt.replace(/\n*$/, '\n') + '\n## Arbeidsnotater\n';
  wr(pf, pt.replace(/\n*$/, '\n') + `\n*Merknad (${DATO}):* ${løs(tekst)}\n`);
}
console.log(`${d.id}: ${nyeRader.length} nye kilder${nyeRader.length ? ` (${nyeRader[0].id}–${nyeRader[nyeRader.length - 1].id})` : ''}, ${pr.length} nye påstander, ${kr.length} kilderader, ${(d.merknader || []).length} merknader.`);
