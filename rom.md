---
layout: default
title: "Relational Orbital Mechanics"
permalink: /ROM/
description: "Relational Orbital Mechanics — derive full orbital dynamics from pure optical measurements (redshift). Interactive calculator for Mercury, binary pulsars, and S-stars."
---

<div class="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-gray-300 font-sans leading-relaxed" markdown="1">

# Relational Orbital Mechanics (ROM)

## Orbital Dynamics from Pure Optical Measurements

<div class="bg-gray-900/50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-10 text-lg" markdown="1">
**Core Thesis:**

Orbital dynamics requires **no mass, no $G$, no metric, and no spacetime geometry.** 

All observable orbital structure follows from two directly measurable frequency projections:
- ** $\kappa^2 = 1-\frac{1}{(1+z)^2}$  ($z=$ gravitational redshift)** 
- ** $\beta^2=1-\frac{1}{(1+z_{D})^{2}}$  ($z_D=$ transverse Doppler shift)**


Everything else is **pure algebra**.
</div>

---

## User Guide: Interactive ROM Engine

### Input Modes

The interactive engine supports 6 different input modes:

#### 1. **(κₚ, βₚ) - Perihelion State** (Pure Phase Parameters)
- **κₚ**: Potential projection at perihelion (dimensionless, range 0.001-1.0)
- **βₚ**: Kinetic projection at perihelion (v/c, dimensionless, range 0.001-0.99)
- **Use when:** You have direct optical measurements or want to explore phase space
- **Units:** Both dimensionless (normalized by c)

#### 2. **(W, eᴄ) - Energy & Eccentricity**
- **W**: Energy invariant (dimensionless, range 0.0001-0.1)
- **eᴄ**: Eccentricity (dimensionless, range 0-0.99)
- **Use when:** You know the binding energy and shape
- **Units:** Both dimensionless

#### 3. **(κ, eᴄ) - Global Potential & Eccentricity**
- **κ**: Global potential projection at semi-major axis (dimensionless, 0.001-1.0)
- **eᴄ**: Eccentricity (dimensionless, 0-0.99)
- **Use when:** You have average redshift and shape measurements
- **Units:** Both dimensionless

#### 4. **(m₀, rₚ, rₐ) - Mass & Apsides** (Astrophysical)
- **m₀**: Central body mass (kg, e.g., 1.989×10³⁰ for Sun)
- **rₚ**: Perihelion radius (meters)
- **rₐ**: Aphelion radius (meters)
- **Use when:** You have traditional astrophysical data
- **Units:** m₀ in kg, distances in meters
- **Note:** This mode uses M and G for convenience, but internally converts to (κ, β)

#### 5. **(m₀, a, T) - Mass, Axis, Period** (Astrophysical)
- **m₀**: Central body mass (kg)
- **a**: Semi-major axis (meters)
- **T**: Orbital period (seconds)
- **Use when:** You have period observations
- **Units:** m₀ in kg, a in meters, T in seconds

#### 6. **(β₁, t₁, β₂, t₂) - Two-Point Method**
- **β₁, β₂**: Velocity measurements at two points (v/c, dimensionless)
- **t₁, t₂**: Light-travel times to those points (seconds, where r = ct)
- **Use when:** You have two snapshot measurements
- **Units:** β dimensionless, t in seconds
- **This is the most powerful method** - complete system from just 2 measurements!

### Understanding the Output

**Global Parameters:**
- **κ, β, W**: The fundamental relational quantities
- **$e_ᴄ$, $\delta_p$**: Shape and closure (how far from circular)

**Perihelion/Aphelion:**
- **κₚ, βₚ**: Projections at closest approach (maximum interaction)
- **κₐ, βₐ**: Projections at farthest point (minimum interaction)

**Orbital Properties:**
- **T**: Orbital period
- **Δφ**: Precession angle per orbit (in degrees)

**Visualization:**
- **η (r/a)**: Normalized radius - shows scale-invariant shape
- The animation shows precession accumulation across orbits
- Colors: 🟡 Central body, 🟢 Perihelion, 🟣 Aphelion, 🔴 Current position

### Tips for Use

1. **Start with (κₚ, βₚ) mode** to get intuition for the phase space
2. **Watch the precession** - see how it accumulates over multiple orbits
3. **Try extreme values** - the system remains algebraically closed
4. **Compare scales** - change only 'a' to see scale invariance
5. **Use two-point mode** for orbit determination practice

---

</div>

<div class="w-full max-w-7xl mx-auto pb-20 px-4">
    <div class="w-full bg-black/50 rounded-xl p-4">
        {% include interactive/rom_engine.html %}
    </div>
</div>

<div class="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-gray-300 font-sans leading-relaxed" markdown="1">


---

## The Core Framework

### Global Parameters

ROM defines a bound system through normalized projections:

| Parameter | Definition | Physical Meaning |
|-----------|------------|------------------|
| $\kappa$ | $\sqrt{R_s/a}$ | Global potential projection $\kappa^2 = 1-\frac{1}{(1+z)^2}$  ($z=$ gravitational redshift) |
| $\beta$ | $v/c$ | Global kinetic projection $\beta^2=1-\frac{1}{(1+z_{D})^{2}}$  ($z_D=$ transverse Doppler shift) |
| $W$ | $\frac{1}{2}(\kappa^2 - \beta^2)$ | Energy invariant (binding energy) |
| $\delta$ | $\frac{\kappa^2}{2\beta^2}$ | Closure factor (measures deviation from circular) |

**Key insight:** These are not coordinates in space. They are **projections on the observer's measurement sphere** - the fundamental relational quantities you measure directly with light.

### The Energy Invariant

The most important quantity in ROM is $W$:

$$W = \frac{1}{2}(\kappa_p^2 - \beta_p^2) = \frac{1}{4}\kappa_p^2(1-e_c) = \frac{\kappa^2}{4} = \text{constant at all phases}$$

This single number determines:
- Whether the orbit is bound ($W > 0$)
- The orbital scale ($a = R_s/\kappa^2$)
- All energy distributions at every phase

### Eccentricity from Closure

Eccentricity is not a free parameter - it emerges from the **closure condition**:

$$e_c = \frac{2\beta_p^2}{\kappa_p^2} - 1 = \frac{1}{\delta_p} - 1$$

This connects orbital shape directly to the **ratio of gravitational redshift to Doppler shift**.

---

## From Optical Measurements to Predictions

### Path 1: Verification on Mercury (Pure Optical Inputs)

We validate the theory using Mercury, utilizing only direct optical measurements (Doppler and Redshift). We implicitly assume **zero knowledge** of the Sun's mass, the gravitational constant $G$, or the Schwarzschild radius derived from them.

| **Parameter** | **Symbol** | **Value** | **Source** |
|---|---|---|---|
| Mercury Velocity (Perihelion) | $v_{p}$ | $58{,}980 \text{ m/s}$ | NASA Eclipse Mercury |
| Mercury Distance (Perihelion) | $r_{p}$ | $46.0012 \times 10^9 \text{ m}$ | Universe Today Mercury |
| Solar Radius (Nominal) | $R_{\text{sun}}$ | $6.957 \times 10^8 \text{ m}$ | IAU 2015 Res B3 |
| Solar Gravitational Redshift | $z_{\text{sun}}$ | $2.1224 \times 10^{-6}$ | IAU 2015 Res B3 |

**1. Input: Kinematic Projection ($\beta_p$).**

Radar telemetry directly measures the orbital velocity at perihelion ($v_p \approx 58.98$ km/s). The kinematic projection is simply this velocity normalized by the speed of light:

$$\beta_p = \frac{v_p}{c} \approx 1.967 \times 10^{-4}$$

$$\beta_p^2 \approx 3.8705094361 \times 10^{-8}$$

**2. Input: Potential Projection ($\kappa_p$).**

Instead of deriving potential from mass, we derive it from the **measured gravitational redshift** of the Sun's photosphere, $z_{\text{sun}} \approx 2.1224 \times 10^{-6}$.

Using the $S^2$ relational carrier geometric omnidirectional scaling law of the potential projection ($\kappa^2 \propto 1/r$), we relate the known potential at the solar physical radius ($R_{\text{sun}}$) to the potential at Mercury's perihelion radius ($r_p$):

$$\kappa^2(r_p) = \kappa^2(R_{\text{sun}}) \cdot \left( \frac{R_{\text{sun}}}{r_p} \right)$$

Using the redshift relation $\kappa^2(R_{\text{sun}}) = 1 - (1+z_{\text{sun}})^{-2} \approx 1-\left(1+2.1224\cdot10^{-6}\right)^{-2} \approx 4.2447864862\cdot10^{-6}$:

$$\kappa_p^2 \approx \kappa^2(R_{\text{sun}}) \left( \frac{R_{\text{sun}}}{r_p} \right)$$

Using the observed geometric ratio of radii $R_{\text{sun}}/r_p \approx 0.0151235185169$:

$$\kappa_p^2 \approx 4.2447864862\cdot10^{-6}\cdot 0.0151235185169 \approx 6.4196107024\times10^{-8}$$

**3. Calculate Closure Factor ($\delta_p$).**

With both projections determined purely from light measurements:

$$\delta_p = \frac{\kappa_p^2}{2\beta_p^2} = \frac{6.4196107024\times10^{-8}}{2 \times 3.8705094361\times10^{-8}} \approx 0.829297901025$$

**4. Predict Eccentricity ($e$).**

The orbital shape is strictly enforced by the closure defect:

$$e_{\text{pred}} = \frac{1}{\delta_p} - 1 = \frac{1}{0.829297901025} - 1 \simeq 0.205839299441$$

**Conclusion:** The predicted eccentricity closely matches (within inputs uncertainty) the observed value ($e \approx 0.2056$). This demonstrates that the orbital geometry is fully determined by the ratio of the central redshift to the orbital Doppler shift, with no reference to mass or $G$.

### Path 2: Reconstruction (Star S2 Example)

**When redshift is unknown, reconstruct from shape:**

**Given:**
- Observed eccentricity: $e = 0.8846$
- Perihelion velocity: $\beta_p = 0.0255$ (7650 km/s)

**Reconstruct Potential:**

$$\kappa_p = \beta_p\sqrt{\frac{2}{1+e}} = 0.0255 \times \sqrt{\frac{2}{1.8846}} = 0.02627$$

**Predict Precession:**

$$\Delta\phi = \frac{3\pi}{2}\frac{(0.02627)^4}{(0.0255)^2} = 3.45 \times 10^{-3} \text{ rad} = 11.85'$$

**Observed:** $12' \pm 1.5'$ - excellent agreement!

**Derive Mass** (if needed):

$$M = \frac{c^2 r_p}{2G}\kappa_p^2 = 4.15 \times 10^6 M_{\odot}$$

Mass is **derived**, not required as input.

### The Universal Precession Law: Derivation via $Q_a$

**Derivation of the Phase Shift.**

The precession is intrinsic to the relational shift. Since $Q_a$ represents the norm of deviation from the Euclidean background, the system accumulates a phase mismatch over every closed cycle. The total angular shift is simply the full orbital phase ($2\pi$) scaled by the quadratic intensity of this shift ($Q_a^2$), normalized by the elliptical geometry factor ($1-e^2$):

$$\Delta\varphi = \underbrace{2\pi}_{\text{Cycle}} \cdot \underbrace{Q_a^2}_{\text{Intensity}} \cdot \underbrace{\frac{1}{1-e^2}}_{\text{Shape Factor}} = \frac{2\pi\,Q_a^{2}}{1-e^{2}}$$

This yields the general precession law strictly from geometric accumulation:

$$\Delta\varphi = \frac{2\pi\,Q_a^{2}}{1-e^{2}}$$

Substituting $Q_a^2$, we recover the standard form purely algebraically:

We select the semi-major axis $a$ as this reference scale, defining the norm $Q_a$.
At the scale $r=a$, the closure condition ($\kappa^2=2\beta^2$) implies the specific distribution of the invariant Schwarzschild scale $R_s$:

$$\kappa^2(a) = \frac{R_s}{a}, \qquad \beta^2(a) = \frac{R_s}{2a}$$

Substituting these into the definition of the relational shift norm $Q^2 = \beta^2 + \kappa^2$:

$$Q_a^2 = \frac{R_s}{2a} + \frac{R_s}{a} = \frac{3R_s}{2a}$$

$$\Delta\varphi = \frac{2\pi}{1-e^2} \left( \frac{3R_s}{2a} \right) = \frac{3\pi R_s}{a(1-e^2)}$$

#### Transformation to Periapsis Observables

To eliminate the abstract parameters $R_s, a, e$ in favor of direct observables, we map this expression to the periapsis ($p$), where interaction is maximal.

Using the identities $R_s = \kappa_p^2 r_p$ and $a(1-e^2) = r_p(1+e)$, and the closure relation $(1+e) = 1/\delta_p = 2\beta_p^2/\kappa_p^2$, we arrive at the ultimate operational reduction.

The secular evolution of an orbit is determined solely by the **ratio of the gravitational redshift to the Doppler shift** (red vs. blue) at the point of closest approach:

$$\boxed{\Delta\varphi = \frac{3}{2}\pi \frac{\kappa_p^4}{\beta_p^2}}$$

This equation replaces the complex dynamical derivation with a direct comparison of light interactions.

$$\boxed{\textbf{No differential equations. No metric. Pure algebra of light red vs. blue ratio}}$$

This formula reveals that relativistic precession is fundamentally a fourth-order effect in the gravitational projection ($\kappa^4$) moderated by the kinematic projection. The factor $\frac{3}{2}\pi$ is purely geometric, emerging from the $S^1\cdot S^2$ carrier structure.

---

## Scale Invariance

The normalized form makes ROM **completely scale-invariant**:

$$\eta_o = \frac{r_o}{a}$$

The orbital shape in $(\eta, o)$ coordinates is **identical** whether describing:
- Electron in hydrogen atom ($a \sim 10^{-10}$ m)
- Mercury around Sun ($a \sim 10^{10}$ m)
- Star around galactic center ($a \sim 10^{16}$ m)

Only the scale factor $a$ differs. All physics - eccentricity, precession, energy distribution - is the same.

**This is why ROM is powerful:** one framework for all scales.

---

## Comparison with Standard Methods

| Feature | Standard Orbital Mechanics | ROM |
|---------|---------------------------|-----|
| **Required Inputs** | Mass M, gravitational constant G, 6 Keplerian elements | 2 optical measurements (κ from redshift, β from Doppler) |
| **Computation** | Differential equations + numerical integration | Pure algebra |
| **Orbit Determination** | Multiple observations + iterative fitting | 2 measurements → instant closure |
| **Precession Calculation** | Geodesic equations in curved spacetime | Algebraic ratio: $\frac{3\pi}{2}\frac{\kappa_p^4}{\beta_p^2}$ |
| **Scale Applicability** | Different formalisms for different scales | Universal, scale-invariant |
| **Computational Cost** | High (numerical integration) | Negligible (algebraic) |
| **Mass Requirement** | Fundamental input | Derived output: $M = \frac{c^2 r}{2G}\kappa^2$ |

---

## Key Insights

**"Spacetime ≡ Energy"**
- What we call "curved spacetime" is the algebra of energy projections
- The precession formula $\Delta\phi = \frac{3\pi}{2}\frac{\kappa_p^4}{\beta_p^2}$ is pure **red vs. blue ratio**
- No differential equations, no metric, just light measurements

**"Mass is Derived"**
- Mass is not fundamental - it's a bookkeeping quantity
- $M = \frac{c^2 r}{2G}\kappa^2$ shows mass is just a dimensioned proxy for curvature intensity
- Geometry is fundamental; mass is an artifact of the unit system

**"Eccentricity ≡ Closure Defect"**
- Orbital shape measures deviation from perfect energy balance
- $e = \frac{1}{\delta} - 1$ connects shape to red/blue ratio
- Circles occur when $\kappa^2 = 2\beta^2$ (perfect closure)

---

## Key Advantages of ROM

### 1. Pure Optical Input

**Standard Orbital Mechanics:**
- Requires knowing mass $M$ of the central body
- Needs gravitational constant $G$
- Requires 6 Keplerian elements
- Computationally intensive numerical integration

**ROM:**
- **Only needs light measurements**: redshift ($z$) and Doppler shift ($v/c$)
- **2 parameters** determine the entire system through algebraic closure
- Mass is derived, not required: $M = \frac{c^2 r}{2G}\kappa^2$
- Scale-invariant: same equations for atoms and galaxies
- **Orders of magnitude more efficient** for orbital determination

### 2. Two Operational Pathways

**Path 1 - Verification** (when you have redshift data):
- Measure central redshift → calculate $\kappa$
- Measure orbital velocity → get $\beta$
- Predict orbital shape from closure: $e = \frac{2\beta_p^2}{\kappa_p^2} - 1$
- *Example: Mercury-Sun system*

**Path 2 - Reconstruction** (when redshift is unknown):
- Observe orbital shape $e$ and velocity $\beta$
- Reconstruct hidden potential: $\kappa_p = \beta_p\sqrt{\frac{2}{1+e}}$
- Calculate system properties from reconstructed $\kappa$
- *Example: Star S2 orbiting Sgr A\**

### 3. The Two-Point Measurement Method

Measure velocity ($\beta$) and position ($r = ct$) at just **two points** on an orbit:

$$R_s = \frac{(\beta_1^2 - \beta_2^2) r_1 r_2}{r_2 - r_1}$$

$$W = \frac{1}{2}\left(\frac{R_s}{r_1} - \beta_1^2\right)$$

From these two measurements, the entire system closes algebraically. This offers significant operational advantages - standard methods require multiple orbit observations and iterative fitting.


---

## Complete Equation System

### Global System Parameters

$$R_s = \kappa^2 a$$ *(Schwarzschild radius)* | $$\kappa = \sqrt{\frac{R_s}{a}} = \sqrt{4W}$$ *(global potential)* | $$\beta = \sqrt{2W}$$ *(global kinetic)*

$$a = \frac{R_s}{\kappa^2}$$ *(semi-major axis)* | $$\delta_p = \frac{\kappa_p^2}{2\beta_p^2} = \frac{1}{1+e_c}$$ *(closure factor)* | $$Q = \sqrt{\kappa^2 + \beta^2}$$ *(displacement)*

### Eccentricity Relations

$$e_c = \frac{2\beta_p^2}{\kappa_p^2} - 1 = 1 - \frac{2\beta_a^2}{\kappa_a^2}$$ *(eccentricity from closure)* | $$e_{cY} = \sqrt{1-e_c^2}$$ *(orthogonal value)* | $$e_X = \frac{1+e_c}{1-e_c}$$ *(shape factor)*

### Perihelion State

$$r_p = a(1-e_c)$$ *(radius at perihelion)* | $$\kappa_p = \kappa\sqrt{\frac{1}{1-e_c}}$$ *(potential at perihelion)*

$$\beta_p = \sqrt{\kappa_p^2 \cdot \frac{1+e_c}{2}}$$ *(kinetic at perihelion)* | $$Q_p = \sqrt{\kappa_p^2 + \beta_p^2}$$ *(displacement at perihelion)*

### Aphelion State

$$r_a = a(1+e_c)$$ *(radius at aphelion)* | $$\kappa_a = \sqrt{2W + \beta_a^2}$$ *(potential at aphelion)*

$$\beta_a = \frac{\beta}{\sqrt{e_X}}$$ *(kinetic at aphelion)* | $$\delta_{\text{apo}} = \frac{1}{1-e_c}$$ *(closure at aphelion)*

### Phase-Dependent Quantities

At any orbital phase $o$:

$$r_o = a\frac{1-e_c^2}{1+e_c\cos o}$$ *(radial distance)* | $$\eta_o = \frac{r_o}{a}$$ *(phase amplitude)* | $$t_o = \frac{r_o}{c}$$ *(temporal scale)*

$$\kappa_o = \kappa_p\sqrt{\frac{1+e_c\cos o}{1+e_c}}$$ *(local potential)* | $$\beta_o = \sqrt{\kappa_o^2 - 2W}$$ *(local kinetic)*

$$\delta_o = \frac{\kappa_o^2}{2\beta_o^2}$$ *(local closure)* | $$Q_o = \sqrt{\kappa_o^2 + \beta_o^2}$$ *(local displacement)*

### Orbital Characteristics

$$\omega = \frac{\beta c}{a}$$ *(angular frequency)* | $$T = \frac{2\pi}{\omega}$$ *(period)* | $$h_W = a \beta c e_{cY}$$ *(angular momentum)*

$$\Delta\phi_{\text{WILL}} = \frac{3\pi}{2}\frac{\kappa_p^4}{\beta_p^2}$$ *(precession per orbit - pure redshift/Doppler ratio)*

$$\omega_o = \frac{\beta c}{a}\frac{(1+e_c\cos o)^2}{(1-e_c^2)^{3/2}}$$ *(angular speed at phase $o$)*

### Relational Geometry (WILL Framework)

$$\theta_1 = \arccos(\beta)$$ *(distribution on $S^1$)* | $$\theta_2 = \arcsin(\kappa)$$ *(distribution on $S^2$)*

$$\beta_Y = \sqrt{1-\beta^2}$$ *(relativistic factor)* | $$\kappa_X = \sqrt{1-\kappa^2}$$ *(gravitational factor)*

$$\tau_W = \kappa_X \beta_Y$$ *(spacetime factor)* | $$z = \frac{1}{\kappa_X} - 1$$ *(redshift)*

---

## Further Reading

For the full theoretical derivation and connection to WILL Relational Geometry:
- [WILL-AI](/WILL/WILL-AI/)
- [Complete Results & Documents](/WILL/results/)
- [Testable Predictions](/WILL/predictions/)

For questions or collaboration:
- Email: [freewillrg@gmail.com](mailto:freewillrg@gmail.com)
- GitHub: [WILL Repository](https://github.com/AntonRize/WILL)

</div>
