---
layout: default
title: "Galactic Dynamics Calculator"
---

{% include interactive/galaxy_zoo.html %}

# Galactic Dynamics Calculator

**Update (Geometric Screening):** The model calculates dynamics using the galaxy's intrinsic geometry.

$$V_{WILL}(r) = V_{bary}(r) \cdot \sqrt{1 + 2 \exp(-R_{disk}/r)}$$

The vacuum effect is screened by the high baryonic density within the disk scale length ($R_{disk}$). As the radius exceeds the disk scale ($r > R_{disk}$), the screening fades, and the vacuum energy ($\sqrt{3}$ factor) emerges naturally.

### In short
“Dark Matter is the weight of the vacuum structure itself.” Dynamics are determined by the ratio of local baryonic density to the structural capacity of the vacuum.

### How to use
* **Data:** rotation curves from the **SPARC** catalog.
* **Physics:** Geometric screening based on disk scale ($R_{disk}$).
* **Controls:** Pick a galaxy; adjust $\Upsilon_*$ with the slider. Left plot: Observed vs WILL Prediction. Right plot: gas/disk/bulge contributions.
* **Quality:** Per-galaxy RMSE is shown below. The button builds the RMSE distribution by type and shows the median for the selected groups.

{% include interactive/galactic_dynamics.html %}