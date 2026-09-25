---
title: Medication Risks
weight: 10
---

{{< notice warning "Medication Safety" >}}
GAHT medicines have real risks. Use the route and dose carefully, aiming for the lowest effective exposure while preserving treatment benefit.
{{< /notice >}}

## Estrogen Risks {#estrogen-risks}

Common adverse effects of estrogen include **breast tenderness or breast pain, abdominal pain, edema, and headache**.

Serious adverse effects include:

- **Venous thromboembolism**, which can lead to myocardial infarction or stroke. Oral estradiol and synthetic estrogens such as ethinylestradiol carry higher risk.
- **Breast cancer**, especially for people with a family history or pathogenic BRCA1/2 variants.

### Estrogen and Thrombosis {#blood-clots-risk}

Approximate relative thrombosis risks from the Chinese source page:

```csv
Estrogen exposure,Thrombosis risk ratio
Oral estradiol <= 1 mg/day,1.2x
Oral estradiol > 1 mg/day,1.4x
Oral estradiol about 1 mg/day plus progestogen,1.4-1.8x
Transdermal estradiol <= 50 ug/day,0.9x
Transdermal estradiol > 50 ug/day,1.1x
Oral conjugated estrogens <= 0.625 mg/day,1.4x
Oral conjugated estrogens > 0.625 mg/day,1.7x
Oral conjugated estrogens about 0.625 mg/day plus progestogen,1.5-2.4x
Modern contraceptives such as Diane-35,4.2x
Older high-dose ethinylestradiol contraceptives,4-10x
High-dose injected polyestradiol phosphate,2.1x
High-dose oral synthetic estrogens,5.7-10x
SERMs such as tamoxifen or raloxifene,about 1.5-3x
High-dose cyproterone acetate monotherapy,3-5x
```

### Estrogen and Breast Cancer {#breast-cancer-risk}

- High estrogen exposure is closely related to breast-cancer incidence.
- In a Dutch nationwide cohort, breast-cancer risk among transgender women receiving hormone therapy was higher than among cisgender men but lower than among cisgender women.
- Transgender people receiving hormone therapy can generally follow the same screening guidance used for comparable cisgender populations, adjusted for individual risk.
- People with a family history of breast cancer, especially pathogenic BRCA1/2 variants, should use a monitoring strategy comparable to that recommended for close cisgender female relatives.
- Older transgender people may consider whether continuing hormone therapy remains appropriate for their individual breast-cancer risk, with professional guidance.

## Progestogen Risks {#progestogen-risks}

Oral progesterone is associated with neurosteroid-like side effects similar to alcohol, such as sedation. Non-oral progesterone has no well-established specific side effects in the cited source. Synthetic progestogens are covered under antiandrogen risks when used for androgen suppression.

## Antiandrogen Risks {#antiandrogen-risks}

### Cyproterone Acetate {#cyproterone}

Common side effects include weight gain or loss, depression, reduced libido, erectile dysfunction, and reduced sperm production, which may reverse after stopping.

Serious adverse effects include **liver toxicity, benign and malignant liver tumors, potentially fatal intra-abdominal bleeding, meningioma, and thromboembolism**. Existing EU risk restrictions note that cyproterone-containing medicines should not be used in patients with current or previous meningioma.

### Bicalutamide {#bicalutamide}

Common adverse effects include hot flashes, pain, weakness, constipation, infection, nausea, peripheral edema, shortness of breath, diarrhea, hematuria, urinary incontinence, and anemia.

Serious adverse effects include **liver toxicity, liver failure, and extremely rare pulmonary toxicity**.

### Spironolactone {#spironolactone}

Common adverse effects include **hyperkalemia** and gastrointestinal symptoms such as nausea, vomiting, stomach cramps, and diarrhea.

The most serious risk is **hyperkalemia**, which can be fatal in high-risk people. Higher-risk situations include older age, impaired kidney function, concurrent potassium-sparing drugs, potassium supplements, or potassium-containing salt substitutes.

## Drug Interactions {#drug-interactions}

{{< notice warning "Warning" >}}
If you need any medicine in addition to GAHT, consult a clinician or pharmacist about drug interactions and read the product label.
{{< /notice >}}

GAHT drug interactions are complex. The following points are not complete and should not replace professional review.

### Liver Enzyme Metabolism {#liver-enzymes}

| Type | Property |
|-|-|
| Estradiol and estradiol esters | Metabolized through CYP3A4 |
| Cyproterone acetate | Metabolized through CYP3A4 |
| Medroxyprogesterone acetate | Metabolized through CYP3A4 |
| Spironolactone | May induce CYP3A4 and affect other CYP enzymes |
| Bicalutamide | Partly metabolized through CYP3A4 and may inhibit CYP3A4, though in vivo effect may be limited |
| GnRH analogues | Triptorelin is rarely metabolized by liver enzymes |

### Interactions Within GAHT {#gaht-interactions}

- **Estradiol and spironolactone:** reviews report unchanged or slightly increased estradiol levels and increased urinary estrogen excretion when spironolactone is used alone in cisgender men.
- **Estradiol and bicalutamide:** bicalutamide can raise testosterone, which can aromatize to estradiol, making estradiol changes harder to interpret.
- **Synthetic progestogens and bicalutamide:** bicalutamide may theoretically inhibit synthetic progestogen metabolism; co-use is not recommended.
- **GnRH analogues and synthetic progestogens:** triptorelin labeling warns against combining with drugs that may cause hyperprolactinemia. In practice, extra antiandrogen therapy is usually unnecessary when a GnRH analogue is already used.

### Other Medication Interactions {#other-interactions}

- **Spironolactone and potassium-raising drugs:** increased hyperkalemia risk.
- **Spironolactone and psychiatric medicines:** lithium toxicity may increase; tricyclics or SSRIs may increase hyponatremia risk.
- **Bicalutamide:** may affect CYP3A4-metabolized drugs and anticoagulants.
- **Estradiol or synthetic progestogens plus CYP3A4 inhibitors/inducers:** inhibitors may increase exposure; inducers may reduce effect.
- **Highly protein-bound drugs:** competition for albumin binding may increase free drug concentrations.
- **Alcohol:** can reduce cyproterone acetate effect.

Before starting GAHT or any other treatment, read the product label carefully, especially drug-interaction sections. If you must combine medicines, monitor closely and tell clinicians about all medications and symptoms.

#### Appendix: Psychiatric Drugs That May Induce or Inhibit CYP3A4 {#cyp3a4-appendix}

```csv
Inducers,Inhibitors
**Asenapine?**,**Fluoxetine**
**Carbamazepine**,Fluvoxamine
**Modafinil**,**Paroxetine**
**Phenobarbital** and related barbiturates,Perphenazine
**Phenytoin**,Reboxetine*
**St John's wort**,
Topiramate,
```

This list is incomplete. New interaction information can be reported on [GitHub](https://github.com/project-trans/MtF-wiki/issues/828).
