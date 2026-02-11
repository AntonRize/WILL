---
layout: default
title: "Predictions"
permalink: /predictions/
toc: false
description: "Testable predictions of the WILL Relational Geometry framework — falsifiable experiments in gravitational physics, cosmology, and quantum mechanics."
---

<style>
/* ── Predictions page styles ── */
.pred-card {
  background: rgba(31,41,55,0.5);
  border-radius: 0.75rem;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  border-left: 4px solid;
}
.pred-card.cosmo  { border-color: #c084fc; }
.pred-card.rel    { border-color: #67e8f9; }
.pred-card.quant  { border-color: #f59e0b; }

.pred-card h3 {
  color: #fff;
  font-size: 1.25rem;
  font-weight: 700;
  margin: 0 0 0.75rem 0;
  border: none;
  padding: 0;
}

.pred-card p {
  color: #d1d5db;
  line-height: 1.7;
  margin: 0.5rem 0;
}

.eq-box {
  background: rgba(17,24,39,0.7);
  border: 1px solid #374151;
  border-radius: 0.5rem;
  padding: 1rem 1.5rem;
  margin: 1rem 0;
  overflow-x: auto;
}

.result-tag {
  display: inline-block;
  background: rgba(16,185,129,0.1);
  border: 1px solid rgba(16,185,129,0.3);
  border-radius: 0.375rem;
  padding: 0.2rem 0.65rem;
  color: #6ee7b7;
  font-weight: 600;
  font-size: 0.95rem;
}

.doc-ref {
  font-size: 0.85rem;
  color: #6b7280;
  margin-top: 0.75rem;
  font-style: italic;
}

.deriv-link {
  display: inline-block;
  background: rgba(59,130,246,0.1);
  border: 1px solid rgba(59,130,246,0.3);
  border-radius: 0.375rem;
  padding: 0.25rem 0.7rem;
  color: #93c5fd;
  font-size: 0.85rem;
  font-weight: 600;
  text-decoration: none;
  margin-top: 0.5rem;
  transition: background 0.2s, border-color 0.2s;
}
.deriv-link:hover {
  background: rgba(59,130,246,0.25);
  border-color: rgba(59,130,246,0.6);
  color: #bfdbfe;
  text-decoration: none;
}

.section-head {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding-bottom: 0.75rem;
  margin-top: 2.5rem;
  margin-bottom: 1.75rem;
}
.section-head.cosmo  { border-bottom: 2px solid #c084fc; }
.section-head.rel    { border-bottom: 2px solid #67e8f9; }
.section-head.quant  { border-bottom: 2px solid #f59e0b; }

.section-head h2 {
  margin: 0 !important;
  padding: 0 !important;
  border: none !important;
  font-size: 1.75rem;
}
.section-head.cosmo  h2 { color: #c084fc; }
.section-head.rel    h2 { color: #67e8f9; }
.section-head.quant  h2 { color: #f59e0b; }

.section-head .badge {
  font-size: 0.8rem;
  padding: 0.15rem 0.6rem;
  border-radius: 9999px;
  font-weight: 600;
  white-space: nowrap;
}
.badge.cosmo  { background: rgba(192,132,252,0.15); color: #c084fc; }
.badge.rel    { background: rgba(103,232,249,0.15); color: #67e8f9; }
.badge.quant  { background: rgba(245,158,11,0.15);  color: #f59e0b; }
</style>


<!-- ═══════════════════════ HERO ═══════════════════════ -->
<div class="border-b border-gray-700 pb-6 mb-6">
  <h1 class="text-4xl font-extrabold tracking-tight text-white" style="border:none; margin-top:0;">
    Testable Predictions
  </h1>
  <p class="mt-3 text-lg text-gray-400 font-light" style="max-width:750px;">
    WILL Relational Geometry derives quantitative, falsifiable predictions across
    cosmology, gravitation, and quantum mechanics&mdash;all from the single closure
    condition&nbsp;\(\kappa^{2}=2\beta^{2}\) and without free parameters.
    Every result below is linked to its derivation, an interactive lab, or a
    runnable notebook.
  </p>
</div>


<!-- ═══════════════════════ 1. COSMOLOGICAL ═══════════════════════ -->
<div class="section-head cosmo">
  <h2>1. Cosmological Predictions</h2>
  <span class="badge cosmo">6 predictions</span>
</div>


<!-- 1a ── Hubble Parameter ── -->
<div class="pred-card cosmo">
  <h3>a. Derivation of the Hubble Parameter \(H_0\)</h3>

  <p>
    WILL RG derives \(H_0\) solely from the CMB temperature \(T_0\) and the
    fine-structure constant \(\alpha\), bridging microphysical constants with
    cosmic expansion.
  </p>

  <p>Radiation energy density:</p>
  <div class="eq-box">
    $$\rho_\gamma \;=\; \frac{4\,\sigma_{\mathrm{SB}}\,T_0^{\,4}}{c^{3}}$$
  </div>

  <p>Maximum geometric density, set by the EM coupling limit:</p>
  <div class="eq-box">
    $$\rho_{\max} \;=\; \frac{\rho_\gamma}{3\,\alpha^{2}}$$
  </div>

  <p>Hubble parameter from first principles:</p>
  <div class="eq-box">
    $$H_0 \;=\; \sqrt{8\pi\,G\,\rho_{\max}}$$
  </div>

  <p>
    <span class="result-tag">\(H_0 \approx 68.15\;\mathrm{km\,s^{-1}\,Mpc^{-1}}\)</span>
    &mdash; within 1% of Planck 2018 (\(67.4\pm0.5\)).
  </p>
  <p class="doc-ref">Part II &mdash; &ldquo;Deriving \(H_0\) from CMB Temperature and \(\alpha\)&rdquo;</p>
  <a class="deriv-link" href="{{ site.baseurl }}/documents/WILL_RG_II.pdf#sec:deriving-H0" target="_blank">&#128196; Open derivation in Part&nbsp;II</a>
</div>


<!-- 1b ── Supernova Flux ── -->
<div class="pred-card cosmo">
  <h3>b. Distant Supernova Flux Levels</h3>

  <p>
    WILL RG predicts the cosmic expansion history with fixed geometric density
    parameters derived from topological energy partitioning:
  </p>
  <div class="eq-box">
    $$\Omega_m = \tfrac{1}{3},\qquad \Omega_\Lambda = \tfrac{2}{3}$$
  </div>

  <p>Theoretical distance modulus:</p>
  <div class="eq-box">
    $$\mu_{\mathrm{WILL}}(z) \;=\;
    5\log_{10}\!\left(
      \frac{c\,(1+z)}{H_0}
      \int_{0}^{z}
      \frac{dz'}{\sqrt{\tfrac{1}{3}(1+z')^{3}+\tfrac{2}{3}}}
    \right)+25$$
  </div>

  <p>
    <span class="result-tag">Residuals &lt; 0.015 mag</span> across the full
    Pantheon+ redshift range.
  </p>
  <p class="doc-ref">Part II &mdash; &ldquo;Geometric Expansion Law: Distant Supernova Flux Levels Test&rdquo;</p>
  <a class="deriv-link" href="{{ site.baseurl }}/documents/WILL_RG_II.pdf#sec:supernova-flux" target="_blank">&#128196; Open derivation in Part&nbsp;II</a>
</div>


<!-- 1c ── CMB Acoustic Spectrum ── -->
<div class="pred-card cosmo">
  <h3>c. CMB Acoustic Spectrum</h3>

  <p>
    The CMB acoustic spectrum emerges as resonant harmonics of an \(S^{2}\)
    topology loaded by baryons. The first acoustic peak position follows from
    vacuum stiffness and baryonic mass loading alone:
  </p>
  <div class="eq-box">
    $$\ell_{\mathrm{pred}}(\mathrm{WILL}) \;=\;
    \ell_{\mathrm{vac}}\,
    \frac{\Omega_\Lambda}{\Omega_\Lambda + \Omega_{\mathrm{bary}}}
    \;\approx\; 220.59$$
  </div>

  <p>
    <span class="result-tag">\(\ell_{\mathrm{obs}}\approx 220.60\)</span>
    &mdash; agreement within ~0.01%, offers an alternative explanation &ldquo;missing mass&rdquo;
    without invoking dark matter.
 
  </p>
  <p class="doc-ref">Part II &mdash; &ldquo;Geometric Origin of the CMB Acoustic Spectrum&rdquo;</p>
  <a class="deriv-link" href="{{ site.baseurl }}/documents/WILL_RG_II.pdf#sec:cmb-acoustic" target="_blank">&#128196; Open derivation in Part&nbsp;II</a>
</div>


<!-- 1d ── Low Quadrupole ── -->
<div class="pred-card cosmo">
  <h3>d. Resolution of the Low Quadrupole Anomaly</h3>

  <p>
    Vacuum tension acts as a geometric high-pass filter, naturally suppressing
    the largest angular scales. The predicted quadrupole power:
  </p>
  <div class="eq-box">
    $$P(\ell\!=\!2) \;\propto\;
    \left(\frac{1}{1 + R_{\mathrm{eff}}\,\lambda_2}\right)^{2},
    \qquad \lambda_2 = 6$$
  </div>

  <p>
    Predicted corridor:
    <span class="result-tag">0.132 &ndash; 0.285</span>
    &nbsp;|&nbsp; Planck observation:
    <span class="result-tag">\(D_{\ell=2}\approx 0.20\)</span>
    &mdash; falls within the WILL RG corridor.
  </p>
  <p class="doc-ref">Part II &mdash; &ldquo;Resolution of the Low Quadrupole Anomaly&rdquo;</p>
  <a class="deriv-link" href="{{ site.baseurl }}/documents/WILL_RG_II.pdf#sec:low-quadrupole" target="_blank">&#128196; Open derivation in Part&nbsp;II</a>
</div>


<!-- 1e ── Galactic Rotation ── -->
<div class="pred-card cosmo">
  <h3>e. Galactic Rotation Curves &amp; Radial Acceleration Relation</h3>

  <p>
    Rotation curves and the RAR follow from a single, theoretically fixed
    acceleration scale linked to the cosmic horizon:
  </p>
  <div class="eq-box">
    $$V_{\mathrm{RG}}(r) \;=\; \sqrt{V_b^{2}(r) \;+\; \sqrt{V_b^{2}(r)\;\cdot\; a_\kappa\, r}},
    \qquad
    a_\kappa = \frac{c\,H_0}{3\pi}\approx 0.70\times10^{-10}\;\mathrm{m\,s^{-2}}$$
  </div>

  <p>
    Tested on the SPARC database (175&nbsp;galaxies) with
    <strong>zero fitting parameters</strong>.
    <span class="result-tag">Median RMSE &asymp; 12.64 km/s</span>
    &mdash; comparable to or exceeding MOND, with near-zero systematic bias.
  </p>
  <p class="doc-ref">Part II &mdash; &ldquo;Galactic Dynamics: The Law of Resonant Interference&rdquo; and &ldquo;The Universal RAR&rdquo;</p>
  <a class="deriv-link" href="{{ site.baseurl }}/documents/WILL_RG_II.pdf#sec:galactic-dynamics" target="_blank">&#128196; Open derivation in Part&nbsp;II</a>
</div>


<!-- 1f ── Wide Binaries ── -->
<div class="pred-card cosmo">
  <h3>f. Wide Binary Stars</h3>

  <p>
    Wide binary systems couple to the horizon via a distinct <em>kinematic</em>
    resonance channel, predicting a boost factor different from the
    galactic (structural) one:
  </p>
  <div class="eq-box">
    $$\gamma_{\mathrm{WILL}} \;=\; 1 + \frac{a_\beta}{g_N},
    \qquad
    a_\beta = \frac{c\,H_0}{6\pi}\approx 0.35\times10^{-10}\;\mathrm{m\,s^{-2}}$$
  </div>

  <p>
    <span class="result-tag">Matches Gaia DR3</span> observational data,
    offering an explanation to the wide-binary anomaly that challenges standard MOND.
  </p>
  <p class="doc-ref">Part II &mdash; &ldquo;The Kinetic Resonance: Potential explanation of the Wide Binary Anomaly&rdquo;</p>
  <a class="deriv-link" href="{{ site.baseurl }}/documents/WILL_RG_II.pdf#sec:wide-binary" target="_blank">&#128196; Open derivation in Part&nbsp;II</a>
</div>


<!-- ═══════════════════════ 2. RELATIVISTIC ═══════════════════════ -->
<div class="section-head rel">
  <h2>2. Relativistic &amp; Gravitational Predictions</h2>
  <span class="badge rel">4 predictions</span>
</div>


<!-- 2a ── Singularities ── -->
<div class="pred-card rel">
  <h3>a. Suggesting resolution of GR Singularities</h3>

  <p>
    WILL RG imposes a natural, geometry-derived upper bound on energy density,
    desolving black-hole singularities:
  </p>
  <div class="eq-box">
    $$\rho_{\max} \;=\; \frac{c^{2}}{8\pi\,G\,r^{2}}$$
  </div>

  <p>
    Black holes become
    <span class="result-tag">energetically saturated, non-singular regions</span>.
  </p>
  <p class="doc-ref">Part I &mdash; &ldquo;No Singularities, No Hidden Regions&rdquo;</p>
  <a class="deriv-link" href="{{ site.baseurl }}/documents/WILL_RG_I.pdf#sec:No Singularities" target="_blank">&#128196; Open derivation in Part&nbsp;I</a>
</div>


<!-- 2b ── Equivalence Principle ── -->
<div class="pred-card rel">
  <h3>b. Derivation of the Equivalence Principle</h3>

  <p>
    The equality of gravitational and inertial mass is not postulated but
    <em>derived</em> as a structural identity from relational compositional
    closure:
  </p>
  <div class="eq-box">
    $$E_{\mathrm{loc}} \;=\;
    \frac{E_0}{\beta_Y\,\kappa_X}
    \;=\; \frac{E_0}{\sqrt{1-\beta^{2}}\;\sqrt{1-\kappa^{2}}}$$
  </div>

  <p>
    <span class="result-tag">\(m_g \equiv m_i \equiv m_{\mathrm{eff}}\)</span>
    follows necessarily from the unified scaling of invariant rest energy
    \(E_0\).
  </p>
  <p class="doc-ref">Part I &mdash; Theorem &ldquo;Equivalence of Inertial and Gravitational Response&rdquo;</p>
  <a class="deriv-link" href="{{ site.baseurl }}/documents/WILL_RG_I.pdf#thm:equivalence" target="_blank">&#128196; Open derivation in Part&nbsp;I</a>
</div>


<!-- 2c ── Perihelion Precession ── -->
<div class="pred-card rel">
  <h3>c. Perihelion Precession</h3>

  <p>
    The precession formula emerges algebraically from the ratio of gravitational
    and kinematic projections at periapsis&mdash;no mass no G no differential equations or
    metric tensors required:
  </p>
  <div class="eq-box">
    $$\Delta\varphi \;=\; \frac{3\pi}{2}\,\frac{\kappa_p^{\,4}}{\beta_p^{\,2}}$$
  </div>

  <p>
    Accurately predicts
    <span class="result-tag">Mercury&rsquo;s 43&Prime;/century</span>
    observed precession for star&nbsp;S2.
  </p>
  <p class="doc-ref">Part I &mdash; &ldquo;The Universal Precession Law: Derivation via \(Q_a\)&rdquo;</p>
  <a class="deriv-link" href="{{ site.baseurl }}/documents/WILL_RG_I.pdf#eq:precession_law" target="_blank">&#128196; Open derivation in Part&nbsp;I</a>
</div>


<!-- 2d ── Factor of 2 ── -->
<div class="pred-card rel">
  <h3>d. Factor of 2 in Gravitational Lensing &amp; Shapiro Delay</h3>

  <p>
    Light (\(\beta=1\), \(\beta_Y=0\)) concentrates its entire transformation
    resource on a single geometric axis, removing the 1/2 partitioning factor
    that applies to massive bodies:
  </p>
  <div class="eq-box">
    $$\Phi_\gamma = \kappa^{2}\,c^{2},
    \qquad\qquad
    \Phi_{\mathrm{mass}} = \tfrac{1}{2}\,\kappa^{2}\,c^{2}$$
  </div>

  <p>
    <span class="result-tag">Factor of 2 explained geometrically</span>
    &mdash; no ad-hoc doubling needed.
  </p>
  <p class="doc-ref">Part I &mdash; &ldquo;Single-Axis Energy Transfer and the Nature of Light&rdquo;</p>
  <a class="deriv-link" href="{{ site.baseurl }}/documents/WILL_RG_I.pdf#sec:nature of light" target="_blank">&#128196; Open derivation in Part&nbsp;I</a>
</div>


<!-- ═══════════════════════ 3. QUANTUM ═══════════════════════ -->
<div class="section-head quant">
  <h2>3. Quantum Mechanical Predictions</h2>
  <span class="badge quant">5 predictions</span>
</div>


<!-- 3a ── Atomic Structure ── -->
<div class="pred-card quant">
  <h3>a. Quantized Atomic Radii &amp; Energy Levels</h3>

  <p>
    From topological closure (\(n\lambda_n = 2\pi r_n\)), the Universal Scale
    Principle, and the Geometric Closure Condition (\(\kappa_q^{2}=2\beta_q^{2}\)),
    the Bohr radius and quantized energy levels are derived without force
    analogues or wavefunctions:
  </p>
  <div class="eq-box">
    $$r_n \;=\; \frac{4\pi\varepsilon_0\,n^{2}\hbar^{2}}{m_e\,e^{2}}$$
  </div>
  <div class="eq-box">
    $$E_n \;=\; -\,\frac{\alpha^{2}\,m_e\,c^{2}}{2\,n^{2}}$$
  </div>

  <p>
    <span class="result-tag">Reproduces standard QM results</span>
    from purely geometric principles.
  </p>
  <p class="doc-ref">Part III &mdash; &ldquo;Derivation of Atomic Structure from First Principles&rdquo;</p>
  <a class="deriv-link" href="{{ site.baseurl }}/documents/WILL_RG_III.pdf#sec:atomic-structure" target="_blank">&#128196; Open derivation in Part&nbsp;III</a>
</div>


<!-- 3b ── Fine Structure Constant ── -->
<div class="pred-card quant">
  <h3>b. The Fine Structure Constant \(\alpha\)</h3>

  <p>
    The fine-structure constant is derived as the kinetic projection of the
    electron in the hydrogen ground state&mdash;not an empirical input but the
    unique kinematic amplitude compatible with geometric closure:
  </p>
  <div class="eq-box">
    $$\alpha \;\equiv\; \beta_1$$
  </div>

  <p>
    <span class="result-tag">\(\alpha\) derived, not assumed</span>
    &mdash; establishes it as the ground-state kinematic projection of a
    charged fermion.
  </p>
  <p class="doc-ref">Part III &mdash; &ldquo;The Geometric Origin of the Fine Structure Constant&rdquo;</p>
  <a class="deriv-link" href="{{ site.baseurl }}/documents/WILL_RG_III.pdf#sec:fine-structure-constant" target="_blank">&#128196; Open derivation in Part&nbsp;III</a>
</div>


<!-- 3c ── Sommerfeld-Dirac ── -->
<div class="pred-card quant">
  <h3>c. Unified Relativistic Energy Formula (Fine Structure)</h3>

  <p>
    The total relativistic energy formula, numerically identical to the
    Sommerfeld&ndash;Dirac result, arises from circular geometric closure in
    phase space:
  </p>
  <div class="eq-box">
    $$E_{n,j} \;=\; m_e\,c^{2}\,
    \sqrt{1 + \left(\frac{Z\alpha}{n_{\mathrm{eff}}}\right)^{\!2}},
    \qquad
    n_{\mathrm{eff}} = (n-k)+\sqrt{k^{2}-(Z\alpha)^{2}}$$
  </div>

  <p>
    <span class="result-tag">Matches Sommerfeld&ndash;Dirac exactly</span>
    &mdash; derived from geometry, not abstract spinor equations.
  </p>
  <p class="doc-ref">Part III &mdash; Theorem &ldquo;The Unified Relativistic Energy Formula&rdquo;</p>
  <a class="deriv-link" href="{{ site.baseurl }}/documents/WILL_RG_III.pdf#thm:unified-energy" target="_blank">&#128196; Open derivation in Part&nbsp;III</a>
</div>


<!-- 3d ── Spin & Exclusion ── -->
<div class="pred-card quant">
  <h3>d. Geometric Origin of Spin &amp; Pauli Exclusion</h3>

  <p>
    <strong>Spin</strong> is the topological chirality of the standing wave&rsquo;s
    phase integration: right-handed (\(+\tfrac{1}{2}\)) and left-handed
    (\(-\tfrac{1}{2}\)) winding on \(S^{1}\).
  </p>
  <p>
    The <strong>Pauli Exclusion Principle</strong> follows from the Principle of
    Unique Address: co-located energy flows must differ in at least one geometric
    invariant. With \((n,k,m)\) fixed, chirality is the only remaining degree of
    freedom.
  </p>

  <p>
    <span class="result-tag">Two electrons per orbital&mdash;derived, not postulated</span>.
  </p>
  <p class="doc-ref">Part III &mdash; &ldquo;The Geometric Origin of Spin and Exclusion&rdquo;</p>
  <a class="deriv-link" href="{{ site.baseurl }}/documents/WILL_RG_III.pdf#sec:spin-exclusion" target="_blank">&#128196; Open derivation in Part&nbsp;III</a>
</div>


<!-- 3e ── Uncertainty ── -->
<div class="pred-card quant">
  <h3>e. Geometric Uncertainty Principle</h3>

  <p>
    The uncertainty principle is a geometric necessity from the closure of
    energy projection on \(S^{1}\). For orthogonal projections
    \(\Delta\beta_X\) and \(\Delta\beta_Y\):
  </p>
  <div class="eq-box">
    $$\Delta\beta_X\;\Delta\beta_Y \;\ge\;
    \frac{1}{2}\,\lvert\sin 2\theta\rvert\,(2\pi/n)^{2}$$
  </div>

  <p>
    Calibrated to physical observables this yields the Heisenberg relation,
    with <span class="result-tag">\(\Delta x\cdot\Delta p\approx\hbar\)</span>
    &mdash; reinterpreting \(\hbar\) as a conversion factor for topological
    winding.
  </p>
  <p class="doc-ref">Part III &mdash; &ldquo;Geometric Origin of the Uncertainty Principle&rdquo;</p>
  <a class="deriv-link" href="{{ site.baseurl }}/documents/WILL_RG_III.pdf#sec:geometric_uncertainty" target="_blank">&#128196; Open derivation in Part&nbsp;III</a>
</div>


<!-- ═══════════════════════ INTERACTIVE LABS ═══════════════════════ -->
<hr style="border-color:#374151; margin:3rem 0;">

<h2 class="text-3xl font-extrabold text-white text-center" style="border:none; margin-bottom:2.5rem;">
  Interactive Labs
</h2>

<p style="font-size:1.05em; text-align:center; max-width:700px; margin:0 auto 2rem auto; color:#9ca3af;">
  Run the predictions yourself. Each lab links to its derivation above and
  includes a clear falsifiability clause.
</p>


<!-- Lab 1 ── Galactic Dynamics ── -->
<div class="bg-gray-800/50 p-6 rounded-lg border-l-4" style="border-color:#3498db; margin-bottom:2rem;">
  <h3 style="color:#fff; font-size:1.5em; margin-bottom:1rem;">1) Galactic Dynamics Lab &mdash; SPARC rotation curves</h3>
  <p style="margin-bottom:1rem; line-height:1.6;">
    <strong>Headline metric:</strong> median RMSE &asymp; <strong>12.64&nbsp;km/s</strong> over ~175 galaxies.
  </p>
  <a href="{{ site.baseurl }}/Galactic_Dynamics/"
     class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-block"
     style="text-decoration:none; margin-bottom:1.5rem;">
    Open the Galactic Dynamics tool
  </a>
  <div class="bg-gray-900/70 border border-amber-500/50 rounded-md p-4" style="margin-top:1rem;">
    <p style="font-weight:bold; color:#f59e0b; margin-bottom:0.5rem;">Falsification Clause</p>
    <p style="color:#d1d5db;">
      If, with fixed data-selection rules on the SPARC dataset, the median
      RMSE exceeds <strong>50&nbsp;km/s</strong> for
      <strong>&ge;&nbsp;25%</strong> of the sample, the prediction is
      considered falsified.
    </p>
  </div>
</div>


<!-- Lab 2 ── ROM ── -->
<div class="bg-gray-800/50 p-6 rounded-lg border-l-4" style="border-color:#616ec4; margin-bottom:2rem;">
  <h3 style="color:#fff; font-size:1.5em; margin-bottom:1rem;">2) Relational Orbital Mechanics Lab</h3>
  <p style="margin-bottom:1rem; line-height:1.6;">
    <strong>Headline metric:</strong> all observable orbital structure follows
    from directly measurable light-frequency projections&mdash;no mass or \(G\)
    required.
  </p>
  <a href="{{ site.baseurl }}/ROM/"
     class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-block"
     style="text-decoration:none; margin-bottom:1.5rem;">
    Open the R.O.M. tool
  </a>
  <div class="bg-gray-900/70 border border-amber-500/50 rounded-md p-4" style="margin-top:1rem;">
    <p style="font-weight:bold; color:#f59e0b; margin-bottom:0.5rem;">Falsification Clause</p>
    <p style="color:#d1d5db;">
      If, with accurate input data, <strong>disagreement with observations
      &gt;&nbsp;5%</strong>, the prediction is considered falsified.
    </p>
  </div>
</div>



<!-- Lab 3 ── Relativistic Time Offset ── -->
<div class="bg-gray-800/50 p-6 rounded-lg border-l-4" style="border-color:#27ae60; margin-bottom:2rem;">
  <h3 style="color:#fff; font-size:1.5em; margin-bottom:0.5rem;">3) Relativistic Time Offset Lab</h3>
  <p class="muted" style="color:#a3b1c2; margin-bottom:1rem;">
    Primary calculation: the daily relativistic time offset between a surface
    observer and an orbiting body. Secondary check: classical energy consistency.
    Object-agnostic&mdash;applies to any circular orbit.
  </p>

  <!-- Controls + Results -->
  <div class="flex flex-wrap gap-8 mb-8">
    <div class="flex-1 min-w-[250px]">
      <div>
        <label for="mass-input" class="block mb-2" style="color:#d1d5db;">Object Mass (kg):</label>
        <input type="number" id="mass-input" value="600"
               class="w-full bg-gray-900 border border-gray-600 text-white p-2 rounded">
      </div>
      <div class="mt-4">
        <label for="radius-slider" class="block mb-2" style="color:#d1d5db;">
          Orbital Radius: <span id="radius-label" class="font-bold"></span>&nbsp;km
        </label>
        <input type="range" id="radius-slider" min="6771" max="1600000"
               value="26600" step="100" class="w-full">
      </div>
    </div>

    <div class="flex-1 min-w-[250px] flex flex-col justify-center">
      <p class="mb-3">Presets:</p>
      <div class="grid grid-cols-2 gap-2">
        <button id="btn-iss"  class="preset-btn bg-gray-600 hover:bg-gray-700 text-white py-2 px-3 rounded text-sm">ISS</button>
        <button id="btn-gps"  class="preset-btn bg-blue-600 hover:bg-blue-700 text-white py-2 px-3 rounded text-sm">GPS</button>
        <button id="btn-jwst" class="preset-btn bg-purple-600 hover:bg-purple-700 text-white py-2 px-3 rounded text-sm">JWST</button>
        <button id="btn-moon" class="preset-btn bg-yellow-600 hover:bg-yellow-700 text-white py-2 px-3 rounded text-sm">Moon</button>
      </div>
    </div>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 bg-gray-900 p-4 rounded-lg">
    <div class="text-center">
      <p class="text-sm text-gray-400">&Delta;t per day (&mu;s)</p>
      <p id="delta-t-val" class="text-2xl font-bold text-cyan-400">--</p>
    </div>
    <div class="text-center">
      <p class="text-sm text-gray-400">Geometric Energy (&Delta;E)</p>
      <p id="dE_val" class="text-2xl font-bold text-violet-400">--</p>
    </div>
    <div class="text-center">
      <p class="text-sm text-gray-400">Normalized Physical Energy</p>
      <p id="Enorm_val" class="text-2xl font-bold text-amber-400">--</p>
    </div>
    <div class="text-center">
      <p class="text-sm text-gray-400">Energy Ratio</p>
      <p id="ratio_val" class="text-2xl font-bold text-green-400">--</p>
    </div>
  </div>

  <!-- Calculation breakdown -->
  <div class="mt-4">
    <details class="bg-gray-900/50 p-4 rounded-md">
      <summary class="font-semibold text-cyan-400 cursor-pointer">Show Calculation Breakdown</summary>
      <div class="mt-4 pt-4 border-t border-gray-700 text-sm space-y-3">

        <div>
          <h4 class="font-bold text-white mb-1">1) Define projections</h4>
          <p class="text-gray-300">
            Gravitational projection at the surface \(A\):
            \(\kappa_A^2 = \frac{2GM}{R_A c^2}\).<br>
            Gravitational projection at the orbit \(B\) (radius \(r\)):
            \(\kappa_B^2 = \frac{2GM}{r\,c^2}\).<br>
            Kinematic projection for a circular orbit at \(B\): from
            \(v^2 = GM/r\) we get
            \(\beta_B^2 = \frac{v^2}{c^2} = \frac{GM}{r\,c^2}\).
            On the surface we take \(\beta_A^2 = 0\).
          </p>
        </div>

        <div>
          <h4 class="font-bold text-white mb-1">2) Combine into \(Q^2\) and \(Q_t\)</h4>
          <p class="text-gray-300">
            \(Q^2 = \kappa^2 + \beta^2\). Thus
            \(Q_A^2 = \kappa_A^2 + \beta_A^2\) and
            \(Q_B^2 = \kappa_B^2 + \beta_B^2\).<br>
            The time-axis complement is \(Q_t = \sqrt{1 - Q^2}\).
          </p>
        </div>

        <div>
          <h4 class="font-bold text-white mb-1">3) Time offset (core result)</h4>
          <p class="text-gray-300">
            Daily clock difference in microseconds per day:
            \(\Delta t_{B\to A}[\mu s/\text{day}] =
            \bigl(1 - \frac{Q_{tA}}{Q_{tB}}\bigr)\times 86400\times 10^6\).
          </p>
        </div>

        <div>
          <h4 class="font-bold text-white mb-1">4) Classical energy consistency</h4>
          <p class="text-gray-300">
            Fix the potential zero at the surface \(R_A\). For a circular orbit
            at radius \(r\):<br>
            Potential:
            \(E_p = \bigl(-\frac{GMm}{r}\bigr) - \bigl(-\frac{GMm}{R_A}\bigr)\).<br>
            Kinetic: \(E_k = \frac{1}{2}mv^2\) with \(v^2 = GM/r\).<br>
            Total: \(E_{tot} = E_p + E_k\). Normalize by \(mc^2\) to get
            \(E_{tot}/(mc^2)\).<br>
            Geometric energy (mass-independent):
            \(\Delta E_{A\to B} = \frac{1}{2}\bigl[(\kappa_A^2-\kappa_B^2)+(\beta_B^2-\beta_A^2)\bigr]\).<br>
            Consistency: \(\frac{E_{tot}/(mc^2)}{\Delta E_{A\to B}} = 1\).
          </p>
        </div>

      </div>
    </details>
  </div>
</div>

<script>
/* Lab 4: Relativistic Time Offset calculator */
document.addEventListener('DOMContentLoaded', () => {
  const massInput   = document.getElementById('mass-input');
  const slider      = document.getElementById('radius-slider');
  const radiusLabel = document.getElementById('radius-label');

  const deltaTVal = document.getElementById('delta-t-val');
  const dE_val    = document.getElementById('dE_val');
  const Enorm_val = document.getElementById('Enorm_val');
  const ratio_val = document.getElementById('ratio_val');

  const btnIss  = document.getElementById('btn-iss');
  const btnGps  = document.getElementById('btn-gps');
  const btnJwst = document.getElementById('btn-jwst');
  const btnMoon = document.getElementById('btn-moon');

  const G  = 6.67430e-11;
  const M  = 5.97219e24;
  const R_A = 6371000;
  const c  = 299792458;
  const GM = G * M;
  const seconds_per_day = 86400;

  const presets = {
    iss:  { mass: 450000,   radius: 6786   },
    gps:  { mass: 600,      radius: 26600  },
    jwst: { mass: 6161,     radius: 1500000},
    moon: { mass: 7.347e22, radius: 384748 }
  };

  function calculate(r_km, mass_obj) {
    const r_m = r_km * 1000;
    const v = Math.sqrt(GM / r_m);
    const beta_sq_B  = (v / c) ** 2;
    const beta_sq_A  = 0;
    const kappa_sq_A = (2 * GM) / (R_A * c ** 2);
    const kappa_sq_B = (2 * GM) / (r_m * c ** 2);

    const grav_part = (1 / Math.sqrt(1 - kappa_sq_A)) - (1 / Math.sqrt(1 - kappa_sq_B));
    const kin_part  = (1 / Math.sqrt(1 - beta_sq_B)) - 1;
    const delta_t_us_per_day = (grav_part - kin_part) * seconds_per_day * 1e6;

    const delta_E_geom = 0.5 * ((kappa_sq_A - kappa_sq_B) + (beta_sq_B - beta_sq_A));

    const E_potential = (-GM * mass_obj / r_m) - (-GM * mass_obj / R_A);
    const E_kinetic   = 0.5 * mass_obj * v ** 2;
    const E_total     = E_potential + E_kinetic;
    const E_rest      = mass_obj * c ** 2;
    const E_norm      = (E_rest > 0) ? (E_total / E_rest) : 0;
    const final_ratio = (delta_E_geom !== 0) ? (E_norm / delta_E_geom) : 0;

    return { delta_t_us_per_day, delta_E_geom, E_norm, final_ratio };
  }

  function updateUI() {
    const r_km  = parseFloat(slider.value);
    const m_obj = parseFloat(massInput.value);
    if (isNaN(r_km) || isNaN(m_obj) || m_obj <= 0) return;

    radiusLabel.textContent = Math.round(r_km).toLocaleString();

    const { delta_t_us_per_day, delta_E_geom, E_norm, final_ratio } =
      calculate(r_km, m_obj);

    deltaTVal.textContent = delta_t_us_per_day.toFixed(2);
    dE_val.textContent    = delta_E_geom.toExponential(4);
    Enorm_val.textContent = E_norm.toExponential(4);
    ratio_val.textContent = final_ratio.toFixed(8);
  }

  function setPreset(preset) {
    massInput.value = preset.mass;
    slider.value    = preset.radius;
    updateUI();
  }

  slider.addEventListener('input', updateUI);
  massInput.addEventListener('input', updateUI);
  btnIss.addEventListener('click',  () => setPreset(presets.iss));
  btnGps.addEventListener('click',  () => setPreset(presets.gps));
  btnJwst.addEventListener('click', () => setPreset(presets.jwst));
  btnMoon.addEventListener('click', () => setPreset(presets.moon));

  setPreset(presets.gps);
});
</script>


<!-- ═══════════════════════ NOTEBOOKS ═══════════════════════ -->
<hr style="border-color:#374151; margin:3rem 0;">

<h2 class="text-3xl font-extrabold text-white text-center" style="border:none; margin-bottom:2.5rem;">
  Reproducible Notebooks
</h2>

<div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(280px,1fr)); gap:1.5rem;">

  <div class="bg-gray-800/50 p-6 rounded-lg">
    <h4 style="font-size:1.25em; margin-bottom:1rem;">A) Galaxy Rotation Curves</h4>
    <p style="margin-bottom:1rem; color:#d1d5db;">Metric: median RMSE &asymp; <strong>12.64&nbsp;km/s</strong></p>
    <a href="{{ site.baseurl }}/Colab_Notebooks/Galactic_Rotation_Protocol_Independent_SPARC.ipynb"
       class="text-cyan-400 hover:text-cyan-300">Notebook</a>
  </div>

  <div class="bg-gray-800/50 p-6 rounded-lg">
    <h4 style="font-size:1.25em; margin-bottom:1rem;">B) Relativistic Tests</h4>
    <p style="margin-bottom:1rem; color:#d1d5db;">Metrics: GPS, Mercury &amp; S2 precession</p>
    <a href="{{ site.baseurl }}/Colab_Notebooks/WILL-relativistic-tests-gps-mercury-s2.ipynb"
       class="text-cyan-400 hover:text-cyan-300">Notebook</a>
  </div>

  <div class="bg-gray-800/50 p-6 rounded-lg">
    <h4 style="font-size:1.25em; margin-bottom:1rem;">C) Derivation of \(H_0\)</h4>
    <p style="margin-bottom:1rem; color:#d1d5db;">
      Metric: Planck 2018 empirical measurement
    </p>
    <a href="{{ site.baseurl }}/Colab_Notebooks/H_0_from_T_CMB_and_alpha.ipynb"
       class="text-cyan-400 hover:text-cyan-300">Notebook</a>
  </div>

  <div class="bg-gray-800/50 p-6 rounded-lg">
    <h4 style="font-size:1.25em; margin-bottom:1rem;">D) Absolute Scale Cosmology</h4>
    <p style="margin-bottom:1rem; color:#d1d5db;">
      Cosmological scale metric predictions, tests, and demonstrations
    </p>
    <a href="{{ site.baseurl }}/Colab_Notebooks/WILL_Geometry_absolute_scale_cosmology.ipynb"
       class="text-cyan-400 hover:text-cyan-300">Notebook</a>
  </div>

</div>
