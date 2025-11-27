---
layout: default
title: Relational Orbital Mechanics
permalink: /cycles/
---

<div class="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-gray-300 font-sans leading-relaxed" markdown="1">

# Relational Orbital Mechanics

<div class="bg-gray-900/50 border-l-4 border-gray-500 p-6 rounded-r-lg mb-10" markdown="1">

### Thesis

*Orbital dynamics requires no mass, no \\(G\\), no metric, and no spacetime geometry.*

All observable orbital structure follows strictly from two directly measurable frequency projections:
* **\\(\kappa\\)** (gravitational projection from redshift)
* **\\(\beta\\)** (kinematic projection from Doppler)

</div>

<div class="grid md:grid-cols-2 gap-8 mb-16" markdown="1">

<div class="bg-black/40 border border-gray-800 p-6 rounded-lg" markdown="1">

### <span class="text-red-400">\\(\kappa\\): Gravitational Projection</span>

Derived directly from the **gravitational redshift** (\\(z\\)). It represents the potential projection depth at a given radial point.

* **Input:** Redshift \\(z\\)
* **Relation:** \\(\kappa^2 \approx 2z\\) (for weak fields)
* **Exact:** \\(\kappa^2 = 1 - (1+z)^{-2}\\)

</div>

<div class="bg-black/40 border border-gray-800 p-6 rounded-lg" markdown="1">

### <span class="text-blue-400">\\(\beta\\): Kinematic Projection</span>

Derived directly from the **Doppler shift**. It represents the normalized orbital velocity.

* **Input:** Velocity \\(v\\)
* **Relation:** \\(\beta = v / c\\)
* **Invariant:** \\(\beta_Y = \sqrt{1-\beta^2}\\)

</div>
</div>

## Derivation of Relational Eccentricity

Geometric eccentricity is not0 a free parameter but a measure of the energetic deviation from the circular equilibrium state (\\(\delta=1\\)).

<div class="border border-gray-700 bg-gray-900 p-6 rounded shadow-lg my-6" markdown="1">

**Theorem: Geometric Eccentricity**

For a closed orbital system governed by projection invariants, the orbital eccentricity \\(e\\) is strictly determined by the closure factor at periapsis, \\(\delta_p=\frac{\kappa_p}{\beta_p \sqrt2}\\):

\\[ e = \frac{1}{\delta_p^2} - 1 \\]

</div>

**Proof Strategy:**
Instead of force laws, we use the conservation of the two projection invariants:
1.  **Energy Projection:** \\(W = 0.5(\kappa^2-\beta^2) = \text{const}\\)
2.  **Angular Projection:** \\(h = r\beta = \text{const}\\) (at turning points)

Solving the energy balance between periapsis and apoapsis yields the identity for bound orbits:

\\[ 2\beta_p^2 = \kappa_p^2 (1+e) \\]

---

## Two Operational Pathways

Depending on the available observational data, the framework offers two distinct modes of calculation.

<div class="grid md:grid-cols-2 gap-8 mt-6" markdown="1">

<div markdown="1">
#### <span class="border-l-2 border-blue-500 pl-3">Path 1: Verification (e.g., Mercury)</span>

Used when both the central potential (redshift \\(z\\)) and the orbital kinematics (\\(\beta\\)) are measurable independently. We calculate \\(\delta_p\\) from inputs and compare the predicted eccentricity with observation.

<div class="bg-gray-900 p-4 rounded text-xs font-mono mt-2" markdown="1">
* <span class="text-blue-400">Input:</span> \\( z_{sun}, v_{merc} \\)
* <span class="text-green-400">Process:</span> Calculate \\(\delta_p\\)
* <span class="text-yellow-400">Output:</span> \\( e_{pred} \approx 0.2056 \\)
</div>
</div>

<div markdown="1">
#### <span class="border-l-2 border-red-500 pl-3">Path 2: Reconstruction (e.g., S2 Star)</span>

Used for distant systems where the central potential is unknown. We use the observed shape (\\(e\\)) and velocity (\\(\beta\\)) to **reconstruct** the hidden potential depth \\(\kappa_p\\).

<div class="bg-gray-900 p-4 rounded text-xs font-mono mt-2" markdown="1">
* <span class="text-blue-400">Input:</span> \\( e_{obs}, v_{peri} \\)
* <span class="text-green-400">Process:</span> Invert closure relation
* <span class="text-red-400">Output:</span> \\( \kappa_p \\) (Black Hole Depth)
</div>
</div>
</div>

<br>

<div class="grid md:grid-cols-2 gap-8 mb-12" markdown="1">

<div markdown="1">
### Universal Precession Law

The secular evolution of an orbit is determined solely by the ratio of the gravitational redshift to the Doppler shift at the point of closest approach.

\\[ \Delta\varphi = \frac{3\pi}{2} \frac{\kappa_p^4}{\beta_p^2} \\]

*No differential equations. Pure algebra of light ratios.*
</div>

<div markdown="1">
### The WILL Invariant

For any energy-closed system, the ratio of Energy-Time to Mass-Length projections is unity.

\\[ W_{ILL} = \frac{E \cdot T}{M \cdot L} \equiv 1 \\]

*Validates that geometry and energy are strictly conserved.*
</div>

</div>

</div>

<div class="w-full max-w-7xl mx-auto pb-20 px-4">
    <div class="border-t border-gray-800 pt-8">
        <p class="text-xs font-bold text-gray-500 uppercase tracking-widest mb-6 text-center">Interactive Calculation Engine</p>
        {% include interactive/orbital_engine.html %}
    </div>
</div>