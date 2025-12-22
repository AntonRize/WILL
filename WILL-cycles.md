---
layout: default
title: Relational Orbital Mechanics
permalink: /cycles/
---

<div class="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-gray-300 font-sans leading-relaxed" markdown="1">

# Relational Orbital Mechanics
## Or: How to build a Universe without Mass and $G$

<div class="bg-gray-900/50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-10 text-lg" markdown="1">
**The Paradigm Shift:**
Stop thinking of an orbit as a body moving through a background space.
Think of it as a **cycle of relationship** between you (the observer) and the object.

You are always at the center $(0,0)$.
The object is defined not by coordinates $(x,y)$, but by its **Energy Projection Vector** $Q$.
</div>

### 1. The Two Rulers of Reality

We describe the system solely through two measurable light projections:

1.  **Kinematic Projection ($\beta$):** How fast is the relationship changing? (Doppler shift)
    \\[ \beta = v/c \\]
2.  **Gravitational Projection ($\kappa$):** How deep is the relationship? (Gravitational Redshift)
    \\[ \kappa \approx \sqrt{2z} \\]

We don't need Mass. We don't need Newton's Constant $G$. We just need these two numbers.

### 2. The Vector $Q$ (Relational Displacement)

Combine these two projections into a single vector $Q$ on your "Causal Radar":
\\[ Q = \sqrt{\beta^2 + \kappa^2} \\]

This vector defines the **State of the System**.
* **Length of $Q$:** Defines the total energy scale (Orbit size).
* **Angle of $Q$:** Defines the orbital shape (Eccentricity).

---

### 3. Interactive Demonstrator: The Causal Radar

Below is the **WILL Relational Engine**. It visualizes the "Phase Space" of reality.

**How to use:**
1.  **Drag the Triangle ($\triangle Q_p$):** This represents the state of the orbit at its closest point (Periapsis).
2.  **Watch the Orbit:** See how moving *one single point* changes the shape ($e$), stability ($\delta$), and precession ($\Delta\varphi$) of the entire system.
3.  **Find the Zones:**
    * **Green Dashed Line:** The "Golden Ratio" $\kappa = \beta\sqrt{2}$. Perfect circles live here.
    * **Red Dashed Line:** The "Escape Horizon" $\kappa = \beta$. Below this, the bond breaks.
    * **Inversion:** Try dragging the point *above* the green line. See how the orbit flips!

</div>

<div class="w-full max-w-7xl mx-auto pb-20 px-4">
    <div class="border border-gray-800 rounded-xl overflow-hidden shadow-2xl bg-black">
        {% include interactive/orbital_engine.html %}
    </div>
</div>