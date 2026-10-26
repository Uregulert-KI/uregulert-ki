---
id: SIK-02
tittel: Skygge-KI og ufrivillige innsidetrusler
del: Del V – Sikkerhet og beredskap
status: stikkord
risikotype: uhell/uaktsomhet
sist_endret: 2026-10-23
---

# SIK-02 Skygge-KI og ufrivillige innsidetrusler

> Påstander: SIK-02.P01–SIK-02.P08 i [pastander.md](../pastander.md). Kilder: [kilder.md](../kilder.md) (K-ID-er slås opp i `99-kilder/kilderegister.md`). Uttalelser: [uttalelser.md](../uttalelser.md).

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

- **Kjerne:** skygge-KI kan ikke fjernes – bare opplyses. Ingen trenger å ville skade for at skaden skjer. Fordi bruken ikke kan stoppes, er opplysning det viktigste verktøyet.
- **Avgrensning:** forvaltningsrett og logg i [[RET-10]]; glideskalaen i saksbehandlingen i [[RET-02]]; taushetsplikt i helse i [[RET-05]]; hva leverandøren gjør med dataene i [[SIK-01]]; agenter og prompt injection i [[SIK-03]].

### A Skaden krever ingen vond vilje

- **Uaktsomhet, ikke angrep:** skygge-KI er et kjerneeksempel på risiko gjennom uaktsomhet. Den ansatte vil bare bli ferdig.
- **Utbredt:** et flertall av KI-brukerne på jobb tar med egne verktøy [K0177] (sjekk tallet – om lag 75 %).

### B Hva som lekker

- **Tilliten senker terskelen:** folk stoler på KI-en sin. Samtalen føles privat – nesten som med en fortrolig – og derfor føles det ikke som noen stor sak å lime inn et dokument. Det er en *fortrolighetsillusjon*: følelsen av en lukket samtale med noen du stoler på, mens teksten havner hos et selskap i et annet land.
- **Lagt inn med vilje:** dokumenter, kode og møtereferater limes inn for å oppsummeres, oversettes eller pyntes. Samsung-ansatte la inn kildekode i ChatGPT [K1113] (sjekk).
- **Tatt uten at noen merker det:** KI-referenter som blir med i møter, nettleserutvidelser som leser skjermen, tastaturer og apper med innebygd KI.
- **Norsk presedens:** NRK avslørte i 2017 at tekster lagt inn i en gratis oversettelsestjeneste ble søkbare på nett, blant dem dokumenter fra Statoil [K1114]. Samme mekanisme – annen skala.

### C Fremmed jurisdiksjon – alliert eller ikke

- **Det spiller ingen rolle om landet er alliert.** USA er en alliert, men Norge ønsker ikke at amerikanske myndigheter skal ha ufiltrert innsyn i norsk politikk, forvaltning og næringsliv. CLOUD Act [K0171] og FISA 702 [K0172] åpner for det ([[SIK-01]]).
- **Teknologien kan lekke alt om alt.** Når samme tjeneste brukes til budsjettnotater, anbudsdokumenter, personalsaker og forhandlingsposisjoner, er spørsmålet ikke *hvem* som kan se, men at *noen* kan se alt.
- **Kina er det åpenbare eksempelet, ikke det eneste:** kinesisk lov pålegger virksomheter å samarbeide med statens etterretning [K1115] (sjekk), og flere land har forbudt DeepSeek på offentlige enheter [K1116] (sjekk Norge).

### D Den private telefonen

- **Forbud på jobb-PC-en flytter bruken til den private telefonen,** der verken arbeidsgiver eller NSM ser noe.
- **Summen av små biter** fra mange ansatte gir samme sammenstillingsrisiko som i [[SIK-04]].

### E Forbud skaper skygge

- **Uten alternativ vokser skyggen:** et forbud uten gode godkjente verktøy gir dårligere sikkerhet enn et godkjent verktøy med kontroll. Statens egne piloter er et steg [K1117] (sjekk).
- **Avhengigheten øker:** jo mer folk har vent seg til KI, jo mer meningsløst blir forbudet – bruken flyttes bare ([[LIV-03]]).

### F Reguleringshull

- **Reglene finnes, men brudd oppdages ikke:** sikkerhetsloven [K0010] og taushetsplikten gjelder, men brudd er nesten umulige å oppdage ([[RET-10]], avsnitt C).
- **Råd, ikke krav:** NSMs og Digdirs råd om KI-bruk i staten [K0178] [K0176] er veiledende (sjekk).
- **Uklart ansvar** når den ansatte bryter reglene i god tro.

### G Kandidater til [[ANB-01]]

- **Opplysning først – hovedtiltaket:** konkret opplæring for alle offentlig ansatte i hva som lekker, hvor det havner, og hvorfor tilliten til verktøyet ikke er en garanti.
- **Mangfold, ikke én statsmodell:** godkjente alternativer – gjerne flere, og gjerne lokale modeller for sensitive data – som gir skyggen et alternativ uten at hele staten tenker gjennom samme modell ([[TVG-06]]).
- **Meldeordning uten straff** for den som oppdager at hen har delt noe.

### H Nyanse

- **Skyggebruken er et signal** om behov virksomheten ikke dekker, ikke bare et brudd.
- **De fleste innlimte tekstene er trivielle.** Faren ligger i de få som ikke er det – og i summen.
