---
id: RET-03
tittel: Skjevheter og diskriminering
del: Del III – Rettsstat og forvaltning
status: stikkord
risikotype: ikke vurdert
sist_endret: 2026-10-27
---

# RET-03 Skjevheter og diskriminering

> Påstander: RET-03.P01–RET-03.P14 i [pastander.md](../pastander.md). Kilder: [kilder.md](../kilder.md) (K-ID-er slås opp i `99-kilder/kilderegister.md`). Uttalelser: [uttalelser.md](../uttalelser.md).

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

- **Kjerne:** probabilistiske algoritmer fungerer best for den som er akkurat gjennomsnittlig på alt – og dårligere for hvert standardavvik ut fra midten. Bevisproblemet står sentralt: den som rammes, ser det sjelden og kan nesten aldri bevise det.
- **Avgrensning:** ansettelser hører hjemme i [[OKO-01]] (kort omtale i [[LIV-06]]); funksjonsnedsettelse i [[LIV-12]]; dialekt og nynorsk i [[DEM-06]]; samisk og urfolk i [[DEM-16]]; ensretting generelt i [[DEM-01]] og [[DEM-09]]; korrelerte feil i [[RET-02]]. Her eier vi den *rettslige* siden: likhet for loven, og muligheten til å bevise og få rettet skjevheter.

### A Gjennomsnittet vinner – hvert standardavvik koster

- **Mekanismen:** en modell trenes til å gjøre minst mulig feil *i snitt*. De som er få i dataene, teller lite i snittet. Modellen blir derfor best i midten og dårligere ut mot halene.
- **Skjevhetene forsterker hverandre:** i «Gender Shades» var feilraten lavest for lyse menn og høyest for mørke kvinner [K0114].
- **Ingen er gjennomsnittlig på alt:** da det amerikanske flyvåpenet på 1950-tallet målte over 4000 piloter, lå ingen innenfor snittet på alle ti målene [K0834] (sjekk). Alle er «avvikere» et sted.
- **Kobling:** dem utenfor normalfordelingen i [[LIV-12]] [K0516].

### B Datagrunnlag, representasjon og innsyn – hvor står vi?

- **Globalt arbeides det mye med dette:** «datasheets» for datasett [K0835] og «model cards» for modeller [K0836] (sjekk). KI-forordningen art. 10 krever at data for høyrisikosystemer er relevante og representative, og at de undersøkes for skjevheter [K0001].
- **Hvor vi står:** høyrisikosystemer må dokumentere data. De store generelle modellene må bare gi et offentlig *sammendrag* av treningsdataene (art. 53, sjekk). Ingen kan i dag etterprøve hvordan norske grupper, språk og kulturer er representert.
- **Et norsk paradoks:** for å måle skjevhet må man kjenne gruppetilhørighet. Norge registrerer i liten grad etnisitet, og GDPR art. 9 verner slike opplysninger [K0002]. KI-forordningen åpner for å behandle dem for å oppdage skjevhet (art. 10 nr. 5, sjekk).

- **Kjent i 2019:** Tekna skrev at systemer trent på historiske data viderefører skjevheter, og at det «i praksis har vist seg vanskelig å unngå slike skjevheter» selv når man kjenner til faren. Tekna ba om kontrollordninger med sanksjoner [K1240].

### C Bevisproblemet

- **Indirekte diskriminering** skjer via stedfortredervariabler – postnummer, navn, språk, nettleser [K0115].
- **Du ser bare din egen sak.** Diskriminering i et system er statistisk – den synes først i de samlede tallene, som den enkelte ikke har tilgang til.
- **Delt bevisbyrde finnes** i diskrimineringsloven (§ 37, sjekk) [K0116], men man må først ha «grunn til å tro» at man er diskriminert. Uten innsyn kommer man aldri dit.
- **Svart boks og forretningshemmeligheter:** leverandøren kan nekte innsyn ([[RET-10]], [[REG-04]]).
- **EU trakk KI-ansvarsdirektivet i 2025** [K0813] (sjekk) – det skulle blant annet lette bevisbyrden ([[RET-01]]).

### D Staten som diskriminerer – skjønnet forsvinner

- **Fortsettelse av [[RET-02]]:** staten bruker KI – direkte og indirekte – i beslutninger. Er datagrunnlaget skjevt, mister systemet all form for skjønn og drar alle under én kam.
- **Skjønnet finnes for å se enkeltmennesket.** En modell ser gruppen du ligner på – *statistisk diskriminering*: du bedømmes ut fra andre, ikke ut fra deg selv.
- **Toeslagen, Nederland:** dobbelt statsborgerskap ble brukt som risikofaktor [K0628] [K0837] (sjekk). Lignende kritikk av den automatiserte velferdskontrollen i Danmark [K0838] (sjekk).
- **Kobling:** kontrollalgoritmer i [[RET-07]], barnevern i [[RET-06]].

### E Generativ KI – noe nytt

- **Fra klassifisering til språk:** de gamle sakene gjaldt systemer som sorterer mennesker. Språkmodeller kan i tillegg ha *skjulte* fordommer.
- **Dialektfordommer:** språkmodeller koblet talere av afroamerikansk engelsk til negative stereotypier, lavere yrkesstatus og strengere straff i hypotetiske saker – selv når de åpent svarte «nøytralt» [K0737] (sjekk).
- **Diskriminering av språk og kultur:** modellens «normale» er angloamerikansk – norsk kultur blir avviket, og innad i Norge blir Oslo-bokmål normen ([[DEM-06]] [K0219]; [[DEM-16]]). Modellenes verdier ligner mest på amerikanske og vesteuropeiske [K0083].
- **Bildegeneratorer** forsterker stereotypier om yrke, kjønn og hudfarge [K0839] (sjekk).

### F Stille undertrykkelse – «perspektiver» og «små rettelser»

- **Subtilt:** modellen kommer med «andre perspektiver» og forsiktige rettelser på det brukeren sier og mener – i hver samtale, i millioner av samtaler. Meninger og grupper som ikke stemmer med modelleiernes, blir systematisk «rettet på».
- **Det kan hjelpe:** samtaler med en chatbot reduserte konspirasjonstro, og effekten varte [K0064]. For folk med svak virkelighetsforankring kan rettelsene være gode.
- **Det kan skade samfunnet:** samme mekanisme virker på *alle* meninger som avviker fra eierens norm. Du ser ikke hva du ikke fikk høre. Vi er igjen ved ensretting og påvirkning ([[DEM-01]], [[DEM-09]], [[LIV-13]]).
- **Rettslig hull:** likestillings- og diskrimineringsloven verner religion og livssyn, men ikke *politisk syn* – det vernes bare i arbeidslivet (arbeidsmiljøloven § 13-1) [K0161] (sjekk). En modell som systematisk retter på bestemte politiske syn, bryter ingen diskrimineringsregel.

### G «Rettferdig» kan ikke måles på én måte

- **Umulighetsresultatet:** ulike mål på rettferdighet kan ikke oppfylles samtidig når gruppene har ulik grunnrate [K0840] [K0841] (sjekk). COMPAS-saken er eksemplet [K0263] ([[RET-04]]).
- **Ulike mål på «rettferdig» står matematisk i motsetning til hverandre. Noen må velge, og det valget er politisk.**
- **I dag velger leverandøren** – uten at noen vet det.

### H Tilbakekoblingssløyfer

- **Skjeve data gir skjeve beslutninger, som gir nye skjeve data.** Prediktivt politiarbeid sender patruljer dit man allerede har patruljert [K0842] (sjekk; [[RET-04]]).
- **Den generative varianten:** modeller trent på generert innhold mister halene først [K0079] ([[LIV-14]]). Minoritetene forsvinner ut av modellen.

### I Norsk forankring

- Grunnloven § 98 [K0843]; EMK art. 14 [K0844]; likestillings- og diskrimineringsloven [K0116]; LDO [K0115] og Diskrimineringsnemnda; KI-forordningen art. 10 [K0001].

### J Kandidater til [[ANB-01]]

- Skjevhetstesting på norske grupper, språk og dialekter før KI tas i bruk i forvaltningen.
- Rett til innsyn i samlede tall, slik at den delte bevisbyrden kan brukes.
- Tilsyn (LDO eller Datatilsynet) med tilgang til data og modeller.
- Plikt til å opplyse hvilket rettferdighetsmål som er valgt.
- Vurdere om politisk syn bør vernes også utenfor arbeidslivet.

### K Nyanse

- **Mennesker er også skjeve:** saksbehandlere og arbeidsgivere har fordommer, og KI kan brukes til å *avsløre* dem. En modell kan måles og rettes – et menneske er vanskeligere.
- **Men skalaen er en annen:** en skjev saksbehandler rammer noen få; en skjev modell rammer alle ([[RET-02]], avsnitt D).
