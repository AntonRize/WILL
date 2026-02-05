---
layout: default
title: Relational Orbital Mechanics
permalink: /ROM/
---

<div class="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-gray-300 font-sans leading-relaxed" markdown="1">

# Relational Orbital Mechanics (ROM)

## Orbital Dynamics from Pure Optical Measurements

<div class="bg-gray-900/50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-10 text-lg" markdown="1">
**Core Thesis:**

Orbital dynamics requires **no mass, no $G$, no metric, and no spacetime geometry.** 

All observable orbital structure follows from two directly measurable frequency projections:
- **$\kappa^2 = 1-\frac{1}{(1+z)^2}}$  ($z=$ gravitational redshift)** 
- **$\beta^2=1-\frac{1}{(1+z_{D})^{2}}}$  ($z_D=$ transverse Doppler shift)**


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
| $\kappa$ | $\sqrt{R_s/a}$ | Global potential projection $\kappa^2 = 1-\frac{1}{(1+z)^2}}$  ($z=$ gravitational redshift) |
| $\beta$ | $v/c$ | Global kinetic projection $\beta^2=1-\frac{1}{(1+z_{D})^{2}}}$  ($z_D=$ transverse Doppler shift) |
| $W$ | $\frac{1}{2}(\kappa^2 - \beta^2)$ | Energy invariant (binding energy) |
| $\delta$ | $\frac{\kappa}{\beta\sqrt{2}}$ | Closure factor (measures deviation from circular) |

**Key insight:** These are not coordinates in space. They are **projections on the observer's measurement sphere** - the fundamental relational quantities you measure directly with light.

### The Energy Invariant

The most important quantity in ROM is $W$:

$$W = \frac{1}{2}(\kappa_p^2 - \beta_p^2) = \frac{1}{4}\kappa^2(1-e_c) = \text{constant at all phases}$$

This single number determines:
- Whether the orbit is bound ($W > 0$)
- The orbital scale ($a = R_s/\kappa^2$)
- All energy distributions at every phase

### Eccentricity from Closure

Eccentricity is not a free parameter - it emerges from the **closure condition**:

$$e_c = \frac{2\beta_p^2}{\kappa_p^2} - 1 = \frac{1}{\delta_p^2} - 1$$

This connects orbital shape directly to the **ratio of gravitational redshift to Doppler shift**.

---

## From Optical Measurements to Predictions

### Path 1: Verification (Mercury Example)

**Pure Optical Inputs - No mass or $G$ needed:**

**Step 1: Measure Kinematic Projection**
- Perihelion velocity: $v_p = 58.98$ km/s (radar telemetry)
- Kinematic projection: $\beta_p = v_p/c = 1.967 \times 10^{-4}$

**Step 2: Measure Potential Projection**
- Sun's surface redshift: $z_{\text{surface}} = 2.12 \times 10^{-6}$ (spectroscopy)
- Surface potential: $\kappa^2_{\text{surface}} \approx 2z_{\text{surface}}$
- Scale to perihelion using $\kappa^2 \propto 1/r$:

$$\kappa_p^2 = 2z_{\text{surface}} \left(\frac{r_{\text{surface}}}{r_p}\right) = 2(2.12 \times 10^{-6})(0.01513) = 6.415 \times 10^{-8}$$

$$\kappa_p = 2.533 \times 10^{-4}$$

**Step 3: Calculate Closure Factor**

$$\delta_p = \frac{\kappa_p}{\sqrt{2}\beta_p} = \frac{2.533 \times 10^{-4}}{1.414 \times 1.967 \times 10^{-4}} = 0.9108$$

**Step 4: Predict Eccentricity**

$$e_{\text{pred}} = \frac{1}{\delta_p^2} - 1 = \frac{1}{(0.9108)^2} - 1 = 0.2056$$

**Result:** Perfect match with observed $e = 0.2056$! The orbital shape is fully determined by the **ratio of redshift to Doppler shift**.

**Step 5: Predict Precession**

$$\Delta\phi = \frac{3\pi}{2}\frac{\kappa_p^4}{\beta_p^2} = \frac{3\pi}{2}\frac{(2.533 \times 10^{-4})^4}{(1.967 \times 10^{-4})^2} = 5.00 \times 10^{-7} \text{ rad/orbit}$$

$$= 43.0 \text{ arcsec/century}$$

**Perfect agreement** - and we never used $M$ or $G$!

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
- $e = \frac{1}{\delta^2} - 1$ connects shape to red/blue ratio
- Circles occur when $\kappa = \beta\sqrt{2}$ (perfect closure)

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

$$a = \frac{R_s}{\kappa^2}$$ *(semi-major axis)* | $$\delta = \frac{\kappa_p}{\beta_p\sqrt{2}} = \frac{1}{\sqrt{1+e_c}}$$ *(closure factor)* | $$Q = \sqrt{\kappa^2 + \beta^2}$$ *(displacement)*

### Eccentricity Relations

$$e_c = \frac{2\beta_p^2}{\kappa_p^2} - 1 = 1 - \frac{2\beta_a^2}{\kappa_a^2}$$ *(eccentricity from closure)* | $$e_{cY} = \sqrt{1-e_c^2}$$ *(orthogonal value)* | $$e_X = \frac{1+e_c}{1-e_c}$$ *(shape factor)*

### Perihelion State

$$r_p = a(1-e_c)$$ *(radius at perihelion)* | $$\kappa_p = \kappa\sqrt{\frac{1}{1-e_c}}$$ *(potential at perihelion)*

$$\beta_p = \sqrt{\kappa_p^2 \cdot \frac{1+e_c}{2}}$$ *(kinetic at perihelion)* | $$Q_p = \sqrt{\kappa_p^2 + \beta_p^2}$$ *(displacement at perihelion)*

### Aphelion State

$$r_a = a(1+e_c)$$ *(radius at aphelion)* | $$\kappa_a = \sqrt{2W + \beta_a^2}$$ *(potential at aphelion)*

$$\beta_a = \beta\sqrt{e_X}$$ *(kinetic at aphelion)* | $$\delta_{\text{apo}} = \frac{1}{\sqrt{1-e_c}}$$ *(closure at aphelion)*

### Phase-Dependent Quantities

At any orbital phase $o$:

$$r_o = a\frac{1-e_c^2}{1+e_c\cos o}$$ *(radial distance)* | $$\eta_o = \frac{r_o}{a}$$ *(phase amplitude)* | $$t_o = \frac{r_o}{c}$$ *(temporal scale)*

$$\kappa_o = \kappa_p\sqrt{\frac{1+e_c\cos o}{1+e_c}}$$ *(local potential)* | $$\beta_o = \sqrt{\kappa_o^2 - 2W}$$ *(local kinetic)*

$$\delta_o = \frac{\kappa_o}{\beta_o\sqrt{2}}$$ *(local closure)* | $$Q_o = \sqrt{\kappa_o^2 + \beta_o^2}$$ *(local displacement)*

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
- [WILL-AI](/WILL-AI/)
- [Complete Results & Documents](/results/)
- [Testable Predictions](/predictions/)

For questions or collaboration:
- Email: [freewillrg@gmail.com](mailto:freewillrg@gmail.com)
- GitHub: [WILL Repository](https://github.com/AntonRize/WILL)

</div>
