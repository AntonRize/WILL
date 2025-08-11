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

<div class="bg-gray-800/50 p-6 rounded-lg border-l-4" style="border-color: #27ae60; margin-bottom: 2rem;">
    <h3 style="color: #fff; font-size: 1.5em; margin-bottom: 1rem;">3) Relativity Lab — Orbital Slider</h3>
    
    <div style="display: flex; flex-wrap: wrap; gap: 2rem;">
        
        <div style="flex: 2; min-width: 320px;">
            <div>
                <label for="radius-slider" style="display: block; margin-bottom: 0.5rem; color: #d1d5db;">Orbital Radius: <span id="radius-label" class="font-bold"></span> km</label>
                <input type="range" id="radius-slider" min="6471" max="63710" value="26600" style="width: 100%;">
            </div>
            
            <div style="margin-top: 1rem; display: flex; gap: 0.5rem;">
                <button id="btn-leo" class="bg-gray-600 hover:bg-gray-700 text-white py-1 px-3 rounded text-sm">LEO</button>
                <button id="btn-gps" class="bg-blue-600 hover:bg-blue-700 text-white py-1 px-3 rounded text-sm">GPS</button>
                <button id="btn-geo" class="bg-gray-600 hover:bg-gray-700 text-white py-1 px-3 rounded text-sm">GEO</button>
            </div>

            <div style="margin-top: 2rem; display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 1rem;">
                <div>
                    <p style="font-size: 0.9em; color: #9ca3af;">Δt per day (μs)</p>
                    <p id="delta-t-val" style="font-size: 1.75em; font-weight: bold; color: #67e8f9;">--</p>
                </div>
                <div>
                    <p style="font-size: 0.9em; color: #9ca3af;">Energy Symmetry</p>
                    <p id="energy-sym-val" style="font-size: 1.75em; font-weight: bold; color: #fff;">--</p>
                </div>
                <div>
                    <p style="font-size: 0.9em; color: #9ca3af;">W_ill Invariant</p>
                    <p id="will-inv-val" style="font-size: 1.75em; font-weight: bold; color: #fff;">--</p>
                </div>
            </div>
        </div>

        <div style="flex: 1; min-width: 200px; display: flex; align-items: center; justify-content: center;">
            <canvas id="orbit-canvas" width="200" height="200"></canvas>
        </div>
    </div>
    
    <div class="mt-4 space-y-2">
        <details class="bg-gray-900/50 p-4 rounded-md">
            <summary class="font-semibold text-cyan-400 cursor-pointer">Show Energy Symmetry Calculation</summary>
            <div class="mt-4 pt-4 border-t border-gray-700 text-sm">
                <p>\(\Delta E_{E \to S} = \frac{1}{2}((\kappa^2_{Earth} - \kappa^2_{Sat}) + \beta^2_{Sat}) = \) <span id="dE_E2S" class="font-mono"></span></p>
                <p>\(\Delta E_{S \to E} = \frac{1}{2}((\kappa^2_{Sat} - \kappa^2_{Earth}) - \beta^2_{Sat}) = \) <span id="dE_S2E" class="font-mono"></span></p>
                <p class="mt-2 font-bold">Sum: \(\Delta E_{E \to S} + \Delta E_{S \to E} = 0\)</p>
            </div>
        </details>

        <details class="bg-gray-900/50 p-4 rounded-md">
            <summary class="font-semibold text-cyan-400 cursor-pointer">Show W_ill Invariant Calculation</summary>
            <div class="mt-4 pt-4 border-t border-gray-700 text-sm space-y-2">
                <p class="font-bold">Intermediate Parameters (for Satellite):</p>
                <div class="grid grid-cols-2 gap-x-4 gap-y-1 font-mono">
                    <span>\(L_c = \sqrt{1-\beta^2}\): <span id="Lc_val"></span></span>
                    <span>\(T_c = \sqrt{1-\kappa^2}\): <span id="Tc_val"></span></span>
                    <span>\(T_d = 1/L_c\): <span id="Td_val"></span></span>
                    <span>\(L_d = 1/T_c\): <span id="Ld_val"></span></span>
                </div>
                <p class="mt-4 font-bold">Result:</p>
                <p>\(W_{ill} = \frac{L_d \cdot T_c}{T_d \cdot L_c} = 1\) (by construction)</p>
            </div>
        </details>

        <details class="bg-gray-900/50 p-4 rounded-md">
            <summary class="font-semibold text-cyan-400 cursor-pointer">Show Classical vs WILL Energy Comparison</summary>
            <div class="mt-4 pt-4 border-t border-gray-700 text-sm space-y-2">
                <p>Classical Total Energy \(E_{tot} = E_k + E_p\): <span id="Etot_val" class="font-mono"></span> J</p>
                <p>Normalized by Rest Energy \(E_{tot} / (m c^2)\): <span id="Enorm_val" class="font-mono"></span></p>
                <p>WILL Dimensionless Energy \(\Delta E_{E \to S}\): <span id="dE_comp_val" class="font-mono"></span></p>
                <p class="mt-2 font-bold">Ratio: \(\frac{E_{tot} / (m c^2)}{\Delta E_{E \to S}} = \) <span id="ratio_val" class="font-mono text-lg text-white"></span></p>
            </div>
        </details>
    </div>

    <div class="bg-gray-900/70 border border-amber-500/50 rounded-md p-4" style="margin-top: 2rem;">
        <p style="font-weight: bold; color: #f59e0b; margin-bottom: 0.5rem;">Falsification Clauses</p>
        <ul style="font-size: 0.9em; color: #d1d5db; list-style-type: disc; padding-left: 1.5rem;">
            <li>If \(|\Delta t_{pred} - \Delta t_{empirical}| > 1\%\) for the GPS preset with current ephemeris data, the model is considered falsified.</li>
            <li>If |Energy symmetry| > 1e-12, check input data for consistency.</li>
            <li>If \(|W_{ill} - 1|\) > 1e-12, check model parameters for correctness.</li>
        </ul>
    </div>
</div>

<script>
document.addEventListener('DOMContentLoaded', () => {
    // === DOM Elements ===
    const slider = document.getElementById('radius-slider');
    const radiusLabel = document.getElementById('radius-label');
    const deltaTVal = document.getElementById('delta-t-val');
    const energySymVal = document.getElementById('energy-sym-val');
    const willInvVal = document.getElementById('will-inv-val');
    
    // Details sections
    const dE_E2S = document.getElementById('dE_E2S');
    const dE_S2E = document.getElementById('dE_S2E');
    const Lc_val = document.getElementById('Lc_val');
    const Tc_val = document.getElementById('Tc_val');
    const Td_val = document.getElementById('Td_val');
    const Ld_val = document.getElementById('Ld_val');
    const Etot_val = document.getElementById('Etot_val');
    const Enorm_val = document.getElementById('Enorm_val');
    const dE_comp_val = document.getElementById('dE_comp_val');
    const ratio_val = document.getElementById('ratio_val');

    const btnLeo = document.getElementById('btn-leo');
    const btnGps = document.getElementById('btn-gps');
    const btnGeo = document.getElementById('btn-geo');
    
    const canvas = document.getElementById('orbit-canvas');
    const ctx = canvas.getContext('2d');

    // === Constants ===
    const G = 6.67430e-11;
    const M_earth = 5.97219e24;
    const R_earth_m = 6371000;
    const c = 299792458;
    const seconds_per_day = 86400;
    const m_sat = 600; // kg
    const GM = G * M_earth;

    // === Calculation Function ===
    function calculateRelativity(r_m) {
        // --- Satellite parameters ---
        const v_sat = Math.sqrt(GM / r_m);
        const beta_sat = v_sat / c;
        const kappa_sq_sat = (2 * GM) / (r_m * c**2);
        const kappa_sat = Math.sqrt(kappa_sq_sat);
        
        // --- Earth observer parameters ---
        const r_earth_obs_m = R_earth_m;
        const beta_earth_obs = 0;
        const kappa_sq_earth_obs = (2 * GM) / (r_earth_obs_m * c**2);
        const kappa_earth_obs = Math.sqrt(kappa_sq_earth_obs);

        // --- Time Dilation ---
        const Qt_sat = Math.sqrt(1 - kappa_sq_sat);
        const Q_sat_lorentz = 1 / Math.sqrt(1 - beta_sat**2);
        const Qt_earth_obs = Math.sqrt(1 - kappa_sq_earth_obs);
        const rate_sat = (1 / Q_sat_lorentz) * Qt_sat;
        const rate_earth = Qt_earth_obs;
        const delta_t = ((rate_sat / rate_earth) - 1) * seconds_per_day * 1e6;

        // --- Energy Symmetry Law ---
        const delta_E_E_to_S = 0.5 * ((kappa_sq_earth_obs - kappa_sq_sat) + beta_sat**2);
        const delta_E_S_to_E = 0.5 * ((kappa_sq_sat - kappa_sq_earth_obs) - beta_sat**2);
        const energy_symmetry_sum = delta_E_E_to_S + delta_E_S_to_E;

        // --- WILL Invariant ---
        const Lc = Math.sqrt(1 - beta_sat**2);
        const Tc = Math.sqrt(1 - kappa_sq_sat); // Same as Qt_sat
        const Td = 1 / Lc; // Same as Q_sat_lorentz
        const Ld = 1 / Tc;
        const will_invariant = (Ld * Tc) / (Td * Lc);

        // --- Classical vs WILL Energy ---
        const Ep_gps = (-GM * m_sat / r_m) - (-GM * m_sat / R_earth_m);
        const Ek_gps = 0.5 * m_sat * v_sat**2;
        const Etot_gps = Ep_gps + Ek_gps;
        const E_norm = Etot_gps / (m_sat * c**2);
        const final_ratio = E_norm / delta_E_E_to_S;

        return {
            delta_t, energy_symmetry_sum, will_invariant, final_ratio,
            dE_E_to_S, dE_S_to_E, Lc, Tc, Td, Ld,
            Etot_gps, E_norm
        };
    }

    // === UI Update Function ===
    function updateUI() {
        const r_km = parseFloat(slider.value);
        const r_m = r_km * 1000;
        radiusLabel.textContent = Math.round(r_km).toLocaleString();
        
        const res = calculateRelativity(r_m);
        
        // Main readouts
        deltaTVal.textContent = res.delta_t.toFixed(2);
        energySymVal.textContent = res.energy_symmetry_sum.toExponential(2);
        willInvVal.textContent = res.will_invariant.toFixed(12);
        
        // Detailed calculations
        dE_E2S.textContent = res.dE_E_to_S.toExponential(6);
        dE_S2E.textContent = res.dE_S_to_E.toExponential(6);
        Lc_val.textContent = res.Lc.toFixed(12);
        Tc_val.textContent = res.Tc.toFixed(12);
        Td_val.textContent = res.Td.toFixed(12);
        Ld_val.textContent = res.Ld.toFixed(12);
        Etot_val.textContent = res.Etot_gps.toExponential(6);
        Enorm_val.textContent = res.E_norm.toExponential(6);
        dE_comp_val.textContent = res.dE_E_to_S.toExponential(6);
        ratio_val.textContent = res.final_ratio.toFixed(10);
        
        drawCanvas(r_m);
    }
    
    function drawCanvas(r_m) {
        // ... (Canvas drawing logic remains the same)
        const size = 200;
        const center = size / 2;
        const earthRadiusPx = 30;
        const maxOrbitPx = 95;
        const r_max_m = 10 * R_earth_m;
        
        const orbitRadiusPx = earthRadiusPx + ((r_m - R_earth_m) / (r_max_m - R_earth_m)) * (maxOrbitPx - earthRadiusPx);
        
        ctx.clearRect(0, 0, size, size);
        ctx.beginPath();
        ctx.arc(center, center, orbitRadiusPx, 0, 2 * Math.PI);
        ctx.strokeStyle = '#4b5563';
        ctx.lineWidth = 1;
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(center, center, earthRadiusPx, 0, 2 * Math.PI);
        ctx.fillStyle = '#3498db';
        ctx.fill();
    }

    // === Event Listeners ===
    slider.addEventListener('input', updateUI);
    btnLeo.addEventListener('click', () => { slider.value = 7000; updateUI(); });
    btnGps.addEventListener('click', () => { slider.value = 26600; updateUI(); });
    btnGeo.addEventListener('click', () => { slider.value = 42164; updateUI(); });

    // Initial call
    updateUI();
});
</script>

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
