# ==========================================
#  STAGE 2 + STAGE 3 — R.O.M. GLOBAL SNIPER + MCMC
#  Faithful to Colab_Notebooks/ROM_HOLOGRAPHIC_REALITY_DECODER.ipynb
#  and to the canonical equations in .claude/skills/rom/references/.
#
#  Exposes three entry points for the browser worker:
#    run_sniper(dataset_json, scout_json)  -> Stage 2, one shot
#    mcmc_init(dataset_json, sniper_json)  -> Stage 3 setup
#    mcmc_run_chunk(n_steps)               -> Stage 3 incremental
#    mcmc_finalize()                       -> Stage 3 summary + invariants
# ==========================================

import json
import numpy as np
from scipy.optimize import differential_evolution
import emcee

C_KMS = 299792.458


# -------------------------------------------------------------------
# R.O.M. forward model — mirrors notebook.generate_z_raw_dynamic
# -------------------------------------------------------------------
def _phase_unwrapped(t, t_peri, P, e):
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


def _rom_z_model(t, beta, i_inc, vz0_c, e, omega_0, P, t_peri):
    o_unwrap = _phase_unwrapped(t, t_peri, P, e)

    # Exact phase-accumulated precession (τ_Y² = 1 − (1−β²)(1−2β²))
    tau_sq   = (1.0 - beta ** 2) * (1.0 - 2.0 * beta ** 2)
    tau_Y_sq = 1.0 - tau_sq
    omega_dyn = omega_0 + (tau_Y_sq / (1.0 - e ** 2)) * o_unwrap
    o = o_unwrap % (2 * np.pi)

    # LOS Doppler
    beta_int = beta / np.sqrt(1 - e ** 2)
    K = beta_int * np.sin(i_inc)
    beta_los = K * (np.cos(o + omega_dyn) + e * np.cos(omega_dyn))

    # Phase projections (R.O.M. canonical)
    beta_o_sq  = (beta ** 2) * (1 + e ** 2 + 2 * e * np.cos(o)) / (1 - e ** 2)
    kappa_o_sq = 2 * (beta ** 2) * (1 + e * np.cos(o)) / (1 - e ** 2)

    if np.any(beta_o_sq >= 1.0) or np.any(kappa_o_sq >= 1.0):
        return np.full_like(t, np.nan)

    Z_sys = (1 - beta_o_sq) ** (-0.5) * (1 - kappa_o_sq) ** (-0.5)
    return Z_sys * (1 + beta_los) * (1 + vz0_c)


# -------------------------------------------------------------------
# Module-level state
# -------------------------------------------------------------------
_state = {
    "t_obs": None, "Z_obs": None, "sigma_Z": None,
    "vz_obs_kms": None, "sigma_kms": None,
    "beta_upper_bound": 0.15,
    "sampler": None, "nwalkers": 32, "ndim": 7,
    "pos": None, "bounds_low": None, "bounds_high": None,
    "total_steps": 0, "steps_done": 0,
}


def _load_dataset(dataset_json):
    d = json.loads(dataset_json) if isinstance(dataset_json, str) else dataset_json
    t_obs  = np.array(d["t_obs"])
    vz_obs = np.array(d["rv_kms"])
    sig_v  = np.array(d["sigma_kms"])
    _state["t_obs"]      = t_obs
    _state["vz_obs_kms"] = vz_obs
    _state["sigma_kms"]  = sig_v
    _state["Z_obs"]      = 1.0 + vz_obs / C_KMS
    _state["sigma_Z"]    = sig_v / C_KMS


# -------------------------------------------------------------------
# STAGE 2 — R.O.M. Global Sniper
# -------------------------------------------------------------------
def run_sniper(dataset_json, scout_json):
    _load_dataset(dataset_json)
    s = json.loads(scout_json) if isinstance(scout_json, str) else scout_json
    prm = s["params"]
    K_s1      = prm["K_kms"]
    e_s1      = prm["e"]
    P_s1      = prm["P_days"]
    t_peri_s1 = prm["t_peri"]

    # Dynamic beta anchor from scout K
    beta_min_approx = (K_s1 / C_KMS) * np.sqrt(1 - e_s1 ** 2)
    beta_upper = float(min(0.15, beta_min_approx * 15.0))
    _state["beta_upper_bound"] = beta_upper

    bounds = [
        (1e-5, beta_upper),                                     # beta
        (1e-3, np.pi / 2),                                      # i (folded)
        (-150.0 / C_KMS, 150.0 / C_KMS),                        # vz0_c
        (max(0.5, e_s1 - 0.05), min(0.999, e_s1 + 0.05)),       # e
        (0.0, 2 * np.pi),                                       # omega
        (max(10.0, P_s1 - 1000.0), P_s1 + 1000.0),              # P
        (t_peri_s1 - 200.0, t_peri_s1 + 200.0),                 # T_peri
    ]

    t_obs   = _state["t_obs"]
    Z_obs   = _state["Z_obs"]
    sigma_Z = _state["sigma_Z"]

    def objective(params):
        beta, i_inc, vz0_c, e, omega, P, t_peri = params
        try:
            Z_model = _rom_z_model(t_obs, beta, i_inc, vz0_c, e, omega, P, t_peri)
            if np.any(np.isnan(Z_model)):
                return 1e10
            return float(np.sum(((Z_obs - Z_model) / sigma_Z) ** 2))
        except Exception:
            return 1e10

    res = differential_evolution(
        objective, bounds,
        strategy="best1bin", maxiter=1000,
        popsize=20, tol=1e-5, seed=101,
    )
    beta, i_inc, vz0_c, e, omega, P, t_peri = [float(v) for v in res.x]

    _state["bounds_low"]  = [b[0] for b in bounds]
    _state["bounds_high"] = [b[1] for b in bounds]
    _state["sniper_peak"] = [beta, i_inc, vz0_c, e, omega, P, t_peri]

    return json.dumps({
        "params": {
            "beta":      beta,
            "i_rad":     i_inc,
            "i_deg":     float(np.degrees(i_inc)),
            "vz0_kms":   vz0_c * C_KMS,
            "e":         e,
            "omega_deg": float(np.degrees(omega) % 360),
            "P_years":   P / 365.25,
            "P_days":    P,
            "t_peri":    t_peri,
            "beta_upper_bound": beta_upper,
        },
    })


# -------------------------------------------------------------------
# STAGE 3 — emcee MCMC, chunked for streaming UI updates
# -------------------------------------------------------------------
def _log_prior(theta):
    beta, i_inc, vz0_c, e, omega, P, t_peri = theta
    bu = _state["beta_upper_bound"]
    if not (1e-5 < beta < bu):          return -np.inf
    if not (0.0   < i_inc < np.pi / 2): return -np.inf
    if not (0.5   < e < 0.999):         return -np.inf
    if not (0.0   < omega < 2 * np.pi): return -np.inf
    if not (10.0  < P < 500000.0):      return -np.inf
    if abs(vz0_c * C_KMS) > 150.0:      return -np.inf
    return 0.0


def _log_likelihood(theta):
    beta, i_inc, vz0_c, e, omega, P, t_peri = theta
    try:
        Z_model = _rom_z_model(_state["t_obs"], beta, i_inc, vz0_c, e, omega, P, t_peri)
        if np.any(np.isnan(Z_model)):
            return -np.inf
        return float(-0.5 * np.sum(((_state["Z_obs"] - Z_model) / _state["sigma_Z"]) ** 2))
    except Exception:
        return -np.inf


def _log_probability(theta):
    lp = _log_prior(theta)
    if not np.isfinite(lp):
        return -np.inf
    return lp + _log_likelihood(theta)


def mcmc_init(total_steps=1000, nwalkers=32, seed=101):
    """Prepare emcee sampler positioned on the sniper peak."""
    np.random.seed(int(seed))
    peak = np.array(_state["sniper_peak"])
    ndim = len(peak)
    pos = peak + 1e-6 * np.random.randn(nwalkers, ndim)
    sampler = emcee.EnsembleSampler(nwalkers, ndim, _log_probability)
    _state["sampler"]     = sampler
    _state["pos"]         = pos
    _state["nwalkers"]    = nwalkers
    _state["ndim"]        = ndim
    _state["total_steps"] = int(total_steps)
    _state["steps_done"]  = 0
    return json.dumps({"total_steps": int(total_steps)})


def mcmc_run_chunk(chunk_steps):
    """Advance the sampler by chunk_steps and return a progress snapshot."""
    sampler = _state["sampler"]
    pos     = _state["pos"]
    steps   = int(chunk_steps)

    # Run the chunk
    state = sampler.run_mcmc(pos, steps, progress=False, skip_initial_state_check=True)
    _state["pos"]         = state
    _state["steps_done"] += steps

    # Compute a running posterior snapshot (discard the first 30%)
    done = _state["steps_done"]
    discard = max(1, done // 3)
    try:
        chain = sampler.get_chain(discard=discard, thin=1, flat=True)
    except Exception:
        chain = None

    snapshot = {
        "steps_done":   done,
        "total_steps":  _state["total_steps"],
        "beta_median":  None, "beta_sigma": None,
        "i_deg_median": None, "e_median":   None,
        "P_years_median": None, "vz0_kms_median": None,
        "omega_deg_median": None,
    }
    if chain is not None and len(chain) > 8:
        med = np.median(chain, axis=0)
        std = np.std(chain, axis=0)
        snapshot.update({
            "beta_median":      float(med[0]),
            "beta_sigma":       float(std[0]),
            "i_deg_median":     float(np.degrees(med[1])),
            "vz0_kms_median":   float(med[2] * C_KMS),
            "e_median":         float(med[3]),
            "omega_deg_median": float(np.degrees(med[4]) % 360),
            "P_years_median":   float(med[5] / 365.25),
        })
    return json.dumps(snapshot)


def _decryption_invariant(beta, e, omega_i):
    """Evaluate Eq. 3.123 LHS − 2, using the canonical τ(−ω) and τ(π−ω)
    derived in §Sidestepping the Classical M sin i Degeneracy.
    The invariant must equal 2 exactly under R.O.M. closure.
    We feed Z_obs at the two extrema (interpolated from the data) to
    show closure against real (noisy) observations — the point of the
    exercise is that the residual shrinks to measurement noise, not zero."""
    # Evaluate τ at extrema (from the canonical formulas 175–177)
    cw = np.cos(omega_i)
    A1 = 1 - 2 * beta ** 2 * (1 + e * cw) / (1 - e ** 2)
    B1 = 1 -     beta ** 2 * (1 + e ** 2 + 2 * e * cw) / (1 - e ** 2)
    A2 = 1 - 2 * beta ** 2 * (1 - e * cw) / (1 - e ** 2)
    B2 = 1 -     beta ** 2 * (1 + e ** 2 - 2 * e * cw) / (1 - e ** 2)
    if A1 <= 0 or B1 <= 0 or A2 <= 0 or B2 <= 0:
        return None
    tau_m = float(np.sqrt(A1) * np.sqrt(B1))  # τ(−ω_i)
    tau_p = float(np.sqrt(A2) * np.sqrt(B2))  # τ(π − ω_i)

    # Observed Z extrema (use the max/min of the observed redshift stream
    # as proxies for the extrema — exactly what a telescope would supply)
    Z_obs = _state["Z_obs"]
    Z_max = float(np.max(Z_obs))
    Z_min = float(np.min(Z_obs))
    LHS = Z_max * tau_m * (1 - e * cw) + Z_min * tau_p * (1 + e * cw)
    return {
        "tau_minus_omega_i": tau_m,
        "tau_pi_minus_omega_i": tau_p,
        "LHS": float(LHS),
        "residual": float(abs(LHS - 2.0)),
    }


def mcmc_finalize():
    """Finalize MCMC: return medians, 1σ bands, and the Decryption Invariant."""
    sampler = _state["sampler"]
    discard = max(1, _state["steps_done"] // 3)
    chain = sampler.get_chain(discard=discard, thin=5, flat=True)
    med = np.median(chain, axis=0)
    lo  = np.percentile(chain, 16, axis=0)
    hi  = np.percentile(chain, 84, axis=0)

    beta, i_inc, vz0_c, e, omega, P, t_peri = [float(v) for v in med]
    beta_lo, i_lo, vz0_lo, e_lo, om_lo, P_lo, tp_lo = [float(v) for v in lo]
    beta_hi, i_hi, vz0_hi, e_hi, om_hi, P_hi, tp_hi = [float(v) for v in hi]

    inv = _decryption_invariant(beta, e, omega)

    return json.dumps({
        "median": {
            "beta":      beta,
            "i_deg":     float(np.degrees(i_inc)),
            "vz0_kms":   vz0_c * C_KMS,
            "e":         e,
            "omega_deg": float(np.degrees(omega) % 360),
            "P_years":   P / 365.25,
            "P_days":    P,
            "t_peri":    t_peri,
        },
        "band_16_84": {
            "beta":      [beta_lo, beta_hi],
            "i_deg":     [float(np.degrees(i_lo)),  float(np.degrees(i_hi))],
            "vz0_kms":   [vz0_lo * C_KMS,           vz0_hi * C_KMS],
            "e":         [e_lo,     e_hi],
            "omega_deg": [float(np.degrees(om_lo) % 360), float(np.degrees(om_hi) % 360)],
            "P_years":   [P_lo / 365.25, P_hi / 365.25],
        },
        "decryption_invariant": inv,
        "n_samples": int(len(chain)),
        "steps_done": int(_state["steps_done"]),
    })
