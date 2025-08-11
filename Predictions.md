---
layout: default
title: "Predictions"
permalink: /predictions/
toc: false
---

This page aggregates reproducible numerical checks of WILL predictions. Each item links to a runnable notebook (and static HTML) and, where available, an interactive demo.

Minimal standard: fixed Python environment, explicit inputs, a single evaluation metric, and a clear falsifiability clause.

## Interactive Labs

### 1) Galaxy RC Lab — SPARC rotation curves
**Headline metric:** median RMSE ≈ **20 km/s** over ~175 galaxies.
**Try it:** [Open the calculator]({{ site.baseurl }}/calculator/)

**Falsify if** With fixed data-selection rules on SPARC, median RMSE exceeds **50 km/s** for **≥ 70%** of the sample.

---

### 2) Cosmo-2-Input Lab — background cosmology
**Headline metric:** \(\Omega_\Lambda = 2/3\), \(\Omega_m = 1/3\) (no free parameters).
**Try it:** [Open the 2-input cosmology tool]({{ site.baseurl }}/2-input-cosmology.html)

**Falsify if** For a fixed \(H_0\), predicted \(\{\Omega_\Lambda, \Omega_m, t_0\}\) systematically fall outside consolidated observational bounds.

---

### 3) GPS Relativity Lab — orbital slider (planned)
**Headline metrics at GPS altitude:** time offset ≈ **38.52 μs/day**; **Energy symmetry = 0**; \(W_{ill} = 1\).
**Planned demo:** orbit-radius slider with real-time display of \(\beta, \kappa, Q, Q_t\), daily \(\Delta t\), energy-symmetry residual, and \(W_{ill}\) deviation.

**Falsify if** For the GPS preset with current orbital parameters, \(|\Delta t_{pred} - \Delta t_{emp}| > 1\%\), or energy-symmetry residual exceeds tolerance, or \(|W_{ill}-1|\) exceeds tolerance.

---

## Reproducible Notebooks & Static Views

### A) Galaxy rotation curves — √3 law (SPARC)
- **Notebook:** [V_QWILL_=_sqrt(3)_V_bary.ipynb]({{ site.baseurl }}/Colab%20Notebooks/V_QWILL_=_sqrt(3)_V_bary.ipynb)
- **HTML:** [V_QWILL_=_sqrt(3)_V_bary.html]({{ site.baseurl }}/Colab%20Notebooks/V_QWILL_=_sqrt(3)_V_bary.html)
- **Metric:** median RMSE ≈ **20.3 km/s** over ~175 galaxies
- **Falsify if:** with fixed rules, median RMSE > **50 km/s** for **≥ 70%** of SPARC.

### B) GPS time dilation, Energy Symmetry, WILL invariant; Mercury precession; S2 star
- **Notebook:** [GPS…RELATIVISTIC CORRECTION.ipynb]({{ site.baseurl }}/Colab%20Notebooks/GPS%20TIME%20+PRECESSION%20OF%20MERCURY+PRECESSION%20OF%20S2%20STAR+CONSERVATION%20LAW+RELATIVISTIC%20CORRECTION.ipynb)
- **HTML:** [GPS…RELATIVISTIC CORRECTION.html]({{ site.baseurl }}/Colab%20Notebooks/GPS%20TIME%20+PRECESSION%20OF%20MERCURY+PRECESSION%20OF%20S2%20STAR+CONSERVATION%20LAW+RELATIVISTIC%20CORRECTION.html)
- **Metrics (GPS altitude):** \(\Delta t\) ≈ **38.52 μs/day**; **Energy symmetry = 0**; \(W_{ill} = 1\)
- **Metric (Mercury):** perihelion precession within **≤ 1%** of observed
- **Metric (S2):** pericenter precession ≈ **0.2015°/orbit**

### C) Cosmology from \(\kappa^2 = 2/3\)
- **Notebook:** [WILL_Geometry_COSMO_..._κ²_=_2_3_.ipynb]({{ site.baseurl }}/Colab%20Notebooks/WILL_Geometry_COSMO_%E2%80%93_scale_derivation_from_%CE%BA%C2%B2_=_2_3_.ipynb)
- **HTML:** [WILL_Geometry_COSMO_..._κ²_=_2_3_.html]({{ site.baseurl }}/Colab%20Notebooks/WILL_Geometry_COSMO_%E2%80%93_scale_derivation_from_%CE%BA%C2%B2_=_2_3_.html)
- **Outputs:** \(\Omega_\Lambda = 2/3\), \(\Omega_m = 1/3\), age \(t_0 \approx 14.53\) Gyr
- **Falsify if:** predictions systematically fall outside consolidated observational bounds for a fixed \(H_0\).

---

## Methods & Data
- **Verification Protocol:** [Read the protocol]({{ site.baseurl }}/protocols/verification/)
- **Environment:** [View requirements.txt]({{ site.baseurl }}/env/requirements.txt) (pinned versions)
- **Data licensing:** public datasets; cite original sources
- **Versioning:** commits tied to validations
