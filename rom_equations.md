# R.O.M. — Complete Equation Set (LaTeX Reference)

R.O.M. does **not** describe how a body moves under forces; it classifies the algebraically allowed relational states of a bound system. It is not equations of motion but an algebraically closed system of allowed states within WILL — allowed free will.

> **Version note.** This reference reflects the fully-closed system (all 66 expressions verified closed algebraically at 50-digit precision on random `c, G, M, a, e, O` in `ROM_FULL_TEST.ipynb`). Notation was overhauled relative to earlier drafts: the relational spacetime factor is `\tau` (was `tau_W`); the phase spacetime factor is `\tau_o` (was `tau_Wo`); the mean-anomaly integral is now `\zeta` (previously carried the `tau_o` name); the mass parameter is `M` (was `m_0`); the binding energy is written directly as `\beta^2` (the `W = beta^2/2` symbol is retired); and the orbital balance point splits into ascending `B_a` and descending `B_d` (was `O_o`). The Killing-vector expression is not part of this set.

---

## Foundational Definitions (Redshift Inputs)

$$\kappa^2 = 1 - \frac{1}{(1+z_\kappa)^2}, \qquad z_\kappa = \text{gravitational redshift}$$

$$\beta^2 = 1 - \frac{1}{(1+z_\beta)^2}, \qquad z_\beta = \text{transverse Doppler shift}$$

## Observational Inputs

$$Z_{sys} = (1+z_\kappa)(1+z_\beta) = \frac{1}{\tau}$$
Product of gravitational redshift and transverse Doppler shift.

$$\tau = \kappa_X \cdot \beta_Y = \frac{1}{Z_{sys}}$$
Product of projectional phase factors on the $S^1$ and $S^2$ carriers.

$$z_\kappa = \frac{1}{\kappa_X} - 1 \qquad\text{(gravitational redshift)}$$

$$z_\beta = \frac{1}{\beta_Y} - 1 \qquad\text{(transverse Doppler shift)}$$

$$z_{\kappa o} = \frac{1}{\kappa_{Xo}} - 1 \qquad\text{(redshift at phase } O\text{)}$$

$$z_{\beta o} = \frac{1}{\beta_{Yo}} - 1 \qquad\text{(transverse Doppler shift at phase } O\text{)}$$

## Global System Parameters (Fixed for the Orbit)

**Potential projection at semi-major axis:**
$$\kappa = \sin(\theta_2) = \beta\sqrt{2} = \sqrt{1 - (1+z_\kappa)^{-2}} = \sqrt{\frac{R_s}{a}} = \sqrt{\frac{\rho}{\rho_{max}}} = \sqrt{\kappa_p^2(1-e)} = \sqrt{2(\kappa_o^2 - \beta_o^2)} = \sqrt{\tfrac{1}{2}\left(3 - \sqrt{1 + 8\,\tau_o(B_a)^2}\right)} = \kappa_R^2\left(\frac{\tau_D}{T}\right)^{2/3} = \sqrt{\kappa_o^2 \cdot \eta_o}$$

**Potential phase factor:**
$$\kappa_X = \cos(\theta_2) = \sqrt{1 - \kappa^2} = \frac{1}{1+z_\kappa}$$

**Potential projection at the surface of the central body:**
$$\kappa_R = \sqrt{\frac{\kappa^2}{\sin(\theta_R)}} = \sqrt{\frac{R_s}{\frac{T}{2\pi}c\,\beta\,\sin(\theta_R)}}$$

**Global kinetic projection** (invariant transverse baseline defining the system's circular equilibrium state and semi-major axis):
$$\beta = \cos(\theta_1) = \sqrt{1 - (1+z_\beta)^{-2}} = \frac{\kappa}{\sqrt{2}} = \beta_p\sqrt{\frac{1-e}{1+e}} = \frac{2\pi a}{Tc} = \left(\frac{\pi R_s}{Tc}\right)^{1/3} = \sqrt{\kappa_o^2 - \beta_o^2} = \sqrt{\tfrac{\kappa_p^2}{2}(1-e)} = \beta_o\frac{\sqrt{1-e^2}}{\sqrt{1+e^2+2e\cos(O)}} = \sqrt{\beta_{sys}^2 \cdot \sin(\theta_{sys})}$$

**Kinetic phase factor:**
$$\beta_Y = \sin(\theta_1) = \sqrt{1 - \beta^2}$$

**Interior kinetic projection:**
$$\beta_{int} = \frac{\beta}{\sqrt{1-e^2}}$$

**Relational spacetime factor:**
$$\tau = \kappa_X \beta_Y$$

**Relational spacetime phase factor:**
$$\tau_Y = \sqrt{1 - \tau^2} = \sqrt{3\beta^2 - 2\beta^4}$$

**Total relational shift** (magnitude of state difference):
$$Q = \sqrt{\kappa^2 + \beta^2} = \sqrt{\tfrac{3}{2}}\,\kappa = \sqrt{3}\,\beta$$

**Schwarzschild radius — system scale:**
$$R_s = \kappa_o^2\, r_o = \frac{Tc}{\pi}\beta^3 = \frac{8\pi^2 a^3}{T^2 c^2} = \frac{\Delta_{to}}{\zeta(O)}\kappa^2\beta c = \frac{r_1 r_2}{r_2 - r_1}(\beta_1^2 - \beta_2^2) = \frac{a}{2}\left(3 - \sqrt{1 + 8\,\tau_o(B_a)^2}\right) = \frac{r_o}{2(2a - r_o)}\left(4a - r_o - \sqrt{(4a - r_o)^2 - 8a(2a - r_o)(1 - \tau_o^2)}\right) = \frac{2GM}{c^2}$$

**Semi-major axis:**
$$a = \frac{R_s}{\kappa^2} = \frac{T\beta c}{2\pi} = \frac{\beta_o c}{\omega}\cdot\frac{\sqrt{1-e^2}}{\sqrt{1+e^2+2e\cos(O)}} = \frac{\Delta_{to}(O)}{\zeta}\beta c = \frac{Tc\beta^3}{2\pi\left(\frac{K_i}{\sin(i)}\right)^2(1-e^2)} = \frac{\sqrt{1-e^2}}{2\pi\sin(i)}K_i Tc = \frac{R_{sys}}{\sin(\theta_{sys})}$$

**Central body's physical radius:**
$$R_{sur} = a \cdot \sin(\theta_{sur})$$

**Mass parameter:**
$$M = \frac{Tc^3\beta^3}{2\pi G} = \frac{\kappa^2 c^2 a}{2G} = 4\pi\rho a^3$$

**Temporal scale of the system:**
$$t = \frac{a}{c}$$

**Energy invariant — binding energy:**
$$\beta^2 = (\kappa_o^2 - \beta_o^2) = \frac{\kappa_p^2}{2}(1-e) = \left(\kappa_o^2 - \frac{\kappa_o^2}{2\delta_o}\right) = \frac{R_s}{2a} = \left(\frac{R_s}{Tc}\pi\right)^{2/3}$$

**Precession of perihelion per orbit** (exact to second order):
$$\Delta\phi = \frac{2\pi\,\tau_Y^2}{1-e^2} = \frac{2\pi(3\beta^2 - 2\beta^4)}{1-e^2} = \frac{3\pi R_s}{a(1-e^2)} - \frac{\pi R_s^2}{a^2(1-e^2)}$$

**Precession of perihelion per phase radian:**
$$\Omega_\phi = \frac{\tau_Y^2}{1-e^2} = \frac{3\beta^2 - 2\beta^4}{1-e^2}$$

**Constant ratio between idealised phase $o$ and true precessing phase $O$:**
$$\Omega = 1 - \Omega_\phi = \frac{O}{o}$$

**Invariant angular momentum:**
$$h_W = \frac{\kappa^2}{\kappa_o^2}\cdot\beta_T\cdot a\cdot c = r_o\cdot\beta_T\cdot c = r_o^2\cdot\omega_o = a\cdot\beta c\cdot e_Y = R_s c\frac{\sqrt{1-e^2}}{2\beta}$$

**Angular frequency:**
$$\omega = \frac{\beta c}{a} = \frac{c}{R_s}2\beta^3$$

**Orbital period:**
$$T = \frac{2\pi}{\omega} = \frac{2\pi a}{\beta c} = \frac{\pi R_s}{\beta^3 c} = \frac{2\pi\sqrt{2}R_s}{\kappa^3 c} = \frac{2\pi\Delta_{to}}{\zeta_o}$$

**Time-density invariant** (where $R_{sur}$ and $\beta_{sur}$ are set by the distance from centre to the surface of the central body, and $\theta_{sys}$ is the angular radius):
$$\tau_D = T\sin(\theta_{sys})^{3/2} = \frac{2\pi R_{sur}}{\beta_{sur}c} = \sqrt{\frac{\pi}{G\rho}}$$

**Gravitational deflection:**
$$\Delta\varphi = 2\arcsin\!\left(\frac{\kappa_p^2(1 + \beta_p^2)}{2\beta_p^2 - \kappa_p^2(1 + \beta_p^2)}\right)$$

**Light deflection:**
$$\Delta\gamma = 2\arcsin\!\left(\frac{\kappa_p^2}{\kappa_{Xp}^2}\right)$$

**Relational density:**
$$\rho = \frac{\kappa^2 c^2}{8\pi G a^2}$$

**Maximal density at the horizon** (non-rotating systems, $\kappa^2 = 1 \equiv r = R_s$; density reaches its natural bound):
$$\rho_{max} = \frac{c^2}{8\pi G a^2}$$

## Eccentricity Relations

**Eccentricity derived from closure:**
$$e = \frac{1}{\delta_p} - 1 = 1 - \frac{2\beta_a^2}{\kappa_a^2} = \frac{2\beta_p^2}{\kappa_p^2} - 1 = 1 - \eta_o(0) = \eta_o(\pi) - 1$$

**Orthogonal eccentricity:**
$$e_Y = \sqrt{1 - e^2}$$

**Shape factor:**
$$e_X = \frac{1+e}{1-e} = \frac{r_a}{r_p} = \frac{\delta_a}{\delta_p} = \frac{\beta_p}{\beta_a} = \frac{\kappa_p^2}{\kappa_a^2} = \frac{\kappa_a^2\beta_p^2}{\kappa_p^2\beta_a^2}$$

## Time-Phase

**Angular frequency at phase $o$:**
$$\omega_o = \frac{\beta c}{a}\cdot\frac{(1 + e\cos(O))^2}{(1-e^2)^{3/2}}$$

**Time duration of a given phase interval:**
$$\Delta_{to} = \int_0^O \frac{1}{\omega_\theta(\theta)}\,d\theta = \frac{a}{\beta c}\zeta = \frac{T}{2\pi}\zeta = \frac{R_s\zeta}{2\beta^3 c}$$

**Temporal phase interval (mean-anomaly analog):**
$$\zeta = \frac{2\pi\Delta_t}{T} = \frac{\Delta_t c}{R_s}2\beta^3 = (1-e^2)^{3/2}\!\int_0^O (1 + e\cos(\theta))^{-2}\,d\theta = \frac{1}{\sqrt{1-e^2}}\int_0^O\left(\frac{t_o(\theta)}{t}\right)^2 d\theta$$

**Temporal phase interval, ascending orbit ($0 \to \pi$):**
$$\zeta(<\pi) = 2\arctan\!\left(\frac{\sin(\tfrac{O}{2})}{e_X^{1/2}\cos(\tfrac{O}{2})}\right) - \frac{e\,e_Y\sin(O)}{1 + e\cos(O)}$$

**Temporal phase interval, descending orbit ($\pi \to 2\pi$):**
$$\zeta(>\pi) = 2\arctan\!\left(\frac{\sin(\tfrac{O}{2})}{e_X^{1/2}\cos(\tfrac{O}{2})}\right) - \frac{e\,e_Y\sin(O)}{1 + e\cos(O)} + 2\pi$$

## Perihelion Relations

**Radius at perihelion:**
$$r_p = a(1-e) = \frac{R_s}{\kappa_p^2} = \sqrt{\big((1-e)a\cos(O)\big)^2 + \big((1-e)a\sin(O)\big)^2}$$

**Potential projection at perihelion:**
$$\kappa_p = \kappa\sqrt{\frac{1}{1-e}} = \sqrt{\frac{2\beta^2}{1-e}} = Q_p\sqrt{\frac{2}{3+e}}$$

**Potential phase projection at perihelion:**
$$\kappa_{Xp} = \sqrt{1 - \kappa_p^2}$$

**Kinetic projection at perihelion:**
$$\beta_p = \frac{V_p}{c} = \beta\sqrt{\frac{1+e}{1-e}} = \frac{r_p\,\omega_o(0)}{c} = \frac{\kappa_p}{\sqrt{2}}\sqrt{1+e}$$

**Closure factor at perihelion:**
$$\delta_p = \frac{\kappa_p^2}{2\beta_p^2} = \frac{1}{1+e}$$

**Relational shift at perihelion:**
$$Q_p = \sqrt{\kappa_p^2 + \beta_p^2}$$

## Aphelion Relations

**Radius at aphelion:**
$$r_a = a(1+e) = \frac{R_s}{\kappa_a^2}$$

**Kinetic projection at aphelion:**
$$\beta_a = \sqrt{\beta_p^2 e_X^{-2}} = \beta\sqrt{e_X^{-1}}$$

**Potential projection at aphelion:**
$$\kappa_a = \sqrt{\beta^2 + \beta_a^2}$$

**Closure factor at aphelion:**
$$\delta_a = \frac{1}{1-e} = \frac{\kappa_a^2}{2\beta_a^2}$$

**Relational shift at aphelion:**
$$Q_a = \sqrt{\kappa_a^2 + \beta_a^2}$$

## Phase Variables (Depend on phases $o$ and $O$)

**Idealised orbital phase** (progression without precession):
$$o = \frac{O}{\Omega}$$

**True orbital phase with precession:**
$$O = \Omega \cdot o$$

**Radial distance at phase $O$:**
$$r = r_o(O) = a\frac{1-e^2}{1+e\cos(O)} = \frac{R_s}{\kappa_o^2} = a\,\eta_o$$

**Normalised true radial distance at phase $O$:**
$$\eta_o = \frac{1-e^2}{1+e\cos(O)} = \frac{r_o(O)}{a} = \frac{R_s}{\kappa_o(O)^2 a} = 2 - \frac{2\beta_o^2}{\kappa_o^2}$$

**Local potential at the true phase $O$:**
$$\kappa_o = \sqrt{\beta_R(O)^2 + \beta_T(O)^2 + \beta^2} = \sqrt{\frac{R_s}{r_o}} = \sqrt{1 - (1+z_{\kappa o}(O))^{-2}} = \kappa_p\sqrt{\frac{1 + e\cos(O)}{1+e}} = \sqrt{\beta^2 + \beta_o^2} = \sqrt{\kappa_{surface}^2 \cdot \sin(\theta_o)}$$

**Gravitational phase factor at phase $O$:**
$$\kappa_{Xo} = \sqrt{1 - \kappa_o^2} = (z_{\kappa o}(O)+1)^{-1}$$

**Instantaneous translational kinetic projection at phase $O$:**
$$\beta_o = \sqrt{\beta_R^2 + \beta_T^2} = \beta\cdot\frac{\sqrt{1+e^2+2e\cos(O)}}{\sqrt{1-e^2}} = \sqrt{\kappa_o^2 - \beta^2} = \frac{\kappa_o(O)}{\sqrt{2\delta_o(O)}} = \sqrt{\frac{\kappa_o(O)^2}{2}\frac{1+e^2+2e\cos(O)}{1+e\cos(O)}} = \sqrt{\frac{R_s}{r_o(O)} - \frac{R_s}{2a}} = \sqrt{1 - (1+z_{\beta o}(O))^{-2}}$$

**Instantaneous radial kinetic projection (line-of-sight speed) at phase $O$:**
$$\beta_R = \beta\frac{e\sin(O)}{\sqrt{1-e^2}} = \sqrt{\beta_o(O)^2 - \beta_T(O)^2} = \sqrt{\big((1 - (1+z_{\kappa o}(O))^{-2}) - \beta^2\big) - \frac{r_o(O)^2\omega_o(O)^2}{c^2}}$$

**Instantaneous transverse kinetic projection (orthogonal sideways speed) at phase $O$:**
$$\beta_T = \frac{r_o(O)\omega_o(O)}{c} = \beta\frac{1+e\cos(O)}{\sqrt{1-e^2}} = \kappa_o^2\frac{\sqrt{1-e^2}}{2\beta} = \frac{R_s\sqrt{1-e^2}}{r_o(O)2\beta}$$

**Relativistic phase factor at phase $O$:**
$$\beta_{Yo} = \sqrt{1 - \beta_o^2} = (z_{\beta o}(O)+1)^{-1}$$

**Local closure factor at phase $O$:**
$$\delta_o = \frac{1+e\cos o}{1+e^2+2e\cos o} = \frac{\kappa_o^2}{2\beta_o^2}$$

**Local relational shift at phase $O$:**
$$Q_o = \sqrt{\kappa_o^2 + \beta_o^2}$$

**Angular speed at phase $O$:**
$$\omega_o = a\beta c\frac{e_Y}{r_o^2} = \frac{\beta c}{a}\frac{(1+e\cos o)^2}{(1-e^2)^{3/2}}$$

**Phase spacetime factor at phase $O$:**
$$\tau_o = \kappa_{Xo}(O)\cdot\beta_{Yo}(O) = Z_{sys}(O)^{-1}$$

**Amplitude spacetime factor at phase $O$:**
$$\tau_{Yo} = \sqrt{1 - \tau_o^2}$$

**Light time scale at phase:**
$$t_o = \frac{r_o}{c}$$

## Orbital Phase Invariants

**Holographic Decryption Invariant:**
$$Z_{raw}(-\omega_i)\,\tau(-\omega_i)(1 - e\cos\omega_i) + Z_{raw}(\pi-\omega_i)\,\tau(\pi-\omega_i)(1 + e\cos\omega_i) = 2$$

Additional invariants that must hold at any phase:

$$\Delta E_{A \to B} + \Delta E_{B \to A} = 0$$

$$\beta^2 = (\kappa_o^2 - \beta_o^2)$$

$$h_W = r_o^2\cdot\omega_o$$

$$\frac{\beta_T(O)}{\kappa_o^2(O)} = \frac{\sqrt{1-e^2}}{2\beta}$$

$$\beta_T(O)^2\,\eta_o^2 = \beta^2(1-e^2)$$

$$B_a - \zeta(B_a) = \zeta(B_d) - B_d$$

$$\tau_D = T\sin(\theta_{sur})^{3/2} = \frac{2\pi R_{sur}}{\beta_{sur}c} = \sqrt{\frac{\pi}{G\rho}}$$

$$\beta^2 - \beta_o^2 = \kappa^2 - \kappa_o^2$$

## Relational Geometry (WILL)

**Distribution angle on $S^1$** (non-physical):
$$\theta_1 = \arccos(\beta)$$

**Distribution angle on $S^2$** (non-physical):
$$\theta_2 = \arcsin(\kappa)$$

**Closure Theorem:**
$$\kappa^2 = 2\beta^2$$

**Energy Symmetry Law** (the universal relational energy ledger, the origin of causality):
$$\Delta E_{A \to B} + \Delta E_{B \to A} = 0, \qquad \Delta E_{A \to B} = E_0\left(\frac{\kappa_{X,B}}{\beta_{Y,B}} - \frac{\kappa_{X,A}}{\beta_{Y,A}}\right), \qquad \Delta E_{B \to A} = E_0\left(\frac{\kappa_{X,A}}{\beta_{Y,A}} - \frac{\kappa_{X,B}}{\beta_{Y,B}}\right)$$

**Phase relational shift amplitude at phase $O$:**
$$\Delta_Q = Q_o^2 - Q^2$$

**Ascending orbital balance point** (where $a = r$ and $\kappa_o^2 = 2\beta_o^2$ are true):
$$B_a = \arccos(1 - \delta^{-1}) = \arccos(-e) = \arccos\!\left(1 - \frac{2\beta_p^2}{\kappa_p^2}\right) = \arccos\!\left(\frac{2\beta_a^2}{\kappa_a^2} - 1\right)$$

**Descending orbital balance point** (where $a = r$ and $\kappa_o^2 = 2\beta_o^2$ are true):
$$B_d = 2\pi - \arccos(-e)$$

## Structural-Dynamical Equivalence

$$\frac{r_a}{r_p} = \frac{\delta_a}{\delta_p} = \frac{1+e}{1-e} = \frac{\beta_p}{\beta_a} = \frac{\kappa_p^2}{\kappa_a^2} = \frac{\kappa_a^2\beta_p^2}{\kappa_p^2\beta_a^2}$$

This remarkable equivalence of structural ($\kappa$ on the $S^2$ carrier) and dynamical ($\beta$ on the $S^1$ carrier) symmetry suggests once again that **SPACETIME $\equiv$ ENERGY**.

## Observer-Dependent Relations

**Angular radius of central body viewed from distance $r$:**
$$\theta_{sur}(r) = \arcsin\!\left(\frac{R_{sur}}{r}\right)$$

**Raw light shift including line-of-sight Doppler at phase $o$:**
$$Z_{raw}(O) = \big(1 + \beta_{int}(\cos(O+\omega_i) + e\cos(\omega_i))\sin(i)\big)\,Z_{sys}(O)$$

**Line-of-sight light shift:**
$$\beta_z(O) = \frac{\beta}{\sqrt{1-e^2}}(\cos(O+\omega_i) + e\cos(\omega_i))\sin(i)$$

$i$ = orbital inclination relative to line of sight and orbital plane.

$\omega_i$ = phase turn or argument of periapsis.

**Semi-amplitude invariant:**
$$K_i = \frac{\beta}{\sqrt{1-e^2}}\sin(i) = \beta_{int}\sin(i)$$

**Extremal raw shifts:**
$$Z_{rawmax} = Z_{sys}(-\omega_i)(1 + K_i(1 + e\cos\omega_i))$$

$$Z_{rawmin} = Z_{sys}(\pi-\omega_i)(1 + K_i(-1 + e\cos\omega_i))$$

**Inclined balance point:**
$$B_{ai} = (B_a + \omega_i)$$

**System redshift at the extremal phases:**
$$Z_{sys}(-\omega_i) = \left(1 - \beta^2\frac{1+e^2+2e\cos(\omega_i)}{1-e^2}\right)^{-1/2}\left(1 - 2\beta^2\frac{1+e\cos(\omega_i)}{1-e^2}\right)^{-1/2}$$

$$Z_{sys}(\pi-\omega_i) = \left(1 - \beta^2\frac{1+e^2-2e\cos(\omega_i)}{1-e^2}\right)^{-1/2}\left(1 - 2\beta^2\frac{1-e\cos(\omega_i)}{1-e^2}\right)^{-1/2}$$

**Holographic Decryption Invariant** (restated in observer variables):
$$Z_{raw}(-\omega_i)\,\tau(-\omega_i)(1 - e\cos\omega_i) + Z_{raw}(\pi-\omega_i)\,\tau(\pi-\omega_i)(1 + e\cos\omega_i) = 2$$

## Background-Free Parametric Equations for the Observed Orbit

**Inclination rotation:**
$$\begin{bmatrix} x_{sky} \\ y_{sky} \\ z_{depth} \end{bmatrix} = \begin{bmatrix} 1 & 0 & 0 \\ 0 & \cos(i) & -\sin(i) \\ 0 & \sin(i) & \cos(i) \end{bmatrix} \begin{bmatrix} x_{orb} \\ y_{orb} \\ 0 \end{bmatrix}$$

**Sky-plane coordinates:**
$$x_{sky} = r(O)\cos(O + \omega_i)$$
$$y_{sky} = r(O)\sin(O + \omega_i)\cos(i)$$
$$z_{depth} = r(O)\sin(O + \omega_i)\sin(i)$$

**Un-tilted 2D coordinates within the orbital plane:**
$$x_{orb} = r(O)\cos(O + \omega_i)$$
$$y_{orb} = r(O)\sin(O + \omega_i)$$

---

# Appendix — Translation to Legacy Tensor Parameters

The continuous multi-component tensor fields of General Relativity are derived as localized matrix representations of the purely scalar relational projections ($\beta, \kappa$) on the $S^1$ and $S^2$ carriers. The pseudo-Riemannian manifold is not a primitive; it is the coordinate-inflated shadow of relational phase capacity. The symbol $\hat{=}$ denotes this operational mapping.

## 1. Metric Tensor ($g_{\mu\nu}$)

The 4D metric tensor maps directly to the operational phase capacities and derived coordinate ratios.

- **Temporal component:** $g_{tt} \;\hat{=}\; -\kappa_X^2 c^2 = -c^2(1 - \kappa^2)$
- **Radial spatial component:** $g_{rr} \;\hat{=}\; \kappa_X^{-2} = (1 - \kappa^2)^{-1}$
- **Transverse spatial components:** $g_{\theta\theta} \;\hat{=}\; r^2$ and $g_{\phi\phi} \;\hat{=}\; r^2\sin^2\theta$ (where $r = R_s/\kappa^2$)

## 2. Four-Velocity ($U^\mu$) and Momentum ($P^\mu$)

The 4-vector velocity translates to the composite of the local energy scale ($\tau$) and the separated kinematic amplitudes ($\beta_R, \beta_T$).

- **Time component:** $U^t = \dfrac{dt}{d\tau} \;\hat{=}\; \dfrac{1}{\tau} = \dfrac{1}{\beta_Y\kappa_X}$
- **Spatial components:** $U^r \;\hat{=}\; c\,\beta_R\,U^t$ and $U^\phi \;\hat{=}\; \dfrac{c}{r}\beta_T\,U^t$
- **Four-momentum norm:** $P_\mu P^\mu = -(mc)^2 \;\hat{=}\; -E_0^2(\beta_Y^{-2} - \beta^2\beta_Y^{-2}) = -E_0^2$ (strict geometric closure of the $S^1$ carrier)

## 3. Stress-Energy Tensor ($T_{\mu\nu}$)

The classical sources of the gravitational field map directly to the relational density saturation limit and the intrinsic surface tension.

- **Energy density:** $T^0_0 = \rho c^2 \;\hat{=}\; \rho_{max}\kappa^2 c^2 = \dfrac{\kappa^2 c^4}{8\pi G r^2}$
- **Isotropic pressure:** $T^i_i = P \;\hat{=}\; -\rho c^2 = -\dfrac{\kappa^2 c^4}{8\pi G r^2}$ (the relational tension required for $d\kappa^2/dr$ consistency)

## 4. Ricci Tensor ($R_{\mu\nu}$), Ricci Scalar ($R$), and Einstein Tensor ($G_{\mu\nu}$)

The differential curvature operators are bypassed entirely by the Unified Geometric Field Equation linking geometric scale directly to energy density ratios.

- **Vacuum ($R_{\mu\nu} = 0$):** $\hat{=}\; \dfrac{d}{dr}(r\kappa^2) = 0 \implies \kappa^2 = \dfrac{R_s}{r}$
- **Matter ($G_{\mu\nu} = \frac{8\pi G}{c^4}T_{\mu\nu}$):** $\hat{=}\; \dfrac{d}{dr}(r\kappa^2) = \dfrac{8\pi G}{c^2}r^2\rho_{matter}$

## 5. Christoffel Symbols ($\Gamma^\lambda_{\mu\nu}$) and Geodesic Integration

The affine connections ($\Gamma^\lambda_{\mu\nu}$) used to define parallel transport on a curved manifold, and the continuous integration of the geodesic equation $\frac{d^2x^\mu}{d\tau^2} + \Gamma^\mu_{\alpha\beta}\frac{dx^\alpha}{d\tau}\frac{dx^\beta}{d\tau} = 0$, are bypassed in favour of the algebraic Energy-Symmetry Law ($\Delta E_{A \to B} + \Delta E_{B \to A} = 0$) and the relational phase divergence $\Delta\varphi = 2\pi\frac{\tau_Y^2}{1-e^2}$.
