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

<!-- =======================
     3) LAB 3 (UPDATED)
     ======================= -->
<div class="bg-gray-800/50 p-6 rounded-lg border-l-4" style="border-color: #27ae60; margin-bottom: 2rem;">
    <h3 style="color: #fff; font-size: 1.5em; margin-bottom: 0.5rem;">3) Lab — Relativistic Time Offset (Geometric Projections)</h3>
    <p class="muted" style="color:#a3b1c2; margin-bottom:1rem;">
        Primary calculation: the daily relativistic time offset between a surface observer and an orbiting body. Secondary checks: the Energy Symmetry Law, the WILL invariant, and classical energy consistency. The method is object-agnostic and applies to any circular orbit.
    </p>

    <!-- Explanation (object-agnostic) -->
    <div class="bg-gray-900/50 border border-gray-700 rounded-md p-4" style="margin-bottom:1rem;">
        <div class="grid" style="display:grid; gap:0.75rem;">
            <div>
                <h4 style="font-weight:600; color:#e5e7eb; margin:0 0 .25rem 0;">Time Offset (core result)</h4>
                <p style="margin:0;">
                    Define gravitational projections \(\kappa_A^2 = 2GM/(R_A c^2)\) for the surface \(A\) and \(\kappa_B^2 = 2GM/(a c^2)\) for the orbital radius \(a\). The kinematic projection at \(B\) is \(\beta_B^2 = GM/(a c^2)\) (since \(v^2 = GM/a\)).
                    The daily clock offset (“orbiter vs surface”) is
                    \[
                    \Delta t_{B\to A}[\mu s/\text{day}] =
                    \Bigg[\frac{1}{\sqrt{1-\kappa_A^2}} - \frac{1}{\sqrt{1-\kappa_B^2}}
                    \;-\;\Big(\frac{1}{\sqrt{1-\beta_B^2}} - 1\Big)\Bigg]\times 86400\times 10^6 .
                    \]
                </p>
            </div>
            <div>
                <h4 style="font-weight:600; color:#e5e7eb; margin:0 0 .25rem 0;">Energy Symmetry Law</h4>
                <p style="margin:0;">
                    For locations \(A\) (surface) and \(B\) (orbit) define
                    \(\Delta E_{A\to B}=\tfrac{1}{2}\big[(\kappa_A^2-\kappa_B^2)+(\beta_B^2-\beta_A^2)\big]\),
                    \(\Delta E_{B\to A}=-\Delta E_{A\to B}\),
                    hence \(\Delta E_{A\to B}+\Delta E_{B\to A}=0\).
                </p>
            </div>
            <div>
                <h4 style="font-weight:600; color:#e5e7eb; margin:0 0 .25rem 0;">WILL invariant</h4>
                <p style="margin:0;">
                    In terms of \(E, T, M, L\) projections the invariant \(W_{ill}=\frac{E\,T^2}{M\,L^2}=1\) holds; dimensional factors cancel, leaving a purely geometric identity for the same subsystem (surface–orbit).
                </p>
            </div>
            <div>
                <h4 style="font-weight:600; color:#e5e7eb; margin:0 0 .25rem 0;">Classical energy consistency</h4>
                <p style="margin:0;">
                    The normalized total energy \(E_{tot}/(mc^2)\) at \(B\) equals the geometric quantity \(\Delta E_{A\to B}\).
                    Thus the geometric projection encodes the physical energy share independent of the object’s mass.
                </p>
            </div>
            <div class="bg-gray-900/70 border border-amber-500/50 rounded-md p-3">
                <p style="font-weight:600; color:#f59e0b; margin:0 0 .25rem 0;">Falsification Clause</p>
                <p style="margin:0; color:#d1d5db;">
                    If the daily time offset or the symmetry/invariant identities systematically fail for accepted \(\{G,M,R_A,a,c\}\) across circular orbits, the principle is falsified.
                </p>
            </div>
            <p style="margin:0.25rem 0 0 0; font-style:italic; color:#a3b1c2;">
                Unlike GR, which obtains time dilation via Schwarzschild machinery, here the same offset emerges from transparent algebra on \(\kappa^2\) and \(\beta^2\). Identical empirical content, radically simpler path.
            </p>
        </div>
    </div>

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

    <div class="mt-4">
        <details class="bg-gray-900/50 p-4 rounded-md">
            <summary class="font-semibold text-cyan-400 cursor-pointer">Show Calculation Breakdown</summary>
            <div class="mt-4 pt-4 border-t border-gray-700 text-sm space-y-3">
                <div>
                    <h4 class="font-bold text-white mb-1">Physical Energy (Mass-Dependent)</h4>
                    <p class="font-mono">E_total = E_potential + E_kinetic = <span id="Etot_val" class="text-white"></span> J</p>
                    <p class="font-mono">E_rest = m₀c² = <span id="Erest_val" class="text-white"></span> J</p>
                    <p class="font-mono font-bold">Normalized E = E_total / E_rest = <span id="Enorm_detailed" class="text-amber-400"></span></p>
                </div>
                <hr class="border-gray-700">
                <div>
                    <h4 class="font-bold text-white mb-1">Geometric Energy (Mass-Independent)</h4>
                    <p class="font-mono">ΔE = (κ_A² − κ_B² + β_B² − β_A²)/2 = <span id="dE_detailed" class="text-violet-400"></span></p>
                </div>
                <hr class="border-gray-700">
                <p class="font-sans font-bold text-green-400 text-lg mt-2">Ratio: (Normalized E) / (Geometric ΔE) = <span id="final_ratio_detailed"></span></p>
            </div>
        </details>
    </div>
</div>

<script>
// LAB 3 script (kept minimal; UI + calculations remain functional)
document.addEventListener('DOMContentLoaded', () => {
    // === DOM Elements ===
    const massInput = document.getElementById('mass-input');
    const slider = document.getElementById('radius-slider');
    const radiusLabel = document.getElementById('radius-label');

    const deltaTVal = document.getElementById('delta-t-val');
    const dE_val = document.getElementById('dE_val');
    const Enorm_val = document.getElementById('Enorm_val');
    const ratio_val = document.getElementById('ratio_val');

    const Etot_val = document.getElementById('Etot_val');
    const Erest_val = document.getElementById('Erest_val');
    const dE_detailed = document.getElementById('dE_detailed');
    const Enorm_detailed = document.getElementById('Enorm_detailed');
    const final_ratio_detailed = document.getElementById('final_ratio_detailed');

    // Buttons
    const btnIss = document.getElementById('btn-iss');
    const btnGps = document.getElementById('btn-gps');
    const btnJwst = document.getElementById('btn-jwst');
    const btnMoon = document.getElementById('btn-moon');

    // === Physical Constants ===
    const G = 6.67430e-11;
    const M_earth = 5.97219e24;
    const R_earth_m = 6371000;
    const c = 299792458;
    const seconds_per_day = 86400;
    const GM = G * M_earth;

    // === Presets [mass (kg), orbital radius (km)] ===
    const presets = {
        iss:  { mass: 450000,    radius: 6786 },     // ~415 km altitude
        gps:  { mass: 600,       radius: 26600 },    // ~20200 km altitude
        jwst: { mass: 6161,      radius: 1500000 },  // L2 point from Earth
        moon: { mass: 7.347e22,  radius: 384748 }    // Moon
    };

    // === Core Calculation Function ===
    function calculate(radius_m, mass_obj) {
        // Orbital parameters
        const v = Math.sqrt(GM / radius_m);
        const beta_sq_B = (v / c) ** 2;

        // Projections (surface A vs orbit B)
        const kappa_sq_A = (2 * GM) / (R_earth_m * c ** 2);
        const kappa_sq_B = (2 * GM) / (radius_m * c ** 2);
        const beta_sq_A = 0;

        // 1) Time offset (GR-like expression split as geometric + kinematic parts)
        const grav_part = (1 / Math.sqrt(1 - kappa_sq_A)) - (1 / Math.sqrt(1 - kappa_sq_B));
        const kin_part  = (1 / Math.sqrt(1 - beta_sq_B)) - 1;
        const delta_t_us_per_day = (grav_part - kin_part) * seconds_per_day * 1e6;

        // 2) Geometric energy (mass-independent)
        const delta_E_geom = 0.5 * ((kappa_sq_A - kappa_sq_B) + (beta_sq_B - beta_sq_A));

        // 3) Classical energy (mass-dependent, normalized)
        const E_pot = (-GM * mass_obj / radius_m) - (-GM * mass_obj / R_earth_m);
        const E_kin = 0.5 * mass_obj * v ** 2;
        const E_tot = E_pot + E_kin;
        const E_rest = mass_obj * c ** 2;
        const E_norm = (E_rest > 0) ? (E_tot / E_rest) : 0;

        // 4) Ratio
        const ratio = (delta_E_geom !== 0) ? (E_norm / delta_E_geom) : 0;

        return { delta_t_us_per_day, delta_E_geom, E_norm, ratio, E_tot, E_rest, kappa_sq_A, kappa_sq_B, beta_sq_B };
    }

    // === UI Update Function ===
    function updateUI() {
        const r_km = parseFloat(slider.value);
        const m_obj = parseFloat(massInput.value);
        if (isNaN(r_km) || isNaN(m_obj) || m_obj <= 0) return;

        radiusLabel.textContent = Math.round(r_km).toLocaleString();
        const { delta_t_us_per_day, delta_E_geom, E_norm, ratio, E_tot, E_rest } =
            calculate(r_km * 1000, m_obj);

        // Main readouts
        deltaTVal.textContent = delta_t_us_per_day.toFixed(2);
        dE_val.textContent = delta_E_geom.toExponential(4);
        Enorm_val.textContent = E_norm.toExponential(4);
        ratio_val.textContent = ratio.toFixed(8);

        // Detailed
        Etot_val.textContent = E_tot.toExponential(4);
        Erest_val.textContent = E_rest.toExponential(4);
        dE_detailed.textContent = delta_E_geom.toExponential(6);
        Enorm_detailed.textContent = E_norm.toExponential(6);
        final_ratio_detailed.textContent = ratio.toFixed(12);
    }

    function setPreset(preset) {
        massInput.value = preset.mass;
        slider.value = preset.radius;
        slider.min = Math.min(6771, Math.floor(preset.radius * 0.1)).toString();
        slider.max = Math.max(1600000, Math.floor(preset.radius * 1.2)).toString();
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
