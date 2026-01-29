---
layout: default
title: Relational Orbital Mechanics
permalink: /rom/
---

<div class="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-gray-300 font-sans leading-relaxed" markdown="1">

# Relational Orbital Mechanics (ROM)

## A Closed Algebraic System for Scale-Invariant Orbital Analysis

<div class="bg-gray-900/50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-10 text-lg" markdown="1">
**The Paradigm Shift:**

ROM does not describe how a body moves under forces. It **classifies the algebraically allowed relational states** of a bound two-body system.

The entire orbital configuration is determined by **two independent parameters** from which all other quantities follow through algebraic closure. No numerical integration. No differential equations. Just pure algebraic relations.
</div>

---

## Why ROM is Revolutionary

### 1. Algebraic Closure vs. Differential Equations

**Standard Orbital Mechanics:**
- Requires solving differential equations (Newton's laws or Einstein's field equations)
- Needs numerical integration for complex orbits
- Requires 6 Keplerian elements for full orbital specification
- Computationally intensive for high-precision calculations

**ROM:**
- **Pure algebraic system** - all parameters computed instantly
- **2 parameters** determine the entire system
- Scale-invariant: same equations for atoms and galaxies
- **Orders of magnitude more efficient** for orbital determination

### 2. The Two-Point Measurement Power

One of ROM's most powerful features: measure velocity ($\beta$) and position ($r = ct$) at just **two points** on an orbit, and the entire system closes algebraically:

$$R_s = \frac{(\beta_1^2 - \beta_2^2) r_1 r_2}{r_2 - r_1}$$

$$W = \frac{1}{2}\left(\frac{R_s}{r_1} - \beta_1^2\right)$$

From these two measurements, you get:
- Complete orbital shape (eccentricity)
- Energy invariant
- All apsides
- Precession rate
- Period

**This is operationally revolutionary** - standard methods require multiple orbit observations and iterative fitting.

---

## The Core Framework

### Global Parameters

ROM defines a bound system through normalized projections:

| Parameter | Definition | Physical Meaning |
|-----------|------------|------------------|
| $\kappa$ | $\sqrt{R_s/a}$ | Global potential projection at semi-major axis |
| $\beta$ | $v/c$ | Global kinetic projection (virial equivalent) |
| $W$ | $\frac{1}{4}\kappa^2 - \frac{1}{2}\beta^2$ | Energy invariant (binding energy) |
| $Q$ | $\sqrt{\kappa^2 + \beta^2}$ | Relational displacement vector |

**Key insight:** These are not coordinates in space. They are **projections on the observer's measurement sphere** - the fundamental relational quantities.

### The Energy Invariant

The most important quantity in ROM is $W$:

$$W = \frac{1}{2}(\kappa_p^2 - \beta_p^2) = \frac{1}{4}\kappa^2$$

This single number determines:
- Whether the orbit is bound ($W > 0$)
- The orbital scale ($a = R_s/(4W)$)
- All energy distributions at every phase

### Eccentricity from Closure

Eccentricity emerges from the **closure condition** at perihelion:

$$e_c = \frac{2\beta_p^2}{\kappa_p^2} - 1$$

Or equivalently from the closure factor $\delta$:

$$e_c = \frac{1}{\delta^2} - 1$$

where $\delta = \kappa_p/(\beta_p\sqrt{2})$ measures how "closed" the energy cycle is.

---

## Complete Equation System

### Global System Parameters

$$R_s = \kappa^2 a = \frac{2Gm_0}{c^2}$$

$$\kappa = \sqrt{\frac{R_s}{a}} = \sqrt{4W}$$

$$\beta = \sqrt{2W} = \frac{\kappa}{\sqrt{2}}$$

$$a = \frac{R_s}{4W}$$

$$\delta = \frac{1}{\sqrt{1+e_c}}$$

### Eccentricity Relations

$$e_c = \frac{2\beta_p^2}{\kappa_p^2} - 1 = 1 - \frac{2\beta_a^2}{\kappa_a^2}$$

$$e_{cY} = \sqrt{1-e_c^2}$$

$$e_X = \frac{1+e_c}{1-e_c}$$

### Perihelion State

$$r_p = a(1-e_c)$$

$$\kappa_p = \kappa\sqrt{\frac{1}{1-e_c}}$$

$$\beta_p = \sqrt{\kappa_p^2 \cdot \frac{1+e_c}{2}}$$

$$Q_p = \sqrt{\kappa_p^2 + \beta_p^2}$$

### Aphelion State

$$r_a = a(1+e_c)$$

$$\kappa_a = \sqrt{2W + \beta_a^2}$$

$$\beta_a = \beta\sqrt{e_X}$$

$$\delta_{\text{apo}} = \frac{1}{\sqrt{1-e_c}}$$

### Phase-Dependent Quantities

At any orbital phase $o$:

$$r_o = a\frac{1-e_c^2}{1+e_c\cos o}$$

$$\kappa_o = \kappa_p\sqrt{\frac{1+e_c\cos o}{1+e_c}}$$

$$\beta_o = \sqrt{\kappa_o^2 - 2W}$$

$$Q_o = \sqrt{\kappa_o^2 + \beta_o^2}$$

$$\delta_o = \frac{\kappa_o}{\beta_o\sqrt{2}}$$

### Orbital Characteristics

$$\omega = \frac{\beta c}{a}$$

$$T = \frac{2\pi}{\omega}$$

$$h_W = a \beta c e_{cY}$$

$$\Delta\phi_{\text{WILL}} = \frac{3\pi}{2}\frac{\kappa_p^4}{\beta_p^2}$$

### Relational Geometry

$$\theta_1 = \arccos(\beta)$$

$$\theta_2 = \arcsin(\kappa)$$

$$\tau_W = \sqrt{(1-\kappa^2)(1-\beta^2)}$$

$$z = \frac{1}{\sqrt{1-\kappa^2}} - 1$$

---

## Connection to Observable Data

### From Astrophysical Measurements

**Mass and Apsides** $(m_0, r_p, r_a)$:
1. Calculate semi-major axis: $a = (r_p + r_a)/2$
2. Calculate eccentricity: $e_c = (r_a - r_p)/(r_a + r_p)$
3. Calculate Schwarzschild radius: $R_s = 2Gm_0/c^2$
4. System closes: $\kappa^2 = R_s/a$

**Mass, Axis, and Period** $(m_0, a, T)$:
1. Get $R_s = 2Gm_0/c^2$
2. Get $\kappa^2 = R_s/a$
3. Get $\beta = 2\pi a/(Tc)$
4. System closes: $W = \kappa^2/4 - \beta^2/2$

**Two Velocity-Position Pairs** $(v_1, r_1, v_2, r_2)$:
- This is the **killer feature** of ROM
- Algebraic closure from just two measurements
- Orders of magnitude faster than traditional orbit determination

### To Observable Predictions

From any ROM state, you can instantly calculate:
- Orbital period: $T = 2\pi a/(\beta c)$
- Velocity at any phase: $v_o = \beta_o c$
- Precession per orbit: $\Delta\phi$ (in radians or arcseconds)
- Gravitational redshift: $z = 1/\sqrt{1-\kappa^2} - 1$
- All apsides and turning points

---

## Scale Invariance

The normalized form of ROM makes it **completely scale-invariant**:

$$\eta_o = \frac{r_o}{a}$$

The shape of the orbit in normalized coordinates $(\eta, o)$ is identical whether you're describing:
- **Electron orbit in hydrogen atom** ($a \sim 10^{-10}$ m)
- **Mercury orbit around the Sun** ($a \sim 10^{10}$ m)
- **Star orbit in galactic center** ($a \sim 10^{16}$ m)

The only difference is the scale factor $a$. All the physics - eccentricity, precession, energy distribution - is the same.

This is why ROM is so powerful: **one framework for all scales**.

---

## Worked Example: Mercury's Orbit

### Given Data:
- $r_p = 4.60 \times 10^{10}$ m (perihelion)
- $r_a = 6.98 \times 10^{10}$ m (aphelion)
- $m_0 = 1.989 \times 10^{30}$ kg (Solar mass)

### ROM Solution:

**Step 1:** Basic geometry
$$a = \frac{r_p + r_a}{2} = 5.79 \times 10^{10} \text{ m}$$
$$e_c = \frac{r_a - r_p}{r_a + r_p} = 0.2056$$

**Step 2:** Scale parameter
$$R_s = \frac{2Gm_0}{c^2} = 2953 \text{ m}$$
$$\kappa^2 = \frac{R_s}{a} = 5.10 \times 10^{-8}$$
$$\kappa = 2.26 \times 10^{-4}$$

**Step 3:** Perihelion state
$$\kappa_p = \kappa\sqrt{\frac{1}{1-e_c}} = 2.53 \times 10^{-4}$$
$$\beta_p = \sqrt{\kappa_p^2 \cdot \frac{1+e_c}{2}} = 1.97 \times 10^{-4}$$

**Step 4:** Precession
$$\Delta\phi_{\text{WILL}} = \frac{3\pi}{2}\frac{\kappa_p^4}{\beta_p^2} = 5.03 \times 10^{-7} \text{ rad/orbit}$$
$$= 0.1038 \text{ arcsec/orbit}$$
$$= 43.0 \text{ arcsec/century}$$

**Result:** Perfect match with observations! And we got it from pure algebra, no integration.

---

## Interactive ROM Engine

Use the interactive tool below to explore the complete ROM system. Choose any input parameter set and watch the entire orbital configuration close algebraically.

**Features:**
- 6 different input modes (pure phase parameters, astrophysical observables, two-point method)
- Real-time visualization with precession
- Complete parameter display
- Scale-invariant representation

</div>

<div class="w-full max-w-7xl mx-auto pb-20 px-4">
    <div class="w-full bg-black/50 rounded-xl p-4">
        {% include interactive/rom_engine.html %}
    </div>
</div>

<div class="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-gray-300 font-sans leading-relaxed" markdown="1">

---

## Key Advantages Summary

| Feature | Standard Orbital Mechanics | ROM |
|---------|---------------------------|-----|
| **Input Requirements** | 6 Keplerian elements | 2 parameters |
| **Computation** | Differential equations + numerical integration | Pure algebra |
| **Orbit Determination** | Multiple observations + iterative fitting | 2 measurements → instant closure |
| **Precession Calculation** | Post-Newtonian expansion | Single algebraic formula |
| **Scale Applicability** | Different formalisms for different scales | Universal, scale-invariant |
| **Computational Cost** | High (numerical integration) | Negligible (algebraic) |

---

## Further Reading

For the full theoretical derivation and connection to WILL Relational Geometry:
- [Relativistic Foundations](/relativistic-foundations/)
- [Complete Results & Documents](/results/)
- [Testable Predictions](/predictions/)

For questions or collaboration:
- Email: [egeometricity@gmail.com](mailto:egeometricity@gmail.com)
- GitHub: [WILL Repository](https://github.com/AntonRize/WILL)

</div>
