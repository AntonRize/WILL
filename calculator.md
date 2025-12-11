---
layout: default
title: "Galactic Dynamics Calculator"
---

{% include interactive/galaxy_zoo.html %}

<div class="markdown-content py-8">
  <h1 class="text-4xl font-extrabold tracking-tight">Galactic Dynamics Calculator</h1>

  <p class="mt-4 text-lg text-gray-400">
    <b>Update (Geometric Screening):</b> The model calculates dynamics using the galaxy's intrinsic geometry.
    <br>
    $$V_{WILL}(r) = V_{bary}(r) \cdot \sqrt{1 + 2 \exp(-3 R_{disk}/r)}$$
    $$V_{bary}^2 = V_{gas}^2 + Υ* \cdot (V_{disk}^2 + V_{bul}^2)$$
  </p>
  
  <p class="mt-2 text-gray-400">
    The vacuum effect is screened by the high baryonic density within the disk scale length ($R_{disk}$). As the radius exceeds the effective disk edge ($r > 3R_{disk}$), the screening fades, and the vacuum energy ($\sqrt{3}$ factor) emerges naturally.
  </p>

  <div class="rounded-xl p-4 mt-4 border border-gray-700 bg-gray-800/40">
    <p class="text-gray-200 font-semibold">In short</p>
    <p class="text-gray-200"><em>“Dark Matter is the weight of the WILL structure itself.”</em> 
    Dynamics are determined by the closure condition of the space-time-energy itself. Detailed "WILL Galactic Dynamics" paper is in development.</p>
  </div>

  <div class="mt-6 text-gray-300 leading-relaxed" id="howto">
    <h3 class="text-xl font-bold mb-2">How to use</h3>
    <ul class="list-disc pl-6 space-y-1">
    <li><b>Data:</b> rotation curves from the <b>SPARC</b> catalog.</li>
    <li><b>Physics:</b> Geometric screening based on disk scale ($R_{disk}$). No free parameters.</li>
    <li><b>Controls:</b> Pick a galaxy; adjust $\Upsilon_*$ with the slider. Left plot: Observed vs WILL Prediction. Right plot: gas/disk/bulge contributions.</li>
    <li><b>Quality:</b> Per-galaxy RMSE is shown below. The button builds the RMSE distribution by type.</li>
    </ul>
  </div>

  {% include interactive/galactic_dynamics.html %}

</div>