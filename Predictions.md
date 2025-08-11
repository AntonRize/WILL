---
layout: default
title: "Predictions"
permalink: /predictions/
toc: false
---

<div class="markdown-content">

<p style="font-size: 1.1em; text-align: center; max-width: 700px; margin: 1rem auto 2rem auto; color: #d1d5db;">
    This page aggregates reproducible numerical checks of WILL predictions. Each item links to a runnable notebook and, where available, an interactive lab with a clear falsifiability clause.
</p>

<hr style="border-color: #374151; margin: 2rem 0;">

<h2 style="font-size: 2em; text-align: center; margin-bottom: 2.5rem;">🧪 Interactive Labs</h2>

<div class="bg-gray-800/50 p-6 rounded-lg border-l-4" style="border-color: #3498db; margin-bottom: 2rem;">
    <h3 style="color: #fff; font-size: 1.5em; margin-bottom: 1rem;">1) Galaxy RC Lab — SPARC rotation curves</h3>
    <p style="margin-bottom: 1rem; line-height: 1.6;">
        <strong>Headline metric:</strong> median RMSE ≈ <strong>20 km/s</strong> over ~175 galaxies.
    </p>
    <a href="{{ site.baseurl }}/calculator/" class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-block" style="text-decoration: none; margin-bottom: 1.5rem;">
        Try it: Open the calculator
    </a>
    <div class="bg-gray-900/70 border border-amber-500/50 rounded-md p-4" style="margin-top: 1rem;">
        <p style="font-weight: bold; color: #f59e0b; margin-bottom: 0.5rem;">Falsification Clause</p>
        <p style="color: #d1d5db;">
            If, with fixed data-selection rules on the SPARC dataset, the median RMSE exceeds <strong>50 km/s</strong> for <strong>≥ 70%</strong> of the sample, the prediction is considered falsified.
        </p>
    </div>
</div>

<div class="bg-gray-800/50 p-6 rounded-lg border-l-4" style="border-color: #8e44ad; margin-bottom: 2rem;">
    <h3 style="color: #fff; font-size: 1.5em; margin-bottom: 1rem;">2) Cosmo-2-Input Lab — background cosmology</h3>
    <p style="margin-bottom: 1rem; line-height: 1.6;">
        <strong>Headline metric:</strong> \(\Omega_\Lambda = 2/3\), \(\Omega_m = 1/3\) (no free parameters).
    </p>
    <a href="{{ site.baseurl }}/2-input-cosmology.html" class="bg-purple-700 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded inline-block" style="text-decoration: none; margin-bottom: 1.5rem;">
        Try it: Open the 2-input cosmology tool
    </a>
    <div class="bg-gray-900/70 border border-amber-500/50 rounded-md p-4" style="margin-top: 1rem;">
        <p style="font-weight: bold; color: #f59e0b; margin-bottom: 0.5rem;">Falsification Clause</p>
        <p style="color: #d1d5db;">
            If, for a fixed \(H_0\), the predicted values for \(\{\Omega_\Lambda, \Omega_m, t_0\}\) systematically fall outside consolidated observational bounds, the prediction is considered falsified.
        </p>
    </div>
</div>

<div class="bg-gray-800/50 p-6 rounded-lg border-l-4" style="border-color: #27ae60; margin-bottom: 2rem;">
    <h3 style="color: #fff; font-size: 1.5em; margin-bottom: 1rem;">3) GPS Relativity Lab — orbital slider <span style="font-size: 0.7em; color: #9ca3af;">(planned)</span></h3>
    <p style="margin-bottom: 1rem; line-height: 1.6;">
        <strong>Headline metrics at GPS altitude:</strong> time offset ≈ <strong>38.52 μs/day</strong>; Energy symmetry = 0; \(W_{ill} = 1\).
    </p>
    <p style="color: #9ca3af; margin-bottom: 1.5rem;">
        <strong>Planned demo:</strong> orbit-radius slider with real-time display of \(\beta, \kappa, Q, Q_t\), daily \(\Delta t\), and other key invariants.
    </p>
    <div class="bg-gray-900/70 border border-amber-500/50 rounded-md p-4" style="margin-top: 1rem;">
        <p style="font-weight: bold; color: #f59e0b; margin-bottom: 0.5rem;">Falsification Clause</p>
        <p style="color: #d1d5db;">
            If, for the GPS preset with current orbital parameters, \(|\Delta t_{pred} - \Delta t_{emp}| > 1\%\), or the energy-symmetry residual exceeds tolerance, or \(|W_{ill}-1|\) exceeds tolerance, the prediction is considered falsified.
        </p>
    </div>
</div>

<hr style="border-color: #374151; margin: 3rem 0;">

<h2 style="font-size: 2em; text-align: center; margin-bottom: 2.5rem;">📄 Reproducible Notebooks & Static Views</h2>

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem;">

    <div class="bg-gray-800/50 p-6 rounded-lg">
        <h4 style="font-size: 1.25em; margin-bottom: 1rem;">A) Galaxy rotation curves</h4>
        <p style="margin-bottom: 1rem; color: #d1d5db;">Metric: median RMSE ≈ <strong>20.3 km/s</strong></p>
        <a href="{{ site.baseurl }}/Colab%20Notebooks/V_QWILL_=_sqrt(3)_V_bary.ipynb" class="text-cyan-400 hover:text-cyan-300">Notebook</a> | 
        <a href="{{ site.baseurl }}/Colab%20Notebooks/V_QWILL_=_sqrt(3)_V_bary.html" class="text-cyan-400 hover:text-cyan-300">HTML</a>
    </div>

    <div class="bg-gray-800/50 p-6 rounded-lg">
        <h4 style="font-size: 1.25em; margin-bottom: 1rem;">B) Relativistic Tests</h4>
        <p style="margin-bottom: 1rem; color: #d1d5db;">Metrics: GPS, Mercury & S2 precession</p>
        <a href="{{ site.baseurl }}/Colab%20Notebooks/GPS%20TIME%20+PRECESSION%20OF%20MERCURY+PRECESSION%20OF%20S2%20STAR+CONSERVATION%20LAW+RELATIVISTIC%20CORRECTION.ipynb" class="text-cyan-400 hover:text-cyan-300">Notebook</a> | 
        <a href="{{ site.baseurl }}/Colab%20Notebooks/GPS%20TIME%20+PRECESSION%20OF%20MERCURY+PRECESSION%20OF%20S2%20STAR+CONSERVATION%20LAW+RELATIVISTIC%20CORRECTION.html" class="text-cyan-400 hover:text-cyan-300">HTML</a>
    </div>

    <div class="bg-gray-800/50 p-6 rounded-lg">
        <h4 style="font-size: 1.25em; margin-bottom: 1rem;">C) Cosmology from \(\kappa^2 = 2/3\)</h4>
        <p style="margin-bottom: 1rem; color: #d1d5db;">Outputs: \(\Omega_\Lambda = 2/3\), \(t_0 \approx 14.53\) Gyr</p>
        <a href="{{ site.baseurl }}/Colab%20Notebooks/WILL_Geometry_COSMO_%E2%80%93_scale_derivation_from_%CE%BA%C2%B2_=_2_3_.ipynb" class="text-cyan-400 hover:text-cyan-300">Notebook</a> |
        <a href="{{ site.baseurl }}/Colab%20Notebooks/WILL_Geometry_COSMO_%E2%80%93_scale_derivation_from_%CE%BA%C2%B2_=_2_3_.html" class="text-cyan-400 hover:text-cyan-300">HTML</a>
    </div>
</div>

</div>
