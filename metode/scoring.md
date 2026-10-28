# Scoringssystem for påstander

Versjon 1.3 · innført 2026-10-12 (E008), kriterierekkefølge endret 2026-10-13 (E010), A (aktualitet) omdefinert til gyldighet 2026-10-27, dokumenterte hendelser og N i sammenhengen 2026-10-28. Terskler og vekting kan justeres her. Endringer i systemet logges ikke i innfasingsperioden (se `regler.md` §9).

## Kriterier (ENUVA)

Hver påstand scores på fem kriterier, 0–3 poeng hver. Kriteriene står i rekkefølgen **E-N-U-V-A**, og den rekkefølgen brukes overalt (tabeller, kolonner, skåring).

| Kode | Kriterium | 0 | 1 | 2 | 3 |
|---|---|---|---|---|---|
| E | Evidensstyrke | Ingen verifiserbar kilde | Enkeltstudie, preprint, anekdote, journalistikk | Fagfellevurdert studie eller offisielle data | Flere uavhengige fagfellevurderte studier eller offisielle data |
| N | Norsk relevans | Ingen | Indirekte/overførbar | Norsk kontekst omtalt | Norske data, saker eller institusjoner |
| U | Uavhengige kilder | 0 | 1 | 2 | 3 eller flere |
| V | Verdikobling | Ingen | Svak | Tydelig kobling til én verdi i [[INN-03]] | Sentral for en verdi i [[INN-03]] |
| A | Aktualitet | Utdatert eller uverifisert: motbevist eller erstattet av nyere forskning, loven er endret, eller kilden er ikke sjekket | Usikker gyldighet: feltet har endret seg mye siden (f.eks. studier av eldre KI-modeller, lovforslag under behandling), eller nyere forskning trekker i ulike retninger | Gyldig: ingen kjent nyere forskning eller endring sier noe annet, uansett hvor gammel kilden er | Gyldig og fersk, eller bekreftet: kilden gjelder dagens situasjon (gjeldende lov, siste tall, nyere studier av dagens teknologi), eller nyere forskning bekrefter funnet |

**A måler om kunnskapen fortsatt er gyldig, ikke når den sist ble sjekket.** Når påstanden sist ble sjekket, står i «Sist sjekket» og følges opp i dateringslisten. A teller heller ikke kilder (det gjør U): bekreftelse fra nyere forskning kan føres i kommentaren uten å bli en egen kilde. Eksempler: et klassisk funn som er gjentatt i mange senere studier, får 3; en eldre studie uten kjent oppfølging får 2; en studie fra 2023 av en KI-modell som er erstattet, får 1; et lovforslag som er trukket, får 0.

**Dokumenterte hendelser.** Når påstanden bare slår fast at noe har skjedd eller er sagt, og primærdokumentet er verifisert, gir det E = 3 og U = 3. Andre kilder ville bare gjengitt dokumentet. Eksempler: et søksmål er anlagt, en lov er vedtatt, en rapport er publisert, en myndighet har uttalt noe. Primærdokumentet kan være et rettsdokument, en lovtekst, et vedtak eller utgiverens egen publikasjon. Unntaket gjelder ikke påstander om utfall, årsaker, virkninger eller om det dokumentet hevder er sant. «NYT saksøkte OpenAI» er omfattet. «OpenAI har brutt opphavsretten» er ikke omfattet.

**N vurderes i sammenhengen.** Norsk relevans vurderes ut fra hvordan påstanden brukes i temaet, ikke bare ut fra ordlyden. En utenlandsk sak som temaet knytter til en norsk sak, lov eller institusjon, gir 2.

## Regler

- Sum 0–15.
- **Sperre:** E = 0 gir automatisk forkasting, uansett sum.
- **≥ 10:** inkluderes.
- **7–9:** «styrkes» – krever ny kilde eller omformulering, deretter ny scoring.
- **≤ 6:** forkastes og føres i endringsloggen med begrunnelse.
- Et kandidat-tema beholdes bare hvis det har minst 2 inkluderte påstander. Ellers slås det sammen med et annet tema eller kuttes, og det føres i endringsloggen.
- Terskler og vekting kan justeres i denne fila. Forkasting og sammenslåing logges alltid. Endringer i selve systemet logges ikke i innfasingsperioden (se `regler.md` §9).

## Vekting

| Kriterium | Vekt |
|---|---|
| E | 1,0 |
| N | 1,0 |
| U | 1,0 |
| V | 1,0 |
| A | 1,0 |

## Beslutningsverdier i `pastander.md`

`ikke scoret` · `inkluderes` · `styrkes` · `forkastet`

## Kolonner i `pastander.md`

| ID | Påstand (kort) | Kilde-ID-er | E | N | U | V | A | Sum | Beslutning | Lest av fagperson (antall, roller) | Sist sjekket |
|---|---|---|---|---|---|---|---|---|---|---|---|

## Kobling til evidensgraderingen i teksten (veiledende)

Disposisjonens minstestandard krever at evidensstyrke merkes i teksten som *sterk*, *moderat* eller *svak/tidlig*. Veiledende kobling: E = 3 → sterk, E = 2 → moderat, E = 1 → svak/tidlig. Skalaen forklares i [[INN-04]].

## Fremgangsmåte

1. Registrer påstanden med ID og kilde-ID-er (Beslutning: `ikke scoret`).
2. Verifiser kildene i 99 først – uverifiserte kilder gir A = 0.
3. Scor E, N, U, V og A. Regn ut summen.
4. Sett beslutning etter reglene over, og sett «Sist sjekket».
5. Forkastede påstander: før dem i endringsloggen med score og begrunnelse.
