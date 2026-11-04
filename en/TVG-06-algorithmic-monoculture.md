# TVG-06 Algorithmic monoculture

*English translation of [TVG-06 Algoritmisk monokultur](../10-tverrgaende/utkast/TVG-06-algoritmisk-monokultur.md), part of chapter 10, Cross-cutting patterns. Risk type: structural. Horizon: near. Status: candidate.*

*How to read this: the topic is still in note form and will be written up as prose once the sources have been checked. Source IDs in square brackets, such as [K0657], refer to the [source register](../99-kilder/kilderegister.md) and are listed at the end. "(to be checked)" means the source was added from memory and the details must be confirmed. All sources are marked "not verified" until a human has checked them. References to other topics, such as RET-15, are listed at the end with English titles.*

## Keywords and material

- **Core:** whoever owns the models can write tomorrow's truth. When friends discussing local politics, leaders developing strategy and debaters writing their scripts all use the same few models, society's discourse passes through the same filter. This creates a monoculture without precedent, and an extreme concentration of power.
- **Scope:** vendor lock-in as a mechanism is covered in RET-15; renting rather than owning in TVG-07; the values in the models, and influence through simply being present, in DEM-01; refusals in DEM-09; failures in critical operations in SIK-18; the patterns brought together in TVG-03.

### A All discourse through the same filter

- **The filter sits at every stage:** when we *write* (help with the op-ed, the consultation response, the speech, the strategy document), when we *read* (the summary of the case, the debate, the report) and when we *decide* (the sparring before the decision). Discourse is not steered from outside. It is shaped from within, in each individual writing process.
- **Everyday life:** friends who discuss local politics and get help phrasing their views; leaders who discuss strategy with AI; public debaters who write their scripts with AI. Each of these is harmless on its own. Together, everything passes through the same filter.
- **Prompting does not solve it:** you can ask the model to lean in a direction, but the space of possible moves belongs to the model. The phrasing, the counter-arguments it suggests, what it emphasises and what it refuses all come from the same source. Even when it agrees with you, it agrees *in its own way* (DEM-01).
- **The evidence:** writing with an opinionated language model influenced users' own opinions [K0657] (to be checked), and writing with language models reduces the diversity of content [K0556] [K1173] (to be checked). Individual works get better, but collectively they become more alike [K0555].

### B Systematic refusals and full integration

- **Refusals as censorship at scale:** what the model will not write disappears from the drafts, without anyone noticing that it is missing (DEM-09).
- **No way around it:** when the model is built into the office suite, the phone and search, writing without it becomes an active choice, and fewer and fewer people make it (DEM-15).

### C Unprecedented in history

- **From channels to the writing process:** power over discourse used to require many channels, such as newspapers and broadcasting, and it was visible. Now one model sits *inside* each person's writing process, before the thought has been expressed.
- **Ownership is concentrated** in a few companies in one or two countries (OKO-02).

### D It reinforces itself

- **Today's texts are tomorrow's training data:** what the model writes today is what the next model learns from, and the narrowing grows (DEM-05, DEM-06).
- **Whoever publishes the most shapes the next model** (SIK-12, section B). The monoculture is both a result of power and a source of more power.

### E Effects on decisions: no other door

- **Rejected everywhere:** the same person can be rejected in recruitment, credit and case processing because the systems are built on the same models and make the same mistakes [K0239] [K0238].
- **The appeals body as a copy:** if the first instance and the appeals body use the same tool, the appeal gets no real second assessment (RET-09).
- **The legal average:** minority views disappear when everyone interprets the law with the same model (RET-13, section H).

### F The same failure everywhere at once

- **Common cause of failure:** one failure at one supplier hits the whole of society at the same time (SIK-18, section D). The CrowdStrike incident (2024) shows the mechanism without AI: one faulty update knocked out around 8.5 million Windows devices [K0820] [K1262]. That was less than 1% of all Windows machines, but the consequences were large because they were used by enterprises that run "many critical services" [K1262]. The International AI Safety Report describes this as a single point of failure [K0012].
- **The remedy was staged rollout:** CrowdStrike itself writes that the update should have been deployed in stages, and that customers can now choose where and when updates are installed [K0820].

### G The paradox

- **A reality of one's own, and the same answers:** everyone gets their own reality, while everyone also gets the same answers and the same blind spots (LIV-13, section E). The first takes away the common ground, the second takes away the alternatives.

### H How the monoculture arises, and an analogy

- **The mechanisms:** vendor lock-in and shared government solutions (RET-15); supervisory bodies using the same tools as those they supervise (RET-14); use first, control later (TVG-07).
- **Agriculture:** monocultures give high yields, but one disease can wipe out everything. The potato blight in Ireland in the 1840s struck a country that depended on a single variety [K1175]. Diversity is insurance, not inefficiency.

### I Regulatory gaps

- **No rule requires diversity,** and procurement rules often favour a single supplier.
- **Risk per system:** the AI Act assesses risk per system, not the concentration of the whole of society on a few models (REG-02).
- **No rules for models as a common filter for discourse:** neither the Digital Services Act nor the AI Act covers it.

### J Candidates for the recommendations (ANB-01)

- Diversity of models for public discourse, schools and public administration, and different models in the first instance and the appeals body.
- Transparency about the models' defaults and refusals.
- Staged rollout of updates to critical systems, with organisations themselves controlling when updates are installed [K0820].
- Not one state model for the public sector (SIK-02), but not a panic that leads to concentration of power either: diversity also means smaller, open and Norwegian models (SIK-12, section H; SIK-19).
- Norwegian and Nordic alternatives.
- Training in writing *without* AI (TVG-02).

### K Nuance

- **Human judgement also has flaws:** it varies randomly, and the same case can get different outcomes with different caseworkers ("noise") [K1174]. The monoculture removes the noise, but replaces it with a shared bias.
- **People have always borrowed phrasing** from textbooks, newspapers and speechwriters. What is new is not that we get help, but that the source is the same for everyone, sits inside the writing process and is owned by a few.

## Claims

From the [claims register](../10-tverrgaende/pastander.md). Each claim is scored on five criteria (0–3 points each) once its sources have been checked.

| ID | Claim (short) | Sources | Decision |
|---|---|---|---|
| TVG-06.P01 | When many use the same algorithm, overall welfare can be lower than with varied systems | K0238 | not scored |
| TVG-06.P02 | Algorithmic monoculture means the same person can be rejected by every system (homogeneous outcomes) | K0239 | not scored |
| TVG-06.P03 | Shared foundation models make society vulnerable to a single point of failure | K0012 | not scored |
| TVG-06.P04 | The CrowdStrike failure (July 2024) showed how one update can knock out systems worldwide | K0820, K1262 | not scored |
| TVG-06.P05 | When the same few models are used to write, read and decide, society's discourse passes through the same filter | K0657, K0556 | not scored |
| TVG-06.P06 | Writing with an opinionated language model can influence the user's own opinions | K0657 | not scored |
| TVG-06.P07 | Writing with language models reduces content diversity | K0556, K1173 | not scored |
| TVG-06.P08 | Text generated by today's models becomes training data for the next generation and reinforces the narrowing | K0079 | not scored |
| TVG-06.P09 | Monoculture removes random variation in judgement, but replaces it with a shared bias | K1174, K0238 | not scored |

## Sources

All sources are marked "not verified" until a human has checked them.

| ID | Authors | Title | Year | Published in |
|---|---|---|---|---|
| K0012 | Bengio et al. | [International AI Safety Report](https://internationalaisafetyreport.org/publication/international-ai-safety-report-2025) | 2025 | UK Department for Science, Innovation and Technology / AI Security Institute |
| K0079 | Shumailov et al. | [AI models collapse when trained on recursively generated data](https://doi.org/10.1038/s41586-024-07566-y) | 2024 | Nature |
| K0238 | Kleinberg and Raghavan | [Algorithmic monoculture and social welfare](https://arxiv.org/abs/2101.05853) | 2021 | PNAS |
| K0239 | Bommasani et al. | [Picking on the same person: Does algorithmic monoculture lead to outcome homogenization?](https://proceedings.neurips.cc/paper_files/paper/2022/hash/17a234c91f746d9625a75cf8a8731ee2-Abstract.html) | 2022 | NeurIPS |
| K0555 | Doshi and Hauser | [Generative AI enhances individual creativity but reduces the collective diversity of novel content](https://pmc.ncbi.nlm.nih.gov/articles/PMC11244532) | 2024 | Science Advances |
| K0556 | Padmakumar and He | [Does Writing with Language Models Reduce Content Diversity?](https://proceedings.iclr.cc/paper_files/paper/2024/hash/02dec8877fb7c6aa9a79f81661baca7c-Abstract-Conference.html) | 2024 | ICLR |
| K0657 | Jakesch et al. | [Co-Writing with Opinionated Language Models Affects Users' Views](https://doi.org/10.1145/3544548.3581196) | 2023 | CHI |
| K0820 | CrowdStrike | [External Technical Root Cause Analysis – Channel File 291](https://www.crowdstrike.com/wp-content/uploads/2024/08/Channel-File-291-Incident-Root-Cause-Analysis-08.06.2024.pdf) | 2024 | CrowdStrike |
| K1173 | Sourati, Ziabari and Dehghani | [The Homogenizing Effect of Large Language Models on Human Expression and Thought](https://arxiv.org/abs/2508.01491) | 2025 | arXiv |
| K1174 | Kahneman, Sibony and Sunstein | Noise: A Flaw in Human Judgment | 2021 | Little, Brown Spark |
| K1175 | [unknown, historical overview] | [The potato blight in Ireland (1840s): dependence on a single potato variety] | – | – |
| K1262 | Weston (Microsoft) | [Helping our customers through the CrowdStrike outage](https://blogs.microsoft.com/blog/2024/07/20/helping-our-customers-through-the-crowdstrike-outage/) | 2024 | The Official Microsoft Blog |

Entries in square brackets without a link are placeholders for a source that has not yet been found.

## Referenced topics

The topics are in Norwegian.

| ID | Topic |
|---|---|
| [ANB-01](../12-anbefalinger/utkast/ANB-01-anbefalinger-etter-adressat.md) | Recommendations by addressee |
| [DEM-01](../06-del-II-demokrati/utkast/DEM-01-pavirkning-og-manipulasjon.md) | Influence and manipulation |
| [DEM-05](../06-del-II-demokrati/utkast/DEM-05-forskning-og-kunnskapsallmenningen.md) | Research and the knowledge commons |
| [DEM-06](../06-del-II-demokrati/utkast/DEM-06-sprak-og-kultur.md) | Language and culture |
| [DEM-09](../06-del-II-demokrati/utkast/DEM-09-ytringsfrihet-modellens-regler.md) | Freedom of expression and the models' rules |
| [DEM-15](../06-del-II-demokrati/utkast/DEM-15-epistemisk-avhengighet.md) | Epistemic dependence |
| [LIV-13](../05-del-I-livslop/utkast/LIV-13-handlingsevne.md) | Agency |
| [OKO-02](../08-del-IV-okonomi/utkast/OKO-02-maktkonsentrasjon-og-suverenitet.md) | Concentration of power and digital sovereignty |
| [REG-02](../04-regulering/utkast/REG-02-hullene.md) | The regulatory gaps |
| [RET-09](../07-del-III-rettsstat/utkast/RET-09-utlendingsforvaltningen.md) | Immigration administration |
| [RET-13](../07-del-III-rettsstat/utkast/RET-13-ki-i-lovarbeid.md) | AI in law-making |
| [RET-14](../07-del-III-rettsstat/utkast/RET-14-tilsyn-og-kontroll-ki.md) | Supervision and oversight of AI |
| [RET-15](../07-del-III-rettsstat/utkast/RET-15-anskaffelser-og-leverandorbinding.md) | Procurement and vendor lock-in |
| [SIK-02](../09-del-V-sikkerhet/utkast/SIK-02-skygge-ki.md) | Shadow AI |
| [SIK-12](../09-del-V-sikkerhet/utkast/SIK-12-forgiftede-modeller.md) | Poisoned models |
| [SIK-18](../09-del-V-sikkerhet/utkast/SIK-18-utilsiktede-ki-feil.md) | Unintended AI failures |
| [SIK-19](../09-del-V-sikkerhet/utkast/SIK-19-apne-modeller.md) | Open models |
| [TVG-02](../10-tverrgaende/utkast/TVG-02-ki-kompetanse-som-forkledd-risiko.md) | AI literacy as a disguised risk |
| [TVG-03](../10-tverrgaende/utkast/TVG-03-monstre-som-gar-igjen.md) | Recurring patterns |
| [TVG-07](../10-tverrgaende/utkast/TVG-07-leie-ikke-eie.md) | Renting, not owning |
