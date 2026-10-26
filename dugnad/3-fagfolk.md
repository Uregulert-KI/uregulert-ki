# Dugnadsoppgave 3: Fagfolk

> **Denne oppgaven kan ikke bare plukkes fra dugnaden.** Den innebærer håndtering av personopplysninger. Den som skal eie oppgaven, må derfor ha snakket direkte med forfatteren først (se [README](../README.md#forfatter-og-kontakt)).
>
> **Vil du anbefale en fagperson, er du selv fagperson, eller kjenner du noen du selv kan få en uttalelse fra?** Ta kontakt med forfatteren direkte, så organiserer vi det sammen.

Rapporten spenner fra barnehage og psykisk helse til forvaltningsrett, kraftsystemet og totalforsvaret. Ingen kan alt dette, og ingen har kontaktnettet alene. Her tar du ansvar for ett eller flere temaer: du finner de riktige fagfolkene, sender ut følere og følger opp til de har gitt en uttalelse, lest et tema eller takket nei.

## Hva du kan bidra med

- **Kartlegging:** hvilke fagpersoner og fagmiljøer bør høres om et tema?
- **Følere:** ta kontakt, fortell kort om rapporten, og spør om de vil bidra.
- **Uttalelser:** et kort, sitérbart utsagn fra en fagperson, for eksempel om hvor alvorlig en fare er, eller hva som bør gjøres.
- **Fagfellevurdering:** en fagperson leser et tema og vurderer påstandene.

## Slik gjør du det

1. **Avtal tema med forfatteren.** Finn temaet (eller undertemaet) i `PLAN.md` i delen, og avtal med forfatteren at du tar det. Temaet merkes som tatt i en issue med bare tema-ID og fagområde, **aldri navn**, så ikke flere kontakter de samme folkene.
2. **Last ned malen og lagre den lokalt:** [`mal-fagfolk-kartlegging.csv`](mal-fagfolk-kartlegging.csv). Den kan åpnes i Excel, LibreOffice eller Google Regneark. Se personvernreglene under.
3. **Fyll inn** én rad per fagperson:

   | Kolonne | Hva |
   |---|---|
   | Tema-ID | Temaet eller undertemaet, f.eks. `RET-15` eller `RET-15 avsnitt C` |
   | Fagperson | Navn |
   | Rolle og institusjon | F.eks. «professor i forvaltningsrett, UiB» |
   | Kontaktinformasjon | Offentlig jobbkontakt (e-post eller telefon på arbeidsgiverens nettside) |
   | Type | Uttalelse / fagfellevurdering / begge |
   | Kontaktet (dato) | Når du sendte føleren |
   | Svar | Ja / nei / venter |
   | Samtykke | Med navn / anonymt / ikke brukt |
   | Sitatsjekk | Sendt / godkjent (dato) |
   | Status | Åpen / lukket |
   | Merknad | Det du trenger å huske |

4. **Send føleren.** Bruk gjerne forslaget under.
5. **Når du har en godkjent uttalelse eller vurdering,** send den på e-post til forfatteren (se [README](../README.md#forfatter-og-kontakt)), med samtykket og den godkjente ordlyden. Forfatteren fører den inn i `uttalelser.md` i delen med egen ID (U001, U002 …), på samme måte som påstandene har sine ID-er. En fagfellevurdering føres i `pastander.md` med **rolle, ikke navn**, f.eks. «1: skoleforsker».

## Forslag til første henvendelse

> Hei! Jeg bidrar i en åpen dugnad om rapporten *Uregulert KI: En trussel mot norske verdier* (arbeidstittel), som samler evidens om hvordan KI kan sette norske verdier under press. Rapporten ligger åpent her: [lenke til repoet]. Temaet **[tema]** ligger nær ditt fagfelt, og vi ville satt stor pris på [en kort uttalelse / at du leser temaet og gir en vurdering]. Det tar trolig [15–30 minutter]. Du bestemmer selv om du vil siteres med navn, anonymt eller ikke i det hele tatt, og du får se sitatet før det brukes. Ta kontakt med meg på [din e-post]. Ved spørsmål om rapporten selv ta gjerne kontakt med forfatteren, Glenn Katrud-Solheim, på glennkatrudsolheim@proton.me.

## Personvern (viktig)

- **Fagfolk-lista er personopplysninger.** Lagre den **lokalt** på din egen maskin. Den skal **aldri** lastes opp, committes eller limes inn i en issue. `.gitignore` stopper filer som heter `fagfolk-kartlegging*`, men ikke stol på det alene.
- Bruk bare **offentlig jobbkontakt**, aldri privat telefon, privat e-post eller annen personlig informasjon.
- Slett lista når arbeidet er ferdig, eller når fagpersonen ber om det.
- **Ingen uttalelse brukes før samtykke og sitatsjekk er godkjent**, og bare godkjent ordlyd brukes. Se [regler §6–7](../metode/regler.md).
- Les også de [felles reglene](../metode/dugnad-veiledning.md#regler).
