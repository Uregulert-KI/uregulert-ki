---
id: INN-04
tittel: Metode
del: Kap. 2 – Innledning
status: stikkord
risikotype: ikke relevant
sist_endret: 2026-11-01
---

# INN-04 Metode

## Stikkord og materiale

*Utvidet 2026-11-01 etter gjennomgang.*

- **Kjerne:** metoden er åpen og etterprøvbar. Hver påstand kan spores til en kilde, og ingenting regnes som verifisert før et menneske har sjekket det.
- **Avgrensning:** kildesystemet i detalj står i [[VED-02]], scoringen i [scoringsrammeverket](../../metode/scoring.md) og dugnaden i [dugnadsveiledningen](../../metode/dugnad-veiledning.md). Hva rapporten ikke dekker, står i [[INN-05]].

### A Materialet

- **Tverrfaglig gjennomgang** av forskning, offentlige utredninger, tilsynsrapporter, rettssaker og journalistikk.
- **Slik ble det samlet:** arbeidet startet med en disposisjon og en hullanalyse med flere KI-modeller, og ble deretter gjennomgått tema for tema.
- **Nye kilder i denne fasen gjennomgås av forfatteren før de tas inn**, men regnes ikke som verifisert før kilden er sjekket mot påstanden i dugnaden.

### B Påstander og kilder

- **Hver påstand har en ID** og er knyttet til én eller flere kilder med K-ID.
- **Alle kilder står som «ikke verifisert»** til et menneske har sjekket dem. «(sjekk)» betyr at kilden er satt opp fra hukommelsen.
- **KI-agenter har prøvd å sjekke om en del av kildene finnes**, men ikke om de sier det påstanden bygger på. Det gjør dugnaden.
- **Detaljene** står i [[VED-02]].

### C Scoring (ENUVA)

- **Fem kriterier, 0–3 poeng hver:** evidensstyrke, norsk relevans, uavhengige kilder, verdikobling og aktualitet. Påstander med 10 poeng eller mer tas med, 7–9 må styrkes, og 6 eller lavere forkastes. Uten verifiserbar kilde (E = 0) forkastes påstanden uansett.
- **Dokumenterte hendelser:** når en påstand bare slår fast at noe har skjedd eller er sagt, og primærdokumentet er verifisert, gir det full score på evidens og uavhengige kilder. Det gjelder ikke påstander om utfall, årsaker eller virkninger.
- **Evidensen merkes i teksten** som sterk, moderat eller svak.
- **To ulike trinn:** kildekontrollen spør om kilden sier det påstanden bygger på. Scoringen spør hvor sterk evidensen er.

### D Menneskelig kontroll

- **Dugnaden** har fem oppgaver: nye påstander, bredde, fagfolk, kilde- og påstandssjekk, og motevidens.
- **Redaktøren** vurderer og legger inn alle endringer.
- **Fagfolk** leser temaene og gir uttalelser.

### E Mottiltak mot bekreftelsesskjevhet

- **Aktivt søk etter motevidens** ([[MOT-01]] og dugnadens oppgave 5).
- **Et nyanseavsnitt i hvert tema.**
- **Fagfellelesing.**
- **En åpen database** som alle kan utfordre.
- **Verdier forankret i lov**, ikke i egne formuleringer ([[INN-03]]).

### F Målestokk og linser

- **Verdiene** i [[INN-03]], **risikotypene** i [[RAM-01]] og **tidshorisonten** i [[RAM-02]].
- **De tre gjennomgående forbeholdene** i [[RAM-02]] brukes som linse for hvert tema og hvert reguleringsforslag.

### G Datering

- **Kunnskapen gjelder per dato.** Aktualitet i scoringen måler om kunnskapen fortsatt er gyldig, og [dateringslista](../../metode/dateringsliste.md) viser hva som må følges opp.

### H KI-bruk i arbeidet og interessekonflikt

- **Rapporten er skrevet iterativt med hjelp av Claude, en språkmodell fra Anthropic** – til disposisjon, utkast, kildesøk og faktasjekk. Forfatteren har styrt, vurdert og godkjent alt innhold. Kildesjekken bruker også underagenter (Claude).
- **Andre modeller** ble brukt i hullanalysen (bl.a. Mistral og OpenAI).
- **Der rapporten omtaler Anthropic eller Claude direkte**, bør leseren vite om koblingen:
  - Anthropic og effektiv altruisme – båndene til KI-bransjen ([[DEM-01]]).
  - Modellenes «perspektiver og små rettelser» – Claude er trent til å legge fram flere perspektiver og rette faktafeil ([[RET-03]]).
  - Nøytralitet i felles statlige løsninger ([[RET-15]]).
  - Bartz-saken om opphavsrett gjelder Anthropic ([[OKO-06]]).
  - Oljefondets eierskap i KI-selskaper ([[OKO-09]]).
  - Datasenteret i Tydal med Anthropic som bruker ([[OKO-13]]).
  - Anthropics bruksgrenser for Claude Code ([[OKO-16]]).
  - Svindelstudien der agenten var Claude ([[OKO-18]]).
  - Anthropics endring til trening på forbrukersamtaler ([[SIK-01]]).
  - Prompt injection og Anthropics nettleseragent ([[SIK-03]]); many-shot jailbreaking og andre Anthropic-eksempler ([[SIK-14]]); «Sleeper Agents» ([[SIK-12]]); Anthropics trusselrapporter ([[SIK-05]]); ASL-3 ([[SIK-16]]); Anthropics samarbeid med Palantir og AWS om amerikansk forsvar ([[SIK-06]]); langsiktig og katastrofal risiko, der Anthropic er et av selskapene med tettest bånd til miljøet bak fokuset på eksistensiell risiko ([[SIK-08]], [[DEM-01]]).
- **Mulig skjevhet:** vurderingene av modellenes verdier, sikkerhet og selskapenes rolle er skrevet av en modell fra et av selskapene som omtales. Det er en grunn til at hver påstand skal kildefestes og sjekkes av et menneske, og til at temaene bør leses av fagpersoner.
