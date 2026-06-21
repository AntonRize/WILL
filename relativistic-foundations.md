---
layout: default
title: "Relativistic Foundations"
permalink: /relativistic-foundations/
description: "The web rendering of WILL Relational Geometry (Part I) and Relational Orbital Mechanics (R.O.M.). Special and General Relativity, the Minkowski and Schwarzschild intervals, the equivalence principle, and the full closed algebra of orbital mechanics — derived from a single principle, SPACETIME ≡ ENERGY, with zero free parameters."
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

/* Objection-killer callout */
.objection {
  border-left: 4px solid #f59e0b;
  background: rgba(180,83,9,0.10);
  border-radius: 0 10px 10px 0;
  padding: 1rem 1.25rem;
  margin: 1.5rem 0;
}
.objection .obj-q { color:#fbbf24; font-weight:700; }
.objection .obj-a { color:#e5e7eb; }

/* Paper cross-reference line */
.paper-ref {
  font-size: 0.92rem;
  color: #94a3b8;
  border-top: 1px solid rgba(148,163,184,0.2);
  margin-top: 0.75rem;
  padding-top: 0.5rem;
}
.paper-ref a { color:#22d3ee; }
</style>
 

# WILL Part I: Relational Geometry &amp; R.O.M.
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

<div class="my-8 max-w-4xl mx-auto">
    <p class="text-lg text-gray-300 leading-relaxed">
        This is the web rendering of <strong class="text-white">WILL Relational Geometry, Part I</strong> and its companion, <strong class="text-white">Relational Orbital Mechanics (R.O.M.)</strong> — one continuous derivation, not two papers. From a single principle, <span class="font-mono">SPACETIME ≡ ENERGY</span>, it derives Special and General Relativity, the Minkowski and Schwarzschild intervals, the equivalence principle, and the complete closed algebra of orbital motion, with <strong class="text-white">zero free parameters</strong>.
    </p>
    <p class="text-base text-gray-400 leading-relaxed mt-4">
        The page favours rigour over simplification. Where a step is condensed for readability, a link to the corresponding section of the full paper — carrying the complete derivation — is given alongside it, so nothing on this page rests on an unsupported claim. For the formal documents and reproducible notebooks, see <a href="https://willrg.com/results/" class="text-cyan-400 hover:text-white">Documents &amp; Results</a>.
    </p>
</div>

<div class="max-w-4xl mx-auto my-6 p-4 rounded-xl border border-gray-700 bg-gray-800/40 text-gray-300 text-base leading-relaxed">
    Part of the <strong class="text-white">WILL Trilogy</strong>:
    <strong class="text-white">Part I — Relational Geometry</strong> (this page, with R.O.M.),
    <a href="https://willrg.com/results/" class="text-cyan-400 hover:text-white">Part II — Relational Cosmology</a>, and
    <a href="https://willrg.com/results/" class="text-cyan-400 hover:text-white">Part III — Relational Quantum Mechanics</a>.
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
  <summary class="will-hero-summary">▶ Quick Glossary: Key Terms &amp; Concepts</summary>  
  <div class="hero-details">  
    <p><strong>Projection:</strong> The mapping of one relational quantity onto an axis of a carrier. In WILL every physical quantity is a projection of a single conserved resource, assigned from a chosen observer's relational origin.</p>
    <p><strong>Amplitude (β, κ):</strong> The <em>external</em> projection. <strong>β</strong> is the kinematic amplitude, identified with v/c; <strong>κ</strong> is the potential amplitude, identified with v<sub>e</sub>/c = √(R<sub>s</sub>/r) and fixed operationally by the measured gravitational redshift.</p>
    <p><strong>Phase (β<sub>Y</sub>, κ<sub>X</sub>):</strong> The <em>internal</em> projection on each carrier, governing proper time and proper length. Phase = 1 is rest; Phase = 0 is the light-speed / horizon limit. The Lorentz factor is γ = 1/β<sub>Y</sub>.</p>
    <p><strong>Relational carriers (S¹, S²):</strong> The circle S¹ (one direction) and the sphere S² (all directions) — the two minimal closed, maximally symmetric carriers of the conserved resource. <strong>They are not shapes in space</strong>; space and time are labels assigned to them.</p>
    <p><strong>Conservation of Relation:</strong> Amplitude² + Phase² = 1 on each carrier — the closed budget that makes β and κ cross-observer invariants rather than free labels.</p>
    <p><strong>Closure (κ² = 2β²):</strong> The fixed exchange rate between the potential and kinematic projections of any closed system — the relational origin of the virial theorem.</p>
    <p><strong>Closure factor (δ = κ²/2β²):</strong> The diagnostic of closure: δ = 1 for closed (circular/periodic) systems; its departure measures energy leaving through unaccounted channels.</p>
    <p><strong>Total Relational Shift (Q):</strong> The magnitude (norm) of the state difference an observer assigns to another system, Q² = β² + κ². Not a direction — a magnitude. Causal interaction requires Q &lt; 1.</p>
    <p><strong>Relational spacetime factor (τ = β<sub>Y</sub>κ<sub>X</sub>):</strong> The single quantity read out by spectroscopy (the inverse of the measured redshift product). Time dilation, redshift, and precession are all expressions of τ.</p>
    <p><strong>R.O.M. (Relational Orbital Mechanics):</strong> The closed algebraic system that classifies the allowed bound states of a gravitating system from β, κ and closure alone — no differential equations, no acceleration term, no G and no M.</p>
    <p><strong>W<sub>ILL</sub> invariant:</strong> The dimensionless identity W<sub>ILL</sub> = E·T/(M·L) = 1, fixing energy, mass, time and length as coherent projections of one resource.</p>
    <p><strong>Epistemic Hygiene:</strong> Deriving physics by removing unjustified assumptions, keeping only what logic and geometry require.</p>  
  </div>  
</details>

---

<div class="mb-12">
    <img src="{{ site.baseurl }}/images/SLIDES-tinyPNG/1_WILL-Relational-Geometry.png" alt="WILL: Relational Geometry — How to Construct Reality out of One Principle" class="w-full max-w-5xl mx-auto rounded-lg border-2 border-gray-700/50 shadow-2xl">
    <div class="max-w-4xl mx-auto mt-8 text-gray-300 text-lg leading-relaxed">
        <p>
            This is a foundational model built from a single principle. Instead of describing observed phenomena with externally added laws, it <strong class="text-white">generates the laws of physics</strong> as necessary consequences of that principle — the shift from <em>descriptive</em> physics (write laws that fit observation) to <em>generative</em> physics (show why nothing else is possible).
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
    <img src="{{ site.baseurl }}/images/SLIDES-tinyPNG/3_Breakthroughs-Delete-Not-Add.png" alt="Historical breakthroughs in physics delete a false separation rather than adding entities" class="w-full max-w-5xl mx-auto rounded-lg border-2 border-gray-700/50 shadow-2xl">
    <div class="max-w-4xl mx-auto mt-8 text-gray-300 text-lg leading-relaxed">
        <p>
            Every standard theory — SR, GR, QFT, the Standard Model, ΛCDM — is written with a two-part syntax: a fixed <strong class="text-white">structure</strong> (a manifold plus a metric) <em>plus</em> the <strong class="text-white">dynamics</strong> (fields and constants) that play out upon it. No observation demands this duplication; it is retained only because the resulting Lagrangians are empirically adequate <em>inside</em> the split. The split is therefore not an empirical discovery but an unjustified ontological commitment.
        </p>
        <p class="mt-4">
            The greatest advances in physics removed exactly such separations rather than adding entities: Copernicus deleted the Earth/cosmos divide; Newton, the terrestrial/celestial split; Maxwell, electricity/magnetism; Einstein, space/time. Each widened the relational circle and reduced the number of unexplained primitives. The spacetime–energy split is the only survivor of that pruning.
        </p>

        <details class="video-dropdown-container mt-6">
            <summary class="will-hero-summary">▶ Why no experiment establishes the split (empirical deficit)</summary>
            <div class="hero-details text-left p-4 md:p-6 bg-gray-900/50 rounded-lg text-gray-300">
                <p>Every standard "test" is an internal consistency check of a formalism that already presupposes two substances — never positive evidence for the separation:</p>
                <ul class="list-disc list-inside ml-4 mt-2 space-y-2">
                    <li><strong>Local energy conservation</strong> is verified only <em>after</em> the metric is declared fixed; no experiment varies the volume of empty space and checks calorimetry.</li>
                    <li><strong>Universality of free fall</strong> tests <span class="font-mono">m<sub>i</sub> = m<sub>g</sub></span> numerically, not the claim that inertia resides <em>in</em> the object rather than in a geometric scaling relation.</li>
                    <li><strong>Gravitational-wave polarisations</strong> test spin content, not ontology.</li>
                    <li><strong>Casimir / Lamb shifts</strong> measure <em>differences</em> of vacuum energy between two geometries; the absolute bulk term is explicitly subtracted.</li>
                </ul>
                <p class="mt-4">Until an experiment varies the amount of space while holding everything else fixed, the spacetime–energy separation remains an unevidenced metaphysical postulate.</p>
            </div>
        </details>

        <div class="mt-8 text-center text-lg font-semibold text-yellow-300 tracking-wider border-2 border-yellow-500/30 bg-gray-800/50 rounded-xl p-4 inline-block mx-auto block">
            <p>The spacetime–energy split is the last geocentric epicycle in physics.</p>
        </div>
        <p class="paper-ref max-w-4xl mx-auto">Full text: <a href="https://willrg.com/documents/WILL_RG_I.pdf#sec:epicycle">WILL RG Part I — Stage 0: The Last Geocentric Epicycle</a>.</p>
    </div>
</div>

---

<!-- ════════════════════════════ STAGE I ════════════════════════════ -->

<div class="text-center my-10">
    <span class="text-sm font-bold tracking-[0.3em] text-cyan-400">STAGE I</span>
    <h2 class="text-3xl md:text-4xl font-extrabold text-white mt-2">Ontological Construction — The Primitives</h2>
</div>

<div class="mb-12">
    <img src="{{ site.baseurl }}/images/SLIDES-tinyPNG/2_Methodological-Pillars.png" alt="The four methodological principles: Epistemic Hygiene, Relational Origin, Ontological Minimalism, Mathematical Transparency" class="w-full max-w-5xl mx-auto rounded-lg border-2 border-gray-700/50 shadow-2xl">
    <div class="max-w-4xl mx-auto mt-8 text-gray-300 text-lg leading-relaxed">
        <p>
            The framework rests on <strong class="text-white">four methodological principles</strong>. They are not claims about reality but rules of epistemic purity; everything that follows is forced by them. "Zero free parameters" is a <em>consequence</em> of these principles, not a separate pillar.
        </p>
        <div class="grid md:grid-cols-2 gap-4 mt-6">
            <div class="border-l-4 border-cyan-500/50 pl-4 py-2 bg-gray-800/30 rounded-r-lg">
                <h4 class="font-semibold text-white">Epistemic Hygiene</h4>
                <p class="text-base">Derive physics by <em>removing</em> hidden assumptions, never by introducing new postulates. No construct is retained unless geometrically or energetically necessary.</p>
            </div>
            <div class="border-l-4 border-cyan-500/50 pl-4 py-2 bg-gray-800/30 rounded-r-lg">
                <h4 class="font-semibold text-white">Relational Origin</h4>
                <p class="text-base">Every physical quantity is defined exclusively by its relations. Any absolute property reintroduces a metaphysical artefact.</p>
            </div>
            <div class="border-l-4 border-cyan-500/50 pl-4 py-2 bg-gray-800/30 rounded-r-lg">
                <h4 class="font-semibold text-white">Ontological Minimalism</h4>
                <p class="text-base">Keep the minimum number of primitives. Absolute background — container, time axis, absolute distance, forces, fields — is excluded as a primitive.</p>
            </div>
            <div class="border-l-4 border-cyan-500/50 pl-4 py-2 bg-gray-800/30 rounded-r-lg">
                <h4 class="font-semibold text-white">Mathematical Transparency</h4>
                <p class="text-base">Every symbol maps to exactly one physical idea. Number of symbols = number of independent physical ideas; no over-parameterization.</p>
            </div>
        </div>
        <p class="paper-ref">Full text and the derivation flow chart: <a href="https://willrg.com/documents/WILL_RG_I.pdf#sec:foundational">Part I — Foundational Methodological Principles</a> · <a href="https://willrg.com/logos_map/">Logos Map</a>.</p>
    </div>
</div>

<div class="mb-12">
    <img src="{{ site.baseurl }}/images/SLIDES-tinyPNG/5_Energy-in-the-Relational-Framework.png" alt="Energy as a conserved, relational, causal measure of change" class="w-full max-w-5xl mx-auto rounded-lg border-2 border-gray-700/50 shadow-2xl">
    <div class="max-w-4xl mx-auto mt-8 text-gray-300 text-lg leading-relaxed">
        <p>Three results about the foundational core follow immediately from the four principles. They are the load-bearing theorems of everything below.</p>

        <div class="border-l-4 border-gray-600 pl-4 py-2 my-4">
            <h4 class="font-semibold text-white">Theorem — Relational Closure</h4>
            <p>A purely relational system cannot be geometrically open. Any interaction with a supposed "outside" is itself a relation, and the moment it acts it is integrated into the system. An interacting non-relation is a contradiction; the system is closed by analytic necessity, not by a boundary.</p>
        </div>

        <div class="border-l-4 border-gray-600 pl-4 py-2 my-4">
            <h4 class="font-semibold text-white">Theorem — Relational Invariance (the definition of Energy)</h4>
            <p>Within a closed system in which change occurs, every change must be balanced by a complementary change elsewhere. There must therefore exist a conserved measure of change. That invariant is what is historically called <strong>energy</strong>; proving it geometrically strips it of any substance and reveals it as the bookkeeping of causality.</p>
            <p class="mt-3 text-center text-white font-semibold">Energy is the invariant relational measure of state transformation within a relationally closed system.</p>
        </div>

        <div class="border-l-4 border-gray-600 pl-4 py-2 my-4">
            <h4 class="font-semibold text-white">Theorem — Relational Isotropy</h4>
            <p>With no background grid, no direction can be privileged a priori; assigning an intrinsic axis to the unmeasured resource is unobservable surplus ontology. The carrier of the conserved resource must therefore be maximally symmetric.</p>
        </div>

        <details class="video-dropdown-container mt-6">
            <summary class="will-hero-summary">▶ Formal proofs (Closure, Invariance, Isotropy)</summary>
            <div class="hero-details text-left p-4 md:p-6 bg-gray-900/50 rounded-lg text-gray-300 space-y-4">
                <p><strong>Relational Closure (analytic tautology).</strong> (1) Quantities are defined only by relations. (2) If an external entity interacts with the system, that interaction is itself a relation. (3) As it forms, it is integrated into the system. An "interacting non-relation" is impossible; the system is closed by definition.</p>
                <p><strong>Relational Invariance (structural necessity).</strong> States change (empirical); the system is closed; a change cannot vanish into a void or emerge from one, so it must be balanced by a complementary change. Hence a conserved quantitative measure of change must exist.</p>
                <p><strong>Relational Isotropy (relational origin).</strong> There is no absolute grid; direction manifests only as a specific interaction. Assigning an intrinsic axis to the unmeasured resource is pure gauge — unobservable surplus ontology. The carrier must be strictly isotropic.</p>
            </div>
        </details>
        <p class="paper-ref">Full text: <a href="https://willrg.com/documents/WILL_RG_I.pdf#sec:core">Part I — The Foundational Core: Relational Geometry</a>.</p>
    </div>
</div>

<div class="mb-20">
    <div class="max-w-4xl mx-auto mt-8 text-gray-300 text-lg leading-relaxed">
        <h3 class="text-2xl font-bold text-white text-center mb-6">The Unifying Principle</h3>
        <p>
            Treating "structure" as separate from "dynamics" smuggles in a background container no phenomenon requires. Removing that illicit separation forces structure and dynamics to be two aspects of one entity — a principle with <em>negative</em> ontological weight: it subtracts a primitive rather than adding one.
        </p>
        <div class="font-mono text-2xl bg-cyan-900/30 border border-cyan-500/50 p-6 rounded-lg my-6 text-center text-white">
            <p>SPACETIME ≡ ENERGY</p>
        </div>
        <p>
            The single unified relational structure is named <strong class="text-white">WILL ≡ SPACE–TIME–ENERGY</strong>; every physically meaningful quantity is a relational feature of WILL. The principle is foundational but testable: it is subject to a geometric audit (its internal logical consequences) and an empirical audit (agreement with data). The remainder of this page is that audit.
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
                    <tr class="bg-gray-800/50"><td class="p-3 border border-gray-600">Substantival: container + content (spacetime <em>and</em> energy/matter)</td><td class="p-3 border border-gray-600 text-center font-mono">≥ 2</td></tr>
                    <tr class="bg-gray-800/50"><td class="p-3 border border-gray-600">Relational: WILL (one self-relating structure)</td><td class="p-3 border border-gray-600 text-center font-mono text-cyan-400">1</td></tr>
                </tbody>
            </table>
        </div>
        <p class="paper-ref">Full text: <a href="https://willrg.com/documents/WILL_RG_I.pdf#pr:unifying">Part I — Unifying Ontological Principle</a>.</p>
    </div>
</div>

<!-- ════════════════════════════ STAGE II ════════════════════════════ -->

<div class="text-center my-10">
    <span class="text-sm font-bold tracking-[0.3em] text-cyan-400">STAGE II</span>
    <h2 class="text-3xl md:text-4xl font-extrabold text-white mt-2">Geometric Derivation</h2>
</div>

<div id="2W" class="mb-12">
    <img src="{{ site.baseurl }}/images/SLIDES-tinyPNG/7_Two-Minimal-Relational-Carriers.png" alt="The circle S¹ for directional relations and the sphere S² for omnidirectional relations" class="w-full max-w-5xl mx-auto rounded-lg border-2 border-gray-700/50 shadow-2xl">
    <div class="max-w-4xl mx-auto mt-8 text-gray-300 text-lg leading-relaxed">
        <h3 class="text-2xl font-bold text-white mb-4">The two minimal carriers</h3>
        <p>
            Closure, Conservation and Isotropy fix the only admissible carriers of the conserved resource. A <strong class="text-white">directional</strong> relation (1 degree of freedom) that cannot leak must close into a loop; the unique parameter-free, maximally symmetric loop is the circle <strong class="text-white">\(S^1\)</strong>. An <strong class="text-white">omnidirectional</strong> relation (2 degrees of freedom) that is closed and isotropic can only be the sphere <strong class="text-white">\(S^2\)</strong>. No free integers, no preferred axes.
        </p>

        <details class="video-dropdown-container mt-6">
            <summary class="will-hero-summary">▶ Formal derivation of the carriers</summary>
            <div class="hero-details text-left p-4 md:p-6 bg-gray-900/50 rounded-lg text-gray-300 space-y-3">
                <p><strong>1-DOF (kinematic).</strong> The minimal non-trivial relation is a sequence of transformations. Closure forces a loop. A discrete loop (a cyclic group of \(n\) states) requires an arbitrary integer \(n\), which Mathematical Transparency forbids — forcing the continuum limit. Isotropy then leaves a unique object: the circle \(S^1\).</p>
                <p><strong>2-DOF (potential).</strong> The omnidirectional distribution of the resource from a point requires a 2D carrier. Discrete tiling smuggles in arbitrary parameters, forcing a continuous 2-carrier; closure makes it compact; maximal symmetry eliminates every anisotropic surface (e.g. the torus, with preferred axes), leaving a unique object: the 2-sphere \(S^2\).</p>
            </div>
        </details>

        <div class="border-l-4 border-red-500/60 pl-4 py-2 my-6 bg-red-900/10 rounded-r-lg">
            <h4 class="font-semibold text-white">Warning — the spatial-container fallacy</h4>
            <p class="text-base">\(S^1\) and \(S^2\) are <strong>not</strong> shapes embedded in space. \(S^2\) has no physical surface area, no volume, and does not "dilute" a flux across a distance. They are abstract relational carriers encoding closure, conservation and isotropy. Spatial distance \(r\) and time are descriptive labels attached to these patterns — the projection dictates the space, not the reverse.</p>
        </div>
        <p class="paper-ref">Full text: <a href="https://willrg.com/documents/WILL_RG_I.pdf#sec:carriers">Part I — Deriving Relational Carriers</a>.</p>
    </div>
</div>

---

<div id="3W" class="mb-12">
    <img src="{{ site.baseurl }}/images/SLIDES-tinyPNG/8_Kinetic-Energy-b-projection-on-S.png" alt="The β projection on the S¹ unit circle, with amplitude and phase" class="w-full max-w-5xl mx-auto rounded-lg border-2 border-gray-700/50 shadow-2xl">
    <div class="max-w-4xl mx-auto mt-8 text-gray-300 text-lg leading-relaxed">
        <h3 class="text-2xl font-bold text-white mb-4">Amplitude–Phase duality and the Conservation of Relation</h3>
        <p>
            By the Relational Origin Principle, the identification of spacetime with energy necessitates two complementary relational measures: an <strong>amplitude</strong> (external shift) and a <strong>phase</strong> (internal order). Any description of change must be of relational origin — a single number introduces an absolute value, which the Relational Origin Principle forbids. The carriers \(S^1\) and \(S^2\) provide the minimal geometry enforcing this complementarity: their orthogonal projections furnish exactly two non-redundant, coupled axes.
        </p>
        <ul class="list-disc list-inside ml-4 mt-3 space-y-2">
            <li><strong>Amplitude (\(\beta\), \(\kappa\)):</strong> the external shift from the observer's relational origin (rest frame). For \(S^1\), \(\beta\) is what we measure as <strong class="text-white">relative speed</strong>, \(\beta = v/c\); for \(S^2\), \(\kappa\) measures gravitational depth, \(\kappa = v_e/c\).</li>
            <li><strong>Phase (\(\beta_Y\), \(\kappa_X\)):</strong> the internal ordering — proper time and proper length. Phase \(=1\) is rest; phase \(=0\) is the light-speed / horizon limit.</li>
        </ul>

        <div class="border-l-4 border-cyan-500/50 pl-4 py-2 my-6 bg-gray-800/30 rounded-r-lg">
            <h4 class="font-semibold text-white">Theorem — Conservation of Relation</h4>
            <p>For both kinematic (\(S^1\)) and potential (\(S^2\)) modes, the sum of the squared Amplitude and squared Phase is strictly invariant:</p>
            <p class="text-center text-2xl font-mono my-3">\(\underbrace{\text{Amplitude}^2}_{\text{External Interaction}} + \underbrace{\text{Phase}^2}_{\text{Internal Existence}} = 1\)</p>
        </div>
        <div class="pl-4 my-4">
            <h4 class="font-semibold text-white">Proof</h4>
            <p>The conserved relational resource is carried by the maximally symmetric geometries \(S^1\) and \(S^2\). Normalizing the total conserved resource to unity (1), any physical state corresponds to a point on these carriers. The algebraic identity of orthogonal projections on a unit circle and sphere dictates that the sum of their squares must equal the squared radius. Therefore the parameters satisfy \(\beta^2 + \beta_Y^2 = 1\) and \(\kappa^2 + \kappa_X^2 = 1\), encoding the finite, closed relational budget.</p>
        </div>

        <div class="border-l-4 border-gray-600 pl-4 py-3 my-6 bg-gray-800/40">
            <h4 class="font-semibold text-white">The projections are cross-cultural invariants</h4>
            <ul class="list-disc list-inside ml-2 mt-2 space-y-2 text-base">
                <li>\(S^1\) is the minimal geometric structure that can encode a directional relation without absolute space. Its parameter is an angle \(\theta_1\) whose cosine (\(\beta=\cos\theta_1\)) we identify with the fraction \(v/c\), and whose sine (\(\beta_Y=\sin\theta_1\)) governs the internal ordering (proper-time fraction).</li>
                <li>\(S^2\) is the minimal geometric structure that can encode an omnidirectional relation without absolute space. Its parameter is an angle \(\theta_2\) whose sine (\(\kappa=\sin\theta_2\)) we identify with the escape-velocity fraction \(v_e/c\), and whose cosine (\(\kappa_X=\cos\theta_2\)) governs the internal ordering (proper-time fraction).</li>
            </ul>
            <p class="text-center italic mt-3">Any two observers assign \(\beta\) and \(\kappa\) the same value for the same state, whatever their unit system — or even their descriptive vocabulary.</p>
            <p class="text-center text-xl font-mono my-3">\(\beta = \dfrac{v}{c}, \qquad \kappa = \dfrac{v_e}{c} = \sqrt{\dfrac{R_s}{r}} = \sqrt{\dfrac{\rho}{\rho_{max}}}\)</p>
            <p class="text-center italic">are <em>translations</em> into descriptive vocabulary.</p>
        </div>

        <div class="objection">
            <p class="obj-q">Objection a hostile reader forms here: "This is just renaming \(v/c\) and \(R_s/r\). All the physics is in the definitions — mindless re-labelling."</p>
            <p class="obj-a">It is the opposite of a renaming. \(\beta\) and \(\kappa\) are not free labels: they are projections <em>constrained</em> to lie on the closed carriers by \(\text{Amplitude}^2+\text{Phase}^2=1\). A renaming carries no constraint and predicts nothing. These projections (i) take the same value for every observer and every unit system (cross-cultural invariants), (ii) are extracted operationally from the measured gravitational redshift, \(\kappa^2 = 1 - 1/(1+z_\kappa)^2\), with no appeal to mass or \(G\), and (iii) force — through closure alone — the energy–momentum relation, the Minkowski and Schwarzschild intervals, the equivalence principle, and the complete orbital algebra below. A re-labelling does none of this.</p>
        </div>
        <p class="paper-ref">Full text: <a href="https://willrg.com/documents/WILL_RG_I.pdf#thm:conservation">Part I — The Amplitude–Phase Duality &amp; Conservation of Relation</a>.</p>
    </div>
</div>

---

<div class="mb-12">
    <div class="max-w-4xl mx-auto text-gray-300 text-lg leading-relaxed">
        <h3 class="text-2xl font-bold text-white mb-4">Relational origin of the inverse-square law and the nature of spatial distance</h3>
        <p>
            Spatial distance is derived as the operational inverse of relational phase capacity. Treating distance as an <em>a priori</em> foundational primitive violates the principles of Relational Origin and Ontological Minimalism.
        </p>

        <div class="border-l-4 border-cyan-500/50 pl-4 py-2 my-6 bg-gray-800/30 rounded-r-lg">
            <h4 class="font-semibold text-white">Theorem — Inverse-Square</h4>
            <p>The inverse-square potential proportionality \(\kappa^2 \propto 1/r\) is a geometric necessity of the \(S^2\) carrier's relational capacity, determined without spatial primitives.</p>
        </div>
        <div class="pl-4 my-4">
            <h4 class="font-semibold text-white">Proof</h4>
            <p>By the <a href="https://willrg.com/documents/WILL_RG_R.O.M..pdf#sec:spectroscopic_shift" class="text-cyan-400 hover:text-white">Spectroscopic Phase Shift Theorem</a>, the potential projection \(\kappa^2\) is operationally extracted entirely from the dimensionless phase tension (\(z_\kappa\)), independent of spatial parameters. Distance must therefore be defined exclusively by the relational tension between energy states. Normalizing the absolute geometric scale at saturation (\(\kappa^2 = 1 \equiv r = R_s\)), spatial distance \(r\) emerges as the reciprocal measure of the omnidirectional projection amplitude on \(S^2\):</p>
            <p class="text-center text-xl font-mono my-3">\(\kappa = \sin\theta_2 \;\Longrightarrow\; \kappa^2 = \dfrac{R_s}{r} \;\Longrightarrow\; r = \dfrac{R_s}{\kappa^2} \;\Longrightarrow\; \kappa^2 \propto 1/r\)</p>
            <p>This is a direct realization of the Unifying Principle. The \(1/r\) proportionality is an analytic identity defining spatial distance, not an empirical input.</p>
        </div>

        <div class="mt-6 text-center text-lg font-semibold text-yellow-300 tracking-wider border-2 border-yellow-500/30 bg-gray-800/50 rounded-xl p-4 inline-block mx-auto block">
            <p>The inverse-square proportionality does not exist because physical space dictates how forces dilute. It exists because "spatial distance" is the descriptive vocabulary assigned to the inverse capacity of the omnidirectional relational carrier \(S^2\).</p>
        </div>
        <p class="paper-ref">Full text: <a href="https://willrg.com/documents/WILL_RG_I.pdf#sec:inverse_square">Part I — Relational Origin of the Inverse-Square Law and the Nature of Spatial Distance</a>.</p>
    </div>
</div>

---

<div class="mb-12">
    <div class="max-w-4xl mx-auto text-gray-300 text-lg leading-relaxed">
        <h3 class="text-2xl font-bold text-white mb-4">Consequence: relativistic effects</h3>
        <div class="border-l-4 border-cyan-500/50 pl-4 py-2 my-6 bg-gray-800/30 rounded-r-lg">
            <h4 class="font-semibold text-white">Proposition — Physical interpretation: relativistic effects</h4>
            <p>The conservation law implies that any redistribution between the orthogonal components manifests physically as the relativistic effects of time dilation and length contraction.</p>
        </div>
        <div class="pl-4 my-4">
            <h4 class="font-semibold text-white">Proof</h4>
            <p>By Conservation of Relation, the components satisfy \(\beta^2 + \beta_Y^2 = 1\) and \(\kappa^2 + \kappa_X^2 = 1\). An increase in Amplitude (\(\beta, \kappa\)) enforces a geometric decrease in Phase measure (\(\beta_Y, \kappa_X\)). This necessary reduction of \(\beta_Y\) and \(\kappa_X\) corresponds precisely to the dilation of proper time and the contraction of proper length, while the growth of \(\beta\) and \(\kappa\) represents momentum or potential depth. Thus the kinematic and potential trade-off is the direct, un-parameterized physical expression of the geometric closure of the \(S^1\) and \(S^2\) carriers.</p>
        </div>
        <p>
            This identifies relativistic and gravitational time dilation not as a mysterious "slowing down" of clocks, but as geometric <strong class="text-white">phase rotation</strong>. As a system invests more of its relational existence into external Amplitude (\(\beta\) or \(\kappa\)), it necessarily withdraws from its internal Phase (\(\beta_Y\) or \(\kappa_X\)), changing the rate of its proper-time evolution.
        </p>
        <div class="mt-6 text-center text-lg font-semibold text-yellow-300 tracking-wider border-2 border-yellow-500/30 bg-gray-800/50 rounded-xl p-4 inline-block mx-auto block">
            <p>The geometry of spacetime is dictated by the relations of energy states.</p>
        </div>
    </div>
</div>

---

<div class="mb-20">
    <img src="{{ site.baseurl }}/images/SLIDES-tinyPNG/9_Energy-Momentum-Identity-on-S.png" alt="Energy–momentum identity on the S¹ circle" class="w-full max-w-5xl mx-auto rounded-lg border-2 border-gray-700/50 shadow-2xl">

    <details class="video-dropdown-container mt-6">  
      <summary class="will-hero-summary">▶ Interactive graph: kinetic projection β on the circle S¹ (Desmos)</summary>  
      <div class="geometry-container hero-details"><div class="desmos-container">  
        <iframe src="https://www.desmos.com/geometry/6k1um2qbzm" width="100%" height="500" frameborder="0"></iframe>  
      </div></div>  
    </details>

    <div class="max-w-4xl mx-auto mt-8 text-gray-300 text-lg leading-relaxed">
        <h3 class="text-2xl font-bold text-white mb-4">Kinetic energy on \(S^1\): rest energy, mass, momentum</h3>
        <p>Total energy projects onto both axes, \(E_X = E\beta\) and \(E_Y = E\beta_Y\). The vertical projection is invariant:</p>

        <div class="border-l-4 border-cyan-500/50 pl-4 py-2 my-6 bg-gray-800/30 rounded-r-lg">
            <h4 class="font-semibold text-white">Theorem — Invariant Projection of Rest Energy</h4>
            <p>For any state \((\beta,\beta_Y)\) on the relational circle \(S^1\), the total energy \(E\) scales so that its vertical projection remains constant and equal to the rest energy \(E_0\): \( \;E\beta_Y = E_0.\)</p>
        </div>
        <div class="pl-4 my-4">
            <h4 class="font-semibold text-white">Proof</h4>
            <p>By the Relational Origin Principle and the Conservation Theorem, a system's internal energy measured in its own rest frame (\(\beta = 0 \implies \beta_Y = 1\)) is its rest energy, \(E_0\). For another frame \(B\) observing system \(A\), if \(A\) is in relative motion (\(\beta > 0\)), the total energy \(E\) differs, but the internal energy \(E_Y\) must remain an invariant property of \(A\). To preserve this invariant and agree on measurements, frame \(B\) must measure \(A\)'s internal phase projection as identical to the rest energy:</p>
            <p class="text-center text-xl font-mono my-2">\(E_{Y_{B \leftarrow A}} = E_{Y_{A \leftarrow A}} = E_0.\)</p>
            <p>Therefore the internal energy \(E_Y\) measured externally by any frame remains constant and equivalent to the rest energy, \(E_Y \equiv E_0\), where \(E_0\) is the energy measured in the frame where the system is at rest (\(\beta = 0,\, \beta_Y = 1\)). Geometric consistency therefore requires the vertical leg to be fixed:</p>
            <p class="text-center text-xl font-mono my-2">\(E_Y = E\beta_Y = E_0 \implies E = \dfrac{E_0}{\beta_Y}.\)</p>
        </div>
        <div class="mt-4 text-center text-lg font-semibold text-yellow-300 tracking-wider border-2 border-yellow-500/30 bg-gray-800/50 rounded-xl p-4 inline-block mx-auto block">
            <p>The historical Lorentz factor is the reciprocal of \(\beta_Y\): \(\gamma = 1/\beta_Y\).</p>
        </div>

        <p class="mt-6">Within the normalization \(c=1\), the invariant rest energy is the mass, \(E_0 = m\): the bookkeeping identities \(E_0 = mc^2\), \(m = E_0/c^2\) reduce to tautologies, so mass is not independent but the rest-energy invariant itself. Identifying momentum with the horizontal projection \(p \equiv E\beta\), closure gives the standard relation as a pure geometric identity of \(S^1\):</p>
        <p class="text-center text-xl font-mono my-3 bg-cyan-900/30 border border-cyan-500/50 p-3 rounded-lg">\(E^{2} = p^{2} + m^{2} \quad\Longrightarrow\quad E^{2} = (pc)^{2} + (mc^{2})^{2}\)</p>

        <details class="video-dropdown-container mt-4">  
          <summary class="will-hero-summary">▶ Interactive graph: the energy–momentum triangle (Desmos)</summary>  
          <div class="geometry-container hero-details"><div class="desmos-container">  
            <iframe src="https://www.desmos.com/geometry/mbkzikthkh" width="100%" height="500" frameborder="0"></iframe>  
          </div></div>  
        </details>
        <p class="paper-ref">Full text: <a href="https://willrg.com/documents/WILL_RG_I.pdf#sec:kinetic">Part I — Kinetic Energy Projection β on S¹</a>.</p>
    </div>
</div>

---

<!-- NEW SECTION: Minkowski interval as inflation of S¹ closure -->
<div class="mb-20">
<!-- SLIDE PLACEHOLDER: "Minkowski Interval as Inflation of the S¹ Closure" -->
<div class="slide-placeholder">
    [ Slide placeholder — “Minkowski Interval as the Inflation of S¹ Closure” ]
    <span class="ph-sub">Suggested visual: the circle β²+β_Y²=1 on the left; four “posits” (container; x,y,z; external time t; reference scale c²dt²) appended; the Minkowski interval c²dτ²=c²dt²−dx²−dy²−dz² emerging on the right.</span>
</div>
<div class="max-w-4xl mx-auto mt-8 text-gray-300 text-lg leading-relaxed">
    <h3 class="text-2xl font-bold text-white mb-4">The Minkowski interval is the inflated form of \(S^1\) closure</h3>
    <p>In textbook Special Relativity the Minkowski interval is the starting point. WILL reverses the order: the primitive object is the dimensionless closure \(\beta^2+\beta_Y^2=1\), which contains no coordinates, no container, no external time. The interval is what that relation <em>becomes</em> once four substantival posits are <strong class="text-white">added</strong> — a container; spatial coordinates \(x,y,z\); an externally flowing time \(t\) (demoting the phase to \(\beta_Y \equiv d\tau/dt\)); and a reference scale \(c^2 dt^2\). Substituting \(\beta^2 = (dx^2+dy^2+dz^2)/(c^2 dt^2)\) and \(\beta_Y = d\tau/dt\) into closure returns the interval exactly:</p>
    <p class="text-center text-xl font-mono my-4 bg-cyan-900/30 border border-cyan-500/50 p-3 rounded-lg">\(c^2 d\tau^2 = c^2 dt^2 - dx^2 - dy^2 - dz^2\)</p>
    <p class="text-base text-gray-400 italic">The interval carries more structure than the relation it encodes. The relation is primary; the metric is its inflation.</p>
    <p class="paper-ref">Full text: <a href="https://willrg.com/documents/WILL_RG_I.pdf#sec:SR_interval">Part I — Minkowski Interval as Inflation of the S¹ Closure</a>.</p>
</div>
</div>

---

<div class="mb-12">
    <img src="{{ site.baseurl }}/images/SLIDES-tinyPNG/10_Potential-Energy-k-projection-on-S.png" alt="The κ projection on the S² unit sphere" class="w-full max-w-5xl mx-auto rounded-lg border-2 border-gray-700/50 shadow-2xl">
    <div class="max-w-4xl mx-auto mt-8 text-gray-300 text-lg leading-relaxed">
        <h3 class="text-2xl font-bold text-white mb-4">Gravity: the potential projection \(\kappa\) on \(S^2\)</h3>
        <p>Everything above repeats on the sphere. The amplitude \(\kappa = v_e/c = \sqrt{R_s/r}\) measures gravitational depth (\(\kappa=1\) is the horizon, \(r = R_s\)), the phase \(\kappa_X\) governs gravitational time and length, and \(\kappa^2 + \kappa_X^2 = 1\). The same trade-off — more amplitude \(\kappa\), less phase \(\kappa_X\) — is observed as gravitational time dilation. Curved spacetime is the shadow cast by this conserved relation.</p>

        <details class="video-dropdown-container mt-4">  
            <summary class="will-hero-summary">▶ Interactive graph: potential projection κ on S² (Desmos)</summary>  
            <div class="geometry-container hero-details"><div class="desmos-container">  
                <iframe src="https://www.desmos.com/geometry/lsjhnc2e9x" width="100%" height="500" frameborder="0"></iframe>  
            </div></div>  
        </details>

        <details class="video-dropdown-container mt-4">
            <summary class="will-hero-summary">▶ Gravitational tangent formulation (the dual of momentum)</summary>
            <div class="hero-details text-left p-4 md:p-6 bg-gray-900/50 rounded-lg text-gray-300">
                <p>With \(\kappa=\sin\theta_2\), define the gravitational total energy and momentum \(E_g = E_0/\kappa_X\) (\(\kappa_X=\sqrt{1-\kappa^2}\)) and \(p_g = (E_0/c)\tan\theta_2\), yielding the exact analogue \(E_g^2 = (p_g c)^2 + (mc^2)^2\). Kinematic and gravitational momenta are dual projections: \(\beta=\cos\theta_1 \leftrightarrow \kappa=\sin\theta_2\), \(\;\cot\theta_1 \leftrightarrow \tan\theta_2\).</p>
            </div>
        </details>
        <p class="paper-ref">Full text: <a href="https://willrg.com/documents/WILL_RG_I.pdf#sec:potential">Part I — Potential Energy Projection κ on S²</a>.</p>
    </div>
</div>

<!-- NEW SECTION: Schwarzschild interval as inflation of S² closure -->
<div class="mb-20">
<!-- SLIDE PLACEHOLDER: "Schwarzschild Interval as Inflation of the S² Closure" -->
<div class="slide-placeholder">
    [ Slide placeholder — “Schwarzschild Interval as the Inflation of S² Closure” ]
    <span class="ph-sub">Suggested visual: the sphere closure κ²+κ_X²=1 on the left; posits (container around a body; static observer; external time; κ²≡R_s/r with G, M) appended; static Schwarzschild interval c²dτ²=c²(1−R_s/r)dt² on the right. Parallel to the Minkowski slide.</span>
</div>
<div class="max-w-4xl mx-auto mt-8 text-gray-300 text-lg leading-relaxed">
    <h3 class="text-2xl font-bold text-white mb-4">The Schwarzschild interval is the inflated form of \(S^2\) closure</h3>
    <p>Strictly parallel. Start from \(\kappa^2+\kappa_X^2=1\). Append a container around a central body, hold the observer static, posit an externally flowing time so \(\kappa_X \equiv d\tau/dt\), and localize the amplitude as \(\kappa^2 \equiv R_s/r\) — which is what first introduces the radial coordinate \(r\) and the legacy constants \(G, M\) via \(R_s = 2GM/c^2\). Closure then yields the Schwarzschild time component exactly:</p>
    <p class="text-center text-xl font-mono my-4 bg-cyan-900/30 border border-cyan-500/50 p-3 rounded-lg">\(c^2 d\tau^2 = c^2\left(1 - \dfrac{R_s}{r}\right) dt^2\)</p>
    <p class="text-base text-gray-400 italic">\(\kappa\) is the primitive; \(r\), \(G\), \(M\) are coordinate-and-unit artifacts attached to it. R.O.M. (below) describes gravitating systems fully <em>without</em> \(G\) and \(M\), confirming the projection — not \(R_s/r\) — is irreducible. The full Schwarzschild and Kerr line elements are recovered in R.O.M.</p>
    <p class="paper-ref">Full text: <a href="https://willrg.com/documents/WILL_RG_I.pdf#sec:GR_interval">Part I — Schwarzschild Interval as Inflation of the S² Closure</a> · <a href="https://willrg.com/documents/WILL_RG_R.O.M..pdf#sec:Schwarzschild">R.O.M. — Schwarzschild Metric</a>.</p>
</div>
</div>

---

<div class="mb-20">
    <img src="{{ site.baseurl }}/images/SLIDES-tinyPNG/12_Topological-Ratio-k-b-2.png" alt="The exchange rate κ²=2β² from the ratio of degrees of freedom" class="w-full max-w-5xl mx-auto rounded-lg border-2 border-gray-700/50 shadow-2xl">
    <div class="max-w-4xl mx-auto mt-8 text-gray-300 text-lg leading-relaxed">
        <h3 class="text-2xl font-bold text-white mb-4">Closure: the relational origin of the virial theorem</h3>
        <p>
            The exchange rate between the potential and kinematic projections of a closed system is the ratio of the carriers' degrees of freedom. Under maximal symmetry and ontological minimalism, each independent degree of freedom carries equal quadratic weight (the DOF-Indifference Lemma); \(S^2\) has two degrees of freedom and \(S^1\) has one, so the rate is \(2\):
        </p>
        <p class="text-center text-2xl font-mono my-4 bg-cyan-900/30 border border-cyan-500/50 p-3 rounded-lg">\(\kappa^2 = 2\beta^2\)</p>
        <p>This is the relational origin of the virial theorem, and it fixes the carrier saturations: \(S^1\) at \(\beta^2 = 1\) (light), \(S^2\) at \(\kappa^2 = 2\) (the extremal-Kerr state). It is a diagnostic, through the <strong class="text-white">closure factor</strong> \(\delta \equiv \kappa^2/2\beta^2\): for circular orbits \(\delta = 1\); for elliptical orbits \(\delta\) breathes around the cycle but averages to \(1\); for a radiating binary \(\delta \neq 1\), the defect measuring exactly the energy carried off by gravitational waves.</p>
        <div class="mt-8 text-center text-lg font-semibold text-yellow-300 tracking-wider border-2 border-yellow-500/30 bg-gray-800/50 rounded-xl p-4 inline-block mx-auto block">
            <p>Potential distribution (\(\kappa^2\)) ≡ 2 × kinetic distribution (\(\beta^2\)).</p>
        </div>
        <p class="paper-ref">Full text: <a href="https://willrg.com/documents/WILL_RG_I.pdf#sec:closure">Part I — Closure: Relational Origin of the Virial Theorem</a>.</p>
    </div>
</div>

---

<div class="mb-20">
    <img src="{{ site.baseurl }}/images/SLIDES-tinyPNG/13_Total-Projection-as-Vector-on-b-k-plane.png" alt="The total relational shift Q on the β–κ plane" class="w-full max-w-5xl mx-auto rounded-lg border-2 border-gray-700/50 shadow-2xl">
    <div class="max-w-4xl mx-auto mt-8 text-gray-300 text-lg leading-relaxed">
        <h3 class="text-2xl font-bold text-white mb-4">The Total Relational Shift \(Q\)</h3>
        <p>
            When an observer targets another system, the combined kinematic and gravitational state difference is one <strong class="text-white">magnitude</strong> — the norm \(Q\), not a direction:
        </p>
        <p class="text-center text-xl font-mono my-3">\(Q^2 = \beta^2 + \kappa^2 \qquad (\text{closed systems: } Q^2 = 3\beta^2)\)</p>
        <p>
            \(Q\) is genuinely relational: each observer sits at their own origin \((\beta,\kappa)=(0,0)\) (self-centering), so both parties assign the same magnitude to each other, \(Q_{A\to B} = Q_{B\to A}\). There is no shared background arena — only mutual shift magnitudes computed from each origin. Causal interaction requires the other system's centre to lie within one's horizon, \(Q < 1\); at \(Q = 1\) the budget is exhausted (the photon-sphere / null-circumnavigation limit).
        </p>

        <details class="video-dropdown-container mt-4">  
          <summary class="will-hero-summary">▶ Interactive graph: the Q circle (Desmos)</summary>  
          <div class="geometry-container hero-details"><div class="desmos-container">  
            <iframe src="https://www.desmos.com/geometry/2nkjtezjpi" width="100%" height="500" frameborder="0"></iframe>  
          </div></div>  
        </details>
        <p class="paper-ref">Full text: <a href="https://willrg.com/documents/WILL_RG_I.pdf#sec:DisQ">Part I — Total Relational Shift Q</a> · <a href="https://willrg.com/documents/WILL_RG_I.pdf#sec:reciprocity">Relational Reciprocity</a>.</p>
    </div>
</div>

---

<div class="mb-20">
    <img src="{{ site.baseurl }}/images/SLIDES-tinyPNG/14_Energy-Symmetry-Law.png" alt="The Energy-Symmetry Law" class="w-full max-w-5xl mx-auto rounded-lg border-2 border-gray-700/50 shadow-2xl">
    <div class="max-w-4xl mx-auto mt-8 text-gray-300 text-lg leading-relaxed">
        <h3 class="text-2xl font-bold text-white mb-4">The Energy-Symmetry Law</h3>
        <p>Every transformation is bidirectional: a change observed by \(A\) corresponds to an equal and opposite change observed by \(B\). This is causal continuity in algebraic form.</p>
        <div class="border-l-4 border-cyan-500/50 pl-4 py-2 my-6 bg-gray-800/30 rounded-r-lg">
            <h4 class="font-semibold text-white">Theorem — Energy Symmetry</h4>
            <p>The specific energy differences (per unit rest energy) for a transition between two states balance to zero: \( \;\Delta E_{A \to B} + \Delta E_{B \to A} = 0.\)</p>
        </div>
        <details class="video-dropdown-container mt-4">
            <summary class="will-hero-summary">▶ Proof, and the meaning of the ½ factor</summary>
            <div class="hero-details text-left p-4 md:p-6 bg-gray-900/50 rounded-lg text-gray-300 space-y-3">
                <p>For \(A\) at rest on a surface (\(\beta_A=0\), depth \(\kappa_A\)) and \(B\) in orbit (\(\kappa_B,\beta_B\)), each transition is the sum of the changes in the potential and kinetic budgets:</p>
                <p class="text-center font-mono">\(\Delta E_{A\to B} = \tfrac12(\kappa_A^2-\kappa_B^2) + \tfrac12(\beta_B^2-\beta_A^2)\)</p>
                <p>The reverse transition flips every sign, so the two sum to zero. The factor \(\tfrac12\) arises because energy is quadratic in the projections: using amplitudes alone (\(\beta^2,\kappa^2\)) is half of each carrier's budget, giving \(K/E_0 = \tfrac12\beta^2\) and \(U/E_0 \propto -\tfrac12\kappa^2\).</p>
            </div>
        </details>

        <h4 class="text-xl font-bold text-white mt-8 mb-3">Two consequences: a speed limit, and the nature of light</h4>
        <p><strong class="text-white">The speed limit \(v \le c\) is built in.</strong> If \(\beta>1\), the kinetic budget \(\tfrac12\beta^2\) and the required transfer grow without bound; no finite reverse transfer could balance it, and the symmetry would break. \(\beta \le 1\) is a requirement of causal consistency, not a separate postulate.</p>
        <p><strong class="text-white">Light is the single-axis limit.</strong> For light \(\beta=1\Rightarrow\beta_Y=0\): the internal phase vanishes, there is no rest frame, and the entire resource sits on one axis. This removes the \(\tfrac12\) partitioning, so the gravitational effect on light is exactly twice that on a massive body (\(\Phi_\gamma=\kappa^2c^2\) vs \(\Phi_{\text{mass}}=\tfrac12\kappa^2c^2\)) — the observed factor of 2 in light deflection and the Shapiro delay, with no weak-field expansion.</p>
        <div class="mt-8 text-center text-lg font-semibold text-yellow-300 tracking-wider border-2 border-yellow-500/30 bg-gray-800/50 rounded-xl p-4 inline-block mx-auto block">
            <p>Causality is a built-in feature of Relational Geometry.</p>
        </div>
        <p class="paper-ref">Full text: <a href="https://willrg.com/documents/WILL_RG_I.pdf#sec:energy-symmetry">Part I — Energy-Symmetry Law</a> · <a href="https://willrg.com/documents/WILL_RG_I.pdf#sec:nature_of_light">Single-Axis Transfer and the Nature of Light</a>.</p>
    </div>
</div>

<!-- ════════════════════════════ STAGE III ════════════════════════════ -->

<div class="text-center my-10">
    <span class="text-sm font-bold tracking-[0.3em] text-cyan-400">STAGE III</span>
    <h2 class="text-3xl md:text-4xl font-extrabold text-white mt-2">Legacy Translation &amp; Empirical Alignment</h2>
    <p class="text-gray-400 mt-2 max-w-3xl mx-auto">The familiar machinery of physics recovered as special cases — then the full algebra of orbits, confronted with data.</p>
</div>

<div class="mb-20">
    <img src="{{ site.baseurl }}/images/SLIDES-tinyPNG/11-Equivalence-Principle-as-Derived-Identity.png" alt="The equivalence principle as a derived identity" class="w-full max-w-5xl mx-auto rounded-lg border-2 border-gray-700/50 shadow-2xl">
    <div class="max-w-4xl mx-auto mt-8 text-gray-300 text-lg leading-relaxed">
        <h3 class="text-2xl font-bold text-white mb-4">The equivalence principle as a derived identity</h3>
        <p>In General Relativity \(m_g \equiv m_i\) is an independent postulate. In WILL it is forced. Both projections rescale the same invariant \(E_0\), so composing the two stretches gives one local energy scale:</p>
        <p class="text-center text-xl font-mono my-3">\(E_{\text{loc}} = \dfrac{E_0}{\beta_Y\,\kappa_X} = \dfrac{E_0}{\sqrt{(1-\beta^2)(1-\kappa^2)}} = \dfrac{E_0}{\tau}\)</p>
        <p>The inertial and gravitational responses share one effective mass \(m_{\text{eff}} = E_0/(\tau c^2)\); every internal energy channel scales by the same \(1/\tau\), so the ratios cancel in every observable — which <em>is</em> composition-independent free fall (Eötvös universality). Hence \(m_g \equiv m_i \equiv m_{\text{eff}}\): what GR posits, WILL delivers as a corollary.</p>
        <p class="paper-ref">Full text: <a href="https://willrg.com/documents/WILL_RG_I.pdf#thm:equivalence">Part I — Equivalence Principle as Derived Identity</a>.</p>
    </div>
</div>

---

<div class="mb-20">
<!-- SLIDE PLACEHOLDER: "Four Ontological Collapses of the Two-Point Law" -->
<div class="slide-placeholder">
    [ Slide placeholder — “Four Ontological Collapses of the Two-Point Law” ]
    <span class="ph-sub">Suggested visual: the two-point Energy-Symmetry Law ΔE(A→B)+ΔE(B→A)=0 collapsing (by forcing r_A=r_B onto one point) into the Lagrangian L, Hamiltonian H, Newton's third law, and the Einstein–Hilbert action.</span>
</div>
<div class="max-w-4xl mx-auto mt-8 text-gray-300 text-lg leading-relaxed">
    <h3 class="text-2xl font-bold text-white mb-4">Classical mechanics as collapses of the two-point law</h3>
    <p>The two-point Energy-Symmetry Law is more fundamental than the standard tools of mechanics. Each appears when the two-point relation \(A\leftrightarrow B\) is collapsed onto a single point — forcing \(r_A=r_B=r\) and then re-introducing, by hand, the structure the collapse discarded.</p>
    <details class="video-dropdown-container mt-4">
        <summary class="will-hero-summary">▶ Lagrangian &amp; Hamiltonian</summary>
        <div class="hero-details text-left p-4 md:p-6 bg-gray-900/50 rounded-lg text-gray-300">
            <p>Collapsing \(\Delta E_{A\to B}=\tfrac12(\kappa_A^2-\kappa_B^2)+\tfrac12(\beta_B^2-\beta_A^2)\) to one point and appending an ad-hoc potential reproduces \(L=\tfrac12 mv^2+\tfrac{GMm}{r}\) and \(H=\tfrac12 mv^2-\tfrac{GMm}{r}\). The two-point law already contains the full energy balance — no separate potential, force law, or action is required.</p>
        </div>
    </details>
    <details class="video-dropdown-container mt-3">
        <summary class="will-hero-summary">▶ Newton's third law</summary>
        <div class="hero-details text-left p-4 md:p-6 bg-gray-900/50 rounded-lg text-gray-300">
            <p>Once collapsed into a potential \(U(\vec r)\) that — to stay empirical — depends only on the relative separation \(\vec r=\vec r_B-\vec r_A\), the chain rule gives \(\vec F_{AB}=-\nabla U\) and \(\vec F_{BA}=+\nabla U\). So \(\vec F_{AB}=-\vec F_{BA}\): equal-and-opposite forces are the signature of any causally balanced, background-independent system.</p>
        </div>
    </details>
    <details class="video-dropdown-container mt-3">
        <summary class="will-hero-summary">▶ Einstein–Hilbert action</summary>
        <div class="hero-details text-left p-4 md:p-6 bg-gray-900/50 rounded-lg text-gray-300">
            <p>\(S_{EH}=\frac{1}{16\pi G}\int R\sqrt{-g}\,d^4x\) compresses relational tension into a local curvature scalar on a posited manifold. Its pieces map onto the relational structure: the 4-volume \(\int\sqrt{-g}\,d^4x \to\) carrier closure; the Ricci scalar \(R \to \kappa^2,\beta^2\); the variation \(\delta S=0 \to\) the Energy-Symmetry Law \(\Delta E_{A\to B}+\Delta E_{B\to A}=0\).</p>
        </div>
    </details>
    <div class="mt-6 text-center text-lg font-semibold text-yellow-300 tracking-wider border-2 border-yellow-500/30 bg-gray-800/50 rounded-xl p-4 inline-block mx-auto block">
        <p>The Lagrangian, Hamiltonian, Newton's third law and the Einstein–Hilbert action are single-point shadows of one two-point law.</p>
    </div>
    <p class="paper-ref">Full text: <a href="https://willrg.com/documents/WILL_RG_I.pdf#sec:classical">Part I — Two-Point Origin of the Lagrangian and Hamiltonian</a>.</p>
</div>
</div>

---

<div class="mb-20">
    <div class="max-w-4xl mx-auto text-gray-300 text-lg leading-relaxed">
        <h3 class="text-2xl font-bold text-white mb-4">Earth–GPS: standard GR as the first-order approximation of RG</h3>
        <p>The daily clock offset between GPS satellites and the ground combines kinematic (SR) and gravitational (GR) effects into one relational factor \(\tau=\beta_Y\kappa_X\). RG composes them <em>multiplicatively</em>; the textbook formula <em>adds</em> them. The additive form is exactly the first-order Taylor coefficient of the RG ratio — proved symbolically and to 40-digit precision.</p>
        <details class="video-dropdown-container mt-4">  
            <summary class="will-hero-summary">▶ Interactive graph: Earth–GPS (Desmos)</summary>  
            <div class="geometry-container hero-details"><div class="desmos-container">  
                <iframe src="https://www.desmos.com/geometry/v6nrtv4vyx" width="100%" height="500" frameborder="0"></iframe>  
            </div></div>  
        </details>
        <details class="video-dropdown-container mt-3">
            <summary class="will-hero-summary">▶ The numbers: RG (exact) vs GR (first order)</summary>
            <div class="hero-details text-left p-4 md:p-6 bg-gray-900/50 rounded-lg text-gray-300">
                <p>RG expresses the shift as the exact ratio \(\Delta t_{\text{RG}} = (1 - \tau_E/\tau_{\text{GPS}})\,D\,M\):</p>
                <div class="font-mono text-sm bg-gray-900/70 p-4 rounded-lg mt-3 space-y-1 overflow-x-auto">
                    <p>\(\Delta t_{\text{RG}}\ (\text{exact}) = 38.5421472752\ \mu s/\text{day}\)</p>
                    <p>\(\Delta t_{\text{GR}}\ (\text{1st order}) = 38.5421472451\ \mu s/\text{day}\)</p>
                    <p>difference \(= 3.0\times10^{-8}\ \mu s/\text{day}\) — the second-order \(\beta^2\kappa^2\) cross-term</p>
                </div>
                <p class="mt-3">The additive GR formula is the unique leading-order content of the multiplicative RG ratio; the cross-term is the genuine discriminator, becoming relevant only as \(\beta^2\) or \(\kappa^2\) approach unity.</p>
            </div>
        </details>
        <p class="paper-ref">Full text and notebook: <a href="https://willrg.com/documents/WILL_RG_I.pdf#sec:earth-gps">Part I — Earth–GPS System</a>.</p>
    </div>
</div>

---

<!-- ════════════════════════════ R.O.M. (the second half — same paper) ════════════════════════════ -->

<div class="text-center my-12">
    <span class="text-sm font-bold tracking-[0.3em] text-cyan-400">STAGE III · THE OPERATIONAL CORE</span>
    <h2 class="text-3xl md:text-4xl font-extrabold text-white mt-2">Relational Orbital Mechanics (R.O.M.)</h2>
    <p class="text-gray-400 mt-3 max-w-3xl mx-auto">R.O.M. is not a separate paper. It is the operational consequence of the same principles applied to bound gravitating systems: a closed algebraic system that classifies the allowed relational states of an orbit with <strong class="text-white">no differential equations, no acceleration term, no \(G\) and no \(M\)</strong>. Everything below derives from \(\beta\), \(\kappa\) and closure \(\kappa^2=2\beta^2\).</p>
    <p class="paper-ref max-w-3xl mx-auto">Full paper: <a href="https://willrg.com/documents/WILL_RG_R.O.M..pdf">R.O.M. — Relational Orbital Mechanics</a> · interactive: <a href="https://www.desmos.com/calculator/n4lmkpsebx">R.O.M. Desmos</a>.</p>
</div>

<div class="mb-16">
<!-- SLIDE PLACEHOLDER: "The Closed Algebraic System of R.O.M." -->
<div class="slide-placeholder">
    [ Slide placeholder — “The Closed Algebraic System of R.O.M.” ]
    <span class="ph-sub">Suggested visual: the core registry — observables (z_κ, z_β, e, θ, T) feeding β, κ, closure κ²=2β², and out the other side R_s, a, Δφ, ρ — as one closed loop with no G or M entering.</span>
</div>
<div class="max-w-4xl mx-auto mt-8 text-gray-300 text-lg leading-relaxed">
    <p>R.O.M. does not describe how a body moves under forces; it classifies the algebraically allowed relational states of a bound system. The whole system is generated from the two operational inputs (the gravitational redshift \(z_\kappa\) and the transverse Doppler shift \(z_\beta\)) and the closure law. The core registry:</p>
    <div class="font-mono text-base bg-gray-900/60 p-5 rounded-lg my-4 space-y-2 overflow-x-auto">
        <p>\(\kappa^2 = 1 - \dfrac{1}{(1+z_\kappa)^2}, \qquad \beta^2 = 1 - \dfrac{1}{(1+z_\beta)^2}\)</p>
        <p>\(\tau = \kappa_X\,\beta_Y = \dfrac{1}{(1+z_\kappa)(1+z_\beta)}, \qquad Q^2 = \kappa^2 + \beta^2, \qquad \kappa^2 = 2\beta^2\)</p>
        <p>\(R_s = \dfrac{Tc}{\pi}\beta^3, \qquad a = \dfrac{R_s}{\kappa^2}, \qquad \rho = \dfrac{\kappa^2 c^2}{8\pi G a^2}\)</p>
        <p>\(\Delta\varphi = \dfrac{2\pi\,\tau_Y^2}{1-e^2}, \qquad e = \dfrac{1}{\delta_p}-1, \qquad \delta = \dfrac{\kappa^2}{2\beta^2}\)</p>
    </div>
    <p class="text-base text-gray-400 italic">Each line is an identity among dimensionless projections; \(G\) and \(M\) appear only at the very end as unit-conversion factors, never as inputs.</p>
    <p class="paper-ref">Full registry: <a href="https://willrg.com/documents/WILL_RG_R.O.M..pdf#eq:rom">R.O.M. — Closed Algebraical System of R.O.M. Equations</a>.</p>
</div>
</div>

<h3 class="text-2xl font-bold text-white text-center mt-12 mb-2">Relational Origin Of —</h3>
<p class="text-center text-gray-400 mb-8 max-w-3xl mx-auto">Each classical orbital law is recovered as a strict algebraic identity of the relational projections, with no force, no acceleration primitive, and no background metric.</p>

<div class="max-w-4xl mx-auto text-gray-300 text-lg leading-relaxed space-y-6">

    <div class="border-l-4 border-cyan-500/40 pl-4 py-2 bg-gray-800/30 rounded-r-lg">
        <h4 class="font-semibold text-white">Spectroscopic shifts — κ and β are observables, not definitions</h4>
        <p>By the Conservation Theorem and self-centering, \(\kappa^2 = 1 - 1/(1+z_\kappa)^2\) and \(\beta^2 = 1 - 1/(1+z_\beta)^2\): the projections are extracted directly from measured gravitational redshift and transverse Doppler shift, independent of \(G\) and \(M\). The single optical observable \(\tau\) carries the complete structural state, \(\tau^2 = 1 - Q^2 + \kappa^2\beta^2\).</p>
        <p class="paper-ref"><a href="https://willrg.com/documents/WILL_RG_R.O.M..pdf#sec:spectroscopic_shift">R.O.M. — Spectroscopic Shifts</a></p>
    </div>

    <div class="border-l-4 border-cyan-500/40 pl-4 py-2 bg-gray-800/30 rounded-r-lg">
        <h4 class="font-semibold text-white">Kepler's Third Law</h4>
        <p>From \(\beta = 2\pi a/cT\) and \(\kappa^2 = R_s/a\), the closure \(\kappa^2 = 2\beta^2\) gives directly \(a^3 = \dfrac{R_s c^2}{8\pi^2}\,T^2\), i.e. \(a \propto T^{2/3}\) — with no mass and no gravitational constant.</p>
        <p class="paper-ref"><a href="https://willrg.com/documents/WILL_RG_R.O.M..pdf#sec:orbital_prop">R.O.M. — Kepler's Third Law</a></p>
    </div>

    <div class="border-l-4 border-cyan-500/40 pl-4 py-2 bg-gray-800/30 rounded-r-lg">
        <h4 class="font-semibold text-white">Eccentricity ≡ closure defect</h4>
        <p>Eccentricity is the projectional deviation from the circular equilibrium \(\delta = 1\): \(\;e = \dfrac{1}{\delta_p} - 1 = \dfrac{2\beta_p^2}{\kappa_p^2} - 1 = 1 - \dfrac{2\beta_a^2}{\kappa_a^2}\), derived from the conservation of the relational projections without forces.</p>
        <p class="text-center font-mono text-base mt-2 text-cyan-300">ECCENTRICITY ≡ CLOSURE DEFECT</p>
        <details class="video-dropdown-container mt-3">
            <summary class="will-hero-summary">▶ Derivation (turning-point balance)</summary>
            <div class="hero-details text-left p-4 md:p-6 bg-gray-900/50 rounded-lg text-gray-300 text-base">
                <p>With \(\beta \propto 1/r\) (angular invariant) and \(\kappa^2 \propto 1/r\), the apoapsis projections map to periapsis as \(\beta_a^2 = \beta_p^2(\tfrac{1-e}{1+e})^2\), \(\kappa_a^2 = \kappa_p^2(\tfrac{1-e}{1+e})\). The binding invariant \(\kappa_p^2-\beta_p^2 = \kappa_a^2-\beta_a^2\) reduces to \(2\beta_p^2 = \kappa_p^2(1+e)\), hence \(\delta_p = \kappa_p^2/2\beta_p^2 = 1/(1+e)\) and \(e = 1/\delta_p - 1\).</p>
            </div>
        </details>
        <p class="paper-ref"><a href="https://willrg.com/documents/WILL_RG_R.O.M..pdf#sec:rel_ecc">R.O.M. — Eccentricity</a></p>
    </div>

    <div class="border-l-4 border-cyan-500/40 pl-4 py-2 bg-gray-800/30 rounded-r-lg">
        <h4 class="font-semibold text-white">Vis-Viva as a Pythagorean identity</h4>
        <p>The Newtonian vis-viva \(v^2/2 - GM/r = -GM/2a\) is replaced by a strict orthogonal sum on the carriers: the local potential projection is the Pythagorean square sum of the radial, transverse and global kinetic projections,</p>
        <p class="text-center font-mono my-2">\(\kappa_o^2(o) = \beta_R^2(o) + \beta_T^2(o) + \beta^2\)</p>
        <p>with the global binding invariant \(\kappa_o^2(o) - \beta_o^2(o) = \beta^2\) constant at every orbital phase.</p>
        <p class="paper-ref"><a href="https://willrg.com/documents/WILL_RG_R.O.M..pdf#sec:vis-viva">R.O.M. — Vis-Viva</a></p>
    </div>

    <div class="border-l-4 border-cyan-500/40 pl-4 py-2 bg-gray-800/30 rounded-r-lg">
        <h4 class="font-semibold text-white">Classical acceleration and angular momentum</h4>
        <p>The radial gradient of the orbital invariant \(\kappa_o^2 - \beta_o^2 = \beta^2\), with \(\kappa_o^2 = R_s/r\), yields \(a_{acc} = -\dfrac{R_s c^2}{2r^2} = -\dfrac{GM}{r^2}\) — Newton's law, with no force primitive. The transverse-projection invariant gives a phase-independent specific angular momentum \(h = R_s c\,\dfrac{\sqrt{1-e^2}}{2\beta}\).</p>
        <p class="paper-ref"><a href="https://willrg.com/documents/WILL_RG_R.O.M..pdf#sec:acceleration">R.O.M. — Classical Acceleration</a> · <a href="https://willrg.com/documents/WILL_RG_R.O.M..pdf#sec:angular_momentum">Angular Momentum</a></p>
    </div>

    <div class="border-l-4 border-cyan-500/40 pl-4 py-2 bg-gray-800/30 rounded-r-lg">
        <h4 class="font-semibold text-white">Orbital precession as phase accumulation</h4>
        <p>Precession is the exact algebraic accumulation of the internal phase divergence over a closed cycle — no perturbation series, no truncation (Mathematical Transparency forbids it):</p>
        <p class="text-center font-mono my-2">\(\Delta\varphi = \dfrac{2\pi\,\tau_Y^2}{1-e^2}, \qquad \tau_Y^2 \equiv 1 - \tau^2 = Q^2 - \kappa^2\beta^2\)</p>
        <p>The cross-coupling \(\kappa^2\beta^2\) is the non-linear interaction between the \(S^1\) and \(S^2\) carriers — the exact term GR's first-order formula omits.</p>
        <p class="paper-ref"><a href="https://willrg.com/documents/WILL_RG_R.O.M..pdf#sec:precession_law">R.O.M. — Orbital Precession as Phase Accumulation</a></p>
    </div>

    <div class="border-l-4 border-cyan-500/40 pl-4 py-2 bg-gray-800/30 rounded-r-lg">
        <h4 class="font-semibold text-white">Dynamic event horizon</h4>
        <p>At total saturation \(\kappa^2 = 1\) (so \(\beta^2 = \tfrac12\), \(\tau \to 0\), \(\tau_Y \to 1\)) a circular orbit precesses by \(\Delta\varphi = 2\pi\) per revolution: the periapsis shifts by a full circle, the trajectory folds onto itself, and forward motion nullifies itself. The horizon is the unitary topological closure of the relational trajectory — not a point of infinite density in a container.</p>
        <p class="paper-ref"><a href="https://willrg.com/documents/WILL_RG_R.O.M..pdf#sec:dynamic_horizon">R.O.M. — Dynamic Event Horizon</a></p>
    </div>

    <div class="border-l-4 border-cyan-500/40 pl-4 py-2 bg-gray-800/30 rounded-r-lg">
        <h4 class="font-semibold text-white">Gravitational deflection and lensing (the factor of 2, exactly)</h4>
        <p>The phase buffer \(\beta_Y\) sets the interaction gradient \(\Gamma(\beta) = \tfrac{1+\beta^2}{2}\): a slow body has a full buffer (\(\Gamma = \tfrac12\)); light exhausts it (\(\beta = 1 \Rightarrow \Gamma = 1\)), absorbing twice the gradient. This yields one exact, expansion-free deflection law for any trajectory, reducing to \(\Delta\gamma = 2\arcsin(\kappa_p^2/\kappa_{Xp}^2)\) for light and to an exact algebraic Einstein ring for lensing.</p>
        <details class="video-dropdown-container mt-3">
            <summary class="will-hero-summary">▶ Unified deflection law and its limits</summary>
            <div class="hero-details text-left p-4 md:p-6 bg-gray-900/50 rounded-lg text-gray-300 text-base">
                <p class="text-center font-mono my-2">\(\Delta\varphi = 2\arcsin\!\left(\dfrac{\kappa_p^2(1+\beta_p^2)}{2\beta_p^2 - \kappa_p^2(1+\beta_p^2)}\right)\)</p>
                <p>Newtonian limit (\(\beta_p \ll 1\)): \(\Delta\varphi \approx \kappa_p^2/\beta_p^2\) (Rutherford scattering). Photonic limit (\(\beta_p = 1\)): resolves exactly to \(\Delta\gamma = 2\arcsin(\kappa_p^2/\kappa_{Xp}^2)\), the factor of 2 emerging as the exhausted phase buffer rather than as an anomaly of null geodesics. Verified in the LAGEOS and lensing notebooks.</p>
            </div>
        </details>
        <p class="paper-ref"><a href="https://willrg.com/documents/WILL_RG_R.O.M..pdf#sec:grav_optics">R.O.M. — Gravitational Deflection and Lensing</a></p>
    </div>

    <div class="border-l-4 border-cyan-500/40 pl-4 py-2 bg-gray-800/30 rounded-r-lg">
        <h4 class="font-semibold text-white">The full Schwarzschild metric</h4>
        <p>The complete Schwarzschild line element is the coordinate-inflated projection of the potential phase \(\kappa_{Xo}\) and the kinematic amplitudes \(\beta_R, \beta_T\): \(\kappa_{Xo}^2 = 1 - R_s/r = -g_{tt}/c^2\), \(\beta_R^2 = (dr/c\,dt)^2\), \(\beta_T^2 = (r\,d\phi/c\,dt)^2\). The same posits that produced the static interval, applied to the full state, reproduce the entire metric.</p>
        <p class="paper-ref"><a href="https://willrg.com/documents/WILL_RG_R.O.M..pdf#sec:Schwarzschild">R.O.M. — Schwarzschild Metric</a></p>
    </div>

</div>

<div class="my-12">
<!-- SLIDE PLACEHOLDER: "Reconstructing absolute scale from dimensionless observables (no G, no M)" -->
<div class="slide-placeholder">
    [ Slide placeholder — “Absolute scale from dimensionless observables (no G, no M)” ]
    <span class="ph-sub">Suggested visual: four observables (e, θ_⊙, T_ratio, z_sun) → algebraic chain → R_s, a, r_p, precession for Mercury, with the recovered R_s matching 2GM/c² to 0.05%; Jupiter shown as the universality check.</span>
</div>
<div class="max-w-4xl mx-auto mt-8 text-gray-300 text-lg leading-relaxed">
    <h3 class="text-2xl font-bold text-white mb-4">Relational parameterization: the system, reconstructed without \(G\) or \(M\)</h3>
    <p>This is the decisive answer to "it is just \(R_s = 2GM/c^2\) in disguise." The complete structural and dynamical parameterization of a bound system — eccentricity \(e\), precession \(\Delta\varphi\), Schwarzschild scale \(R_s\), and semi-major axis \(a\) — is fixed by four dimensionless, cross-cultural observables alone: the eccentricity \(e\), the central body's angular radius \(\theta_\odot\), the orbital cycle ratio \(T/T_\oplus\), and the surface redshift \(z_{\rm sun}\). No mass, no gravitational constant, no metric.</p>

    <div class="border-l-4 border-cyan-500/50 pl-4 py-2 my-5 bg-gray-800/30 rounded-r-lg">
        <h4 class="font-semibold text-white">Mercury, from four numbers</h4>
        <p>The chain yields \(R_{s,\rm RG} \approx 2954.8\,\text{m}\) (GR: \(2GM_\odot/c^2 \approx 2953.33\,\text{m}\), a \(0.0476\%\) discrepancy, within the uncertainty of \(z_{\rm sun}\) and \(\theta_\odot\)), \(a \approx 5.7923\times10^{10}\,\text{m}\), \(r_p \approx 4.6014\times10^{10}\,\text{m}\), and a precession of \(\mathbf{43.015''/century}\) — all without \(M\) or \(G\).</p>
    </div>
    <p>Applying the identical chain to Jupiter (replacing only its period ratio and eccentricity) recovers \(a_J\) to \(0.038\%\), demonstrating this is a universal geometric property of bound systems, not an artefact of the Mercury–Sun proximity. The corollary is exact: because \(e, \Delta\varphi, R_s, a\) close using only dimensionless ratios, <strong class="text-white">\(G\) and \(M\) are translation factors for legacy units</strong>, not fundamental primitives. \(R_s\) does not conceal mass; classical mass is an anthropocentric proxy for the invariant geometric boundary \(R_s\).</p>
    <p class="paper-ref">Full derivation + notebook: <a href="https://willrg.com/documents/WILL_RG_R.O.M..pdf#sec:relational_parameterization">R.O.M. — Relational Parameterization and the Fundamental Primitives</a>.</p>
</div>
</div>

<div class="max-w-4xl mx-auto text-gray-300 text-lg leading-relaxed space-y-6 mb-12">

    <div class="border-l-4 border-cyan-500/40 pl-4 py-2 bg-gray-800/30 rounded-r-lg">
        <h4 class="font-semibold text-white">Time-density invariant and the absolute scale</h4>
        <p>The time-density invariant \(\tau_D = T\sin(\theta)^{3/2} = \sqrt{\pi/G\rho}\) fixes the central density from period and angular radius alone, and at the horizon gives the universal constant \(\tau_{D(\rm limit)}/R_s = 2\sqrt{2}\,\pi/c\) — with \(G\) and \(M\) eradicated from the limiting structure. Four independent algebraic routes (optical-phase, two-point differential, geometric-resonance, instantaneous) determine the absolute system scale \(R_s\) from observables, none of them passing through \(2GM/c^2\).</p>
        <p class="paper-ref"><a href="https://willrg.com/documents/WILL_RG_R.O.M..pdf#sec:time-density">R.O.M. — Time-Density Invariant</a> · <a href="https://willrg.com/documents/WILL_RG_R.O.M..pdf#sec:absolute_scale">Algebraic Determination of Absolute System Scale (Methods A–D)</a></p>
    </div>

    <div class="border-l-4 border-cyan-500/40 pl-4 py-2 bg-gray-800/30 rounded-r-lg">
        <h4 class="font-semibold text-white">Rotation: Kerr without a metric</h4>
        <p>Setting \(\beta = ac^2/GM\) and \(\kappa = \sqrt{2}\,\beta\), the relational carriers reproduce the Kerr structure algebraically: inner/outer horizons \(r_\pm = \tfrac{R_s}{2}(1 \pm \beta_Y)\), merging at the extremal limit \(\beta = 1\) to \(r_{\min} = \tfrac12 R_s\) (the same floor \(\kappa^2 = \kappa_{\max}^2 = 2\) sets), the ergosphere \(r_{\rm ergo} = \tfrac{R_s}{2}(1+\sqrt{1-\beta^2\cos^2\theta})\), and a ring singularity. No naked singularity emerges for \(\beta \le 1\) — cosmic censorship is enforced directly by the Energy-Symmetry Law bounding \(\beta \in [0,1]\).</p>
        <p class="paper-ref"><a href="https://willrg.com/documents/WILL_RG_R.O.M..pdf#sec:Kerr">R.O.M. — Rotational Systems (Kerr Without Metric)</a></p>
    </div>

    <div class="border-l-4 border-cyan-500/40 pl-4 py-2 bg-gray-800/30 rounded-r-lg">
        <h4 class="font-semibold text-white">Frame-dragging as a chiral algebraic asymmetry</h4>
        <p>What GR derives from the off-diagonal \(g_{t\phi}\) metric component, R.O.M. obtains from linear phase superposition on the directed \(S^1\) carrier: the composite \(\beta_\Sigma = \beta_{\rm orb} \pm \beta_{\rm spin}\) under closure produces the symmetry-breaking cross-term \(\pm 4\beta_{\rm orb}\beta_{\rm spin}\), mandating that prograde orbits sit deeper than retrograde. Ablating higher-order terms recovers the post-Newtonian Lense–Thirring node precession exactly; tested against LAGEOS-1 it agrees with observation and GR.</p>
        <p class="paper-ref"><a href="https://willrg.com/documents/WILL_RG_R.O.M..pdf#sec:chiral">R.O.M. — Chiral Asymmetry: The Algebraic Origin of Frame-Dragging</a></p>
    </div>

</div>

<div class="mb-16">
    <img src="{{ site.baseurl }}/images/SLIDES-tinyPNG/18_Empirical-Validation.png" alt="Empirical validation of R.O.M." class="w-full max-w-5xl mx-auto rounded-lg border-2 border-gray-700/50 shadow-2xl">
    <div class="max-w-4xl mx-auto mt-8 text-gray-300 text-lg leading-relaxed">
        <h3 class="text-2xl font-bold text-white mb-4">Mercury's precession: GR 1PN as the first-order approximation of RG</h3>
        <p>Substituting closure and the field relation into the exact precession law gives a closed form whose first term is identically the standard post-Newtonian formula, with a single explicit correction:</p>
        <p class="text-center font-mono my-3 bg-cyan-900/30 border border-cyan-500/50 p-3 rounded-lg">\(\Delta\varphi_{\rm RG} = \underbrace{\dfrac{3\pi R_s}{a(1-e^2)}}_{\text{GR 1PN}} - \dfrac{\pi R_s^2}{a^2(1-e^2)}, \qquad \Delta\varphi_{\rm RG} - \Delta\varphi_{\rm GR} = -\dfrac{2\pi\,\beta^2\kappa^2}{1-e^2}\bigg|_{a}\)</p>
        <p>The GR formula is recovered by a single explicit cancellation, \(\beta^2\kappa^2 \to 0\) in \(\tau_Y^2 = 1-(1-\beta^2)(1-\kappa^2)\). This is an algebraic identity in \((R_s, a, e)\), verified symbolically and to 40-digit precision.</p>
        <details class="video-dropdown-container mt-4">
            <summary class="will-hero-summary">▶ The numbers (Mercury, 40-digit)</summary>
            <div class="hero-details text-left p-4 md:p-6 bg-gray-900/50 rounded-lg text-gray-300 text-base">
                <div class="font-mono text-sm bg-gray-900/70 p-4 rounded-lg space-y-1 overflow-x-auto">
                    <p>\(\Delta\varphi_{\rm RG}\ (\text{exact}) = 42.9807844914''/\text{century}\)</p>
                    <p>\(\Delta\varphi_{\rm GR}\ (\text{1st-order PN}) = 42.9807852220''/\text{century}\)</p>
                    <p>difference \(= -7.306\times10^{-7}\,''/\text{century}\;\equiv\; -\pi R_s^2/[a^2(1-e^2)]\) (residual \(\sim 10^{-41}\) rad)</p>
                </div>
                <p class="mt-3">The omitted second-order term is \(\sim 1.7\times10^{-8}\) of the total — below current perihelion precision. The sign is fixed: RG predicts a slightly smaller precession than first-order PN. (A comparison to fully non-linear Schwarzschild geodesics, which carry their own higher-order terms, is a separate calculation.)</p>
            </div>
        </details>
        <p class="paper-ref">Full verification + notebook: <a href="https://willrg.com/documents/WILL_RG_R.O.M..pdf#sec:mercury">R.O.M. — Mercury's Precession: GR 1PN as First-Order Approximation of RG</a>.</p>
    </div>
</div>

<div class="mb-16">
    <div class="max-w-4xl mx-auto text-gray-300 text-lg leading-relaxed">
        <h3 class="text-2xl font-bold text-white mb-4">The S2 star at Sgr A*: R.O.M. against GR on real data</h3>
        <p>R.O.M. is confronted with the 24-year astrometric and radial-velocity dataset of the S2 star (174 raw observables), against two GR references — a time-linear 1PN pericentre advance and a direct numerical integration of the 1PN equations of motion — all carrying the same nine orbital parameters and zero free precession parameters.</p>
        <p class="mt-3"><strong class="text-white">The honest result:</strong> a bare nine-parameter fit favours R.O.M. by \(\Delta\chi^2 = 80.7\). But a reduced \(\chi^2 \approx 4.4\)–\(4.9\) rejects all three bare models — no published S2 analysis fits absolute sky positions without a reference-frame solution. When the standard linear calibration (frame zero-point, drift, instrument offsets) is granted identically to every model, the gap closes completely: <strong class="text-white">\(\Delta\chi^2 = -0.5\) over 156 degrees of freedom. R.O.M. and General Relativity are statistically indistinguishable on the S2 orbit.</strong></p>
        <details class="video-dropdown-container mt-4">
            <summary class="will-hero-summary">▶ Where the bare-fit difference comes from (injection–recovery)</summary>
            <div class="hero-details text-left p-4 md:p-6 bg-gray-900/50 rounded-lg text-gray-300 text-base">
                <p>Controlled injection shows R.O.M. holds no generic advantage: on clean GR truth it loses, and it loses again when an injected frame drift points in a rotated direction. The full observed advantage is manufactured by injecting a purely instrumental drift into purely GR data — the bare \(\Delta\chi^2\) measures alignment between R.O.M.'s single rigid distortion mode (the phase-locked apsidal advance \(\omega_{\rm shift}=f_{\rm prec}\,O\)) and this dataset's particular frame drift, not relational dynamics. The calibration is not circular: R.O.M.'s own fit independently demands the same frame solution, improving by 500 \(\chi^2\) units when granted it; fitted to clean GR observables, R.O.M. cannot approach the GR trajectory below a \(440\,\mu\text{as}\) floor, so it carries no surplus fitting freedom.</p>
            </div>
        </details>
        <p class="mt-3">At current precision, R.O.M. is observationally equivalent to GR, reached from a closed dimensionless algebra (the advance magnitude matches GR 1PN to \(3\times10^{-5}\); the full scale follows from chronometric and spectroscopic ratios via \(R_s = Tc\beta^3/\pi\)). The genuine departure is of order \(\beta^4\), four orders of magnitude below S2 sensitivity. The falsifiable frontier is therefore not Galactic-Centre orbits but where \(\beta^4\) terms resolve: relativistic pulsar binaries, horizon-scale orbits, and gravitational-wave inspirals.</p>
        <p class="paper-ref">Full analysis + reproduction: <a href="https://willrg.com/documents/WILL_RG_R.O.M..pdf#sec:S2test">R.O.M. — S2 Star (Sgr A*): R.O.M. Against General Relativity and Instrumental Systematics</a>.</p>
    </div>
</div>

<div class="mb-20">
    <div class="max-w-4xl mx-auto text-gray-300 text-lg leading-relaxed">
        <h3 class="text-2xl font-bold text-white mb-4">The three-body L1 point, from observables alone</h3>
        <p>The same algebraic chain locates the Sun–Earth L1 equilibrium point without \(G\), \(M\) or a metric. Enforcing closure and energy symmetry on the synchronous-motion condition yields an exact quintic in the normalised separation \(\alpha = (R_E - R_{L1})/R_E\), whose physical root reproduces the observed Earth–L1 distance \(R_{L1} \approx 1.5\times10^9\,\text{m}\) to better than \(0.3\%\). The chain that recovers Mercury's precession and the S2 orbit also fixes a collinear three-body equilibrium.</p>
        <p class="paper-ref">Full derivation + notebook: <a href="https://willrg.com/documents/WILL_RG_R.O.M..pdf#sec:L1">R.O.M. — Relational Derivation of the L1 Equilibrium Point</a>.</p>
    </div>
</div>

---

<!-- Back to Part I: density / field equation / no singularities -->

<div id="5W" class="mb-20">
    <img src="{{ site.baseurl }}/images/SLIDES-tinyPNG/16_Unified-Field-Equation.png" alt="The unified geometric field equation" class="w-full max-w-5xl mx-auto rounded-lg border-2 border-gray-700/50 shadow-2xl">
    <div class="max-w-4xl mx-auto mt-8 text-gray-300 text-lg leading-relaxed">
        <h3 class="text-2xl font-bold text-white mb-4">Density, the unified field equation, and no singularities</h3>
        <p>Normalizing the potential projection over the unit-sphere area gives the local energy density and its bound at saturation:</p>
        <p class="text-center text-xl font-mono my-3">\(\rho = \dfrac{\kappa^2 c^2}{8\pi G r^2}, \qquad \rho_{\text{max}} = \dfrac{c^2}{8\pi G r^2}\)</p>
        <p>so all of gravitational physics reduces to a single algebraic identity — the ratio of geometric scales equals the ratio of energy densities:</p>
        <div class="font-mono text-xl bg-cyan-900/30 border border-cyan-500/50 p-6 rounded-lg my-6 text-center">
            <p>\(\kappa^2 = \dfrac{R_s}{r} = \dfrac{\rho}{\rho_{\text{max}}}\)</p>
        </div>
        <p>Because density is capped at a finite \(\rho_{\text{max}}\), infinite density is impossible. The static horizon sits at \(\kappa^2 = 1\) (\(r = R_s\)); even the extremal rotating limit only reaches \(r = R_s/2\). The point \(r = 0\) is simply <strong class="text-white">absent</strong> from the admissible relational range — singularities are excluded by construction, not patched over.</p>
        <div class="mt-6 text-center text-lg font-semibold text-yellow-300 tracking-wider border-2 border-yellow-500/30 bg-gray-800/50 rounded-xl p-4 inline-block mx-auto block">
            <p>Density is bounded; the point \(r = 0\) does not exist.</p>
        </div>
        <p class="paper-ref">Full text: <a href="https://willrg.com/documents/WILL_RG_I.pdf#sec:density">Part I — Density, Mass, and Pressure</a> · <a href="https://willrg.com/documents/WILL_RG_I.pdf#sec:no_singularities">No Singularities, No Hidden Regions</a>.</p>
    </div>
</div>

<!-- ════════════════════════════ STAGE IV ════════════════════════════ -->

<div class="text-center my-10">
    <span class="text-sm font-bold tracking-[0.3em] text-cyan-400">STAGE IV</span>
    <h2 class="text-3xl md:text-4xl font-extrabold text-white mt-2">Consequences &amp; Direct Applications</h2>
</div>

<div class="mb-20">
    <img src="{{ site.baseurl }}/images/SLIDES-tinyPNG/17_Theoretical-Ouroboros.png" alt="The theoretical Ouroboros" class="w-full max-w-5xl mx-auto rounded-lg border-2 border-gray-700/50 shadow-2xl">
    <div class="max-w-4xl mx-auto mt-8 text-gray-300 text-lg leading-relaxed">
        <h3 class="text-2xl font-bold text-white mb-4">The Theoretical Ouroboros</h3>
        <p>The single principle, through pure geometry, generated the carriers, the projections, and the laws — and those laws produced a field equation that states exactly the equivalence it began with: the ratio of geometric scales equals the ratio of energy densities.</p>
        <div class="font-mono text-lg bg-gray-900/50 p-4 rounded-lg my-4 text-center text-white">
            <p>SPACETIME ≡ ENERGY \(\;\Longrightarrow\;\) \(\kappa^2 = \dfrac{R_s}{r} = \dfrac{\rho}{\rho_{\text{max}}}\) \(\;\Longrightarrow\;\) SPACETIME ≡ ENERGY</p>
        </div>
        <p class="text-center text-gray-400 italic">The principle is proven as the inevitable consequence of its own geometric consistency. Aesthetic closure aside, the test remains empirical — which is why R.O.M. above is confronted with data, not only with logic.</p>
        <p class="paper-ref">Full text: <a href="https://willrg.com/documents/WILL_RG_I.pdf#sec:ouroboros">Part I — Theoretical Ouroboros</a>.</p>
    </div>
</div>

---

<div class="mb-20">
<!-- SLIDE PLACEHOLDER: "W_ILL = E·T / (M·L) = 1" -->
<div class="slide-placeholder">
    [ Slide placeholder — “W_ILL = E·T / (M·L) = 1, the unity invariant” ]
    <span class="ph-sub">Suggested visual: the four projections (Energy E, Mass M, Time T, Length L) as faces of one structure, combining into the dimensionless ratio E·T/(M·L) that collapses to exactly 1 for every energy, scale and phase.</span>
</div>
<div class="max-w-4xl mx-auto mt-8 text-gray-300 text-lg leading-relaxed">
    <h3 class="text-2xl font-bold text-white mb-4">W<sub>ILL</sub> = 1 — the unity of the projections</h3>
    <p>If there is one relational resource, then mass, energy, time and length are not independent — they are four correlated projections of the same structure. Combining them in the one dimensionless way the carriers permit gives an invariant identically equal to 1 for any closed system, at every energy, scale and orbital phase:</p>
    <div class="font-mono text-2xl bg-cyan-900/30 border border-cyan-500/50 p-6 rounded-lg my-6 text-center">
        <p>\(W_{\text{ILL}} = \dfrac{E\,T}{M\,L} = 1\)</p>
    </div>
    <p>All dimensionful constants cancel automatically; the value is fixed by the geometry of the carriers, not by a choice of units. Equivalently \(E/M = L/T\): the energy sector and the spacetime sector are locked together. Treating energy–mass and space–time as separate blocks is an interpretational approximation; \(W_{\text{ILL}} = 1\) is the precise statement that <span class="font-mono">SPACETIME ≡ ENERGY</span>.</p>
    <details class="video-dropdown-container mt-4">  
        <summary class="will-hero-summary">▶ Interactive: deriving W_ILL = 1 (Desmos)</summary>  
        <div class="geometry-container hero-details"><div class="desmos-container">  
            <iframe src="https://www.desmos.com/calculator/wswnhckrru" width="100%" height="500" frameborder="0"></iframe>  
        </div></div>  
    </details>
    <p class="paper-ref">Full text: <a href="https://willrg.com/documents/WILL_RG_I.pdf#sec:willinvariant">Part I — W<sub>ILL</sub>: Unity of Relational Structure</a>.</p>
</div>
</div>

<div class="max-w-4xl mx-auto my-12 text-center">
    <h3 class="text-xl font-bold text-white">The name "WILL"</h3>
    <p class="mt-2 text-base text-gray-400">
        <strong>WILL</strong> stands for <strong>SPACE–TIME–ENERGY</strong> — both a shorthand and a quiet irony toward the <abbr title="the idea that the laws of physics appear fine-tuned to allow conscious observers">anthropic principle</abbr>. The universe is not a stage where energy acts through time upon space, but a single self-balancing structure whose internal distinctions generate every phenomenon. The cosmos does not possess "will"; yet through WILL it manifests all that is.
    </p>
</div>

---

<div class="mb-16">
    <div class="max-w-4xl mx-auto text-gray-300 text-lg leading-relaxed">
        <h3 class="text-2xl font-bold text-white text-center mb-6">From descriptive to generative physics</h3>
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
                    <tr class="bg-gray-800/50"><td class="p-3 border border-gray-600">Phenomena are observed, then summarized into empirical laws.</td><td class="p-3 border border-gray-600">Laws emerge as inevitable consequences of relational geometry.</td></tr>
                    <tr class="bg-gray-800/50"><td class="p-3 border border-gray-600">Physical laws are assumptions introduced to model reality.</td><td class="p-3 border border-gray-600">Physical laws are identities enforced by geometric self-consistency.</td></tr>
                    <tr class="bg-gray-800/50"><td class="p-3 border border-gray-600">Time and space are external backgrounds.</td><td class="p-3 border border-gray-600">Time and space are projections of energy relations.</td></tr>
                    <tr class="bg-gray-800/50"><td class="p-3 border border-gray-600">Dynamics = evolution of states <em>in</em> time.</td><td class="p-3 border border-gray-600">Dynamics = ordered succession of balanced configurations; time is emergent.</td></tr>
                    <tr class="bg-gray-800/50"><td class="p-3 border border-gray-600">Goal: describe what is observed.</td><td class="p-3 border border-gray-600">Goal: show why nothing else is possible.</td></tr>
                </tbody>
            </table>
        </div>
        <p class="paper-ref">Full text: <a href="https://willrg.com/documents/WILL_RG_I.pdf#sec:generative_physics">Part I — Ontological Shift: From Descriptive to Generative Physics</a>.</p>
    </div>
</div>

---

<div class="mb-16">
    <div class="max-w-4xl mx-auto text-gray-300 text-lg leading-relaxed">
        <h3 class="text-2xl font-bold text-white text-center mb-6">Limitations and Challenges</h3>
        <p>This is open research, and the boundaries are stated plainly.</p>
        <div class="grid md:grid-cols-2 gap-4 mt-6 text-base">
            <div class="border-l-4 border-gray-500 pl-4 py-2 bg-gray-800/30 rounded-r-lg">
                <h4 class="font-semibold text-white">Current limitations</h4>
                <p>Gravitational waves and the full radiative two-body problem are not yet formulated relationally — only conservative, bound orbits are covered. A complete multi-body architecture beyond the collinear L1 case has not been constructed. The author states these are limits of present mathematical facility rather than prohibitions of the ontology, and actively invites collaboration on radiative dynamics and multi-body closures.</p>
            </div>
            <div class="border-l-4 border-cyan-500/50 pl-4 py-2 bg-gray-800/30 rounded-r-lg">
                <h4 class="font-semibold text-white">Falsifiability and future tests</h4>
                <p>The sharpest near-term discriminator is continued high-precision monitoring of the S2 star: RG predicts a true-anomaly-coupled precession phasing that should retain its statistical edge over the time-linear form as GRAVITY+ adds pericentre passages (2026–2028); a statistically significant reversal would falsify the phasing hypothesis. The genuine point of departure is the \(\beta^4\) structure of the closure law, resolved only in relativistic pulsar binaries, horizon-scale orbits, and gravitational-wave inspirals.</p>
            </div>
        </div>
        <p class="paper-ref">Full text: <a href="https://willrg.com/documents/WILL_RG_I.pdf#sec:challenges">Part I — Challenges and Current Limitations</a> · <a href="https://willrg.com/documents/WILL_RG_I.pdf#sec:challenges">Falsifiability and Future Tests</a>.</p>
    </div>
</div>

---

<div class="mb-16">
    <div class="max-w-4xl mx-auto text-gray-300 text-lg leading-relaxed">
        <h3 class="text-2xl font-bold text-white text-center mb-6">Conclusion</h3>
        <p>The entire phenomenology of motion — Keplerian architecture, perihelion precession, light deflection, frame-dragging, the L1 point — emerges as an inevitable algebraic consequence of the four methodological principles, an unbroken chain with zero flexibility. This is not a re-description of General Relativity; it is the irreducible algebraic core that remains when the ontological superstructure of Riemannian geometry and tensor formalism is removed. Within RG:</p>
        <ul class="list-disc list-inside ml-4 mt-3 space-y-2 text-base">
            <li><strong class="text-white">\(G\) and \(M\) are secondary.</strong> All scales follow from dimensionless spectroscopic and chronometric ratios; the gravitational constant and the kilogram appear only as unit conversions.</li>
            <li><strong class="text-white">The metrics are derived.</strong> Minkowski, Schwarzschild and Kerr intervals are Pythagorean identities of the carriers \(S^1\) and \(S^2\), not postulates of a 4D manifold.</li>
            <li><strong class="text-white">Closure replaces the virial theorem.</strong> \(\kappa^2 = 2\beta^2\) is the inevitable consequence of equal budget per degree of freedom.</li>
            <li><strong class="text-white">Precession is topological, not dynamical.</strong> The pericentre advance is the mismatch of internal phase over one cyclic extension, with no geodesic integration.</li>
            <li><strong class="text-white">Singularities are excluded.</strong> The point \(r = 0\) is absent from the admissible relational range.</li>
        </ul>
        <p class="paper-ref">Full text: <a href="https://willrg.com/documents/WILL_RG_I.pdf#trilogy">WILL RG — Conclusion &amp; the Trilogy</a>.</p>
    </div>
</div>

<div class="text-center py-12">
    <h2 class="text-3xl font-bold text-white">The World as a Projection</h2>
    <p class="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">
        This is Part I, with R.O.M. The same projections extend to cosmology (Part II) and quantum mechanics (Part III). The core remains: energy does not exist <em>in</em> spacetime — it <em>creates</em> spacetime by its projection.
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




