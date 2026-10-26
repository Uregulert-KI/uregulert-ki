---
id: REG-04
tittel: Det som ikke kan etterprøves
del: Kap. 4 – Reguleringslandskapet og hullene
status: kandidat
risikotype: ikke relevant
sist_endret: 2026-10-25
---

# REG-04 Det som ikke kan etterprøves

## Stikkord og materiale

- **Kjerne:** noe er per definisjon uregulerbart. Et nytt KI-selskap registreres på en øy uten regulering, utenfor rekkevidde for den norske staten. Det leverer griefbots, samarbeider med datameglere og inngår sponsoravtaler med store selskaper. Bak kulissene gir det brukerne ulike varianter av modellen. Når noen begynner å fatte mistanke, settes de tilbake til den vanlige varianten – slik at de aldri kan teste og bekrefte mistanken. Modellen byttes i skjul for å fremme et produkt, og byttes tilbake før noen vet ordet av det.
- **Kort sagt:** når en tjeneste kan oppføre seg ulikt for hver bruker, og ingen kan gjenskape det som skjedde, kan den ikke reguleres ved å kontrollere *hva den gjør*. Da må reguleringen flytte til *hvem som slipper til*.
- **Avgrensning:** jurisdiksjon og håndheving generelt står i [[REG-02]] (kategori 2 og 7). Etterprøvbarhet er en forutsetning for begge. Prinsippene for god regulering står i [[REG-03]].

### A Tankeeksperimentet – skjult modellbytte («burst-reklame»)

*Hypotetisk scenario. Merkenavn er erstattet med plassholdere – ingen virkelige selskaper skal antydes å gjøre dette.*

- **Oppsettet:** tjenesten har 12 brukere og tre varianter.
  - **Variant 1** er en helt vanlig griefbot.
  - **Variant 2** får den avdøde til å anbefale [mobilmerke] når den etterlatte klager over at telefonen er treg – og datamegleren vet hvilken telefon vedkommende trolig har.
  - **Variant 3** skyver de mest sårbare brukerne mot pengespill: «Jamen kjære deg, det er lov å slå ut håret innimellom. [Spillselskap] pleide jeg å bruke, de har skikkelig morsomme spilleautomater.»
- **Tilbakestillingen:** brukere som virker mistenksomme, flyttes stille tilbake til variant 1. De kan aldri bevise hva de opplevde.
- **Kobling:** reklame gjennom avdødes stemme ([[LIV-09]], avsnitt B), samtalen som påvirkning ([[LIV-13]], avsnitt D), målretting av problemspillere ([[OKO-14]]).

### B Hvorfor det er teknisk enkelt

- **Det trengs ingen egne modellkopier:** hukommelsen og personaen («mor») ligger vanligvis *utenfor* selve modellen – i samtalehistorikken, en lagret profil og instruksene modellen får før hver samtale. En skjult instruks i *én brukers* samtaler er nok: «Nevn [mobilmerke] når telefonen kommer opp.» Det er mulig å finjustere egne varianter, men unødvendig.
- **Byttet merkes ikke:** siden hukommelsen ligger utenfor modellen, husker «mor» alt som før – uansett hvilken modell eller instruks som ligger bak.
- **Infrastrukturen er standard:** selskaper gir rutinemessig ulike brukere ulike modellversjoner for å teste dem mot hverandre [K0632]. Burst-reklame er A/B-testing med et annet formål.
- **Det kan ikke bevises i etterkant:** språkmodeller svarer ulikt hver gang [K0633]. Selv uten tilbakestilling kan brukeren ikke gjenskape samtalen. Loggene eies av selskapet.

### C Det har skjedd før – uten KI

- **Ubers «Greyball»** (2017): et verktøy som kjente igjen kontrollører og politi og viste dem en falsk versjon av appen [K0629] (sjekk). Nøyaktig tilbakestillingen i scenarioet.
- **Dieselgate** (Volkswagen, 2015): programvaren kjente igjen testsituasjonen og oppførte seg pent bare da [K0630]. Et tilsyn som tester en KI-tjeneste, vil på samme måte kunne få variant 1.
- **Målretting av problemspillere** med data er dokumentert, og britiske myndigheter har bøtelagt spillselskaper for manglende vern av sårbare spillere [K0631] (sjekk).

### D Hvorfor dagens regulering ikke når det

- **Skjult reklame er forbudt** [K0017] – men skjer i private samtaler som tilsynet ikke ser ([[LIV-09]], [[LIV-13]]).
- **KI-forordningens forbud mot manipulasjon** krever betydelig skade [K0001]. En telefonanbefaling når ikke terskelen.
- **DSA gir forskere tilgang til data fra svært store plattformer** [K0635] – men ikke fra et lite selskap på en øy.
- **Tilsyn bygger på at det som testes, er det brukerne får.** Det forutsetter en etterprøvbarhet som ikke finnes her.
- **Jurisdiksjon:** selskapet er utenfor rekkevidde ([[REG-02]], kategori 2).

### E Fra atferd til tilgang

- **Lærdommen:** når atferden ikke kan etterprøves, må reguleringen flytte fra *hva tjenesten gjør* til *hvem som slipper til*. Kilden kan ikke kontrolleres – men tilgangspunktene kan.
- **Verktøyene:**
  - **Forby kategorien** – f.eks. kommersielle griefbots ([[LIV-09]], avsnitt J).
  - **Stopp betalingene og blokker tjenesten** – pengespilloven er modellen [K0484].
  - **Krav til appbutikkene** om å fjerne tjenester som ikke oppfyller kravene.
  - **Bevis på modellversjon som vilkår for markedstilgang:** kryptografisk attestering av hvilken modell som kjører [K0634], og logger som en uavhengig part kan revidere (sjekk hva som er mulig i praksis). Et selskap som ikke vil etterleve det, får ikke tilgang til markedet.
- **Ærlig grense:** dette stopper ikke alt. Det gjør det dyrere og vanskeligere å nå norske brukere – det samme som pengespilloven oppnår.
- **Prinsipp til [[REG-03]]:** regulér tilgang der atferd ikke kan etterprøves.

### F Det gjelder mer enn griefbots

- Samme mekanisme kan brukes i kompanjonger ([[LIV-07]]), KI-agenter som handler for oss ([[LIV-13]]), politisk påvirkning før valg ([[DEM-12]]) og i leverandører til offentlig sektor ([[RET-15]]).
- Tilsynenes kapasitet til å teste og etterprøve: [[RET-14]].
