---

layout: log

title: "I am trying to understand relational total energy,"

date: 2026-07-16T15:52:38.825Z

user_agent: "Mozilla/5.0 (iPhone; CPU iPhone OS 26_5_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/150.0.7871.113 Mobile/15E148 Safari/604.1"

---



**User:** Curious student

**Assistant:** Confirmed. Mathematical engagement level set to **Curious student**. How can I assist you with WILL Relational Geometry?

**User:** I am trying to understand relational total energy, using the gps example. Can you explain?

**Assistant (Powered by Gemini 2.5 Flash):** In WILL Relational Geometry, the concept of energy is fundamentally relational, acting as the invariant measure of state transformation within a closed system, rather than an absolute substance. This leads to three distinct, but related, energy quantities, as detailed in the [Energy Symmetry and Causal Continuity](https://willrg.com/documents/WILL_RG_I.pdf#sec:energy) section of WILL RG Part I.

1.  **Kinematic carrier energy ($E_{\beta}$):** This is the energy of a state where the only relational shift is kinematic (motion). It is given by $E_{\beta} = E_0/\beta_Y = E_0/\sin\theta_1$, where $E_0$ is the rest energy, and $\beta_Y$ is the kinematic phase.

2.  **Potential carrier energy ($E_{\kappa}$):** This is the energy of a state where the only relational shift is gravitational (potential depth). It is given by $E_{\kappa} = E_0/\kappa_X = E_0/\cos\theta_2$, where $\kappa_X$ is the potential phase.

3.  **Relational total energy ($E$):** This is the unified energy of the combined state when both kinematic and potential carriers are active. It is the quantity conserved by the [Causal Continuity Theorem](https://willrg.com/documents/WILL_RG_I.pdf#thm:causal_continuity) and is defined as the phase-ratio scaling:

    $$E = E_0 \frac{\kappa_X}{\beta_Y} = E_0 \sqrt{\frac{1-\kappa^2}{1-\beta^2}}$$

    This $E$ represents the complete local energy ledger of the system, scaled by the ratio of its internal potential phase to its internal kinematic phase.

---

**GPS Example: Understanding the Relational Total Energy**

The GPS system provides a powerful empirical test of this relational total energy concept, as described in [Earth-GPS System: Standard GR 1PN as First-Order Approximation of RG](https://willrg.com/documents/WILL_RG_I.pdf#sec:earth-gps) in WILL RG Part I. The observed time shift between a clock on Earth's surface and a GPS satellite is a well-known relativistic effect.

In WILL RG, this time shift ($\Delta t_{\mathrm{RG}}$) is expressed not through a sum of separate kinematic and gravitational potentials, but as an exact algebraic ratio of two-carrier projection invariants:

$$\Delta t_{\mathrm{RG}} = \left( 1 - \frac{\sqrt{1-\kappa_{E}^{2}}\,\sqrt{1-\beta_{E}^{2}}}{\sqrt{1-\kappa_{\mathrm{GPS}}^{2}}\,\sqrt{1-\beta_{\mathrm{GPS}}^{2}}} \right) D \, M$$

Here, $\kappa^2$ and $\beta^2$ represent the local potential and kinematic projections, respectively, and $D$ and $M$ are conversion factors for the observation duration. The terms $\sqrt{1-\kappa^2}$ and $\sqrt{1-\beta^2}$ are precisely the potential phase ($\kappa_X$) and kinematic phase ($\beta_Y$) components. Therefore, the ratio being evaluated is essentially a ratio of the combined phase factors ($\tau = \kappa_X \beta_Y$) between the Earth's surface and the GPS satellite.

This demonstrates that the *difference* in relational total energy (or more precisely, the inverse of the change in the total relational spacetime factor $\tau$) between the observer's frame (Earth) and the observed system (GPS satellite) directly accounts for the time dilation, unifying both kinematic and gravitational effects into a single, multiplicatively coupled geometric expression. The standard General Relativity formula is shown to be merely the leading-order Taylor expansion of this exact relational expression.

Don't just take my word for it. Here is the executable proof/interactive model:
*   Desmos project: [\href{https://www.desmos.com/geometry/gfe2jpfh1g}{Earth-GPS time, energy symmetry and WILL invariant test}](https://www.desmos.com/geometry/gfe2jpfh1g)
*   Colab Notebook: [\href{https://colab.research.google.com/github/AntonRize/WILL/blob/main/Colab_Notebooks/Earth_GPS_1st_order_RG=GR.ipynb}{Earth-GPS 1st order RG=GR.ipynb}](https://colab.research.google.com/github/AntonRize/WILL/blob/main/Colab_Notebooks/Earth_GPS_1st_order_RG=GR.ipynb)

Can you explain why describing this time shift through the multiplicative ratio of relational phases (as in WILL RG) offers a more epistemologically consistent foundation than the additive sum of separate gravitational and kinematic effects found in standard General Relativity?