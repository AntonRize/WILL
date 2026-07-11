"""
WILL R.O.M. — Relational Scalar Extraction
Juno Earth Flyby (Oct 9, 2013), in the Juno-centered relational frame.

For each time step, extracts the seven relational scalars that define
the (Juno, Earth, Sun) triangle plus the relative kinematics:

  Geometry:   r_E, r_S, alpha
  Kinematics: v_E, v_S, psi_E, psi_S

and the R.O.M. pair-projections:

  kappa^2_E, kappa^2_S, beta_E, beta_S, delta_E, delta_S

No vectors or rotations appear in the physics layer. JPL gives positions
and velocities (used only as a transport mechanism), and the script
immediately reduces them to the seven relational scalars.

Output: prints two tables (geometry + R.O.M. projections) and a perigee
snapshot. Also writes a CSV file 'rom_relational_juno.csv' with the full
time series for further analysis.
"""

import csv
import numpy as np
from astroquery.jplhorizons import Horizons

# Constants (SI)
C_M_S       = 299792458.0
AU_M        = 149597870700.0
SEC_PER_DAY = 86400.0
R_S_EARTH_M = 0.008870056         # Schwarzschild radius of Earth [m]
R_S_SUN_M   = 2953.250            # Schwarzschild radius of Sun   [m]


def fetch_states_relative_to_juno(target_id, start, stop, step):
    """
    Fetch (position, velocity) of target_id with Juno (-61) as the origin.
    Returns (times_jd, pos_m, vel_ms) — all in metric units, Juno frame.
    """
    obj = Horizons(id=target_id, location='@-61',
                   epochs={'start': start, 'stop': stop, 'step': step})
    vec = obj.vectors()
    times_jd = np.array(vec['datetime_jd'])
    pos_m  = np.column_stack((vec['x'],  vec['y'],  vec['z']))  * AU_M
    vel_ms = np.column_stack((vec['vx'], vec['vy'], vec['vz'])) * (AU_M / SEC_PER_DAY)
    return times_jd, pos_m, vel_ms


def angle_between(u, v):
    """Angle in radians between two vectors (row-wise)."""
    cos_t = np.einsum('ij,ij->i', u, v) / (
        np.linalg.norm(u, axis=1) * np.linalg.norm(v, axis=1))
    return np.arccos(np.clip(cos_t, -1.0, 1.0))


def main():
    start = '2013-10-08 06:00'
    stop  = '2013-10-11 06:00'
    step  = '1h'
    csv_path = 'rom_relational_juno.csv'

    print(f"Fetching Earth and Sun states relative to Juno "
          f"({start} -> {stop}, step {step})...")
    t_E, pos_E, vel_E = fetch_states_relative_to_juno('399', start, stop, step)
    t_S, pos_S, vel_S = fetch_states_relative_to_juno('10',  start, stop, step)

    assert np.allclose(t_E, t_S), "Time grids differ between Earth and Sun queries"
    times_jd = t_E

    # ===== Seven relational scalars =====
    r_E    = np.linalg.norm(pos_E, axis=1)         # m
    r_S    = np.linalg.norm(pos_S, axis=1)         # m
    alpha  = angle_between(pos_E, pos_S)           # rad, Earth-Juno-Sun

    v_E    = np.linalg.norm(vel_E, axis=1)         # m/s
    v_S    = np.linalg.norm(vel_S, axis=1)         # m/s
    psi_E  = angle_between(vel_E, pos_E)           # rad
    psi_S  = angle_between(vel_S, pos_S)           # rad

    # ===== R.O.M. pair projections =====
    kappa2_E = R_S_EARTH_M / r_E
    kappa2_S = R_S_SUN_M   / r_S
    beta_E   = v_E / C_M_S
    beta_S   = v_S / C_M_S
    delta_E  = kappa2_E / (2.0 * beta_E**2)
    delta_S  = kappa2_S / (2.0 * beta_S**2)

    i_p = int(np.argmin(r_E))   # perigee index (within the sampled grid)

    # ===== Geometry table =====
    print("\n--- GEOMETRY (Juno-centered relational frame) ---")
    print(f"{'JD':>11s}  {'r_E[km]':>10s}  {'r_S[Gm]':>9s}  {'alpha[deg]':>10s}  "
          f"{'v_E[km/s]':>9s}  {'v_S[km/s]':>9s}  {'psi_E[deg]':>10s}  {'psi_S[deg]':>10s}")
    for i in range(len(times_jd)):
        marker = "  <- perigee (sampled)" if i == i_p else ""
        print(f"{times_jd[i]:11.5f}  {r_E[i]/1e3:10.1f}  {r_S[i]/1e9:9.4f}  "
              f"{np.degrees(alpha[i]):10.4f}  {v_E[i]/1e3:9.4f}  {v_S[i]/1e3:9.4f}  "
              f"{np.degrees(psi_E[i]):10.4f}  {np.degrees(psi_S[i]):10.4f}{marker}")

    # ===== R.O.M. projections table =====
    print("\n--- R.O.M. PAIR PROJECTIONS ---")
    print(f"{'JD':>11s}  {'kappa2_E':>12s}  {'beta_E':>12s}  {'delta_E':>10s}  "
          f"{'kappa2_S':>12s}  {'beta_S':>12s}  {'delta_S':>10s}")
    for i in range(len(times_jd)):
        marker = "  <- perigee (sampled)" if i == i_p else ""
        print(f"{times_jd[i]:11.5f}  {kappa2_E[i]:12.4e}  {beta_E[i]:12.4e}  "
              f"{delta_E[i]:10.4f}  {kappa2_S[i]:12.4e}  {beta_S[i]:12.4e}  "
              f"{delta_S[i]:10.4f}{marker}")

    # ===== Perigee snapshot =====
    print(f"\n--- PERIGEE SNAPSHOT (sampled, JD={times_jd[i_p]:.5f}) ---")
    print(f"r_E      : {r_E[i_p]/1e3:14.3f}  km")
    print(f"r_S      : {r_S[i_p]/1e9:14.6f}  Gm")
    print(f"alpha    : {np.degrees(alpha[i_p]):14.4f}  deg")
    print(f"v_E      : {v_E[i_p]/1e3:14.6f}  km/s")
    print(f"v_S      : {v_S[i_p]/1e3:14.6f}  km/s")
    print(f"psi_E    : {np.degrees(psi_E[i_p]):14.4f}  deg")
    print(f"psi_S    : {np.degrees(psi_S[i_p]):14.4f}  deg")
    print(f"kappa2_E : {kappa2_E[i_p]:14.6e}")
    print(f"kappa2_S : {kappa2_S[i_p]:14.6e}")
    print(f"beta_E   : {beta_E[i_p]:14.6e}")
    print(f"beta_S   : {beta_S[i_p]:14.6e}")
    print(f"delta_E  : {delta_E[i_p]:14.6f}    (= 1 if Earth-pair closed)")
    print(f"delta_S  : {delta_S[i_p]:14.6f}    (= 1 if Sun-pair  closed)")
    print(f"\nNote: with a 1-hour grid, the sampled minimum r_E (here {r_E[i_p]/1e3:.0f} km)")
    print( "is generally NOT the true perigee (~6942 km). Re-run with a finer step ('1m')")
    print( "for a tight perigee estimate.")

    # ===== CSV export =====
    with open(csv_path, 'w', newline='') as f:
        w = csv.writer(f)
        w.writerow(['JD', 'r_E_m', 'r_S_m', 'alpha_rad',
                    'v_E_mps', 'v_S_mps', 'psi_E_rad', 'psi_S_rad',
                    'kappa2_E', 'kappa2_S', 'beta_E', 'beta_S',
                    'delta_E', 'delta_S'])
        for i in range(len(times_jd)):
            w.writerow([times_jd[i], r_E[i], r_S[i], alpha[i],
                        v_E[i], v_S[i], psi_E[i], psi_S[i],
                        kappa2_E[i], kappa2_S[i], beta_E[i], beta_S[i],
                        delta_E[i], delta_S[i]])
    print(f"\nFull time series written to: {csv_path}")


if __name__ == '__main__':
    main()
