---
layout: default
title: "Galactic Dynamics"
permalink: /galactic_dynamics/
redirect_from: 
 - /Galactic_Dynamics/
 - /galactic-dynamics/
description: "Galaxy rotation curves explained without Dark Matter. Interactive SPARC database analysis (175 galaxies) using WILL Relational Geometry — zero free parameters."
---

{% include interactive/galaxy_zoo.html %}

# Galactic Dynamics without Dark Matter

**Flat rotation curves emerge naturally from the geometry of a closed relational universe.**

### The Standard Crisis
Standard cosmology explains galactic rotation curves by adding an invisible halo of Dark Matter. This approach preserves General Relativity but requires ~5–10 times more mass than we can see — with no direct detection after decades of search.

**WILL Relational Geometry** takes a different route. We do not add mass. We remove the hidden assumption that space is an empty container.  

Instead, we treat **spacetime ≡ energy** as a single closed relational system (see [WILL RG Part I](https://willrg.com/documents/WILL_RG_I.pdf)). Geometry and dynamics become dual projections of the same invariant structure.

### The Fundamental Tone of the Universe
Because the universe is topologically closed, any perturbation must eventually re-encounter itself. This enforces a **Global Phase-Closure Constraint**: only resonant modes persist and accumulate macroscopic relational shift.

The result is a single persistent **Fundamental Standing Wave** — the resonant “tone” of the observable universe, set by the Hubble horizon scale $H_0$.

### The Law of Resonant Interference
A star’s local Newtonian field interferes constructively with this global horizon tone. The observed velocity is the geometric-mean superposition:

$$
V_{\rm obs}^2 = V_{\rm bar}^2 + \sqrt{V_{\rm bar}^2 \cdot a_{\kappa} \cdot r}
$$

where  
- $V_{\rm bar}$ is the Newtonian velocity from visible baryons only,  
- $r$ is the galactocentric radius,  
- $a_{\kappa} = c H_0 / (3\pi) \approx 0.70 \times 10^{-10}$ m/s² is the **structural resonance scale**, derived directly from the measured CMB temperature $T_0$ and fine-structure constant $\alpha$ (no fitting, no free parameters).

This single equation produces flat rotation curves, the Baryonic Tully–Fisher Relation ($V^4 \propto M_b$), and the Radial Acceleration Relation (RAR) across all galaxy types.

### Zero-Parameter Test: SPARC Database (175 galaxies)
We applied the interference law to the full SPARC sample — 175 disk galaxies with high-quality rotation curves and Spitzer photometry — using **fixed, population-synthesis mass-to-light ratios** and **zero adjustable parameters**.

**Key results** (full protocol-independent analysis):

| Metric                  | WILL RG Value          | Interpretation                          |
|-------------------------|------------------------|-----------------------------------------|
| Median RMSE             | 12.64 km/s             | High absolute accuracy                  |
| Median signed bias      | –2.26 km/s (full sample)<br>+0.53 km/s (gas-dominated) | Negligible systematic offset |
| Median reduced $\chi^2$ | 3.49                   | Excellent fit quality                   |
| RAR scatter             | 0.065 dex              | Matches or beats best phenomenological models |

The same law also correctly predicts:
- Milky Way solar-circle speed (~226 km/s, matches Gaia)
- Wide-binary gravity boost (Gaia DR3/Chae 2023)
- Baryonic Escape Threshold “bullseye” test

### Verify It Yourself — Live Galactic Dynamics Engine
The interactive lab below runs the **exact same zero-parameter WILL RG model** on raw SPARC data in real time.

**How to use:**
1. Select any galaxy from the dropdown (or browse the full catalogue).  
2. Watch the **cyan line** (WILL prediction) overlay the observed data points.  
3. Check the live RMSE, $\chi^2$, and residuals.  

{% include interactive/galactic_dynamics.html %}

**Reality filter note**: A small 5 km/s error floor accounts for natural turbulence and measurement scatter — the model itself remains perfectly smooth.

### What This Means
The “missing mass” is not missing mass. It is the observable signature of a star’s resonant coupling to the cosmic horizon inside a closed relational geometry.  

Dark Matter becomes redundant. The same framework that derives $H_0 \approx 68.15$ km/s/Mpc from $T_{\rm CMB}$ and $\alpha$ also explains galactic dynamics, supernova distances, CMB acoustics, and even returns the electron mass via holographic closure.

**Full technical derivation** → [WILL Relational Geometry Part II (PDF)](https://willrg.com/documents/WILL_RG_II.pdf)  
**All code & Colab notebooks** → [GitHub/AntonRize/WILL](https://github.com/AntonRize/WILL)

---


<!-- ═══════════════════════ NAVIGATION ═══════════════════════ -->
<hr style="border-color:#374151; margin:0 0 2rem 0;">

<h2 class="text-2xl font-bold text-white" style="border:none; margin-bottom:1.25rem;">
  Explore Further
</h2>

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 0.75rem;">
  <a href="/predictions/" class="supp-card" style="text-decoration:none;">
    <div>
      <h4>Testable Predictions</h4>
      <p>Quantitative, falsifiable predictions</p>
    </div>
  </a>
  <a href="/Logos_Map/" class="supp-card" style="text-decoration:none;">
    <div>
      <h4>Logos Map</h4>
      <p>Logical Structure of WILL Derivations</p>
    </div>
  </a>
  <a href="/WILL-AI/" class="supp-card" style="text-decoration:none;">
    <div>
      <h4>WILL AI</h4>
      <p>AI trained on research documents</p>
    </div>
  </a>
  <a href="/" class="supp-card" style="text-decoration:none;">
    <div>
      <h4>Home</h4>
      <p>Return to overview</p>
    </div>
  </a>
</div>
