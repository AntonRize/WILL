---
layout: default
title: "Predictions"
permalink: /predictions/
toc: false
---



\section*{1. Cosmological Predictions}

\subsection*{a.Derivation of the Hubble Parameter $H_0$}

WILL RG derives the Hubble parameter $H_0$ solely from the Cosmic Microwave Background (CMB) temperature $T_0$ and the fine-structure constant $\alpha$, bridging microphysical constants with cosmic expansion.

The framework first calculates the radiation energy density:
\[
\rho_\gamma = \frac{4 \sigma_{\mathrm{SB}} T_0^4}{c^3}.
\]

It then identifies the maximum geometric density $\rho_{\max}$ based on the electromagnetic coupling limit, defined by $\alpha$:
\[
\rho_{\max} = \frac{\rho_\gamma}{3 \alpha^2}.
\]

From this, $H_0$ is directly derived:
\[
H_0 = \sqrt{8 \pi G \rho_{\max}}.
\]

The numerical prediction is approximately
\[
H_0 \approx 68.15~\mathrm{km\,s^{-1}\,Mpc^{-1}},
\]
which aligns within 1\% of Planck 2018 measurements (doc.\ Part II -- Section ``Deriving $H_0$ from CMB Temperature and $\alpha$'').

\subsection*{b.\ Distant Supernova Flux Levels}

WILL RG predicts the cosmic expansion history (Hubble Diagram) with fixed geometric density parameters
\[
\Omega_m = \frac{1}{3}, \qquad \Omega_\Lambda = \frac{2}{3},
\]
directly derived from the topological partitioning of the energy budget. Using the derived $H_0$, it calculates the theoretical distance modulus $\mu_{\mathrm{WILL}}(z)$:
\[
\mu_{\mathrm{WILL}}(z) =
5 \log_{10} \!\left(
  \frac{c (1+z)}{H_0}
  \int_{0}^{z}
  \frac{dz'}{\sqrt{\tfrac{1}{3}(1+z')^{3} + \tfrac{2}{3}}}
\right) + 25.
\]

This prediction shows deviations below $0.015$ mag across the entire redshift range of the Pantheon+ dataset, after accounting for a constant calibration offset due to the Hubble Tension (doc.\ Part II -- Section ``Geometric Expansion Law: Distant Supernova Flux Levels Test'').

\subsection*{c.\ CMB Acoustic Spectrum}

The framework reconstructs the CMB acoustic spectrum as resonant harmonics of an $S^2$ topology loaded by baryons. It predicts the position of the first acoustic peak $\ell_{\mathrm{pred}}(\mathrm{WILL})$ using vacuum stiffness $\rho_\Lambda = \tfrac{2}{3} \rho_{\max}$ and pure baryonic matter ($\Omega_b \approx 0.048$):
\[
\ell_{\mathrm{pred}}(\mathrm{WILL}) =
\ell_{\mathrm{vac}} \frac{\Omega_\Lambda}{\Omega_\Lambda + \Omega_{\mathrm{bary}}}
\approx 220.59.
\]

This matches the observed Planck peak ($\ell_{\mathrm{obs}} \approx 220.60$) with $\sim 0.01\%$ precision, resolving the ``missing mass'' problem without dark matter (doc.\ Part II -- Section ``Geometric Origin of the CMB Acoustic Spectrum'').

\subsection*{d.\ Resolution of the Low Quadrupole Anomaly}

WILL RG explains the anomalously low amplitude of the CMB quadrupole moment ($\ell = 2$) by vacuum stiffness acting as a high-pass filter. It predicts an ``Inertial Corridor'' for the quadrupole power $D_{\ell=2}$ (normalized):
\[
P(\ell=2) \propto
\left(
  \frac{1}{1 + R_{\mathrm{eff}} \lambda_2}
\right)^{2},
\]
where $\lambda_2 = 6$ and $R_{\mathrm{eff}}$ varies between structural and kinetic coupling limits. The predicted corridor for $D_{\ell=2}$ is approximately $0.132$ to $0.285$, which encompasses the observed Planck value of $D_{\ell=2} \approx 0.20$ (doc.\ Part II -- Section ``Resolution of the Low Quadrupole Anomaly'').

\subsection*{e.\ Galactic Rotation Curves and Radial Acceleration Relation (RAR)}

The framework predicts galactic rotation curves and the RAR using a local acceleration scale derived from the global horizon ($H_0$). The predicted observed velocity $V_{\mathrm{RG}}(r)$ is:
\[
V_{\mathrm{RG}}(r) = \sqrt{
  V_b^2(r) + a_\kappa \, \frac{V_b^2(r)}{r}
},
\]
where
\[
a_\kappa = \frac{c H_0}{3 \pi} \approx 0.70 \times 10^{-10}~\mathrm{m\,s^{-2}}
\]
is a theoretically derived, fixed acceleration scale. This model, applied to the SPARC database (175 galaxies) with zero fitting parameters, reproduces rotation curves and the RAR with high precision, comparable to or exceeding MOND phenomenology (doc.\ Part II -- Section ``Galactic Dynamics: The Law of Resonant Interference'' and ``The Universal Radial Acceleration Relation (RAR)'').

\subsection*{f.\ Wide Binary Stars}

WILL RG correctly predicts the observed gravity boost factor
\[
\gamma = \frac{g_{\mathrm{obs}}}{g_N}
\]
for wide binary stars without invoking external field effects, by recognizing that these systems couple to the cosmic horizon via a distinct kinematic resonance scale $a_\beta$:
\[
\gamma_{\mathrm{WILL}} = 1 + \frac{a_\beta}{g_N},
\]
where
\[
a_\beta = \frac{c H_0}{6 \pi} \approx 0.35 \times 10^{-10}~\mathrm{m\,s^{-2}}.
\]
This prediction matches Gaia DR3 observational uncertainties, resolving an anomaly for standard MOND (doc.\ Part II -- Section ``The Kinetic Resonance: Resolution of the Wide Binary Anomaly'').

\subsection*{g.\ Strong Gravitational Lensing}

The framework extends its explanation of ``phantom inertia'' to strong gravitational lensing. It predicts lensing angles based on observed stellar velocities, without dark matter, by treating the vacuum energy density as the effective refractive medium for photons. For a strong lensing system, the predicted lensing angle $\theta_{\mathrm{pred}}$ is:
\[
\theta_{\mathrm{pred}} = 4 \pi
\left( \frac{\sigma_{\mathrm{obs}}}{c} \right)^2
\frac{D_{ls}}{D_s},
\]
where $\sigma_{\mathrm{obs}}$ is the observed stellar velocity dispersion, and $D_{ls}, D_s$ are angular diameter distances derived using the WILL RG cosmology. For instance, for SDSSJ0946+1006, it predicts $1.46''$ versus an observed $1.43''$ (doc.\ Part II -- Section ``Strong Lensing: A Proof of Concept'').

\section*{2.\ Relativistic and Gravitational Predictions}

\subsection*{a.\ Resolution of GR Singularities}

WILL RG resolves General Relativity singularities by imposing natural bounds on energy density. It predicts that density is bounded by a maximum value derived purely from geometry:
\[
\rho_{\max} = \frac{c^2}{8 \pi G r^2}.
\]
This implies that black holes are energetically saturated but non-singular regions (doc.\ Part I -- Section ``No Singularities, No Hidden Regions'').

\subsection*{b.\ Derivation of the Equivalence Principle}

The equality of gravitational and inertial masses ($m_g \equiv m_i \equiv m_{\mathrm{eff}}$) is not a postulate but a necessary structural identity of WILL, arising from the compositional closure of relational geometry and the unified scaling of invariant rest energy $E_0$ (doc.\ Part I -- Theorem ``Equivalence of Inertial and Gravitational Response''):
\[
E_{\mathrm{loc}} =\frac{ E_0 }{\beta_Y \kappa_X}
= \frac{E_0}{ (\sqrt{1 - \beta^2})(\sqrt{1 - \kappa^2})}.
\]

\subsection*{c.\ Perihelion Precession}

WILL RG reproduces the perihelion precession of orbits, a key GR prediction, using a purely algebraic formulation based on the ratio of gravitational redshift $\kappa_p$ to Doppler shift $\beta_p$ at periapsis:
\[
\Delta \varphi = \frac{3 \pi}{2} \frac{\kappa_p^4}{\beta_p^2}.
\]
This formula, derived from geometric accumulation without differential equations or metrics, accurately predicts Mercury's $43''/\mathrm{century}$ and observed precession for star S2 (doc.\ Part I -- Section ``The Universal Precession Law: Derivation via $Q_a$'').

\subsection*{d.\ Factor of 2 in Gravitational Lensing and Shapiro Delay}

The framework explains the factor of 2 difference in gravitational effects on light versus massive particles. This arises because light, having $\beta = 1$ and thus $\beta_Y = 0$, concentrates its entire transformation resource on a single geometric component (X-axis). This eliminates the $1/2$ partitioning factor seen in massive bodies, yielding:
\[
\Phi_\gamma = \kappa^{2} c^{2},
\qquad
\Phi_{\mathrm{mass}} = \frac{1}{2} \kappa^{2} c^{2}.
\]
This geometric difference directly explains the observed factor of 2 in light deflection and Shapiro delay (doc.\ Part I -- Section ``Single-Axis Energy Transfer and the Nature of Light'').

\section*{3.\ Quantum Mechanical Predictions}

\subsection*{a.\ Quantized Atomic Radii and Energy Levels}

From the geometric closure of an electron's relational wave around its orbital circumference ($n \lambda_n = 2 \pi r_n$), the Universal Scale Principle, and the Geometric Closure Condition ($\kappa_q^{2} = 2 \beta_q^{2}$), WILL RG derives the Bohr radius $a_0$ and quantized atomic radii $r_n$:
\[
r_n = \frac{4 \pi \varepsilon_0 n^{2} \hbar^{2}}{m_e e^{2}}.
\]
Subsequently, the quantized energy levels $E_n$ for the hydrogen atom are derived:
\[
E_n = - \frac{\alpha^{2} m_e c^{2}}{2 n^{2}}.
\]
These derivations match standard quantum mechanical results without classical force analogues, probabilistic wavefunctions, or differential equations (doc.\ Part III -- Section ``Derivation of Atomic Structure from First Principles'').

\subsection*{b.\ The Fine Structure Constant $\alpha$}

The fine structure constant $\alpha$ is derived and identified as the kinetic projection $\beta_1$ of the electron in the ground state of the hydrogen atom ($n = 1$):
\[
\alpha \equiv \beta_1.
\]
This establishes $\alpha$ not as an empirical input, but as the unique kinematic projection compatible with the geometric closure of a charged fermion (doc.\ Part III -- Section ``The Geometric Origin of the Fine Structure Constant'').

\subsection*{c.\ Unified Relativistic Energy Formula (Fine Structure)}

The framework derives the total relativistic energy formula for an electron, which is numerically identical to the Sommerfeld--Dirac formula, as a projection of its rest energy determined by the ratio of interaction strength $Z \alpha$ to the effective geometric structure $n_{\mathrm{eff}}$:
\[
E_{n,j} = m_e c^{2}
\sqrt{1 + \left( \frac{Z \alpha}{n_{\mathrm{eff}}} \right)^{2}},
\]
where
\[
n_{\mathrm{eff}} = (n - k) + \sqrt{k^{2} - (Z \alpha)^{2}}
\]
is the unified quantum number. This arises from circular geometric closure in phase space (doc.\ Part III -- Theorem ``The Unified Relativistic Energy Formula'').

\subsection*{d.\ Geometric Origin of Spin and Pauli Exclusion}

``Spin'' is derived as the topological chirality of the standing wave's phase integration (right-handed vs.\ left-handed winding directions). The Pauli Exclusion Principle emerges as a consequence of the ``Principle of Unique Address,'' stating that co-located energy flows must differ by at least one geometric invariant, leaving chirality as the only remaining degree of freedom for two electrons in the same spatial orbital (doc.\ Part III -- Section ``The Geometric Origin of Spin and Exclusion'').

\subsection*{e.\ Geometric Uncertainty Principle}

The uncertainty principle is derived as a direct geometric necessity from the closure of energy projection on the unit circle ($S^1$). For orthogonal projections $\Delta \beta_X$ and $\Delta \beta_Y$:
\[
\Delta \beta_X \, \Delta \beta_Y \ge
\frac{1}{2} \left| \sin 2 \theta \right| (2 \pi n)^{2}.
\]
This topological relation leads to the Heisenberg Uncertainty Principle ($\Delta x \cdot \Delta p \approx \hbar$) when calibrated to physical observables, reinterpreting $\hbar$ as a conversion factor for topological winding (doc.\ Part III -- Section ``Geometric Origin of the Uncertainty Principle'').







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
      <strong>Headline metric:</strong> median RMSE ≈ <strong>12.64 km/s</strong> over ~175 galaxies.
  </p>
  <a href="{{ site.baseurl }}/Galactic_Dynamics/" class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-block" style="text-decoration: none; margin-bottom: 1.5rem;">
      Try it: Open the Galactic Dynamics tool
  </a>
  <div class="bg-gray-900/70 border border-amber-500/50 rounded-md p-4" style="margin-top: 1rem;">
      <p style="font-weight: bold; color: #f59e0b; margin-bottom: 0.5rem;">Falsification Clause</p>
      <p style="color: #d1d5db;">
          If, with fixed data-selection rules on the SPARC dataset, the median RMSE exceeds <strong>50 km/s</strong> for <strong>≥ 25%</strong> of the sample, the prediction is considered falsified.
      </p>
  </div>
</div>


<!-- Lab 2 -->
<div class="bg-gray-800/50 p-6 rounded-lg border-l-4" style="border-color: #616ec4; margin-bottom: 2rem;">
  <h3 style="color: #fff; font-size: 1.5em; margin-bottom: 1rem;">2)Relational Orbital Mechanics Lab — Relational Orbital Mechanics (R.O.M.)</h3>
  <p style="margin-bottom: 1rem; line-height: 1.6;">
      <strong>Headline metric:</strong> All observable orbital structure follows <strong> from directly measurable Light frequency projections </strong> No Mass or G Requaered </p>
  <a href="{{ site.baseurl }}/ROM/" class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-block" style="text-decoration: none; margin-bottom: 1.5rem;">
      Try it: Open Relational Orbital Mechanics (R.O.M.) tool
  </a>
  <div class="bg-gray-900/70 border border-amber-500/50 rounded-md p-4" style="margin-top: 1rem;">
      <p style="font-weight: bold; color: #f59e0b; margin-bottom: 0.5rem;">Falsification Clause</p>
      <p style="color: #d1d5db;">
          If, with accurate input data-selection  <strong> disagreement with observations  > 5% </strong> the prediction is considered falsified.
      </p>
  </div>
</div>


<!-- Lab 3 -->
<div class="bg-gray-800/50 p-6 rounded-lg border-l-4" style="border-color: #8e44ad; margin-bottom: 2rem;">
  <h3 style="color: #fff; font-size: 1.5em; margin-bottom: 1rem;">3) Cosmology Lab — All cosmology out of one scale and one dynamic input</h3>
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



<!-- Lab 4 -->
<div class="bg-gray-800/50 p-6 rounded-lg border-l-4" style="border-color: #27ae60; margin-bottom: 2rem;">
  <h3 style="color: #fff; font-size: 1.5em; margin-bottom: 0.5rem;">4) Lab — Relativistic Time Offset (Geometric Projections)</h3>
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
            \( \Delta t_{B\to A}[\mu s/\text{day}] = (1 - \frac{Q_{tA}}{Q_{tB}})\times 86400\times 10^6 \).
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
      <p style="margin-bottom: 1rem; color: #d1d5db;">Metric: median RMSE ≈ <strong>12.64 km/s</strong></p>
      <a href="{{ site.baseurl }}/Colab%20Notebooks/Protocol_Independent_Empirical_Comparison_SPARC.ipynb" class="text-cyan-400 hover:text-cyan-300">Notebook</a>
  </div>

  <div class="bg-gray-800/50 p-6 rounded-lg">
      <h4 style="font-size: 1.25em; margin-bottom: 1rem;">B) Relativistic Tests</h4>
      <p style="margin-bottom: 1rem; color: #d1d5db;">Metrics: GPS, Mercury & S2 precession</p>
      <a href="{{ site.baseurl }}/Colab%20Notebooks/WILL-relativistic-tests-gps-mercury-s2.ipynb" class="text-cyan-400 hover:text-cyan-300">Notebook</a>
  </div>

  <div class="bg-gray-800/50 p-6 rounded-lg">
      <h4 style="font-size: 1.25em; margin-bottom: 1rem;">C) Derivation of Hubble Parameter $H_0$ from CMB temperarure and $ \alpha $ </h4>
      <p style="margin-bottom: 1rem; color: #d1d5db;">Metric: Planck mission (2018) empirical measurment </p>
      <a href="{{ site.baseurl }}/Colab%20Notebooks/H_0_from_T_CMB_and_alpha.ipynb" class="text-cyan-400 hover:text-cyan-300">Notebook</a>
  </div>

<div class="bg-gray-800/50 p-6 rounded-lg">
  <h4 style="font-size: 1.25em; margin-bottom: 1rem;">D) Absolute Scale Cosmology</h4>
  <p style="margin-bottom: 1rem; color: #d1d5db;">Cosmological scale metric predictions, tests, and demonstrations</p>
  <a href="{{ site.baseurl }}/Colab%20Notebooks/WILL_Geometry_absolute_scale_cosmology.ipynb"
     class="text-cyan-400 hover:text-cyan-300">Notebook</a>
</div>

</div>

</div>
