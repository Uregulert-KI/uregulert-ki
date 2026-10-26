---
id: SIK-01
tittel: Datainnsamling og personvern
del: Del V – Sikkerhet og beredskap
status: stikkord
risikotype: ikke vurdert
sist_endret: 2026-10-23
---

# SIK-01 Datainnsamling og personvern

> Påstander: SIK-01.P01–SIK-01.P14 i [pastander.md](../pastander.md). Kilder: [kilder.md](../kilder.md) (K-ID-er slås opp i `99-kilder/kilderegister.md`). Uttalelser: [uttalelser.md](../uttalelser.md).

## Fenomen

<!-- Hva skjer, konkret? -->

## Mekanisme

<!-- Hvorfor og hvordan oppstår skaden? -->

## Evidens

<!-- Hva vet vi, og hvor sterk er kunnskapen? Merk evidensstyrke: sterk (flere studier/offisielle data), moderat, svak/tidlig (enkeltstudier, preprint, anekdoter). -->

## Norsk relevans

<!-- Norske tall, saker og institusjoner. Minst ett norsk eksempel eller datapunkt. -->

## Verdi som trues

<!-- Kobling til verdiene i [[INN-03]]. -->

## Reguleringshull

<!-- Hva dekker dagens regelverk ikke? Meld funn inn til [[REG-02]]. -->

## Anbefaling

<!-- Hvem skal gjøre hva? Meld inn til [[ANB-01]]. -->

---

## Stikkord og materiale

*Utvidet 2026-10-23 etter gjennomgang. «Sjekk» betyr at kilden er satt opp fra hukommelsen og at detaljer må bekreftes.*

- **Kjerne:** samtalen er en ny type dataskatt. Folk forteller en chatbot mer enn de noen gang har skrevet i et søkefelt – helse, samliv, tvil og arbeidshemmeligheter. Det som før var spredt, ligger nå samlet i én logg hos et utenlandsk selskap.
- **Avgrensning:** sammenstilling og kartlegging i [[SIK-04]]; statens egen overvåking i [[SIK-09]]; ansatte som bruker uautoriserte verktøy i [[SIK-02]]; KI-logg i forvaltningen i [[RET-10]]; barn i [[LIV-02]], avsnitt J; reidentifisering av registerdata i [[TVG-05]]; prising og profilering i [[OKO-10]].

### A Samtalen som dataskatt

- **Mer enn et søk:** en søkelogg viser hva du lurer på. En samtalelogg viser også hvordan du tenker, hva du er redd for og hva du skjuler.
- **Fra logg til profil:** minnefunksjoner og agenter med tilgang til e-post og kalender gjør loggen til en profil.

### B Fire veier ut av samtalen

- **Trening:** standardvalget kan endres. Anthropic gikk i 2025 over fra ikke å trene på forbrukersamtaler til å trene på dem om brukeren ikke reserverer seg, med fem års lagring for dem som sier ja [K1087].
- **Rettslig pålegg:** en amerikansk domstol påla i mai 2025 OpenAI å bevare alle samtaler, også slettede [K0074]. Pålegget ble opphevet høsten 2025, men det som var bevart, ble liggende [K1088], og selskapet ble pålagt å utlevere 20 millioner samtaler [K1089] (sjekk utfallet). Hvor lenge loggene lagres, avgjøres ikke bare av selskapet.
- **Myndighetstilgang:** CLOUD Act [K0171] og FISA seksjon 702 [K0172] gjelder amerikanske selskaper uansett hvor dataene lagres.
- **Uhell:** en delefunksjon gjorde over 4 500 private samtaler søkbare i Google – med navn, CV-er og fortrolig arbeid – før den ble fjernet i 2025 [K1090].

### C Det som er trent inn, kan dempes – men ikke fjernes

- **Undertrykking er mulig:** det finnes trenings- og justeringsteknikker for å «vekte ut» informasjon, og man kan forsøke å undertrykke det modellen sier om enkeltpersoner [K1096] (sjekk). Feltet er umodent, og det er vanskelig å bevise at informasjonen faktisk er borte.
- **Men du er fortsatt med i grunnlaget:** selv om modellen slutter å gjengi noe, har dataene allerede formet den. Er det mye privatliv i treningsdataene, er privatlivet en del av modellen. Reserverer du deg i dag, gjelder det bare framtidig trening.
- **Retten til sletting** i GDPR art. 17 [K0002] møter dermed en teknisk grense.

### D Overføringsgrunnlaget er skjørt

- Schrems II veltet Privacy Shield i 2020 [K0173]. EU-domstolens underrett opprettholdt det nye rammeverket (DPF) [K0174] i *Latombe*-saken i september 2025, men saken kan ankes [K1091].
- Grunnlaget hviler på amerikanske presidentordrer og tilsynsorganer som kan endres [K1092] (sjekk avskjedigelsene i PCLOB i 2025).

### E Norsk forankring

- Meta begynte i mai 2025 å trene på offentlige innlegg fra Facebook og Instagram. Datatilsynet mente samtykke var mer naturlig enn reservasjon, fikk en strøm av henvendelser, og mange kom ikke gjennom til protestskjemaene [K1093] [K0175].
- **Bare eget innhold:** du kunne protestere på det du selv har lagt ut, ikke på bilder andre har lagt ut av deg.
- Forbrukerrådet klaget inn Meta sammen med noyb [K1094]. Endelig vedtak er ikke funnet (sjekk).

### F Reguleringshull

- **Håndheving i feil tempo:** GDPR gjelder, men håndhevingen tar år, mens treningen skjer på måneder.
- **KI-forordningen** regulerer ikke selve datainnsamlingen.
- **Forbruker eller bedrift:** bedriftsavtaler unntas ofte fra trening, men folk og ansatte vet sjelden hvilken versjon de bruker.

### G Kandidater til [[ANB-01]]

- Trening på samtaler skal kreve samtykke (opt-in), ikke reservasjon.
- Offentlig sektor skal ikke bruke forbrukerversjoner av KI-tjenester.
- Sensitive data skal ligge hos leverandører utenfor tredjelands jurisdiksjon.
- Datatilsynet får ressurser til å håndheve i takt med utviklingen.
- Brukerne får rett til innsyn i om samtalene deres er brukt til trening.

### H Nyanse

- **Lagring har legitime formål:** misbruksdeteksjon, sikkerhet og bevis i straffesaker. Kryptering og lokale modeller finnes allerede.
- **Lokale modeller er her en del av løsningen:** dataene forlater aldri maskinen ([[SIK-19]]).
