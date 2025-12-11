---
layout: default
title: "Galactic Dynamics Calculator"
---

{% include interactive/galaxy_zoo.html %}

<div class="markdown-content py-8">
  <h1 class="text-4xl font-extrabold tracking-tight">Galactic Dynamics Calculator</h1>

  <p class="mt-4 text-lg text-gray-400">
    <b>Update (Vacuum Acceleration Screening):</b> The model calculates dynamics based on the intensity of the baryonic field relative to the vacuum scale.
    <br>
    $$V_{WILL}(r) = V_{bary}(r) \cdot \sqrt{1 + 2 \exp\left(-\frac{g_{bary}}{a_{vac}}\right)}$$
  </p>
  
  <div class="bg-gray-800/50 p-4 rounded border-l-4 border-blue-500 my-4">
    <p class="text-gray-300 text-sm">
      Where <b>\(g_{bary} = V_{bary}^2 / r\)</b> is the local baryonic acceleration, and 
      <b>\(a_{vac} = \frac{c H_0}{2\pi}\)</b> is the fundamental acceleration of the cosmic horizon.
    </p>
  </div>

  <p class="mt-2 text-gray-400">
    The vacuum energy is screened when the local acceleration \(g_{bary}\) exceeds the vacuum threshold \(a_{vac}\) (in the dense center). As the field weakens (\(g_{bary} < a_{vac}\)), the screening fades, and the full vacuum contribution (the \(\sqrt{3}\) factor) emerges naturally.
  </p>

  <div class="rounded-xl p-4 mt-4 border border-gray-700 bg-gray-800/40">
    <p class="text-gray-200 font-semibold">In short</p>
    <p class="text-gray-200"><em>“Dark Matter is the weight of the vacuum structure itself.”</em> 
    Dynamics are determined by the ratio of local energy density to the structural capacity of the vacuum.</p>
  </div>

  <div class="mt-6 text-gray-300 leading-relaxed" id="howto">
    <h3 class="text-xl font-bold mb-2">How to use</h3>
    <ul class="list-disc pl-6 space-y-1">
    <li><b>Data:</b> rotation curves from the <b>SPARC</b> catalog.</li>
    <li><b>Physics:</b> Screening determined by the Cosmic Horizon scale ($H_0$). No free parameters per galaxy.</li>
    <li><b>Controls:</b> Pick a galaxy; adjust $\Upsilon_*$ with the slider. Left plot: Observed vs WILL Prediction. Right plot: gas/disk/bulge contributions.</li>
    <li><b>Quality:</b> Per-galaxy RMSE is shown below. The button builds the RMSE distribution by type.</li>
    </ul>
  </div>

  {% include interactive/galactic_dynamics.html %}

</div>