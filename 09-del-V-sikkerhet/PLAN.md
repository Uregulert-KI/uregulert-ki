# PLAN – Del V – Sikkerhet og beredskap

Mappe: `09-del-V-sikkerhet/` · Prefiks: `SIK` · Sist endret: 2026-10-13

## Mål

Delens poeng: de største sikkerhetsrisikoene kommer ikke nødvendigvis fra fiendtlige aktører, men fra vanlige folk som bruker KI fordi det er beleilig – og fra en avhengighet ingen har vedtatt.

## Underkapitler og status

Rekkefølgen i tabellen er rekkefølgen i rapporten. ID-ene sier ingenting om plassering.

| Rekkefølge | ID | Tittel | Fil | Status | Påstander |
|---|---|---|---|---|---|
| 1 | SIK-01 | Datainnsamling og personvern | [utkast/SIK-01-datainnsamling-og-personvern.md](utkast/SIK-01-datainnsamling-og-personvern.md) | stikkord | 14 |
| 2 | SIK-02 | Skygge-KI og ufrivillige innsidetrusler | [utkast/SIK-02-skygge-ki.md](utkast/SIK-02-skygge-ki.md) | stikkord | 8 |
| 3 | SIK-03 | KI-agenter og prompt injection | [utkast/SIK-03-ki-agenter-og-prompt-injection.md](utkast/SIK-03-ki-agenter-og-prompt-injection.md) | stikkord | 7 |
| 4 | SIK-04 | Sammenstilling og kartlegging | [utkast/SIK-04-sammenstilling-og-kartlegging.md](utkast/SIK-04-sammenstilling-og-kartlegging.md) | stikkord | 11 |
| 5 | SIK-05 | Cyberkriminalitet og svindel | [utkast/SIK-05-cyberkriminalitet-og-svindel.md](utkast/SIK-05-cyberkriminalitet-og-svindel.md) | stikkord | 8 |
| 6 | SIK-06 | KI og krigføring | [utkast/SIK-06-ki-og-krigforing.md](utkast/SIK-06-ki-og-krigforing.md) | stikkord | 9 |
| 7 | SIK-07 | Beredskap og avhengighet | [utkast/SIK-07-beredskap-og-avhengighet.md](utkast/SIK-07-beredskap-og-avhengighet.md) | stikkord | 7 |
| 8 | SIK-08 | Langsiktig og katastrofal risiko | [utkast/SIK-08-langsiktig-og-katastrofal-risiko.md](utkast/SIK-08-langsiktig-og-katastrofal-risiko.md) | stikkord | 9 |
| 9 | SIK-09 | Statens egen overvåking med KI | [utkast/SIK-09-statens-overvaking-med-ki.md](utkast/SIK-09-statens-overvaking-med-ki.md) | kandidat | 7 |
| 10 | SIK-10 | Chatboter som radikaliserer | [utkast/SIK-10-chatboter-som-radikaliserer.md](utkast/SIK-10-chatboter-som-radikaliserer.md) | kandidat | 8 |
| 12 | SIK-12 | Forgiftede modeller og leverandørkjeden | [utkast/SIK-12-forgiftede-modeller.md](utkast/SIK-12-forgiftede-modeller.md) | kandidat | 8 |
| 13 | SIK-13 | Krisekommunikasjon og desinformasjon i krise | [utkast/SIK-13-krisekommunikasjon.md](utkast/SIK-13-krisekommunikasjon.md) | kandidat | 5 |
| 14 | SIK-14 | KI-modellene som angrepsmål | [utkast/SIK-14-modellene-som-angrepsmal.md](utkast/SIK-14-modellene-som-angrepsmal.md) | kandidat | 7 |
| 15 | SIK-15 | KI-leverandører i totalforsvaret | [utkast/SIK-15-leverandorer-i-totalforsvaret.md](utkast/SIK-15-leverandorer-i-totalforsvaret.md) | kandidat | 6 |
| 16 | SIK-16 | Lavere terskel for terror og enkeltaktører | [utkast/SIK-16-terror-og-enkeltaktorer.md](utkast/SIK-16-terror-og-enkeltaktorer.md) | kandidat | 9 |
| 17 | SIK-17 | Sabotasje, hybride angrep og kritisk infrastruktur | [utkast/SIK-17-sabotasje-og-hybride-angrep.md](utkast/SIK-17-sabotasje-og-hybride-angrep.md) | kandidat | 12 |
| 18 | SIK-18 | Utilsiktede KI-feil i kritisk drift | [utkast/SIK-18-utilsiktede-ki-feil.md](utkast/SIK-18-utilsiktede-ki-feil.md) | kandidat | 10 |
| 19 | SIK-19 | Åpne modeller – et dilemma uten enkel løsning | [utkast/SIK-19-apne-modeller.md](utkast/SIK-19-apne-modeller.md) | kandidat | 8 |

## Avhengigheter

### Viser til
- SIK-01 → [[SIK-04]], [[SIK-09]], [[SIK-02]], [[RET-10]], [[LIV-02]], [[TVG-05]], [[OKO-10]], [[ANB-01]], [[SIK-19]]
- SIK-02 → [[RET-10]], [[RET-02]], [[RET-05]], [[SIK-01]], [[SIK-03]], [[SIK-04]], [[LIV-03]], [[ANB-01]], [[TVG-06]]
- SIK-03 → [[SIK-02]], [[SIK-14]], [[SIK-12]], [[RET-12]], [[LIV-17]], [[OKO-16]], [[ANB-01]]
- SIK-04 → [[SIK-01]], [[SIK-09]], [[DEM-11]], [[TVG-05]], [[RET-04]], [[LIV-07]], [[DEM-04]], [[SIK-17]], [[ANB-01]]
- SIK-05 → [[LIV-10]], [[LIV-16]], [[LIV-17]], [[DEM-03]], [[OKO-18]], [[SIK-17]], [[DEM-06]], [[SIK-04]], [[RAM-02]], [[ANB-01]], [[RET-07]]
- SIK-06 → [[RET-04]], [[SIK-15]], [[SIK-17]], [[SIK-08]], [[RET-01]], [[OKO-09]], [[RET-13]], [[DEM-13]], [[SIK-16]], [[ANB-01]]
- SIK-07 → [[LIV-03]], [[OKO-01]], [[SIK-17]], [[SIK-15]], [[OKO-02]], [[DEM-15]], [[OKO-15]], [[RET-15]], [[OKO-16]], [[REG-02]], [[ANB-01]], [[SIK-13]]
- SIK-08 → [[SIK-16]], [[SIK-12]], [[DEM-01]], [[SIK-19]], [[REG-04]], [[OKO-09]], [[ANB-01]], [[TVG-10]]
- SIK-09 → [[RET-04]], [[RET-16]], [[SIK-04]], [[DEM-11]], [[RET-15]], [[OKO-02]], [[ANB-01]], [[OKO-07]]
- SIK-10 → [[LIV-07]], [[DEM-17]], [[SIK-16]], [[DEM-02]], [[DEM-09]], [[SIK-19]], [[REG-03]], [[ANB-01]]
- SIK-12 → [[SIK-14]], [[DEM-04]], [[DEM-02]], [[SIK-03]], [[SIK-19]], [[DEM-06]], [[DEM-13]], [[SIK-01]], [[ANB-01]], [[OKO-02]]
- SIK-13 → [[DEM-02]], [[DEM-03]], [[LIV-17]], [[SIK-07]], [[SIK-17]], [[SIK-06]], [[RAM-02]], [[ANB-01]]
- SIK-14 → [[SIK-03]], [[SIK-12]], [[SIK-19]], [[SIK-01]], [[ANB-01]]
- SIK-15 → [[SIK-07]], [[SIK-17]], [[RET-15]], [[OKO-02]], [[SIK-06]], [[SIK-18]], [[SIK-02]], [[DEM-01]], [[RET-02]], [[REG-02]], [[SIK-01]], [[ANB-01]]
- SIK-16 → [[SIK-10]], [[SIK-08]], [[SIK-17]], [[SIK-19]], [[SIK-14]], [[ANB-01]], [[SIK-09]]
- SIK-17 → [[SIK-12]], [[SIK-14]], [[SIK-03]], [[SIK-07]], [[SIK-15]], [[SIK-06]], [[SIK-05]], [[LIV-17]], [[SIK-04]], [[DEM-01]], [[SIK-10]], [[OKO-02]], [[RET-02]], [[RET-04]], [[TVG-03]], [[SIK-13]], [[SIK-08]], [[ANB-01]], [[DEM-03]]
- SIK-18 → [[RET-05]], [[TVG-06]], [[SIK-17]], [[SIK-03]], [[OKO-10]], [[SIK-07]], [[OKO-12]], [[REG-03]], [[REG-04]], [[RET-01]], [[OKO-09]], [[ANB-01]]
- SIK-19 → [[SIK-12]], [[SIK-14]], [[SIK-10]], [[OKO-02]], [[DEM-06]], [[DEM-16]], [[REG-04]], [[LIV-16]], [[SIK-04]], [[SIK-05]], [[SIK-01]], [[SIK-07]], [[SIK-15]], [[DEM-09]], [[DEM-05]], [[RAM-02]], [[ANB-01]]

### Vises til fra andre mapper
- SIK-01 ← [[INN-04]], [[REG-01]], [[LIV-02]], [[LIV-05]], [[RET-04]], [[RET-06]], [[RET-08]], [[RET-15]], [[OKO-02]], [[TVG-03]], [[TVG-05]], [[TVG-09]], [[ANB-01]]
- SIK-02 ← [[RAM-02]], [[REG-01]], [[RET-01]], [[RET-02]], [[RET-05]], [[RET-10]], [[TVG-02]], [[TVG-03]], [[TVG-04]], [[TVG-06]], [[TVG-09]], [[ANB-01]], [[VED-01]]
- SIK-03 ← [[INN-04]], [[REG-01]], [[REG-03]], [[LIV-17]], [[RET-12]], [[OKO-16]], [[TVG-02]], [[TVG-03]], [[ANB-01]]
- SIK-04 ← [[REG-01]], [[DEM-04]], [[DEM-11]], [[RET-09]], [[RET-16]], [[TVG-03]], [[TVG-04]], [[TVG-05]], [[TVG-09]], [[ANB-01]]
- SIK-05 ← [[INN-04]], [[RAM-02]], [[REG-01]], [[LIV-06]], [[LIV-10]], [[LIV-17]], [[DEM-02]], [[RET-07]], [[OKO-16]], [[OKO-18]], [[TVG-01]], [[TVG-03]], [[TVG-04]], [[TVG-05]], [[TVG-09]], [[ANB-01]]
- SIK-06 ← [[INN-04]], [[INN-05]], [[REG-02]], [[RET-01]], [[RET-13]], [[TVG-03]], [[TVG-10]], [[ANB-01]]
- SIK-07 ← [[INN-05]], [[LIV-03]], [[DEM-15]], [[RET-15]], [[OKO-02]], [[OKO-15]], [[TVG-02]], [[TVG-03]], [[TVG-04]], [[TVG-07]], [[TVG-09]], [[TVG-10]], [[ANB-01]]
- SIK-08 ← [[INN-04]], [[RAM-02]], [[REG-01]], [[REG-04]], [[DEM-01]], [[RET-00]], [[TVG-10]]
- SIK-09 ← [[REG-02]], [[REG-03]], [[RET-04]], [[RET-16]], [[OKO-07]], [[TVG-03]], [[TVG-09]]
- SIK-10 ← [[LIV-07]], [[DEM-09]], [[DEM-17]], [[TVG-03]], [[TVG-04]]
- SIK-12 ← [[INN-04]], [[RAM-02]], [[REG-01]], [[DEM-04]], [[TVG-03]], [[TVG-06]]
- SIK-13 ← [[LIV-17]], [[DEM-02]], [[TVG-03]], [[TVG-04]], [[TVG-09]]
- SIK-14 ← [[INN-04]]
- SIK-15 ← [[RET-15]], [[OKO-02]], [[TVG-03]], [[TVG-07]], [[TVG-09]], [[VED-03]]
- SIK-16 ← [[INN-04]], [[REG-03]], [[LIV-07]], [[DEM-09]], [[DEM-17]], [[TVG-04]], [[TVG-10]]
- SIK-17 ← [[REG-01]], [[LIV-17]], [[RET-01]], [[OKO-02]], [[OKO-15]], [[TVG-03]], [[TVG-04]], [[TVG-10]]
- SIK-18 ← [[REG-01]], [[REG-02]], [[REG-03]], [[LIV-03]], [[RET-01]], [[RET-05]], [[OKO-12]], [[TVG-02]], [[TVG-03]], [[TVG-06]], [[TVG-07]], [[TVG-09]]
- SIK-19 ← [[RAM-02]], [[REG-01]], [[REG-02]], [[REG-03]], [[DEM-06]], [[DEM-09]], [[RET-01]], [[RET-15]], [[TVG-06]]
