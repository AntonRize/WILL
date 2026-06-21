---
layout: default
title: "Relativistic Foundations"
permalink: /relativistic-foundations/
description: "A friendly entrance to WILL Relational Geometry (Part I) and Relational Orbital Mechanics (R.O.M.). From one principle — spacetime ≡ energy — Special and General Relativity, the Minkowski and Schwarzschild intervals, the equivalence principle, and the full algebra of orbital motion, with zero free parameters."
---

<style>
/* Slide images */
.slide { display:block; width:100%; max-width:64rem; margin:1.5rem auto; border-radius:12px; border:2px solid rgba(55,65,81,0.5); box-shadow:0 12px 30px rgba(0,0,0,0.4); }

/* Theorem / definition box */
.thm { border-left:4px solid rgba(34,211,238,0.7); background:rgba(31,41,55,0.45); border-radius:0 10px 10px 0; padding:0.9rem 1.2rem; margin:1.4rem 0; }
.thm h4 { color:#fff; font-weight:700; margin:0 0 0.5rem 0; }

/* Highlighted key equation */
.keybox { border:1px solid rgba(34,211,238,0.5); background:rgba(8,51,68,0.35); border-radius:10px; padding:0.6rem 1rem; margin:1.3rem 0; text-align:center; }

/* Yellow takeaway */
.insight { border:2px solid rgba(234,179,8,0.35); background:rgba(31,41,55,0.5); color:#fde047; border-radius:12px; padding:0.9rem 1.2rem; margin:1.6rem 0; text-align:center; font-weight:600; }

/* Gray note / remark */
.note { border-left:4px solid rgba(107,114,128,0.7); background:rgba(31,41,55,0.3); border-radius:0 10px 10px 0; padding:0.7rem 1.2rem; margin:1.1rem 0; font-size:0.97rem; color:#cbd5e1; }

/* Paper reference line */
.paper-ref { font-size:0.92rem; color:#94a3b8; border-top:1px solid rgba(148,163,184,0.2); margin-top:0.6rem; padding-top:0.5rem; }
.paper-ref a { color:#22d3ee; }

/* Dropdown summary button */
.will-summary { display:block; padding:0.9rem 1.1rem; margin:1rem 0; background:rgba(31,41,55,0.5); color:#22d3ee; border:2px solid rgba(6,182,212,0.3); border-radius:12px; font-weight:700; text-align:center; cursor:pointer; list-style:none; }
.will-summary::-webkit-details-marker { display:none; }
.hero-details { margin-top:0.5rem; }
.video-dropdown-container { margin:1.5rem 0; }
.desmos-container iframe { width:100%; border:0; border-radius:10px; }

/* Slide placeholder */
.placeholder { border:2px dashed rgba(6,182,212,0.45); border-radius:12px; padding:2rem 1.5rem; text-align:center; color:#22d3ee; background:repeating-linear-gradient(45deg, rgba(6,182,212,0.03), rgba(6,182,212,0.03) 12px, rgba(6,182,212,0.06) 12px, rgba(6,182,212,0.06) 24px); margin:1.5rem auto; max-width:64rem; font-weight:600; }
.placeholder .sub { display:block; margin-top:0.5rem; font-size:0.85rem; color:#94a3b8; font-weight:400; }
</style>

# WILL Part I: Relational Geometry &amp; R.O.M.

*Interactive page — highlight any text to ask WILL AI for an explanation.*

<div style="margin: 40px auto; max-width: 800px; aspect-ratio: 16 / 9; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.3);">
  <iframe width="100%" height="100%" src="https://www.youtube.com/embed/Re0h4zF0C4A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## What is this page?

Welcome. This is the friendly entrance to **WILL Relational Geometry** — Part I, together with its companion **Relational Orbital Mechanics (R.O.M.)**. They are one continuous derivation, not two separate papers.

The idea is simple to state: begin from a single principle — **spacetime ≡ energy** — and let geometry do the rest. From that one move, with **zero free parameters**, you recover Special and General Relativity, the Minkowski and Schwarzschild intervals, the equivalence principle, and the entire algebra of orbital motion.

This page is the accessible walk-through. The complete, line-by-line rigour lives in the papers, and every step here links to the exact section that proves it — so you can read for the story and dive for the proof whenever you like.

This is part of the **WILL Trilogy**: Part I — Relational Geometry (this page, with R.O.M.); [Part II — Relational Cosmology](https://willrg.com/results/); [Part III — Relational Quantum Mechanics](https://willrg.com/results/).

For the full papers and reproducible notebooks → [Documents &amp; Results](https://willrg.com/results/)  
For quantitative, falsifiable predictions → [Predictions](https://willrg.com/predictions/)  
For questions and curiosity → [Ask WILL AI](https://willrg.com/WILL-AI/)

<details class="video-dropdown-container">
<summary class="will-summary">▶ Quick glossary: key terms</summary>
<div class="hero-details" markdown="block">

**Projection** — the mapping of one relational quantity onto an axis of a carrier. In WILL every physical quantity is a projection of a single conserved resource, assigned from a chosen observer's relational origin.

**Amplitude ($$\beta$$, $$\kappa$$)** — the *external* projection. $$\beta$$ is the kinematic amplitude, identified with $$v/c$$; $$\kappa$$ is the potential amplitude, identified with $$v_e/c = \sqrt{R_s/r}$$ and fixed operationally by the measured gravitational redshift.

**Phase ($$\beta_Y$$, $$\kappa_X$$)** — the *internal* projection on each carrier, governing proper time and proper length. Phase $$=1$$ is rest; phase $$=0$$ is the light-speed / horizon limit. The Lorentz factor is $$\gamma = 1/\beta_Y$$.

**Relational carriers ($$S^1$$, $$S^2$$)** — the circle $$S^1$$ (one direction) and the sphere $$S^2$$ (all directions): the two minimal closed, maximally symmetric carriers of the conserved resource. They are *not* shapes in space — space and time are labels assigned to them.

**Conservation of Relation** — Amplitude$$^2$$ + Phase$$^2$$ = 1 on each carrier: the closed budget that makes $$\beta$$ and $$\kappa$$ the same for every observer.

**Closure ($$\kappa^2 = 2\beta^2$$)** — the fixed exchange rate between the potential and kinematic projections of a closed system; the relational origin of the virial theorem.

**Total Relational Shift ($$Q$$)** — the magnitude of the state difference an observer assigns to another system, $$Q^2 = \beta^2 + \kappa^2$$. Causal interaction requires $$Q < 1$$.

**Relational spacetime factor ($$\tau = \beta_Y\kappa_X$$)** — the single quantity read out by spectroscopy (the inverse of the measured redshift product). Time dilation, redshift, and precession are all expressions of $$\tau$$.

**R.O.M.** — Relational Orbital Mechanics: the closed algebraic system that classifies the allowed bound states of a gravitating system from $$\beta$$, $$\kappa$$ and closure alone — no differential equations, no acceleration term, no $$G$$ and no $$M$$.

**$$W_{ILL}$$ invariant** — the dimensionless identity $$W_{ILL} = E\,T/(M\,L) = 1$$, fixing energy, mass, time and length as coherent projections of one resource.

</div>
</details>

![WILL: Relational Geometry — constructing reality from one principle]({{ site.baseurl }}/images/SLIDES-tinyPNG/1_WILL-Relational-Geometry.png){: .slide}

Instead of describing observed phenomena with externally added laws, this model **generates** the laws of physics as necessary consequences of its single principle — the shift from *descriptive* physics (write laws that fit observation) to *generative* physics (show why nothing else is possible).

---

## Stage 0 — The Last Geocentric Epicycle

![Breakthroughs in physics delete a false separation rather than adding entities]({{ site.baseurl }}/images/SLIDES-tinyPNG/3_Breakthroughs-Delete-Not-Add.png){: .slide}

Every standard theory — SR, GR, QFT, the Standard Model, ΛCDM — is written with a two-part syntax: a fixed **structure** (a manifold plus a metric) *plus* the **dynamics** (fields and constants) that play out upon it. No observation demands this duplication; it is kept only because the resulting Lagrangians work *inside* the split. So the split is not an empirical discovery — it is an unjustified ontological commitment.

History keeps making the same move: it removes a false separation rather than adding entities. Copernicus deleted the Earth/cosmos divide; Newton, the terrestrial/celestial split; Maxwell, electricity/magnetism; Einstein, space/time. Each step widened the relational circle and reduced the number of unexplained primitives. The spacetime–energy split is the one survivor of that pruning.

<details class="video-dropdown-container">
<summary class="will-summary">▶ Why no experiment establishes the split</summary>
<div class="hero-details" markdown="block">

Every standard "test" is an internal consistency check of a formalism that already assumes two substances — never positive evidence for the separation:

- **Local energy conservation** is verified only *after* the metric is declared fixed; no experiment varies the volume of empty space and checks calorimetry.
- **Universality of free fall** tests $$m_i = m_g$$ numerically, not the claim that inertia resides *in* the object rather than in a geometric scaling relation.
- **Gravitational-wave polarisations** test spin content, not ontology.
- **Casimir / Lamb shifts** measure *differences* of vacuum energy between two geometries; the absolute bulk term is explicitly subtracted.

Until an experiment varies the amount of space while holding everything else fixed, the spacetime–energy separation remains an unevidenced postulate.

</div>
</details>

<div class="insight" markdown="block">
The spacetime–energy split is the last geocentric epicycle in physics.
</div>

<p class="paper-ref" markdown="span">Full text: [WILL RG Part I — Stage 0: The Last Geocentric Epicycle](https://willrg.com/documents/WILL_RG_I.pdf#sec:epicycle).</p>

---

## Stage I — Ontological Construction: The Primitives

![The four methodological principles]({{ site.baseurl }}/images/SLIDES-tinyPNG/2_Methodological-Pillars.png){: .slide}

The framework rests on **four methodological principles**. They are not claims about reality but rules of epistemic purity; everything that follows is forced by them. "Zero free parameters" is a *consequence* of these principles, not a separate pillar.

- **Epistemic Hygiene** — derive physics by *removing* hidden assumptions, never by introducing new postulates. No construct is kept unless geometrically or energetically necessary.
- **Relational Origin** — every physical quantity is defined exclusively by its relations. Any absolute property reintroduces a metaphysical artefact.
- **Ontological Minimalism** — keep the minimum number of primitives. Absolute background — container, time axis, absolute distance, forces, fields — is excluded as a primitive.
- **Mathematical Transparency** — every symbol maps to exactly one physical idea. Number of symbols = number of independent physical ideas.

<p class="paper-ref" markdown="span">Full text and the derivation flow chart: [Part I — Foundational Methodological Principles](https://willrg.com/documents/WILL_RG_I.pdf#sec:foundational) · [Logos Map](https://willrg.com/logos_map/).</p>

![Energy as a conserved, relational, causal measure of change]({{ site.baseurl }}/images/SLIDES-tinyPNG/5_Energy-in-the-Relational-Framework.png){: .slide}

Three results about the foundational core follow immediately from the four principles. They are the load-bearing theorems of everything below.

<div class="thm" markdown="block">
#### Theorem — Relational Closure
A purely relational system cannot be geometrically open. Any interaction with a supposed "outside" is itself a relation, and the moment it acts it is integrated into the system. An interacting non-relation is a contradiction; the system is closed by analytic necessity, not by a boundary.
</div>

<div class="thm" markdown="block">
#### Theorem — Relational Invariance (the definition of Energy)
Within a closed system in which change occurs, every change must be balanced by a complementary change elsewhere. There must therefore exist a conserved measure of change. That invariant is what is historically called **energy**; proving it geometrically strips it of any substance and reveals it as the bookkeeping of causality.

**Energy is the invariant relational measure of state transformation within a relationally closed system.**
</div>

<div class="thm" markdown="block">
#### Theorem — Relational Isotropy
With no background grid, no direction can be privileged a priori; assigning an intrinsic axis to the unmeasured resource is unobservable surplus ontology. The carrier of the conserved resource must therefore be maximally symmetric.
</div>

<details class="video-dropdown-container">
<summary class="will-summary">▶ Formal proofs (Closure, Invariance, Isotropy)</summary>
<div class="hero-details" markdown="block">

**Relational Closure (analytic tautology).** (1) Quantities are defined only by relations. (2) If an external entity interacts with the system, that interaction is itself a relation. (3) As it forms, it is integrated into the system. An "interacting non-relation" is impossible; the system is closed by definition.

**Relational Invariance (structural necessity).** States change (empirical); the system is closed; a change cannot vanish into a void or emerge from one, so it must be balanced by a complementary change. Hence a conserved quantitative measure of change must exist.

**Relational Isotropy (relational origin).** There is no absolute grid; direction manifests only as a specific interaction. Assigning an intrinsic axis to the unmeasured resource is pure gauge — unobservable surplus ontology. The carrier must be strictly isotropic.

</div>
</details>

<p class="paper-ref" markdown="span">Full text: [Part I — The Foundational Core: Relational Geometry](https://willrg.com/documents/WILL_RG_I.pdf#sec:core).</p>

### The Unifying Principle

Treating "structure" as separate from "dynamics" smuggles in a background container no phenomenon requires. Removing that separation forces structure and dynamics to be two aspects of one entity — a principle with *negative* ontological weight: it subtracts a primitive rather than adding one.

<div class="keybox" markdown="block">
**SPACETIME ≡ ENERGY**
</div>

The single unified relational structure is named **WILL ≡ SPACE–TIME–ENERGY**; every physically meaningful quantity is a relational feature of WILL. The principle is foundational but testable: it must survive a geometric audit (its internal logical consequences) and an empirical audit (agreement with data). The remainder of this page is that audit — and the count of primitives drops from two (a container *and* its content) to one (a single self-relating structure).

<p class="paper-ref" markdown="span">Full text: [Part I — Unifying Ontological Principle](https://willrg.com/documents/WILL_RG_I.pdf#pr:unifying).</p>

## Stage II — Geometric Derivation

### The two minimal carriers

![The circle S¹ for directional relations and the sphere S² for omnidirectional relations]({{ site.baseurl }}/images/SLIDES-tinyPNG/7_Two-Minimal-Relational-Carriers.png){: .slide}

Closure, Conservation and Isotropy fix the only carriers the conserved resource can use. A **directional** relation (one degree of freedom) that cannot leak must close into a loop, and the unique parameter-free, maximally symmetric loop is the circle $$S^1$$. An **omnidirectional** relation (two degrees of freedom) that is closed and isotropic can only be the sphere $$S^2$$. No free integers, no preferred axes.

<details class="video-dropdown-container">
<summary class="will-summary">▶ Formal derivation of the carriers</summary>
<div class="hero-details" markdown="block">

**1-DOF (kinematic).** The minimal non-trivial relation is a sequence of transformations. Closure forces a loop. A discrete loop (a cyclic group of $$n$$ states) requires an arbitrary integer $$n$$, which Mathematical Transparency forbids — forcing the continuum limit. Isotropy then leaves a unique object: the circle $$S^1$$.

**2-DOF (potential).** The omnidirectional distribution of the resource from a point requires a 2D carrier. Discrete tiling smuggles in arbitrary parameters, forcing a continuous 2-carrier; closure makes it compact; maximal symmetry eliminates every anisotropic surface (e.g. the torus, with preferred axes), leaving a unique object: the 2-sphere $$S^2$$.

</div>
</details>

<div class="note" markdown="block">
**A note on what $$S^1$$ and $$S^2$$ are.** They are *not* shapes embedded in space. $$S^2$$ has no physical surface area, no volume, and does not "dilute" a flux across a distance. They are abstract relational carriers encoding closure, conservation and isotropy. Spatial distance $$r$$ and time are descriptive labels attached to these patterns — the projection dictates the space, not the reverse.
</div>

<p class="paper-ref" markdown="span">Full text: [Part I — Deriving Relational Carriers](https://willrg.com/documents/WILL_RG_I.pdf#sec:carriers).</p>

### Amplitude, phase, and the Conservation of Relation

![The β projection on the S¹ unit circle]({{ site.baseurl }}/images/SLIDES-tinyPNG/8_Kinetic-Energy-b-projection-on-S.png){: .slide}

By the Relational Origin Principle, the identification of spacetime with energy needs two complementary measures: an **amplitude** (external shift) and a **phase** (internal order). Any description of change must be of relational origin — a single number introduces an absolute value, which the Relational Origin Principle forbids. The carriers $$S^1$$ and $$S^2$$ supply the minimal geometry that enforces this: their orthogonal projections give exactly two non-redundant, coupled axes.

- **Amplitude ($$\beta$$, $$\kappa$$)** — the external shift from the observer's rest frame. On $$S^1$$, $$\beta$$ is what we measure as **relative speed**, $$\beta = v/c$$; on $$S^2$$, $$\kappa$$ measures gravitational depth, $$\kappa = v_e/c$$.
- **Phase ($$\beta_Y$$, $$\kappa_X$$)** — the internal ordering: proper time and proper length. Phase $$=1$$ is rest; phase $$=0$$ is the light-speed / horizon limit.

<div class="thm" markdown="block">
#### Theorem — Conservation of Relation
For both kinematic ($$S^1$$) and potential ($$S^2$$) modes, the sum of the squared Amplitude and squared Phase is strictly invariant:

$$\text{Amplitude}^2 + \text{Phase}^2 = 1$$

**Proof.** The conserved relational resource is carried by the maximally symmetric geometries $$S^1$$ and $$S^2$$. Normalizing the total conserved resource to unity, any physical state corresponds to a point on these carriers. The algebraic identity of orthogonal projections on a unit circle and sphere dictates that the sum of their squares equals the squared radius. Therefore $$\beta^2 + \beta_Y^2 = 1$$ and $$\kappa^2 + \kappa_X^2 = 1$$, encoding the finite, closed relational budget.
</div>

<div class="thm" markdown="block">
#### The projections are cross-cultural invariants
$$S^1$$ is the minimal structure that can encode a directional relation without absolute space. Its parameter is an angle $$\theta_1$$ whose cosine $$(\beta = \cos\theta_1)$$ we identify with the fraction $$v/c$$, and whose sine $$(\beta_Y = \sin\theta_1)$$ governs the internal ordering (proper-time fraction).

$$S^2$$ is the minimal structure that can encode an omnidirectional relation without absolute space. Its parameter is an angle $$\theta_2$$ whose sine $$(\kappa = \sin\theta_2)$$ we identify with the escape-velocity fraction $$v_e/c$$, and whose cosine $$(\kappa_X = \cos\theta_2)$$ governs the internal ordering.

Any two observers assign $$\beta$$ and $$\kappa$$ the same value for the same state, whatever their unit system — or even their descriptive vocabulary:

$$\beta = \frac{v}{c}, \qquad \kappa = \frac{v_e}{c} = \sqrt{\frac{R_s}{r}} = \sqrt{\frac{\rho}{\rho_{max}}}$$

are *translations* into descriptive vocabulary.
</div>

These two facts — that $$\beta$$ and $$\kappa$$ are pinned to closed carriers, and that they read out identically for every observer — are what make them behave like measured invariants rather than adjustable labels. You read $$\kappa$$ straight off a spectrum as gravitational redshift, $$\kappa^2 = 1 - 1/(1+z_\kappa)^2$$, with no mass and no $$G$$ in sight. From this single constraint everything downstream is forced: the energy–momentum relation, the Minkowski and Schwarzschild intervals, the equivalence principle, and the entire orbital algebra below.

<p class="paper-ref" markdown="span">Full text: [Part I — The Amplitude–Phase Duality &amp; Conservation of Relation](https://willrg.com/documents/WILL_RG_I.pdf#thm:conservation).</p>

### Where spatial distance comes from (the inverse-square law)

Spatial distance is derived as the operational inverse of relational phase capacity. Treating distance as an *a priori* primitive would violate Relational Origin and Ontological Minimalism.

<div class="thm" markdown="block">
#### Theorem — Inverse-Square
The inverse-square potential proportionality $$\kappa^2 \propto 1/r$$ is a geometric necessity of the $$S^2$$ carrier's relational capacity, determined without spatial primitives.

**Proof.** By the [Spectroscopic Phase Shift Theorem](https://willrg.com/documents/WILL_RG_R.O.M..pdf#sec:spectroscopic_shift), the potential projection $$\kappa^2$$ is extracted entirely from the dimensionless phase tension $$z_\kappa$$, independent of spatial parameters. Distance must therefore be defined by the relational tension between energy states. Normalizing the absolute geometric scale at saturation $$(\kappa^2 = 1 \equiv r = R_s)$$, distance $$r$$ emerges as the reciprocal measure of the omnidirectional projection amplitude:

$$\kappa = \sin\theta_2 \;\Longrightarrow\; \kappa^2 = \frac{R_s}{r} \;\Longrightarrow\; r = \frac{R_s}{\kappa^2} \;\Longrightarrow\; \kappa^2 \propto 1/r.$$

The $$1/r$$ proportionality is an analytic identity defining spatial distance, not an empirical input.
</div>

<div class="insight" markdown="block">
The inverse-square law does not exist because physical space dictates how forces dilute. It exists because "spatial distance" is the descriptive vocabulary assigned to the inverse capacity of the omnidirectional relational carrier $$S^2$$.
</div>

<p class="paper-ref" markdown="span">Full text: [Part I — Relational Origin of the Inverse-Square Law and the Nature of Spatial Distance](https://willrg.com/documents/WILL_RG_I.pdf#sec:inverse_square).</p>

### Consequence: relativistic effects

<div class="thm" markdown="block">
#### Proposition — Relativistic effects
The conservation law implies that any redistribution between the orthogonal components manifests physically as the relativistic effects of time dilation and length contraction.

**Proof.** By Conservation of Relation, $$\beta^2 + \beta_Y^2 = 1$$ and $$\kappa^2 + \kappa_X^2 = 1$$. An increase in Amplitude $$(\beta, \kappa)$$ enforces a geometric decrease in Phase $$(\beta_Y, \kappa_X)$$. This reduction of $$\beta_Y$$ and $$\kappa_X$$ corresponds precisely to the dilation of proper time and the contraction of proper length, while the growth of $$\beta$$ and $$\kappa$$ represents momentum or potential depth. The trade-off is the direct, un-parameterized expression of the geometric closure of the carriers.
</div>

This identifies relativistic and gravitational time dilation not as a mysterious "slowing down" of clocks, but as geometric **phase rotation**. As a system invests more of its relational existence into external Amplitude, it necessarily withdraws from its internal Phase, changing the rate of its proper-time evolution.

<div class="insight" markdown="block">
The geometry of spacetime is dictated by the relations of energy states.
</div>

### Kinetic energy on $$S^1$$: rest energy, mass, momentum

![Energy–momentum identity on the S¹ circle]({{ site.baseurl }}/images/SLIDES-tinyPNG/9_Energy-Momentum-Identity-on-S.png){: .slide}

<details class="video-dropdown-container">
<summary class="will-summary">▶ Interactive graph: kinetic projection β on S¹ (Desmos)</summary>
<div class="hero-details desmos-container">
<iframe src="https://www.desmos.com/geometry/6k1um2qbzm" width="100%" height="500" frameborder="0"></iframe>
</div>
</details>

Total energy projects onto both axes, $$E_X = E\beta$$ and $$E_Y = E\beta_Y$$. The vertical projection turns out to be invariant.

<div class="thm" markdown="block">
#### Theorem — Invariant Projection of Rest Energy
For any state $$(\beta, \beta_Y)$$ on the circle $$S^1$$, the total energy $$E$$ scales so that its vertical projection stays constant and equal to the rest energy $$E_0$$: $$\;E\beta_Y = E_0.$$

**Proof.** By the Relational Origin Principle and the Conservation Theorem, a system's internal energy measured in its own rest frame $$(\beta = 0 \implies \beta_Y = 1)$$ is its rest energy, $$E_0$$. For another frame $$B$$ observing system $$A$$, if $$A$$ is in relative motion $$(\beta > 0)$$, the total energy $$E$$ differs, but the internal energy $$E_Y$$ must remain an invariant property of $$A$$. To preserve this invariant and agree on measurements, frame $$B$$ must measure $$A$$'s internal phase projection as identical to the rest energy:

$$E_{Y_{B \leftarrow A}} = E_{Y_{A \leftarrow A}} = E_0.$$

Therefore the internal energy $$E_Y$$ measured externally by any frame remains constant and equal to the rest energy, $$E_Y \equiv E_0$$, where $$E_0$$ is the energy measured in the frame where the system is at rest. Geometric consistency then fixes the vertical leg:

$$E_Y = E\beta_Y = E_0 \implies E = \frac{E_0}{\beta_Y}.$$
</div>

The historical Lorentz factor is just the reciprocal of the phase, $$\gamma = 1/\beta_Y$$. Within $$c = 1$$ the invariant rest energy *is* the mass, $$E_0 = m$$: the identities $$E_0 = mc^2$$ and $$m = E_0/c^2$$ reduce to tautologies, so mass is not independent but the rest-energy invariant itself. Identifying momentum with the horizontal projection $$p \equiv E\beta$$, closure gives the standard relation as a pure geometric identity of $$S^1$$:

<div class="keybox" markdown="block">
$$E^2 = p^2 + m^2 \quad\Longrightarrow\quad E^2 = (pc)^2 + (mc^2)^2$$
</div>

<details class="video-dropdown-container">
<summary class="will-summary">▶ Interactive graph: the energy–momentum triangle (Desmos)</summary>
<div class="hero-details desmos-container">
<iframe src="https://www.desmos.com/geometry/mbkzikthkh" width="100%" height="500" frameborder="0"></iframe>
</div>
</details>

<p class="paper-ref" markdown="span">Full text: [Part I — Kinetic Energy Projection β on S¹](https://willrg.com/documents/WILL_RG_I.pdf#sec:kinetic).</p>

### The Minkowski interval is the inflated form of $$S^1$$ closure

<div class="placeholder" markdown="block">
[ Slide placeholder — "Minkowski interval as the inflation of S¹ closure" ]
<span class="sub">Suggested visual: the circle β²+β_Y²=1 on the left; the four "posits" (container; x,y,z; external time t; reference scale c²dt²) appended; the Minkowski interval emerging on the right.</span>
</div>

In textbook Special Relativity the Minkowski interval is the starting point. WILL reverses the order: the primitive is the dimensionless closure $$\beta^2 + \beta_Y^2 = 1$$, which contains no coordinates, no container, no external time. The interval is what that relation *becomes* once four substantival posits are **added** — a container; spatial coordinates $$x, y, z$$; an externally flowing time $$t$$ (demoting the phase to $$\beta_Y \equiv d\tau/dt$$); and a reference scale $$c^2 dt^2$$. Substituting $$\beta^2 = (dx^2+dy^2+dz^2)/(c^2 dt^2)$$ and $$\beta_Y = d\tau/dt$$ into closure returns the interval exactly:

<div class="keybox" markdown="block">
$$c^2 d\tau^2 = c^2 dt^2 - dx^2 - dy^2 - dz^2$$
</div>

The interval carries more structure than the relation it encodes. The relation is primary; the metric is its inflation.

<p class="paper-ref" markdown="span">Full text: [Part I — Minkowski Interval as Inflation of the S¹ Closure](https://willrg.com/documents/WILL_RG_I.pdf#sec:SR_interval).</p>

### Gravity: the potential projection $$\kappa$$ on $$S^2$$

![The κ projection on the S² unit sphere]({{ site.baseurl }}/images/SLIDES-tinyPNG/10_Potential-Energy-k-projection-on-S.png){: .slide}

Everything above repeats on the sphere. The amplitude $$\kappa = v_e/c = \sqrt{R_s/r}$$ measures gravitational depth ($$\kappa = 1$$ is the horizon, $$r = R_s$$), the phase $$\kappa_X$$ governs gravitational time and length, and $$\kappa^2 + \kappa_X^2 = 1$$. The same trade-off — more amplitude $$\kappa$$, less phase $$\kappa_X$$ — is what we observe as gravitational time dilation. Curved spacetime is the shadow cast by this conserved relation.

<details class="video-dropdown-container">
<summary class="will-summary">▶ Interactive graph: potential projection κ on S² (Desmos)</summary>
<div class="hero-details desmos-container">
<iframe src="https://www.desmos.com/geometry/lsjhnc2e9x" width="100%" height="500" frameborder="0"></iframe>
</div>
</details>

<details class="video-dropdown-container">
<summary class="will-summary">▶ Gravitational tangent formulation (the dual of momentum)</summary>
<div class="hero-details" markdown="block">

With $$\kappa = \sin\theta_2$$, define the gravitational total energy and momentum $$E_g = E_0/\kappa_X$$ (with $$\kappa_X = \sqrt{1-\kappa^2}$$) and $$p_g = (E_0/c)\tan\theta_2$$, giving the exact analogue $$E_g^2 = (p_g c)^2 + (mc^2)^2$$. Kinematic and gravitational momenta are dual projections: $$\beta = \cos\theta_1 \leftrightarrow \kappa = \sin\theta_2$$, and $$\cot\theta_1 \leftrightarrow \tan\theta_2$$.

</div>
</details>

### The Schwarzschild interval is the inflated form of $$S^2$$ closure

<div class="placeholder" markdown="block">
[ Slide placeholder — "Schwarzschild interval as the inflation of S² closure" ]
<span class="sub">Suggested visual: the sphere closure κ²+κ_X²=1 on the left; posits (container around a body; static observer; external time; κ²≡R_s/r with G, M) appended; the static Schwarzschild interval on the right. Parallel to the Minkowski slide.</span>
</div>

Strictly parallel. Start from $$\kappa^2 + \kappa_X^2 = 1$$. Append a container around a central body, hold the observer static, posit an externally flowing time so $$\kappa_X \equiv d\tau/dt$$, and localize the amplitude as $$\kappa^2 \equiv R_s/r$$ — which is what first introduces the radial coordinate $$r$$ and the legacy constants $$G, M$$ via $$R_s = 2GM/c^2$$. Closure then yields the Schwarzschild time component exactly:

<div class="keybox" markdown="block">
$$c^2 d\tau^2 = c^2\left(1 - \frac{R_s}{r}\right) dt^2$$
</div>

Here $$\kappa$$ is the primitive; $$r$$, $$G$$ and $$M$$ are coordinate-and-unit artifacts attached to it. R.O.M. (below) describes gravitating systems fully *without* $$G$$ and $$M$$, confirming the projection — not $$R_s/r$$ — is irreducible. The full Schwarzschild and Kerr line elements are recovered in R.O.M.

<p class="paper-ref" markdown="span">Full text: [Part I — Schwarzschild Interval as Inflation of the S² Closure](https://willrg.com/documents/WILL_RG_I.pdf#sec:GR_interval) · [R.O.M. — Schwarzschild Metric](https://willrg.com/documents/WILL_RG_R.O.M..pdf#sec:Schwarzschild).</p>

### Closure: the relational origin of the virial theorem

![The exchange rate κ²=2β² from the ratio of degrees of freedom]({{ site.baseurl }}/images/SLIDES-tinyPNG/12_Topological-Ratio-k-b-2.png){: .slide}

The exchange rate between the potential and kinematic projections of a closed system is the ratio of the carriers' degrees of freedom. Under maximal symmetry and ontological minimalism, each independent degree of freedom carries equal quadratic weight; $$S^2$$ has two degrees of freedom and $$S^1$$ has one, so the rate is $$2$$:

<div class="keybox" markdown="block">
$$\kappa^2 = 2\beta^2$$
</div>

This is the relational origin of the virial theorem, and it fixes the carrier saturations: $$S^1$$ at $$\beta^2 = 1$$ (light), $$S^2$$ at $$\kappa^2 = 2$$ (the extremal-Kerr state). It also serves as a diagnostic, through the **closure factor** $$\delta \equiv \kappa^2/2\beta^2$$: for circular orbits $$\delta = 1$$; for elliptical orbits $$\delta$$ breathes around the cycle but averages to $$1$$; for a radiating binary $$\delta \neq 1$$, the defect measuring exactly the energy carried off by gravitational waves.

<div class="insight" markdown="block">
Potential distribution ($$\kappa^2$$) ≡ 2 × kinetic distribution ($$\beta^2$$).
</div>

<p class="paper-ref" markdown="span">Full text: [Part I — Closure: Relational Origin of the Virial Theorem](https://willrg.com/documents/WILL_RG_I.pdf#sec:closure).</p>

### The Total Relational Shift $$Q$$

![The total relational shift Q on the β–κ plane]({{ site.baseurl }}/images/SLIDES-tinyPNG/13_Total-Projection-as-Vector-on-b-k-plane.png){: .slide}

When an observer targets another system, the combined kinematic and gravitational state difference is one **magnitude** — the norm $$Q$$, not a direction:

<div class="keybox" markdown="block">
$$Q^2 = \beta^2 + \kappa^2 \qquad (\text{closed systems: } Q^2 = 3\beta^2)$$
</div>

$$Q$$ is genuinely relational: each observer sits at their own origin $$(\beta, \kappa) = (0, 0)$$ (self-centering), so both parties assign the same magnitude to each other, $$Q_{A \to B} = Q_{B \to A}$$. There is no shared background arena — only mutual shift magnitudes computed from each origin. Causal interaction requires the other system's centre to lie within one's horizon, $$Q < 1$$; at $$Q = 1$$ the budget is exhausted (the photon-sphere / null-circumnavigation limit).

<details class="video-dropdown-container">
<summary class="will-summary">▶ Interactive graph: the Q circle (Desmos)</summary>
<div class="hero-details desmos-container">
<iframe src="https://www.desmos.com/geometry/2nkjtezjpi" width="100%" height="500" frameborder="0"></iframe>
</div>
</details>

<p class="paper-ref" markdown="span">Full text: [Part I — Total Relational Shift Q](https://willrg.com/documents/WILL_RG_I.pdf#sec:DisQ) · [Relational Reciprocity](https://willrg.com/documents/WILL_RG_I.pdf#sec:reciprocity).</p>

### The Energy-Symmetry Law

![The Energy-Symmetry Law]({{ site.baseurl }}/images/SLIDES-tinyPNG/14_Energy-Symmetry-Law.png){: .slide}

Every transformation is bidirectional: a change observed by $$A$$ corresponds to an equal and opposite change observed by $$B$$. This is causal continuity in algebraic form.

<div class="thm" markdown="block">
#### Theorem — Energy Symmetry
The specific energy differences (per unit rest energy) for a transition between two states balance to zero:

$$\Delta E_{A \to B} + \Delta E_{B \to A} = 0.$$
</div>

<details class="video-dropdown-container">
<summary class="will-summary">▶ Proof, and the meaning of the ½ factor</summary>
<div class="hero-details" markdown="block">

For $$A$$ at rest on a surface ($$\beta_A = 0$$, depth $$\kappa_A$$) and $$B$$ in orbit ($$\kappa_B, \beta_B$$), each transition is the sum of the changes in the potential and kinetic budgets:

$$\Delta E_{A \to B} = \tfrac12(\kappa_A^2 - \kappa_B^2) + \tfrac12(\beta_B^2 - \beta_A^2)$$

The reverse transition flips every sign, so the two sum to zero. The factor $$\tfrac12$$ arises because energy is quadratic in the projections: using amplitudes alone ($$\beta^2, \kappa^2$$) is half of each carrier's budget, giving $$K/E_0 = \tfrac12\beta^2$$ and $$U/E_0 \propto -\tfrac12\kappa^2$$.

</div>
</details>

Two consequences follow. **The speed limit $$v \le c$$ is built in:** if $$\beta > 1$$, the kinetic budget and the required transfer grow without bound, no finite reverse transfer could balance it, and the symmetry would break — so $$\beta \le 1$$ is a requirement of causal consistency, not a separate postulate. **Light is the single-axis limit:** for light $$\beta = 1 \Rightarrow \beta_Y = 0$$, the internal phase vanishes, there is no rest frame, and the whole resource sits on one axis. This removes the $$\tfrac12$$ partitioning, so the gravitational effect on light is exactly twice that on a massive body ($$\Phi_\gamma = \kappa^2 c^2$$ vs $$\Phi_{\text{mass}} = \tfrac12\kappa^2 c^2$$) — the observed factor of 2 in light deflection and the Shapiro delay, with no weak-field expansion.

<div class="insight" markdown="block">
Causality is a built-in feature of Relational Geometry.
</div>

<p class="paper-ref" markdown="span">Full text: [Part I — Energy-Symmetry Law](https://willrg.com/documents/WILL_RG_I.pdf#sec:energy-symmetry) · [Single-Axis Transfer and the Nature of Light](https://willrg.com/documents/WILL_RG_I.pdf#sec:nature_of_light).</p>

## Stage III — Legacy Translation &amp; Empirical Alignment

The familiar machinery of physics now appears as special cases — and then the full algebra of orbits, confronted with real data.

### The equivalence principle as a derived identity

![The equivalence principle as a derived identity]({{ site.baseurl }}/images/SLIDES-tinyPNG/11-Equivalence-Principle-as-Derived-Identity.png){: .slide}

In General Relativity $$m_g \equiv m_i$$ is an independent postulate. In WILL it is forced. Both projections rescale the same invariant $$E_0$$, so composing the two stretches gives one local energy scale:

$$E_{\text{loc}} = \frac{E_0}{\beta_Y\,\kappa_X} = \frac{E_0}{\sqrt{(1-\beta^2)(1-\kappa^2)}} = \frac{E_0}{\tau}$$

The inertial and gravitational responses share one effective mass $$m_{\text{eff}} = E_0/(\tau c^2)$$; every internal energy channel scales by the same $$1/\tau$$, so the ratios cancel in every observable — which *is* composition-independent free fall (Eötvös universality). Hence $$m_g \equiv m_i \equiv m_{\text{eff}}$$: what GR posits, WILL delivers as a corollary.

<p class="paper-ref" markdown="span">Full text: [Part I — Equivalence Principle as Derived Identity](https://willrg.com/documents/WILL_RG_I.pdf#thm:equivalence).</p>

### Classical mechanics as collapses of the two-point law

<div class="placeholder" markdown="block">
[ Slide placeholder — "Four ontological collapses of the two-point law" ]
<span class="sub">Suggested visual: the two-point Energy-Symmetry Law collapsing (by forcing r_A = r_B onto one point) into the Lagrangian, Hamiltonian, Newton's third law, and the Einstein–Hilbert action.</span>
</div>

The two-point Energy-Symmetry Law is more fundamental than the standard tools of mechanics. Each appears when the two-point relation $$A \leftrightarrow B$$ is collapsed onto a single point — forcing $$r_A = r_B = r$$ and then re-introducing, by hand, the structure the collapse discarded.

<details class="video-dropdown-container">
<summary class="will-summary">▶ Lagrangian &amp; Hamiltonian</summary>
<div class="hero-details" markdown="block">

Collapsing $$\Delta E_{A \to B} = \tfrac12(\kappa_A^2 - \kappa_B^2) + \tfrac12(\beta_B^2 - \beta_A^2)$$ to one point and appending an ad-hoc potential reproduces $$L = \tfrac12 mv^2 + \tfrac{GMm}{r}$$ and $$H = \tfrac12 mv^2 - \tfrac{GMm}{r}$$. The two-point law already contains the full energy balance — no separate potential, force law, or action is required.

</div>
</details>

<details class="video-dropdown-container">
<summary class="will-summary">▶ Newton's third law</summary>
<div class="hero-details" markdown="block">

Once collapsed into a potential $$U(\vec r)$$ that — to stay empirical — depends only on the relative separation $$\vec r = \vec r_B - \vec r_A$$, the chain rule gives $$\vec F_{AB} = -\nabla U$$ and $$\vec F_{BA} = +\nabla U$$. So $$\vec F_{AB} = -\vec F_{BA}$$: equal-and-opposite forces are the signature of any causally balanced, background-independent system.

</div>
</details>

<details class="video-dropdown-container">
<summary class="will-summary">▶ Einstein–Hilbert action</summary>
<div class="hero-details" markdown="block">

$$S_{EH} = \frac{1}{16\pi G}\int R\sqrt{-g}\,d^4x$$ compresses relational tension into a local curvature scalar on a posited manifold. Its pieces map onto the relational structure: the 4-volume $$\int\sqrt{-g}\,d^4x \to$$ carrier closure; the Ricci scalar $$R \to \kappa^2, \beta^2$$; the variation $$\delta S = 0 \to$$ the Energy-Symmetry Law $$\Delta E_{A \to B} + \Delta E_{B \to A} = 0$$.

</div>
</details>

<div class="insight" markdown="block">
The Lagrangian, Hamiltonian, Newton's third law and the Einstein–Hilbert action are single-point shadows of one two-point law.
</div>

<p class="paper-ref" markdown="span">Full text: [Part I — Two-Point Origin of the Lagrangian and Hamiltonian](https://willrg.com/documents/WILL_RG_I.pdf#sec:classical).</p>

### Earth–GPS: standard GR as the first-order approximation of RG

The daily clock offset between GPS satellites and the ground combines kinematic (SR) and gravitational (GR) effects into one relational factor $$\tau = \beta_Y\kappa_X$$. RG composes them *multiplicatively*; the textbook formula *adds* them. The additive form is exactly the first-order Taylor coefficient of the RG ratio — proved symbolically and to 40-digit precision.

<details class="video-dropdown-container">
<summary class="will-summary">▶ Interactive graph: Earth–GPS (Desmos)</summary>
<div class="hero-details desmos-container">
<iframe src="https://www.desmos.com/geometry/v6nrtv4vyx" width="100%" height="500" frameborder="0"></iframe>
</div>
</details>

<details class="video-dropdown-container">
<summary class="will-summary">▶ The numbers: RG (exact) vs GR (first order)</summary>
<div class="hero-details" markdown="block">

RG expresses the shift as the exact ratio $$\Delta t_{\text{RG}} = (1 - \tau_E/\tau_{\text{GPS}})\,D\,M$$:

- $$\Delta t_{\text{RG}}$$ (exact) $$= 38.5421472752\ \mu s/\text{day}$$
- $$\Delta t_{\text{GR}}$$ (first order) $$= 38.5421472451\ \mu s/\text{day}$$
- difference $$= 3.0\times10^{-8}\ \mu s/\text{day}$$ — the second-order $$\beta^2\kappa^2$$ cross-term

The additive GR formula is the unique leading-order content of the multiplicative RG ratio; the cross-term is the genuine discriminator, becoming relevant only as $$\beta^2$$ or $$\kappa^2$$ approach unity.

</div>
</details>

<p class="paper-ref" markdown="span">Full text and notebook: [Part I — Earth–GPS System](https://willrg.com/documents/WILL_RG_I.pdf#sec:earth-gps).</p>

---

## Relational Orbital Mechanics (R.O.M.)

R.O.M. is not a separate paper — it is the operational payoff of the same principles applied to bound gravitating systems. It is a closed algebraic system that classifies the allowed relational states of an orbit with **no differential equations, no acceleration term, no $$G$$ and no $$M$$**. Everything below derives from $$\beta$$, $$\kappa$$ and closure $$\kappa^2 = 2\beta^2$$.

<p class="paper-ref" markdown="span">Full paper: [R.O.M. — Relational Orbital Mechanics](https://willrg.com/documents/WILL_RG_R.O.M..pdf) · interactive: [R.O.M. Desmos](https://www.desmos.com/calculator/n4lmkpsebx).</p>

<div class="placeholder" markdown="block">
[ Slide placeholder — "The closed algebraic system of R.O.M." ]
<span class="sub">Suggested visual: the core registry — observables (z_κ, z_β, e, θ, T) feeding β, κ, closure κ²=2β², and out the other side R_s, a, Δφ, ρ — as one closed loop with no G or M entering.</span>
</div>

R.O.M. does not describe how a body moves under forces; it classifies the algebraically allowed relational states of a bound system. The whole system is generated from two operational inputs — the gravitational redshift $$z_\kappa$$ and the transverse Doppler shift $$z_\beta$$ — together with the closure law. The core registry:

$$\kappa^2 = 1 - \frac{1}{(1+z_\kappa)^2}, \qquad \beta^2 = 1 - \frac{1}{(1+z_\beta)^2}$$

$$\tau = \kappa_X\,\beta_Y = \frac{1}{(1+z_\kappa)(1+z_\beta)}, \qquad Q^2 = \kappa^2 + \beta^2, \qquad \kappa^2 = 2\beta^2$$

$$R_s = \frac{Tc}{\pi}\beta^3, \qquad a = \frac{R_s}{\kappa^2}, \qquad \rho = \frac{\kappa^2 c^2}{8\pi G a^2}, \qquad \Delta\varphi = \frac{2\pi\,\tau_Y^2}{1-e^2}, \qquad e = \frac{1}{\delta_p} - 1$$

Each line is an identity among dimensionless projections; $$G$$ and $$M$$ appear only at the very end, as unit-conversion factors, never as inputs.

<p class="paper-ref" markdown="span">Full registry: [R.O.M. — Closed Algebraical System of R.O.M. Equations](https://willrg.com/documents/WILL_RG_R.O.M..pdf#eq:rom).</p>

### Relational origin of the orbital laws

Each classical orbital law reappears as a strict algebraic identity of the relational projections — no force, no acceleration primitive, no background metric.

**Spectroscopic shifts — $$\kappa$$ and $$\beta$$ are observables.** By the Conservation Theorem and self-centering, $$\kappa^2 = 1 - 1/(1+z_\kappa)^2$$ and $$\beta^2 = 1 - 1/(1+z_\beta)^2$$: the projections are extracted directly from measured gravitational redshift and transverse Doppler shift, independent of $$G$$ and $$M$$. The single optical observable $$\tau$$ carries the complete structural state, $$\tau^2 = 1 - Q^2 + \kappa^2\beta^2$$. ([R.O.M. — Spectroscopic Shifts](https://willrg.com/documents/WILL_RG_R.O.M..pdf#sec:spectroscopic_shift))

**Kepler's Third Law.** From $$\beta = 2\pi a/cT$$ and $$\kappa^2 = R_s/a$$, closure $$\kappa^2 = 2\beta^2$$ gives directly $$a^3 = \frac{R_s c^2}{8\pi^2}\,T^2$$, i.e. $$a \propto T^{2/3}$$ — with no mass and no gravitational constant. ([R.O.M. — Kepler's Third Law](https://willrg.com/documents/WILL_RG_R.O.M..pdf#sec:orbital_prop))

**Eccentricity ≡ closure defect.** Eccentricity is the projectional deviation from circular equilibrium $$\delta = 1$$: $$\;e = \frac{1}{\delta_p} - 1 = \frac{2\beta_p^2}{\kappa_p^2} - 1 = 1 - \frac{2\beta_a^2}{\kappa_a^2}$$, derived from the conservation of the relational projections without forces. ([R.O.M. — Eccentricity](https://willrg.com/documents/WILL_RG_R.O.M..pdf#sec:rel_ecc))

**Vis-viva as a Pythagorean identity.** The Newtonian $$v^2/2 - GM/r = -GM/2a$$ becomes a strict orthogonal sum on the carriers: the local potential projection is the Pythagorean square sum of the radial, transverse and global kinetic projections, $$\kappa_o^2(o) = \beta_R^2(o) + \beta_T^2(o) + \beta^2$$, with the global binding invariant $$\kappa_o^2(o) - \beta_o^2(o) = \beta^2$$ constant at every orbital phase. ([R.O.M. — Vis-Viva](https://willrg.com/documents/WILL_RG_R.O.M..pdf#sec:vis-viva))

**Classical acceleration and angular momentum.** The radial gradient of the orbital invariant $$\kappa_o^2 - \beta_o^2 = \beta^2$$, with $$\kappa_o^2 = R_s/r$$, yields $$a_{acc} = -\frac{R_s c^2}{2r^2} = -\frac{GM}{r^2}$$ — Newton's law, with no force primitive. The transverse-projection invariant gives a phase-independent specific angular momentum $$h = R_s c\,\frac{\sqrt{1-e^2}}{2\beta}$$. ([R.O.M. — Acceleration](https://willrg.com/documents/WILL_RG_R.O.M..pdf#sec:acceleration) · [Angular Momentum](https://willrg.com/documents/WILL_RG_R.O.M..pdf#sec:angular_momentum))

**Orbital precession as phase accumulation.** Precession is the exact algebraic accumulation of the internal phase divergence over a closed cycle — no perturbation series, no truncation:

$$\Delta\varphi = \frac{2\pi\,\tau_Y^2}{1-e^2}, \qquad \tau_Y^2 \equiv 1 - \tau^2 = Q^2 - \kappa^2\beta^2$$

The cross-coupling $$\kappa^2\beta^2$$ is the non-linear interaction between the $$S^1$$ and $$S^2$$ carriers — the exact term GR's first-order formula omits. ([R.O.M. — Orbital Precession as Phase Accumulation](https://willrg.com/documents/WILL_RG_R.O.M..pdf#sec:precession_law))

**Dynamic event horizon.** At total saturation $$\kappa^2 = 1$$ (so $$\beta^2 = \tfrac12$$, $$\tau \to 0$$, $$\tau_Y \to 1$$) a circular orbit precesses by $$\Delta\varphi = 2\pi$$ per revolution: the periapsis shifts by a full circle, the trajectory folds onto itself, and forward motion nullifies itself. The horizon is the unitary topological closure of the relational trajectory — not a point of infinite density in a container. ([R.O.M. — Dynamic Event Horizon](https://willrg.com/documents/WILL_RG_R.O.M..pdf#sec:dynamic_horizon))

**Gravitational deflection and lensing (the factor of 2, exactly).** The phase buffer $$\beta_Y$$ sets the interaction gradient $$\Gamma(\beta) = \tfrac{1+\beta^2}{2}$$: a slow body has a full buffer ($$\Gamma = \tfrac12$$); light exhausts it ($$\beta = 1 \Rightarrow \Gamma = 1$$), absorbing twice the gradient. This yields one exact, expansion-free deflection law for any trajectory, reducing to $$\Delta\gamma = 2\arcsin(\kappa_p^2/\kappa_{Xp}^2)$$ for light and to an exact algebraic Einstein ring for lensing.

<details class="video-dropdown-container">
<summary class="will-summary">▶ Unified deflection law and its limits</summary>
<div class="hero-details" markdown="block">

$$\Delta\varphi = 2\arcsin\!\left(\frac{\kappa_p^2(1+\beta_p^2)}{2\beta_p^2 - \kappa_p^2(1+\beta_p^2)}\right)$$

Newtonian limit ($$\beta_p \ll 1$$): $$\Delta\varphi \approx \kappa_p^2/\beta_p^2$$ (Rutherford scattering). Photonic limit ($$\beta_p = 1$$): resolves exactly to $$\Delta\gamma = 2\arcsin(\kappa_p^2/\kappa_{Xp}^2)$$, the factor of 2 emerging as the exhausted phase buffer rather than as an anomaly of null geodesics. Verified in the LAGEOS and lensing notebooks.

</div>
</details>

<p class="paper-ref" markdown="span">[R.O.M. — Gravitational Deflection and Lensing](https://willrg.com/documents/WILL_RG_R.O.M..pdf#sec:grav_optics)</p>

### Reconstructing a system's scale from observations alone

<div class="placeholder" markdown="block">
[ Slide placeholder — "Absolute scale from dimensionless observables (no G, no M)" ]
<span class="sub">Suggested visual: four observables (e, θ_⊙, T_ratio, z_sun) → algebraic chain → R_s, a, r_p, precession for Mercury, with the recovered R_s matching 2GM/c² to 0.05%; Jupiter as the universality check.</span>
</div>

One of the most striking results in R.O.M.: the complete structural and dynamical parameterization of a bound system — eccentricity $$e$$, precession $$\Delta\varphi$$, Schwarzschild scale $$R_s$$, and semi-major axis $$a$$ — is fixed by four dimensionless, cross-cultural observables alone: the eccentricity $$e$$, the central body's angular radius $$\theta_\odot$$, the orbital cycle ratio $$T/T_\oplus$$, and the surface redshift $$z_{\rm sun}$$. No mass, no gravitational constant, no metric enters the chain.

For **Mercury**, those four numbers yield $$R_{s,\rm RG} \approx 2954.8\,\text{m}$$ (GR gives $$2GM_\odot/c^2 \approx 2953.33\,\text{m}$$, a $$0.0476\%$$ difference, within the uncertainty of $$z_{\rm sun}$$ and $$\theta_\odot$$), $$a \approx 5.7923\times10^{10}\,\text{m}$$, $$r_p \approx 4.6014\times10^{10}\,\text{m}$$, and a precession of **43.015″/century** — all without $$M$$ or $$G$$. Applying the identical chain to **Jupiter** (changing only its period ratio and eccentricity) recovers $$a_J$$ to $$0.038\%$$, showing this is a universal geometric property of bound systems, not an artefact of the Mercury–Sun proximity.

The corollary is exact: because $$e, \Delta\varphi, R_s, a$$ all close using only dimensionless ratios, $$G$$ and $$M$$ are translation factors for legacy units, not fundamental primitives. $$R_s$$ is the primary geometric invariant; classical mass is the anthropocentric proxy for it.

<p class="paper-ref" markdown="span">Full derivation + notebook: [R.O.M. — Relational Parameterization and the Fundamental Primitives](https://willrg.com/documents/WILL_RG_R.O.M..pdf#sec:relational_parameterization).</p>

### More of the same algebra

**Time-density invariant and the absolute scale.** The invariant $$\tau_D = T\sin(\theta)^{3/2} = \sqrt{\pi/G\rho}$$ fixes the central density from period and angular radius alone, and at the horizon gives the universal constant $$\tau_{D(\rm limit)}/R_s = 2\sqrt{2}\,\pi/c$$. Four independent algebraic routes (optical-phase, two-point differential, geometric-resonance, instantaneous) determine the absolute system scale $$R_s$$ from observables, none of them passing through $$2GM/c^2$$. ([R.O.M. — Time-Density Invariant](https://willrg.com/documents/WILL_RG_R.O.M..pdf#sec:time-density) · [Absolute Scale, Methods A–D](https://willrg.com/documents/WILL_RG_R.O.M..pdf#sec:absolute_scale))

**Rotation: Kerr without a metric.** Setting $$\beta = ac^2/GM$$ and $$\kappa = \sqrt{2}\,\beta$$, the relational carriers reproduce the Kerr structure algebraically: inner/outer horizons $$r_\pm = \tfrac{R_s}{2}(1 \pm \beta_Y)$$, merging at the extremal limit $$\beta = 1$$ to $$r_{\min} = \tfrac12 R_s$$, the ergosphere $$r_{\rm ergo} = \tfrac{R_s}{2}(1 + \sqrt{1 - \beta^2\cos^2\theta})$$, and a ring singularity. No naked singularity emerges for $$\beta \le 1$$ — cosmic censorship is enforced directly by the Energy-Symmetry Law bounding $$\beta \in [0, 1]$$. ([R.O.M. — Kerr Without Metric](https://willrg.com/documents/WILL_RG_R.O.M..pdf#sec:Kerr))

**Frame-dragging as a chiral algebraic asymmetry.** What GR derives from the off-diagonal $$g_{t\phi}$$ metric component, R.O.M. obtains from linear phase superposition on the directed $$S^1$$ carrier: the composite $$\beta_\Sigma = \beta_{\rm orb} \pm \beta_{\rm spin}$$ under closure produces the symmetry-breaking cross-term $$\pm 4\beta_{\rm orb}\beta_{\rm spin}$$, mandating that prograde orbits sit deeper than retrograde. Ablating higher-order terms recovers the post-Newtonian Lense–Thirring node precession exactly; tested against LAGEOS-1 it agrees with observation and GR. ([R.O.M. — Chiral Asymmetry / Frame-Dragging](https://willrg.com/documents/WILL_RG_R.O.M..pdf#sec:chiral))

### Mercury's precession: GR 1PN as the first-order approximation of RG

![Empirical validation of R.O.M.]({{ site.baseurl }}/images/SLIDES-tinyPNG/18_Empirical-Validation.png){: .slide}

Substituting closure and the field relation into the exact precession law gives a closed form whose first term is identically the standard post-Newtonian formula, with a single explicit correction:

$$\Delta\varphi_{\rm RG} = \underbrace{\frac{3\pi R_s}{a(1-e^2)}}_{\text{GR 1PN}} - \frac{\pi R_s^2}{a^2(1-e^2)}, \qquad \Delta\varphi_{\rm RG} - \Delta\varphi_{\rm GR} = -\frac{2\pi\,\beta^2\kappa^2}{1-e^2}\bigg|_{a}$$

The GR formula is recovered by a single explicit cancellation, $$\beta^2\kappa^2 \to 0$$ in $$\tau_Y^2 = 1 - (1-\beta^2)(1-\kappa^2)$$. This is an algebraic identity in $$(R_s, a, e)$$, verified symbolically and to 40-digit precision.

<details class="video-dropdown-container">
<summary class="will-summary">▶ The numbers (Mercury, 40-digit)</summary>
<div class="hero-details" markdown="block">

- $$\Delta\varphi_{\rm RG}$$ (exact) $$= 42.9807844914''/\text{century}$$
- $$\Delta\varphi_{\rm GR}$$ (first-order PN) $$= 42.9807852220''/\text{century}$$
- difference $$= -7.306\times10^{-7}\,''/\text{century} \equiv -\pi R_s^2/[a^2(1-e^2)]$$ (residual $$\sim 10^{-41}$$ rad)

The omitted second-order term is $$\sim 1.7\times10^{-8}$$ of the total — below current perihelion precision. The sign is fixed: RG predicts a slightly smaller precession than first-order PN. (A comparison to fully non-linear Schwarzschild geodesics, which carry their own higher-order terms, is a separate calculation.)

</div>
</details>

<p class="paper-ref" markdown="span">Full verification + notebook: [R.O.M. — Mercury's Precession: GR 1PN as First-Order Approximation of RG](https://willrg.com/documents/WILL_RG_R.O.M..pdf#sec:mercury).</p>

### The S2 star at Sgr A*: R.O.M. against GR on real data

R.O.M. is confronted with the 24-year astrometric and radial-velocity dataset of the S2 star (174 raw observables), against two GR references — a time-linear 1PN pericentre advance and a direct numerical integration of the 1PN equations of motion — all carrying the same nine orbital parameters and zero free precession parameters.

The result, stated plainly: a bare nine-parameter fit favours R.O.M. by $$\Delta\chi^2 = 80.7$$. But a reduced $$\chi^2 \approx 4.4$$–$$4.9$$ rejects all three bare models — no published S2 analysis fits absolute sky positions without a reference-frame solution. When the standard linear calibration (frame zero-point, drift, instrument offsets) is granted identically to every model, the gap closes completely: **$$\Delta\chi^2 = -0.5$$ over 156 degrees of freedom. R.O.M. and General Relativity are statistically indistinguishable on the S2 orbit.**

<details class="video-dropdown-container">
<summary class="will-summary">▶ Where the bare-fit difference comes from (injection–recovery)</summary>
<div class="hero-details" markdown="block">

Controlled injection shows R.O.M. holds no generic advantage: on clean GR truth it loses, and it loses again when an injected frame drift points in a rotated direction. The full apparent advantage is produced by injecting a purely instrumental drift into purely GR data — the bare $$\Delta\chi^2$$ measures alignment between R.O.M.'s single rigid distortion mode (the phase-locked apsidal advance) and this dataset's particular frame drift, not relational dynamics. The calibration is not circular: R.O.M.'s own fit independently demands the same frame solution, improving by 500 $$\chi^2$$ units when granted it; fitted to clean GR observables, R.O.M. cannot approach the GR trajectory below a $$440\,\mu\text{as}$$ floor, so it carries no surplus fitting freedom.

</div>
</details>

At current precision, R.O.M. is observationally equivalent to GR, reached from a closed dimensionless algebra (the advance magnitude matches GR 1PN to $$3\times10^{-5}$$; the full scale follows from chronometric and spectroscopic ratios via $$R_s = Tc\beta^3/\pi$$). The genuine departure is of order $$\beta^4$$, four orders of magnitude below S2 sensitivity. The falsifiable frontier is therefore not Galactic-Centre orbits but where $$\beta^4$$ terms resolve: relativistic pulsar binaries, horizon-scale orbits, and gravitational-wave inspirals.

<p class="paper-ref" markdown="span">Full analysis + reproduction: [R.O.M. — S2 Star (Sgr A*) Against General Relativity and Instrumental Systematics](https://willrg.com/documents/WILL_RG_R.O.M..pdf#sec:S2test).</p>

### The three-body L1 point, from observables alone

The same algebraic chain locates the Sun–Earth L1 equilibrium point without $$G$$, $$M$$ or a metric. Enforcing closure and energy symmetry on the synchronous-motion condition yields an exact quintic in the normalised separation $$\alpha = (R_E - R_{L1})/R_E$$, whose physical root reproduces the observed Earth–L1 distance $$R_{L1} \approx 1.5\times10^9\,\text{m}$$ to better than $$0.3\%$$. The chain that recovers Mercury's precession and the S2 orbit also fixes a collinear three-body equilibrium.

<p class="paper-ref" markdown="span">Full derivation + notebook: [R.O.M. — Relational Derivation of the L1 Equilibrium Point](https://willrg.com/documents/WILL_RG_R.O.M..pdf#sec:L1).</p>

---

## Density, the field equation, and no singularities

![The unified geometric field equation]({{ site.baseurl }}/images/SLIDES-tinyPNG/16_Unified-Field-Equation.png){: .slide}

Normalizing the potential projection over the unit-sphere area gives the local energy density and its bound at saturation:

$$\rho = \frac{\kappa^2 c^2}{8\pi G r^2}, \qquad \rho_{\text{max}} = \frac{c^2}{8\pi G r^2}$$

so all of gravitational physics reduces to a single algebraic identity — the ratio of geometric scales equals the ratio of energy densities:

<div class="keybox" markdown="block">
$$\kappa^2 = \frac{R_s}{r} = \frac{\rho}{\rho_{\text{max}}}$$
</div>

Because density is capped at a finite $$\rho_{\text{max}}$$, infinite density is impossible. The static horizon sits at $$\kappa^2 = 1$$ ($$r = R_s$$); even the extremal rotating limit only reaches $$r = R_s/2$$. The point $$r = 0$$ is simply **absent** from the admissible relational range — singularities are excluded by construction, not patched over.

<div class="insight" markdown="block">
Density is bounded; the point $$r = 0$$ does not exist.
</div>

<p class="paper-ref" markdown="span">Full text: [Part I — Density, Mass, and Pressure](https://willrg.com/documents/WILL_RG_I.pdf#sec:density) · [No Singularities, No Hidden Regions](https://willrg.com/documents/WILL_RG_I.pdf#sec:no_singularities).</p>

## Stage IV — Consequences &amp; Direct Applications

### The Theoretical Ouroboros

![The theoretical Ouroboros]({{ site.baseurl }}/images/SLIDES-tinyPNG/17_Theoretical-Ouroboros.png){: .slide}

The single principle, through pure geometry, generated the carriers, the projections, and the laws — and those laws produced a field equation that states exactly the equivalence it began with: the ratio of geometric scales equals the ratio of energy densities.

<div class="keybox" markdown="block">
SPACETIME ≡ ENERGY $$\;\Longrightarrow\;$$ $$\kappa^2 = \dfrac{R_s}{r} = \dfrac{\rho}{\rho_{\text{max}}}$$ $$\;\Longrightarrow\;$$ SPACETIME ≡ ENERGY
</div>

The principle is proven as the inevitable consequence of its own geometric consistency. Beautiful as that is, the test stays empirical — which is why R.O.M. above meets data, not only logic.

<p class="paper-ref" markdown="span">Full text: [Part I — Theoretical Ouroboros](https://willrg.com/documents/WILL_RG_I.pdf#sec:ouroboros).</p>

### $$W_{ILL} = 1$$ — the unity of the projections

<div class="placeholder" markdown="block">
[ Slide placeholder — "W_ILL = E·T / (M·L) = 1, the unity invariant" ]
<span class="sub">Suggested visual: the four projections (Energy E, Mass M, Time T, Length L) as faces of one structure, combining into the dimensionless ratio E·T/(M·L) that collapses to exactly 1 for every energy, scale and phase.</span>
</div>

If there is one relational resource, then mass, energy, time and length are not independent — they are four correlated projections of the same structure. Combining them in the one dimensionless way the carriers permit gives an invariant identically equal to 1 for any closed system, at every energy, scale and orbital phase:

<div class="keybox" markdown="block">
$$W_{ILL} = \frac{E\,T}{M\,L} = 1$$
</div>

All dimensionful constants cancel automatically; the value is fixed by the geometry of the carriers, not by a choice of units. Equivalently $$E/M = L/T$$: the energy sector and the spacetime sector are locked together. Treating energy–mass and space–time as separate blocks is an interpretational approximation; $$W_{ILL} = 1$$ is the precise statement that spacetime ≡ energy.

<details class="video-dropdown-container">
<summary class="will-summary">▶ Interactive: deriving W_ILL = 1 (Desmos)</summary>
<div class="hero-details desmos-container">
<iframe src="https://www.desmos.com/calculator/wswnhckrru" width="100%" height="500" frameborder="0"></iframe>
</div>
</details>

<p class="paper-ref" markdown="span">Full text: [Part I — W_ILL: Unity of Relational Structure](https://willrg.com/documents/WILL_RG_I.pdf#sec:willinvariant).</p>

### The name "WILL"

**WILL** stands for **SPACE–TIME–ENERGY** — both a shorthand and a quiet irony toward the anthropic principle. The universe is not a stage where energy acts through time upon space, but a single self-balancing structure whose internal distinctions generate every phenomenon. The cosmos does not possess "will"; yet through WILL it manifests all that is.

### From descriptive to generative physics

The deepest shift is not a new equation but a new role for physical law. Standard physics observes phenomena and then writes laws to describe them. WILL inverts this: the laws are *generated* as the only self-consistent possibility.

| Descriptive physics (standard) | Generative physics (WILL) |
|---|---|
| Phenomena are observed, then summarized into empirical laws. | Laws emerge as inevitable consequences of relational geometry. |
| Physical laws are assumptions introduced to model reality. | Physical laws are identities enforced by geometric self-consistency. |
| Time and space are external backgrounds. | Time and space are projections of energy relations. |
| Dynamics = evolution of states *in* time. | Dynamics = ordered succession of balanced configurations; time is emergent. |
| Goal: describe what is observed. | Goal: show why nothing else is possible. |

<p class="paper-ref" markdown="span">Full text: [Part I — From Descriptive to Generative Physics](https://willrg.com/documents/WILL_RG_I.pdf#sec:generative_physics).</p>

### Limitations and Challenges

This is open research, and the boundaries are stated plainly.

**Current limitations.** Gravitational waves and the full radiative two-body problem are not yet formulated relationally — only conservative, bound orbits are covered. A complete multi-body architecture beyond the collinear L1 case has not been constructed. These are limits of present mathematical facility rather than prohibitions of the ontology, and collaboration on radiative dynamics and multi-body closures is actively invited.

**Falsifiability and future tests.** The sharpest near-term discriminator is continued high-precision monitoring of the S2 star: RG predicts a true-anomaly-coupled precession phasing that should retain its statistical edge over the time-linear form as GRAVITY+ adds pericentre passages (2026–2028); a statistically significant reversal would count against the phasing hypothesis. The genuine point of departure is the $$\beta^4$$ structure of the closure law, resolved only in relativistic pulsar binaries, horizon-scale orbits, and gravitational-wave inspirals.

<p class="paper-ref" markdown="span">Full text: [Part I — Challenges and Current Limitations](https://willrg.com/documents/WILL_RG_I.pdf#sec:challenges).</p>

### Conclusion

The entire phenomenology of motion — Keplerian architecture, perihelion precession, light deflection, frame-dragging, the L1 point — emerges as an algebraic consequence of the four methodological principles, an unbroken chain with zero flexibility. This is not a re-description of General Relativity; it is the irreducible algebraic core that remains when the ontological superstructure of Riemannian geometry and tensor formalism is removed. Within RG:

- **$$G$$ and $$M$$ are secondary.** All scales follow from dimensionless spectroscopic and chronometric ratios; the gravitational constant and the kilogram appear only as unit conversions.
- **The metrics are derived.** Minkowski, Schwarzschild and Kerr intervals are Pythagorean identities of the carriers $$S^1$$ and $$S^2$$, not postulates of a 4D manifold.
- **Closure replaces the virial theorem.** $$\kappa^2 = 2\beta^2$$ is the consequence of equal budget per degree of freedom.
- **Precession is topological, not dynamical.** The pericentre advance is the mismatch of internal phase over one cyclic extension, with no geodesic integration.
- **Singularities are excluded.** The point $$r = 0$$ is absent from the admissible relational range.

<p class="paper-ref" markdown="span">Full text: [WILL RG — Conclusion &amp; the Trilogy](https://willrg.com/documents/WILL_RG_I.pdf#trilogy).</p>

---

## The World as a Projection

This is Part I, with R.O.M. The same projections extend to cosmology (Part II) and quantum mechanics (Part III). The core remains: energy does not exist *in* spacetime — it *creates* spacetime by its projection.

[Documents &amp; Results](https://willrg.com/results/) · [Testable Predictions](https://willrg.com/predictions/) · [Ask WILL AI](https://willrg.com/WILL-AI/) · [Help This Research](https://willrg.com/help/)

<div id="will-hint"
     style="position:fixed;bottom:25px;left:50%;transform:translateX(-50%);
            background:rgba(31,41,55,0.85);color:#eee;padding:10px 20px;
            border-radius:10px;font-size:0.95rem;opacity:0.9;
            transition:opacity 0.6s ease;z-index:1000;">
    💡 <em>Select any text to ask WILL AI for an explanation.</em>
</div>

<script>
const hint = document.getElementById('will-hint');
const observer = new MutationObserver(() => {
  const aiWindow = document.querySelector('.fixed.inset-0.bg-black');
  if (aiWindow) {
    hint.style.opacity = '0';
    setTimeout(() => hint.remove(), 600);
    observer.disconnect();
  }
});
observer.observe(document.body, { childList: true, subtree: true });
</script>

<div id="tutor-root"></div>

<script src="https://cdn.jsdelivr.net/npm/react@18/umd/react.production.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/react-dom@18/umd/react-dom.production.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>

<script src="{{ site.baseurl }}/assets/tutor.js"></script>




