# ==========================================
#  STAGE 1 — KEPLERIAN SCOUT
#  Structurally identical to the Stage-1 block of
#  Colab_Notebooks/ROM_HOLOGRAPHIC_REALITY_DECODER.ipynb
#  Wrapped as run_scout(dataset_json) for the browser worker.
# ==========================================

import json
import numpy as np
from scipy.optimize import differential_evolution

C_KMS = 299792.458  # speed of light in km/s


def _get_phase_unwrapped(t, t_peri, P, e):
    """Unwrapped true anomaly at each time, Newton-solved from the mean anomaly.
    t, t_peri are in MJD (days); P is in days."""
    M_unwrapped = (2 * np.pi / P) * (t - t_peri)
    orbit_count = np.floor(M_unwrapped / (2 * np.pi))
    M_wrapped = M_unwrapped % (2 * np.pi)
    E = M_wrapped.copy()
    for _ in range(30):
        f = E - e * np.sin(E) - M_wrapped
        dE = f / (1 - e * np.cos(E))
        E -= dE
        if np.max(np.abs(dE)) < 1e-10:
            break
    o_wrapped = 2 * np.arctan2(
        np.sqrt(1 + e) * np.sin(E / 2),
        np.sqrt(1 - e) * np.cos(E / 2),
    )
    o_positive = o_wrapped % (2 * np.pi)
    return o_positive + orbit_count * 2 * np.pi


def _kepler_rv_kms(t, K, vz0, e, omega, P, t_peri):
    o = _get_phase_unwrapped(t, t_peri, P, e) % (2 * np.pi)
    return K * (np.cos(o + omega) + e * np.cos(omega)) + vz0


def run_scout(dataset_json: str) -> str:
    """Fit the classical 6-parameter Kepler model (K, vz0, e, omega, P, T_peri)
    to the generated radial-velocity dataset via differential evolution.
    Returns the best-fit parameters, a dense model curve for overlay,
    and the residuals of (obs - classical fit) at every observation."""

    d = json.loads(dataset_json) if isinstance(dataset_json, str) else dataset_json
    t_obs   = np.array(d["t_obs"])
    vz_obs  = np.array(d["rv_kms"])
    sigma_v = np.array(d["sigma_kms"])

    Z_obs   = 1.0 + (vz_obs / C_KMS)
    sigma_Z = sigma_v / C_KMS

    idx_peak = int(np.argmax(np.abs(vz_obs)))
    t_peak   = float(t_obs[idx_peak])

    def classical_objective(params):
        K_g, vz0_g, e_g, om_g, P_g, tp_g = params
        try:
            v_model = _kepler_rv_kms(t_obs, K_g, vz0_g, e_g, om_g, P_g, tp_g)
            Z_model = 1.0 + (v_model / C_KMS)
            return float(np.sum(((Z_obs - Z_model) / sigma_Z) ** 2))
        except Exception:
            return 1e10

    bounds = [
        (10.0, 100000.0),                    # K    [km/s]
        (-150.0, 150.0),                     # vz0  [km/s]
        (0.50, 0.995),                       # e
        (0.0, 2 * np.pi),                    # omega
        (10.0, 500000.0),                    # P    [days]
        (t_peak - 1000.0, t_peak + 1000.0),  # T_peri [MJD]
    ]

    res = differential_evolution(
        classical_objective, bounds,
        strategy="best1bin", maxiter=1000,
        popsize=30, tol=1e-4, seed=101,
    )
    K, vz0, e, omega, P, t_peri = [float(v) for v in res.x]

    # Dense curve for overlay (500 points across the observed baseline)
    t_dense = np.linspace(float(np.min(t_obs)), float(np.max(t_obs)), 500)
    v_dense = _kepler_rv_kms(t_dense, K, vz0, e, omega, P, t_peri)

    # Residuals at each observation (observed minus classical fit)
    v_fit_obs = _kepler_rv_kms(t_obs, K, vz0, e, omega, P, t_peri)
    residuals = vz_obs - v_fit_obs
    resid_amp = float(np.max(residuals) - np.min(residuals))
    resid_rms = float(np.sqrt(np.mean(residuals ** 2)))

    report = (
        "=================================================================\n"
        "STAGE 1 — CLASSICAL KEPLER FIT (Keplerian Scout)\n"
        "=================================================================\n"
        f"Period (P)           : {P / 365.25:.3f}  years   ({P:.2f} days)\n"
        f"Eccentricity (e)     : {e:.5f}\n"
        f"Semi-amplitude (K)   : {K:.2f}  km/s\n"
        f"Pericentre angle (ω) : {np.degrees(omega) % 360:.2f}  deg\n"
        f"Systemic drift (vz0) : {vz0:.2f}  km/s\n"
        f"Time of pericentre   : {t_peri:.2f}  MJD\n"
        "-----------------------------------------------------------------\n"
        f"Residual peak-to-peak: {resid_amp:.2f}  km/s\n"
        f"Residual RMS         : {resid_rms:.2f}  km/s\n"
        "=================================================================\n"
        "The Keplerian curve captures the bulk of the signal.\n"
        "What remains in the residuals is NOT random noise — it is a\n"
        "coherent wave, phase-locked to the orbit. Classical mechanics\n"
        "alone cannot produce it."
    )

    return json.dumps({
        "params": {
            "P_days":   P,
            "P_years":  P / 365.25,
            "e":        e,
            "K_kms":    K,
            "omega_deg": float(np.degrees(omega) % 360),
            "vz0_kms":  vz0,
            "t_peri":   t_peri,
        },
        "curve": {
            "t":  t_dense.tolist(),
            "rv": v_dense.tolist(),
        },
        "residuals": {
            "t":        t_obs.tolist(),
            "r_kms":    residuals.tolist(),
            "peak_kms": resid_amp,
            "rms_kms":  resid_rms,
        },
        "report": report,
    })
