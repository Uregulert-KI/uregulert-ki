# Dugnadsoppgave 4: Kilde- og påstandssjekk

**Mål:** at hver påstand kan spores til en kilde som faktisk sier det rapporten hevder.

Alle kildene står i dag som «ikke verifisert». Mange har fått tittel, forfatter og lenke av en KI-agent, men ingen har kontrollert at kilden sier det påstanden bygger på. Det er denne jobben.

## Før du begynner

Denne oppgaven krever at du er komfortabel med å lese forskning og fagtekster presist, og med nyansene i hvordan kunnskap uttrykkes:

- forskjellen på at en studie **viser**, **tyder på** og **antyder**
- forskjellen på **én studie**, **flere uavhengige studier** og **konsensus i fagmiljøet**
- forskjellen på **anklage, tiltale og dom**, og på **vedtatt, i kraft, foreslått og trukket**
- at **tall, datoer, navn på saker og artikkelnummer** tas fra kilden, ikke fra hukommelsen

En påstand kan ha riktig kilde og likevel si mer enn kilden gjør. Det er ofte der feilene ligger.

*Usikker på om du har det som trengs, men vil gjerne bidra? Ta kontakt (se [README](../README.md#forfatter-og-kontakt)). Vi finner en oppgave som passer, eller går gjennom de første kildene sammen.*

## Enklest: ta en sjekkpakke

Hvert tema har en ferdig **sjekkpakke**: et regneark med alle påstandene i temaet, kildene deres med lenke og det rapporten sier. Du fyller inn status på kilden, scoring og kommentarer, og sender arket tilbake. Se hvilke temaer som er ledige i [fordelingslisten](fordeling.md). Veiledningen står i arket «Les meg».

Resten av denne siden forklarer hva sjekken går ut på, og hvordan du gjør det direkte i registrene hvis du er vant til GitHub.

## Hva du kan bidra med

| Del | Hva det er | Hvor | Passer for |
|---|---|---|---|
| **A Verifiser en kilde** | Finn originalen, sjekk at den sier det rapporten bygger på, og fyll inn metadata | [`99-kilder/kilderegister.md`](../99-kilder/kilderegister.md) | Alle |
| **B Vurder en påstand** | Gi påstanden en vurdering etter [scoringsrammeverket](../metode/scoring.md), eller les den som fagperson | `pastander.md` i hver del | Fagfolk |
| **C Sjekk dateringslista** | Er lovstatus, rettssaker og tall fortsatt riktige? | [`metode/dateringsliste.md`](../metode/dateringsliste.md) | Alle, særlig jurister og journalister |

**Hvor du kan begynne:** kilder merket «usikker» i «Merknad» (agenten fant flere mulige kandidater), påstander uten kilde («mangler kilde») og opplysninger merket «(sjekk)» i temaene.

## A Verifiser en kilde

1. Finn kilden i kilderegisteret (K-ID, f.eks. `K0123`). «Brukt i» viser hvilke temaer som bruker den.
2. Finn originalen. Primærkilden går foran omtaler av den.
3. Les det som er relevant, og sammenlign med påstanden(e) som bruker kilden.
4. Fyll inn: eksakt tittel (fjern [klammer]), forfattere, år, utgiver, DOI/URL, fagfellevurdert (`ja` / `nei` / `preprint`, tomt hvis det ikke er relevant, for eksempel for lov, dom eller nyhet) og «Dato lest».
5. Sett **Status** (definisjonene står øverst i kilderegisteret): `verifisert` · `delvis` · `sekundær` · `ikke funnet` · `feil`
6. Er status `verifisert` eller `delvis`: oppgi hvor i kilden det står. Side (rapport, bok, artikkel), § og ledd (lov), artikkel og nummer (EU-rett), avsnitt (dom) eller overskrift (nettside).
7. Skriv i «Merknad» hvis noe avviker, ligger bak betalingsmur eller er uventet.

## B Vurder en påstand

- Vurderingen følger [scoringsrammeverket](../metode/scoring.md): E (evidensstyrke), N (norsk relevans), U (uavhengige kilder), V (verdikobling) og A (aktualitet), 0–3 hver.
- Som fagperson: fyll inn antall og rolle i kolonnen «Lest av fagperson», f.eks. «1: skoleforsker». **Navn føres ikke her.**

## C Sjekk dateringslista

- Seksjon 1 er den viktigste. Fyll inn «Resultat» (`uendret` · `endret – rettet` · `endret – må rettes` · `ikke funnet`) og «Sist sjekket».

## Slik sender du inn

En utfylt sjekkpakke sendes på e-post til forfatteren eller legges ved en pull request. Endringer direkte i registeret sendes som pull request eller som en issue her på GitHub. Forslag til endringer i selve temateksten sendes som issue. Forfatteren vurderer og legger inn.

## Føringer

- Les de [felles reglene](../metode/dugnad-veiledning.md#regler).
