---
id: SIK-15
tittel: KI-leverandører i totalforsvaret
del: Del V – Sikkerhet og beredskap
status: kandidat
risikotype: ikke vurdert
sist_endret: 2026-10-27
---

# SIK-15 KI-leverandører i totalforsvaret

> Påstander: SIK-15.P01–SIK-15.P06 i [pastander.md](../pastander.md). Kilder: [kilder.md](../kilder.md) (K-ID-er slås opp i `99-kilder/kilderegister.md`). Uttalelser: [uttalelser.md](../uttalelser.md).

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

*Utvidet 2026-10-25 etter gjennomgang. «Sjekk» betyr at kilden er satt opp fra hukommelsen og at detaljer må bekreftes.*

- **Kjerne:** KI-leverandørene er de nye kritiske leverandørene – og vi er i ferd med å gjøre samme feil som med skyen. Kraft og tele har beredskapsplikt; KI-leverandørene har ingen. Skyen viser hvordan det går når bruken kommer først og kontrollen etterpå.
- **Avgrensning:** avhengighet og manuell reserve i [[SIK-07]]; bryteren hos leverandøren i [[SIK-17]], avsnitt D; anskaffelser og innlåsing i [[RET-15]]; suverenitet i [[OKO-02]]; selskapene i krig i [[SIK-06]], avsnitt E.

### A De nye kritiske leverandørene har ingen plikter

- **Kraft og tele har plikter:** kraft og tele har beredskapsplikter, og virksomheter av betydning for grunnleggende nasjonale funksjoner er underlagt sikkerhetsloven [K0010] (sjekk).
- **KI-leverandørene har ingen:** etater, helse, kommuner og Forsvaret tar i bruk KI-tjenester fra leverandører uten tilsvarende plikter – nesten alle utenlandske ([[SIK-07]]).

### B Lærdommen fra skyen – slik gikk det

- **Bruken kom først:** offentlig sektor og Forsvaret tok i bruk kommersielle, utenlandske skytjenester fordi de var gode og tilgjengelige.
- **Den nasjonale løsningen ble utredet, ikke besluttet:** Nasjonal sky har vært utredet siden 2021; den statlige delen ble valgt bort, og i april 2026 ble prosjektet satt på pause igjen [K1164].
- **Når alternativet ikke finnes, velges det ikke:** da Forsvaret valgte skyløsning, ble en nasjonal sky ikke vurdert – fordi den ikke fantes [K1165].
- **Advarselen kom etterpå:** i 2026 advarer NSM mot konsentrasjonsrisiko og anbefaler reserveløsninger – når avhengigheten allerede er etablert [K1163].

### C Slik kan vi gå i samme fella med KI

- **Samme leverandører:** KI-tjenestene kommer fra de samme få selskapene og legges oppå den samme skyen. Avhengigheten dobles – den byttes ikke ut.
- **Innlåsingen ligger i plattformen, ikke i modellen:** å bytte selve modellen er ofte teknisk enkelt – arbeidsflyter bygges gjerne rundt modellene, ikke inn i dem, og mange verktøy kan bruke flere modeller om hverandre. Innlåsingen ligger heller i at KI-en bakes inn i kontorpakken, skyen og identitetsløsningen hos samme leverandør ([[RET-15]], avsnitt C). Og i kritiske funksjoner må alt testes på nytt ved bytte, fordi en ny modell oppfører seg annerledes ([[SIK-18]], avsnitt B).
- **Raskere tempo:** skyen tok et tiår. KI tas i bruk på et par år – ofte nedenfra og uten innkjøp ([[SIK-02]]).
- **Mer enn infrastruktur:** skyen lagrer dataene våre. KI former også *vurderingene* våre – med leverandørens verdier og feil innebygd ([[DEM-01]], [[RET-02]]).
- **Samme utsettelse:** utreder vi en nasjonal eller nordisk KI-kapasitet like lenge som skyen, finnes den ikke når den trengs ([[REG-02]], tidsvinduet).

### D Utenlandske leverandører med egne lojaliteter

- **Jurisdiksjon:** amerikanske leverandører er underlagt amerikansk lov, også i krise [K0171] ([[SIK-01]]).
- **Private beslutninger i krig:** Starlinks eier begrenset bruken av systemet i Ukraina-krigen av egne grunner [K1166] (sjekk) – det viser hva det betyr når kritisk kapasitet eies av en privat aktør i et annet land.
- **Egne bånd til forsvaret:** de store KI-selskapene samarbeider med det amerikanske forsvaret ([[SIK-06]], avsnitt E). Ikke nødvendigvis et problem for en alliert – men Norges interesser er ikke deres første prioritet.

- **Finansnæringen ser det samme:** foretakene frykter at avhengighet av leverandører under andre staters lover kan gi pålegg om datautlevering eller avbrudd «som ikke er forenlige med norske regulatoriske krav eller samfunnsinteresser» [K0262].
- **Kravene må gå nedover i kjeden:** NSM ber virksomheter stille krav også til underleverandører [K1201], og Finanstilsynet fant mangler i oppfølgingen av underleverandører [K0262].
- **Skytjenestene:** NSM skriver at bruk av noen få utenlandske skytjenester «svekker virksomhetenes evne til å sikre dataens konfidensialitet, integritet og tilgjengelighet» [K1216].

### E Reguleringshull

- **Ingen beredskapsplikt** for KI-leverandører.
- **Standardvilkår:** tjenestene kjøpes på leverandørens standardvilkår ([[RET-15]]).

### F Kandidater til [[ANB-01]] – ikke gjenta skyen

- **Bestem tidlig, før innlåsingen:** beredskapskrav til KI-leverandører i grunnleggende nasjonale funksjoner nå – ikke etter ti år.
- **NSMs råd fra første dag:** reserveløsning, plan for leverandørbytte og spredning som krav når KI tas i bruk – ikke som anbefaling i etterkant.
- **Beredskapsklausuler** i alle offentlige KI-avtaler: prioritet i krise, varsel før endringer, rett til å flytte – og KI som ikke er låst til én plattform.
- **Nordisk eller europeisk KI-kapasitet** for kritiske funksjoner – besluttet, ikke bare utredet.
- **Manuell reserve:** leverandørplikter erstatter den ikke ([[SIK-07]], avsnitt C).

### G Nyanse

- **De store leverandørene er ofte sikrere og bedre** enn det vi får til selv – NSM sier selv at dette handler om konsentrasjon, ikke mistillit.
- **Nasjonale løsninger er dyre og trege.** Avveiningen er reell – men den bør tas med åpne øyne, ikke ved å la være å bestemme seg.
