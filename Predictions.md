---
layout: default
title: "Predictions"
permalink: /predictions/
toc: false
---

<div class="markdown-content">

<p>This page aggregates reproducible numerical checks of WILL predictions. Each item links to a runnable notebook (and static HTML) and, where available, an interactive demo.</p>
<p>Minimal standard: fixed Python environment, explicit inputs, a single evaluation metric, and a clear falsifiability clause.</p>

<hr style="border-color: #374151; margin: 2rem 0;">

<h2 style="font-size: 1.75em; border-bottom: none; margin-top: 1.5em;">Interactive Labs</h2>

<div style="margin-top: 1.5rem;">
    <h3 style="font-size: 1.25em;">1) Galaxy RC Lab — SPARC rotation curves</h3>
    <p><strong>Headline metric:</strong> median RMSE ≈ <strong>20 km/s</strong> over ~175 galaxies.</p>
    <p><strong>Try it:</strong> <a href="{{ site.baseurl }}/calculator/">Open the calculator</a></p>
    <div style="background-color: #1f2937; border-left: 4px solid #f39c12; padding: 0.5rem 1rem; margin-top: 1rem; border-radius: 4px;">
        <p><strong>Falsify if:</strong> With fixed data-selection rules on SPARC, median RMSE exceeds <strong>50 km/s</strong> for <strong>≥ 70%</strong> of the sample.</p>
    </div>
</div>

<hr style="border-color: #374151; margin: 2rem 0; border-style: dashed;">

<div style="margin-top: 1.5rem;">
    <h3 style="font-size: 1.25em;">2) Cosmo-2-Input Lab — background cosmology</h3>
    <p><strong>Headline metric:</strong> \(\Omega_\Lambda = 2/3\), \(\Omega_m = 1/3\) (no free parameters).</p>
    <p><strong>Try it:</strong> <a href="{{ site.baseurl }}/2-input-cosmology.html">Open the 2-input cosmology tool</a></p>
    <div style="background-color: #1f2937; border-left: 4px solid #f39c12; padding: 0.5rem 1rem; margin-top: 1rem; border-radius: 4px;">
        <p><strong>Falsify if:</strong> For a fixed \(H_0\), predicted \(\{\Omega_\Lambda, \Omega_m, t_0\}\) systematically fall outside consolidated observational bounds.</p>
    </div>
</div>

<hr style="border-color: #374151; margin: 2rem 0; border-style: dashed;">

<div style="margin-top: 1.5rem;">
    <h3 style="font-size: 1.25em;">3) GPS Relativity Lab — orbital slider (planned)</h3>
    <p><strong>Headline metrics at GPS altitude:</strong> time offset ≈ <strong>38.52 μs/day</strong>; <strong>Energy symmetry = 0</strong>; \(W_{ill} = 1\).</p>
    <p><strong>Planned demo:</strong> orbit-radius slider with real-time display of \(\beta, \kappa, Q, Q_t\), daily \(\Delta t\), energy-symmetry residual, and \(W_{ill}\) deviation.</p>
    <div style="background-color: #1f2937; border-left: 4px solid #f39c12; padding: 0.5rem 1rem; margin-top: 1rem; border-radius: 4px;">
        <p><strong>Falsify if:</strong> For the GPS preset with current orbital parameters, \(|\Delta t_{pred} - \Delta t_{emp}| > 1\%\), or energy-symmetry residual exceeds tolerance, or \(|W_{ill}-1|\) exceeds tolerance.</p>
    </div>
</div>

<hr style="border-color: #374151; margin: 2rem 0;">

<h2 style="font-size: 1.75em; border-bottom: none; margin-top: 1.5em;">Reproducible Notebooks & Static Views</h2>

<div style="margin-top: 1.5rem;">
    <h3 style="font-size: 1.25em;">A) Galaxy rotation curves — √3 law (SPARC)</h3>
    <ul style="list-style-type: disc; margin-left: 20px; padding-left: 1em;">
        <li><strong>Notebook:</strong> <a href="{{ site.baseurl }}/Colab%20Notebooks/V_QWILL_=_sqrt(3)_V_bary.ipynb">V_QWILL_=_sqrt(3)_V_bary.ipynb</a></li>
        <li><strong>HTML:</strong> <a href="{{ site.baseurl }}/Colab%20Notebooks/V_QWILL_=_sqrt(3)_V_bary.html">V_QWILL_=_sqrt(3)_V_bary.html</a></li>
        <li><strong>Metric:</strong> median RMSE ≈ <strong>20.3 km/s</strong> over ~175 galaxies</li>
        <li><strong>Falsify if:</strong> with fixed rules, median RMSE > <strong>50 km/s</strong> for <strong>≥ 70%</strong> of SPARC.</li>
    </ul>
</div>

<hr style="border-color: #374151; margin: 2rem 0; border-style: dashed;">

<div style="margin-top: 1.5rem;">
    <h3 style="font-size: 1.25em;">B) GPS time dilation, Energy Symmetry, WILL invariant; Mercury precession; S2 star</h3>
     <ul style="list-style-type: disc; margin-left: 20px; padding-left: 1em;">
        <li><strong>Notebook:</strong> <a href="{{ site.baseurl }}/Colab%20Notebooks/GPS%20TIME%20+PRECESSION%20OF%20MERCURY+PRECESSION%20OF%20S2%20STAR+CONSERVATION%20LAW+RELATIVISTIC%20CORRECTION.ipynb">GPS…RELATIVISTIC CORRECTION.ipynb</a></li>
        <li><strong>HTML:</strong> <a href="{{ site.baseurl }}/Colab%20Notebooks/GPS%20TIME%20+PRECESSION%20OF%20MERCURY+PRECESSION%20OF%20S2%20STAR+CONSERVATION%20LAW+RELATIVISTIC%20CORRECTION.html">GPS…RELATIVISTIC CORRECTION.html</a></li>
        <li><strong>Metrics (GPS altitude):</strong> \(\Delta t\) ≈ <strong>38.52 μs/day</strong>; <strong>Energy symmetry = 0</strong>; \(W_{ill} = 1\)</li>
        <li><strong>Metric (Mercury):</strong> perihelion precession within <strong>≤ 1%</strong> of observed</li>
        <li><strong>Metric (S2):</strong> pericenter precession ≈ <strong>0.2015°/orbit</strong></li>
    </ul>
</div>

<hr style="border-color: #374151; margin: 2rem 0; border-style: dashed;">

<div style="margin-top: 1.5rem;">
    <h3 style="font-size: 1.25em;">C) Cosmology from \(\kappa^2 = 2/3\)</h3>
     <ul style="list-style-type: disc; margin-left: 20px; padding-left: 1em;">
        <li><strong>Notebook:</strong> <a href="{{ site.baseurl }}/Colab%20Notebooks/WILL_Geometry_COSMO_%E2%80%93_scale_derivation_from_%CE%BA%C2%B2_=_2_3_.ipynb">WILL_Geometry_COSMO_…_κ²_=_2_3_.ipynb</a></li>
        <li><strong>HTML:</strong> <a href="{{ site.baseurl }}/Colab%20Notebooks/WILL_Geometry_COSMO_%E2%80%93_scale_derivation_from_%CE%BA%C2%B2_=_2_3_.html">WILL_Geometry_COSMO_…_κ²_=_2_3_.html</a></li>
        <li><strong>Outputs:</strong> \(\Omega_\Lambda = 2/3\), \(\Omega_m = 1/3\), age \(t_0 \approx 14.53\) Gyr</li>
        <li><strong>Falsify if:</strong> predictions systematically fall outside consolidated observational bounds for a fixed \(H_0\).</li>
    </ul>
</div>

<hr style="border-color: #374151; margin: 2rem 0;">

<h2 style="font-size: 1.75em; border-bottom: none; margin-top: 1.5em;">Methods & Data</h2>
<ul style="list-style-type: disc; margin-left: 20px; padding-left: 1em;">
    <li><strong>Verification Protocol:</strong> <a href="{{ site.baseurl }}/protocols/verification/">Read the protocol</a></li>
    <li><strong>Environment:</strong> <a href="{{ site.baseurl }}/env/requirements.txt">View requirements.txt</a> (pinned versions)</li>
    <li><strong>Data licensing:</strong> public datasets; cite original sources</li>
    <li><strong>Versioning:</strong> commits tied to validations</li>
</ul>

</div>
