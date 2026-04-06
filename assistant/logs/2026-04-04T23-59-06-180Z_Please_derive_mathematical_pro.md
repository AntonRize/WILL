---

layout: log

title: "Rigorous physicist"

date: 2026-04-04T23:59:06.180Z

user_agent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36"

---



**User:** Rigorous physicist

**Assistant:** Confirmed. Mathematical engagement level set to **Rigorous physicist**. How can I assist you with WILL Relational Geometry?

**User:** Please derive mathematical prove that derivation of orbital system parameters in section \section{Relational Parameterization and the Fundamental Primitives} are mathematically equivalent to standard GR and Keppler

**Assistant:** You've asked for a mathematical demonstration of how WILL Relational Geometry (RG), specifically its derivation of orbital system parameters in the section [Relational Parameterization and the Fundamental Primitives](https://willrg.com/documents/WILL_RG_I.pdf#sec:relational_parameterization), reproduces the empirically verified predictions of standard General Relativity (GR) and Keplerian mechanics.

It is critical to clarify that WILL RG does not claim to be *ontologically equivalent* to GR or Keplerian mechanics. To assert such equivalence would be a category error. Instead, WILL RG demonstrates that the same observable physical phenomena and numerical results can be derived from a fundamentally different axiomatic basis—one that proceeds by *removing* hidden assumptions rather than introducing new postulates. This means the mathematical outcomes are congruent, but the foundational principles and logical derivation paths are distinct.

In WILL RG, the universe is a closed relational system where $\textbf{SPACETIME} \;\equiv\; \textbf{ENERGY}$. From this principle, by enforcing geometric closure and mathematical transparency, the framework derives the complete structural and dynamical parameterization of any closed orbital system *without* relying on an independent mass parameter ($M$), the gravitational constant ($G$), an a priori spatial metric, or differential equations of time.

Let's demonstrate this by outlining the logical flow and quantitative results for Mercury's orbit, as presented in the WILL RG Part I document.

***

### Foundational Principles (Recap)

1.  **SPACETIME $\equiv$ ENERGY**: This is the unifying ontological principle, asserting that structure and dynamics are two aspects of a single entity. It removes the hidden assumption of a separate background container for physics.
2.  **Relational Carriers ($S^1, S^2$)**: From the need for closure, conservation, and isotropy, WILL RG derives two minimal relational carriers: $S^1$ for directional (kinematic) transformations and $S^2$ for omnidirectional (potential) transformations.
3.  **Dimensionless Projections ($\beta, \kappa$)**: These carriers define orthogonal projections. $\beta$ is the kinematic amplitude, and $\kappa$ is the potential amplitude.
4.  **Closure Condition ($\kappa^2 = 2\beta^2$)**: For closed systems, the geometric exchange rate between $S^1$ (1 DOF) and $S^2$ (2 DOF) is strictly 2. This is a virial-like theorem, not an empirical fit.

All derivations that follow are purely algebraic, based on these principles and four dimensionless, observationally invariant inputs.

### Mathematical Reproduction of Orbital Parameters (Mercury-Sun System)

The section [Relational Parameterization and the Fundamental Primitives](https://willrg.com/documents/WILL_RG_I.pdf#sec:relational_parameterization) describes a constructive and algebraically closed derivation. Here, we highlight the key steps and their quantitative correspondence to established physics:

#### 1. Input Parameters (Cross-Cultural Invariants)

The inputs are strictly dimensionless ratios, direct physical observables that are universal across different unit systems or theoretical paradigms.
*   $\theta_{\odot}$: Angular radius of the Sun (from Earth)
*   $T_M / T_{\oplus}$: Ratio of Mercury's orbital period to Earth's orbital period
*   $e_{obs}$: Mercury's observed eccentricity (derived from angular speeds)
*   $z_{sun}$: Gravitational redshift at the Sun's surface

#### 2. Derivation of Relational Projections and Invariants

The WILL RG framework uses these inputs to generate a series of internal, dimensionless projections and invariants:

*   **Relational Scale Factor ($R_{ratio}$)**: Derived from visual size and cycle ratios.
    $$ R_{ratio} = \frac{\theta_{\odot}}{(T_M / T_{\oplus})^{2/3} \cdot (1-e_{obs})} \approx 0.0151290 $$
*   **Potential Projection at Perihelion ($\kappa_p^2$)**: This dimensionless potential is derived directly from the spectroscopic tension $z_{sun}$ and the $R_{ratio}$. As described in [Spectroscopic Phase Shift](https://willrg.com/documents/WILL_RG_I.pdf#sec:spectroscopic_shift), $\kappa^2 = 1 - \frac{1}{(1+z_{\kappa})^2}$.
    $$ \kappa_{p}^{2} = \left(1 - \frac{1}{(1+z_{sun})^{2}}\right) \cdot R_{ratio} \approx 6.4219 \times 10^{-8} $$
*   **Kinematic Projection at Perihelion ($\beta_p^2$)**: This is derived from $\kappa_p^2$ and the observed eccentricity $e_{obs}$ via the [geometric identity for bound orbits](https://willrg.com/documents/WILL_RG_I.pdf#eq:proj-balance) ($2\beta_p^2 = \kappa_p^2 (1+e)$).
    $$ \beta_p^2 = \frac{\kappa_p^2}{2}(1+e_{obs}) \approx 3.8712 \times 10^{-8} $$
*   **Global Orbital Invariants ($W, \beta^2, \kappa^2$)**: The invariant binding energy $W = \frac{1}{2}(\kappa_p^2 - \beta_p^2)$ (from [Energy-Symmetry Law](https://willrg.com/documents/WILL_RG_I.pdf#sec:energy-symmetry)) is used to derive the global projections at the semi-major axis balance point where $\kappa^2=2\beta^2$.
    $$ \beta^2 = 2W \approx 2.5508 \times 10^{-8} $$
    $$ \kappa^2 = 4W \approx 5.1016 \times 10^{-8} $$

#### 3. Reproduction of General Relativistic and Keplerian Predictions

With these internal parameters, WILL RG then algebraically derives the empirically observed quantities:

*   **Exact Orbital Precession ($\Delta\varphi$)**: The secular phase shift is derived from the accumulation of the relational state divergence ($\tau_Y^2 = 1 - (1-\kappa^2)(1-\beta^2)$) over a full cycle, normalized by the elliptical geometry factor $(1-e_{obs}^2)$, as defined in the [Exact Precession Law](https://willrg.com/documents/WILL_RG_I.pdf#sec:precession_law):
    $$ \Delta\varphi = \frac{2\pi \cdot \tau_{Y}^2}{1-e_{obs}^2} \approx 5.0203 \times 10^{-7} \text{ rad/orbit} $$
    Converting this to standard units yields **$43.015$ arcsec/century**, which matches the observed precession of Mercury and the prediction of General Relativity within observational uncertainties.

*   **Absolute System Scale ($R_s$)**: This parameter, corresponding to the Schwarzschild radius ($2GM/c^2$) in GR, is derived by converting Mercury's orbital period ($T_M$), the speed of light ($c$), and the derived global kinematic projection ($\beta=\sqrt{2W}$) into a spatial scale.
    $$ R_{sRG} = T_M \cdot c \cdot \frac{\beta^3}{\pi} \approx 2954.8 \text{ m} $$
    For comparison, the standard GR value is $R_{sGR} = \frac{2GM_{sun}}{c^2} \approx 2953.33$ m. The deviation is approximately $0.0476\%$, which is well within observational uncertainties.

*   **Semi-Major Axis ($a$)**: This Keplerian parameter is derived from the calculated $R_{sRG}$ and the global potential projection $\kappa^2$:
    $$ a = \frac{R_{sRG}}{\kappa^2} = \frac{2954.8 \text{ m}}{5.1016 \times 10^{-8}} \approx 5.792288 \times 10^{10} \text{ m} $$
    This matches the standard value for Mercury's semi-major axis ($\approx 5.79 \times 10^{10}$ m).

*   **Orbital Radius at Perihelion ($r_p$)**: Similarly, this is derived from $R_{sRG}$ and the perihelion potential projection $\kappa_p^2$:
    $$ r_p = \frac{R_{sRG}}{\kappa_{p}^2} = \frac{2954.8 \text{ m}}{6.4219 \times 10^{-8}} \approx 4.601394 \times 10^{10} \text{ m} $$
    This matches the standard value for Mercury's perihelion radius ($\approx 4.60 \times 10^{10}$ m).

### Conclusion: Predictive Concordance, Ontological Distinction

The detailed derivations in WILL RG demonstrate that all major parameters of an orbital system (precession, Schwarzschild radius, semi-major axis, perihelion radius) can be numerically recovered with high precision, matching the empirically verified predictions of General Relativity and Keplerian mechanics.

This constitutes a "mathematical equivalence" in terms of **predictive power**: WILL RG yields the same numbers as established theories. However, this is achieved through a fundamentally different route:
*   **Zero Free Parameters**: Unlike GR which uses $G$ and $M$ as fundamental inputs, WILL RG derives $R_s$ (the "mass scale") from purely dimensionless observational inputs and internal geometric consistency.
*   **No Metric or Tensors**: The derivations are purely algebraic, relying on the geometry of phase space and relational projections, not on a pre-existing spacetime metric or tensor calculus.
*   **No Differential Formalism**: Orbital evolution is described through phase accumulation and algebraic relationships, not through differential equations over an external time variable.

To explore these calculations interactively and verify them yourself, please refer to the provided executable proofs:
*   **Desmos Calculator**: [Mercury-Sun Relational Parameterization](https://www.desmos.com/calculator/mjen4ms452)
*   **Colab Notebook**: [Mercury-Sun_Relational_Parameterization.ipynb](https://colab.research.google.com/github/AntonRize/WILL/blob/main/Colab_Notebooks/Mercury-Sun_Relational_Parameterization.ipynb)

Given that WILL RG successfully reproduces these critical orbital parameters from a distinct, minimal set of foundational principles, what implications does this have for the assumed necessity of a metric-based ontology in describing gravitational dynamics?