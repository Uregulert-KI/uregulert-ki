---
id: REG-03
tittel: Prinsipper for god regulering
del: Kap. 4 – Reguleringslandskapet og hullene
status: kandidat
risikotype: ikke relevant
sist_endret: 2026-10-18
---

# REG-03 Prinsipper for god regulering

## Stikkord og materiale

*Utvidet 2026-10-13 etter gjennomgang: avsnitt A–D, F og bærebjelken er lagt til. ISO-stoffet er flyttet hit fra [[REG-01]]. Det opprinnelige materialet fra hullanalysen står ordrett i avsnitt E. «Sjekk» betyr at detaljer må bekreftes.*

- **Kjerne:** Rapporten argumenterer for *mer* regulering. Vi står i et teknologisk skifte uten sidestykke siden den industrielle revolusjon. Nettopp derfor må reguleringen utformes slik at den ikke skader verdiene den skal beskytte. Dette er et argument for *god* regulering, ikke mot regulering.
- **Bærebjelke:** KI er en særegen teknologi og kan ikke reguleres som vanlige deterministiske systemer. Det er vrient å regulere statistiske utfallsrom. Men vi regulerer allerede statistiske utfall – legemidler og luftfart. Lærdommen derfra er ikke at KI er umulig å regulere, men at det krever en annen *type* regulering enn vanlig produktregulering.

### A Hvorfor KI er særegen å regulere

1. **Statistisk, ikke deterministisk.** Samme spørsmål kan gi ulike svar. Om et system er «riktig», er en fordeling, ikke en egenskap. Man kan aldri sertifisere at «systemet gjør X», bare at «systemet gjør X i p % av de testede tilfellene, under forholdene Y». Testing dekker et endelig utvalg av et uendelig utfallsrom, og feilene sitter i halen [K0298] [K0012].
2. **Generelt formål.** Den samme modellen brukes til lekser og til medisinske råd. Risikoen ligger i bruken, ikke i teknologien. Derfor bygger KI-forordningen på bruksområder [K0001] – men de store modellene bryter med den logikken.
3. **Det som testes, er ikke det som tas i bruk.** Finjustering, systeminstrukser, verktøy og agentoppsett endrer atferden etter evalueringen ([[SIK-03]], [[SIK-19]]).
4. **Systemene endrer seg mens de er i bruk.** Leverandøren oppdaterer modellen uten å varsle. En bil typegodkjennes én gang; en KI-modell som var godkjent i mars, kan være en annen modell i mai.
5. **Lite forklarbart.** Begrunnelsesplikten i forvaltningsretten forutsetter at noen kan forklare hvorfor beslutningen ble som den ble ([[RET-02]]).
6. **Ytelsen avhenger av sammenhengen.** Den varierer med befolkningsgruppe og språk ([[DEM-16]], [[RET-03]]).
7. **Kunnskapen er skjevt fordelt.** Bare leverandøren har full tilgang til modellen ([[REG-02]], gruppe 7).

### B Lærdom fra sektorer som allerede regulerer statistiske utfall

- **Legemidler:** godkjenning i faser, overvåking etter at produktet er på markedet (legemiddelovervåking) og plikt til å rapportere bivirkninger [K0331]. Utfallene er statistiske, men reguleringen virker.
- **Luftfart:** sertifisering med sannsynlighetsmål for katastrofale feil [K0332] (sjekk tallene), og obligatorisk, ikke-straffende hendelsesrapportering [K0333].
- **Forskjellen:** et legemiddel er det samme stoffet hele tiden og har ett bruksområde. KI har generelt formål og endrer seg. Modellen må derfor tilpasses, ikke kopieres.

### C Prinsipper for god KI-regulering

1. **Reguler utfall og bruk, ikke bare produktet.** Diskriminering er forbudt uansett teknologi. Knytt kravene til konsekvensene i bruken.
2. **Kontinuerlig tilsyn i stedet for engangsgodkjenning.** Overvåking etter lansering (KI-forordningen har dette for høyrisiko [K0001], sjekk artikkel), ny vurdering ved oppdatering, og hendelsesrapportering ([[ANB-01]]).
3. **Akseptabel feilrate må bestemmes politisk, per domene.** En feilrate som er grei for reklame, er uakseptabel for barnevern. Avgjør også *hvem* som bærer feilene. Krev at feilrater rapporteres per gruppe.
4. **Menneskelig kontroll som faktisk virker.** Ikke et menneske som stempler ([[RET-01]], [[SIK-18]]), men et menneske med tid, kompetanse og myndighet til å overstyre.
5. **Innsyn og bevisbyrde.** Logger og tilgang til modellen for tilsyn og for dem som rammes. Vurder om bevisbyrden bør snus.
6. **Rett til en annen vei.** Rett til menneskelig behandling og til et alternativ uten KI – motgiften mot monokultur ([[TVG-06]]) og digitalt utenforskap ([[LIV-10]]).
7. **Proporsjonalitet og minst inngripende tiltak.** Reguleringen må ikke selv svekke rettighetene. Verdikonfliktene i avsnitt E er testtilfellene.
8. **Nøytral på mål, spesifikk på metode.** Klassisk lovgivning skal være teknologinøytral, men kontrollmetodene må være spesifikke for statistiske systemer.
9. **Føre var ved skade som ikke kan reverseres** ([[RAM-02]]).
10. **Regulering som lærer.** Sandkasser [K0023], solnedgangsklausuler og innebygd evaluering – fordi kunnskapen endrer seg raskere enn lovene.
11. **Byrdene må ikke konsentrere markedet.** Kravene må stå i forhold til aktørens størrelse, så ikke bare de største klarer å etterleve dem ([[SIK-19]], [[OKO-16]]).
12. **Demokratisk legitimitet.** Standarder kan være et verktøy, men de kan ikke erstatte lov (avsnitt D).

### D Standarder som reguleringsverktøy

*ISO-stoffet er flyttet hit fra [[REG-01]], som beholder en kort henvisning.*

| Standard | Hva den gjelder | Status |
|---|---|---|
| ISO/IEC 42001 (2023) [K0301] | Styringssystem for KI – kan sertifiseres, slik ISO 27001 kan for informasjonssikkerhet | Publisert, i utbredt bruk |
| ISO/IEC 23894 (2023) [K0302] | Risikostyring for KI | Publisert |
| ISO/IEC 42005 [K0316] | Konsekvensvurdering av KI-systemer | Publisert 2025 (sjekk) |
| ISO/IEC 42006 [K0317] | Krav til dem som sertifiserer mot 42001 | Publisert 2025 (sjekk) |
| ISO/IEC 22989 [K0318] og 23053 [K0319] (2022) | Begreper og rammeverk | Publisert |
| ISO/IEC 38507 (2022) [K0320] | Konsekvenser av KI for virksomhetsstyring | Publisert |
| ISO/IEC 5259-serien [K0321] | Datakvalitet for maskinlæring | Publisert (sjekk) |
| ISO/IEC TR 24027 [K0322] og TR 24368 [K0323] | Skjevhet; etiske og samfunnsmessige spørsmål | Tekniske rapporter, ikke krav |
| ISO/IEC 27090 og 27091 [K0324] | Sikkerhet og personvern for KI | Under utvikling (sjekk) |
| Harmoniserte standarder under KI-forordningen [K0303] | Gir presumpsjon for samsvar med forordningen | Forsinket (sjekk) |

- **Styrker:** felles språk, dokumentasjon, og noe å stille krav om i anskaffelser ([[RET-15]]).
- **Grenser:** standardene handler om prosess, ikke utfall. ISO 42001 sier *hvordan* en virksomhet skal styre KI-risiko, ikke *hvilken* risiko som er akseptabel. Man kan være sertifisert og likevel ta i bruk noe som skader – avstanden mellom etterlevelse og vern.
- **Legitimitet:** standardene skrives med tung industrideltakelse og har ligget bak betalingsmur ([[REG-02]], gruppe 3).
- **Forsinkelsen:** de harmoniserte standardene er ikke ferdige (sjekk). Det er en del av begrunnelsen for omnibus-utsettelsen og styrker poenget om tidsvinduet ([[REG-02]], gruppe 5).
- **Norsk inngang:** Standard Norges speilkomité for KI [K0325] (sjekk navn og nummer). Hvem som sitter der, sier noe om hvem som former reguleringen.

### E Verdikonflikter – når reguleringen selv truer

*Materialet fra hullanalysen, ordrett.*

#### Stikkord

- Aldersverifisering: kan kreve at hele befolkningen identifiserer seg, stenger ute dem uten BankID.
- KI-detektorer i skolen: falske juksbeskyldninger, slår særlig ut mot dem som ikke skriver på morsmålet [K0228].
- Klientsideskanning og overvåking for å stoppe misbruk [K0231].
- Overblokkering og sensur som bivirkning [K0095].
- Etterlevelseskostnader som favoriserer de største aktørene og presser ut små og norske.
- Forbud mot åpne modeller som rammer norske modeller (se [[SIK-19]]).
- Verdikonflikten fra 22. juli-punktet: skal chatboter overvåkes eller melde fra? ([[SIK-16]])
- Formulering: «Slik bør reguleringen utformes» – prinsipper som proporsjonalitet, minst mulig inngripende tiltak, personvern som standard, og tilgang for alle.

#### Norsk forankring og eksempler

- Aldersgrense for sosiale medier og BankID-debatten (2025–2026) [K0229]; Datatilsynets høringssvar (2025) [K0230].
- EUs forslag om skanning av privat kommunikasjon («chat control») [K0231].

#### Kryssreferanser

[[SIK-09]] (statens egen overvåking), [[SIK-16]] (22. juli-punktet), [[SIK-19]] (åpne modeller), [[MOT-01]], [[LIV-02]] (skole).

#### Kilder (ikke verifisert)

- Liang mfl., «GPT detectors are biased against non-native English writers», Patterns (2023) [K0228].
- Regjeringens høringsnotat om aldersgrense og aldersverifisering [K0229].
- Datatilsynets høringssvar om aldersverifisering [K0230].
- Ytringsfrihetskommisjonen, NOU 2022:9 [K0095].

### F Teoretisk forankring

*Kilder fra hukommelsen – sjekkes.*

- **Collingridge-dilemmaet** (Collingridge, 1980) [K0326]: når teknologien er lett å styre, vet vi ikke nok om virkningene; når vi vet nok, er den låst fast. Det er tidsvinduet i [[REG-02]], gruppe 5.
- **«The pacing problem»** (Marchant mfl., 2011) [K0327]: teknologien går raskere enn reguleringen.
- **Responsiv regulering** (Ayres og Braithwaite, 1992) [K0328]: en trapp av virkemidler, fra dialog til sanksjon.
- **«Code is law»** (Lessig, 1999) [K0329]: systemenes design regulerer i praksis atferden.
- **Norsk anker – utredningsinstruksen** (2016) [K0330]: tiltak skal utredes før de innføres. Gjelder både regulering *av* KI og innføring av KI i staten ([[REG-02]], gruppe 1).
