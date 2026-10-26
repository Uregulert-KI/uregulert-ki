---
id: SIK-18
tittel: Utilsiktede KI-feil i kritisk drift
del: Del V – Sikkerhet og beredskap
status: kandidat
risikotype: uhell/uaktsomhet
sist_endret: 2026-10-24
---

# SIK-18 Utilsiktede KI-feil i kritisk drift

> Påstander: SIK-18.P01–SIK-18.P10 i [pastander.md](../pastander.md). Kilder: [kilder.md](../kilder.md) (K-ID-er slås opp i `99-kilder/kilderegister.md`). Uttalelser: [uttalelser.md](../uttalelser.md).

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

- **Kjerne:** feil uten fiende. Resten av Del V handler om fiendtlige handlinger. Her er faren at systemet rett og slett tar feil – i kraft, transport og drift, der konsekvensen er høy og feilmarginen liten. Og i motsetning til en mekanisk feil kan en modellfeil ikke repareres én gang for alle.
- **Avgrensning:** feil i helse og jus i [[RET-05]]; monokultur i [[TVG-06]]; sabotasje og integritetsangrep i [[SIK-17]]; agenter i [[SIK-03]]; prisalgoritmer i [[OKO-10]]; beredskap i [[SIK-07]].

### A Automasjonens ironi

- **Jo bedre systemet er, desto dårligere rustet er mennesket:** mennesket må sjeldnere gripe inn – og er dårligere forberedt når det må [K0253] [K0122]. Oppmerksomheten faller når man bare overvåker ([[OKO-12]], avsnitt F).
- **Analogier uten KI:** Air France 447 og 737 MAX – pilotene fikk kontrollen tilbake i det vanskeligste øyeblikket.

### B Feilen kan ikke repareres – bare dempes

- **En mekanisk feil kan fikses:** finn feilen, bytt delen eller rett koden, test – og feilen er borte.
- **En modellfeil er en sannsynlighet:** feilen ligger i hvordan modellen er trent, ikke i en linje som kan rettes ([[REG-03]], avsnitt A). Nye systeminstrukser og sperrer (guardrails) kan styre atferden, men de endrer ikke hvordan selve modellen virker. De gjør feilen sjeldnere – de fjerner den ikke.
- **Feilen kommer tilbake:** en rettelse som ligger i instruksene eller i samtalen, virker bare så lenge den er i modellens kontekst. Utenfor kontekstvinduet – i en ny samtale, en ny agent, eller når instruksene drukner i lange forløp – kan modellen gjøre den samme feilen igjen.
- **Retrening er ingen garanti:** en ny modellversjon kan rette én feil og innføre andre, og det kan ikke bevises at feilen er borte – bare at den ikke ble funnet i testen ([[REG-04]]).
- **Konsekvensen for kritisk drift:** sikkerhetsarbeid som bygger på «finn feilen og rett den», passer dårlig. Man må planlegge for at feilen vil skje igjen.

### C Virker i test – svikter i virkeligheten

- **En annen verden enn treningsdataene:** sjeldent vær, nye situasjoner, utstyr som er endret. I Tempe-ulykken (2018) klassifiserte den selvkjørende bilen fotgjengeren feil flere ganger før sammenstøtet [K1158] (sjekk).
- **Det sjeldne er det farlige** – og det testene dekker dårligst ([[REG-03]], avsnitt A).

### D Samme feil overalt på en gang

- **Felles modell, felles feil:** når mange bruker samme modell eller samme oppdatering, feiler de samtidig ([[TVG-06]]).
- **Mekanismen uten KI:** CrowdStrike-hendelsen (2024) – én feilaktig oppdatering slo ut systemer verden over [K0820] ([[RET-01]]).

### E Agenter som forsterker hverandres feil

- **Kaskader ingen har forutsett:** når mange KI-agenter samhandler, kan feil spre seg og forsterkes [K0255] [K0256].
- **Flash crash (2010)** er analogien: algoritmer som reagerer på hverandre, kan gjøre en liten feil til et krakk på minutter ([[OKO-09]]).

### F Hvem merker feilen – og hvor raskt?

- **Normale ulykker:** i tett koblede, komplekse systemer er noen ulykker uunngåelige [K0254]. KI gjør systemene både tettere koblet og mindre forståelige.
- **Uklart ansvar for å oppdage:** operatøren, leverandøren – eller ingen.

### G Norsk forankring

- **Kraft og luftfart:** Statnett har flere KI-prosjekter i driften av kraftsystemet og må veie sikker drift mot effektivitet [K0257]; Avinor tester KI for rullebanefriksjon [K0258].
- **Hverdagseksempel:** KI-genererte turforslag som sender folk ut på farlige eller ikke-eksisterende turer, belaster redningstjenesten og frivillige som Røde Kors [K0259] (sjekk).

### H Reguleringshull

- **KI-forordningen** regner KI som sikkerhetskomponent i kritisk infrastruktur som høyrisiko (vedlegg III) [K0001] – men kravene er utsatt og ikke norsk rett ennå.
- **Ingen meldeplikt** for nesten-ulykker med KI, slik luftfarten har ([[REG-03]]).

### I Kandidater til [[ANB-01]]

- Ikke-straffende hendelsesrapportering for KI-feil i kritisk drift, etter modell av luftfarten.
- Operatører øver jevnlig på å ta over når systemet svikter.
- Ulike modeller eller leverandører i parallelle kritiske systemer, så de ikke feiler samtidig.
- Testing på sjeldne situasjoner før bruk – og sikkerhetsplaner som forutsetter at feilen kommer igjen, ikke at den er rettet.

### J Nyanse

- **KI kan også gjøre driften sikrere** – bedre prediksjon og tidlig varsling – og mennesker gjør også feil som fanges av automatikk.
- **Spørsmålet** er ikke mennesket *eller* maskinen, men om samspillet er bygget for den dagen maskinen tar feil.
