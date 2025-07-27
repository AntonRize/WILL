layout: default title: Interactive Geometry<main class="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8"><header class="text-center mb-12">
    <h1 class="text-4xl md:text-5xl font-bold mb-4">A Narrative Exposition of WILL Geometry</h1>
    <p class="text-xl text-gray-400">An intuitive journey into a new model of physics.</p>
</header>

{% include narrative.md part='intro' %}
{% include narrative.md part='section1' %}
{% include narrative.md part='section2' %}

{% include narrative.md part='section3_intro' %}

<!-- Interactive Chart 1: Beta Circle -->
<div class="interactive-card">
    <div>
        <h3 class="text-2xl font-bold mb-4 text-gray-100">Interactive SR Projection</h3>
        <label for="beta-slider" class="font-semibold text-gray-200">Velocity ($\beta$): <span id="beta-value" class="highlight font-bold">0.50</span></label>
        <input type="range" min="0" max="1" value="0.5" step="0.01" class="slider mt-2 mb-4" id="beta-slider">
        <div class="space-y-2 text-lg">
            <p>$\theta_S$: <span id="theta-s-value" class="highlight">60.0°</span></p>
            <p>$L_c = \sin(\theta_S)$: <span id="lc-value" class="highlight">0.866</span></p>
            <p>$\beta = \cos(\theta_S)$: <span id="beta-cos-value" class="highlight">0.500</span></p>
        </div>
    </div>
    <div>
        <canvas id="betaCircleChart"></canvas>
    </div>
</div>

{% include narrative.md part='section3_motion_time' %}
{% include narrative.md part='section3_emc2' %}
{% include narrative.md part='section3_triangle_intro' %}

<!-- Interactive Chart 2: Energy-Momentum Triangle -->
<div class="interactive-card">
    <div>
        <h3 class="text-2xl font-bold mb-4 text-gray-100">The Energy-Momentum Triangle</h3>
        <label for="emc2-beta-slider" class="font-semibold text-gray-200">Velocity ($\beta$ = v/c): <span id="emc2-beta-value" class="highlight font-bold">0.650</span></label>
        <input type="range" min="0" max="0.999" value="0.65" step="0.001" class="slider mt-2 mb-6" id="emc2-beta-slider">
        <div class="space-y-3 text-lg">
            <p>Rest Energy ($E_0$): <span class="highlight">1.0 $m_0c^2$ (constant)</span></p>
            <p>Momentum ($pc$): <span id="emc2-pc-value" class="highlight">0.855</span> $m_0c^2$</p>
            <p>Total Energy ($E$): <span id="emc2-energy-value" class="highlight">1.316</span> $m_0c^2$</p>
        </div>
        <div class="equation-box text-lg mt-4">$E^2 = (pc)^2 + (m_0c^2)^2$</div>
    </div>
    <div>
        <canvas id="emc2-canvas"></canvas>
    </div>
</div>

{% include narrative.md part='section3_outro' %}

<!-- NOTE: The rest of the sections would follow a similar pattern -->
<!-- For example, for Section 4: -->
<!-- {% include narrative.md part='section4_intro' %} -->
<!-- HTML for Kappa chart here -->
<!-- {% include narrative.md part='section4_outro' %} -->
</main><!-- Load the interactive chart logic --><script src="{{ '/assets/js/will-charts.js' | relative_url }}"></script>
