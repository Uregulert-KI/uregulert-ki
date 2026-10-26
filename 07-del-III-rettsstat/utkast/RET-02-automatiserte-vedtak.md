---
id: RET-02
tittel: Automatiserte og KI-assisterte vedtak
del: Del III – Rettsstat og forvaltning
status: stikkord
risikotype: ikke vurdert
sist_endret: 2026-10-20
---

# RET-02 Automatiserte og KI-assisterte vedtak

> Påstander: RET-02.P01–RET-02.P10 i [pastander.md](../pastander.md). Kilder: [kilder.md](../kilder.md) (K-ID-er slås opp i `99-kilder/kilderegister.md`). Uttalelser: [uttalelser.md](../uttalelser.md).

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

*Utvidet 2026-10-19 etter gjennomgang. «Sjekk» betyr at kilden er satt opp fra hukommelsen og at detaljer må bekreftes.*

- **Kjerne:** nyanse – det gjelder ikke lenger bare *automatiserte* vedtak, men også faren for påvirkning ved **KI-assisterte** vedtak: saksbehandlere som bruker KI som sparringspartner. Påvirkningen generelt står flere steder i rapporten ([[DEM-15]], avsnitt B; [[DEM-10]], avsnitt F; [[LIV-13]]) – her eier vi den *rettslige* siden: vedtaket, begrunnelsen og rettssikkerheten.
- **Kort sagt:** et vedtak der KI har vært sparringspartner, er formelt menneskelig – og faller derfor utenfor de fleste reglene.
- **Avgrensning:** ansvaret når det går galt står i [[RET-01]]; innsyn og arkiv i [[RET-10]]; kontrollalgoritmer i [[RET-07]].

### A Fra automatisert til assistert – en glideskala

- **Helautomatisert:** systemet treffer vedtaket.
- **Beslutningsstøtte:** systemet foreslår, saksbehandleren godkjenner.
- **Sparringspartner:** saksbehandleren bruker en generell chatbot til å tenke høyt, formulere seg eller sjekke kilder.
- **Skygge-KI:** ansatte bruker KI uten avtale og uten at noen vet det ([[SIK-02]]).
- **Poeng:** jo lenger ned på skalaen, desto mindre synlig er påvirkningen – og desto mindre regulert.

### B Det juridiske hullet

- **GDPR art. 22** gjelder bare avgjørelser som er «utelukkende automatiserte» [K0002]. EU-domstolen utvidet dette i SCHUFA-dommen: en automatisert score med *avgjørende* rolle kan også være omfattet [K0829] (sjekk). En chatbot som «bare» gir råd, faller trolig utenfor.
- **KI-forordningen** regner systemer som avgjør tilgang til offentlige tjenester og ytelser, som høyrisiko [K0830] (sjekk) – men en generell chatbot som saksbehandleren bruker på eget initiativ, er ikke et høyrisikosystem. Rett til forklaring og menneskelig kontroll: [[RET-01]].
- **Forvaltningsloven** krever forsvarlig saksbehandling og begrunnelse [K0015], men sier ingenting om å opplyse om KI-bistand. Ny forvaltningslov har regler om *automatiserte* avgjørelser [K0111] (sjekk om assistert bruk er omtalt).

### C Påvirkningen – hvorfor assistanse ikke er nøytral

- **Forankring:** det første forslaget man ser, trekker vurderingen mot seg [K0831].
- **Feil forslag gjør fagfolk dårligere:** radiologer som fikk *feil* KI-forslag, ble mindre treffsikre – de uerfarne mest [K0832] (sjekk).
- **Automatiseringsbias** [K0122] og svekkede ferdigheter over tid ([[DEM-15]], avsnitt B).
- **«Menneske i løkka» som gummistempel:** saksbehandleren står formelt ansvarlig, men maskinen har formet vurderingen ([[RET-01]], avsnitt A – moralsk knautsone).
- **Verdiene følger med:** modellens standardsvar og vinklinger kommer inn i forvaltningens skjønn ([[DEM-01]]; [[DEM-10]], avsnitt F).

### D Skalering – feil som rammer tusenvis

- **Samme modell, samme feil:** når tusenvis av saksbehandlere bruker samme modell, blir feilene *korrelerte* – en felles feilårsak, ikke tilfeldig støy ([[TVG-06]]; [[LIV-15]], avsnitt D).
- **Systemfeil har rammet mange før:** toeslagenaffæren (regjeringen gikk av), Robodebt [K0110], og trygdeskandalen i NAV i 2019 [K0833] – uten KI, men med samme mekanisme.

### E Begrunnelse og innsyn

- Hvis KI har formet begrunnelsen, bør vedtaket si det.
- Spørsmål og svar fra KI i saksbehandlingen kan være dokumenter som skal arkiveres og kan kreves innsyn i ([[RET-10]]). Uten logging kan ingen etterprøve hva som påvirket vedtaket ([[REG-04]]).

### F Norsk forankring

- Forvaltningsloven [K0015] og ny forvaltningslov [K0111]; Sivilombudet om automatisering [K0112]; Digdirs veiledning [K0024] og råd om KI i staten [K0178]; NAVs prosjekt i Datatilsynets sandkasse [K0023].

### G Kandidater til [[ANB-01]]

- Plikt til å opplyse når KI har bistått i vedtak om enkeltpersoner.
- Logging av KI-bruk i saksbehandling.
- Forbud mot generelle chatboter i vedtak om enkeltpersoner uten godkjent løsning.
- Stikkprøver og revisjon; opplæring i automatiseringsbias.

### H Nyanse

- KI-assistanse kan gi likere behandling, raskere svar og kortere køer, og fange feil mennesker overser. *Supplement, ikke erstatning* – skjønnet skal være saksbehandlerens eget.
