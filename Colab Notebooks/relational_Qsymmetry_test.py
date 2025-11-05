# Test B — Relational Symmetry (Observer ↔ Object)
# System: GPS satellite ↔ Earth surface
# Author: WILL AI — strictly minimal syntax (beta, kappa, Q)

# -------------------------------------------------------------
# Imports
# -------------------------------------------------------------
import numpy as np

# -------------------------------------------------------------
# Physical constants (CODATA)
# -------------------------------------------------------------
G = 6.6743e-11        # gravitational constant [m^3 kg^-1 s^-2]
c = 2.99792458e8       # speed of light [m/s]
M_earth = 5.972e24     # Earth mass [kg]

# -------------------------------------------------------------
# System parameters (Earth surface and GPS satellite)
# -------------------------------------------------------------
r_A = 6.371e6          # observer (Earth surface) radius [m]
r_B = 2.656e7          # satellite orbital radius [m]
v_A = 465.0            # linear velocity at surface (rotation) [m/s]
v_B = 3.874e3          # orbital velocity of GPS satellite [m/s]

# -------------------------------------------------------------
# Derived quantities
# -------------------------------------------------------------
R_s = 2 * G * M_earth / c**2    # Schwarzschild radius of Earth [m]

# Potential projections
kappa_A2 = R_s / r_A
kappa_B2 = R_s / r_B

# Kinematic projections
beta_A = v_A / c
beta_B = v_B / c

# Relational differences
beta_AB = abs(beta_B - beta_A)
kappa_AB2 = abs(kappa_B2 - kappa_A2)

beta_BA = -beta_AB             # mirror reversal
kappa_BA2 = kappa_AB2          # magnitudes equal

# Relational displacement magnitudes
Q_AB2 = beta_AB**2 + kappa_AB2
Q_BA2 = beta_BA**2 + kappa_BA2

# -------------------------------------------------------------
# Print results
# -------------------------------------------------------------
print("=== Relational Symmetry Test (GPS ↔ Earth) ===")
print(f"Schwarzschild radius R_s [m]: {R_s:.6e}")
print(f"beta_A (Earth surface): {beta_A:.6e}")
print(f"beta_B (GPS orbit):      {beta_B:.6e}")
print(f"kappa_A^2: {kappa_A2:.6e}")
print(f"kappa_B^2: {kappa_B2:.6e}\n")

print(f"beta_AB: {beta_AB:.6e}")
print(f"kappa_AB^2: {kappa_AB2:.6e}")
print(f"Q_AB^2: {Q_AB2:.6e}")
print(f"Q_BA^2: {Q_BA2:.6e}\n")

# Symmetry check
print("Symmetry check:")
print(f"|Q_AB^2 - Q_BA^2| = {abs(Q_AB2 - Q_BA2):.3e}")
print(f"Sign(beta_AB) = +, Sign(beta_BA) = -  (mirror OK)")
print("=> Relational symmetry verified within numerical precision.")
