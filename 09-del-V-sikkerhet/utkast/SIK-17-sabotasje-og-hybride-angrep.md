---
id: SIK-17
tittel: Sabotasje, hybride angrep og kritisk infrastruktur
del: Del V – Sikkerhet og beredskap
status: kandidat
risikotype: misbruk
sist_endret: 2026-10-24
---

# SIK-17 Sabotasje, hybride angrep og kritisk infrastruktur

> Påstander: SIK-17.P01–SIK-17.P12 i [pastander.md](../pastander.md). Kilder: [kilder.md](../kilder.md) (K-ID-er slås opp i `99-kilder/kilderegister.md`). Uttalelser: [uttalelser.md](../uttalelser.md).

## Fenomen

<!-- Hva skjer, konkret? -->

## Mekanisme

<!-- Hvorfor og hvordan oppstår skaden? -->

## Evidens

<!-- Hva vet vi, og hvor sterk er kunnskapen? Merk evidensstyrke: sterk (flere studier/offisielle data), moderat, svak/tidlig (enkeltstudier, preprint, anekdoter). -->

## Norsk relevans

<!-- Norske tall, saker og institusjoner. Minst ett norsk eksempel eller datapunkt. -->

## Verdi som trues

<!-- Kobling til verdiene i [[INN-03]]: særlig suverenitet og beredskap. -->

## Reguleringshull

<!-- Hva dekker dagens regelverk ikke? Meld funn inn til [[REG-02]]. -->

## Anbefaling

<!-- Hvem skal gjøre hva? Meld inn til [[ANB-01]]. -->

---

## Stikkord og materiale

*Utvidet 2026-10-24 etter gjennomgang. «Sjekk» betyr at kilden er satt opp fra hukommelsen og at detaljer må bekreftes.*

- **Kjerne:** sabotasje uten sabotører. KI endrer sabotasjen mindre i selve handlingen og mer i forberedelsen – kartlegging, rekruttering og manipulasjon av data i en skala som før krevde et nettverk av agenter. Og angriperen gir seg ikke: et autonomt system i en løkke prøver til det lykkes.
- **Sammenslått 2026-10-24:** SIK-11 (angrep på kritisk infrastruktur og driftssystemer) er slått inn her som avsnitt B. Påstandene SIK-11.P01–P02 beholder ID-ene.
- **Avgrensning:** bakdører og forgiftning i [[SIK-12]]; tyveri av modeller i [[SIK-14]]; kaprede agenter i [[SIK-03]]; beredskap og avhengighet i [[SIK-07]]; leverandører i totalforsvaret i [[SIK-15]]; krigføring i [[SIK-06]]. *Overordnet nivå, uten operative detaljer om sårbarheter eller metoder.*

### A Typer sabotasje – og KI sin rolle

| Type sabotasje | KI sin rolle | Hvor |
| --- | --- | --- |
| Angrep på kraft, vann, tele og driftssystemer | Verktøy – senker terskelen | avsnitt B |
| Forgiftede data, bakdører, tyveri av modeller | Mål – KI-systemet saboteres | [[SIK-12]], [[SIK-14]] |
| Agenter som kapres og gjør skade innenfra | Inngang – KI med systemtilgang | [[SIK-03]], avsnitt F |
| Leverandør eller stat som fjernstyrer eller stanser utstyr | Innebygd bryter | avsnitt D, [[SIK-07]], [[SIK-15]] |
| Hybrid sabotasje i gråsonen | Planlegging og rekruttering | avsnitt C |
| Integritetsangrep – data endres i det stille | Mål og verktøy | avsnitt E |
| Utholdende, automatiserte angrep | Angriper som aldri gir seg | avsnitt G |

### B Kritisk infrastruktur – sårbar driftsteknologi

- **Bremanger (2025):** angripere åpnet en ventil ved en demning; PST har knyttet hendelsen til prorussiske aktører [K0068] (sjekk). Ikke et KI-angrep – men det viser hvor sårbar driftsteknologien er.
- **KI senker terskelen** for å finne og utnytte slike systemer ([[SIK-05]], avsnitt C). Små kommuner og vannverk har minst kapasitet til å sikre seg.
- **En ny type tjenestenektangrep:** svermer av KI-agenter som etterligner mennesker og kommer forbi CAPTCHA, kan overbelaste tjenester på en måte som er vanskelig å skille fra vanlig trafikk ([[LIV-17]], avsnitt D).

### C Hybrid sabotasje og engangsagenter

- **Norsk sårbarhet:** Norge er Europas viktigste gassleverandør og har omfattende undersjøisk infrastruktur – rørledninger, strøm- og datakabler [K0068] [K0069]. Referansepunkter: Svalbard-kabelen (2022) [K1148], Nord Stream (2022) og skadene i Østersjøen (2023–24) [K1149] (sjekk).
- **Engangsagenter:** statlige aktører skal ha rekruttert lavterskel-utøvere via nett og meldingsapper til sabotasje i Europa [K0218] (sjekk).
- **KI-koblingen:** kartleggingen av mål ([[SIK-04]]) og rekrutteringen og manipuleringen av utøverne ([[DEM-01]], [[SIK-10]]) kan skaleres – og oversettelse gjør det lettere å rekruttere lokalt ([[SIK-05]], avsnitt A).

### D Bryteren ligger hos andre

- **Innebygd sabotasjeevne:** utstyr som fjernoppdateres eller styres fra skyen, kan stanses av leverandøren – eller staten bak den. Ruters test av elbusser (2025) viste at produsenten kunne fjernstyre eller stanse bussene ([[SIK-07]]); det er rapportert om uforklarlige kommunikasjonsenheter i kinesiske solcelle-invertere [K0217] (sjekk).
- **Det samme gjelder KI-tjenester i skyen** ([[SIK-07]], [[SIK-15]], [[OKO-02]]).

### E Integritetsangrep – det som ser normalt ut

- **Klassisk sabotasje slår noe ut og blir oppdaget.** Når KI bygger beslutninger på registre og sensordata, holder det å endre dataene litt.
- **Feilen ser ut som en normal beslutning** – i automatiserte vedtak ([[RET-02]]), beredskapsvurderinger ([[SIK-07]]) og alt som bygger på forgiftede data ([[SIK-12]]). Automasjonsbias gjør at ingen stusser ([[RET-04]], [[TVG-03]]) [K0176] [K0193].

### F Sovende nettverk og kaprede agenter

- **Syntetiske personer** som har bygd tillit over tid, kan aktiveres i en krise samtidig med fysisk sabotasje – da blir angrepet hybrid ([[LIV-17]], avsnitt B; [[SIK-13]]).
- **Agenter med systemtilgang** kan kapres ([[SIK-03]]).
- **KI-agenter som selv saboterer** nevnes bare kort og nøkternt – det hører hjemme i [[SIK-08]] og er omstridt.

### G Angriperen som aldri gir seg – et kappløp om regnekraft

- **Utholdenhet uten kostnad:** et autonomt system i en løkke med nok regnekraft gir seg ikke før målet er nådd. Det prøver nye varianter av phishing, nye konfigurasjoner og nye innganger – døgnet rundt, i årevis – uten å bli trett, kjede seg eller gi opp.
- **Asymmetrien skjerpes:** angriperen trenger ett treff, forsvareren må holde hele tiden. Før satte angriperens tid og tålmodighet en grense. Nå blir den grensen en strømregning.
- **Til slutt et kappløp om ressurser:** når begge sider automatiserer, avgjøres mye av hvem som har mest regnekraft og lengst utholdenhet. Regnekraft blir en sikkerhetsressurs, ikke bare en økonomisk ressurs ([[OKO-02]], avsnitt E).
- **Presisering:** dette handler om utholdende prøving og feiling mot mennesker og systemer – ikke om å knekke sterk kryptering, som holder også mot mye regnekraft. Svakhetene ligger i konfigurasjon, mennesker og eldre systemer, og det er der utholdenheten lønner seg.
- **Forsvaret må også automatiseres** – med KI som overvåker og reagerer kontinuerlig. Men det gjør forsvaret avhengig av de samme få leverandørene ([[SIK-07]]).

### H Reguleringshull

- **Gråsonen** faller mellom politi og forsvar.
- **KI-forordningen** unntar nasjonal sikkerhet og forsvar [K0001].
- **Digitalsikkerhetsloven og sikkerhetsloven** dekker virksomheter [K1150] [K0010], ikke utstyr som kjøpes inn fritt (sjekk status for NIS2 og direktivet om kritiske enheters motstandsdyktighet, CER, i EØS).

### I Kandidater til [[ANB-01]]

- Fjernstyring av kritisk utstyr skal kunne kobles fra, og det skal finnes manuell reserve.
- Integritetskontroll – signerte data og uavhengige målinger – for beslutninger i kritiske systemer.
- Sikring av driftsteknologi i små kommuner, med statlig støtte.
- PST og NSM følger rekrutteringen av engangsagenter på nett.
- Regnekraft og automatisert forsvar regnes som en del av beredskapen; NSM og sektorene får kapasitet til kontinuerlig, automatisert forsvar av kritisk infrastruktur.

### J Nyanse

- **Mest sabotasje er fortsatt lavteknologisk,** og KI sin rolle er så langt mest indirekte. Det er svært vanskelig å si sikkert hvem som står bak et angrep.
- **Alarmisme svekker tilliten** – som er Norges viktigste beredskapsressurs ([[DEM-03]]).

### Fra SIK-11 (slått sammen 2026-10-24, E013)

*Innholdet i SIK-11 «Angrep på kritisk infrastruktur og driftssystemer» står ordrett her. Det er bearbeidet inn i avsnitt B over. Påstandene SIK-11.P01–P02 beholder ID-ene.*

- **Angrep på kritisk infrastruktur og driftssystemer:** demningen i Bremanger (2025) – angripere åpnet en ventil; PST har knyttet hendelsen til prorussiske aktører (sjekk) [K0068]. Ikke et KI-angrep, men viser sårbar driftsteknologi; KI senker terskelen.

*Merknad ved oppsett (2026-10-13):* Sabotasje i bredere forstand – hybride angrep, innebygd sabotasjeevne og integritetsangrep – behandles i [[SIK-17]]. Her: det konkrete infrastruktureksempelet.
