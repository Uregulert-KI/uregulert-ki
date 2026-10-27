// Lager én sjekkpakke (regneark) per tema til dugnadens kilde- og påstandssjekk, og oppdaterer fordelingslista.
// Hver rad er én påstand med én kilde: lenke, hva rapporten sier, og felt for status, ENUVA og kommentar.
// Kilden til sannhet er pastander.md, 99-kilder/kilderegister.md og temaene i utkast/.
// Status, «Tatt av» og «Merknad» i dugnad/fordeling.md beholdes når lista lages på nytt.
// Krever exceljs: kjør «npm install» i 00-styring/verktoy første gang.
// Bruk (fra prosjektroten): node 00-styring/verktoy/lag-sjekkpakker.js [TEMA-ID ...]
const fs = require('fs');
const path = require('path');
const ExcelJS = require('exceljs');
const root = path.resolve(__dirname, '..', '..');
const rd = f => fs.readFileSync(path.join(root, f), 'utf8');
const dato = new Date().toISOString().slice(0, 10);
const UT = 'dugnad/sjekkpakker';
const FORDELING = 'dugnad/fordeling.md';
const KONTAKT = 'glennkatrudsolheim@proton.me';
const KILDESTATUS = ['verifisert', 'delvis', 'sekundær', 'ikke funnet', 'feil'];
const FORDELINGSSTATUS = ['ledig', 'tatt', 'levert', 'innlagt'];

// Kilderegisteret
const kilder = {};
for (const l of rd('99-kilder/kilderegister.md').split('\n')) {
  if (!/^\| K\d{4} /.test(l)) continue;
  const c = l.slice(2, -2).split(' | ');
  kilder[c[0]] = { forf: c[1], tittel: c[2], ar: c[3], utgiver: c[4], url: c[5].trim(), status: c[9], merknad: c[11] || '' };
}

// Påstander og temaer, i mappe- og ID-rekkefølge
const mapper = fs.readdirSync(root).filter(d => /^(0[2-9]|1[0-3])-/.test(d)).sort();
const temaer = [];
for (const m of mapper) {
  const per = {};
  for (const l of rd(`${m}/pastander.md`).split('\n')) {
    if (!/^\| [A-Z]{3}-\d{2}\.P\d{2} /.test(l)) continue;
    const c = l.slice(2, -2).split(' | ');
    const id = c[0].trim();
    const tema = id.slice(0, 6);
    (per[tema] = per[tema] || []).push({ id, tekst: c[1].trim(), kids: c[2].match(/K\d{4}/g) || [] });
  }
  for (const tema of Object.keys(per).sort()) {
    const fil = fs.readdirSync(path.join(root, m, 'utkast')).find(f => f.startsWith(tema + '-'));
    const tekst = fil ? rd(`${m}/utkast/${fil}`) : '';
    const tittel = (tekst.match(/^tittel: (.*)$/m) || [, ''])[1].trim();
    temaer.push({ tema, tittel, mappe: m, tekst, pastander: per[tema] });
  }
}

// Setningene i temateksten som viser til en kilde. Korte avsnitt tas med i sin helhet,
// og en kort setning får med setningen foran, så utdraget gir mening alene.
const renMd = s => s.replace(/\*\*|__/g, '').replace(/(^|[^*])\*([^*]+)\*/g, '$1$2').replace(/\[\[([^\]]+)\]\]/g, '$1')
  .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').trim();
function rapportenSier(tekst, kid) {
  const ut = [];
  for (const linje of tekst.split('\n')) {
    if (!linje.includes(kid) || linje.startsWith('> Påstander:')) continue;
    const avsnitt = renMd(linje.replace(/^\s*(?:[-*>]|\d+\.)\s*/, ''));
    if (avsnitt.length <= 350) { ut.push(avsnitt); continue; }
    const setninger = avsnitt.split(/(?<=[.!?])\s+(?=[A-ZÆØÅ«(])/);
    setninger.forEach((s, i) => {
      if (s.includes(kid)) ut.push(s.length < 100 && i > 0 ? `${setninger[i - 1]} ${s}` : s);
    });
  }
  return [...new Set(ut)].join('\n\n');
}

const kildeTekst = q => [q.forf, q.ar && q.ar !== '–' ? `(${q.ar})` : '', '–', q.tittel, q.utgiver && q.utgiver !== '–' ? `· ${q.utgiver}` : '']
  .filter(Boolean).join(' ');

// Regnearket
const KOLONNER = [
  { key: 'pid', header: 'Påstand-ID', width: 12 },
  { key: 'pastand', header: 'Påstand', width: 40 },
  { key: 'kid', header: 'K-ID', width: 8 },
  { key: 'kilde', header: 'Kilde', width: 40 },
  { key: 'lenke', header: 'Lenke', width: 28 },
  { key: 'sier', header: 'Rapporten sier', width: 60 },
  { key: 'idag', header: 'Registeret i dag', width: 36 },
  { key: 'status', header: 'Status ▾', width: 13, fyll: true },
  { key: 'nylenke', header: 'Riktig eller ny lenke / DOI', width: 26, fyll: true },
  { key: 'fagf', header: 'Fagfelle-vurdert ▾', width: 11, fyll: true },
  { key: 'kmerknad', header: 'Om kilden: hvordan du sjekket, hva som avviker', width: 36, fyll: true },
  { key: 'E', header: 'E ▾', width: 5, fyll: true },
  { key: 'N', header: 'N ▾', width: 5, fyll: true },
  { key: 'U', header: 'U ▾', width: 5, fyll: true },
  { key: 'V', header: 'V ▾', width: 5, fyll: true },
  { key: 'A', header: 'A ▾', width: 5, fyll: true },
  { key: 'kommentar', header: 'Kommentar eller nyanse til påstanden', width: 40, fyll: true },
];
const PER_PASTAND = ['pid', 'pastand', 'E', 'N', 'U', 'V', 'A', 'kommentar'];
const GRA = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFF2F2F2' } };
const GUL = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFFFF8DC' } };
const MORK = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF1F3A4D' } };
const OKER = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFC8701E' } };
const liste = verdier => ({ type: 'list', allowBlank: true, formulae: [`"${verdier.join(',')}"`] });

function lesMeg(ws, t) {
  ws.getColumn(1).width = 26;
  ws.getColumn(2).width = 90;
  const rad = (a, b, stil) => {
    const r = ws.addRow([a, b]);
    r.alignment = { wrapText: true, vertical: 'top' };
    if (stil === 'h') r.font = { bold: true, size: 13 };
    if (stil === 'b') r.getCell(1).font = { bold: true };
    return r;
  };
  ws.addRow([`Sjekkpakke ${t.tema}: ${t.tittel}`]).font = { bold: true, size: 16 };
  ws.addRow([`Laget ${dato} · ${t.pastander.length} påstander · Uregulert KI (arbeidstittel)`]).font = { italic: true, color: { argb: 'FF666666' } };
  ws.addRow([]);
  rad('Sjekket av', '', 'b').getCell(2).fill = GUL;
  rad('Dato', '', 'b').getCell(2).fill = GUL;
  ws.getCell('B4').note = 'Kallenavn eller GitHub-navn. Det kan bli stående offentlig i kilderegisteret.';
  ws.addRow([]);
  rad('Slik gjør du', '', 'h');
  rad('1', 'Gå til arket «Sjekk». Grå kolonner er fylt ut for deg. Gule kolonner fyller du ut.');
  rad('2', 'Åpne lenken og finn originalen. Primærkilden går foran omtaler av den. Mangler lenken, eller peker den feil, så søk opp kilden og lim inn riktig lenke.');
  rad('3', 'Les det som er relevant, og sammenlign med «Rapporten sier». Sett «Status» og skriv kort i «Om kilden» hvordan du sjekket og hva som eventuelt avviker.');
  rad('4', 'Scor påstanden på E, N, U, V og A (0–3) hvis du føler deg trygg. Du kan la scoren stå tom og bare sjekke kilden.');
  rad('5', 'Skriv nyanser, innvendinger eller bedre formuleringer i «Kommentar». Det er like verdifullt som scoren.');
  rad('6', `Lagre fila og send den til ${KONTAKT}, eller legg den ved en pull request. Gi beskjed hvis du ikke blir ferdig, så pakken kan gå videre.`);
  rad('', 'Står det allerede «verifisert» under «Registeret i dag», er kilden sjekket av noen andre, og du kan hoppe over den.');
  ws.addRow([]);
  rad('Status på kilden', '', 'h');
  rad('verifisert', 'Du har åpnet primærkilden, og den sier det påstanden bygger på.', 'b');
  rad('delvis', 'Stemmer, men med avvik. Skriv avviket i «Om kilden».', 'b');
  rad('sekundær', 'Du fant bare en omtale av kilden, ikke originalen.', 'b');
  rad('ikke funnet', 'Kilden lot seg ikke finne. Det er et nyttig svar.', 'b');
  rad('feil', 'Kilden sier noe annet enn påstanden. Skriv hva den faktisk sier.', 'b');
  rad('', 'Mangler påstanden kilde? Fant du en, lim inn lenken i «Riktig eller ny lenke» og la «Status» stå tom.');
  ws.addRow([]);
  rad('Scoring (ENUVA, 0–3)', 'Hele rammeverket: github.com/Uregulert-KI/uregulert-ki/blob/main/metode/scoring.md', 'h');
  rad('E Evidensstyrke', '0 ingen verifiserbar kilde · 1 enkeltstudie, preprint, anekdote, journalistikk · 2 fagfellevurdert studie eller offisielle data · 3 flere uavhengige fagfellevurderte studier eller offisielle data', 'b');
  rad('N Norsk relevans', '0 ingen · 1 indirekte, overførbar · 2 norsk kontekst omtalt · 3 norske data, saker eller institusjoner', 'b');
  rad('U Uavhengige kilder', '0 · 1 · 2 · 3 eller flere (tell alle kildene påstanden har)', 'b');
  rad('V Verdikobling', '0 ingen · 1 svak · 2 tydelig kobling til én verdi i INN-03 · 3 sentral for en verdi i INN-03', 'b');
  rad('A Aktualitet', 'Er det fortsatt gyldig? 0 utdatert (motbevist, erstattet, loven endret) eller ikke sjekket · 1 usikker gyldighet (feltet har endret seg mye siden, f.eks. studier av eldre KI-modeller) · 2 gyldig, ingen kjent nyere forskning sier noe annet, uansett alder · 3 fersk (gjelder dagens situasjon) eller bekreftet av nyere forskning. Bekreftelsen kan stå i kommentaren.', 'b');
  ws.addRow([]);
  rad('Husk', '', 'h');
  rad('', 'Aldri dikt opp. Tall, datoer og navn tas fra kilden, ikke fra hukommelsen.');
  rad('', 'Skill mellom «viser», «tyder på» og «antyder», og mellom én studie og konsensus. En påstand kan ha riktig kilde og likevel si mer enn kilden gjør.');
  rad('', 'Du kan bruke KI til å finne kilder, oppsummere og peke deg til rett sted i kilden. Men selve sjekken gjør du selv ved å lese originalen. Uten menneskelig verifisering er dugnaden verdiløs.');
  rad('', 'Privatpersoner i privat rolle navngis aldri. Forskere og fagpersoner som uttaler seg offentlig i fagrollen sin, kan navngis.');
  rad('Spørsmål?', KONTAKT, 'b');
}

async function lagPakke(t) {
  const wb = new ExcelJS.Workbook();
  wb.creator = 'Uregulert KI';
  lesMeg(wb.addWorksheet('Les meg'), t);
  const ws = wb.addWorksheet('Sjekk', { views: [{ state: 'frozen', xSplit: 1, ySplit: 1 }] });
  ws.columns = KOLONNER.map(k => ({ key: k.key, header: k.header, width: k.width }));
  const hode = ws.getRow(1);
  hode.height = 32;
  KOLONNER.forEach((k, i) => {
    const c = hode.getCell(i + 1);
    c.fill = k.fyll ? OKER : MORK;
    c.font = { bold: true, color: { argb: 'FFFFFFFF' } };
    c.alignment = { wrapText: true, vertical: 'middle' };
  });
  const kol = key => KOLONNER.findIndex(k => k.key === key) + 1;
  let antallKilder = 0, mangler = 0;
  for (const p of t.pastander) {
    const forste = ws.rowCount + 1;
    const rader = p.kids.length ? p.kids : [null];
    for (const kid of rader) {
      const q = kid && kilder[kid];
      const r = ws.addRow({
        pid: p.id,
        pastand: p.tekst,
        kid: kid || 'mangler',
        kilde: !kid ? 'Ingen kilde ennå. Fant du en? Lim inn lenken i «Riktig eller ny lenke».'
          : q ? kildeTekst(q) : 'Finnes ikke i kilderegisteret – si fra',
        lenke: q && q.url ? { text: q.url, hyperlink: q.url } : '',
        sier: kid ? rapportenSier(t.tekst, kid) || '(Brukes ikke direkte i teksten)' : '',
        idag: q ? [q.status, q.merknad].filter(Boolean).join(' · ') : '',
      });
      if (kid) antallKilder++; else mangler++;
      r.alignment = { wrapText: true, vertical: 'top' };
      KOLONNER.forEach((k, i) => { r.getCell(i + 1).fill = k.fyll ? GUL : GRA; });
      if (q && q.url) r.getCell(kol('lenke')).font = { color: { argb: 'FF1F5FA8' }, underline: true };
      if (kid) r.getCell(kol('status')).dataValidation = liste(KILDESTATUS);
      r.getCell(kol('fagf')).dataValidation = liste(['ja', 'nei', 'preprint']);
      for (const k of 'ENUVA') r.getCell(kol(k)).dataValidation = { ...liste(['0', '1', '2', '3']), showErrorMessage: true };
    }
    // Én score og én kommentar per påstand, også når den har flere kilder
    if (rader.length > 1) for (const key of PER_PASTAND) ws.mergeCells(forste, kol(key), ws.rowCount, kol(key));
  }
  ws.autoFilter = { from: { row: 1, column: 1 }, to: { row: 1, column: KOLONNER.length } };
  fs.mkdirSync(path.join(root, UT), { recursive: true });
  await wb.xlsx.writeFile(path.join(root, UT, `${t.tema}.xlsx`));
  return { antallKilder, mangler };
}

// Fordelingslista: én kolonne per oppgave i første runde. Cellene fylles inn for hånd
// («tatt: kallenavn», «levert», «innlagt») og beholdes når lista lages på nytt.
const OPPGAVER = [
  { key: 'sjekk', header: 'Sjekk (4)' },
  { key: 'mot', header: 'Motevidens (5)' },
  { key: 'fagfolk', header: 'Fagfolk (3)' },
];
function lesFordeling() {
  const f = path.join(root, FORDELING);
  const gammel = {};
  if (!fs.existsSync(f)) return gammel;
  for (const l of fs.readFileSync(f, 'utf8').split('\n')) {
    const m = l.match(/^\| ([A-Z]{3}-\d{2}) /);
    if (!m) continue;
    const c = l.slice(2, -2).split(' | ').map(s => s.trim());
    if (c.length !== 6 + OPPGAVER.length + 2) continue;
    gammel[m[1]] = { celler: c.slice(6, 6 + OPPGAVER.length), merknad: c[6 + OPPGAVER.length] };
  }
  return gammel;
}

function skrivFordeling(rader) {
  const gammel = lesFordeling();
  const linjer = rader.map(r => {
    const g = gammel[r.tema] || { celler: [], merknad: '' };
    const celler = OPPGAVER.map((_, i) => g.celler[i] || 'ledig');
    return { celler, tekst: `| ${r.tema} | ${r.tittel} | ${r.del} | ${r.pastander} | ${r.antallKilder} | ${r.mangler} | ${celler.join(' | ')} | ${g.merknad} | [last ned](sjekkpakker/${r.tema}.xlsx) |` };
  });
  const tellinger = OPPGAVER.map((o, i) => {
    const ant = s => linjer.filter(l => l.celler[i].startsWith(s)).length;
    return `**${o.header}:** ${FORDELINGSSTATUS.map(s => `${s} ${ant(s)}`).join(' · ')}`;
  }).join('  \n');
  const tekst = `# Fordeling av temaer

Her ser du hvilke temaer som er ledige i første runde av dugnaden. Hver oppgave har sin egen kolonne, så samme tema kan være tatt i sjekken og fortsatt ledig for motevidens.

| Oppgave | Hva det er |
|---|---|
| [Sjekk (4)](4-kilde-og-pastandssjekk.md) | Kilde- og påstandssjekk med sjekkpakken (regnearket i siste kolonne) |
| [Motevidens (5)](5-motevidens.md) | Forskning og argumenter som trekker i motsatt retning |
| [Fagfolk (3)](3-fagfolk.md) | Kartlegge og kontakte fagfolk. Avtales særskilt med forfatteren |

## Slik tar du et tema

1. Du får et forslag fra forfatteren på e-post. Vil du heller ha noe annet, finn et tema som er **ledig** i oppgaven du vil gjøre. Velg gjerne et tema du kjenner fra fag eller jobb.
2. Gi beskjed til forfatteren på ${KONTAKT} før du begynner. Da merkes cellen **tatt: kallenavn**, så ingen andre gjør samme jobb.
3. Send inn på e-post eller GitHub når du er ferdig. Da merkes cellen **levert**, og **innlagt** når bidraget er ført inn i rapporten.

Blir du ikke ferdig, si fra, så går temaet videre. «Kallenavn» er det du selv vil stå med: kallenavn eller GitHub-navn, aldri fullt navn uten samtykke, og aldri navn på fagfolk som kontaktes.

${tellinger}
Sist oppdatert ${dato}

| Tema | Tittel | Del | Påstander | Kilder | Mangler kilde | ${OPPGAVER.map(o => o.header).join(' | ')} | Merknad | Sjekkpakke |
|---|---|---|---|---|---|${OPPGAVER.map(() => '---').join('|')}|---|---|
${linjer.map(l => l.tekst).join('\n')}
`;
  fs.writeFileSync(path.join(root, FORDELING), tekst, 'utf8');
}

(async () => {
  const valgte = process.argv.slice(2);
  const rader = [];
  for (const t of temaer) {
    const del = t.mappe.replace(/^\d\d-/, '').replace(/^del-([IV]+)-.*/, 'Del $1').replace('tverrgaende', 'tverrgående')
      .replace(/^./, s => s.toUpperCase());
    let tall;
    if (!valgte.length || valgte.includes(t.tema)) tall = await lagPakke(t);
    else tall = {
      antallKilder: t.pastander.reduce((s, p) => s + p.kids.length, 0),
      mangler: t.pastander.filter(p => !p.kids.length).length,
    };
    rader.push({ tema: t.tema, tittel: t.tittel, del, pastander: t.pastander.length, ...tall });
  }
  skrivFordeling(rader);
  const laget = valgte.length ? valgte.length : rader.length;
  console.log(`${laget} sjekkpakker i ${UT}/, fordelingsliste i ${FORDELING} (${rader.length} temaer).`);
})();
