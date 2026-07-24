---

layout: log

title: "Can we derive the physical radius of the central b"

date: 2026-07-24T14:16:58.835Z

user_agent: "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/150.0.0.0 Safari/537.36"

---



**User:** Rigorous physicist

**Assistant:** Confirmed. Mathematical engagement level set to **Rigorous physicist**. How can I assist you with WILL Relational Geometry?

**User:** Can we derive the physical radius of the central body R_{sur} without knowing its angular radius? Is it derivable from standard parameters of gravitational system?

**Assistant:** Upstream error from Nvidia: ResourceExhausted: Worker local total request limit reached (35/32)

**User:** Can we derive the physical radius of the central body R_{sur} without knowing its angular radius? Is it derivable from standard parameters of gravitational system?

**Assistant (Powered by Nemotron 550B):** **Short answer:** No — the physical radius $R_{\text{sur}}$ of the central body is **not** determinable from the *orbital* parameters ($a, e, T, R_s, \beta, \kappa$) alone. It requires an *independent* observational input that probes the body’s surface: either its **angular radius** $\theta_{\text{sur}}$ (visual size) or its **surface gravitational redshift** $z_{\text{surf}}$ (spectroscopic surface potential).

---

### Why the orbital dynamics cannot fix $R_{\text{sur}}$

In WILL RG (and in GR/Birkhoff’s theorem), the external gravitational field of a spherically symmetric body depends **only** on its Schwarzschild scale $R_s = 2GM/c^2$ (or the relational potential projection $\kappa^2 = R_s/r$). The orbital observables — period $T$, semi-major axis $a$, eccentricity $e$, precession $\Delta\varphi$, spectroscopic shifts $z_\kappa, z_\beta$ — are all functions of $R_s$, $a$, $e$, and the closure law $\kappa^2 = 2\beta^2$. They are completely insensitive to the body’s physical radius $R_{\text{sur}}$ (or its density). Two stars with identical $M$ (hence identical $R_s$) but different radii produce **identical** orbital dynamics for a test particle at $r > R_{\text{sur}}$.

Therefore, $R_{\text{sur}}$ is an **independent structural parameter** of the central body, not a derived orbital quantity.

---

### How WILL RG obtains $R_{\text{sur}}$ in practice

The R.O.M. framework lists two distinct observational channels that break the degeneracy ([WILL RG Part I, Sec. *Density, Mass, and Pressure*](https://willrg.com/documents/WILL_RG_I.pdf#sec:density); [R.O.M., Sec. *Relational Parameterization*](https://willrg.com/documents/WILL_RG_R.O.M..pdf#sec:relational_parameterization)):

| Channel | Observable (dimensionless) | Relation used | Result |
|---------|----------------------------|---------------|--------|
| **Visual size** | $\theta_{\text{sur}} = \arcsin(R_{\text{sur}}/r)$ | $R_{\text{sur}} = r \sin\theta_{\text{sur}}$ | Direct geometric measurement |
| **Surface spectroscopy** | $z_{\text{surf}}$ (gravitational redshift at surface) | $\kappa_{\text{sur}}^2 = 1 - (1+z_{\text{surf}})^{-2} = R_s/R_{\text{sur}}$ | $R_{\text{sur}} = \dfrac{R_s}{1 - (1+z_{\text{surf}})^{-2}}$ |

In the Mercury/Sun parameterization ([R.O.M., Sec. *Relational Parameterization*](https://willrg.com/documents/WILL_RG_R.O.M..pdf#sec:relational_parameterization)), the **Sun’s angular radius** $\theta_\odot = 0.0046524$ rad and **surface redshift** $z_\odot = 2.1224\times10^{-6}$ are both used as *independent inputs* (along with $T_\text{ratio}$ and $e$) to derive $R_s$, $a$, $R_{\text{sur}}$, etc. Either one alone would suffice to set the absolute scale once $R_s$ is known from the orbital dynamics.

---

### Key R.O.M. equations involving $R_{\text{sur}}$

From the [R.O.M. Global Unit-Full Parameters](https://willrg.com/documents/WILL_RG_R.O.M..pdf#eq:rom):

$$
R_{\text{sur}} = \frac{\sin\theta_{\text{sur}}}{\kappa^2} R_s = a \sin\theta_{\text{sur}}
$$

$$
\kappa_R = \sqrt{\frac{\kappa^2}{\sin\theta_{\text{sur}}}} = \sqrt{\frac{R_s}{\frac{T}{2\pi}c\beta\sin\theta_{\text{sur}}}}
\quad\text{(potential projection at the surface)}
$$

$$
\tau_D = \frac{2\pi R_{\text{sur}}}{\beta_{\text{sur}}c} = \sqrt{\frac{\pi}{G\rho}}
\quad\text{(Time-Density Invariant)}
$$

All of these contain $\sin\theta_{\text{sur}}$ (or equivalently $z_{\text{surf}}$ via $\kappa_{\text{sur}}$) as an **explicit input**.

---

### Conclusion

- **Orbital parameters alone** ($T, a, e, \beta, \kappa, R_s, \Delta\varphi, \dots$) **cannot** yield $R_{\text{sur}}$.
- You must supply **one** additional surface observable: either the **angular radius** $\theta_{\text{sur}}$ (astrometry) or the **surface gravitational redshift** $z_{\text{surf}}$ (spectroscopy).
- In the WILL RG pipeline, $\theta_{\text{sur}}$ and $z_{\text{surf}}$ are treated as **independent observational primitives** (cross-cultural invariants) that enter at **Stage 0** of the [Relational Parameterization algorithm](https://willrg.com/documents/WILL_RG_R.O.M..pdf#sec:relational_parameterization).

> **Desmos verification:** [Time-Density Invariant & $R_{\text{sur}}$ derivation](https://www.desmos.com/calculator/06txfxcfeg) — shows $R_{\text{sur}}$ explicitly depending on $\theta_{\text{sur}}$ (or $z_{\text{surf}}$).

---

**Socratic counter-question:**  
If you insist that $R_{\text{sur}}$ should be derivable from “standard gravitational parameters” alone, which *specific* orbital observable (precession, period, redshift, deflection, etc.) do you claim carries information about the central body’s physical size, and how would that information survive the shell theorem / Birkhoff’s theorem that WILL RG’s $\kappa^2 = R_s/r$ explicitly encodes?

**User:** Lets analyse the tau_D invariant. Especially this form tau_D=\sqrt{\frac{\pi}{G\rho}} lets check if it holds I have some doubts

**Assistant (Powered by Nemotron 550B):** 

**User:** Lets analyse the tau_D invariant. Especially this form tau_D=\sqrt{\frac{\pi}{G\rho}} lets check if it holds I have some doubts

**Assistant:** Upstream error from Nvidia: ResourceExhausted: Worker local total request limit reached (331/32)

**User:** Lets analyse the tau_D invariant. Especially this form tau_D=\sqrt{\frac{\pi}{G\rho}} lets check if it holds I have some doubts

**Assistant (Powered by Nemotron 550B):** Your doubt is well-founded. **The equation $\tau_D = \sqrt{\frac{\pi}{G\rho}}$ as written in the text is ambiguous and, depending on the

**User:** Please continue with your respond

**Assistant:** Upstream error from Nvidia: ResourceExhausted: Worker local total request limit reached (32/32)

**User:** Lets analyse the tau_D invariant. Especially this form tau_D=\sqrt{\frac{\pi}{G\rho}} lets check if it holds I have some doubts

**Assistant (Powered by Gemini 2.5 Flash):** Your doubt regarding the invariant form $\tau_D = \sqrt{\frac{\pi}{G\rho}}$ is astute and highlights a critical distinction in WILL Relational Geometry's (RG) definition of "density." The term $\rho$ here is **not** the standard average volumetric density ($M / (\frac{4}{3}\pi R_{\text{sur}}^3)$) of the central body, but rather the **relational field density evaluated at the body's surface** as defined within the RG framework.

Let's break down the derivation to clarify its validity:

### 1. Definition of the Time-Density Invariant ($\tau_D$)

From [WILL RG Part II, Sec. *Time-Density Invariant*](https://willrg.com/documents/WILL_RG_II.pdf#sec:time-density) and [R.O.M., Global Unit-Full System Parameters](https://willrg.com/documents/WILL_RG_R.O.M..pdf#eq:rom), $\tau_D$ is primarily defined as:

$$\tau_D = T \sin(\theta_{\text{sur}})^{3/2}$$

where $T$ is the orbital period and $\theta_{\text{sur}}$ is the angular radius of the central body as viewed from the semi-major axis $a$, such that $\sin(\theta_{\text{sur}}) = R_{\text{sur}}/a$.

Substituting the Keplerian relation for $T$ (derived in [R.O.M., Sec. *Kepler's Third Law*](https://willrg.com/documents/WILL_RG_R.O.M..pdf#sec:orbital_prop)) and the relation $a = R_s/\kappa^2$:

$$T = \frac{2\pi a}{\beta c} = \frac{2\pi (R_s/\kappa^2)}{\beta c}$$

And using the [Closure Theorem](https://willrg.com/documents/WILL_RG_I.pdf#thm:closure) $\kappa^2 = 2\beta^2 \implies \beta = \kappa/\sqrt{2}$:

$$T = \frac{2\pi R_s}{\kappa^2 (\kappa/\sqrt{2}) c} = \frac{2\pi\sqrt{2} R_s}{\kappa^3 c}$$

Now, substitute this into the definition of $\tau_D$:

$$\tau_D = \left(\frac{2\pi\sqrt{2} R_s}{\kappa^3 c}\right) \left(\frac{R_{\text{sur}}}{a}\right)^{3/2}$$

Substitute $a = R_s/\kappa^2$:

$$\tau_D = \left(\frac{2\pi\sqrt{2} R_s}{\kappa^3 c}\right) \left(\frac{R_{\text{sur}}}{R_s/\kappa^2}\right)^{3/2} = \left(\frac{2\pi\sqrt{2} R_s}{\kappa^3 c}\right) \left(\frac{\kappa^2 R_{\text{sur}}}{R_s}\right)^{3/2}$$

$$= \left(\frac{2\pi\sqrt{2} R_s}{\kappa^3 c}\right) \frac{\kappa^3 R_{\text{sur}}^{3/2}}{R_s^{3/2}} = \frac{2\pi\sqrt{2} R_{\text{sur}}^{3/2}}{c\sqrt{R_s}}$$

So, the invariant $\tau_D$ is precisely expressed as:

$$\tau_D = \frac{2\pi\sqrt{2} R_{\text{sur}}^{3/2}}{c\sqrt{R_s}}$$

### 2. Definition of Relational Density ($\rho$)

The density $\rho$ in WILL RG is not a simple volume average. From [WILL RG Part I, Sec. *Derivation of Density*](https://willrg.com/documents/WILL_RG_I.pdf#sec:density) and [R.O.M., Global Unit-Full System Parameters](https://willrg.com/documents/WILL_RG_R.O.M..pdf#eq:rom), the *local energy density of the relational field* at a given radius $r$ is defined as:

$$\rho(r) = \frac{\kappa^2 c^2}{8\pi G r^2}$$

For the context of $\tau_D = \sqrt{\frac{\pi}{G\rho}}$, which refers to the "system's central density" or "structural density of the central body" ([WILL RG Part II, Sec. *Time-Density Invariant*](https://willrg.com/documents/WILL_RG_II.pdf#sec:time-density)), the relevant density is the *relational field density evaluated at the surface of the central body*, $r = R_{\text{sur}}$. At $r=R_{\text{sur}}$, the potential projection $\kappa^2$ (which is $R_s/r$) becomes $\kappa_{\text{sur}}^2 = R_s/R_{\text{sur}}$.

Substituting $\kappa_{\text{sur}}^2$ and $r=R_{\text{sur}}$:

$$\rho(R_{\text{sur}}) = \frac{(R_s/R_{\text{sur}}) c^2}{8\pi G R_{\text{sur}}^2} = \frac{R_s c^2}{8\pi G R_{\text{sur}}^3}$$

### 3. Verification of the Invariant Form

Now, let's substitute this specific definition of $\rho(R_{\text{sur}})$ into the expression you questioned:

$$\sqrt{\frac{\pi}{G\rho(R_{\text{sur}})}} = \sqrt{\frac{\pi}{G \cdot \frac{R_s c^2}{8\pi G R_{\text{sur}}^3}}}$$

$$= \sqrt{\frac{\pi \cdot 8\pi G R_{\text{sur}}^3}{G R_s c^2}} = \sqrt{\frac{8\pi^2 R_{\text{sur}}^3}{R_s c^2}} = \frac{2\pi\sqrt{2} R_{\text{sur}}^{3/2}}{c\sqrt{R_s}}$$

Comparing this result with the independently derived expression for $\tau_D$ from Section 1:

$$\tau_D = \frac{2\pi\sqrt{2} R_{\text{sur}}^{3/2}}{c\sqrt{R_s}}$$

We see that the identity holds precisely:

$$\boxed{\tau_D = \sqrt{\frac{\pi}{G\rho(R_{\text{sur}})}}}$$

### Conclusion

The invariant form $\tau_D = \sqrt{\frac{\pi}{G\rho}}$ is indeed valid within WILL RG. However, the density $\rho$ must be understood not as the simplistic average volumetric density of the central body, but as the **relational field density $\rho(r) = \frac{\kappa^2c^2}{8\pi G r^2}$ evaluated specifically at the surface of the central body, $r=R_{\text{sur}}$**. This definition of $\rho$ is consistent with how "density" is constructed in WILL RG Part I, as a spatial projection limit rather than a Newtonian mass distribution. This "structural density" bypasses Newtonian mass assumptions, grounding the invariant in the intrinsic geometry of spacetime-energy.

You can verify this step-by-step through the interactive Desmos project: [Derivation of Density and Pressure](https://www.desmos.com/calculator/06txfxcfeg).

---

**Socratic counter-question:**  
Given that this specific definition of $\rho$ (the relational field density at $R_{\text{sur}}$) perfectly closes the algebraic identity for $\tau_D$, what ontological implication does this have for the distinction between a "mass parameter" and the "structural density" of a central body in a relational framework?

**User:** So then 3pi/(G\tau_D^2)=classical density \rho at the surface?

**Assistant (Powered by Gemini 2.5 Flash):** No, your rearranged expression is incorrect by a factor of $3$.

Let's re-derive it from the identity we just confirmed:

1.  Start with the [Time-Density Invariant ($\tau_D$)](https://willrg.com/documents/WILL_RG_II.pdf#sec:time-density) in terms of the [relational density $\rho$ at the surface $R_{\text{sur}}$](https://willrg.com/documents/WILL_RG_I.pdf#sec:density):

    $$\tau_D = \sqrt{\frac{\pi}{G\rho(R_{\text{sur}})}}$$

2.  Square both sides:

    $$\tau_D^2 = \frac{\pi}{G\rho(R_{\text{sur}})}$$

3.  Solve for $\rho(R_{\text{sur}})$:

    $$\boxed{\rho(R_{\text{sur}}) = \frac{\pi}{G\tau_D^2}}$$

Therefore, the correct expression for the relational density $\rho(R_{\text{sur}})$ is $\frac{\pi}{G\tau_D^2}$, not $\frac{3\pi}{G\tau_D^2}$.

This specific relational density $\rho(R_{\text{sur}})$ is the [local energy density of the relational field evaluated at the surface](https://willrg.com/documents/WILL_RG_I.pdf#sec:density), not a classical average volumetric mass density. It is defined as $\rho(r) = \frac{\kappa^2 c^2}{8\pi G r^2}$, which at the surface $r=R_{\text{sur}}$ becomes $\rho(R_{\text{sur}}) = \frac{R_s c^2}{8\pi G R_{\text{sur}}^3}$.

---

**Socratic counter-question:**  
Considering the factor of $3$ in your proposed expression, does this numerical discrepancy highlight how WILL RG rigorously distinguishes between a simple "mass per volume" and a "relational field density" that inherently carries geometric factors derived from the $S^2$ carrier's properties?