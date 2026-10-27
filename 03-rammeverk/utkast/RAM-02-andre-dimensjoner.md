---
id: RAM-02
tittel: Andre dimensjoner
del: Kap. 3 – Analytisk rammeverk
status: stikkord
risikotype: ikke relevant
sist_endret: 2026-10-18
---

# RAM-02 Andre dimensjoner

## Stikkord og materiale fra disposisjonen

- **Tidshorisont:** skjer nå / neste 5 år / langsiktig. *Formalisert 2026-10-25 som horisontsystemet under.*
- **Hvem bærer risikoen:** individ, gruppe, samfunn, stat. Hvem høster gevinsten? Skjev fordeling er i seg selv et verdispørsmål.
- **Reversibilitet:** kan skaden rettes opp (en feil i et vedtak) eller ikke (tapt kompetanse i en generasjon)?

### Tidshorisont: nå, nær, fjern

*Rapporten skal informere om og regulere farene vi har foran oss her og nå. Sannsynlige framtidige farer skal pekes ut, men ikke vekte dokumentet. Horisonten bestemmes av evidensen, ikke av hvor dramatisk faren er.*

| Horisont | Betyr | Eksempler |
| --- | --- | --- |
| **Nå** | Skaden er dokumentert eller pågår i dag | Svindel med klonet stemme ([[SIK-05]]), skygge-KI ([[SIK-02]]), skjevheter i kontrollalgoritmer ([[RET-07]]) |
| **Nær** | Teknisk mulig og påvist i forsøk eller enkeltsaker – sannsynlig innen få år | Bakdører i modeller ([[SIK-12]]), personlig pris ([[OKO-10]]), agenter som handler for oss ([[RET-12]]) |
| **Fjern** | Hypotetisk, verste tilfelle – ikke påvist i praksis | Nettbutikker som genereres mens du klikker ([[TVG-01]]), tap av kontroll over svært kapable systemer ([[SIK-08]]) |

**Slik brukes horisonten:**
- Horisonten er en merkelapp og en vurdering – **ikke en struktur**. Kapitlene skal ikke deles opp i nå/nær/fjern; det ble bare gjort i [[TVG-01]] fordi temaet selv er delvis hypotetisk.
- **Hvert tema får `horisont: nå | nær | fjern` i toppfeltet.** Avsnitt som skiller seg fra temaets horisont, merkes i teksten: «*(horisont: fjern)*».
- **Bærebjelkene er nå og nær.** Fjern får korte, tydelig merkede avsnitt og bærer aldri et hovedargument alene.
- **Utsyn:** det som er fjernt, samles i et kort eget kapittel, [[TVG-10]] «Utsyn – mulige farer framover» – så det verken blir borte eller tar over.
- **Anbefalingene** ([[ANB-01]]) rettes mot nå og nær. For fjern brukes betinget form: «dersom dette skjer, anbefaler organ X …» (som i [[SIK-08]]).
- **Ikke det samme som A i scoringen:** A (aktualitet) måler om kunnskapen fortsatt er gyldig – horisonten måler hvor nær faren er. De holdes adskilt.

### Tre gjennomgående forbehold

*Overordnet linse som skal ligge i bakhodet gjennom hele rapporten og etter hvert forme dokumentet. Hvert tema og hvert reguleringsforslag skal vurderes mot alle tre.*

1. **Lokale, åpne modeller – så å si umulige å regulere.** Modeller som lastes ned og kjøres lokalt, har ingen leverandør å stille krav til, ingen logger og ingen sperrer som ikke kan fjernes. Her ligger store farer ([[SIK-19]]; [[REG-04]]).
2. **Kommersielle modeller – eiernes og aksjonærenes interesser.** Modellene er produkter. Eiernes og aksjonærenes meninger, holdninger og forretningsinteresser kan prege hva modellen sier, vektlegger og nekter ([[DEM-01]], avsnitt A; [[OKO-02]]).
3. **Regler binder bare de lovlydige.** Krav som «deepfakes må merkes» er ikke bedre enn de lovlydige aktørene som velger å følge dem. Uetiske aktører følger dem ikke. Selv om innholdet tas ned når det oppdages, kan skaden allerede ha skjedd ([[REG-04]]; [[LIV-16]], avsnitt A; [[DEM-02]], avsnitt G).

**Slik brukes forbeholdene:**
- **I hvert tema:** hvordan ser faren ut (1) med lokale, åpne modeller, (2) med kommersielle modeller, og (3) hvem kommer til å følge regelen som skal hindre den?
- **I hvert reguleringsforslag** ([[REG-03]], [[ANB-01]]): angi hvilken av de tre forslaget treffer. Et forslag som bare treffer lovlydige, kommersielle aktører, må sies å være det – og suppleres med tiltak som virker på tilgang, betaling eller infrastruktur ([[REG-04]], avsnitt E).
