---
layout: default
title: Relational Orbital Mechanics
permalink: /cycles/
---

<div class="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-gray-300 font-sans leading-relaxed" markdown="1">

# Relational Orbital Mechanics

<div class="bg-gray-900/50 border-l-4 border-gray-500 p-6 rounded-r-lg mb-10" markdown="1">
**The Relational Stance:**

There is no background space. There is no absolute grid.
Every observer constitutes the center of their own relational coordinates:
\\[ \text{Origin} = (0,0) \\]
An orbit is not a path through space, but a cycle of energetic exchange observed from this origin.
</div>

## 1. The Two Observable Projections

We do not assume Mass or \\(G\\). We describe the system solely through two orthogonal projections of light interaction.

<div class="grid md:grid-cols-2 gap-8 mb-12" markdown="1">

<div class="bg-black/40 border border-gray-800 p-6 rounded-lg" markdown="1">
### <span class="text-red-400">\\(\kappa\\): Gravitational Projection</span>

This parameter measures the **potential depth** relative to the observer. It is derived directly from the gravitational redshift (\\(z\\)) of the light emitted by the system.

* **Observation:** Gravitational Redshift (\\(z\\))
* **Operational Definition:**
    \\[ \kappa \approx \sqrt{2z} \\]
    *(Exact form: \\(\kappa^2 = 1 - (1+z)^{-2}\\))*
</div>

<div class="bg-black/40 border border-gray-800 p-6 rounded-lg" markdown="1">
### <span class="text-blue-400">\\(\beta\\): Kinematic Projection</span>

This parameter measures the **transverse motion** relative to the observer. It is derived directly from the Doppler shift of the light.

* **Observation:** Doppler Shift (\\(v\\))
* **Operational Definition:**
    \\[ \beta = \frac{v}{c} \\]
</div>
</div>

---

## 2. Relational Displacement (\\(Q\\))

When an observer looks at a system, they measure a total displacement vector. This is not a spatial distance, but a magnitude of relational separation.

<div class="flex flex-col md:flex-row items-center gap-8 mb-10" markdown="1">
<div class="flex-1" markdown="1">

The total displacement \\(Q\\) is the hypotenuse of the projection plane:

\\[ Q = \sqrt{\kappa^2 + \beta^2} \\]

* **If \\(Q=0\\):** The object is effectively "here" (co-located with the observer).
* **If \\(Q > 0\\):** The object is displaced either by potential depth (\\(\kappa\\)) or by relative motion (\\(\beta\\)).

</div>
<div class="w-full md:w-1/3 bg-gray-900 p-4 rounded border border-gray-800 text-center" markdown="1">
**The Vector Q**
\\[ \vec{Q} = (\beta, \kappa) \\]
*Magnitude of Interaction*
</div>
</div>

---

## 3. Orbital Breathing

An orbit is a "breathing" system. Throughout one cycle (from periapsis to apoapsis), the system exchanges potential depth for kinematic intensity.

While \\(\kappa\\) and \\(\beta\\) oscillate, the normalized orbital energy \\(W\\) remains invariant:

\\[ W = \frac{1}{2}(\kappa^2 - \beta^2) = \text{const} \\]

* **At Periapsis (Closest):** The "breathing" is deepest. \\(\kappa\\) is maximum (deepest potential), and \\(\beta\\) is maximum (fastest motion).
* **At Apoapsis (Farthest):** The system relaxes. \\(\kappa\\) and \\(\beta\\) decrease together to maintain the balance \\(W\\).

---

## 4. Geometric Derivation of Eccentricity

The shape of the orbit (eccentricity \\(e\\)) is not arbitrary. It is strictly enforced by the "closure defect" at periapsis.

**Definition: Closure Factor (\\(\delta_p\\))**
At the point of maximum interaction (periapsis), we define the ratio of potential to kinetics:

\\[ \delta_p = \frac{\kappa_p}{\sqrt{2}\beta_p} \\]

**The Theorem:**
For any bound orbit, the geometric eccentricity is uniquely determined by this closure factor:

\\[ e = \frac{1}{\delta_p^2} - 1 \\]

* If \\(\delta_p = 1\\), then \\(e=0\\) (Circular Orbit / Perfect Closure).
* If \\(\delta_p < 1\\), then \\(e > 0\\) (Elliptic Orbit / Closure Defect).

---

## 5. Operational Pathways

We can apply this geometry in two directions, depending on which data is available.

<div class="grid md:grid-cols-2 gap-8 mt-6" markdown="1">

<div markdown="1">
#### <span class="border-l-2 border-blue-500 pl-3">Path 1: Verification</span>
*(e.g., Solar System / Mercury)*

We measure the central redshift (\\(z\\)) and the orbital velocity (\\(\beta\\)) independently. We compute the closure factor to verify the orbital shape.

<div class="bg-gray-900 p-4 rounded text-xs font-mono mt-2" markdown="1">
* **Input:** \\( z_{sun} \\) (Redshift), \\( v_{p} \\) (Doppler)
* **Calculate:** \\( \delta_p = \sqrt{2z} / (\sqrt{2}\beta) \\)
* **Result:** \\( e_{calc} \\) matches observed eccentricity.
</div>
</div>

<div markdown="1">
#### <span class="border-l-2 border-red-500 pl-3">Path 2: Reconstruction</span>
*(e.g., S-Stars / Black Holes)*

For distant systems, the central potential is hidden. We use the observed shape (\\(e\\)) and velocity (\\(\beta\\)) to reconstruct the hidden potential.

<div class="bg-gray-900 p-4 rounded text-xs font-mono mt-2" markdown="1">
* **Input:** \\( e_{obs} \\) (Shape), \\( v_{p} \\) (Doppler)
* **Reconstruct:** \\( \kappa_p = \beta_p \sqrt{2(1+e)} \\)
* **Result:** We obtain the "weight" of the hole directly from light.
</div>
</div>
</div>

<div class="mt-12 mb-8 border-t border-gray-800 pt-8" markdown="1">
### Relational Precession
The secular shift of the orbit (precession) is determined solely by the ratio of the light projections at periapsis:

\\[ \Delta\varphi = \frac{3\pi}{2} \frac{\kappa_p^4}{\beta_p^2} \\]
</div>

</div>

<div class="w-full max-w-7xl mx-auto pb-20 px-4">
    <div class="border-t border-gray-800 pt-8">
        <p class="text-xs font-bold text-gray-500 uppercase tracking-widest mb-6 text-center">Interactive Calculation Engine</p>
        {% include interactive/orbital_engine.html %}
    </div>
</div>