---
id: SIK-03
tittel: KI-agenter og prompt injection
del: Del V – Sikkerhet og beredskap
status: stikkord
risikotype: ikke vurdert
sist_endret: 2026-10-23
---

# SIK-03 KI-agenter og prompt injection

> Påstander: SIK-03.P01–SIK-03.P07 i [pastander.md](../pastander.md). Kilder: [kilder.md](../kilder.md) (K-ID-er slås opp i `99-kilder/kilderegister.md`). Uttalelser: [uttalelser.md](../uttalelser.md).

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

- **Kjerne:** data blir til kommandoer. I vanlig IT er skillet mellom data og instrukser grunnmuren i sikkerheten. En språkmodell leser alt som tekst og kan ikke skille sikkert mellom det brukeren ber om og det som står i e-posten. Når modellen også kan *handle*, blir hvert dokument den leser, en mulig ordre.
- **Avgrensning:** ansattes uautoriserte bruk i [[SIK-02]]; modellene som mål i [[SIK-14]] og [[SIK-12]]; agent mot agent i handel i [[RET-12]]; agentsvermer i [[LIV-17]], avsnitt D.

### A Data blir til kommandoer

- **Indirekte prompt injection:** en skjult instruks i en nettside, e-post eller et dokument overtar agenten som leser det [K0179] [K0180].
- **Uløst:** leverandørene sier selv at problemet kan reduseres, ikke fjernes. Anthropic oppga i 2025 at nettleseragenten deres fortsatt ble lurt i om lag ett av ti angrepsforsøk etter mottiltak [K1118] (sjekk tallene).

### B Den dødelige trekanten

- **Tre egenskaper som til sammen gir faren:** tilgang til private data, innhold fra utenforstående og mulighet til å sende data ut [K1119] (sjekk). Har en agent alle tre, kan hvem som helst som får sendt den en tekst, få den til å lekke.
- **De fleste nyttige agenter har nettopp alle tre.**

### C Den lojale ansatte blir angrepsvei

- **Ingen gjør noe galt:** den ansatte ber bare assistenten oppsummere innboksen. EchoLeak (2025) var en null-klikk-sårbarhet i Microsoft 365 Copilot: én e-post kunne få assistenten til å lekke data uten at brukeren klikket på noe [K1120] (sjekk).
- **Uklart ansvar:** verken den ansatte, leverandøren eller avsenderen «gjorde» lekkasjen alene.

### D Kode ingen har lest

- **Vibe-koding:** KI-generert kode settes i drift uten gjennomgang ([[OKO-16]]).
- **Oppdiktede pakker:** modeller finner opp pakkenavn som ikke finnes, og angripere registrerer navnene med skadelig kode – *slopsquatting* [K1121] (sjekk).
- **Verktøyene selv:** tillegg og koblinger agentene bruker (f.eks. MCP-servere), kan bære skjulte instrukser.

### E Norsk forankring

- **Offentlig sektor** tar i bruk assistenter med tilgang til e-post og dokumenter ([[SIK-02]], avsnitt E).
- **NSM** har pekt på KI-agenter i risikobildet [K0176] (sjekk).
- **Ingen kjent norsk hendelse ennå** – som også kan bety at vi ikke vet om den.

### F Reguleringshull

- **KI-forordningen** krever robusthet for høyrisikosystemer [K0001], men en e-postassistent er sjelden høyrisiko.
- **Produktansvaret** er uavklart for programvare som oppfører seg ulikt etter hva den leser.
- **Ingen meldeplikt** for prompt injection-hendelser utenfor NIS2 og ekomloven (sjekk).

### G Kandidater til [[ANB-01]]

- **Bryt trekanten:** offentlige agenter skal ikke samtidig ha tilgang til sensitive data, lese innhold utenfra og kunne sende data ut.
- **Menneskelig godkjenning** før agenten handler utad – sender, betaler eller sletter.
- **Krav om gjennomgang** av KI-generert kode i offentlige systemer.
- **Meldeplikt** for hendelser med KI-agenter.

### H Nyanse

- **Mottiltakene blir bedre** – isolering, tilgangsstyring, godkjenning – og mange bruksområder er lavrisiko. Faren ligger i kombinasjonen av tilgang og handling, ikke i agenten i seg selv.
