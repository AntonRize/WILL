---
layout: default
title: Interactive Geometry
---

<style>
    /* Styles for interactive cards, sliders, and text formatting.
      FIX V2: Applying a more robust fix for the non-wrapping text issue.
      This targets the sections directly and resets white-space properties to ensure readability.
    */
    #section-1, #section-2, #section-3, #section-4, #section-5, #section-6, #section-7, #section-8, #section-9, #conclusion {
        white-space: normal;
    }

    #section-1 p, #section-1 li,
    #section-2 p, #section-2 li,
    #section-3 p, #section-3 li,
    #section-4 p, #section-4 li, #section-4 td,
    #section-5 p, #section-5 li,
    #section-6 p, #section-6 li,
    #section-7 p, #section-7 li, #section-7 td,
    #section-8 p, #section-8 li,
    #section-9 p, #section-9 li,
    #conclusion p, #conclusion li {
        white-space: normal !important;
        word-wrap: break-word !important;
        line-height: 1.75;
    }

    .interactive-card {
        background-color: #1f2937;
        border: 1px solid #374151;
        border-radius: 0.75rem;
        padding: 1.5rem;
        margin: 2rem 0;
        display: grid;
        grid-template-columns: 1fr;
        gap: 1.5rem;
        align-items: center;
    }
    @media (min-width: 768px) {
        .interactive-card {
            grid-template-columns: 1fr 1fr;
        }
    }
    .highlight { color: #6ee7b7; }
    .slider {
        width: 100%;
        -webkit-appearance: none;
        height: 8px;
        background: #4b5563;
        border-radius: 5px;
        outline: none;
    }
    .slider::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 20px;
        height: 20px;
        background: #60a5fa;
        cursor: pointer;
        border-radius: 50%;
    }
    .slider::-moz-range-thumb {
        width: 20px;
        height: 20px;
        background: #60a5fa;
        cursor: pointer;
        border-radius: 50%;
    }
    .equation-box {
        background-color: #111827;
        padding: 0.75rem 1rem;
        border-radius: 0.5rem;
        margin-top: 1rem;
        text-align: center;
        font-family: monospace;
    }
</style>

<main class="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">

    <header class="text-center mb-12">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">A Narrative Exposition of WILL Geometry</h1>
        <p class="text-xl text-gray-400">An intuitive journey into a new model of physics.</p>
    </header>

    {% include narrative.md part='intro' %}
    {% include narrative.md part='section1' %}
    {% include narrative.md part='section2' %}
    
    {% include narrative.md part='section3_intro' %}

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
        <div><canvas id="betaCircleChart"></canvas></div>
    </div>

    {% include narrative.md part='section3_motion_time' %}
    {% include narrative.md part='section3_emc2' %}
    {% include narrative.md part='section3_triangle_intro' %}

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
        <div><canvas id="emc2-canvas"></canvas></div>
    </div>

    {% include narrative.md part='section3_outro' %}

    {% include narrative.md part='section4_intro' %}

    <div class="interactive-card">
        <div>
            <h3 class="text-2xl font-bold mb-4 text-gray-100">Interactive GR Projection</h3>
            <label for="kappa-slider" class="font-semibold text-gray-200">Gravity ($\kappa$): <span id="kappa-value" class="highlight font-bold">0.71</span></label>
            <input type="range" min="0" max="1" value="0.71" step="0.01" class="slider mt-2 mb-4" id="kappa-slider">
            <div class="space-y-2 text-lg">
                <p>$\theta_G$: <span id="theta-g-value" class="highlight">45.2°</span></p>
                <p>$T_c = \cos(\theta_G)$: <span id="tc-value" class="highlight">0.704</span></p>
                <p>$\kappa = \sin(\theta_G)$: <span id="kappa-sin-value" class="highlight">0.710</span></p>
            </div>
        </div>
        <div><canvas id="kappaCircleChart"></canvas></div>
    </div>

    {% include narrative.md part='section4_gravity_time' %}
    {% include narrative.md part='section4_outro' %}

    {% include narrative.md part='section5' %}

    <div class="interactive-card">
        <div>
            <h3 class="text-2xl font-bold mb-4 text-gray-100">The Core Geometry</h3>
            <label for="unified-slider" class="font-semibold text-gray-200">Control Parameter ($\kappa$): <span id="unified-kappa-main-value" class="highlight font-bold">0.910</span></label>
            <input type="range" min="0" max="1.414" value="0.91" step="0.001" class="slider mt-2 mb-4" id="unified-slider">
            <div class="grid grid-cols-2 gap-4 text-lg">
                <div>
                    <p>$\kappa$ (Potential): <span id="unified-kappa-value" class="highlight">0.910</span></p>
                    <p>$\theta_G$: <span id="unified-theta-g-value" class="highlight">65.5°</span></p>
                    <p>$T_c = \cos(\theta_G)$: <span id="unified-tc-value" class="highlight">0.415</span></p>
                </div>
                <div>
                    <p>$\beta$ (Kinetic): <span id="unified-beta-value" class="highlight">0.643</span></p>
                    <p>$\theta_S$: <span id="unified-theta-s-value" class="highlight">49.9°</span></p>
                    <p>$L_c = \sin(\theta_S)$: <span id="unified-lc-value" class="highlight">0.765</span></p>
                </div>
            </div>
            <div class="equation-box text-lg mt-4">$Q^2 = \kappa^2 + \beta^2 = $ <span id="q-squared-value" class="highlight">1.24</span></div>
        </div>
        <div><canvas id="unifiedBetaKappaChart"></canvas></div>
    </div>
    
    {% include narrative.md part='section6' %}
    {% include narrative.md part='section7' %}
    {% include narrative.md part='section8' %}
    {% include narrative.md part='section9' %}
    {% include narrative.md part='conclusion' %}

</main>

<script src="{{ '/assets/js/will-charts.js' | relative_url }}"></script>
