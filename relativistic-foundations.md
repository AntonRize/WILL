---
layout: default
title: "Relativistic Foundations"
permalink: /relativistic-foundations/
description: "An accessible, layered entry point to WILL Relational Geometry. From a single principle — SPACETIME ≡ ENERGY — Special and General Relativity, the Minkowski and Schwarzschild intervals, the equivalence principle, and orbital mechanics are derived as geometric identities of two relational carriers, with zero free parameters."
---


<style>

.markdown-content p {
  margin-top: 1rem;
  margin-bottom: 1rem;
  line-height: 1.6;
  font-size: 1.05rem;
}
  
  .video-wrapper {
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-top: 56.25%; /* Соотношение сторон 16:9 */
  border-radius: 12px; /* Скругленные углы, как у других элементов */
  margin: 1.5rem 0; /* Отступы сверху и снизу */
}

.video-wrapper iframe {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  border: 0;
}

/* --- Style for the Video Dropdown --- */
.video-dropdown-container {
  /* This container holds the entire dropdown component. */
  margin: 2rem 0; /* Adds some space above and below. */
}

.video-dropdown-summary {
  /* This is the visible, clickable 'button' or 'backdrop'. */
  display: block; /* Ensures it behaves like a container. */
  padding: 1rem; /* Adds space inside the button. */
  background-color: #181818; /* A dark background similar to the Spotify player. */
  color: #FFFFFF; /* White text for high contrast. */
  border-radius: 12px; /* Rounded corners to match the player. */
  font-weight: 600; /* Bolder text. */
  font-size: 1.05rem;
  cursor: pointer; /* Shows a hand cursor on hover. */
  outline: none; /* Removes the default blue outline on click. */
  list-style: none; /* Removes the default triangle/arrow marker. */
  transition: background-color 0.2s; /* Smooth hover effect. */
}

.video-dropdown-summary:hover {
  background-color: #282828; /* Slightly lighter on hover. */
}

/* Hides the default dropdown arrow from the browser */
.video-dropdown-summary::-webkit-details-marker {
  display: none;
}
  
/* Hero-like toggle button for <summary> */
.will-hero-summary {
  display: block;
  padding: 0.9rem 1.1rem;
  margin: 1rem 0;
  background-color: rgba(31,41,55,0.5); /* ~ bg-gray-800/50 */
  color: #22d3ee; /* ~ text-cyan-400 */
  border: 2px solid rgba(6,182,212,0.3); /* ~ border-cyan-500/30 */
  border-radius: 12px; /* match hero rounded-xl */
  font-weight: 700;
  font-size: 1.05rem;
  text-align: center;
  cursor: pointer;
  box-shadow: 0 10px 25px rgba(6,182,212,0.10); /* ~ shadow-cyan-500/10 */
  transition: background-color .2s ease, transform .12s ease, box-shadow .2s ease;
  }
  
/* Hover/active feedback */
.will-hero-summary:hover {
  background-color: rgba(31,41,55,0.7);
  transform: translateY(-1px);
  box-shadow: 0 14px 28px rgba(6,182,212,0.12);
  }
  
/* Remove default disclosure marker */
.will-hero-summary::-webkit-details-marker { display: none; }
/* Keep container spacing consistent (reuse your existing container class) */
.hero-details { margin-top: 0.5rem; }

/* Placeholder block for house-style slides to be inserted later */
.slide-placeholder {
  border: 2px dashed rgba(6,182,212,0.45);
  border-radius: 12px;
  padding: 2.5rem 1.5rem;
  text-align: center;
  color: #22d3ee;
  background: repeating-linear-gradient(45deg, rgba(6,182,212,0.03), rgba(6,182,212,0.03) 12px, rgba(6,182,212,0.06) 12px, rgba(6,182,212,0.06) 24px);
  margin: 1.5rem auto;
  max-width: 64rem;
  font-weight: 600;
}
.slide-placeholder .ph-sub { display:block; margin-top:0.5rem; font-size:0.85rem; color:#94a3b8; font-weight:400; }
</style>
 

# WILL Part I: Relational Geometry
<p class="text-center text-gray-400 italic mt-2 mb-8">
    *Interactive page — highlight any text to ask WILL AI for an explanation.*
</p>

---

<div style="margin: 40px auto; max-width: 800px; aspect-ratio: 16 / 9; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.3);">
  <iframe 
    width="100%" 
    height="100%" 
    src="https://www.youtube.com/embed/Re0h4zF0C4A" 
    title="YouTube video player" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    referrerpolicy="strict-origin-when-cross-origin" 
    allowfullscreen>
  </iframe>
</div>

---

## What is This Page?

<div class="my-8 text-center max-w-4xl mx-auto">
    <p class="text-lg text-gray-400 italic leading-relaxed">
        This is the entry point to WILL Relational Geometry. It shows, step by step, how Special and General Relativity — and even the Minkowski and Schwarzschild "spacetime intervals" themselves — arise from a <strong class="text-white">single principle</strong>, pure logic, and geometry, with no free parameters to tune. The page is built in two layers: a plain-language narrative anyone can follow, and <strong class="text-white">expandable formal derivations</strong> for readers who want the full proofs. Read the narrative top to bottom for the story; open the dropdowns wherever you want the rigorous version.
    </p>
</div>

<div class="max-w-4xl mx-auto my-6 p-4 rounded-xl border border-gray-700 bg-gray-800/40 text-gray-300 text-base leading-relaxed">
    This document is <strong class="text-white">Part I of the WILL Trilogy</strong>:
    <strong class="text-white">Part I — Relational Geometry</strong> (this foundation: relativity and gravity),
    <a href="https://willrg.com/results/" class="text-cyan-400 hover:text-white">Part II — Relational Cosmology</a>, and
    <a href="https://willrg.com/results/" class="text-cyan-400 hover:text-white">Part III — Relational Quantum Mechanics</a>.
    Orbital applications live in the companion paper <a href="https://willrg.com/results/" class="text-cyan-400 hover:text-white">R.O.M. — Relational Orbital Mechanics</a>.
</div>

---

For full mathematical derivations:  

[WILL RG Papers](https://willrg.com/results/)

For unique testable predictions:

[WILL RG Predictions](https://willrg.com/predictions/)

For questions and curiosity:

[WILL RG AI](https://willrg.com/WILL-AI/)

---

<details class="video-dropdown-container">  
  <summary class="will-hero-summary">▶ Quick Glossary: Key Terms & Concepts</summary>  
  <div class="hero-details">  
    <p><strong>Projection:</strong> The mapping of one relational quantity onto an axis. In WILL, every physical quantity is a projection of a single conserved resource, seen from a chosen observer.</p>
    <p><strong>Beta (β):</strong> The kinematic <abbr title="mapping of one quantity onto an axis">projection</abbr> (amplitude). The ratio of an object's velocity to the universal rate of change, β = v/c. Not a property an object "has," but a measure of the difference between states as seen by an observer.</p>  
    <p><strong>Kappa (κ):</strong> The potential (gravitational) <abbr title="mapping of one quantity onto an axis">projection</abbr> (amplitude). It measures how deeply an object sits in a gravitational field, κ = v_e/c = √(R_s/r), and is fixed operationally by the measured gravitational redshift. At κ = 1 the escape velocity equals c (the horizon).</p>  
    <p><strong>Phase (β_Y, κ_X):</strong> The complementary "internal" projection on each carrier. It governs proper time and proper length. Phase = 1 means undisturbed internal flow (rest); Phase → 0 means internal time freezes (light-speed / horizon). The historical Lorentz factor is γ = 1/β_Y.</p>
    <p><strong>Relational carriers (S¹, S²):</strong> The two minimal closed shapes — the circle S¹ (one direction) and the sphere S² (all directions) — that carry the conserved resource. <strong>They are not shapes in space</strong>; space and time are labels we attach to them.</p>
    <p><strong>Closure (κ² = 2β²):</strong> The fixed "exchange rate" between the gravitational and kinematic projections in any closed system. It is the relational origin of the virial theorem.</p>
    <p><strong>Total Relational Shift (Q):</strong> The combined state difference an observer assigns to another system, Q² = β² + κ². Interaction is causal only when Q < 1.</p>
    <p><strong>Relational spacetime factor (τ):</strong> τ = β_Y · κ_X, the single quantity actually read out by spectroscopy (the inverse of the measured redshift product). Time dilation, redshift, and precession are all expressions of τ.</p>
    <p><strong>Inflation (of an interval):</strong> The process of recovering a legacy metric (Minkowski, Schwarzschild) by <em>adding</em> a container, coordinates, an external time, and a reference scale to a single closure relation. The metric is the "inflated" image; the relation is primary.</p>
    <p><strong>Universal rate of change (c):</strong> The speed of light, viewed here as the invariant tempo of all change — the limit of any transformation or information transfer.</p>  
    <p><strong>W_ILL invariant:</strong> The dimensionless identity W_ILL = E·T / (M·L) = 1, showing energy, mass, time and length are coherent projections of one resource, not independent quantities.</p>
    <p><strong>Event Horizon:</strong> The boundary where escape velocity equals c (κ = 1, r = R_s). The "point of no return."</p>  
    <p><strong>Singularity:</strong> A point of infinite density. WILL forbids it: density is bounded by a finite ρ_max and the point r = 0 is simply absent from the admissible range.</p>  
    <p><strong>Epistemic Hygiene:</strong> Building a theory by <em>removing</em> unjustified assumptions, keeping only what logic and geometry require — nothing extraneous.</p>  
  </div>  
</details>

---

<div class="mb-12">
    <img src="{{ site.baseurl }}/images/SLIDES-tinyPNG/1_WILL-Relational-Geometry.png" alt="WILL: Relational Geometry - How to Construct Reality out of One Principle" class="w-full max-w-5xl mx-auto rounded-lg border-2 border-gray-700/50 shadow-2xl">
    <div class="max-w-4xl mx-auto mt-8 text-gray-300 text-lg leading-relaxed">
        <p>
            This page explores a foundational model of physics built from a single principle. Instead of describing observed phenomena with external laws, it <strong class="text-white">generates the laws of physics</strong> as an inevitable consequence of that principle. This is the shift from <em>descriptive</em> physics (write down laws that fit what we see) to <em>generative</em> physics (show why nothing else was possible).
        </p>
    </div>
</div>

---

<!-- ════════════════════════════ STAGE 0 ════════════════════════════ -->

<div class="text-center my-10">
    <span class="text-sm font-bold tracking-[0.3em] text-cyan-400">STAGE 0</span>
    <h2 class="text-3xl md:text-4xl font-extrabold text-white mt-2">The Last Geocentric Epicycle</h2>
</div>

<div class="mb-12">
    <img src="{{ site.baseurl }}/images/SLIDES-tinyPNG/3_Breakthroughs-Delete-Not-Add.png" alt="Historical Breakthroughs in Physics by Deleting Separations" class="w-full max-w-5xl mx-auto rounded-lg border-2 border-gray-700/50 shadow-2xl">
    <div class="max-w-4xl mx-auto mt-8 text-gray-300 text-lg leading-relaxed">
        <p>
            The greatest leaps in physics have come not from adding new entities, but from <strong class="text-white">removing a false separation</strong>. Copernicus removed the Earth/cosmos divide. Newton removed the split between terrestrial and celestial law. Maxwell merged electricity and magnetism. Einstein unified space and time. Each step widened the relational circle and <em>reduced</em> the number of unexplained primitives.
        </p>
    </div>
</div>

<div id="1W" class="mb-12">
    <img src="{{ site.baseurl }}/images/SLIDES-tinyPNG/4_False-Separation-as-Ontological-Blind-Spot.png" alt="The False Separation Between Structure and Dynamics" class="w-full max-w-5xl mx-auto rounded-lg border-2 border-gray-700/50 shadow-2xl">
    <div class="max-w-4xl mx-auto mt-8 text-gray-300 text-lg leading-relaxed">
        <p>
            One separation survived all of this pruning. Every modern theory — SR, GR, QFT, the Standard Model, ΛCDM — is written with a two-part syntax: a fixed <strong class="text-white">structure</strong> (a manifold plus a metric) <em>plus</em> the <strong class="text-white">dynamics</strong> (fields and constants) that play out upon it. No experiment demands this duplication; it is kept only because the resulting equations happen to fit. It is an unexamined assumption — an "unpaid ontological debt."
        </p>

        <details class="video-dropdown-container mt-6">
            <summary class="will-hero-summary">▶ Why no experiment actually establishes the split</summary>
            <div class="hero-details text-left p-4 md:p-6 bg-gray-900/50 rounded-lg text-gray-300">
                <p>Every standard "test" is an internal consistency check of a formalism that already assumes two substances — never positive evidence for the separation itself:</p>
                <ul class="list-disc list-inside ml-4 mt-2 space-y-2">
                    <li><strong>Local energy conservation</strong> is verified only <em>after</em> the metric is declared fixed; no experiment varies the volume of empty space and checks the books.</li>
                    <li><strong>Universality of free fall</strong> tests <span class="font-mono">m_i = m_g</span> numerically — not the claim that inertia lives <em>in</em> the object rather than in a geometric scaling relation.</li>
                    <li><strong>Gravitational-wave polarizations</strong> test spin content, not ontology.</li>
                    <li><strong>Casimir / Lamb shifts</strong> measure <em>differences</em> of vacuum energy between two geometries; the absolute bulk term is explicitly subtracted away.</li>
                </ul>
                <p class="mt-4">Until an experiment varies the amount of space while holding everything else fixed, the spacetime–energy separation remains an unevidenced metaphysical postulate.</p>
            </div>
        </details>

        <div class="mt-8 text-center text-lg font-semibold text-yellow-300 tracking-wider border-2 border-yellow-500/30 bg-gray-800/50 rounded-xl p-4 inline-block mx-auto block">
            <p>The spacetime–energy split is the last geocentric epicycle in physics.</p>
        </div>
    </div>
</div>

---

<!-- ════════════════════════════ STAGE I ════════════════════════════ -->

<div class="text-center my-10">
    <span class="text-sm font-bold tracking-[0.3em] text-cyan-400">STAGE I</span>
    <h2 class="text-3xl md:text-4xl font-extrabold text-white mt-2">Ontological Construction — The Primitives</h2>
</div>

<div class="mb-12">
    <img src="{{ site.baseurl }}/images/SLIDES-tinyPNG/2_Methodological-Pillars.png" alt="Methodological Principles: Epistemic Hygiene, Relational Origin, Ontological Minimalism, Mathematical Transparency" class="w-full max-w-5xl mx-auto rounded-lg border-2 border-gray-700/50 shadow-2xl">
    <div class="max-w-4xl mx-auto mt-8 text-gray-300 text-lg leading-relaxed">
        <p>
            To build a theory from one idea without smuggling in new postulates, we need an uncompromising method. The whole framework rests on <strong class="text-white">four methodological principles</strong>. They are not claims about reality — they are rules of logical and epistemic purity, and everything else is forced to follow from them.
        </p>
        <div class="grid md:grid-cols-2 gap-4 mt-6">
            <div class="border-l-4 border-cyan-500/50 pl-4 py-2 bg-gray-800/30 rounded-r-lg">
                <h4 class="font-semibold text-white">1. Epistemic Hygiene</h4>
                <p class="text-base">Derive physics by <em>removing</em> hidden assumptions, never by adding postulates. Zero free parameters — by construction.</p>
            </div>
            <div class="border-l-4 border-cyan-500/50 pl-4 py-2 bg-gray-800/30 rounded-r-lg">
                <h4 class="font-semibold text-white">2. Relational Origin</h4>
                <p class="text-base">Every physical quantity is defined only by its relations. No absolute properties.</p>
            </div>
            <div class="border-l-4 border-cyan-500/50 pl-4 py-2 bg-gray-800/30 rounded-r-lg">
                <h4 class="font-semibold text-white">3. Ontological Minimalism</h4>
                <p class="text-base">Keep the fewest possible primitives. No background container, no absolute time, no a-priori forces or fields.</p>
            </div>
            <div class="border-l-4 border-cyan-500/50 pl-4 py-2 bg-gray-800/30 rounded-r-lg">
                <h4 class="font-semibold text-white">4. Mathematical Transparency</h4>
                <p class="text-base">Every symbol maps to exactly one physical idea. Number of symbols = number of independent physical ideas.</p>
            </div>
        </div>
        <p class="mt-4 text-base text-gray-400 italic">Note: "zero free parameters" is a <em>consequence</em> of these principles, not a separate pillar. The flow chart of every derivation is the <a href="https://willrg.com/logos_map/" class="text-cyan-400 hover:text-white">Logos Map</a>.</p>
    </div>
</div>

<div class="mb-12">
    <img src="{{ site.baseurl }}/images/SLIDES-tinyPNG/5_Energy-in-the-Relational-Framework.png" alt="Defining Energy as Conserved, Relational, Causal, and Manifested as Change" class="w-full max-w-5xl mx-auto rounded-lg border-2 border-gray-700/50 shadow-2xl">
    <div class="max-w-4xl mx-auto mt-8 text-gray-300 text-lg leading-relaxed">
        <p>
            From these four principles, three results about the foundational core follow immediately. They are the load-bearing theorems of the entire framework.
        </p>

        <div class="border-l-4 border-gray-600 pl-4 py-2 my-4">
            <h4 class="font-semibold text-white">Theorem: Relational Closure</h4>
            <p>A purely relational system cannot be geometrically open. Any interaction with a supposed "outside" is itself a relation — and the moment it acts, it is part of the system. An open relational system is a contradiction; the system is closed by logical necessity, not by a wall.</p>
        </div>

        <div class="border-l-4 border-gray-600 pl-4 py-2 my-4">
            <h4 class="font-semibold text-white">Theorem: Relational Invariance → the definition of Energy</h4>
            <p>In a closed system where change occurs, any change must be balanced by a complementary change elsewhere. There must therefore exist a conserved measure of change. That invariant is what we historically call <strong>energy</strong>. Stripped of substance, energy is revealed as the bookkeeping of causality itself.</p>
            <p class="text-center mt-3 text-white font-semibold">Energy is the invariant relational measure of state transformation within a closed system.</p>
        </div>

        <div class="border-l-4 border-gray-600 pl-4 py-2 my-4">
            <h4 class="font-semibold text-white">Theorem: Relational Isotropy</h4>
            <p>With no background grid, no direction can be privileged in advance. The geometry that carries the conserved resource must therefore be maximally symmetric.</p>
        </div>

        <details class="video-dropdown-container mt-6">
            <summary class="will-hero-summary">▶ Formal proofs (Closure, Invariance, Isotropy)</summary>
            <div class="hero-details text-left p-4 md:p-6 bg-gray-900/50 rounded-lg text-gray-300 space-y-4">
                <p><strong>Relational Closure (proof by analytic tautology).</strong> (1) Quantities are defined only by relations. (2) If an external entity interacts with the system, that interaction is itself a relation. (3) As the relation forms, it is integrated into the system. Hence an "interacting non-relation" is impossible; the system is closed by definition.</p>
                <p><strong>Relational Invariance (proof by structural necessity).</strong> States change (empirical). The system is closed (above). A change cannot vanish into a void or emerge from one, so it must be balanced by a complementary change. Therefore a conserved quantitative measure of change must exist — "energy."</p>
                <p><strong>Relational Isotropy (proof by relational origin).</strong> There is no absolute grid. Direction only manifests as a specific interaction. Assigning an intrinsic privileged axis to the unmeasured resource is unobservable surplus ontology (pure gauge). Hence the carrier must be strictly isotropic.</p>
            </div>
        </details>
    </div>
</div>

<div class="mb-20">
    <div class="max-w-4xl mx-auto mt-8 text-gray-300 text-lg leading-relaxed">
        <h3 class="text-2xl font-bold text-white text-center mb-6">The Unifying Principle</h3>
        <p>
            Treating "structure" as separate from "dynamics" always smuggles in a background container that no phenomenon requires. Removing that illicit separation forces structure and dynamics to be two aspects of one entity. This is a principle with <em>negative</em> ontological weight: it does not add, it subtracts.
        </p>
        <div class="font-mono text-2xl bg-cyan-900/30 border border-cyan-500/50 p-6 rounded-lg my-6 text-center text-white">
            <p>SPACETIME ≡ ENERGY</p>
        </div>
        <p>
            We give the single unified relational structure a name: <strong class="text-white">WILL ≡ SPACE–TIME–ENERGY</strong>. Every physically meaningful quantity is a relational feature of WILL. This principle is foundational but <em>testable</em>: it must survive both a geometric audit (internal logical consequences) and an empirical audit (agreement with data). The rest of this page is that audit.
        </p>

        <div class="overflow-x-auto mt-6">
            <table class="w-full text-left border-collapse text-base">
                <thead>
                    <tr class="bg-gray-800">
                        <th class="p-3 border border-gray-600">Picture of reality</th>
                        <th class="p-3 border border-gray-600 text-center">Irreducible primitives</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="bg-gray-800/50">
                        <td class="p-3 border border-gray-600">Substantival: container + content (spacetime <em>and</em> energy/matter)</td>
                        <td class="p-3 border border-gray-600 text-center font-mono">≥ 2</td>
                    </tr>
                    <tr class="bg-gray-800/50">
                        <td class="p-3 border border-gray-600">Relational: WILL (one self-relating structure)</td>
                        <td class="p-3 border border-gray-600 text-center font-mono text-cyan-400">1</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="mt-8 text-center text-lg font-semibold text-yellow-300 tracking-wider border-2 border-yellow-500/30 bg-gray-800/50 rounded-xl p-4 inline-block mx-auto block">
            <p>Heat ≡ motion. Electricity ≡ magnetism. Space ≡ time. And now: Spacetime ≡ Energy.</p>
        </div>
    </div>
</div>

<!-- ════════════════════════════ STAGE II ════════════════════════════ -->

<div class="text-center my-10">
    <span class="text-sm font-bold tracking-[0.3em] text-cyan-400">STAGE II</span>
    <h2 class="text-3xl md:text-4xl font-extrabold text-white mt-2">Geometric Derivation</h2>
    <p class="text-gray-400 mt-2 max-w-3xl mx-auto">From one principle to the carriers of reality, and from the carriers to Special and General Relativity.</p>
</div>

<div class="mb-12">
    <img src="{{ site.baseurl }}/images/SLIDES-tinyPNG/6_Key-Constraints-on-the-Relational-Structure.png" alt="Key Constraints from the Unifying Principle: Closure, Conservation, Isotropy" class="w-full max-w-5xl mx-auto rounded-lg border-2 border-gray-700/50 shadow-2xl">
    <div class="max-w-4xl mx-auto mt-8 text-gray-300 text-lg leading-relaxed">
        <p>
            Three constraints — <strong class="text-white">Closure, Conservation, and Isotropy</strong> — are unavoidable for a universe built from a single self-contained principle. The next question is purely mathematical: what shapes can satisfy all three at once, while introducing no arbitrary numbers?
        </p>
    </div>
</div>

<div id="2W" class="mb-12">
    <img src="{{ site.baseurl }}/images/SLIDES-tinyPNG/7_Two-Minimal-Relational-Carriers.png" alt="The Circle (S¹) for directional relations and the Sphere (S²) for omnidirectional relations" class="w-full max-w-5xl mx-auto rounded-lg border-2 border-gray-700/50 shadow-2xl">
    <div class="max-w-4xl mx-auto mt-8 text-gray-300 text-lg leading-relaxed">
        <p>
            The answer is forced. A <strong class="text-white">directional</strong> relation (one degree of freedom) that cannot leak must close into a loop — and the only parameter-free, maximally symmetric loop is the circle <strong class="text-white">\(S^1\)</strong>. An <strong class="text-white">omnidirectional</strong> relation (two degrees of freedom) that is closed and isotropic can only be the sphere <strong class="text-white">\(S^2\)</strong>. No free integers, no preferred axes: just these two.
        </p>

        <details class="video-dropdown-container mt-6">
            <summary class="will-hero-summary">▶ Formal derivation of the carriers</summary>
            <div class="hero-details text-left p-4 md:p-6 bg-gray-900/50 rounded-lg text-gray-300 space-y-3">
                <p><strong>1-DOF (kinematic).</strong> The minimal non-trivial relation is a sequence of transformations. Closure forces it into a loop. A discrete loop (a cyclic group of \(n\) states) would require choosing an arbitrary integer \(n\), which Mathematical Transparency forbids — so the continuum limit is forced. Isotropy then leaves a unique object: the continuous circle \(S^1\).</p>
                <p><strong>2-DOF (potential).</strong> The next relation is the omnidirectional distribution of the resource from a point, requiring a 2D carrier. Any discrete tiling smuggles in arbitrary parameters, forcing a continuous 2-carrier; closure makes it compact; maximal symmetry eliminates every anisotropic surface (e.g. the torus, which has preferred axes), leaving a unique object: the 2-sphere \(S^2\).</p>
            </div>
        </details>

        <div class="border-l-4 border-red-500/60 pl-4 py-2 my-6 bg-red-900/10 rounded-r-lg">
            <h4 class="font-semibold text-white">Warning: the spatial-container fallacy</h4>
            <p class="text-base">\(S^1\) and \(S^2\) are <strong>not</strong> shapes embedded in space. Do not picture a ring or a sphere expanding through a void. They are abstract relational carriers encoding closure, conservation and isotropy. Spatial distance \(r\) and time are labels observers attach to these patterns — the projection dictates the space, not the other way around.</p>
        </div>

        <div class="mt-8 text-center text-lg font-semibold text-yellow-300 tracking-wider border-2 border-yellow-500/30 bg-gray-800/50 rounded-xl p-4 inline-block mx-auto block">
            <p>\(S^1\) and \(S^2\) are not spacetime geometries, but relational manifolds.</p>
        </div>
    </div>
</div>

---

<div id="3W" class="mb-20">
    <img src="{{ site.baseurl }}/images/SLIDES-tinyPNG/8_Kinetic-Energy-b-projection-on-S.png" alt="Diagram of the Beta projection on the S¹ unit circle" class="w-full max-w-5xl mx-auto rounded-lg border-2 border-gray-700/50 shadow-2xl">

    <details class="video-dropdown-container mt-6">  
      <summary class="will-hero-summary">▶ Interactive graph: Kinetic projection β on the circle S¹ (Desmos)</summary>  
      <div class="geometry-container hero-details">  
        <div class="desmos-container">  
          <iframe src="https://www.desmos.com/geometry/6k1um2qbzm" width="100%" height="500" frameborder="0"></iframe>  
        </div>  
      </div>  
    </details>

    <div class="max-w-4xl mx-auto mt-8 text-gray-300 text-lg leading-relaxed">
        <h3 class="text-2xl font-bold text-white mb-4">Amplitude and Phase: the duality of every state</h3>
        <p>
            Any complete description of change must say <em>both</em> what changes and how that change is internally ordered. A single number cannot carry both, so each carrier splits a state into two orthogonal projections:
        </p>
        <ul class="list-disc list-inside ml-4 mt-2 space-y-2">
            <li><strong>Amplitude (\(\beta\)):</strong> the <em>external</em> shift from the observer's rest frame — what we measure as momentum. In legacy units, \(\beta = v/c\).</li>
            <li><strong>Phase (\(\beta_Y\)):</strong> the <em>internal</em> ordering — proper time and proper length. \(\beta_Y=1\) is rest (full internal flow); \(\beta_Y=0\) is light-speed (internal time frozen).</li>
        </ul>

        <div class="border-l-4 border-cyan-500/50 pl-4 py-2 my-6 bg-gray-800/30 rounded-r-lg">
            <h4 class="font-semibold text-white">Conservation of Relation (closure)</h4>
            <p>Because each state is a point on a unit carrier, amplitude and phase obey a single Pythagorean budget:</p>
            <p class="text-center text-2xl font-mono my-3">\(\beta^2 + \beta_Y^2 = 1 \qquad \kappa^2 + \kappa_X^2 = 1\)</p>
        </div>

        <p>
            This one constraint <em>is</em> relativity. Spend more of the budget on external amplitude \(\beta\), and the internal phase \(\beta_Y\) must shrink — proper time dilates and proper length contracts. Time dilation is not a clock "slowing down"; it is a <strong class="text-white">phase rotation</strong> on the unit circle.
        </p>

        <h3 class="text-2xl font-bold text-white mt-10 mb-4">Rest energy, mass, and the energy–momentum relation</h3>
        <p>
            Total energy projects onto both axes, \(E_X=E\beta\) and \(E_Y=E\beta_Y\). Because an object's internal structure is defined only in relation to itself (where \(\beta=0,\ \beta_Y=1\)), the vertical projection is <em>invariant</em>:
        </p>
        <p class="text-center text-xl font-mono my-3">\(E\,\beta_Y = E_0 \quad\Longrightarrow\quad E = \dfrac{E_0}{\beta_Y} = \dfrac{E_0}{\sqrt{1-\beta^2}}\)</p>
        <p>The historical Lorentz factor is simply \(\gamma = 1/\beta_Y\). With \(c=1\), the invariant rest energy <em>is</em> the mass: \(E_0 = m\). Mass is not an independent substance but the rest-energy invariant, expressed in kilograms.</p>

        <details class="video-dropdown-container mt-4">  
          <summary class="will-hero-summary">▶ Interactive graph: the Energy–Momentum Triangle (Desmos)</summary>  
          <div class="geometry-container hero-details">  
            <div class="desmos-container">  
              <iframe src="https://www.desmos.com/geometry/mbkzikthkh" width="100%" height="500" frameborder="0"></iframe>  
            </div>  
          </div>  
        </details>

        <div class="border-l-4 border-cyan-500/50 pl-4 py-2 my-6 bg-gray-800/30 rounded-r-lg">
            <h4 class="font-semibold text-white">Energy–Momentum Relation</h4>
            <p>Identifying momentum with the horizontal projection \(p \equiv E\beta\) and \(m=E_0\), closure gives the standard relation as a pure geometric identity:</p>
            <p class="text-center text-xl font-mono my-2">\(E^{2} = p^{2} + m^{2} \quad\Longrightarrow\quad E^{2} = (pc)^{2} + (mc^{2})^{2}\)</p>
        </div>

        <div class="mt-8 text-center text-lg font-semibold text-yellow-300 tracking-wider border-2 border-yellow-500/30 bg-gray-800/50 rounded-xl p-4 inline-block mx-auto block">
            <p>\(E^{2}=(pc)^{2}+(mc^{2})^{2}\) is just the Pythagorean identity of \(S^1\).</p>
        </div>
    </div>
</div>

---

<!-- NEW SECTION: Minkowski interval as inflation of S¹ closure -->
<div class="mb-20">

<!-- SLIDE PLACEHOLDER: "Minkowski Interval as Inflation of the S¹ Closure" -->
<div class="slide-placeholder">
    [ Slide placeholder — “Minkowski Interval as the Inflation of S¹ Closure” ]
    <span class="ph-sub">Suggested visual: the circle β²+β_Y²=1 on the left; arrows adding the four “posits” (container, x/y/z, external time t, reference scale c²dt²); the Minkowski interval c²dτ²=c²dt²−dx²−dy²−dz² emerging on the right.</span>
</div>

<div class="max-w-4xl mx-auto mt-8 text-gray-300 text-lg leading-relaxed">
    <h2 class="text-3xl font-bold text-white text-center mb-6">The Minkowski Interval Is the Inflated Form of S¹ Closure</h2>
    <p>
        In textbook Special Relativity, the Minkowski interval is the starting point — the fundamental metric of a 4D background. WILL reverses the order. The primitive object is the dimensionless closure \(\beta^2+\beta_Y^2=1\), which contains no coordinates, no container, and no external time. The famous interval is what that relation <em>becomes</em> once four substantival posits are <strong class="text-white">added</strong> — none of which the relation itself requires.
    </p>

    <div class="grid md:grid-cols-2 gap-3 my-6 text-base">
        <div class="border-l-4 border-gray-600 pl-4 py-2 bg-gray-800/30">(i) a <strong>container</strong>: the relation is declared to unfold <em>within</em> a pre-existing space.</div>
        <div class="border-l-4 border-gray-600 pl-4 py-2 bg-gray-800/30">(ii) <strong>spatial coordinates</strong> \(x,y,z\) imposed to localize the amplitude.</div>
        <div class="border-l-4 border-gray-600 pl-4 py-2 bg-gray-800/30">(iii) an <strong>externally flowing time</strong> \(t\), demoting the phase to \(\beta_Y \equiv d\tau/dt\).</div>
        <div class="border-l-4 border-gray-600 pl-4 py-2 bg-gray-800/30">(iv) a <strong>reference scale</strong> \(c^2 dt^2\) to measure the budget against.</div>
    </div>

    <p>Substituting \(\beta^2 = (dx^2+dy^2+dz^2)/(c^2dt^2)\) and \(\beta_Y = d\tau/dt\) into the closure and clearing the denominator returns the Minkowski interval <em>exactly</em>:</p>
    <p class="text-center text-xl font-mono my-4 bg-cyan-900/30 border border-cyan-500/50 p-3 rounded-lg">\(c^2 d\tau^2 = c^2 dt^2 - dx^2 - dy^2 - dz^2\)</p>

    <div class="mt-6 text-center text-lg font-semibold text-yellow-300 tracking-wider border-2 border-yellow-500/30 bg-gray-800/50 rounded-xl p-4 inline-block mx-auto block">
        <p>The interval carries more structure than the relation it encodes. The relation is fundamental; the metric is its inflation.</p>
    </div>
</div>
</div>

---

<div class="mb-12">
    <img src="{{ site.baseurl }}/images/SLIDES-tinyPNG/10_Potential-Energy-k-projection-on-S.png" alt="Diagram of the Kappa projection on the S² unit sphere" class="w-full max-w-5xl mx-auto rounded-lg border-2 border-gray-700/50 shadow-2xl">
    <div class="max-w-4xl mx-auto mt-8 text-gray-300 text-lg leading-relaxed">

        <h2 class="text-3xl font-bold text-white text-center mb-6">Gravity: the Potential Projection κ on S²</h2>
        <p>
            Everything above repeats on the sphere. The amplitude \(\kappa = v_e/c = \sqrt{R_s/r}\) measures gravitational depth (\(\kappa=1\) is the horizon), and the phase \(\kappa_X\) governs gravitational time and length. Crucially, \(\kappa\) is not a theoretical abstraction: it is fixed directly by the <strong class="text-white">measured gravitational redshift</strong>, with no need for mass or Newton's constant —
        </p>
        <p class="text-center text-xl font-mono my-3">\(\kappa^2 = 1 - \dfrac{1}{(1+z_\kappa)^2}\)</p>
        <p>The same trade-off as before — more amplitude \(\kappa\), less phase \(\kappa_X\) — is what we observe as gravitational time dilation. Curved spacetime is the shadow cast by this conserved relation.</p>

        <details class="video-dropdown-container mt-4">  
            <summary class="will-hero-summary">▶ Interactive graph: Potential projection κ on S² (Desmos)</summary>  
            <div class="geometry-container hero-details">  
                <div class="desmos-container">  
                    <iframe src="https://www.desmos.com/geometry/lsjhnc2e9x" width="100%" height="500" frameborder="0"></iframe>  
                </div>  
            </div>  
        </details>

        <details class="video-dropdown-container mt-4">
            <summary class="will-hero-summary">▶ Gravitational tangent formulation (the dual of momentum)</summary>
            <div class="hero-details text-left p-4 md:p-6 bg-gray-900/50 rounded-lg text-gray-300">
                <p>With \(\kappa=\sin\theta_2\), define the gravitational total energy and momentum:</p>
                <p class="text-center text-lg font-mono my-3">\(E_g = \dfrac{E_0}{\kappa_X},\quad \kappa_X=\sqrt{1-\kappa^2}, \qquad p_g = (E_0/c)\tan\theta_2\)</p>
                <p>yielding the exact gravitational analogue \(E_g^2 = (p_g c)^2 + (mc^2)^2\). Kinematic momentum \(p\) and gravitational momentum \(p_g\) are dual projections: \(\beta=\cos\theta_1 \leftrightarrow \kappa=\sin\theta_2\), \(\ \cot\theta_1 \leftrightarrow \tan\theta_2\).</p>
            </div>
        </details>
    </div>
</div>

<!-- NEW SECTION: Schwarzschild interval as inflation of S² closure -->
<div class="mb-20">

<!-- SLIDE PLACEHOLDER: "Schwarzschild Interval as Inflation of the S² Closure" -->
<div class="slide-placeholder">
    [ Slide placeholder — “Schwarzschild Interval as the Inflation of S² Closure” ]
    <span class="ph-sub">Suggested visual: the sphere closure κ²+κ_X²=1 on the left; adding the posits (container around a body, static observer, external time, κ²≡R_s/r with G, M); the static Schwarzschild interval c²dτ²=c²(1−R_s/r)dt² on the right. Parallel layout to the Minkowski slide.</span>
</div>

<div class="max-w-4xl mx-auto mt-8 text-gray-300 text-lg leading-relaxed">
    <h2 class="text-3xl font-bold text-white text-center mb-6">The Schwarzschild Interval Is the Inflated Form of S² Closure</h2>
    <p>
        The gravitational construction is strictly parallel. Start from \(\kappa^2+\kappa_X^2=1\). Append a container around a central body, hold the observer static, posit an externally flowing time so that \(\kappa_X \equiv d\tau/dt\), and localize the amplitude as \(\kappa^2 \equiv R_s/r\) (which is what first introduces a radial coordinate \(r\) together with the legacy constants \(G\) and \(M\) via \(R_s = 2GM/c^2\)). The closure then yields the Schwarzschild time component exactly:
    </p>
    <p class="text-center text-xl font-mono my-4 bg-cyan-900/30 border border-cyan-500/50 p-3 rounded-lg">\(c^2 d\tau^2 = c^2\left(1 - \dfrac{R_s}{r}\right) dt^2\)</p>
    <p class="text-base text-gray-400 italic">
        Note: \(\kappa\) is the primitive; \(r\), \(G\) and \(M\) are coordinate-and-unit artifacts attached to it. In R.O.M., gravitational systems are described fully <em>without</em> \(G\) and <em>without</em> \(M\) — confirming the projection, not \(R_s/r\), is irreducible.
    </p>
</div>
</div>

<div class="mb-12">
    <div class="max-w-4xl mx-auto text-gray-300 text-lg leading-relaxed">
        <h3 class="text-2xl font-bold text-white text-center mb-4">Where distance comes from</h3>
        <p>
            Because \(\kappa^2\) is read off from redshift alone, "distance" is not a primitive either. Normalizing the scale at saturation (\(\kappa^2=1 \equiv r=R_s\)), spatial distance emerges as the <em>reciprocal</em> of the potential projection — which is exactly the inverse-square law, derived rather than assumed:
        </p>
        <p class="text-center text-xl font-mono my-3">\(\kappa^2 = \dfrac{R_s}{r} \quad\Longrightarrow\quad r = \dfrac{R_s}{\kappa^2} \quad\Longrightarrow\quad \kappa^2 \propto \dfrac{1}{r}\)</p>
        <div class="mt-4 text-center text-lg font-semibold text-yellow-300 tracking-wider border-2 border-yellow-500/30 bg-gray-800/50 rounded-xl p-4 inline-block mx-auto block">
            <p>Two intervals, one procedure. Minkowski and Schwarzschild are coordinate-laden images of the same parameter-free closure.</p>
        </div>
    </div>
</div>

---

<div class="mb-20">
    <img src="{{ site.baseurl }}/images/SLIDES-tinyPNG/12_Topological-Ratio-k-b-2.png" alt="The ratio of degrees of freedom between S² and S¹ giving κ²=2β²" class="w-full max-w-5xl mx-auto rounded-lg border-2 border-gray-700/50 shadow-2xl">
    
    <div class="max-w-4xl mx-auto mt-8 text-gray-300 text-lg leading-relaxed">
        <h2 class="text-3xl font-bold text-white text-center mb-6">The Exchange Rate: κ² = 2β²</h2>
        <p>
            A single conserved resource needs a self-consistent "exchange rate" between its kinetic and potential modes. That rate is not fitted — it is fixed by the carriers' degrees of freedom. The kinematic carrier \(S^1\) has one degree of freedom; the potential carrier \(S^2\) has two. With no hidden structure allowed, each independent degree of freedom must carry <strong class="text-white">equal quadratic weight</strong> (the DOF-Indifference Lemma). The ratio of budgets is therefore exactly 2:
        </p>
        <p class="text-center text-2xl font-mono my-4 bg-cyan-900/30 border border-cyan-500/50 p-3 rounded-lg">\(\kappa^2 = 2\beta^2\)</p>

        <p class="text-base text-gray-400 italic">
            This supersedes any "solid-angle" picture: the factor 2 is the ratio of <em>degrees of freedom</em> (2 for \(S^2\), 1 for \(S^1\)), the same reason the carriers saturate at \(\beta^2=1\) (light) and \(\kappa^2=2\) (extremal rotation). This is the relational origin of the <strong class="text-white">virial theorem</strong>.
        </p>

        <div class="border-l-4 border-gray-600 pl-4 py-2 my-6">
            <h4 class="font-semibold text-white">The closure factor δ — a diagnostic for open vs closed systems</h4>
            <p>Define \(\delta \equiv \dfrac{\kappa^2}{2\beta^2}\). For circular orbits \(\delta = 1\) exactly. For elliptical orbits \(\delta\) breathes around the cycle but averages to 1 (\(\langle\delta\rangle_{\text{cycle}}=1\)) — the system stays closed. For a <em>radiating</em> binary, counting only orbital motion gives \(\delta \neq 1\); the defect measures exactly the energy leaving through gravitational waves. Include that channel and closure is restored.</p>
        </div>

        <div class="mt-8 text-center text-lg font-semibold text-yellow-300 tracking-wider border-2 border-yellow-500/30 bg-gray-800/50 rounded-xl p-4 inline-block mx-auto block">
            <p><strong>Geometric distribution (κ²) ≡ 2 × kinetic distribution (β²).</strong></p>
        </div>
    </div>
</div>

---

<div class="mb-20">
    <img src="{{ site.baseurl }}/images/SLIDES-tinyPNG/13_Total-Projection-as-Vector-on-b-k-plane.png" alt="Total Projection Q as a vector on the Beta-Kappa plane" class="w-full max-w-5xl mx-auto rounded-lg border-2 border-gray-700/50 shadow-2xl">
    <div class="max-w-4xl mx-auto mt-8 text-gray-300 text-lg leading-relaxed">
        <h2 class="text-3xl font-bold text-white text-center mb-6">The Total Relational Shift Q</h2>

        <details class="video-dropdown-container">  
          <summary class="will-hero-summary">▶ Interactive graph: the Q circle (Desmos)</summary>  
          <div class="geometry-container hero-details">  
            <div class="desmos-container">  
              <iframe src="https://www.desmos.com/geometry/2nkjtezjpi" width="100%" height="500" frameborder="0"></iframe>  
            </div>  
          </div>  
        </details>

        <p>
            When an observer targets another system, the combined kinematic and gravitational difference is one vector \(Q\):
        </p>
        <p class="text-center text-xl font-mono my-3">\(Q^2 = \beta^2 + \kappa^2 \qquad (\text{closed systems: } Q^2 = 3\beta^2)\)</p>
        <p>
            \(Q\) is genuinely <em>relational</em>: each observer sits at their own origin \((\beta,\kappa)=(0,0)\), so both parties assign the same shift to each other, \(Q_{A\to B} = Q_{B\to A}\). There is no shared background arena — only mutual shifts measured from each origin. Interaction is causal precisely when the other system's center lies within one's horizon, \(Q < 1\). At \(Q=1\) the budget is exhausted: the photon-sphere / null-circumnavigation limit.
        </p>
    </div>
</div>

---

## Energy as a Relation — What κ and β Actually Mean

**Energy isn't something objects "have" — it's a measure of differences between states.**

When we drop anthropocentric distortions, a clear and intuitive picture emerges. Physical parameters like energy, speed, and gravitational depth don't belong to objects; they describe how we, as observers, measure differences from our own point of view. In this relational view, your perspective is always the reference frame. You are always at zero, and everything else is described by how it differs from your state:

- **β (Beta)** is not an intrinsic property of a moving object. It is how much of the universal "speed of change" you see as motion through space, relative to yourself.
- **κ (Kappa)** doesn't describe an object's "stored" gravitational energy. It measures how deeply an object sits in a gravitational field, as seen from your position — your personal ruler for gravitational depth.

Energy then emerges naturally: it is the capacity to move between states, not a possession. Saying "the object's energy" always implicitly means "the object's energy *as measured from your perspective*."

> Imagine standing on a train platform. A passing train has significant kinetic energy to you. Jump aboard, and that same train is instantly at rest — its kinetic energy is now zero. The energy didn't vanish; your frame of reference shifted.

**Bottom line:** energy, κ, and β aren't hidden intrinsic qualities. They're your personal, relational measurements. All physics boils down to describing how things differ from your chosen point of view — no more, no less.

---

<div class="mb-20">
    <img src="{{ site.baseurl }}/images/SLIDES-tinyPNG/14_Energy-Symmetry-Law.png" alt="The Energy-Symmetry Law" class="w-full max-w-5xl mx-auto rounded-lg border-2 border-gray-700/50 shadow-2xl">
    
    <div class="max-w-4xl mx-auto mt-8 text-gray-300 text-lg leading-relaxed">
        <h2 class="text-3xl font-bold text-white text-center mb-6">The Energy-Symmetry Law</h2>
        <p>
            Every transformation is bidirectional: a change observed by \(A\) corresponds to an equal and opposite change observed by \(B\). This is causal continuity in algebraic form — the dynamical heart of the framework.
        </p>

        <div class="border-l-4 border-cyan-500/50 pl-4 py-2 my-6 bg-gray-800/30 rounded-r-lg">
            <h4 class="font-semibold text-white">Theorem: Energy Symmetry</h4>
            <p>The specific energy differences (per unit rest energy) for a transition between two states balance to zero:</p>
            <p class="text-center text-xl font-mono my-2">\(\Delta E_{A \to B} + \Delta E_{B \to A} = 0\)</p>
        </div>

        <details class="video-dropdown-container mt-4">
            <summary class="will-hero-summary">▶ Proof and the meaning of the ½ factor</summary>
            <div class="hero-details text-left p-4 md:p-6 bg-gray-900/50 rounded-lg text-gray-300 space-y-3">
                <p>For \(A\) at rest on a surface (\(\beta_A=0\), depth \(\kappa_A\)) and \(B\) in orbit (\(\kappa_B,\beta_B\)), each transition is the sum of the changes in the potential and kinetic budgets:</p>
                <p class="text-center font-mono">\(\Delta E_{A\to B} = \tfrac12(\kappa_A^2-\kappa_B^2) + \tfrac12(\beta_B^2-\beta_A^2)\)</p>
                <p>The reverse transition flips every sign, so the two sum to zero. The factor \(\tfrac12\) is not arbitrary: energy is quadratic in the projections, and using amplitudes alone (\(\beta^2\), \(\kappa^2\)) means working with half of each carrier's budget. Hence \(K/E_0 = \tfrac12\beta^2\) and \(U/E_0 \propto -\tfrac12\kappa^2\).</p>
            </div>
        </details>

        <h3 class="text-2xl font-bold text-white text-center mt-10 mb-4">Two consequences: a speed limit, and the nature of light</h3>
        <p>
            <strong class="text-white">The speed limit \(v \le c\) is built in.</strong> If \(\beta>1\), the kinetic budget \(\tfrac12\beta^2\) and the required transfer grow without bound — no finite reverse transfer could balance it, and the symmetry would break. So \(\beta \le 1\) is a requirement of causal consistency, not a separate postulate.
        </p>
        <p>
            <strong class="text-white">Light is the single-axis limit.</strong> For light \(\beta=1\Rightarrow\beta_Y=0\): the internal phase vanishes, there is no rest frame, and the entire resource sits on one axis. This removes the \(\tfrac12\) partitioning, so the gravitational effect on light is exactly <strong>twice</strong> that on a massive body (\(\Phi_\gamma=\kappa^2c^2\) vs \(\Phi_{\text{mass}}=\tfrac12\kappa^2c^2\)) — the observed factor of 2 in light deflection and the Shapiro delay, with no weak-field expansion.
        </p>

        <div class="mt-8 text-center text-lg font-semibold text-yellow-300 tracking-wider border-2 border-yellow-500/30 bg-gray-800/50 rounded-xl p-4 inline-block mx-auto block">
            <p><strong>Causality is a built-in feature of Relational Geometry.</strong></p>
        </div>
    </div>
</div>

<!-- ════════════════════════════ STAGE III ════════════════════════════ -->

<div class="text-center my-10">
    <span class="text-sm font-bold tracking-[0.3em] text-cyan-400">STAGE III</span>
    <h2 class="text-3xl md:text-4xl font-extrabold text-white mt-2">Legacy Translation &amp; Empirical Alignment</h2>
    <p class="text-gray-400 mt-2 max-w-3xl mx-auto">Recovering the familiar machinery of physics as special cases — then testing the framework against real data.</p>
</div>

<div class="mb-20">
    <img src="{{ site.baseurl }}/images/SLIDES-tinyPNG/11-Equivalence-Principle-as-Derived-Identity.png" alt="Derivation of the Equivalence Principle" class="w-full max-w-5xl mx-auto rounded-lg border-2 border-gray-700/50 shadow-2xl">
    <div class="max-w-4xl mx-auto mt-8 text-gray-300 text-lg leading-relaxed">
        <h2 class="text-3xl font-bold text-white text-center mb-6">The Equivalence Principle as a Derived Identity</h2>
        <p>
            In General Relativity, \(m_g \equiv m_i\) is an independent postulate. In WILL it is unavoidable. Both the kinematic and gravitational projections rescale the same invariant rest energy \(E_0\), so composing the two stretches gives one local energy scale:
        </p>
        <p class="text-center text-xl font-mono my-3">\(E_{\text{loc}} = \dfrac{E_0}{\beta_Y\,\kappa_X} = \dfrac{E_0}{\sqrt{(1-\beta^2)(1-\kappa^2)}} = \dfrac{E_0}{\tau}\)</p>
        <p>
            The inertial and gravitational responses share a single effective mass \(m_{\text{eff}} = E_0/(\tau c^2)\), because every internal energy channel scales by the same factor \(1/\tau\). Their ratios cancel in every observable — which is exactly composition-independent free fall (Eötvös universality). Hence:
        </p>
        <div class="font-mono text-xl bg-cyan-900/30 border border-cyan-500/50 p-4 rounded-lg my-4 text-center">
            <p>\(m_g \equiv m_i \equiv m_{\text{eff}}\)</p>
        </div>
        <div class="mt-6 text-center text-lg font-semibold text-yellow-300 tracking-wider border-2 border-yellow-500/30 bg-gray-800/50 rounded-xl p-4 inline-block mx-auto block">
            <p><strong>What GR posits as a postulate, WILL delivers as a corollary.</strong></p>
        </div>
    </div>
</div>

---

<!-- NEW SECTION: Ontological collapses -->
<div class="mb-20">

<!-- SLIDE PLACEHOLDER: "Ontological Collapses: Lagrangian, Hamiltonian, Newton III, Einstein-Hilbert" -->
<div class="slide-placeholder">
    [ Slide placeholder — “Four Ontological Collapses of the Two-Point Law” ]
    <span class="ph-sub">Suggested visual: the two-point Energy-Symmetry Law ΔE(A→B)+ΔE(B→A)=0 at the top, collapsing (by forcing r_A=r_B into a single point) into four legacy objects: Lagrangian L, Hamiltonian H, Newton’s third law F_AB=−F_BA, and the Einstein–Hilbert action S_EH.</span>
</div>

<div class="max-w-4xl mx-auto mt-8 text-gray-300 text-lg leading-relaxed">
    <h2 class="text-3xl font-bold text-white text-center mb-6">Four Pillars of Physics as "Collapses" of One Law</h2>
    <p>
        The two-point Energy-Symmetry Law is more fundamental than the standard tools of mechanics. Each of those tools appears when you <strong class="text-white">collapse</strong> the two-point relation \(A\leftrightarrow B\) onto a single point — forcing \(r_A=r_B=r\) and then re-introducing, by hand, the very structure that the collapse discarded.
    </p>

    <details class="video-dropdown-container mt-4">
        <summary class="will-hero-summary">▶ Lagrangian &amp; Hamiltonian</summary>
        <div class="hero-details text-left p-4 md:p-6 bg-gray-900/50 rounded-lg text-gray-300">
            <p>Collapsing \(\Delta E_{A\to B}=\tfrac12(\kappa_A^2-\kappa_B^2)+\tfrac12(\beta_B^2-\beta_A^2)\) to one point and appending an ad-hoc potential function reproduces \(L=\tfrac12 mv^2+\tfrac{GMm}{r}\) and \(H=\tfrac12 mv^2-\tfrac{GMm}{r}\). The two-point law already contains the full energy balance — no separate potential, force law, or action is required.</p>
        </div>
    </details>
    <details class="video-dropdown-container mt-3">
        <summary class="will-hero-summary">▶ Newton's Third Law</summary>
        <div class="hero-details text-left p-4 md:p-6 bg-gray-900/50 rounded-lg text-gray-300">
            <p>Once the budget is collapsed into a potential \(U(\vec r)\) that — to stay empirical — can depend only on the relative separation \(\vec r=\vec r_B-\vec r_A\), the chain rule gives \(\vec F_{AB}=-\nabla U\) and \(\vec F_{BA}=+\nabla U\). So \(\vec F_{AB}=-\vec F_{BA}\): equal-and-opposite forces are the mathematical signature of any causally balanced, background-independent system.</p>
        </div>
    </details>
    <details class="video-dropdown-container mt-3">
        <summary class="will-hero-summary">▶ Einstein–Hilbert Action</summary>
        <div class="hero-details text-left p-4 md:p-6 bg-gray-900/50 rounded-lg text-gray-300">
            <p>The action \(S_{EH}=\frac{1}{16\pi G}\int R\sqrt{-g}\,d^4x\) compresses relational tension into a local curvature scalar on a posited smooth manifold. Its pieces map directly onto the relational structure: the 4-volume \(\int\sqrt{-g}\,d^4x \to\) carrier closure \(\kappa^2+\kappa_X^2=1\); the Ricci scalar \(R \to \kappa^2,\beta^2\); and the variational search \(\delta S=0 \to\) the Energy-Symmetry Law \(\Delta E_{A\to B}+\Delta E_{B\to A}=0\).</p>
        </div>
    </details>

    <div class="mt-6 text-center text-lg font-semibold text-yellow-300 tracking-wider border-2 border-yellow-500/30 bg-gray-800/50 rounded-xl p-4 inline-block mx-auto block">
        <p>The Lagrangian, Hamiltonian, Newton's third law and the Einstein–Hilbert action are not fundamental — they are single-point shadows of one two-point law.</p>
    </div>
</div>
</div>

---

<div class="mb-20">
    <img src="{{ site.baseurl }}/images/SLIDES-tinyPNG/15_Structural-Dynamics.png" alt="Structural Dynamics" class="w-full max-w-5xl mx-auto rounded-lg border-2 border-gray-700/50 shadow-2xl">
    <div class="max-w-4xl mx-auto mt-8 text-gray-300 text-lg leading-relaxed">
        <h2 class="text-3xl font-bold text-white text-center mb-6">No Equations of Motion: Structural Dynamics</h2>
        <p>
            Because structure and dynamics are one, the system is not described by differential equations evolving <em>in</em> time. Its allowed states are fixed by a closed network of algebraic relations. What we perceive as "dynamics" is the ordered succession of these balanced configurations — and a natural time scale \(t_d = r/c\) emerges from the geometry itself.
        </p>
        <div class="mt-4 text-center text-xl font-bold text-cyan-400 tracking-wider border-2 border-cyan-500/30 bg-gray-800/50 rounded-xl p-4 inline-block mx-auto block">
            <p>Time does not drive change — change defines time.</p>
        </div>
        <p class="mt-6">The minimal algebraic closure for a bound system is just:</p>
        <div class="font-mono text-lg bg-gray-900/50 p-6 rounded-lg my-6 text-center space-y-2">
            <p>\(\kappa^2 = 2\beta^2\)</p>
            <p>\(r\,\kappa^2 = R_s, \quad R_s = \dfrac{2Gm_0}{c^2}\)</p>
            <p>\(\rho = \dfrac{\kappa^2 c^2}{8\pi G r^2}, \qquad m_0 = 4\pi r^3 \rho\)</p>
        </div>
        <img src="{{ site.baseurl }}/images/SLIDES-tinyPNG/structural-dynamics-diagram.png" alt="Diagram of algebraic closure in WILL Geometry" class="w-full max-w-2xl mx-auto rounded-lg my-6">
        <p class="text-base text-gray-400 italic text-center">Change any one parameter and all the others must shift together to keep the configuration valid. There is exactly one balanced state at each moment.</p>
    </div>
</div>

---

<div class="mb-20">
    <img src="{{ site.baseurl }}/images/SLIDES-tinyPNG/18_Empirical-Validation.png" alt="Empirical Validation of WILL Geometry" class="w-full max-w-5xl mx-auto rounded-lg border-2 border-gray-700/50 shadow-2xl">
    <div class="max-w-4xl mx-auto mt-8 text-gray-300 text-lg leading-relaxed">
    <h2 class="text-3xl font-bold text-white text-center mb-6">Grounding the Vision in Reality</h2>
    <p>
        A theory born of pure logic must reflect the real world. WILL reproduces the established successes of relativity — and, in several cases, shows that the standard formula is the <em>first-order approximation</em> of an exact relational expression.
    </p>

    <div class="mt-10">
        <h3 class="text-2xl font-bold text-white mb-2">GPS satellites — and why GR is RG to first order</h3>
        <p>The daily clock offset between GPS satellites and the ground combines kinematic (SR) and gravitational (GR) effects into one relational factor \(\tau=\beta_Y\kappa_X\). RG composes the two effects <em>multiplicatively</em>; the textbook formula <em>adds</em> them. The addition is exactly the first-order Taylor expansion of the RG ratio — verified symbolically and to 40-digit precision.</p>
        <details class="video-dropdown-container mt-4">  
            <summary class="will-hero-summary">▶ Interactive graph: Earth–GPS (Desmos)</summary>  
            <div class="geometry-container hero-details">  
                <div class="desmos-container">  
                    <iframe src="https://www.desmos.com/geometry/v6nrtv4vyx" width="100%" height="500" frameborder="0"></iframe>  
                </div>  
            </div>  
        </details>
        <details class="video-dropdown-container mt-3">
            <summary class="will-hero-summary">▶ The numbers: RG (exact) vs GR (first order)</summary>
            <div class="hero-details text-left p-4 md:p-6 bg-gray-900/50 rounded-lg text-gray-300">
                <p>RG expresses the shift as an exact ratio of projection invariants, \(\Delta t_{\text{RG}} = \left(1 - \tau_E/\tau_{\text{GPS}}\right)D\,M\):</p>
                <div class="font-mono text-sm bg-gray-900/70 p-4 rounded-lg mt-3 space-y-1 overflow-x-auto">
                    <p>\(\Delta t_{\text{RG}}\ (\text{exact}) = 38.5421472752\ \mu s/\text{day}\)</p>
                    <p>\(\Delta t_{\text{GR}}\ (\text{1st order}) = 38.5421472451\ \mu s/\text{day}\)</p>
                    <p>difference \(= 3.0\times10^{-8}\ \mu s/\text{day}\) — the second-order \(\beta^2\kappa^2\) cross-term</p>
                </div>
                <p class="mt-3">The additive GR formula is recovered as the unique leading-order content of the multiplicative RG ratio. The cross-term is the genuine discriminator; it only becomes large when \(\beta^2\) or \(\kappa^2\) approach unity (strong fields).</p>
            </div>
        </details>
    </div>

    <div class="mt-10">
        <h3 class="text-2xl font-bold text-white mb-2">Mercury's precession — as phase accumulation</h3>
        <p>The anomalous precession is recovered not by expanding field equations, but as the accumulation of relational phase divergence \(\tau_Y^2\) over one orbit, normalized by the shape factor \(1-e^2\). Again the GR result is the first-order piece of the exact expression.</p>
        <details class="video-dropdown-container mt-4">  
            <summary class="will-hero-summary">▶ Interactive graph: Sun–Mercury (Desmos)</summary>  
            <div class="geometry-container hero-details">  
                <div class="desmos-container">  
                    <iframe src="https://www.desmos.com/calculator/wimnrykbvy" width="100%" height="500" frameborder="0"></iframe>  
                </div>  
            </div>  
        </details>
        <details class="video-dropdown-container mt-3">
            <summary class="will-hero-summary">▶ The exact precession formula and its GR limit</summary>
            <div class="hero-details text-left p-4 md:p-6 bg-gray-900/50 rounded-lg text-gray-300">
                <p>The relational precession per orbit is exact:</p>
                <p class="text-center font-mono my-2">\(\Delta\phi = \dfrac{2\pi\,\tau_Y^2}{1-e^2} = \dfrac{2\pi(3\beta^2 - 2\beta^4)}{1-e^2} = \underbrace{\dfrac{3\pi R_s}{a(1-e^2)}}_{\text{GR 1PN}} - \underbrace{\dfrac{\pi R_s^2}{a^2(1-e^2)}}_{\text{RG correction}}\)</p>
                <p>For Mercury this gives \(\Delta\phi \approx 5.0209\times10^{-7}\) rad/orbit \(= 43''\)/century, matching the observed value to machine precision; the \(R_s^2\) correction is far below current resolution but is a sharp, parameter-free prediction.</p>
            </div>
        </details>
    </div>

    <div class="mt-10">
        <h3 class="text-2xl font-bold text-white mb-2">Critical orbits (ISCO &amp; photon sphere)</h3>
        <p>Every GR critical surface emerges from simple symmetries of the projection budget \(Q\) — no geodesic equations.</p>
        <details class="video-dropdown-container mt-4">
            <summary class="will-hero-summary">▶ Derivation of the critical radii (and the static/dynamic distinction)</summary>
            <div class="hero-details text-left p-4 md:p-6 bg-gray-900/50 rounded-lg text-gray-300 space-y-3">
                <p><strong>Photon sphere</strong> is maximum saturation, \(Q=1\). With \(Q^2=\kappa^2+\beta^2\) and \(\kappa^2=2\beta^2\): \(3\beta^2=1\), so \(\kappa^2=2/3\) and \(r_{ps}=R_s/(2/3)=1.5\,R_s\). (At \(\theta_1=\theta_2=54.7^\circ\), the "magic angle.")</p>
                <p><strong>ISCO</strong> is marginal stability, \(Q=Q_t\Rightarrow Q^2=1/2\). Then \(\kappa^2=1/3\) and \(r_{isco}=R_s/(1/3)=3\,R_s\).</p>
                <img src="{{ site.baseurl }}/images/SLIDES-tinyPNG/ISCO-diagram.png" alt="Diagram of ISCO in WILL RG" class="w-full max-w-2xl mx-auto rounded-lg my-4">
                <p class="text-sm text-gray-400">RG distinguishes a static coordinate location (\(\beta=0\)) from the dynamic orbital state on the closure line \(\kappa^2=2\beta^2\) — a distinction invisible to the single-number GR radius.</p>
            </div>
        </details>
    </div>

    <div class="mt-12 text-center text-lg font-semibold text-green-400 tracking-wider border-2 border-green-500/30 bg-gray-800/50 rounded-xl p-4 inline-block mx-auto block">
        <p><strong>SPACETIME ≡ ENERGY: one principle defines both the structure and the symmetry of reality.</strong></p>
    </div>
    </div>
</div>

---

<div class="mb-20">
    <div class="max-w-4xl mx-auto text-gray-300 text-lg leading-relaxed">
        <h2 class="text-3xl font-bold text-white text-center mb-6">From Foundations to Orbits: R.O.M.</h2>
        <p>
            Applying these same projections to bound gravitational systems gives <strong class="text-white">Relational Orbital Mechanics (R.O.M.)</strong> — a closed algebraic system that classifies the allowed states of an orbit with no differential equations, no acceleration term, and (remarkably) no \(G\) or \(M\). From the projections and the closure \(\kappa^2=2\beta^2\) alone, R.O.M. derives:
        </p>
        <ul class="list-disc list-inside ml-4 mt-2 space-y-1 text-base">
            <li>Kepler's Third Law (\(a^3 = \tfrac{R_s c^2}{8\pi^2}T^2\)), the vis-viva relation, conservation of angular momentum, and eccentricity — all as Pythagorean invariants;</li>
            <li>orbital precession as phase accumulation (Mercury, and the S2 star at Sgr A*);</li>
            <li>gravitational deflection and lensing from the energy-symmetry law directly;</li>
            <li>rotational systems (Kerr without a metric), frame-dragging, and the Sun–Earth L1 point;</li>
            <li>system scale (\(R_s\)) from spectroscopic and chronometric observables, bypassing mass entirely.</li>
        </ul>
        <p class="mt-4">
            R.O.M. is not a separate model — it is the operational consequence of the same principles. See the <a href="https://willrg.com/results/" class="text-cyan-400 hover:text-white">R.O.M. paper</a> and the <a href="https://willrg.com/predictions/" class="text-cyan-400 hover:text-white">predictions</a>.
        </p>
    </div>
</div>

---

<div id="5W" class="mb-20">
    <img src="{{ site.baseurl }}/images/SLIDES-tinyPNG/16_Unified-Field-Equation.png" alt="The Unified Field Equation" class="w-full max-w-5xl mx-auto rounded-lg border-2 border-gray-700/50 shadow-2xl">
    <div class="max-w-4xl mx-auto mt-8 text-gray-300 text-lg leading-relaxed">
        <h2 class="text-3xl font-bold text-white text-center mb-6">The Unified Field Equation</h2>
        <p>
            All of gravitational physics reduces to a single algebraic identity: the ratio of geometric scales equals the ratio of energy densities.
        </p>
        <div class="font-mono text-xl bg-cyan-900/30 border border-cyan-500/50 p-6 rounded-lg my-6 text-center">
            <p>\(\kappa^2 = \dfrac{R_s}{r} = \dfrac{\rho}{\rho_{\text{max}}}\)</p>
        </div>

        <details class="video-dropdown-container mt-4">
            <summary class="will-hero-summary">▶ Where the density and its bound come from</summary>
            <div class="hero-details text-left p-4 md:p-6 bg-gray-900/50 rounded-lg text-gray-300">
                <p>From \(m_0=\kappa^2 c^2 r/2G\), associating mass with a volumetric proxy and normalizing the potential over the unit-sphere area \(4\pi\) gives the local energy density, and the horizon condition \(\kappa^2=1\) gives its maximum:</p>
                <p class="text-center font-mono my-2">\(\rho = \dfrac{\kappa^2 c^2}{8\pi G r^2}, \qquad \rho_{\text{max}} = \dfrac{c^2}{8\pi G r^2}\)</p>
                <p>Hence \(\kappa^2 = \rho/\rho_{\text{max}}\).</p>
            </div>
        </details>

        <h3 class="text-2xl font-bold text-white text-center mt-10 mb-4">No singularities, no hidden regions</h3>
        <p>
            Because density is capped at a finite \(\rho_{\text{max}}=c^2/8\pi G r^2\), infinite density is impossible. The static horizon sits at \(\kappa^2=1\ (r=R_s)\); even the extreme rotating limit only reaches \(r=R_s/2\). The point \(r=0\) is simply <strong class="text-white">absent</strong> from the admissible relational range — singularities are excluded by construction, not patched over.
        </p>
        <div class="mt-6 text-center text-lg font-semibold text-yellow-300 tracking-wider border-2 border-yellow-500/30 bg-gray-800/50 rounded-xl p-4 inline-block mx-auto block">
            <p><strong>Density is bounded; the point r = 0 does not exist.</strong></p>
        </div>
    </div>
</div>

<!-- ════════════════════════════ STAGE IV ════════════════════════════ -->

<div class="text-center my-10">
    <span class="text-sm font-bold tracking-[0.3em] text-cyan-400">STAGE IV</span>
    <h2 class="text-3xl md:text-4xl font-extrabold text-white mt-2">Consequences &amp; Direct Applications</h2>
</div>

<div class="mb-20">
    <img src="{{ site.baseurl }}/images/SLIDES-tinyPNG/17_Theoretical-Ouroboros.png" alt="The Theoretical Ouroboros" class="w-full max-w-5xl mx-auto rounded-lg border-2 border-gray-700/50 shadow-2xl">
    <div class="max-w-4xl mx-auto mt-8 text-gray-300 text-lg leading-relaxed">
        <h2 class="text-3xl font-bold text-white text-center mb-6">The Theoretical Ouroboros</h2>
        <p>
            We began with one principle, <span class="font-mono">SPACETIME ≡ ENERGY</span>. Through pure geometry it generated the carriers, the projections, and the laws — and those laws produced a field equation that says exactly the same thing we started with: the ratio of geometric scales equals the ratio of energy densities.
        </p>
        <div class="font-mono text-lg bg-gray-900/50 p-4 rounded-lg my-4 text-center space-y-2 text-white">
            <p>SPACETIME ≡ ENERGY \(\;\Longrightarrow\;\) \(\kappa^2 = \dfrac{R_s}{r} = \dfrac{\rho}{\rho_{\text{max}}}\) \(\;\Longrightarrow\;\) SPACETIME ≡ ENERGY</p>
        </div>
        <div class="mt-6 text-center text-lg font-semibold text-yellow-300 tracking-wider border-2 border-yellow-500/30 bg-gray-800/50 rounded-xl p-4 inline-block mx-auto block">
            <p><strong>The principle is proven as the inevitable consequence of its own geometric consistency.</strong></p>
        </div>
        <p class="mt-6 text-center text-gray-400 italic">From an epistemological standpoint this is the crown of any framework — the principle generates its own expression, and the expression validates the principle. But let us remain sceptical, and keep testing.</p>
    </div>
</div>

---

<!-- NEW SECTION: W_ILL = 1 invariant -->
<div class="mb-20">

<!-- SLIDE PLACEHOLDER: "W_ILL = E·T / (M·L) = 1" -->
<div class="slide-placeholder">
    [ Slide placeholder — “W_ILL = E·T / (M·L) = 1, the Unity invariant” ]
    <span class="ph-sub">Suggested visual: the four projections (Energy E, Mass M, Time T, Length L) as faces of one structure, combining into the dimensionless ratio E·T/(M·L) that collapses to exactly 1 for every energy, scale and phase.</span>
</div>

<div class="max-w-4xl mx-auto mt-8 text-gray-300 text-lg leading-relaxed">
    <h2 class="text-3xl font-bold text-white text-center mb-6">W<sub>ILL</sub> = 1 — the Unity of Everything</h2>
    <p>
        If there is really only one relational resource, then mass, energy, time and length cannot be independent — they are four projections of the same structure. Combining them in the one dimensionless way the carriers permit gives an invariant that is identically 1 for any closed system, at every energy, every scale, and every orbital phase:
    </p>
    <div class="font-mono text-2xl bg-cyan-900/30 border border-cyan-500/50 p-6 rounded-lg my-6 text-center">
        <p>\(W_{\text{ILL}} = \dfrac{E\,T}{M\,L} = 1\)</p>
    </div>
    <p>
        All dimensionful constants cancel automatically — the value is fixed by the geometry of the carriers, not by a choice of units. Equivalently \(E/M = L/T\): the energy sector and the spacetime sector are locked together. Treating energy–mass and space–time as separate blocks is an interpretational approximation; the unity \(W_{\text{ILL}}=1\) is the precise statement that <span class="font-mono">SPACETIME ≡ ENERGY</span>.
    </p>

    <details class="video-dropdown-container mt-4">  
        <summary class="will-hero-summary">▶ Interactive: deriving W_ILL = 1 (Desmos)</summary>  
        <div class="geometry-container hero-details">  
            <div class="desmos-container">  
                <iframe src="https://www.desmos.com/calculator/wswnhckrru" width="100%" height="500" frameborder="0"></iframe>  
            </div>  
        </div>  
    </details>

    <div class="mt-6 text-center text-lg font-semibold text-yellow-300 tracking-wider border-2 border-yellow-500/30 bg-gray-800/50 rounded-xl p-4 inline-block mx-auto block">
        <p><strong>W<sub>ILL</sub> is not the unit of something — but the Unity of Everything.</strong></p>
    </div>
</div>
</div>

<div class="max-w-4xl mx-auto my-12 text-center">
    <h3 class="text-xl font-bold text-white">The Name "WILL"</h3>
    <p class="mt-2 text-base text-gray-400">
        <strong>WILL</strong> stands for <strong>SPACE–TIME–ENERGY</strong>. It is both a shorthand and a quiet irony toward the <abbr title="the idea that the laws of physics appear fine-tuned to allow conscious observers">anthropic principle</abbr>: the cosmos does not possess "will," yet through WILL it manifests all that is. The universe is not a stage where energy acts through time upon space, but a single self-balancing structure whose internal distinctions generate every phenomenon.
    </p>
</div>

---

<div class="mb-16">
    <img src="{{ site.baseurl }}/images/SLIDES-tinyPNG/3_Breakthroughs-Delete-Not-Add.png" alt="From descriptive to generative physics" class="hidden">
    <div class="max-w-4xl mx-auto text-gray-300 text-lg leading-relaxed">
        <h2 class="text-3xl font-bold text-white text-center mb-6">From Descriptive to Generative Physics</h2>
        <p>The deepest shift is not a new equation but a new role for physical law. Standard physics observes phenomena and then writes laws to describe them. WILL inverts this: the laws are <em>generated</em> as the only self-consistent possibility.</p>
        <div class="overflow-x-auto mt-6">
            <table class="w-full text-left border-collapse text-base">
                <thead>
                    <tr class="bg-gray-700">
                        <th class="p-3 border border-gray-600">Descriptive physics (standard)</th>
                        <th class="p-3 border border-gray-600">Generative physics (WILL)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="bg-gray-800/50">
                        <td class="p-3 border border-gray-600">Phenomena are observed, then summarized into empirical laws.</td>
                        <td class="p-3 border border-gray-600">Laws emerge as inevitable consequences of relational geometry.</td>
                    </tr>
                    <tr class="bg-gray-800/50">
                        <td class="p-3 border border-gray-600">Laws are assumptions introduced to model reality.</td>
                        <td class="p-3 border border-gray-600">Laws are identities enforced by geometric self-consistency.</td>
                    </tr>
                    <tr class="bg-gray-800/50">
                        <td class="p-3 border border-gray-600">Space and time are external backgrounds.</td>
                        <td class="p-3 border border-gray-600">Space and time are projections of energy relations.</td>
                    </tr>
                    <tr class="bg-gray-800/50">
                        <td class="p-3 border border-gray-600">Goal: describe what is observed.</td>
                        <td class="p-3 border border-gray-600">Goal: show why nothing else is possible.</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>

---

<div class="mb-16">
    <div class="max-w-4xl mx-auto text-gray-300 text-lg leading-relaxed">
        <h2 class="text-3xl font-bold text-white text-center mb-6">Honest Limits &amp; How to Falsify This</h2>
        <p>
            This is open research, and rigor cuts both ways. The framework has clear current limits and sharp, near-term tests.
        </p>
        <div class="grid md:grid-cols-2 gap-4 mt-6 text-base">
            <div class="border-l-4 border-gray-500 pl-4 py-2 bg-gray-800/30 rounded-r-lg">
                <h4 class="font-semibold text-white">Current limitations</h4>
                <p>Gravitational waves and the full radiative two-body problem are not yet formulated relationally — only conservative, bound orbits are covered. A complete multi-body architecture beyond the collinear L1 case is still open. The author states these are limits of present mathematical facility, not prohibitions of the ontology, and invites collaboration.</p>
            </div>
            <div class="border-l-4 border-cyan-500/50 pl-4 py-2 bg-gray-800/30 rounded-r-lg">
                <h4 class="font-semibold text-white">Decisive near-term tests</h4>
                <p>The strongest discriminator is high-precision monitoring of the S2 star at Sgr A*: RG predicts a true-anomaly-coupled precession phasing that should keep its statistical edge over the time-linear form as GRAVITY+ adds pericentre passages (2026–2028). A reversal would falsify the phasing hypothesis. The explicit second-order precession term is a further parameter-free target.</p>
            </div>
        </div>
        <div class="mt-6 text-center text-lg font-semibold text-yellow-300 tracking-wider border-2 border-yellow-500/30 bg-gray-800/50 rounded-xl p-4 inline-block mx-auto block">
            <p>These tests probe quantities uniquely fixed by the relational algebra — not adjustable parameters.</p>
        </div>
    </div>
</div>

<div class="text-center py-12">
    <h2 class="text-3xl font-bold text-white">The World as a Projection</h2>
    <p class="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">
        This page is only Part I. The same projections extend to cosmology (Part II) and quantum mechanics (Part III), and into the full orbital toolkit of R.O.M. The core idea remains: energy does not exist <em>in</em> spacetime — it <em>creates</em> spacetime by its projection.
    </p>
    <div class="mt-10 flex justify-center items-center flex-wrap gap-6 md:gap-10">
        <a href="{{ site.baseurl }}/results/" class="text-cyan-400 hover:text-white text-lg font-semibold transition-colors duration-300">Documents &amp; Results</a>
        <a href="{{ site.baseurl }}/predictions/" class="text-cyan-400 hover:text-white text-lg font-semibold transition-colors duration-300">Testable Predictions</a>
        <a href="{{ site.baseurl }}/WILL-AI/" class="text-cyan-400 hover:text-white text-lg font-semibold transition-colors duration-300">Ask WILL AI</a>
        <a href="{{ site.baseurl }}/help/" class="text-cyan-400 hover:text-white text-lg font-semibold transition-colors duration-300">Help This Research</a>
    </div>
</div>

<div id="will-hint"
     style="position:fixed;bottom:25px;left:50%;transform:translateX(-50%);
            background:rgba(31,41,55,0.85);color:#eee;padding:10px 20px;
            border-radius:10px;font-size:0.95rem;opacity:0.9;
            transition:opacity 0.6s ease;z-index:1000;">
    💡 <em>Select any text to ask WILL AI for an explanation.</em>
</div>

<script>
// when WILL AI chat opens, remove the hint once
const hint = document.getElementById('will-hint');
const observer = new MutationObserver(() => {
  const aiWindow = document.querySelector('.fixed.inset-0.bg-black'); // wrapper of WILL AI modal
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



