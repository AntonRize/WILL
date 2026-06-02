---
---
layout: default
title: "Documents & Key Results"
description: "Download WILL Relational Geometry Open Research papers, appendices, technical documents and all reproducible python scripts."
---

<style>
/* Keep your existing styles + add these small improvements */
.doc-card {
  background: rgba(31,41,55,0.5);
  border-radius: 0.75rem;
  padding: 1.5rem;
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
  margin: 0 0 0.5rem 0;
  border: none;
  padding: 0;
}

.doc-card .summary {
  color: #d1d5db;
  line-height: 1.6;
  margin: 0;
  font-size: 0.95rem;
}

.part-header {
  background: rgba(31,41,55,0.6);
  border-radius: 0.75rem;
  padding: 1.25rem 1.5rem;
  border-left: 5px solid;
  margin-bottom: 1.5rem;
}
.part-header.part1 { border-color: #3498db; }
.part-header.part2 { border-color: #8e44ad; }
.part-header.part3 { border-color: #27ae60; }

.part-header h2 {
  margin: 0 0 0.35rem 0;
  font-size: 1.5rem;
  color: #fff;
}

.document-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1rem;
}

.document-item {
  background: rgba(31,41,55,0.4);
  border-radius: 0.5rem;
  padding: 1rem 1.25rem;
  border: 1px solid rgba(255,255,255,0.08);
  transition: all 0.2s ease;
}
.document-item:hover {
  border-color: rgba(255,255,255,0.2);
  background: rgba(31,41,55,0.6);
}

.document-item.main {
  border-color: rgba(52, 152, 219, 0.4);
  background: rgba(52, 152, 219, 0.08);
}

.document-item h4 {
  color: #fff;
  font-size: 1.05rem;
  margin: 0 0 0.35rem 0;
  font-weight: 600;
}

.document-item p {
  color: #9ca3af;
  font-size: 0.9rem;
  margin: 0 0 0.75rem 0;
  line-height: 1.5;
}

.document-actions {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.document-actions a {
  font-size: 0.8rem;
  padding: 0.3rem 0.7rem;
  border-radius: 0.375rem;
  text-decoration: none;
  font-weight: 500;
  transition: background-color 0.2s;
}

.btn-main {
  background: #2563eb;
  color: white !important;
}
.btn-main:hover { background: #1d4ed8; }

.btn-supplement {
  background: rgba(255,255,255,0.06);
  color: #d1d5db !important;
  border: 1px solid rgba(255,255,255,0.15);
}
.btn-supplement:hover {
  background: rgba(255,255,255,0.12);
  color: #fff !important;
}
</style>

<!-- Hero (keep as is) -->
<div class="border-b border-gray-700 pb-6 mb-8">
  <h1 class="text-4xl font-extrabold tracking-tight text-white" style="border:none; margin-top:0;">
    Research Documents
  </h1>
  <p class="mt-3 text-lg text-gray-400 font-light" style="max-width:750px;">
    The complete WILL Relational Geometry research in three parts.
    All results derive from the foundational methodological principles
    <strong style="color:#e5e7eb;">Epistemic Hygiene</strong>,
    <strong style="color:#e5e7eb;">Ontological Minimalism</strong> and
    <strong style="color:#e5e7eb;">Relational Origin</strong>.
  </p>
</div>

<!-- ═════════════ COMPACT PART HEADERS ═════════════ -->
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.25rem; margin-bottom: 3rem;">

  <!-- Part I Header -->
  <div class="doc-card part1">
    <h3>Part I: Relational Geometry</h3>
    <p class="summary">Foundational ontology and derivation of Special & General Relativity as limit cases of relational geometry.</p>
    <a href="#part1-documents" class="btn-open" style="display:inline-block; margin-top:0.75rem; padding:0.4rem 1rem; font-size:0.85rem;">
      Browse Documents ↓
    </a>
  </div>

  <!-- Part II Header -->
  <div class="doc-card part2">
    <h3>Part II: Relational Cosmology</h3>
    <p class="summary">Application of Relational Geometry to galactic dynamics and cosmology across 20 orders of magnitude.</p>
    <a href="#part2-documents" class="btn-open" style="display:inline-block; margin-top:0.75rem; padding:0.4rem 1rem; font-size:0.85rem; background:#7e22ce;">
      Browse Documents ↓
    </a>
  </div>

  <!-- Part III Header -->
  <div class="doc-card part3">
    <h3>Part III: Relational Quantum Mechanics</h3>
    <p class="summary">Derivation of quantum structure from geometric and topological closure alone.</p>
    <a href="#part3-documents" class="btn-open" style="display:inline-block; margin-top:0.75rem; padding:0.4rem 1rem; font-size:0.85rem; background:#15803d;">
      Browse Documents ↓
    </a>
  </div>

</div>

<!-- ═════════════ PART I DOCUMENTS ═════════════ -->
<h2 id="part1-documents" class="text-2xl font-bold text-white mb-4" style="border:none;">Part I: Relational Geometry</h2>

<div class="document-grid">

  <!-- Main Paper -->
  <div class="document-item main">
    <h4>WILL Part I: Relational Geometry</h4>
    <p>Core foundational paper. Derives SR & GR as special cases of relational geometry from first principles.</p>
    <div class="document-actions">
      <a href="/documents/WILL_RG_I.pdf" target="_blank" class="btn-main">Open PDF</a>
      <a href="/documents/WILL_RG_I.pdf" download class="btn-supplement">Download</a>
    </div>
  </div>

  <!-- R.O.M. -->
  <div class="document-item">
    <h4>R.O.M. — Relational Orbital Mechanics</h4>
    <p>Closed algebraic system for bound gravitational orbits. No differential equations or acceleration term required.</p>
    <div class="document-actions">
      <a href="/documents/WILL_RG_R.O.M..pdf" target="_blank" class="btn-main">Open PDF</a>
      <a href="/documents/WILL_RG_R.O.M..pdf" download class="btn-supplement">Download</a>
    </div>
  </div>

  <!-- Holographic Decoder -->
  <div class="document-item">
    <h4>Holographic Decoder</h4>
    <p>Breaks the \(M \sin i\) degeneracy in radial velocity and astrometric data using relational invariants.</p>
    <div class="document-actions">
      <a href="/documents/Holographic_Decoder.pdf" target="_blank" class="btn-main">Open PDF</a>
      <a href="/documents/Holographic_Decoder.pdf" download class="btn-supplement">Download</a>
    </div>
  </div>

</div>

<!-- ═════════════ PART II DOCUMENTS ═════════════ -->
<h2 id="part2-documents" class="text-2xl font-bold text-white mt-10 mb-4" style="border:none;">Part II: Relational Cosmology</h2>

<div class="document-grid">
  <div class="document-item" style="border-color: #8e44ad; background: rgba(142, 68, 173, 0.08);">
    <h4 style="color:#c084fc;">Main Paper — In Active Development</h4>
    <p>Full cosmological derivation including Hubble parameter, supernova residuals, CMB spectrum, and galactic rotation curves from first principles.</p>
    <p style="color:#9ca3af; font-size:0.85rem; margin-top:0.5rem;">Expected: 2026 Q3</p>
  </div>
</div>

<!-- ═════════════ PART III DOCUMENTS ═════════════ -->
<h2 id="part3-documents" class="text-2xl font-bold text-white mt-10 mb-4" style="border:none;">Part III: Relational Quantum Mechanics</h2>

<div class="document-grid">
  <div class="document-item" style="border-color: #15803d; background: rgba(21, 128, 61, 0.08);">
    <h4 style="color:#4ade80;">Main Paper — In Active Development</h4>
    <p>Derivation of the hydrogen atom, fine structure, and spin from geometric closure on the relational carriers.</p>
    <p style="color:#9ca3af; font-size:0.85rem; margin-top:0.5rem;">Expected: 2026 Q4</p>
  </div>
</div>

<!-- Notebooks + Explore Further sections stay exactly as they are -->


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
