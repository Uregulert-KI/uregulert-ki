// Regner ut «Avhengigheter» i alle PLAN.md på nytt fra utkastfilene, og kontrollerer referanser.
// Leser bare materialet under «## Stikkord og materiale» (malkommentarene teller ikke).
// Bruk (fra prosjektroten): node 00-styring/verktoy/oppdater-avhengigheter.js
const fs = require('fs');
const path = require('path');
const root = path.resolve(__dirname, '..', '..');

const mapper = fs.readdirSync(root).filter(d => /^(0[1-9]|1[0-3])-/.test(d)).sort();
const temaer = new Map(); // id -> { mappe, refs }
const rekkefølge = new Map(); // mappe -> [id i PLAN-rekkefølge]

for (const m of mapper) {
  const plan = fs.readFileSync(path.join(root, m, 'PLAN.md'), 'utf8');
  rekkefølge.set(m, [...plan.matchAll(/^\| \d+ \| ([A-Z]{3}-\d{2}) \|/gm)].map(x => x[1]));
  for (const fil of fs.readdirSync(path.join(root, m, 'utkast'))) {
    const id = fil.slice(0, 6);
    const tekst = fs.readFileSync(path.join(root, m, 'utkast', fil), 'utf8');
    const i = tekst.search(/^## Stikkord og materiale/m);
    const materiale = i >= 0 ? tekst.slice(i) : '';
    const refs = [...new Set([...materiale.matchAll(/\[\[([A-Z]{3}-\d{2})\]\]/g)].map(x => x[1]))].filter(r => r !== id);
    temaer.set(id, { mappe: m, refs });
  }
}

const feil = [];
for (const [m, ids] of rekkefølge) {
  const filer = [...temaer].filter(([, t]) => t.mappe === m).map(([id]) => id);
  for (const id of filer) if (!ids.includes(id)) feil.push(`${id} har utkastfil, men mangler i ${m}/PLAN.md`);
  for (const id of ids) if (!temaer.has(id)) feil.push(`${id} står i ${m}/PLAN.md, men har ingen utkastfil`);
}
for (const [id, t] of temaer) for (const r of t.refs) if (!temaer.has(r)) feil.push(`Ukjent referanse [[${r}]] i ${id}`);

for (const m of mapper) {
  const ids = rekkefølge.get(m);
  const ut = ids.filter(id => temaer.get(id)?.refs.length)
    .map(id => `- ${id} → ${temaer.get(id).refs.map(r => `[[${r}]]`).join(', ')}`);
  const inn = [];
  for (const id of ids) {
    const fra = [...temaer].filter(([, t]) => t.mappe !== m && t.refs.includes(id)).map(([k]) => k);
    if (fra.length) inn.push(`- ${id} ← ${fra.map(r => `[[${r}]]`).join(', ')}`);
  }
  const f = path.join(root, m, 'PLAN.md');
  const plan = fs.readFileSync(f, 'utf8');
  const nytt = plan.replace(/## Avhengigheter\n[\s\S]*?\n(?=## )/,
    `## Avhengigheter\n\n### Viser til\n${ut.join('\n') || '- (ingen)'}\n\n### Vises til fra andre mapper\n${inn.join('\n') || '- (ingen)'}\n\n`);
  if (nytt !== plan) { fs.writeFileSync(f, nytt, 'utf8'); console.log('Oppdatert ' + m + '/PLAN.md'); }
}
console.log(`${temaer.size} temaer kontrollert.`);
if (feil.length) { console.log('FEIL:\n' + feil.join('\n')); process.exit(1); }
