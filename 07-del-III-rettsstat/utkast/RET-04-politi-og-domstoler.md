---
id: RET-04
tittel: Politi og domstoler
del: Del III – Rettsstat og forvaltning
status: stikkord
risikotype: ikke vurdert
sist_endret: 2026-10-23
---

# RET-04 Politi og domstoler

> Påstander: RET-04.P01–RET-04.P11 i [pastander.md](../pastander.md). Kilder: [kilder.md](../kilder.md) (K-ID-er slås opp i `99-kilder/kilderegister.md`). Uttalelser: [uttalelser.md](../uttalelser.md).

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

*Utvidet 2026-10-20 etter gjennomgang. «Sjekk» betyr at kilden er satt opp fra hukommelsen og at detaljer må bekreftes.*

- **Kjerne:** maktmidlene og bevisene – det som skjer når staten etterforsker, beviser og dømmer. Prediktivt politiarbeid er det farligste: man kan bli mistenkt fordi man *ligner* et nettverk, ikke fordi man har gjort noe.
- **Poenget:** problemet er ikke lenger om avgjørelsen er automatisert, men om KI-en legger fram så overbevisende evidens at den menneskelige kontrolløren tar feil avgjørelse.
- **Avgrensning:** COMPAS og tilbakekoblingssløyfer står i [[RET-03]]; løgnerens bonus i [[DEM-02]]; oppdiktede kilder i [[RET-05]]; KI-rettshjelp og flommen av klager i [[RET-11]].

### A Bevisets ekthet – metadata er ikke svaret alene

- **Fri bevisbedømmelse:** Norge har ingen egne regler for å fastslå at digitale bevis er ekte.
- **Motargumentet er metadata og vannmerker** – innholdsopprinnelse etter C2PA-standarden [K0888] og vannmerker i genererte bilder (sjekk). Men all metadata kan fjernes – og vil bli fjernet for å så tvil. Åpne modeller merker ikke det de lager. Og de fleste *ekte* opptak er ikke signert, så fravær av metadata beviser ingenting.
- **Begge veier:** den skyldige kan påstå at ekte bevis er laget med KI ([[DEM-02]], avsnitt I); den uskyldige kan felles av et falskt.
- **Kompetansen er knapp:** få sakkyndige kan avgjøre hva som er ekte.

### B Ansiktsgjenkjenning – presis i laben, usikker i felten

- **Treffsikkerheten avhenger av bildene:** svært treffsikker på gode bilder, langt dårligere på overvåkingsvideo. De fleste av 189 testede algoritmer hadde flere falske treff for noen grupper [K0889].
- **Mange skannet, få lett etter:** når mange skannes for å finne noen få, blir det mange falske treff.
- **Konsekvensen:** minst 14 kjente feilarrestasjoner i USA, nesten alle av svarte [K0890] (sjekk). Å mistenke feil person er ikke nytt. Det nye er skalaen, skjevhetene ([[RET-03]], avsnitt A) og at treffet behandles som bevis ([[RET-02]], avsnitt C).
- **Norge:** Kripos' verktøy for ansiktssøk (fra 2023, mot overgrepsmateriale) rulles ut til alle politidistrikter fra 2026 [K0891] (sjekk registre). Et lovforslag fra november 2025 tillater ansiktsgjenkjenning i etterkant med forhåndsgodkjenning fra påtalemyndigheten, ikke i sanntid [K0892]. Tekna har kritisert at personvernvurderingen er for svak [K0893].
- **KI-forordningen** forbyr biometrisk fjernidentifikasjon i sanntid i offentlige rom, med unntak; bruk i etterkant er høyrisiko [K0001]. Forordningen er ennå ikke norsk lov. Datatilsynet om politiets bruk [K0119].
- **Clearview AI** [K0894] viser grensen mellom etterforskning og masseovervåking.

### C Prediktivt politiarbeid – skyldig ved likhet

- **Scenario:** en person handler på de samme stedene, besøker de samme forumene og liker den samme maten som et kjent terrornettverk. Skal hen stemples av en algoritme?
- **Basisratefeilen:** når de man leter etter er ekstremt sjeldne, er de fleste som flagges uskyldige – selv med lav feilrate.
- **SKYNET:** NSAs program brukte maskinlæring for å finne kurerer for terrornettverk i Pakistan, og flagget lederen for Al Jazeeras kontor i Islamabad som mistenkt fordi reisemønsteret hans lignet. Modellen var trent på rundt sju kjente kurerer [K0895] (sjekk).
- **Problemet er ikke automatiseringen – men overbevisningen:** spørsmålet er ikke lenger om avgjørelsen er automatisert, men om KI-en legger fram så overbevisende evidens at den menneskelige kontrolløren tar feil avgjørelse. Et menneske i løkka beskytter ikke når mennesket blir overbevist av maskinen ([[RET-02]], avsnitt C – automatiseringsbias). Det er det samme mønsteret som i feilarrestasjonene i avsnitt B.
- **Konsekvensen:** man havner på en liste man ikke vet om og ikke kan klage på – og folk begynner å tilpasse seg overvåkingen ([[DEM-11]], [[DEM-09]]).
- **Det store hullet:** KI-forordningen forbyr å forutsi lovbrudd hos enkeltpersoner *bare* ut fra profilering, men **nasjonal sikkerhet er helt unntatt** fra forordningen (art. 2, sjekk) [K0001]. PST og Etterretningstjenesten faller utenfor – også KI-analyse av tilrettelagt innhenting [K0896] (sjekk). Kontrollen ligger hos EOS-utvalget.
- **Kobling:** tilbakekoblingssløyfer i [[RET-03]], avsnitt H.

### D Transkripsjon, logger og lagring

- **Samme lærdom som i [[RET-06]]:** opptaket må bevares; transkripsjonen er en tolkning.
- **Presset på lagringen:** lagringsplass og kostnad, *redundans* (sikkerhetskopier) og *integritet* (bevis for at opptaket ikke er endret – kontrollsum og dokumentert kjede av hvem som har hatt det). Når lagring koster, er det fristende å bare beholde teksten ([[RET-10]]).
- **Hvem lagrer?** Ligger opptakene hos en skyleverandør ([[SIK-01]])? Forsvaret må få tilgang til råmaterialet, ikke bare sammendraget.

### E Etterforskning med KI – likestilling mellom partene

- Analyse av beslaglagte telefoner og store datamengder sparer tid, men forsvareren kan ikke etterprøve verktøyene. Når påtalemyndigheten har KI-verktøyene og forsvaret ikke, svekkes likestillingen mellom partene (EMK art. 6, sjekk).

### F Dommeren og KI

- Domstoladministrasjonen har retningslinjer om KI-bruk [K0117] (sjekk); Advokatforeningen har uttalt seg [K0118].
- **RET-02-problemet i rettssalen:** bruker en dommer KI til å skrive eller vurdere, dømmer fortsatt dommeren? Retten til rettferdig rettergang (Grunnloven § 95, EMK art. 6) og domstolenes uavhengighet står på spill.

### G Norsk forankring

- Straffeprosessloven; politiloven; politiregisterloven og lovforslaget om ansiktsgjenkjenning [K0892]; etterretningstjenesteloven [K0896]; Grunnloven §§ 95 og 102 [K0003]; EMK art. 6 og 8 [K0128]; Datatilsynet [K0119]; EOS-utvalget.

### H Kandidater til [[ANB-01]]

- Ansiktsgjenkjenning skal aldri alene være grunnlag for pågripelse – treffet må bekreftes uavhengig, slik Detroit nå krever [K0898] (sjekk).
- Forbud mot individuell prediksjon av lovbrudd også innen nasjonal sikkerhet, med tilsyn fra EOS-utvalget.
- Opplæring i at overbevisende KI-evidens ikke er bevis – kontrolløren må vite hvordan systemet kan ta feil.
- Standard for digitale bevis: signering ved opptak (f.eks. kroppskameraer) og flere sakkyndige.
- Bevaring av rådata med integritetssikring, og innsyn for forsvaret.
- Retningslinjer for dommeres bruk av KI.

### I Nyanse

- **KI kan finne overgrepsmateriale og identifisere ofre raskere** – nettopp det Kripos har brukt verktøyet til. Gamle saker kan løses og køene kortes.
- **Mennesker er heller ikke presise:** øyenvitner tar ofte feil. Spørsmålet er om KI brukes som et spor – eller som et bevis.
