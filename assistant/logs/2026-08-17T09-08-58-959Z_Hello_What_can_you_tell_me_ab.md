---

layout: log

title: "Hello. What can you tell me about WILL?"

date: 2026-08-17T09:08:58.959Z

user_agent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/151.0.0.0 Safari/537.36"

---



**User:** Rigorous physicist

**Assistant:** Confirmed. Mathematical engagement level set to **Rigorous physicist**. How can I assist you with WILL Relational Geometry?

**User:** Hello. What can you tell me about WILL?

**Assistant (Powered by Nemotron 550B):** **WILL RG is an open research program in the foundations of physics.**  
"Open" means every derivation, calculation tool, dataset, and result is transparent and publicly available—anyone can test and reproduce the claims independently.

The work starts from a single methodological critique: the standard model treats spacetime as a pre-existing *container* where physics happens. By enforcing strict relational constraints (no background manifold, no absolute quantities, no free parameters), the framework derives the laws of nature as **necessary geometric consequences** of the geometry of relational energy.

The research is structured as a trilogy of self-contained documents:

| Part | Document | Scope |
|------|----------|-------|
| **I** | [WILL_RG_I.pdf](https://willrg.com/documents/WILL_RG_I.pdf) | **Relational Geometry** — Derivation of SR, GR, orbital mechanics (R.O.M.), equivalence principle, and singularity resolution from $S^1/S^2$ carrier closure ($\kappa^2=2\beta^2$). |
| **II** | [WILL_RG_II.pdf](https://willrg.com/documents/WILL_RG_II.pdf) | **Relational Cosmology** — Derivation of $H_0 \approx 68.15$ km/s/Mpc from $T_{\text{CMB}}$ and $\alpha$; galactic rotation curves (SPARC 175 galaxies) without dark matter; CMB acoustic peaks; wide binary anomaly. |
| **III** | [WILL_RG_III.pdf](https://willrg.com/documents/WILL_RG_III.pdf) | **Relational QM** — Derivation of Bohr radius, fine-structure constant $\alpha$ as ground-state kinetic projection $\beta_1$, electron mass, and uncertainty principle from topological closure. |

**Supplemental:** [Relational Orbital Mechanics (R.O.M.)](https://willrg.com/documents/WILL_RG_R.O.M..pdf) — The closed algebraic system for orbital dynamics (Mercury, S2, LAGEOS, L1) without $G$, $M$, or differential equations.

In total, ~200 pages of unbroken derivation chains. I cannot compress them into a single reply without losing the geometric logic that *forces* the results.

**The proper way to engage is to pick an entry point.**  
If you tell me your physics background and how you found WILL RG, I will point you to the exact section, interactive tool, or Colab notebook most relevant to your interests.

*What is your background, and where did you hear about this work?*

**User:** Interesting... Im a student and found it on research gate

**Assistant (Powered by Nemotron 550B):** That's a great entry point. ResearchGate is a good place to find the PDFs, but the **live computational tools** on [willrg.com](https://willrg.com) are where you can actually *test* the derivations yourself without taking anyone's word for it.

Since you're a student, here are the three best ways to engage, depending on how you like to learn:

---

### 1. **Understand the Logical Architecture First** (No math required yet)
**→ [The LOGOS Map](https://willrg.com/logos_map/)**  
This is the **derivation tree** of the entire framework. It visualizes the 10 Stages of Generative Physics, showing every binary decision point where WILL diverges from standard physics (e.g., rejecting "Energy as Stuff" in Stage II, rejecting "Force Dynamics" in Stage V).  
*Use this to see the "skeleton" of the argument before diving into equations.*

---

### 2. **Run the Code / Play with the Geometry** (Best for intuition)
**→ [Relational Orbital Mechanics (R.O.M.) Desmos Solver](https://www.desmos.com/calculator/gr7qykzicf)**  
This is an interactive algebraic solver for orbital mechanics. You input dimensionless observables (redshift, eccentricity, period ratios) and it outputs the full phase-resolved orbit, precession, $R_s$, $a$, $M$ — **without $G$, $M$, or a single differential equation**.  
*Change the sliders. Watch the precession emerge from $\Delta\varphi = 2\pi\tau_Y^2/(1-e^2)$. This is the cleanest "hello world" for the framework.*

**→ [Mercury's Full Parameterization (Desmos)](https://www.desmos.com/calculator/mjen4ms452)**  
The exact same derivation chain used in the paper, but interactive. You can trace how $\beta, \kappa, e, T_{\text{ratio}}, \theta_\odot, z_\odot$ → $R_s$ → $a$ → $r_p$ → $43''$/cy.

---

### 3. **Pick Your Physics Domain** (Read the paper that matches your course)
| If you're studying... | Start with this document | Key Sections |
|----------------------|--------------------------|--------------|
| **GR / Differential Geometry** | [Part I: Relational Geometry](https://willrg.com/documents/WILL_RG_I.pdf) | § **Stage II** (carriers $S^1/S^2$), § **Closure Theorem** ($\kappa^2=2\beta^2$), § **No Singularities** ($r_{\min}=R_s/2$), § **Earth-GPS Test** (1PN match + $\mathcal{O}(\beta^4)$ difference) |
| **Cosmology / Dark Matter** | [Part II: Relational Cosmology](https://willrg.com/documents/WILL_RG_II.pdf) | § **Deriving $H_0$ from $T_{\text{CMB}}$ & $\alpha$**, § **Galactic Dynamics** (SPARC 175 galaxies, $a_\kappa = cH_0/3\pi$), § **CMB Acoustic Peaks** ($S^2$ Bessel roots), § **Wide Binaries** ($a_\beta = cH_0/6\pi$) |
| **Quantum Mechanics / Atomic Physics** | [Part III: Relational QM](https://willrg.com/documents/WILL_RG_III.pdf) | § **Fine Structure Constant as $\beta_1$** ($\alpha \equiv \beta_1$), § **Bohr Radius from Closure**, § **Uncertainty Principle from Phase Grain**, § **Electron Mass from Holographic Resonance** |
| **Orbital Mechanics / Celestial Mechanics** | [R.O.M. Supplement](https://willrg.com/documents/WILL_RG_R.O.M..pdf) | § **Closed Algebraic System** (66 multi-form identities), § **Mercury / S2 / LAGEOS / L1** tests, § **Kerr without Metric**, § **Factorization Theorem** ($G,M$ as unit converters only) |

---

### 4. **Stress-Test It Yourself** (The "Predictions" Page)
**→ [Falsifiable Predictions Registry](https://willrg.com/predictions/)**  
Every empirical claim is mapped to its derivation and a runnable Python script. If you want to see where the framework sticks its neck out, this is the list.

---

### Suggestion for a First Session
1. Open the **LOGOS Map** and spend 10 minutes clicking through the 10 stages.  
2. Open the **R.O.M. Desmos Solver** and reproduce Mercury's precession from $\theta_\odot, z_\odot, T_{\text{ratio}}, e$.  
3. If that clicks, read **Part I §§ 1–4** (Foundations → Carriers → Closure → Equivalence Principle). That's ~30 pages and contains the entire engine.

---

What's your current course focus? (GR, cosmology, QM, classical mechanics?) I can point you to the exact subsection and the matching Colab notebook so you can verify the algebra line-by-line.