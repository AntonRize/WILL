# ==========================================
#  1PN DATA GENERATOR (STRICT BETA VALIDATION)
#  Byte-equivalent to Colab_Notebooks/ROM_HOLOGRAPHIC_REALITY_DECODER.ipynb
#  Wrapped in a function so the browser can call it with any seed.
# ==========================================

import numpy as np
import pandas as pd
import json

G = 6.67430e-11
C = 299792458.0
M_SUN = 1.98847e30
SEC_PER_YEAR = 365.25 * 86400


def run_generator(random_seed: int):
    """Generate a 1PN radial-velocity dataset. Internally re-samples system
    parameters until SNR >= 4 and beta >= 0.006 so that ANY integer seed
    yields a scientifically viable dataset. Returns a dict with the
    observable stream and the sealed truth.
    """
    rng = np.random.default_rng(int(random_seed))

    attempts = 0
    while True:
        attempts += 1
        log_M = rng.uniform(np.log10(10.0), np.log10(1e9))
        M_bh = (10 ** log_M) * M_SUN

        P_scale = 10 ** (log_M / 3.0 - 2.0)
        P_yrs = rng.uniform(1.0, 50.0) * P_scale
        if P_yrs < 0.01:
            P_yrs = 0.01

        e_true = rng.uniform(0.85, 0.98)
        i_true = rng.uniform(np.radians(10.0), np.radians(170.0))
        w_true = rng.uniform(0.0, 2 * np.pi)
        vz0_true = rng.uniform(-50.0, 50.0)
        T_peri = 58000.0
        NOISE_SIGMA_KMS = 3.0

        P_sec = P_yrs * SEC_PER_YEAR
        a_meters = (G * M_bh * (P_sec ** 2) / (4 * np.pi ** 2)) ** (1 / 3)
        beta_true = np.sqrt(G * M_bh / a_meters) / C

        # Observation epochs
        t_bg = rng.uniform(T_peri - (P_yrs * 365 * 0.5),
                           T_peri + (P_yrs * 365 * 1.5), 40)
        t_peri_1 = rng.normal(T_peri,            P_yrs * 365 * 0.05, 60)
        t_peri_2 = rng.normal(T_peri + P_yrs * 365.25, P_yrs * 365 * 0.05, 60)
        t_obs = np.sort(np.concatenate([t_bg, t_peri_1, t_peri_2]))

        # Stable Keplerian engine with unwrapped true anomaly
        M_unwrapped = (2 * np.pi / P_sec) * (t_obs * 86400 - T_peri * 86400)
        orbit_count = np.floor(M_unwrapped / (2 * np.pi))
        M_wrapped = M_unwrapped % (2 * np.pi)
        E = M_wrapped.copy()
        for _ in range(50):
            f = E - e_true * np.sin(E) - M_wrapped
            dE = f / (1 - e_true * np.cos(E))
            E -= dE
            if np.max(np.abs(dE)) < 1e-12:
                break

        nu_wrapped = 2 * np.arctan2(
            np.sqrt(1 + e_true) * np.sin(E / 2),
            np.sqrt(1 - e_true) * np.cos(E / 2))
        nu_positive  = nu_wrapped % (2 * np.pi)
        nu_unwrapped = nu_positive + orbit_count * 2 * np.pi

        r_obs = a_meters * (1 - e_true ** 2) / (1 + e_true * np.cos(nu_positive))

        # 1PN additive physics
        delta_w_per_radian = (3 * G * M_bh) / (a_meters * (1 - e_true ** 2) * C ** 2)
        w_dynamic = w_true + delta_w_per_radian * nu_unwrapped

        K_amp = np.sqrt(G * M_bh / (a_meters * (1 - e_true ** 2))) * np.sin(i_true)
        v_rad = K_amp * (np.cos(nu_positive + w_dynamic) + e_true * np.cos(w_dynamic))

        v_orb_sq_t = G * M_bh * (2.0 / r_obs - 1.0 / a_meters)
        z_grav      = (G * M_bh) / (r_obs * C ** 2)
        z_transverse = v_orb_sq_t / (2 * C ** 2)
        v_rel_shift_kms = (z_grav + z_transverse) * C / 1000.0

        rel_shift_amplitude = np.max(v_rel_shift_kms) - np.min(v_rel_shift_kms)
        snr_rel = rel_shift_amplitude / NOISE_SIGMA_KMS

        if snr_rel >= 4.0 and beta_true >= 0.006:
            break
        if attempts > 5000:
            raise RuntimeError("Generator failed to converge after 5000 attempts.")

    rv_clean_kms = vz0_true + (v_rad / 1000.0) + v_rel_shift_kms
    rv_noisy_kms = rv_clean_kms + rng.normal(0, NOISE_SIGMA_KMS, len(t_obs))
    sigma_array  = np.full(len(t_obs), NOISE_SIGMA_KMS)

    report = (
        "=================================================================\n"
        "DATASET VALIDATION REPORT\n"
        "=================================================================\n"
        f"Seed used:                 {int(random_seed)}\n"
        f"Internal attempts:         {attempts}\n"
        f"Total Epochs Sampled:      {len(t_obs)}\n"
        f"Observation Baseline:      {(np.max(t_obs)-np.min(t_obs))/365.25:.2f} years\n"
        f"Noise Floor (1 sigma):     {NOISE_SIGMA_KMS:.1f} km/s\n"
        "-----------------------------------------------------------------\n"
        f"Classical Semi-Amplitude:  {np.abs(K_amp)/1000.0:.1f} km/s\n"
        f"Relativistic Amplitude:    {rel_shift_amplitude:.2f} km/s\n"
        f"Relativistic SNR:          {snr_rel:.2f}\n"
        f"Generated System Mass:     {M_bh/M_SUN:,.2f} M_sun\n"
        f"True Kinematic Proj (beta):{beta_true:.6f}\n"
        "=================================================================\n"
        "STATUS: SUCCESS. Data meets strict criteria for blind testing."
    )

    return json.dumps({
        "t_obs":      t_obs.tolist(),
        "rv_kms":     rv_noisy_kms.tolist(),
        "sigma_kms":  sigma_array.tolist(),
        "report":     report,
        "truth": {
            "P_yrs":        float(P_yrs),
            "e":            float(e_true),
            "i_deg":        float(np.degrees(i_true) % 180),
            "omega_deg":    float(np.degrees(w_true) % 360),
            "vz0_kms":      float(vz0_true),
            "beta":         float(beta_true),
            "M_solar":      float(M_bh / M_SUN),
        },
    })
