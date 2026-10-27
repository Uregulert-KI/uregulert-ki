---
id: RET-10
tittel: Innsyn, offentlighet og arkiv
del: Del III – Rettsstat og forvaltning
status: kandidat
risikotype: ikke vurdert
sist_endret: 2026-10-27
---

# RET-10 Innsyn, offentlighet og arkiv

> Påstander: RET-10.P01–RET-10.P10 i [pastander.md](../pastander.md). Kilder: [kilder.md](../kilder.md) (K-ID-er slås opp i `99-kilder/kilderegister.md`). Uttalelser: [uttalelser.md](../uttalelser.md).

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

- **Kjerne:** en logg kan bevise hva som ble brukt – men aldri hva som *ikke* ble brukt. Uten logg kan ingen verken bevise eller motbevise at et vedtak er påvirket av KI. Da kan hvem som helst rope «skygge-KI», og tilliten svekkes uansett hva som faktisk skjedde. Samtidig er et forbud mot skygge-KI praktisk umulig å håndheve uten full overvåking.
- **Avgrensning:** påvirkningen på selve vedtaket står i [[RET-02]]; løgnerens bonus og tillitssamfunnet i [[DEM-03]]; arkivene som kilder for KI i [[DEM-13]]; skygge-KI som sikkerhetsproblem i [[SIK-02]]. Her eier vi offentlighet og arkiv som samfunnets kontroll med forvaltningen – og hvor vanskelig dette er å regulere.

### A Når er et dokument et saksdokument – og hva er da chatloggen?

- **Slik er det i dag:** i det offentlige lager *mennesker* dokumentene, etter regler, maler og rutiner. Det ferdige dokumentet er et saksdokument. Utkastene, notatene og samtalen med kollegaen er det ikke.
- Et dokument organet selv lager, regnes som opprettet når det er sendt ut eller ferdigstilt [K0130] (§ 4, sjekk), og interne dokumenter kan unntas fra innsyn (§ 14, sjekk). Journalføringsplikten gjelder dokumenter som er gjenstand for saksbehandling og har verdi som dokumentasjon [K0131] (sjekk).
- **Chatloggen faller trolig utenfor:** den ligner et arbeidsnotat. Det ferdige dokumentet blir offentlig – samtalen som formet det, blir det ikke.
- **Nivåene – og hvorfor de ikke kan skilles uten logg:** å få hjelp til form er én ting. Å sparre er en annen. Å be en modell lage hele dokumentet er noe annet igjen. Uten logging er det umulig å vite hvilket av nivåene som er brukt.
- **Skal hele chatloggen telle** fordi den *kan* ha påvirket dokumentet? Da blir all høytenkning offentlig. Skal ingenting telle? Da forsvinner påvirkningen ut av sporet.
- **Motargument:** svaret fra en ekstern KI-tjeneste er ikke bare saksbehandlerens eget notat, men tekst som kommer *utenfra* – fra en aktør med egne interesser. Kan det regnes som et dokument som har «kommet inn» til organet (sjekk)?
- **Mulig vei – skill arkiv og offentlighet:** loggen *arkiveres* alltid, tilgjengelig for kontrollorganene – Sivilombudet [K0112], Riksrevisjonen, domstolene – men er ikke nødvendigvis *offentlig*: den kan unntas som organinternt, med plikt til å vurdere merinnsyn. Terskelen kan være at KI har bidratt med *innhold*, ikke bare form. Da kan påvirkning etterprøves uten at all tenkning blir offentlig.

### B KI-loggen – forutsetning for å forstå beslutninger

- **Skal KI brukes i det offentlige, trengs en KI-logg:** spørsmål og svar, modellversjon og tidspunkt, knyttet til saken. Først da kan man forstå hvordan en beslutning er tatt – og om den er påvirket utenfra ([[RET-02]], avsnitt E).
- **Tidsdimensjonen:** modellene oppdateres. Uten arkivert modellversjon kan ingen om fem år gjenskape hva modellen svarte ([[REG-04]]).

- **Arkivverket varslet i 2019:** beslutninger tatt med KI må dokumenteres, også grunnlaget og kunnskapen man hadde da. Arkivsystemene og arkivinstitusjonene var «foreløpig ikke rustet» til det [K1236].
- **Loggene finnes, men hos leverandøren:** retningslinjene for sikker KI-utvikling sier at leverandøren skal gi kundene revisjonslogger av høy kvalitet uten ekstra kostnad [K1202]. Det er ikke et krav.

### C Skygge-KI kan ikke reguleres uten full overvåking

- **Hvordan kan vi stole på at offentlig ansatte følger et forbud mot skygge-KI?** Modellene får plass på mobiltelefonen og kan kjøre lokalt uten nett. Å håndheve et forbud krever overvåking til enhver tid.
- **Full overvåking bryter selv verdiene vi verner:** de ansattes personvern, arbeidsmiljølovens regler om kontrolltiltak [K0161], og tillitskulturen i forvaltningen ([[DEM-03]]).
- **Dilemmaet:** reglene virker for *institusjonen* – men ikke nødvendigvis for hver enkelt ansatt. Dette nyanserer poenget om at regler virker i forvaltningen ([[RET-00]]).

### D Mistankens bonus – når ingenting kan bevises eller motbevises

- **Scenario:** et vedtak går gjennom som mange er uenige i – for eksempel fordi det oppleves som «USA-vennlig». Det bes om innsyn, og ingen chatlogger kan vise om beslutningen i noen grad er påvirket av en språkmodell. Nå kan hvem som helst rope «skygge-KI» uten mulighet til å bevise eller motbevise det.
- **Løgnerens bonus snudd på hodet:** før kunne den skyldige avfeie ekte bevis som falske ([[DEM-03]]). Nå kan *enhver* beslutning mistenkes – og ingen kan renvaske seg. En logg viser hva som ble brukt, aldri hva som *ikke* ble brukt.
- **Følgen:** tilliten i hele samfunnet kan svekkes, uavhengig av om noe galt har skjedd.

### E Vi har vært her før – SMS, Signal og korridorsamtaler

- **Meldinger som forsvinner:** i «Pfizergate» ble det krevd innsyn i SMS-er mellom EU-kommisjonens president og en legemiddelsjef; EU-domstolen ga journalistene medhold i 2025 [K0845] (sjekk). I Norge ble det i 2021 kjent at folk i regjeringsapparatet brukte Signal, der meldinger kan slettes automatisk, og kontrollkomiteen krevde svar [K0846].
- **Menneskelig påvirkning har heller aldri vært logget:** hva en saksbehandler leste, eller hvem hen snakket med i korridoren. Norge har ikke et lovpålagt lobbyregister [K0847] (sjekk).
- **Det nye med KI:** skalaen; samme kilde for alle ([[RET-02]], avsnitt D); eiere med egne interesser; og at KI *skriver* teksten, ikke bare gir et innspill.

### F Innsyn i selve algoritmen

- **Frankrike** krever siden 2016 at reglene bak algoritmiske enkeltvedtak skal være åpne [K0848] (sjekk). Norge har ikke et tilsvarende krav.
- **Forretningshemmeligheter** kan stenge for innsyn i kildekode, vekter og treningsdata ([[RET-03]], avsnitt C).
- **Pressen:** toeslagen og Robodebt [K0110] ble avdekket utenfra. Innsyn er pressens verktøy.

### G KI på begge sider av innsynet

- **Forvaltningen** bruker KI til å sladde og behandle innsynskrav – med fare for oversladding eller lekkasjer.
- **KI-genererte masseinnsynskrav** kan oversvømme forvaltningen.

### H Hva kan gjøres uten full overvåking?

- **Gjør det loggede verktøyet til det enkleste:** gode, godkjente løsninger fjerner grunnen til å bruke skygge-KI.
- **Erklæring i vedtaket** om at KI er brukt eller ikke – slik habilitetsreglene bygger på at den ansatte selv sier fra, og kontrolleres i ettertid [K0015] (sjekk).
- **Stikkprøver, varsling og reaksjoner.**
- **Ikke vanntett** – men slik fungerer resten av forvaltningen også: tillit med kontroll.

### I Norsk forankring

- Offentleglova [K0130], arkivlova [K0131], forvaltningsloven [K0015]; Sivilombudet [K0112]; Digdir [K0024]; Arkivverket.

### J Kandidater til [[ANB-01]]

- KI-logg som del av arkivplikten, og arkivering av modellversjoner.
- Terskel for når KI-bidrag må arkiveres: innhold, ikke form.
- Erklæring om KI-bruk i vedtak.
- Åpenhet om reglene bak algoritmiske vedtak.
- Avklaring i veiledere om når KI-samtaler er saksdokumenter.

### K Nyanse

- **Full logging har en pris:** ansatte kan slutte å «tenke høyt», eller unngå å skrive noe ned. Logger kan også misbrukes.
- **Tillitskulturen er en styrke:** de fleste følger reglene. Målet er en logg som verner både forvaltningen og borgerne – ikke overvåking som svekker tilliten den skal bevare.
