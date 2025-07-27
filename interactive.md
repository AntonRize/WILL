---
layout: default
title: Interactive Playground
permalink: /interactive/
---

<style>
        body {
            font-family: 'Inter', sans-serif;
            background-color: #111827;
            color: #E5E7EB;
            scroll-behavior: smooth;
        }
        .section-title {
            font-size: 2.25rem;
            font-weight: 800;
            color: #F9FAFB;
            margin-bottom: 1rem;
        }
        .narrative-text {
            font-size: 1.125rem;
            line-height: 1.75;
            color: #D1D5DB;
            max-width: 800px;
            margin: 0 auto 2rem auto;
        }
        .card {
            background-color: #1F2937;
            border-radius: 0.75rem;
            padding: 2.5rem;
            box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
            border: 1px solid #374151;
            margin: 4rem auto;
            max-width: 1100px;
        }
        .interactive-container {
            display: grid;
            grid-template-columns: 1fr;
            gap: 2.5rem;
            align-items: center;
        }
        @media (min-width: 1024px) {
            .interactive-container {
                grid-template-columns: 1fr 1fr;
            }
        }
        .canvas-container {
            position: relative;
            width: 100%;
            min-height: 380px;
            margin-left: auto;
            margin-right: auto;
            aspect-ratio: 1 / 1;
        }
        .canvas-container canvas {
            width: 100%;
            height: 100%;
            display: block;
        }
        .slider {
            -webkit-appearance: none;
            width: 100%;
            height: 8px;
            border-radius: 5px;
            background: #374151;
            outline: none;
            opacity: 0.7;
            transition: opacity .2s;
        }
        .slider:hover {
            opacity: 1;
        }
        .slider::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            width: 24px;
            height: 24px;
            border-radius: 50%;
            background: #2DD4BF;
            cursor: pointer;
            border: 4px solid #1F2937;
            box-shadow: 0 0 5px rgba(0,0,0,0.2);
        }
        .slider::-moz-range-thumb {
            width: 24px;
            height: 24px;
            border-radius: 50%;
            background: #2DD4BF;
            cursor: pointer;
            border: 4px solid #1F2937;
            box-shadow: 0 0 5px rgba(0,0,0,0.2);
        }
        .highlight {
            color: #5EEAD4;
            font-weight: 600;
        }
        .equation-box {
            background-color: #1E293B;
            border-left: 4px solid #38BDF8;
            padding: 1rem 1.5rem;
            border-radius: 0.5rem;
            font-family: monospace;
            font-size: 1.25rem;
            text-align: center;
            margin: 2rem 0;
            color: #E0F2FE;
        }
        .nav-link {
            padding: 0.5rem 1rem;
            border-radius: 0.5rem;
            transition: background-color 0.3s, color 0.3s;
            color: #D1D5DB;
        }
        .nav-link:hover, .nav-link.active {
            background-color: #374151;
            color: #F9FAFB;
        }
        header {
           background-color: rgba(17, 24, 39, 0.8);
        }
        /* Styles for spoiler/details from the new text */
        .spoiler, details {
            background-color: #1e293b;
            border: 1px solid #374151;
            border-radius: 0.5rem;
            padding: 1rem;
            margin: 1.5rem 0;
        }
        summary {
            cursor: pointer;
            font-weight: 600;
            color: #93c5fd;
        }
        table {
            width: 100%;
            margin-top: 1rem;
            border-collapse: collapse;
        }
        th, td {
            border: 1px solid #374151;
            padding: 0.75rem;
            text-align: left;
        }
        th {
            background-color: #1f2937;
        }
</style>


<main class="container mx-auto px-4 py-12 md:py-20">
  <div class="prose mx-auto max-w-3xl px-4">

    <section id="hero" class="text-center mb-20 md:mb-32">
        <h1 class="text-4xl md:text-6xl font-extrabold text-gray-50 mb-6 leading-tight">The Shape of Energy</h1>
        <p class="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">An interactive exploration of a theory where space, time, and energy are derived from a single, fundamental principle.</p>
        <div class="bg-gray-800 border border-gray-700 shadow-lg rounded-lg p-6 inline-block">
            <p class="text-xl md:text-2xl font-semibold text-cyan-400">SPACETIME &equiv; ENERGY EVOLUTION</p>
        </div>
    </section>

<section id="postulate" class="scroll-mt-20">
    <div id="postulate-content">
        {% capture content %}{% include narrative.md part="intro" %}{% endcapture %}{{ content | markdownify }}
    </div>
</section>

<section id="sr" class="scroll-mt-20">
    <div id="sr-content">
        {% capture content %}{% include narrative.md part="sr" %}{% endcapture %}{{ content | markdownify }}
    </div>
</section>

<h4 class="mt-10 text-xl font-semibold">β vs 1/γ on the unit circle</h4>
<canvas id="betaGammaChart" class="w-full sm:w-2/3 aspect-[4/3] my-6"></canvas>
<script>
const deg = Array.from({length:91},(_,i)=>i);
const cos = deg.map(t=>Math.cos(t*Math.PI/180));
const sin = deg.map(t=>Math.sin(t*Math.PI/180));   // 1/γ

new Chart(betaGammaChart,{
 type:'line',
 data:{labels:deg,
       datasets:[{label:'β = cos θ',data:cos,borderWidth:2},
                 {label:'1/γ = sin θ',data:sin,borderWidth:2}]},
 options:{responsive:true,
          scales:{x:{title:{display:true,text:'θ (deg)'}},
                  y:{min:0,max:1}}}
});
</script>


<script>
const betaTri = new Chart(betaTriangle,{type:'line',data:{datasets:[{label:'β-γ',data:[{x:0,y:1},{x:0.65,y:1.316}]}]},options:{responsive:true,scales:{x:{min:0,max:1},y:{min:0,max:3}}});
function updateBetaTri(){
  const b=parseFloat(document.getElementById('emc2-beta-slider').value);
  const g=1/Math.sqrt(1-b*b);
  betaTri.data.datasets[0].data=[{x:0,y:1},{x:b,y:g}];
  betaTri.update();
}
document.getElementById('emc2-beta-slider').addEventListener('input',updateBetaTri);
updateBetaTri();
</script>

        

<section id="gr" class="scroll-mt-20">
    <div id="gr-content">
        {% capture content %}{% include narrative.md part="gr" %}{% endcapture %}{{ content | markdownify }}
    </div>
    <div class="card">
        <div class="interactive-container">
            <div class="canvas-container">
                <canvas id="gr-canvas"></canvas>
            </div>
            <div class="flex flex-col justify-center">
                <h3 class="text-2xl font-bold mb-4 text-gray-100">Gravity and Time Dilation</h3>
                <label for="kappa-slider" class="font-semibold text-gray-200">Gravity (&kappa;): <span id="kappa-value" class="highlight font-bold">0.500</span></label>
                <input type="range" min="0" max="0.999" value="0.5" step="0.001" class="slider mt-2 mb-6" id="kappa-slider">
                <canvas id="gravityPlot" class="w-full h-56 my-6"></canvas>
                <div class="space-y-3 text-lg">
                    <p>Radius (r): <span id="radius-value" class="highlight">4.00</span> Rₛ</p>
                    <p>Grav. Time Dilation (T_c): <span id="time-contraction-value" class="highlight">0.866</span></p>
                    <p>Clocks run <span id="gr-time-dilation-value" class="highlight">13.4%</span> slower.</p>
                </div>
            </div>
        </div>
        <script>
const gChart=new Chart(gravityPlot,{type:'line',data:{datasets:[{label:'κ',data:[{x:0,y:0.5},{x:1,y:0.5}]}]},options:{responsive:true,scales:{x:{min:0,max:1},y:{min:0,max:1}}});
function updateGr(){
  const k=parseFloat(document.getElementById('kappa-slider').value);
  gChart.data.datasets[0].data=[{x:0,y:k},{x:1,y:k}];
  gChart.update();
}
document.getElementById('kappa-slider').addEventListener('input',updateGr);
updateGr();
        </script>
    </div>
</section>

<section id="unification" class="scroll-mt-20">
    <div id="unification-content">
        {% capture content %}{% include narrative.md part="unification" %}{% endcapture %}{{ content | markdownify }}
    </div>
    <div class="interactive-container">
        <div class="flex flex-col justify-center">
            <h3 class="text-2xl font-bold mb-4 text-gray-100">Unified Q‑circle (β–κ plane)</h3>
            <label for="unif-slider" class="font-semibold text-gray-200">
                Total Energy Share (Q²): <span id="unif-q2-display" class="highlight font-bold">1.000</span>
            </label>
            <input type="range" id="unif-slider" min="0" max="1.5" value="1" step="0.001" class="slider mt-2 mb-6">
            <div class="grid grid-cols-2 gap-x-6 gap-y-3 text-lg">
                <div>
                    <p>κ (Gravity):</p>
                    <p class="highlight" id="unif-kappa-value">0.816</p>
                </div>
                <div>
                    <p>β (Kinetic):</p>
                    <p class="highlight" id="unif-beta-value">0.577</p>
                </div>
                <div>
                    <p>θ_G (from κ):</p>
                    <p class="highlight" id="unif-thetaG-value">54.74°</p>
                </div>
                <div>
                    <p>θ_S (from β):</p>
                    <p class="highlight" id="unif-thetaS-value">54.74°</p>
                </div>
                <div>
                    <p>T_c = cos(θ_G):</p>
                    <p class="highlight" id="unif-Tc-value">0.577</p>
                </div>
                <div>
                    <p>L_c = sin(θ_S):</p>
                    <p class="highlight" id="unif-Lc-value">0.816</p>
                </div>
            </div>
            <div class="equation-box text-base mt-6">
                Q² = κ² + β² = <span id="unif-Qsq-value" class="font-bold">1.000</span>
            </div>
        </div>
        <div class="canvas-container relative">
            <canvas id="qCircle" class="w-full aspect-[1/1] my-6"></canvas>
        </div>
        <script>
 const loop=Array.from({length:361},(_,i)=>i*Math.PI/180);
 const circle=loop.map(t=>({x:Math.cos(t),y:Math.sin(t)}));

 const chart=new Chart(qCircle,{
   type:'scatter',
   data:{datasets:[
     {label:'Q² = 1 (photon sphere)',data:circle,showLine:true,borderWidth:1},
     {label:'State',data:[{x:0.577,y:0.816}],pointRadius:5}
   ]},
   options:{aspectRatio:1,scales:{x:{min:0,max:1},y:{min:0,max:1.2}}}
 });
 window.updateQ=q=>{
   const beta=Math.sqrt(q/3), kappa=Math.sqrt(q-beta*beta);
   chart.data.datasets[1].data=[{x:beta,y:kappa}];
   chart.update();
 };
        </script>
    </div>
</section>




<script>
// Q GRAPH !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const qSlider = document.getElementById("q-slider");
const kappaVal = document.getElementById("kappa-val");
const betaVal = document.getElementById("beta-val");
const thetaGVal = document.getElementById("thetaG-val");
const thetaSVal = document.getElementById("thetaS-val");
const sumSqVal = document.getElementById("sum-sq-val");
const photonStatus = document.getElementById("photon-sphere-status");
const photonInfo = document.getElementById("photon-sphere-info");

function updateValues(q) {
    const beta2 = q * q / 3;
    const kappa2 = 2 * q * q / 3;
    const beta = Math.sqrt(beta2);
    const kappa = Math.sqrt(kappa2);
    const thetaS = Math.asin(Math.min(beta, 1)) * 180 / Math.PI;
    const thetaG = Math.acos(Math.min(kappa, 1)) * 180 / Math.PI;
    betaVal.textContent = beta.toFixed(3);
    kappaVal.textContent = kappa.toFixed(3);
    thetaSVal.textContent = thetaS.toFixed(2) + "";
    thetaGVal.textContent = thetaG.toFixed(2) + "";
    sumSqVal.textContent = (beta2 + kappa2).toFixed(3);
    if (Math.abs(q - 1) < 0.01) {
        sumSqVal.style.color = "#facc15";
        photonStatus.textContent = "Photon Sphere!";
        photonInfo.classList.remove("hidden");
    } else {
        sumSqVal.style.color = "#a78bfa";
        photonStatus.textContent = "";
        photonInfo.classList.add("hidden");
    }
}
qSlider.addEventListener("input", e => updateValues(Number(e.target.value)));
updateValues(Number(qSlider.value));
</script>

<section id="symmetry" class="scroll-mt-20">
    <div id="symmetry-content">
        {% capture content %}{% include narrative/symmetry.md %}{% endcapture %}
        {{ content | markdownify }}
    </div>
</section>

<section id="oneline" class="scroll-mt-20">
    <div id="oneline-content">
        {% capture content %}{% include narrative/oneline.md %}{% endcapture %}
        {{ content | markdownify }}
    </div>
</section>




<p class="text-center text-sm text-cyan-400">
    Detailed derivations: <a href="https://antonrize.github.io/WILL/documents/WILL_PART_I_SR_GR.pdf" class="hover:underline">WILL_PART_I_SR_GR.pdf</a>
</p>

<section id="validation" class="scroll-mt-20">
    <div id="validation-content">
        {% capture content %}{% include narrative.md part="validation" %}{% endcapture %}{{ content | markdownify }}
    </div>
    <div class="card">
        <div class="grid md:grid-cols-2 gap-8">
            <div class="bg-gray-900 p-6 rounded-lg">
                <h3 class="text-2xl font-bold mb-4 text-gray-100">1. GPS Time Correction</h3>
                <div class="bg-blue-50 border-l-4 border-blue-400 p-4 my-6 text-sm italic">
                  ⚙️ Interactive Desmos calculation coming soon…
                </div>
            </div>
            <div class="bg-gray-900 p-6 rounded-lg">
                <h3 class="text-2xl font-bold mb-4 text-gray-100">2. Mercury's Orbital Precession</h3>
                <div class="canvas-container !aspect-video !min-h-[250px]">
                    <canvas id="mercury-canvas"></canvas>
                </div>
                <div class="bg-blue-50 border-l-4 border-blue-400 p-4 my-6 text-sm italic">
                           
                  /polish-interactive.html-for-production-quality
                  ⚙️ Interactive Desmos calculation coming soon…
                </div>
            </div>
        </div>
    </div>
</section>


</div>
</main>

<footer class="text-center py-10 border-t border-gray-700 mt-20">
    <p class="text-gray-400">Based on the work "WILL: Unified Framework" by Anton Rize.</p>
    <p class="text-sm text-gray-500 mt-2">
        For the full mathematical theory, see:
        <a href="https://antonrize.github.io/WILL/parts/" class="text-cyan-400 hover:underline">Full Papers & Results</a>
        &
        <a href="https://antonrize.github.io/WILL/results/" class="text-cyan-400 hover:underline">Results & Applications</a>
    </p>
</footer>


</body>
</html>
