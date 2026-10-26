---
id: SIK-14
tittel: KI-modellene som angrepsmål
del: Del V – Sikkerhet og beredskap
status: kandidat
risikotype: ikke vurdert
sist_endret: 2026-10-24
---

# SIK-14 KI-modellene som angrepsmål

> Påstander: SIK-14.P01–SIK-14.P07 i [pastander.md](../pastander.md). Kilder: [kilder.md](../kilder.md) (K-ID-er slås opp i `99-kilder/kilderegister.md`). Uttalelser: [uttalelser.md](../uttalelser.md).

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

*Utvidet 2026-10-24 etter gjennomgang. «Sjekk» betyr at kilden er satt opp fra hukommelsen og at detaljer må bekreftes.*

- **Kjerne:** modellen er både skatten og våpenet. [[SIK-03]] handler om å lure modellen til å gjøre noe. SIK-14 handler om å angripe selve modellen: stjele den, kopiere den, bryte sperrene eller hente ut det den har lært.
- **Avgrensning:** prompt injection i [[SIK-03]]; forgiftning og bakdører i leverandørkjeden i [[SIK-12]]; åpne modeller i [[SIK-19]]; det modellen lagrer om brukerne i [[SIK-01]].

### A Vektene er kronjuvelen

- **Hundrevis av millioner i én fil:** en trent modell er enorme mengder regnekraft samlet i vektene.
- **Ikke sikret mot de sterkeste:** RAND (2024) beskriver nivåer for sikring av modellvekter, og de mest avanserte selskapene var ikke sikret mot de dyktigste statlige aktørene [K0200] (sjekk).
- **Stjålne vekter kan bygges om:** sikkerhetstreningen kan fjernes med begrenset ekstra trening [K1124] (sjekk). Det som slipper ut, er da ikke en modell med sperrer, men en uten.

### B Sperrene er tynne

- **Universelle jailbreaks:** automatisk genererte tekststrenger omgikk sperrene i flere modeller samtidig [K1122] (sjekk).
- **Many-shot jailbreaking:** Anthropic viste i 2024 at mange falske eksempler i én lang prompt kan bryte sperrene [K1123] (sjekk).
- **Poenget:** sikkerheten ligger i treningen, ikke i arkitekturen. Den kan omgås, ikke bare brytes.

### C Kopiering uten innbrudd

- **Destillasjon:** en ny modell trenes på svarene fra en annen – evnene kan kopieres via det offentlige grensesnittet. OpenAI anklaget i 2025 DeepSeek for å ha gjort dette [K1125] (sjekk).
- **Tyveri krever da ikke tilgang** – bare mange spørsmål.

### D Det modellen har lært, kan hentes ut

- **Ordrett treningsdata:** forskere har trukket ut ordrett treningsdata fra språkmodeller, også personopplysninger [K1126] (sjekk).
- **Modellen som lekkasje:** en modell trent på norske journaler, saksmapper eller interne dokumenter kan selv bli en lekkasje ([[SIK-01]], avsnitt C).

### E Statens egne modeller som mål

- **Modellen blir et skjermingsverdig objekt** når staten trener eller finjusterer på egne data – NAV, helse, skatt, og norske språkmodeller ved Nasjonalbiblioteket og universitetene (sjekk).
- **Manipulasjon av beslutninger:** et angrep trenger ikke stjele noe. Det holder å få modellen til å svare litt feil – systematisk.
- **Innsiderisiko:** en tidligere Google-ingeniør ble tiltalt i 2024 for å ha tatt med KI-hemmeligheter til selskaper i Kina [K1127] (sjekk).

### F Reguleringshull

- **KI-forordningen** krever cybersikkerhet for generelle modeller med systemisk risiko (art. 55) [K0001] – men den er ikke gjennomført i norsk rett ennå.
- **Sikkerhetsloven** [K0010] gjelder skjermingsverdige verdier, men det er uavklart om og når en modell regnes som det (sjekk).
- **Ingen krav** til sikring av norske forsknings- og forvaltningsmodeller.

### G Kandidater til [[ANB-01]]

- Modeller trent på sensitive offentlige data klassifiseres som skjermingsverdige.
- Krav om testing mot uttrekk av treningsdata før en modell trent på persondata tas i bruk.
- NSM får ansvar for veiledning om sikring av modeller.
- Statlige modellprosjekter får en egen sikkerhetsvurdering.

### H Nyanse

- **Tyveri betyr mest i toppen:** når åpne modeller ligger nær de beste, betyr tyveri av vekter mest for de aller mest avanserte modellene.
- **Mye av kunnskapen om svakhetene kommer fra selskapene og forskerne selv** – det er åpenhet, ikke bare risiko.
