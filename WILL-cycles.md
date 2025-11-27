---
layout: default
title: Relational Orbital Mechanics
permalink: /cycles/
---

<div class="max-w-4xl mx-auto px-4 py-12 space-y-12 text-gray-300 font-sans leading-relaxed">

    <div class="space-y-6">
        <h1 class="text-3xl md:text-5xl font-bold text-white tracking-tight border-b border-gray-800 pb-6">
            Gravity Without Mass or \(G\)
        </h1>
        
        <p class="text-lg text-gray-300">
            In classical physics, we are conditioned to think: <em class="text-gray-500">"Mass curves spacetime, and this curvature tells matter how to move."</em> 
            But what is Mass? We never measure it directly. We only observe how light and matter interact.
        </p>

        <p class="text-lg text-gray-300">
            <strong>WILL Relational Geometry</strong> proposes a paradigm shift. Instead of introducing invisible entities (Mass, Dark Matter, \(G\)), we describe orbits strictly through what is <strong>observable</strong>.
        </p>
        
        <blockquote class="border-l-4 border-blue-500 pl-6 py-4 my-8 bg-blue-900/10 italic text-xl text-gray-100">
            "Orbital dynamics requires no mass, no metric, and no curved spacetime. 
            Everything follows from the algebraic balance of two light projections."
        </blockquote>
    </div>

    <div class="grid md:grid-cols-2 gap-8 py-4">
        <div class="bg-gray-900/50 p-6 rounded-lg border border-gray-800 hover:border-blue-500/30 transition-colors">
            <h3 class="text-xl font-bold text-blue-400 mb-3 flex items-center gap-2">
                <span class="text-xs font-mono bg-blue-900/50 px-2 py-1 rounded text-blue-200">PROJECTION 1</span> 
                Potential (\(\kappa\))
            </h3>
            <p class="text-sm text-gray-400 mb-4 font-bold uppercase tracking-wider">The Gravitational Projection</p>
            <p class="text-sm">
                A measure of how "stretched" light is when escaping the system (Gravitational Redshift \(z\)).
            </p>
            <div class="mt-4 p-3 bg-black rounded font-mono text-sm text-center text-blue-300 border border-gray-800">
                \(\kappa \approx \sqrt{2z}\)
            </div>
            <p class="text-xs text-gray-500 mt-3 italic">Instead of saying "There is mass," we say "Light struggles to escape."</p>
        </div>

        <div class="bg-gray-900/50 p-6 rounded-lg border border-gray-800 hover:border-red-500/30 transition-colors">
            <h3 class="text-xl font-bold text-red-400 mb-3 flex items-center gap-2">
                <span class="text-xs font-mono bg-red-900/50 px-2 py-1 rounded text-red-200">PROJECTION 2</span> 
                Kinematics (\(\beta\))
            </h3>
            <p class="text-sm text-gray-400 mb-4 font-bold uppercase tracking-wider">The Kinematic Projection</p>
            <p class="text-sm">
                A measure of how fast the object moves relative to the speed of light (Doppler Shift).
            </p>
            <div class="mt-4 p-3 bg-black rounded font-mono text-sm text-center text-red-300 border border-gray-800">
                \(\beta = v / c\)
            </div>
            <p class="text-xs text-gray-500 mt-3 italic">The only velocity that matters is the ratio to \(c\).</p>
        </div>
    </div>

    <div class="space-y-6">
        <h3 class="text-2xl font-bold text-white">Two Operational Pathways</h3>
        <p class="text-gray-400">
            In the simulator below, you will use two fundamental methods to validate the theory. This is not "curve fitting" — it is a strict geometric derivation.
        </p>

        <div class="space-y-4">
            <details class="group bg-gray-900 rounded-lg border border-gray-800 overflow-hidden">
                <summary class="flex justify-between items-center p-4 cursor-pointer hover:bg-gray-800 transition-colors select-none">
                    <span class="font-bold text-blue-300">Path 1: Verification (e.g., Mercury)</span>
                    <span class="text-gray-500 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div class="p-5 border-t border-gray-800 text-sm space-y-4 bg-black/20">
                    <p>
                        <strong>The Challenge:</strong> We know the Sun's redshift (\(z\)) and Mercury's velocity (\(\beta\)). Can we predict the exact shape of the orbit without knowing the Sun's mass?
                    </p>
                    <p>
                        <strong>The Solution:</strong> The theory asserts that orbital eccentricity (\(e\)) is strictly determined by the "closure defect" (\(\delta\)) between potential and velocity:
                    </p>
                    <div class="py-2 text-center text-gray-300 font-mono bg-gray-950 rounded border border-gray-800">
                        \( e = \frac{1}{\delta^2} - 1, \quad \text{where} \quad \delta = \frac{\kappa}{\beta\sqrt{2}} \)
                    </div>
                    <p class="text-gray-400 italic">
                        Input the Sun's observed \(z\), and the equation yields Mercury's eccentricity (\(e \approx 0.2056\)) exactly.
                    </p>
                </div>
            </details>

            <details class="group bg-gray-900 rounded-lg border border-gray-800 overflow-hidden">
                <summary class="flex justify-between items-center p-4 cursor-pointer hover:bg-gray-800 transition-colors select-none">
                    <span class="font-bold text-purple-300">Path 2: Reconstruction (e.g., Black Hole S2)</span>
                    <span class="text-gray-500 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div class="p-5 border-t border-gray-800 text-sm space-y-4 bg-black/20">
                    <p>
                        <strong>The Challenge:</strong> We see a star (S2) orbiting empty space. We know its shape (\(e\)) and velocity (\(\beta\)). What lies inside?
                    </p>
                    <p>
                        <strong>The Solution:</strong> We "reverse-engineer" the system. Using the orbital geometry, we reconstruct the hidden potential \(\kappa\):
                    </p>
                    <div class="py-2 text-center text-gray-300 font-mono bg-gray-950 rounded border border-gray-800">
                        \( \kappa = \beta \sqrt{2(1+e)} \)
                    </div>
                    <p class="text-gray-400 italic">
                        This allows us to "weigh" the Black Hole and predict the relativistic precession using only light and geometry.
                    </p>
                </div>
            </details>
        </div>
    </div>

    <div class="bg-gradient-to-r from-gray-900 to-gray-800 border-l-4 border-green-500 p-6 rounded-r-lg my-8 shadow-lg">
        <h4 class="text-lg font-bold text-green-400 mb-2 uppercase tracking-widest">The Truth Indicator: \(W_{ILL} = 1\)</h4>
        <p class="text-sm mb-4 text-gray-300">
            In the interactive engine below, keep an eye on the <strong>WILL Invariant</strong>. 
            This is the mathematical proof that Space, Time, Energy, and Mass are not separate entities, but projections of a single resource.
        </p>
        <div class="font-mono text-xs text-green-300 bg-black/40 p-3 rounded inline-block border border-green-900/30">
            \( \frac{E \cdot T}{M \cdot L} \equiv 1 \)
        </div>
        <p class="text-xs mt-3 text-gray-400">
            If the theory is correct, this value must remain exactly <strong>1.000</strong> regardless of how extreme the orbital parameters become.
        </p>
    </div>

    <div class="text-center pt-8 pb-4">
        <p class="text-xs font-bold text-blue-500 uppercase tracking-widest mb-2">Interactive Laboratory</p>
        <h3 class="text-2xl font-bold text-white">The Orbital Engine</h3>
        <p class="text-gray-400 mt-2 max-w-2xl mx-auto text-sm">
            Use the controls on the left to toggle between Verification and Reconstruction modes.
        </p>
    </div>

</div>

<div class="w-full max-w-[1400px] mx-auto pb-20 px-2">
    {% include interactive/orbital_engine.html %}
</div>