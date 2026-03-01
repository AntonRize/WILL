---
layout: default
title: "Relational Orbital Mechanics"
permalink: /rom/
redirect_from: /ROM/
description: "Relational Orbital Mechanics — derive full orbital dynamics from pure optical measurements (redshift). Interactive calculator for Mercury, binary pulsars, and S-stars."
---

<div class="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-gray-300 font-sans leading-relaxed" markdown="1">

# Relational Orbital Mechanics (R.O.M.)

## Orbital Dynamics from Pure Optical Measurements

<div class="bg-gray-900/50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-10 text-lg" markdown="1">
**Core Thesis:**

Orbital dynamics requires **no mass, no $G$, no metric, and no spacetime geometry.** 

All observable orbital structure follows from two directly measurable frequency projections:
- ** $\kappa^2 = 1-\frac{1}{(1+z_k)^2}$  ($z_k=$ gravitational redshift)** 
- ** $\beta^2=1-\frac{1}{(1+z_{b})^{2}}$  ($z_b=$ transverse Doppler shift)**


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
| $\kappa$ | $\sqrt{R_s/a}$ | Global potential projection $\kappa^2 = 1-\frac{1}{(1+z_k)^2}$  ($z_k=$ gravitational redshift) |
| $\beta$ | $v/c$ | Global kinetic projection $\beta^2=1-\frac{1}{(1+z_{b})^{2}}$  ($z_b=$ transverse Doppler shift) |
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
- **Only needs light measurements**: redshift ($z_k$) and Doppler shift ($v/c$)
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

# R.O.M. — Complete Equation Set (LaTeX Reference)

R.O.M. does not describe how a body moves under forces; it classifies the algebraically allowed relational states of a bound system.

## Foundational Definitions

$$\kappa^2 = 1 - \frac{1}{(1+z_k)^2}$$
where $z_k$ is the gravitational redshift.

$$\beta^2 = 1 - \frac{1}{(1+z_b)^2}$$
where $z_b$ is the transverse Doppler shift.

## Observational Z Inputs

$$Z_{sys}(o) = (1+z_{ko}(o))(1+z_{bo}(o))$$
Product of gravitational redshift and transverse Doppler shift.

$$\tau_{Wo}(o) = \kappa_{Xo}(o) \cdot \beta_{Yo}(o) = (Z_{sys}(o))^{-1}$$
Product of projectional phase factors on $S^1$ and $S^2$ carriers.

$$z_k = \frac{1}{\kappa_X} - 1$$

$$z_b = \frac{1}{\beta_Y} - 1$$

$$z_{ko} = \frac{1}{\kappa_{Xo}} - 1$$

$$z_{bo} = \frac{1}{\beta_{Yo}} - 1$$

## Global System Parameters (Fixed for the Orbit)

$$\kappa = \sqrt{\frac{R_s}{a}} = \sqrt{\frac{\rho}{\rho_{max}}} = \sqrt{\kappa_p^2(1-e)} = \sqrt{4W} = \sqrt{\frac{1}{2}\left(3 - \sqrt{1 + 8\tau_{Wo}(O_o)^2}\right)} = \sqrt{1 - (1+z_k)^{-2}}$$

$$\kappa_X = \cos(\theta_2) = \sqrt{1 - \kappa^2}$$

$$\beta = \frac{\kappa}{\sqrt{2}} = \beta_p\sqrt{\frac{1-e}{1+e}} = \sqrt{2W} = \sqrt{\kappa_o^2 - \frac{\kappa_o^2}{2}\left(1 + \left(\frac{1}{\delta_o(o)} - 1\right)\right)} = \beta_o(o)\frac{\sqrt{1-e^2}}{\sqrt{1+e^2+2e\cos(o)}} = \sqrt{1 - (1+z_b)^{-2}}$$

$$\beta_Y = \sin(\theta_1) = \sqrt{1 - \beta^2}$$

$$\beta_{int} = \frac{\beta}{\sqrt{1-e^2}}$$

$$\tau_W = \kappa_X \beta_Y$$

$$Q = \sqrt{\kappa^2 + \beta^2} = \sqrt{\frac{3}{2}}\,\kappa = \sqrt{3}\,\beta$$

$$R_s = \kappa^2 a = \frac{2Gm_0}{c^2} = \frac{2}{3}Q_o(O_o)^2 a = \frac{r_1 r_2}{r_2 - r_1}(\beta_1^2 - \beta_2^2) = \frac{a}{2}\left(3 - \sqrt{1 + 8\tau_{Wo}(O_o)^2}\right) = \frac{r_o(o)}{2(2a - r_o(o))}\left(4a - r_o(o) - \sqrt{(4a - r_o(o))^2 - 8a(2a - r_o(o))(1 - \tau_{Wo}(o)^2)}\right)$$

$$a = \frac{R_s}{\kappa^2} = \frac{R_s}{4W} = \frac{\beta_o c}{\omega} \cdot \frac{\sqrt{1-e^2}}{\sqrt{1+e^2+2e\cos(o)}} = \frac{\Delta_{to}(o)}{\tau_o}\beta c$$

$$m_0 = \frac{\kappa^2 c^2 a}{2G} = 4\pi\rho a^3$$

$$t = \frac{a}{c}$$

$$W = \frac{\beta^2}{2} = \frac{1}{2}(\kappa_o^2 - \beta_o^2) = \frac{1}{4}\kappa_p^2(1-e) = \frac{1}{2}\left(\kappa_o(o)^2 - \frac{\kappa_o(o)^2}{2\delta_o(o)}\right) = \frac{1}{2}\left((1-(1+z_{ko}(o))^{-2}) - (1-(1+z_{bo}(o))^{-2})\right)$$

$$\Delta\phi = \frac{3\pi}{2}\frac{\kappa_p^4}{\beta_p^2} = \frac{2\pi Q^2}{1-e^2} = 6\pi\beta_{int}^2$$

$$h_W = a \cdot \beta c \cdot e_Y$$

$$\omega = \frac{\beta c}{a}$$

$$T = \frac{2\pi}{\omega}$$


## Eccentricity Relations

$$e = \frac{1}{\delta} - 1 = 1 - \frac{2\beta_a^2}{\kappa_a^2} = \frac{2\beta_p^2}{\kappa_p^2} - 1$$

$$e_Y = \sqrt{1 - e^2}$$

$$e_X = \frac{1+e}{1-e} = \frac{r_a}{r_p} = \frac{\delta_a}{\delta_p} = \frac{\beta_p}{\beta_a} = \frac{\kappa_p^2}{\kappa_a^2} = \frac{\kappa_a^2 \beta_p^2}{\kappa_p^2 \beta_a^2}$$

## Time Integration

$$\omega_o(o) = \frac{\beta c}{a} \cdot \frac{(1 + e\cos(o))^2}{(1-e^2)^{3/2}}$$

$$\Delta_{to}(o) = \int_0^o \frac{1}{\omega_\theta(\theta)}\,d\theta = \frac{a}{\beta c}\tau_o = \frac{T}{2\pi}\tau_o$$

$$\tau_o = (1-e^2)^{3/2} \int_0^o (1 + e\cos(\theta))^{-2}\,d\theta = \frac{1}{\sqrt{1-e^2}}\int_0^o \left(\frac{t_o(\theta)}{t}\right)^2 d\theta$$

## Perihelion Relations

$$r_p = a(1-e) = \frac{R_s}{\kappa_p^2}$$

$$\kappa_p = \kappa\sqrt{\frac{1}{1-e}} = Q_p\sqrt{\frac{2}{3+e}}$$

$$\kappa_{Xp} = \sqrt{1 - \kappa_p^2}$$

$$\beta_p = \frac{V_p}{c} = \frac{\kappa_p}{\delta\sqrt{2}} = \sqrt{\kappa_p^2 \cdot \frac{1+e}{2}}$$

$$\delta_p = \frac{\kappa_p^2}{2\beta_p^2} = \frac{1}{1+e}$$

$$Q_p = \sqrt{\kappa_p^2 + \beta_p^2}$$

## Aphelion Relations

$$r_a = a(1+e) = \frac{R_s}{\kappa_a^2}$$

$$\beta_a = \sqrt{\beta_p^2 e_X^{-2}} = \beta\sqrt{e_X^{-1}}$$

$$\kappa_a = \sqrt{2W + \beta_a^2}$$

$$\delta_a = \frac{1}{1-e} = \frac{\kappa_a^2}{2\beta_a^2}$$

$$Q_a = \sqrt{\kappa_a^2 + \beta_a^2}$$

## Phase Variables (Depend on $o$)

$o$ = orbital phase in radians

$$r = r_o(o) = a\frac{1-e^2}{1+e\cos o} = \frac{R_s}{\kappa_o^2}$$

$$\kappa_o = \sqrt{\frac{R_s}{r}} = \sqrt{1-(1+z_{ko}(o))^{-2}} = \kappa_p\sqrt{\frac{1+e\cos(o)}{1+e}}$$

$$\kappa_{Xo} = \sqrt{1 - \kappa_o^2} = (z_{ko}(o)+1)^{-1}$$

$$\beta_o(o) = \sqrt{\kappa_o^2 - 2W} = \frac{\kappa_o(o)}{\sqrt{2\delta_o(o)}} = \beta \cdot \frac{\sqrt{1+e^2+2e\cos(o)}}{\sqrt{1-e^2}} = \sqrt{\frac{\kappa_o(o)^2}{2} \cdot \frac{1+e^2+2e\cos(o)}{1+e\cos(o)}} = \sqrt{\frac{R_s}{r_o(o)} - \frac{R_s}{2a}} = \sqrt{1-(1+z_{bo}(o))^{-2}}$$

$$\beta_R(o) = \beta\frac{e\sin(o)}{\sqrt{1-e^2}} = \sqrt{\beta_o(o)^2 - \beta_T(o)^2} = \sqrt{(1-(1+z_{ko}(o))^{-2}) - 2W - \frac{r_o(o)^2\omega_o(o)^2}{c^2}}$$

$$\beta_T(o) = \frac{r_o(o)\omega_o(o)}{c} = \beta\frac{1+e\cos(o)}{\sqrt{1-e^2}}$$

$$\beta_{Yo} = \sqrt{1 - \beta_o^2} = (z_{bo}(o)+1)^{-1}$$

$$\delta_o = \frac{1+e\cos o}{1+e^2+2e\cos o} = \frac{\kappa_o^2}{2\beta_o(o)^2}$$

$$Q_o = \sqrt{\kappa_o^2 + \beta_o(o)^2}$$

$$\omega_o = \frac{a\beta c \cdot e_Y}{r_o^2} = \frac{\beta c}{a}\frac{(1+e\cos o)^2}{(1-e^2)^{3/2}}$$

$$\eta_o = \frac{r}{a} = 2 - \frac{2\beta_o(o)^2}{\kappa_o(o)^2}$$

$$\tau_{Wo}(o) = \kappa_{Xo}(o) \cdot \beta_{Yo}(o) = Z_{sys}(o)^{-1}$$

$$t_o = \frac{r_o(o)}{c}$$

$$\Delta_o = 3\beta_{int}^2 \cdot o$$

## Relational Geometry (WILL)

$$\theta_1 = \arccos(\beta)$$
Distribution angle on $S^1$ (non-physical).

$$\theta_2 = \arcsin(\kappa)$$
Distribution angle on $S^2$ (non-physical).

$$\Delta_Q = Q_o^2 - Q^2$$

$$O_o = \arccos(1 - \delta^{-1}) = \arccos(-e) = \arccos\left(\frac{2\beta_a^2}{\kappa_a^2} - 1\right)$$
Orbital balance point where $\kappa_o^2 = 2\beta_o^2$.

## Observer-Dependent Relations

$$Z_{raw}(o) = \left(1 + \frac{\beta}{e_Y}(\cos(o+\omega_i) + e\cos(\omega_i))\sin(i)\right) Z_{sys}(o)$$

$$\beta_{los}(o) = \frac{\beta}{\sqrt{1-e^2}}(\cos(o+\omega_i) + e\cos(\omega_i))\sin(i)$$

$i$ = orbital inclination relative to line of sight and orbital plane

$\omega_i$ = phase turn or argument of periapsis

$$K_i = \frac{\beta}{\sqrt{1-e^2}}\sin(i)$$

$$Z_{rawmax} = Z_{sys}(o_{i1})(1 + K_i(1 + e\cos\omega_i))$$

$$Z_{rawmin} = Z_{sys}(o_{i2})(1 + K_i(-1 + e\cos\omega_i))$$

$$O_{oi} = O_o + \omega_i$$

$$o_{i1} = -\omega_i$$

$$o_{i2} = \pi - \omega_i$$

$$Z_{sysi1}(o_{i1}) = (1 - \beta^2\frac{1+e^2+2e\cos(\omega_i)}{1-e^2})^{-1/2}(1 - 2\beta^2\frac{1+e\cos(\omega_i)}{1-e^2})^{-1/2}$$

$$Z_{sysi2}(o_{i2}) = (1 - \beta^2\frac{1+e^2-2e\cos(\omega_i)}{1-e^2})^{-1/2}(1 - 2\beta^2\frac{1-e\cos(\omega_i)}{1-e^2})^{-1/2}$$

### Un-tilted 2D Coordinates (UNTESTED)

$$x_{orb} = r(o)\cos(o + \omega_i)$$

$$y_{orb} = r(o)\sin(o + \omega_i)$$

### Parametric Sky-Plane Projection (UNTESTED)

$$\begin{bmatrix} x_{sky} \\ y_{sky} \\ z_{depth} \end{bmatrix} = \begin{bmatrix} 1 & 0 & 0 \\ 0 & \cos(i) & -\sin(i) \\ 0 & \sin(i) & \cos(i) \end{bmatrix} \begin{bmatrix} x_{orb} \\ y_{orb} \\ 0 \end{bmatrix}$$

$$x_{sky} = r(o)\cos(o + \omega_i)$$

$$y_{sky} = r(o)\sin(o + \omega_i)\cos(i)$$

$$z_{depth} = r(o)\sin(o + \omega_i)\sin(i)$$

## Beautiful and Interesting Connections

$$\frac{r_a}{r_p} = \frac{1+e}{1-e} = \frac{\beta_p}{\beta_a} = \frac{\kappa_p^2}{\kappa_a^2} = \frac{\kappa_a^2\beta_p^2}{\kappa_p^2\beta_a^2}$$

This remarkable equivalence of structural ($\kappa$ on $S^2$ carrier) and dynamical ($\beta$ on $S^1$ carrier) asymmetry confirms: **SPACETIME $\equiv$ ENERGY**.---


<!-- ═══════════════════════ NAVIGATION ═══════════════════════ -->
<hr style="border-color:#374151; margin:0 0 2rem 0;">

<h2 class="text-2xl font-bold text-white" style="border:none; margin-bottom:1.25rem;">
  Explore Further
</h2>

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 0.75rem;">
  <a href="/predictions/" class="supp-card" style="text-decoration:none;">
    <div>
      <h4>Testable Predictions</h4>
      <p>Quantitative, falsifiable predictions</p>
    </div>
  </a>
  <a href="/Galactic_Dynamics/" class="supp-card" style="text-decoration:none;">
    <div>
      <h4>Galactic Dynamics</h4>
      <p>SPARC dataset interactive lab</p>
    </div>
  </a>
  <a href="/WILL-AI/" class="supp-card" style="text-decoration:none;">
    <div>
      <h4>WILL AI</h4>
      <p>AI trained on research documents</p>
    </div>
  </a>
  <a href="/" class="supp-card" style="text-decoration:none;">
    <div>
      <h4>Home</h4>
      <p>Return to overview</p>
    </div>
  </a>
</div>

</div>
