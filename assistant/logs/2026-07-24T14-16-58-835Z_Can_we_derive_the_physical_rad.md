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