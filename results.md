---
layout: default
title: "Documents & Key Results"
description: "Download WILL Relational Geometry research papers and appendices. Key results in unified physics, cosmology, and galactic dynamics."
---

<style>
/* ── Documents page styles ── */
.doc-card {
  background: rgba(31,41,55,0.5);
  border-radius: 0.75rem;
  padding: 1.75rem;
  border-left: 4px solid;
  margin-bottom: 0;
}
.doc-card.part1 { border-color: #3498db; }
.doc-card.part2 { border-color: #8e44ad; }
.doc-card.part3 { border-color: #27ae60; }

.doc-card h3 {
  color: #fff;
  font-size: 1.35rem;
  font-weight: 700;
  margin: 0 0 0.75rem 0;
  border: none;
  padding: 0;
}

.doc-card .summary {
  color: #d1d5db;
  line-height: 1.7;
  margin: 0 0 1rem 0;
}

.doc-card .highlights {
  list-style: none;
  padding: 0;
  margin: 0 0 1.25rem 0;
}
.doc-card .highlights li {
  color: #d1d5db;
  padding: 0.25rem 0 0.25rem 1.25rem;
  position: relative;
  line-height: 1.5;
  font-size: 0.95rem;
}
.doc-card .highlights li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.65rem;
  width: 6px;
  height: 6px;
  border-radius: 50%;
}
.doc-card.part1 .highlights li::before { background: #3498db; }
.doc-card.part2 .highlights li::before { background: #8e44ad; }
.doc-card.part3 .highlights li::before { background: #27ae60; }

.doc-card .meta {
  font-size: 0.85rem;
  color: #6b7280;
  margin-bottom: 1rem;
}

.doc-actions {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.btn-open, .btn-download {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-weight: 600;
  font-size: 0.9rem;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  text-decoration: none !important;
  transition: background-color 0.2s;
}

.btn-open {
  color: #fff;
}
.btn-download {
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.15);
  color: #d1d5db;
}
.btn-download:hover {
  background: rgba(255,255,255,0.1);
  color: #fff;
}

.part1 .btn-open { background: #2563eb; }
.part1 .btn-open:hover { background: #1d4ed8; }
.part2 .btn-open { background: #7e22ce; }
.part2 .btn-open:hover { background: #6b21a8; }
.part3 .btn-open { background: #15803d; }
.part3 .btn-open:hover { background: #166534; }

.supp-card {
  background: rgba(31,41,55,0.35);
  border-radius: 0.5rem;
  padding: 1.25rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
}
.supp-card h4 {
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
  margin: 0 0 0.25rem 0;
  border: none;
  padding: 0;
}
.supp-card p {
  color: #9ca3af;
  font-size: 0.9rem;
  margin: 0;
}
.supp-actions {
  display: flex;
  gap: 0.5rem;
  flex-shrink: 0;
}
.supp-actions a {
  font-size: 0.85rem;
  padding: 0.35rem 0.75rem;
  border-radius: 0.375rem;
  text-decoration: none !important;
  font-weight: 500;
  transition: background-color 0.2s;
}
.supp-link {
  color: #67e8f9 !important;
  background: rgba(103,232,249,0.08);
}
.supp-link:hover {
  background: rgba(103,232,249,0.15);
}
</style>

<!-- ═══════════════════════ HERO ═══════════════════════ -->
<div class="border-b border-gray-700 pb-6 mb-8">
  <h1 class="text-4xl font-extrabold tracking-tight text-white" style="border:none; margin-top:0;">
    Research Documents
  </h1>
  <p class="mt-3 text-lg text-gray-400 font-light" style="max-width:750px;">
    The complete WILL Relational Geometry research in three parts.
    All results derive from the single principle
    <strong style="color:#e5e7eb;">SPACETIME &equiv; ENERGY</strong>
    and the closure condition&nbsp;\(\kappa^{2}=2\beta^{2}\),
    without free parameters.
  </p>
</div>


<!-- ═══════════════════════ DOCUMENT CARDS ═══════════════════════ -->
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem; margin-bottom: 3rem;">

<!-- ── Part I ── -->
<div class="doc-card part1">
  <h3>Part I: Relativistic Foundations</h3>
  <p class="summary">
    A relational rediscovery of Special and General Relativity from the
    SPACETIME&nbsp;&equiv;&nbsp;ENERGY principle. Derives Lorentz factors,
    energy-momentum relations, Schwarzschild geometry, and Einstein field
    equations using only two dimensionless projections: \(\beta\)&nbsp;(kinematic)
    and \(\kappa\)&nbsp;(potential) &mdash; without metrics, tensors, or free
    parameters.
  </p>
  <ul class="highlights">
    <li>Singularity-free gravity via bounded density
      \(\rho_{\max}=c^{2}/(8\pi G r^{2})\)</li>
    <li>Equivalence of inertial and gravitational mass derived, not postulated</li>
    <li>All GR critical surfaces (photon sphere, ISCO, horizons)
      emerge as simple \((\kappa,\beta)\) fractions</li>
    <li>Closed-form Relational Orbital Mechanics without \(G\), mass,
      or differential formalism</li>
  </ul>
  <p class="meta">69 pages &middot; Complete</p>
  <div class="doc-actions">
    <a href="/documents/WILL_RG_I.pdf" target="_blank" class="btn-open">
      Open PDF
    </a>
    <a href="/documents/WILL_RG_I.pdf" download class="btn-download">
      Download
    </a>
  </div>
</div>

<!-- ── Part II ── -->
<div class="doc-card part2">
  <h3>Part II: Cosmological Dark Sector</h3>
  <p class="summary">
    Applies Relational Geometry to cosmology and galactic dynamics.
    With zero free parameters, builds an unbroken derivation chain from
    first principles to observational data across 20&nbsp;orders of magnitude,
    replacing the &ldquo;dark sector&rdquo; paradigm with transparent
    geometric ontology.
  </p>
  <ul class="highlights">
    <li>Hubble parameter \(H_0\approx 68.15\) km/s/Mpc derived from CMB
      temperature and \(\alpha\) &mdash; within 1% of Planck&nbsp;2018</li>
    <li>Supernova flux residuals &lt;&thinsp;0.015&nbsp;mag across full
      Pantheon+ range</li>
    <li>CMB acoustic spectrum and low-quadrupole anomaly resolved
      via \(S^2\) topology</li>
    <li>Galactic rotation curves for 175 SPARC galaxies without fitting</li>
    <li>Wide binary anomaly and dark lensing explained geometrically</li>
  </ul>
  <p class="meta">41 pages &middot; In progress</p>
  <div class="doc-actions">
    <a href="/documents/WILL_RG_II.pdf" target="_blank" class="btn-open">
      Open PDF
    </a>
    <a href="/documents/WILL_RG_II.pdf" download class="btn-download">
      Download
    </a>
  </div>
</div>

<!-- ── Part III ── -->
<div class="doc-card part3">
  <h3>Part III: Relational Quantum Mechanics</h3>
  <p class="summary">
    Derives the complete hydrogen atom structure from geometric and
    topological closure alone. Quantization emerges as an inevitable
    consequence of relational self-consistency &mdash; not as a separate
    postulate. No classical force analogues, probabilistic wavefunctions,
    or differential equations are used.
  </p>
  <ul class="highlights">
    <li>Bohr radius and quantized energy levels from first principles</li>
    <li>Fine-structure constant \(\alpha\) identified as
      the ground-state kinematic projection \(\beta_1\)</li>
    <li>Sommerfeld&ndash;Dirac fine-structure formula derived geometrically</li>
    <li>Spin and Pauli exclusion as topological chirality of \(S^1\) winding</li>
  </ul>
  <p class="meta">30 pages &middot; In progress</p>
  <div class="doc-actions">
    <a href="/documents/WILL_RG_III.pdf" target="_blank" class="btn-open">
      Open PDF
    </a>
    <a href="/documents/WILL_RG_III.pdf" download class="btn-download">
      Download
    </a>
  </div>
</div>

</div>


<!-- ═══════════════════════ SUPPLEMENTARY ═══════════════════════ -->
<h2 class="text-2xl font-bold text-white" style="border:none; margin-bottom:1.25rem;">
  Supplementary Documents
</h2>


  <div class="supp-card">
    <div>
      <h4>LOGOS MAP</h4>
      <p>Logical structure and derivation flow of the framework</p>
    </div>
    <div class="supp-actions">
      <a href="/documents/WILL_RG_LOGOS_MAP.pdf" target="_blank" class="supp-link">Open</a>
      <a href="/documents/WILL_RG_LOGOS_MAP.pdf" download class="supp-link">Download</a>
    </div>
  </div>

  <div class="supp-card">
    <div>
      <h4>In Silico Precession Prediction of S4716</h4>
      <p>Orbital precession calculation for the S4716 star</p>
    </div>
    <div class="supp-actions">
      <a href="/documents/Precession_of_S4716.pdf" target="_blank" class="supp-link">Open</a>
      <a href="/documents/Precession_of_S4716.pdf" download class="supp-link">Download</a>
    </div>
  </div>



<!-- ═══════════════════════ NOTEBOOKS ═══════════════════════ -->
<hr style="border-color:#374151; margin:3rem 0;">

<div class="flex justify-between items-end mb-10">
    <h2 class="text-3xl font-extrabold text-white" style="border:none; margin:0;">
      Reproducible Notebooks
    </h2>
    <a href="https://github.com/AntonRize/WILL/tree/main/Colab_Notebooks" target="_blank" class="text-sm text-cyan-400 hover:text-cyan-300 border border-gray-600 px-3 py-1 rounded hover:border-cyan-400 transition-colors">
        View Source Folder &rarr;
    </a>
</div>

<div id="notebook-grid" style="display:grid; grid-template-columns:repeat(auto-fit,minmax(280px,1fr)); gap:1.5rem;">
    <p class="text-gray-400">Loading notebooks from GitHub...</p>
</div>

<script>
document.addEventListener("DOMContentLoaded", function() {
    const repoOwner = 'AntonRize';
    const repoName = 'WILL';
    const folderPath = 'Colab_Notebooks';
    const branch = 'main'; 

    // GitHub API endpoint
    const apiUrl = `https://api.github.com/repos/${repoOwner}/${repoName}/contents/${folderPath}?ref=${branch}`;

    const container = document.getElementById('notebook-grid');

    fetch(apiUrl)
    .then(response => {
        if (!response.ok) throw new Error('Network response was not ok');
        return response.json();
    })
    .then(data => {
        // Cleaning container from "Loading..."
        container.innerHTML = '';

        // Filter only .ipynb files
        const notebooks = data.filter(item => item.name.endsWith('.ipynb'));

        notebooks.forEach(file => {
            // 1. Forming clear name
            const displayName = file.name.replace('.ipynb', '').replace(/_/g, ' ');

            // 2. Link for opening in Colab
            // Format: https://colab.research.google.com/github/USER/REPO/blob/BRANCH/PATH
            const colabUrl = `https://colab.research.google.com/github/${repoOwner}/${repoName}/blob/${branch}/${folderPath}/${file.name}`;

            // 3. Creating HTML for cards (same style)
            const cardHTML = `
                <div class="bg-gray-800/50 p-6 rounded-lg flex flex-col justify-between h-full border border-transparent hover:border-gray-600 transition-all">
                    <div>
                        <h4 style="font-size:1.15em; margin-bottom:0.5rem; line-height:1.4;">${displayName}</h4>
                        <p style="margin-bottom:1rem; color:#9ca3af; font-size: 0.9em;">
                           Interactive Notebook
                        </p>
                    </div>
                    <div class="flex gap-4 mt-auto">
                        <a href="${colabUrl}" target="_blank" class="text-cyan-400 hover:text-cyan-200 font-bold text-sm flex items-center gap-1">
                           <span style="font-size:1.2em">▶</span> Run in Colab
                        </a>
                        <a href="${file.html_url}" target="_blank" class="text-gray-500 hover:text-gray-300 text-sm flex items-center">
                           GitHub
                        </a>
                    </div>
                </div>
            `;
            
            // Pasting card
            container.insertAdjacentHTML('beforeend', cardHTML);
        });
    })
    .catch(error => {
        console.error('Error fetching notebooks:', error);
        container.innerHTML = `<p class="text-red-400">Failed to load notebooks via API. <a href="https://github.com/${repoOwner}/${repoName}/tree/${branch}/${folderPath}" class="underline">View on GitHub</a></p>`;
    });
});
</script>




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
  <a href="/Galactic_Dynamics/" class="supp-card" style="text-decoration:none;">
    <div>
      <h4>Galactic Dynamics</h4>
      <p>SPARC dataset interactive lab</p>
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
