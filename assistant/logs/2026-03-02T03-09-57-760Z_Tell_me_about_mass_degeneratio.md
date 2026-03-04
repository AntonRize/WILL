---

layout: log

title: "Tell me about mass degeneration problem M sin(i)"

date: 2026-03-02T03:09:57.760Z

user_agent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36"

---



**User:** Humble thinker

**Assistant:** Confirmed. Mathematical engagement level set to **Humble thinker**. How can I assist you with WILL Relational Geometry?

**User:** Tell me about mass degeneration problem M sin(i). What's all the fuss about?

**Assistant:** Your request is very complex and the AI took too long to think. You can try asking the same question again or try simplifying it a little or even better - you can ask Anton Rize antonrize@willrg.com. Sometimes a good question is better than any answer...

**User:** How RG fixes the mass degeneration in orbital systems?

**Assistant:** In standard orbital mechanics, specifically in **Radial Velocity (RV)** measurements, we face a fundamental limitation known as the **$M \sin i$ degeneracy**. Because we can only measure the velocity of a star or planet along our line of sight, we cannot distinguish between a low-mass object orbiting "edge-on" and a high-mass object orbiting at a "tilt" (inclination $i$). 


This has been a primary obstacle in astronomy for over 130 years. **WILL Relational Geometry (RG)** resolves this problem by recognizing that the total speed of an object leaves unique "geometric fingerprints" that do not depend on our point of view.


### 1. The Problem: The "Linear" Limitation
In classical physics, the observed velocity semi-amplitude $K$ is a linear product:
$$ K = \frac{\beta_{\rm int} \sin i}{\sqrt{1-e^2}} $$


Here, $\beta$ (speed) and $\sin i$ (tilt) are multiplied together. You cannot change one without the other to get the same $K$. This is why textbooks often list the "minimum mass" ($M \sin i$) rather than the true mass.


### 2. The RG Solution: Higher-Order Invariants
As derived in [Part I - Section 17](https://willrg.com/documents/WILL_RG_I.pdf#sec:M_sin(i)), RG identifies that orbital dynamics are governed by the **Total Relational Shift ($Q$)**, which includes non-linear components that do not care about the observer's inclination.


RG introduces two independent "rulers" that depend only on the true speed ($\beta$):


*   **Precessional Phase Shift ($\Delta \phi$):** The orbit itself rotates (precesses) over time. In RG, this shift is strictly determined by the speed:
$$\Delta\phi = 6\pi \beta_{\rm int}^2$$
*   **Systemic Spacetime Factor ($Z_{\rm sys}$):** The total accumulated phase of light (redshift) includes a term that is quadratic in speed ($\beta^2$).


Because these effects scale with $\beta^2$ and **not** $\sin i$, they provide a second, independent equation. Once you measure the precession or the systemic shift, you solve for the true speed $\beta$. Once $\beta$ is known, the inclination $i$ is uniquely "unlocked" from the classical $K$ value.


### 3. Experimental Proof: The Star S2
This is not just theoretical. As demonstrated in the [Relational Orbital Mechanics (ROM)](https://willrg.com/rom/) simulations and the [S0-2 MCMC Analysis](https://willrg.com/documents/WILL_RG_I.pdf#sec:mcmc_s02), RG was tested against the star S2 orbiting the Black Hole at the center of our galaxy. 


Standard models require knowing the Black Hole's mass and the tilt of the orbit beforehand. The RG algorithm was able to:
1.  Take the "tilted" 1D radial velocity data.
2.  Use the $\beta^2$ invariants to "untilt" the system.
3.  Recover the true mass and inclination with high precision, matching the independent results of the GRAVITY collaboration without any "fitting" of mass parameters.


### Summary
By moving from a descriptive model (fitting a curve to numbers) to a **generative geometric model**, RG proves that mass and inclination are not fundamentally degenerate. They only appear so when we ignore the non-linear geometric constraints of the [Relational Carriers](https://willrg.com/documents/WILL_RG_I.pdf#sec:WILL_structure).


**Key Takeaway:** 
*   **Classical Physics:** $K = \text{Speed} \times \text{Tilt}$ (One equation, two unknowns).
*   **Relational Geometry:** $K = \text{Speed} \times \text{Tilt}$ **AND** $\text{Precession} = \text{Speed}^2$ (Two equations, two unknowns). The degeneracy is broken.


For a technical demonstration, you can view the [Predictions and Python Scripts](https://willrg.com/predictions/) page, which includes the MCMC code used to resolve the S0-2 orbit.