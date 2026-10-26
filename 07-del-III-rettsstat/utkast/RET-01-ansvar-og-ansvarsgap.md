---
id: RET-01
tittel: Ansvar og ansvarsgap
del: Del III – Rettsstat og forvaltning
status: stikkord
risikotype: ikke vurdert
sist_endret: 2026-10-19
---

# RET-01 Ansvar og ansvarsgap

> Påstander: RET-01.P01–RET-01.P14 i [pastander.md](../pastander.md). Kilder: [kilder.md](../kilder.md) (K-ID-er slås opp i `99-kilder/kilderegister.md`). Uttalelser: [uttalelser.md](../uttalelser.md).

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

- **Kjerne:** GDPR har allerede egne regler for automatiserte avgjørelser om personer (art. 22) [K0002], og KI-forordningen har tatt etter med krav om menneskelig kontroll og rett til forklaring [K0811] (sjekk) – detaljene står i [[RET-02]]. Det som gjenstår, er **ansvar i ulike sektorer**. Det holder ikke med en unnskyldning når et system har lekket persondata, krasjet økonomien eller drept noen. Her kan vi ta inspirasjon fra legemiddelindustrien og reguleringen av den.
- **Avgrensning:** automatiserte vedtak og begrunnelsesplikt står i [[RET-02]]; det som ikke kan etterprøves i [[REG-04]]. Her: hvem som står ansvarlig når det går galt – og hva som skjer når ingen gjør det.

### A Ansvarsgapet – og hvorfor «systemet gjorde det» ikke holder

- **Teorien:** når en maskin lærer og handler selv, har ingen full kontroll – og ingen får fullt ansvar (Matthias) [K0105]. Ansvarsgapet har flere former [K0106].
- **«Moralsk knautsone»:** den som står nærmest maskinen – sikkerhetssjåføren, saksbehandleren – får skylden, mens systemet og produsenten går fri [K0812]. Da blir «menneske i løkka» et gummistempel.
- **EU trakk forslaget til eget direktiv om KI-ansvar** [K0813] (sjekk). Det nye produktansvarsdirektivet regner programvare og KI som produkter [K0109] (sjekk frist og norsk gjennomføring). Gapet er delvis tettet, ikke lukket.

### B Kartlegging – hvor ansvaret kan komme opp

| Område | Eksempel på skade | Ansvarsspørsmålet | Regelverk og presedens |
|---|---|---|---|
| **Helse** | feil diagnose, undertriagering | produsenten, sykehuset eller legen? | pasientskadeloven [K0827]; helsepersonelloven [K0212]; MDR [K0288] ([[RET-05]]) |
| **Finans** | kreditt nektet feil, algoritmisk krakk | banken, leverandøren eller modellen? | finansavtaleloven [K0146]; «flash crash» 2010 [K0814] ([[OKO-09]]) |
| **Transport** | selvkjørende bil dreper en fotgjenger | produsenten eller sjåføren? | **bilansvarsloven har objektivt ansvar** [K0815] – en modell; Uber-ulykken 2018, der sikkerhetssjåføren ble tiltalt [K0816]; Tesla-dom 2025 [K0817] |
| **Offentlig forvaltning** | ulovlige krav, feil vedtak | staten eller leverandøren? | ny forvaltningslov [K0111]; Robodebt i Australia [K0110]; toeslagen ([[LIV-01]], [[RET-07]]) |
| **Arbeidsliv** | diskriminerende rekruttering, algoritmisk ledelse | arbeidsgiveren eller verktøyet? | likestillings- og diskrimineringsloven [K0116] ([[OKO-07]]) |
| **Justis** | oppdiktede dommer, ærekrenkende KI-svar | advokaten, selskapet eller modellen? | Mata mot Avianca [K0103]; Holmen-saken [K0099] |
| **Forbruker** | chatboten lover noe selskapet ikke vil holde | selskapet | Moffatt mot Air Canada: selskapet er ansvarlig for chatboten [K0102] |
| **Barn og sårbare** | chatbot medvirker til selvmord | produsenten? Er svaret et *produkt* eller en *ytring*? | Garcia mot Character.AI [K0044] [K0818]; Raine [K0045] |
| **Personvern** | ansatte legger fortrolige data i en chatbot | arbeidsgiveren eller leverandøren? | GDPR art. 82 om erstatning [K0002]; Samsung 2023 [K0819] ([[SIK-02]]) |
| **Kritisk infrastruktur** | én feilaktig oppdatering slår ut tjenester verden over | leverandøren – men kontrakten begrenser ansvaret | CrowdStrike 2024 [K0820] ([[SIK-17]], [[SIK-18]]) |
| **Styret og ledelsen** | styret lener seg på KI det ikke forstår | styret | aksjeloven [K0107]; «KI-vasking» [K0821] |
| **Militær** | autonome våpen | befal, stat eller produsent? | [[SIK-06]] |
| **Leverandørkjeden** | en åpen modell finjusteres til skade | den som laget modellen, eller den som tok den i bruk? | [[RAM-02]]; [[SIK-19]] |

### C Inspirasjon fra legemiddelreguleringen

| Legemidler [K0822] | KI i dag | Mulig overføring |
|---|---|---|
| Godkjenning før markedet, med kliniske forsøk i faser | høyrisiko-KI vurderes i stor grad av leverandøren selv [K0825] (sjekk) | uavhengig godkjenning for høyrisiko-KI |
| Bivirkningsovervåking og meldeplikt | overvåking og rapportering av alvorlige hendelser for høyrisiko [K0824] | plikt til å melde «bivirkninger» for alle utbredte modeller |
| Objektivt ansvar og felles forsikring [K0823] | uklart – avhenger av å bevise skyld | **egen erstatningsordning for KI-skader** |
| Pakningsvedlegg med kontraindikasjoner | modellkort, frivillig | pålagte bruksbegrensninger |
| Tilbaketrekking fra markedet | sjelden | plikt til tilbaketrekking |
| Uavhengig myndighet (DMP, EMA) | norsk KI-tilsyn under etablering [K0826] (sjekk) | tilsyn med reelle virkemidler ([[RET-14]]) |

- **To norske modeller i tillegg:**
  - **Norsk pasientskadeerstatning (NPE):** pasienter får erstatning uten å bevise skyld [K0827]. En «NPE for KI» kan gi erstatning uten at den skadde må bevise noe i en svart boks.
  - **Statens havarikommisjon:** granskning uten skyldfordeling, slik at alle lærer [K0828]. En **havarikommisjon for KI-hendelser** er en sterk kandidat til [[ANB-01]].

### D Nyanse

- Ansvarsregler må ikke bli så strenge at nyttig KI aldri tas i bruk – f.eks. i helse. Legemiddelmodellen viser at strenge krav og innovasjon kan leve sammen.
