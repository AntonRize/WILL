---

layout: log

title: "How RG fixes the mass degeneration in orbital systems"

date: 2026-03-02T06:39:11.860Z

user_agent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36"

---



**User:** Rigorous physicist

**Assistant:** Confirmed. Mathematical engagement level set to **Rigorous physicist**. How can I assist you with WILL Relational Geometry?

**User:** How RG fixes the mass degeneration in orbital systems?

**Assistant:** In the framework of **WILL Relational Geometry (RG)**, the resolution of the classical $M \sin i$ degeneracy is treated not as an observational hurdle to be bypassed with better instrumentation, but as a logical necessity derived from the **Non-Linear Relational Invariants** of the closed kinematic carrier $S^1$.

Standard Newtonian and first-order relativistic models suffer from this degeneracy because they truncate the kinematic description to its linear term, where the observed radial velocity semi-amplitude $K$ is:

$$ K = \frac{\beta_{\text{int}} \sin i}{\sqrt{1-e^2}} $$

This leaves an infinite family of $(\beta, i)$ pairs consistent with a single $K$. WILL RG resolves this by demonstrating that the **Total Relational Shift** $Q$ (and its associated phase evolution) depends on the absolute kinematic projection $\beta$, independent of the observer's inclination.


### 1. The Interior Kinematic Projection

WILL RG identifies the **Interior Kinematic Projection** $\beta_{\text{int}}$ as the fundamental variable of the energy-closed manifold:

$$ \beta_{\text{int}} \equiv \frac{\beta}{\sqrt{1-e^2}} $$

As detailed in [WILL RG Part I - Section 18.1](https://willrg.com/documents/WILL_RG_I.pdf#sec:M_sin(i)), all higher-order geometric effects depend on powers of $\beta_{\text{int}}$, which do not carry the $\sin i$ projection factor.


### 2. The Decoupling Invariants

The degeneracy is broken by two independent non-linear invariants that emerge from the **Relational Orbital Mechanics (ROM)** equations:

**A. Precessional Phase Shift ($\Delta\phi$):**
Derived from the accumulation of the total state difference $Q^2$ over a closed cycle (see [WILL RG Part I - Section 16.5](https://willrg.com/documents/WILL_RG_I.pdf#sec:precession_law)), the secular precession of the periapsis is:

$$ \Delta\phi = 6\pi \beta_{\text{int}}^2 $$

Because $\Delta\phi$ is an intrinsic geometric rotation of the orbital ellipse within the $S^2$ potential carrier, it is invariant under a change of the observer’s line-of-sight. Measuring $\Delta\phi$ provides a direct, non-degenerate value for $\beta_{\text{int}}$.

**B. Systemic Transverse Baseline ($Z_{\rm sys}$):**
The total observed redshift $Z_{\text{tot}}$ is the product of the gravitational phase $\kappa_X$ and the kinematic phase $\beta_Y$. This creates a unique relativistic modulation of the radial velocity curve:

$$ \tau_W = \kappa_X \cdot \beta_Y = \sqrt{1-\kappa^2}\sqrt{1-\beta^2} $$

This "spacetime factor" creates a transverse baseline shift in the data that scales with $\beta^2$. Like the precession, this $Z_{\rm sys}$ baseline is independent of $\sin i$.


### 3. Empirical Verification and MCMC Results

The validity of this decoupling has been demonstrated via Bayesian MCMC analysis on the S0-2 star data (near Sgr A*). While a classical "Ablated" model remains trapped on a degeneracy ridge, the **Full ROM** model correctly localizes the physical parameters. 

| Parameter | Full ROM (Median) | Ablated (Classical) | Truth (GRAVITY Ref.) |
| :--- | :--- | :--- | :--- |
| $\beta$ | $0.00597$ | $0.00477$ | $0.00645$ |
| $i$ | $130.8^{\circ}$ | $105.8^{\circ}$ | $134.0^{\circ}$ |

As substantiated in [WILL RG Part I - Section 18.3](https://willrg.com/documents/WILL_RG_I.pdf#sec:mcmc_s02), the inclusion of the $\beta^2$ invariants shifts the probability ridge to intersect the true physical inclination. 


### Summary of the Resolution

The $M \sin i$ degeneracy is an artifact of **linear truncation** in substantialist physics. By restoring the full non-linear geometry of the $S^1$ and $S^2$ carriers, WILL RG provides:

1.  **$\beta$ from non-linearities:** Extracted via $\Delta\phi$ and $Z_{\rm sys}$.
2.  **$i$ from amplitudes:** Once $\beta$ is fixed, $\sin i$ is uniquely recovered from $K$.

For a rigorous demonstration of this decoupling in dynamic systems, you should evaluate the [Relational Orbital Mechanics (ROM) Simulator](https://willrg.com/rom/), which visualizes how phase-driven evolution maintains stability without needing external mass parameters. 

You can also find the full Python implementation for this decoupling on our [Predictions and Validations page](https://willrg.com/predictions/).