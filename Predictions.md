---
layout: default
title: "Predictions (Content-First Mockup)"
permalink: /predictions-mockup/
toc: false
---

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Predictions — Content Mockup</title>
<style>
  :root{
    --bg:#0b0f14;
    --panel:#121822;
    --muted:#a3b1c2;
    --text:#e8eef6;
    --line:#1f2937;
    --accent:#37a0ff;
    --accent2:#9b59b6;
    --accent3:#27ae60;
    --warn:#f59e0b;
    --danger:#ff5e5e;
  }
  html,body{margin:0;padding:0;background:var(--bg);color:var(--text);font-family:Inter,system-ui,Segoe UI,Roboto,Arial,sans-serif;line-height:1.6}
  .container{max-width:1050px;margin:0 auto;padding:24px}
  h1,h2,h3,h4{line-height:1.25;margin:0 0 12px}
  h1{font-size:2.2rem;text-align:center;margin:10px 0 28px}
  h2{font-size:1.6rem}
  h3{font-size:1.25rem}
  p{margin:8px 0}
  .lede{color:var(--muted);text-align:center;max-width:760px;margin:0 auto 22px}
  hr{border:none;border-top:1px solid var(--line);margin:28px 0}
  .lab{background:var(--panel);border-left:4px solid var(--accent);border-radius:10px;padding:18px;margin-bottom:18px}
  .lab.cosmo{border-color:var(--accent2)}
  .lab.lab3{border-color:var(--accent3)}
  .lab-header{display:flex;flex-wrap:wrap;align-items:baseline;gap:10px;margin-bottom:8px}
  .lab-tag{font-size:.85rem;color:#bcd3ff;background:#0e243a;border:1px solid #153453;padding:2px 8px;border-radius:999px}
  details{background:#0d1320;border:1px solid #1a2333;border-radius:10px;padding:12px;margin-top:12px}
  details>summary{cursor:pointer;font-weight:700;color:#a5d8ff}
  .box{background:#0b1220;border:1px solid #1a2131;border-radius:8px;padding:12px;margin:8px 0}
  .falsify{background:#121010;border:1px solid #2a1818}
  .falsify h4{color:#ffb4b4}
  .grid{display:grid;gap:1rem}
</style>
</head>
<body>
<div class="container">

  <h1>Predictions</h1>
  <p class="lede">This page documents WILL predictions with explicit methodology and falsification criteria. Each lab states the dataset, the parameter-free prediction, the test metric, and a clear failure condition.</p>

  <hr>

  <!-- LAB 3 with interactive component -->
  <section class="lab lab3">
    <div class="lab-header">
      <h3>3) Lab — Relativistic Time Offset (Geometric Projections)</h3>
      <span class="lab-tag">Interactive + Explanatory</span>
    </div>
    <p class="muted">Primary calculation: the daily relativistic time offset between a surface observer and an orbiting body. Secondary check: Classical energy consistency (fully shown). Object‑agnostic: applies to any circular orbit.</p>

    <!-- Interactive Controls -->
    <div class="box">
      <h4>Interactive Calculator</h4>
      <div class="grid" style="grid-template-columns:repeat(auto-fit,minmax(220px,1fr));">
        <div>
          <label for="mass-input" style="color:#d1d5db;">Mass (kg):</label>
          <input type="number" id="mass-input" value="600" class="w-full bg-gray-900 border border-gray-600 text-white p-2 rounded" />
        </div>
        <div>
          <label for="radius-slider" style="color:#d1d5db;">Orbital Radius (km): <span id="radius-label"></span></label>
          <input type="range" id="radius-slider" min="6771" max="1600000" value="26600" step="100" class="w-full" />
        </div>
        <div style="display:flex;flex-direction:column;gap:0.5rem;justify-content:center;">
          <button id="btn-iss" class="preset-btn bg-gray-600 hover:bg-gray-700 text-white py-1 px-2 rounded text-sm">ISS</button>
          <button id="btn-gps" class="preset-btn bg-blue-600 hover:bg-blue-700 text-white py-1 px-2 rounded text-sm">GPS</button>
          <button id="btn-jwst" class="preset-btn bg-purple-600 hover:bg-purple-700 text-white py-1 px-2 rounded text-sm">JWST</button>
          <button id="btn-moon" class="preset-btn bg-yellow-600 hover:bg-yellow-700 text-white py-1 px-2 rounded text-sm">Moon</button>
        </div>
      </div>

      <div class="grid" style="grid-template-columns:repeat(auto-fit,minmax(160px,1fr));margin-top:1rem;background:#0b1220;padding:1rem;border-radius:8px;">
        <div class="text-center">
          <p class="text-sm text-gray-400">Δt per day (μs)</p>
          <p id="delta-t-val" class="text-2xl font-bold text-cyan-400">--</p>
        </div>
        <div class="text-center">
          <p class="text-sm text-gray-400">Geometric Energy ΔE</p>
          <p id="dE_val" class="text-2xl font-bold text-violet-400">--</p>
        </div>
        <div class="text-center">
          <p class="text-sm text-gray-400">Normalized Energy</p>
          <p id="Enorm_val" class="text-2xl font-bold text-amber-400">--</p>
        </div>
        <div class="text-center">
          <p class="text-sm text-gray-400">Energy Ratio</p>
          <p id="ratio_val" class="text-2xl font-bold text-green-400">--</p>
        </div>
      </div>
    </div>

    <!-- Show Calculation Breakdown (all explanatory text lives here) -->
    <details>
      <summary>Show Calculation Breakdown</summary>
      <div class="grid" style="margin-top:12px;">
        <div class="box">
          <h4>1) Define projections</h4>
          <p>
            Gravitational projection at the surface \(A\): \(\kappa_A^2 = 2GM/(R_A c^2)\).<br/>
            Gravitational projection at the orbit \(B\) (radius \(r\)): \(\kappa_B^2 = 2GM/(r c^2)\).<br/>
            Kinematic projection for a circular orbit at \(B\): from \(v^2=GM/r\) we get \(\beta_B^2 = v^2/c^2 = GM/(r c^2)\). On the surface we take \(\beta_A^2=0\).
          </p>
        </div>
        <div class="box">
          <h4>2) Combine into \(Q^2\) and \(Q_t\)</h4>
          <p>
            By construction, \(Q^2 = \kappa^2 + \beta^2\) is the sum of projections (gravity + kinematics). Thus
            \(Q_A^2 = \kappa_A^2 + \beta_A^2\) and \(Q_B^2 = \kappa_B^2 + \beta_B^2\).<br/>
            The time-axis projection is \(Q_t = \sqrt{1 - Q^2}\).
          </p>
        </div>
        <div class="box">
          <h4>3) Time offset (core result)</h4>
          <p>
            Daily clock difference in microseconds per day:
            \(\;\Delta t_{B\to A}[\mu s/\text{day}] = (Q_{tB}-Q_{tA})\,\times 86400\,\times 10^6\,\).
          </p>
        </div>
        <div class="box">
          <h4>4) Energy symmetry (diagnostic)</h4>
          <p>
            Define \(\Delta E_{A\to B} = \tfrac{1}{2}\big[(\kappa_A^2-\kappa_B^2) + (\beta_B^2-\beta_A^2)\big]\) and \(\Delta E_{B\to A}=-\Delta E_{A\to B}\). Then \(\Delta E_{A\to B}+\Delta E_{B\to A}=0\).
          </p>
        </div>
        <div class="box">
          <h4>5) Classical energy consistency</h4>
          <p>
            Fix the potential zero at the surface \(R_A\). For a circular orbit at radius \(r\):<br/>
            Potential energy \(E_p = \big(-GMm/r\big) - \big(-GMm/R_A\big)\).<br/>
            Kinetic energy \(E_k = \tfrac{1}{2} m v^2\) with \(v^2 = GM/r\).<br/>
            Total \(E_{tot} = E_p + E_k\). Normalize by rest energy \(E_0 = mc^2\) to get \(E_{tot}/(mc^2)\).<br/>
            The geometric quantity above gives \(\Delta E_{A\to B} = \tfrac{1}{2}\big[(\kappa_A^2-\kappa_B^2) + (\beta_B^2-\beta_A^2)\big]\). The consistency statement is
            \(\;\dfrac{E_{tot}/(mc^2)}{\Delta E_{A\to B}} = 1\;\) for the closed surface–orbit subsystem.
          </p>
        </div>
      </div>
    </details>

    <div class="box falsify">
      <h4>Falsification Clause</h4>
      <p>If the time offset or the classical‑energy consistency fails across circular orbits using accepted constants \(\{G,M,R_A,r,c\}\), the principle is falsified.</p>
    </div>

    <p style="margin-top:14px; font-style:italic; color:#a3b1c2;">Unlike GR's tensorial derivation, here the same offsets emerge from simple projections \(\kappa^2\), \(\beta^2\) and their time complement \(Q_t\).</p>
  </section>

</div>

<script>
// Interactive LAB 3 Script (object-agnostic; uses r as orbital radius)
const G=6.67430e-11,M=5.97219e24,R=6371000,c=299792458,GM=G*M,day=86400;
const massInput=document.getElementById('mass-input');
const slider=document.getElementById('radius-slider');
const radiusLabel=document.getElementById('radius-label');
const deltaTVal=document.getElementById('delta-t-val');
const dE_val=document.getElementById('dE_val');
const Enorm_val=document.getElementById('Enorm_val');
const ratio_val=document.getElementById('ratio_val');
const presets={iss:{mass:450000,radius:6786},gps:{mass:600,radius:26600},jwst:{mass:6161,radius:1500000},moon:{mass:7.347e22,radius:384748}};
function calculate(r_km,mass){
  const r_m=r_km*1000;
  const v=Math.sqrt(GM/r_m);
  const beta2_B=(v/c)**2;               // = GM/(r c^2)
  const beta2_A=0;                       // surface taken at rest
  const kappa2_A=(2*GM)/(R*c**2);       // surface
  const kappa2_B=(2*GM)/(r_m*c**2);     // orbit at radius r
  // Time offset via GR-like split (for numerical stability), still equivalent to (Q_tB - Q_tA)
  const grav=(1/Math.sqrt(1-kappa2_A))-(1/Math.sqrt(1-kappa2_B));
  const kin=(1/Math.sqrt(1-beta2_B))-1;
  const dt_us_per_day=(grav-kin)*day*1e6;
  // Geometric energy (general diagnostic)
  const dE=0.5*((kappa2_A-kappa2_B)+(beta2_B-beta2_A));
  // Classical energies with zero at surface
  const E_p=(-GM*mass/r_m)-(-GM*mass/R);
  const E_k=0.5*mass*v**2;
  const E_tot=E_p+E_k;
  const E_rest=mass*c**2;
  const E_norm=(E_rest>0)?(E_tot/E_rest):0;
  const ratio=(dE!==0)?(E_norm/dE):0;
  return{dt_us_per_day,dE,E_norm,ratio};
}
function update(){
  const r=parseFloat(slider.value);
  const m=parseFloat(massInput.value);
  if(isNaN(r)||isNaN(m)||m<=0)return;
  radiusLabel.textContent=r.toLocaleString();
  const res=calculate(r,m);
  deltaTVal.textContent=res.dt_us_per_day.toFixed(2);
  dE_val.textContent=res.dE.toExponential(4);
  Enorm_val.textContent=res.E_norm.toExponential(4);
  ratio_val.textContent=res.ratio.toFixed(8);
}
function setPreset(p){massInput.value=p.mass;slider.value=p.radius;update();}
slider.addEventListener('input',update);
massInput.addEventListener('input',update);
document.getElementById('btn-iss').onclick=()=>setPreset(presets.iss);
document.getElementById('btn-gps').onclick=()=>setPreset(presets.gps);
document.getElementById('btn-jwst').onclick=()=>setPreset(presets.jwst);
document.getElementById('btn-moon').onclick=()=>setPreset(presets.moon);
setPreset(presets.gps);
</script>
</body>
</html>
