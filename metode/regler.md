# Regler for arbeidet

Gjelder alle som skriver, leser eller redigerer i prosjektet. Om hva som logges, se §9.

## 1 ID-er og plassering

- ID-er er permanente etiketter. De bestemmer **aldri** hvor noe står i rapporten. Plassering styres kun av hvilken mappe og fil innholdet ligger i.
- **Prefikset viser opprinnelse, ikke plassering.** `OKO-17` betyr «opprettet som tema i Del IV», ikke «står i Del IV». Når et tema flyttes til en annen del, beholder det ID og prefiks, selv om prefikset da peker til en annen del enn der temaet står. Hvor noe står, går fram av mappen, PLAN.md og `id-register.md`. Nummerrekkefølgen trenger heller ikke følge plasseringen, og skal ikke «ryddes».
- Det samme gjelder påstander. Når et tema slås sammen med et annet, beholder påstandene sine ID-er (f.eks. `OKO-17.P03` i TVG-05 sitt register).
- Når et tema flyttes, beholder det sin ID. Flytting logges ikke i innfasingsperioden (se §9).
- En ID gjenbrukes aldri, heller ikke etter at et tema er kuttet. Kuttede temaer står i `id-register.md` med status `forkastet`.
- Nye tema-ID-er tildeles i rekkefølge innenfor prefikset (neste ledige står i `id-register.md`) og omnummereres aldri.
- Utkastfiler heter `<ID>-<kort-navn>.md` og ligger i mappens `utkast/`.
- Alle kryssreferanser i tekst skrives med ID, ikke kapittelnummer: «se [[LIV-03]]».

| Prefiks | Område |
|---|---|
| SAM | Sammendrag |
| INN | Innledning |
| RAM | Analytisk rammeverk |
| REG | Regulering |
| LIV | Del I – livsløpet |
| DEM | Del II – demokrati, offentlighet og kunnskap |
| RET | Del III – rettsstat og forvaltning |
| OKO | Del IV – økonomi, arbeid og solidaritet |
| SIK | Del V – sikkerhet og beredskap |
| TVG | Tverrgående tråder og mønstre |
| MOT | Motargumenter |
| ANB | Anbefalinger |
| VED | Vedlegg |

| ID-type | Format | Merknad |
|---|---|---|
| Tema/underkapittel | LIV-01, LIV-02 … | Tildeles i rekkefølge, aldri omnummerert |
| Påstand | <tema-ID>.P<nn>, f.eks. LIV-01.P03 | Følger temaet hvis det flyttes |
| Kilde | K0001, K0002 … | Kun i 99-kilder |
| Ekspertuttalelse | U001 … | Løpende for hele prosjektet |
| Endring | E001 … | Kun i endringsloggen |
| Ekspert/kontakt | X001 … | Kun i den eksterne kontaktfila |

## 2 Status

Lovlige statuser for temaer: `kandidat`, `ikke startet`, `stikkord`, `utkast`, `utkast-høy-prioritet`, `fagfellelest`, `ferdig`, `forkastet`.

| Status | Betyr |
|---|---|
| kandidat | Idé under vurdering. Beholdes bare hvis temaet får minst 2 inkluderte påstander (se scoring.md). |
| ikke startet | Besluttet tema uten stikkord eller tekst. |
| stikkord | Stikkord og kildeforslag, ingen løpende tekst. |
| utkast | Løpende tekst under arbeid. |
| utkast-høy-prioritet | Besluttet tema som skal prioriteres i skrivingen. |
| fagfellelest | Teksten er lest av minst én fagperson (se §5). |
| ferdig | Klar for publisering. |
| forkastet | Kuttet eller slått sammen. ID-en beholdes i registeret. |

- Status står i metadata-blokken i hver utkastfil, i statustabellen i mappens `PLAN.md` og i `id-register.md`.
- Ved hver statusendring oppdateres README-statustabellen. Statusendringer logges ikke i innfasingsperioden – unntatt `forkastet` (se §9).

## 3 Kilder

- `99-kilder/kilderegister.md` er fasit for all kildeinformasjon: forfattere, tittel, år, utgiver, DOI/URL, kildetype, fagfellevurdert (ja/nei/preprint) og dato lest.
- **Kryssjekk ved hver ny kilde:** En kilde kan legges inn i 99 eller i en mappes `kilder.md` først. Men den skal alltid kryssjekkes mot 99: sjekk at den ikke allerede finnes (dubletter), og at metadataene stemmer. Kilden finnes til slutt alltid i 99 med én K-ID.
- Mappenes `kilder.md` refererer bare til K-ID og hva kilden brukes til. Navn og metadata hentes fra 99.
- `bibliografi.bib` har én oppføring per K-ID, med K-ID-en som nøkkel. `oppdater-tema.js` legger inn en tom oppføring for hver ny K-ID; **de fullstendige oppføringene genereres fra kilderegisteret ved publisering** (verktøy lages da) i stedet for å fylles ut for hånd (2026-10-25).
- Kilder fra disposisjonen er satt opp fra hukommelsen og har status `ikke verifisert` til originalen er funnet og lest.
- **Verifikasjonsnivåer** (kolonnen «Status» i kilderegisteret, fra 2026-10-25): `ikke verifisert` · `verifisert` · `delvis` · `sekundær` · `ikke funnet` · `feil`. Definisjonene står øverst i `99-kilder/kilderegister.md`. Samme nivåer brukes i dugnaden (`metode/dugnad-veiledning.md`).
- **Fjernede og inaktive kilder** flyttes fra kilderegisteret til `99-kilder/fjernede-kilder.md` – verifiserte eller ikke. Status `fjernet` (skal ikke brukes) eller `inaktiv` (ikke funnet, belegger ingen påstand – kan gjenopplives). ID-ene brukes aldri på nytt. Henvisningen tas ut av teksten; står kilden for noe teksten trekker direkte på, merkes stedet «(kilde mangler)».
- Referanseverktøy (Zotero e.l.) brukes fra dag én.
- Merk hver kilde med tema-ID, type (forskning / offentlig / rettsavgjørelse / journalistikk), evidensstyrke og dato lest.
- Primærkilder går foran omtaler av dem.
- Preprints, rapporter og journalistikk skal alltid merkes tydelig som det de er i teksten.
- Filer lagres i `99-kilder/filer/` med K-ID først i filnavnet.

## 4 Påstander og scoring

Alle sentrale påstander registreres i mappens `pastander.md` og scores etter `metode/scoring.md` før de brukes i tekst.

## 5 Fagfellevurdering

- «Fagfellevurdering» i dette prosjektet betyr utelukkende at fagpersoner har lest *rapportens egen tekst*.
- Kvaliteten på eksterne kilder håndteres gjennom evidenskriteriet (E). Preprints, rapporter og journalistikk skal alltid merkes tydelig som det de er i teksten.
- For hver påstand registreres antall fagpersoner som har lest den, og deres rolle (f.eks. «2: skoleforsker, lærer»). Navn registreres ikke her, bare i den eksterne kontaktfila.

## 6 Ekspertuttalelser

- Uttalelser føres i `uttalelser.md` i mappen der de brukes, med U-ID og kontaktens X-ID.
- **Ingen uttalelse brukes i rapporten før samtykke og sitatsjekk er registrert som godkjent.**
- Bare godkjent ordlyd brukes.

## 7 Personopplysninger og kontaktliste

- Kontaktlisten ligger i `../uregulert-ki-kontakter/kontakter.md`, aldri i prosjektmappen, slik at den ikke følger med når arbeidsfiler deles.
- Den inneholder kun offentlig informasjon: navn, rolle, institusjon, fagfelt, offentlig jobbkontakt, kilde til informasjonen og relevante tema-ID-er. Aldri private kontaktopplysninger eller annen personlig informasjon.
- Opplysningene er personopplysninger etter GDPR. Listen holdes minimal og slettes når prosjektet er avsluttet.
- Prosjektfilene refererer bare til X-ID.
- `.gitignore` utelukker `kontakter*` som ekstra sikring.

## 8 Språk

- Norsk der det finnes en god norsk term, engelsk der det ikke finnes en god oversettelse – i tråd med gjeldende akademisk praksis.
- Engelske termer kursiveres første gang de brukes i hvert kapittel.
- Termvalg står i `metode/ordliste.md`. Nye termer føres der før de brukes.

## 9 Endringslogg

**Innfasingsperiode (fra 2026-10-13):** Mens innholdet bygges opp, logges bare det som **fjernes**:

- temaer som kuttes (`fjernet`) eller slås sammen (`sammenslått`)
- påstander som forkastes etter scoring (`forkastet`, med score)

Disse føres i `metode/endringslogg.md` med obligatorisk begrunnelse.

Tillegg, flyttinger, statusendringer og endringer i regler og scoring logges **ikke** i denne perioden. Når innholdet er på plass, teller vi opp alt (temaer, påstander, kilder, status) og slår full logging på igjen. Oppføringene E001–E011 er fra før innfasingsperioden.

## 10 Datering

- Tidssensitive opplysninger merkes «per [dato]» i teksten.
- Alt som må sjekkes før publisering, føres i `metode/dateringsliste.md` med ID-referanse.
