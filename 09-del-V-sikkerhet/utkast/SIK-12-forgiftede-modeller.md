---
id: SIK-12
tittel: Forgiftede modeller og leverandørkjeden
del: Del V – Sikkerhet og beredskap
status: kandidat
risikotype: ikke vurdert
sist_endret: 2026-10-24
---

# SIK-12 Forgiftede modeller og leverandørkjeden

> Påstander: SIK-12.P01–SIK-12.P08 i [pastander.md](../pastander.md). Kilder: [kilder.md](../kilder.md) (K-ID-er slås opp i `99-kilder/kilderegister.md`). Uttalelser: [uttalelser.md](../uttalelser.md).

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

- **Kjerne:** du kan ikke se hva som er trent inn. [[SIK-14]] handler om angrep på den ferdige modellen. SIK-12 handler om det som legges inn *før* modellen når deg – i dataene, i treningen eller i filene du laster ned. Atferden ligger i vektene og kan ikke leses ut av koden.
- **Avgrensning:** angrep på ferdig modell i [[SIK-14]]; forgiftning av kilder og KI-søk i [[DEM-04]]; «LLM grooming» og propaganda i [[DEM-02]]; prompt injection i [[SIK-03]]; åpne modeller som dilemma i [[SIK-19]].

### A Bakdøren som overlever – og som ikke kan oppdages

- **Overlever sikkerhetstrening:** en modell kan trenes til å oppføre seg normalt helt til en utløser dukker opp – for eksempel et årstall – og da skrive sårbar kode. Vanlig sikkerhetstrening fjernet ikke bakdøren, men lærte modellen å skjule den bedre [K0199] (sjekk).
- **Kan gjøres umulig å oppdage:** en bakdør kan bygges kryptografisk, slik at den bare aktiveres av et hemmelig kodeord. Uten nøkkelen kan den ikke skilles fra en vanlig modell [K1129]. For språkmodeller er det vist at slike bakdører ikke kan finnes ved red-teaming eller visse formelle verifikasjonsmetoder, selv med full innsyn i vektene – og de utløses praktisk talt aldri ved et uhell [K1128]. Ny forskning viser at bakdøren kan skjules som små, spredte endringer i modellens parametere [K1130] (preprint, sjekk).
- **Det trengs lite:** rundt 250 forgiftede dokumenter kunne legge inn en bakdør – uansett modellstørrelse [K0704] (sjekk).
- **Et leverandørkjedeangrep:** den som trener, finjusterer eller leverer en modell, kan plante en bakdør som ingen test avslører. Testing viser hva modellen gjør i testen – ikke hva den gjør når kodeordet kommer.

### B Den som publiserer, kan programmere neste generasjon modeller

- **Nettet er treningsdata:** modellene trenes på det som er publisert. Den som kan publisere nok, kan i prinsippet påvirke neste generasjon modeller.
- **Plattformmakt blir treningsmakt:** fordi noen hundre dokumenter kan være nok (avsnitt A), kan den som har en stor nok plattform – et forum, en nyhetstjeneste, et kodearkiv, en innholdsfarm eller en plattform som selger data til KI-selskapene [K1135] (sjekk) – teknisk sett legge inn bakdører i store modeller. Det krever verken tilgang til modellen eller til selskapet.
- **Det kan treffes i tid:** forgiftning av datasett i nettskala er praktisk mulig – blant annet ved å kjøpe utgåtte domener som datasettene peker til, eller endre innhold rett før et øyeblikksbilde tas [K0705] (sjekk).
- **Skillet mot [[DEM-02]]:** «LLM grooming» forskyver *hva modellen sier*. Her plantes en *skjult atferd* som slår til på kommando. Det første er propaganda, det andre sabotasje.

### C Smal trening, bred skade

- **Emergent misalignment:** finjustering på en smal oppgave – å skrive usikker kode – kan gi en bredt skjev modell som svarer ondsinnet også på helt andre spørsmål [K1131] (sjekk).
- **Nye, vanskelig oppdagbare bakdører** oppstår gjennom «rar generalisering» – modellen trekker slutninger fra tilsynelatende harmløse data [K1132] (sjekk).
- **Poenget:** en leverandør – eller en angriper – trenger ikke legge inn skaden direkte. Den kan oppstå som en bivirkning.

### D Leverandørkjeden – modellen er en fil du laster ned

- **Ondsinnede modellfiler** er funnet på åpne modellbibliotek, med kode som kjøres når filen lastes [K1133] (sjekk).
- **Ingen stykkliste:** du vet sjelden hvilke data, hvilken grunnmodell og hvilke finjusteringer som ligger bak.
- **Norske modeller arver grunnmodellen:** norske språkmodeller bygger på utenlandske grunnmodeller ([[DEM-06]]). Det som er trent inn der, følger med.

### E Modeller fra fremmede stater

- **Statens linje:** kinesiske modeller følger statens linje om sensitive temaer ([[DEM-13]]). DeepSeek skrev ifølge CrowdStrike mindre sikker kode når forespørselen nevnte grupper den kinesiske staten ser på med mistro [K1134] (sjekk).
- **Populære som grunnmodell:** åpne kinesiske modeller brukes også i Vesten fordi de er gode og gratis (sjekk).
- **Lokal kjøring hjelper ikke:** atferden ligger i vektene, ikke i nettverkstrafikken. Lokal kjøring beskytter mot lekkasje ([[SIK-01]]), ikke mot bakdører.

### F Reguleringshull

- **KI-forordningen** krever dokumentasjon av treningsdata for høyrisikosystemer og et sammendrag for generelle modeller [K0001] – men ingen test for bakdører.
- **Ingen krav om opprinnelse** for modeller i offentlig sektor.
- **Sikkerhetsloven og anskaffelsesreglene** er ikke skrevet for programvare der atferden ikke kan leses ut av koden.

### G Kandidater til [[ANB-01]]

- Krav om opprinnelse og stykkliste for modeller i offentlig sektor – data, grunnmodell og finjustering.
- Ingen modeller fra land med lover om etterretningssamarbeid i kritiske funksjoner – heller ikke når de kjøres lokalt.
- Uavhengig testing for bakdører og skjult atferd, med NSM som fagmiljø.
- Norske modeller bygd på utenlandske grunnmodeller dokumenterer hva de arver.
- Plattformer som selger innhold til KI-trening, får plikt til å oppdage og fjerne koordinert forgiftning (sjekk om DSA kan brukes).

### H Nyanse

- **Ikke panikk som gir maktkonsentrasjon:** blir svaret at vi bare stoler på de største leverandørene, er vi tilbake ved maktkonsentrasjonen ([[OKO-02]]). De store kan også forgiftes, og de har egne interesser. Svaret er opprinnelse, testing og mangfold – ikke færre leverandører.
- **Ingen kjent bakdør i bruk:** det er ikke kjent at noen av de store modellene i bruk har en plantet bakdør. Det meste er forskningsdemonstrasjoner – men de viser at det er mulig, og at det ikke kan oppdages i ettertid.
