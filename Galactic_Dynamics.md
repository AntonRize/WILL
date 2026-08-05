---
layout: default
title: "Galactic Dynamics"
permalink: /galactic_dynamics/
redirect_from: 
 - /Galactic_Dynamics/
 - /galactic-dynamics/
description: "Galaxy rotation curves without dark matter and without free parameters. The acceleration scale is derived from the CMB temperature and the fine-structure constant, not fitted to galaxies. Zero-parameter results on the SPARC 175 galaxy database: rotation curves, the baryonic Tully-Fisher relation, the radial acceleration relation, the baryonic escape threshold, and Gaia DR3 wide binaries."
---

{% include interactive/galaxy_zoo.html %}

# Galactic Rotation Curves without Dark Matter and without Free Parameters

**Stars at the edge of a galaxy orbit faster than the visible matter can account for. Nothing invisible is added, and nothing is fitted.**

## Why the stars move too fast

The universe is [relationally closed](https://willrg.com/documents/WILL_RG_I.pdf#thm:relational_closure), so anything travelling through it eventually meets itself again. Only patterns that return in the same phase survive, which leaves the universe with [a single lowest note](https://willrg.com/documents/WILL_RG_II.pdf#sec:tone). That note puts a minimum energy floor under every interaction inside it.

Out at the thin edge of a galaxy, the visible matter on its own would leave a star below that floor. It cannot sit below the floor, so it moves faster. The extra speed is not extra mass. It is the star keeping step with the universe, the same way an electron has to fit a standing wave to stay bound inside an atom.

## The equation

$$
V_{\rm obs}^2 = V_{\rm bar}^2 + \sqrt{V_{\rm bar}^2 \cdot a_{\kappa} \cdot r}
\qquad
a_{\kappa} = \frac{c H_0}{3\pi} \approx 0.70 \times 10^{-10}\ \mathrm{m/s^2}
$$

$V_{\rm bar}$ is what the visible matter alone would produce. The second term is [the coupling to the horizon](https://willrg.com/documents/WILL_RG_II.pdf#sec:galactic-dynamics). Away from the visible mass [it stops depending on radius](https://willrg.com/documents/WILL_RG_II.pdf#sec:Tully-Fisher), which is why the curve levels off instead of falling.

$a_{\kappa}$ is not a free parameter. $H_0 = 68.15$ km/s/Mpc is [derived from the CMB temperature and the fine-structure constant](https://willrg.com/documents/WILL_RG_II.pdf#sec:deriving-H0). The $3\pi$ is the [2:1 split between the two relational carriers](https://willrg.com/documents/WILL_RG_I.pdf#thm:closure) applied to that lowest note, [worked out here](https://willrg.com/documents/WILL_RG_II.pdf#sec:tone).

---

## SPARC: 175 galaxies, nothing tuned

Mass-to-light ratios held at the population-synthesis values for every galaxy, no per-galaxy parameters, raw residuals.

| Model | MedAE | Bias | $F_{10}$ |
|---|---|---|---|
| Newton, baryons only | 38.46 | $+36.91$ | 0.08 |
| $\Lambda$CDM, abundance matching | 13.32 | $-6.83$ | 0.36 |
| MOND, $a_0$ fitted to this dataset | 10.43 | $-4.37$ | 0.48 |
| Verlinde, $cH_0/6$ | 12.27 | $-8.52$ | 0.33 |
| **WILL RG, $cH_0/3\pi$ derived** | 11.18 | $\mathbf{-2.26}$ | 0.47 |

**How to read it.** *MedAE* is the typical velocity error in km/s, lower is better. *Bias* is observed minus predicted in km/s, so positive means the model runs too slow and negative too fast, and zero is the target. *$F_{10}$* is the fraction of points landing within 10 km/s, higher is better.

MOND's $a_0$ was fitted to these galaxies. $a_{\kappa}$ was derived from the microwave background and never saw a rotation curve. A number arriving from cosmology with nothing left to adjust reaches the accuracy of a formula built on the answer, and carries half its systematic bias.

<figure style="margin:2rem 0;">
  <img src="{{ site.baseurl }}/images/PLOTS/rar_gas_binned_final.png"
       alt="Binned radial acceleration relation for gas-dominated galaxies"
       style="width:100%; height:auto; border-radius:8px; border:1px solid #374151; background:#fff;">
  <figcaption style="color:#9ca3af; font-size:0.9rem; margin-top:0.6rem;">
    Gas-dominated galaxies, where the baryonic mass is known best. Binned offsets recomputed from raw SPARC: WILL RG $-0.044$ dex, MOND $-0.104$, Verlinde $-0.124$.
  </figcaption>
</figure>

> [Full protocol and results](https://willrg.com/documents/WILL_RG_II.pdf#sec:models_comparison) · [Colab notebook](https://colab.research.google.com/github/AntonRize/WILL/blob/main/Colab_Notebooks/Galactic_Rotation_Protocol_Independent_SPARC.ipynb)

---

## The escape threshold

At one radius the horizon term equals the baryonic term. There, and only there, orbital speed equals baryonic escape speed:

$$
V_{\rm obs}(R_{\rm trans}) \equiv V_{\rm esc}^{\rm bary},
\qquad
R_{\rm trans} = \sqrt{\tfrac{3\pi}{2}\, R_s R_H}
$$

That radius is the geometric mean of the galaxy's own horizon and the cosmic horizon. Beyond it a star is moving faster than the visible matter could hold, and [what keeps the orbit bound is the horizon](https://willrg.com/documents/WILL_RG_II.pdf#sec:baryonic_escape), not hidden mass. Where the crossing falls is set entirely by $a_{\kappa}$, so the plot is a direct test of that number.

<figure style="margin:2rem 0;">
  <img src="{{ site.baseurl }}/images/Baryonic_Escape_Threshold.png"
       alt="The Universal Escape Threshold: SPARC data in normalized coordinates crossing the predicted point"
       style="width:100%; height:auto; border-radius:8px; border:1px solid #374151; background:#fff;">
  <figcaption style="color:#9ca3af; font-size:0.9rem; margin-top:0.6rem;">
    3007 points, 161 galaxies. Grey dashed: where a Newtonian universe would sit, flat at $0.707$. Orange: the same law with the wrong scale. Measured crossing $Y = 0.965 \pm 0.018$ against a predicted $1$.
  </figcaption>
</figure>

> [Derivation and test](https://willrg.com/documents/WILL_RG_II.pdf#sec:baryonic_escape) · [Colab notebook](https://colab.research.google.com/github/AntonRize/WILL/blob/main/Colab_Notebooks/Baryonic_Escape_Threshold.ipynb)

---

## Wide binaries: where a fitted curve and a derivation part company

Wide binary stars are about a million times smaller than a galaxy. A galaxy couples to the horizon through the [potential carrier](https://willrg.com/documents/WILL_RG_II.pdf#def:rel_weight) at weight $2/3$. A binary is a two-body relation and couples through the kinetic carrier at $1/3$, giving exactly half the scale, $a_\beta = cH_0/6\pi$. Same derivation, different kind of link.

| Gravity boost at $g_N = 10^{-9.8}$ | $\gamma$ |
|---|---|
| Observed, Gaia DR3 | 1.45 to 1.55 |
| MOND, carrying its galaxy-fitted $a_0$ | 1.87 |
| **WILL RG, kinetic channel** | **1.47** |

MOND overshoots by more than 20% and needs an external field effect added by hand. Here the weaker anomaly is what the same closure condition already predicted.

> [Wide binary test](https://willrg.com/documents/WILL_RG_II.pdf#sec:wide-binary) · [Colab notebook](https://colab.research.google.com/github/AntonRize/WILL/blob/main/Colab_Notebooks/Wide_binary_Chae_2023.ipynb)

---

## From the same equation

| Result | Prediction | Observed |
|---|---|---|
| [Milky Way at the solar radius](https://willrg.com/documents/WILL_RG_II.pdf#sec:solar_system) | 226 km/s | $229 \pm 6$, Gaia |
| [Baryonic Tully-Fisher slope](https://willrg.com/documents/WILL_RG_II.pdf#sec:Tully-Fisher) | exactly 4 | $4.0 \pm 0.1$ |
| [Strong lensing](https://willrg.com/documents/WILL_RG_II.pdf#sec:lensing) | isothermal profile, no halo | SLACS, $1.00 \pm 0.02$ |

Two limits the papers state directly: a weak-lensing forward model is [named as future work](https://willrg.com/documents/WILL_RG_II.pdf#sec:lensing), and systems that have not reached equilibrium, such as dwarf irregulars dominated by gas pressure, [violate the closure condition the equation assumes](https://willrg.com/documents/WILL_RG_II.pdf#sec:galactic-ruler).

---

## Run it yourself

Every galaxy, the raw catalogue, the same zero-parameter equation, in your browser.

{% include interactive/galactic_dynamics.html %}

---

**Full paper** → [WILL Relational Geometry Part II](https://willrg.com/documents/WILL_RG_II.pdf)  
**Foundations** → [WILL Relational Geometry Part I](https://willrg.com/documents/WILL_RG_I.pdf)  
**Code and data** → [GitHub/AntonRize/WILL](https://github.com/AntonRize/WILL)

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
