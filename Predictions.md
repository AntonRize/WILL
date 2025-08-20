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

<!-- Lab 1 -->
<div class="bg-gray-800/50 p-6 rounded-lg border-l-4" style="border-color: #3498db; margin-bottom: 2rem;">
  <h3 style="color: #fff; font-size: 1.5em; margin-bottom: 1rem;">1) Galactic Dynamics Lab — SPARC rotation curves</h3>
  <p style="margin-bottom: 1rem; line-height: 1.6;">
      <strong>Headline metric:</strong> median RMSE ≈ <strong>20 km/s</strong> over ~175 galaxies.
  </p>
  <a href="{{ site.baseurl }}/calculator/" class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-block" style="text-decoration: none; margin-bottom: 1.5rem;">
      Try it: Open the Galactic Dynamics tool
  </a>
  <div class="bg-gray-900/70 border border-amber-500/50 rounded-md p-4" style="margin-top: 1rem;">
      <p style="font-weight: bold; color: #f59e0b; margin-bottom: 0.5rem;">Falsification Clause</p>
      <p style="color: #d1d5db;">
          If, with fixed data-selection rules on the SPARC dataset, the median RMSE exceeds <strong>50 km/s</strong> for <strong>≥ 70%</strong> of the sample, the prediction is considered falsified.
      </p>
  </div>
</div>

<!-- Lab 2 -->
<div class="bg-gray-800/50 p-6 rounded-lg border-l-4" style="border-color: #8e44ad; margin-bottom: 2rem;">
  <h3 style="color: #fff; font-size: 1.5em; margin-bottom: 1rem;">2) Cosmology Lab — background cosmology</h3>
  <p style="margin-bottom: 1rem; line-height: 1.6;">
      <strong>Headline metric:</strong> \(\Omega_\Lambda = 2/3\), \(\Omega_m = 1/3\) (no free parameters).
  </p>
  <a href="{{ site.baseurl }}/cosmology.html" class="bg-purple-700 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded inline-block" style="text-decoration: none; margin-bottom: 1.5rem;">
      Try it: Open the Cosmology tool
  </a>
  <div class="bg-gray-900/70 border border-amber-500/50 rounded-md p-4" style="margin-top: 1rem;">
      <p style="font-weight: bold; color: #f59e0b; margin-bottom: 0.5rem;">Falsification Clause</p>
      <p style="color: #d1d5db;">
          If, for a fixed \(H_0\), the predicted values for \(\{\Omega_\Lambda, \Omega_m, t_0\}\) systematically fall outside consolidated observational bounds, the prediction is considered falsified.
      </p>
  </div>
</div>

<!-- Lab 3 -->
<div class="bg-gray-800/50 p-6 rounded-lg border-l-4" style="border-color: #27ae60; margin-bottom: 2rem;">
  <h3 style="color: #fff; font-size: 1.5em; margin-bottom: 0.5rem;">3) Lab — Relativistic Time Offset (Geometric Projections)</h3>
  <p class="muted" style="color:#a3b1c2; margin-bottom:1rem;">
      Primary calculation: the daily relativistic time offset between a surface observer and an orbiting body. Secondary check: Classical energy consistency. Object-agnostic: applies to any circular orbit.
  </p>

  <!-- Controls + Results -->
  <div class="flex flex-wrap gap-8 mb-8">
    <div class="flex-1 min-w-[250px]">
      <div>
        <label for="mass-input" class="block mb-2" style="color:#d1d5db;">Object Mass (kg):</label>
        <input type="number" id="mass-input" value="600" class="w-full bg-gray-900 border border-gray-600 text-white p-2 rounded">
      </div>
      <div class="mt-4">
        <label for="radius-slider" class="block mb-2" style="color:#d1d5db;">Orbital Radius: <span id="radius-label" class="font-bold"></span> km</label>
        <input type="range" id="radius-slider" min="6771" max="1600000" value="26600" step="100" class="w-full">
      </div>
    </div>

    <div class="flex-1 min-w-[250px] flex flex-col justify-center">
      <p class="mb-3">Presets:</p>
      <div class="grid grid-cols-2 gap-2">
        <button id="btn-iss" class="preset-btn bg-gray-600 hover:bg-gray-700 text-white py-2 px-3 rounded text-sm">ISS</button>
        <button id="btn-gps" class="preset-btn bg-blue-600 hover:bg-blue-700 text-white py-2 px-3 rounded text-sm">GPS</button>
        <button id="btn-jwst" class="preset-btn bg-purple-600 hover:bg-purple-700 text-white py-2 px-3 rounded text-sm">JWST</button>
        <button id="btn-moon" class="preset-btn bg-yellow-600 hover:bg-yellow-700 text-white py-2 px-3 rounded text-sm">Moon</button>
      </div>
    </div>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 bg-gray-900 p-4 rounded-lg">
    <div class="text-center">
      <p class="text-sm text-gray-400">Δt per day (μs)</p>
      <p id="delta-t-val" class="text-2xl font-bold text-cyan-400">--</p>
    </div>
    <div class="text-center">
      <p class="text-sm text-gray-400">Geometric Energy (ΔE)</p>
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

  <!-- All explanatory text & formulas live in the breakdown -->
  <div class="mt-4">
    <details class="bg-gray-900/50 p-4 rounded-md">
      <summary class="font-semibold text-cyan-400 cursor-pointer">Show Calculation Breakdown</summary>
      <div class="mt-4 pt-4 border-t border-gray-700 text-sm space-y-3">

        <div>
          <h4 class="font-bold text-white mb-1">1) Define projections</h4>
          <p class="text-gray-300">
            Gravitational projection at the surface \(A\): \( \kappa_A^2 = \dfrac{2GM}{R_A c^2} \).<br>
            Gravitational projection at the orbit \(B\) (radius \( r \)): \( \kappa_B^2 = \dfrac{2GM}{r c^2} \).<br>
            Kinematic projection for a circular orbit at \(B\): from \( v^2 = GM/r \) we get \( \beta_B^2 = \dfrac{v^2}{c^2} = \dfrac{GM}{r c^2} \). On the surface we take \( \beta_A^2 = 0 \).
          </p>
        </div>

        <div>
          <h4 class="font-bold text-white mb-1">2) Combine into \(Q^2\) and \(Q_t\)</h4>
          <p class="text-gray-300">
            \( Q^2 = \kappa^2 + \beta^2 \). Thus \( Q_A^2 = \kappa_A^2 + \beta_A^2 \) and \( Q_B^2 = \kappa_B^2 + \beta_B^2 \).<br>
            The time-axis complement is \( Q_t = \sqrt{1 - Q^2} \).
          </p>
        </div>

        <div>
          <h4 class="font-bold text-white mb-1">3) Time offset (core result)</h4>
          <p class="text-gray-300">
            Daily clock difference in microseconds per day:
            \( \Delta t_{B\to A}[\mu s/\text{day}] = \big(Q_{tB} - Q_{tA}\big)\times 86400\times 10^6 \).
          </p>
        </div>

        <div>
          <h4 class="font-bold text-white mb-1">4) Classical energy consistency</h4>
          <p class="text-gray-300">
            Fix the potential zero at the surface \(R_A\). For a circular orbit at radius \( r \):<br>
            Potential \( E_p = \big(-\dfrac{GMm}{r}\big) - \big(-\dfrac{GMm}{R_A}\big) \).<br>
            Kinetic \( E_k = \tfrac{1}{2} m v^2 \) with \( v^2 = GM/r \).<br>
            Total \( E_{tot} = E_p + E_k \). Normalize by \( mc^2 \) to get \( E_{tot}/(mc^2) \).<br>
            Geometric energy (mass-independent):
            \( \Delta E_{A\to B} = \tfrac{1}{2}\big[(\kappa_A^2-\kappa_B^2) + (\beta_B^2-\beta_A^2)\big] \).
            Consistency statement for the closed surface–orbit subsystem:
            \( \dfrac{E_{tot}/(mc^2)}{\Delta E_{A\to B}} = 1 \).
          </p>
        </div>

      </div>
    </details>
  </div>
</div>

<script>
// LAB 3 script (object-agnostic; r = orbital radius). Math kept minimal in UI.
document.addEventListener('DOMContentLoaded', () => {
  // Elements
  const massInput = document.getElementById('mass-input');
  const slider = document.getElementById('radius-slider');
  const radiusLabel = document.getElementById('radius-label');

  const deltaTVal = document.getElementById('delta-t-val');
  const dE_val = document.getElementById('dE_val');
  const Enorm_val = document.getElementById('Enorm_val');
  const ratio_val = document.getElementById('ratio_val');

  const btnIss = document.getElementById('btn-iss');
  const btnGps = document.getElementById('btn-gps');
  const btnJwst = document.getElementById('btn-jwst');
  const btnMoon = document.getElementById('btn-moon');

  // Constants
  const G = 6.67430e-11;
  const M = 5.97219e24;
  const R_A = 6371000;     // surface radius
  const c = 299792458;
  const GM = G * M;
  const seconds_per_day = 86400;

  // Presets [mass (kg), orbital radius (km)]
  const presets = {
    iss:  { mass: 450000,    radius: 6786 },     // ~415 km altitude
    gps:  { mass: 600,       radius: 26600 },    // ~20200 km altitude
    jwst: { mass: 6161,      radius: 1500000 },  // L2-ish distance from Earth
    moon: { mass: 7.347e22,  radius: 384748 }    // Moon
  };

  function calculate(r_km, mass_obj) {
    const r_m = r_km * 1000;

    // Orbital velocity and projections
    const v = Math.sqrt(GM / r_m);
    const beta_sq_B = (v / c) ** 2;               // = GM/(r c^2)
    const beta_sq_A = 0;                           // surface frame at rest
    const kappa_sq_A = (2 * GM) / (R_A * c ** 2);  // surface
    const kappa_sq_B = (2 * GM) / (r_m * c ** 2);  // orbit

    // Time offset (implemented via grav-kin split; equal to ΔQ_t * day * 1e6)
    const grav_part = (1 / Math.sqrt(1 - kappa_sq_A)) - (1 / Math.sqrt(1 - kappa_sq_B));
    const kin_part  = (1 / Math.sqrt(1 - beta_sq_B)) - 1;
    const delta_t_us_per_day = (grav_part - kin_part) * seconds_per_day * 1e6;

    // Geometric energy (mass-independent)
    const delta_E_geom = 0.5 * ((kappa_sq_A - kappa_sq_B) + (beta_sq_B - beta_sq_A));

    // Classical energy (mass-dependent), with zero at surface R_A
    const E_potential = (-GM * mass_obj / r_m) - (-GM * mass_obj / R_A);
    const E_kinetic = 0.5 * mass_obj * v ** 2;
    const E_total = E_potential + E_kinetic;
    const E_rest = mass_obj * c ** 2;
    const E_norm = (E_rest > 0) ? (E_total / E_rest) : 0;

    const final_ratio = (delta_E_geom !== 0) ? (E_norm / delta_E_geom) : 0;

    return { delta_t_us_per_day, delta_E_geom, E_norm, final_ratio };
  }

  function updateUI() {
    const r_km = parseFloat(slider.value);
    const m_obj = parseFloat(massInput.value);
    if (isNaN(r_km) || isNaN(m_obj) || m_obj <= 0) return;

    radiusLabel.textContent = Math.round(r_km).toLocaleString();

    const { delta_t_us_per_day, delta_E_geom, E_norm, final_ratio } =
      calculate(r_km, m_obj);

    deltaTVal.textContent = delta_t_us_per_day.toFixed(2);
    dE_val.textContent = delta_E_geom.toExponential(4);
    Enorm_val.textContent = E_norm.toExponential(4);
    ratio_val.textContent = final_ratio.toFixed(8);
  }

  function setPreset(preset) {
    massInput.value = preset.mass;
    slider.value = preset.radius;
    // keep slider range wide; no dynamic min/max to avoid UI jumps
    updateUI();
  }

  // Events
  slider.addEventListener('input', updateUI);
  massInput.addEventListener('input', updateUI);
  btnIss.addEventListener('click', () => setPreset(presets.iss));
  btnGps.addEventListener('click', () => setPreset(presets.gps));
  btnJwst.addEventListener('click', () => setPreset(presets.jwst));
  btnMoon.addEventListener('click', () => setPreset(presets.moon));

  // Init
  setPreset(presets.gps);
});
</script>

<hr style="border-color: #374151; margin: 3rem 0;">

<h2 style="font-size: 2em; text-align: center; margin-bottom: 2.5rem;">📄 Reproducible Notebooks</h2>

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem;">

  <div class="bg-gray-800/50 p-6 rounded-lg">
      <h4 style="font-size: 1.25em; margin-bottom: 1rem;">A) Galaxy rotation curves</h4>
      <p style="margin-bottom: 1rem; color: #d1d5db;">Metric: median RMSE ≈ <strong>20.3 km/s</strong></p>
      <a href="{{ site.baseurl }}/Colab%20Notebooks/QWILL-galaxy-rotation-curves.ipynb" class="text-cyan-400 hover:text-cyan-300">Notebook</a>
  </div>

  <div class="bg-gray-800/50 p-6 rounded-lg">
      <h4 style="font-size: 1.25em; margin-bottom: 1rem;">B) Relativistic Tests</h4>
      <p style="margin-bottom: 1rem; color: #d1d5db;">Metrics: GPS, Mercury & S2 precession</p>
      <a href="{{ site.baseurl }}/Colab%20Notebooks/WILL-relativistic-tests-gps-mercury-s2.ipynb" class="text-cyan-400 hover:text-cyan-300">Notebook</a>
  </div>

  <div class="bg-gray-800/50 p-6 rounded-lg">
      <h4 style="font-size: 1.25em; margin-bottom: 1rem;">C) Double Pulsar orbital decay</h4>
      <p style="margin-bottom: 1rem; color: #d1d5db;">Metric: orbital decay rate (Hulse–Taylor)</p>
      <a href="{{ site.baseurl }}/Colab%20Notebooks/Double_Pulsar_orbital_decay_rate.ipynb" class="text-cyan-400 hover:text-cyan-300">Notebook</a>
  </div>

</div>

</div>
