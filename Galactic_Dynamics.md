---
layout: default
title: "Galactic Dynamics"
permalink: /Galactic_Dynamics/
---

{% include interactive/galaxy_zoo.html %}

<div class="markdown-content py-8">
  <div class="border-b border-gray-700 pb-6 mb-8">
    <h1 class="text-4xl font-extrabold tracking-tight text-white">Galactic Dynamics Calculator</h1>
    <p class="mt-4 text-xl text-blue-300 font-light">
      Testing a new theory of the Universe: Can we explain galaxies without Dark Matter?
    </p>
  </div>

  <h2 class="text-2xl font-bold text-white mb-4">1. The Mystery: Why don't galaxies fly apart?</h2>
  
  <p class="text-gray-300 mb-4">
    Here is the biggest puzzle in modern astrophysics: <strong>Galaxies spin too fast.</strong>
  </p>
  <p class="text-gray-300 mb-4">
    According to standard physics (Newton & Einstein), the gravity from visible stars and gas isn't strong enough to hold them together. Stars at the edge should fly off into space. But they don't.
  </p>
  <p class="text-gray-300 mb-6">
    To fix this, scientists invented <b>"Dark Matter"</b>—invisible ghost material that supposedly surrounds every galaxy to add extra gravity. But after 40 years of searching, no one has ever found a single particle of it.
  </p>

  <div class="bg-gray-800/60 p-6 rounded-xl border border-blue-500/30 my-6 shadow-lg">
    <h3 class="text-xl font-bold text-white mb-2">Our Solution: It's not new matter, it's new math.</h3>
    <p class="text-gray-300">
      We propose that gravity works differently at the galactic edge. We don't need invisible matter. We just need to understand how stars interact with the <b>Cosmic Horizon</b>—the edge of the observable Universe.
    </p>
  </div>

  <h2 class="text-2xl font-bold text-white mb-4">2. How it Works: The "Cosmic Hum"</h2>
  
  <p class="text-gray-300 mb-4">
    Imagine the Universe creates a constant, quiet background vibration—like a fundamental hum ($H_0$).
  </p>
  
  <ul class="space-y-4 text-gray-300 mb-8">
    <li class="flex items-start">
      <span class="bg-blue-600 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-3 mt-1 flex-shrink-0">1</span>
      <div>
        <b>In the Center (Newton's World):</b> Near the middle of a galaxy, gravity is loud. It drowns out the background hum. Stars move exactly as Newton predicted.
      </div>
    </li>
    <li class="flex items-start">
      <span class="bg-purple-600 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-3 mt-1 flex-shrink-0">2</span>
      <div>
        <b>At the Edge (Resonance):</b> Far from the center, gravity gets quiet. Suddenly, the "Cosmic Hum" becomes audible. The stars stop listening to the center and start synchronizing with the Universe itself. This gives them an extra energy boost, keeping them in orbit without Dark Matter.
      </div>
    </li>
  </ul>

  <div class="bg-gray-900/50 p-6 rounded-xl border border-gray-700 mb-8">
    <p class="text-gray-400 text-sm font-mono mb-2 uppercase tracking-wider">The Formula</p>
    <div class="overflow-x-auto mb-4">
      $$V_{Total} = V_{Stars+Gas} \cdot \sqrt{1 + 2 \exp\left(-\frac{Gravity}{Threshold}\right)}$$
    </div>
    <p class="text-gray-400 text-sm">
      There is only one magic number here: the <b>Threshold</b>. It is calculated directly from the size of the Universe. We don't tweak it for every galaxy. It's the same for everyone.
    </p>
  </div>

  <h2 class="text-2xl font-bold text-white mb-4">3. Being Honest with Data</h2>

  <h3 class="text-lg font-bold text-blue-400 mb-2">Real Galaxies are Messy</h3>
  <p class="text-gray-300 mb-4">
    We test this theory against 175 real galaxies from the SPARC database. But real galaxies aren't perfect mathematical circles. They are messy, turbulent clouds of gas. They warp, wobble, and churn.
  </p>
  <p class="text-gray-300 mb-6">
    Sometimes, the data says the speed is measured with an accuracy of 1 km/s. In a turbulent gas cloud, that's physically impossible (it's like measuring the speed of smoke to the millimeter).
    <br><br>
    To be fair, we use a <b>"Reality Filter"</b> (Error Floor). We assume the gas is always a bit turbulent (at least 5 km/s or 5% of speed). This stops us from being penalized for predicting smooth physics in a messy world.
  </p>

  <h2 class="text-2xl font-bold text-white mb-4">4. What do the numbers mean?</h2>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
    <div class="bg-gray-800/40 p-5 rounded-lg border border-gray-700">
      <h4 class="font-bold text-white mb-2">RMSE (Accuracy)</h4>
      <p class="text-sm text-gray-400">
        How far off is our line from the dots?
        <br>
        <span class="text-blue-300">Lower is better.</span>
        <br>
        Result: <b>~9 km/s</b>. (This is extremely precise for astrophysics).
      </p>
    </div>
    <div class="bg-gray-800/40 p-5 rounded-lg border border-gray-700">
      <h4 class="font-bold text-white mb-2">Reduced χ² (Fit Quality)</h4>
      <p class="text-sm text-gray-400">
        Does the line pass through the error bars?
        <br>
        <span class="text-purple-300">Close to 1.0 is perfect.</span>
        <br>
        Result: <b>~1.6</b>. (This means the theory fits the data almost perfectly).
      </p>
    </div>
  </div>

  <div class="mt-8">
    {% include interactive/galactic_dynamics.html %}
  </div>

</div>