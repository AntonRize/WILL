#!/usr/bin/env python3
"""
curate_log_titles.py
====================

Applies hand-written titles and descriptions to the WILL-AI conversation logs
that are worth ranking in search.

WHY THIS EXISTS
---------------
`fix_log_seo.py` derives a title mechanically from the first real user message.
That is correct for the bulk of the logs, but raw chat openings make poor page
titles for the handful of conversations that actually carry substantial
physics. "Disprove any part of this will bullshit" is not a title that should
represent 26,000 words of research on a public site.

So the long, substantive conversations get titles written by hand here. Each
entry sets `title_locked: true`, which tells `fix_log_seo.py` to leave that
page alone on every future run.

A few entries set `noindex: true` instead of a title. Those are conversations
that look valuable by word count but are not: one is largely a dumped Google
API rate-limit error, another has an unrelated spreadsheet pasted into it.

USAGE
-----
    python curate_log_titles.py --dry-run
    python curate_log_titles.py

Run this BEFORE `fix_log_seo.py` if you run both, or in either order — the
lock flag makes them safe to combine.

TO ADD YOUR OWN
---------------
Add an entry to CURATED below:

    "filename.md": {
        "title": "The title you want in Google",
        "description": "The snippet you want under it, ~155 chars.",
    },

or, to pull a page out of search entirely:

    "filename.md": {"noindex": True, "reason": "why"},
"""

import argparse
import os
import re
import sys

LOGS_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)),
                        "assistant", "logs")

# ---------------------------------------------------------------------------
# Hand-written metadata for the conversations that carry real weight.
# Titles are kept near 60 characters, which is roughly what Google displays.
# ---------------------------------------------------------------------------

CURATED = {

    # --- Pulled out of search -------------------------------------------
    "2026-04-02T10-00-14-342Z_disprove_any_part_of_this_will.md": {
        "noindex": True,
        "reason": "26k words, but an unrelated Pokemon trading spreadsheet was "
                  "pasted mid-conversation and ~18% of the page is dumped API "
                  "error JSON.",
    },
    "2026-04-02T16-05-05-775Z_predictions_about_confinement.md": {
        "noindex": True,
        "reason": "11.5k words that are almost entirely a repeated Gemini 429 "
                  "rate-limit error dump. No physics content.",
    },

    # --- Curated titles --------------------------------------------------
    "2026-07-11T18-48-14-748Z_so_how_to_explain_that_to_main.md": {
        "title": "Why causality forces a propagation limit c",
        "description": "Deriving the speed of light as a causal propagation limit "
                       "from relational closure, with the orbital precession "
                       "chain worked through step by step.",
    },
    "2026-04-02T02-00-58-924Z_Is_there_a_mathematically_deri.md": {
        "title": "Bell, Kochen-Specker and CSL under WILL Relational Geometry",
        "description": "How the framework answers the quantum no-go theorems: "
                       "hidden variables, contextuality, superdeterminism, and "
                       "x-ray heating in continuous spontaneous localisation.",
    },
    "2026-07-14T20-00-10-243Z_i_asked_how_to_use_experiment.md": {
        "title": "Measuring z_k for the Earth-Moon system: a protocol",
        "description": "An operational experimental protocol for measuring the "
                       "relational phase shift z_k in the Earth-Moon system, "
                       "with the full parameterization chain.",
    },
    "2026-07-09T21-06-48-951Z_i_like_the_model_that_the_spac.md": {
        "title": "Does space flow inward? Relativistic mass and gravity in RG",
        "description": "Why WILL Relational Geometry rejects inflowing space and "
                       "relativistic mass, and what replaces them: energy "
                       "projection on the S2 relational carrier.",
    },
    "2026-04-15T22-52-43-411Z_You_are_trained_on_WILL_Relati.md": {
        "title": "What WILL RG cannot currently verify — stated limits",
        "description": "A deliberately adversarial audit: concrete claims the "
                       "framework cannot yet verify, how time ordering works "
                       "without a time parameter, and where the gaps are.",
    },
    "2026-05-10T01-07-05-740Z_Please_preform_analytic_decons.md": {
        "title": "Lense-Thirring effect: R.O.M. compared with General Relativity",
        "description": "Analytic comparison of the relational and General "
                       "Relativity treatments of frame dragging, and why direct "
                       "term-by-term translation is a category error.",
    },
    "2026-02-24How you estimate Shapiro.md": {
        "title": "How WILL Relational Geometry estimates the Shapiro delay",
        "description": "Deriving the Shapiro time delay from relational phase "
                       "projections rather than from a metric on a background "
                       "spacetime.",
    },
    "2026-04-21T15-58-37-511Z_What_is_the_single_most_precis.md": {
        "title": "The sharpest WILL RG prediction that differs from LambdaCDM",
        "description": "Quantitative, falsifiable departures from LambdaCDM: the "
                       "dark energy density, the cosmic acceleration rate, and "
                       "H0 from CMB versus local measurement.",
    },
    "2026-04-15T21-34-28-600Z_I_m_a_physicist_interested_in.md": {
        "title": "A physicist audits WILL RG: dimensionless inputs and SPARC",
        "description": "Which dimensionless inputs the framework actually "
                       "requires, whether the algebra is merely isomorphic to "
                       "standard results, and the galactic rotation curve test.",
    },
    "2026-04-07T05-13-57-454Z_Hello_WILL_What_documents_do.md": {
        "title": "Mercury's perihelion precession: GR and WILL RG compared",
        "description": "Side-by-side treatment of Mercury's perihelion "
                       "precession, the Minkowski mapping, and where the "
                       "Schwarzschild metric enters each approach.",
    },
    "2026-03-01Why does the equations.md": {
        "title": "Why distance and angle equations carry energy in WILL RG",
        "description": "Why the relational forms for distance and angle contain "
                       "energy terms that the standard formulations for the same "
                       "energy density leave out.",
    },
    "2026-03-03T06-16-52-608Z_Can_you_find_the_weakest_point.md": {
        "title": "The weakest point of WILL Relational Geometry",
        "description": "An adversarial critique of the framework's most "
                       "vulnerable assumptions, argued without deference.",
    },
    "2026-03-26T03-17-56-376Z_Does_this_model_give_a_Lagrang.md": {
        "title": "Does WILL RG give a Lagrangian formulation?",
        "description": "Whether the relational framework admits a Lagrangian, "
                       "and what a variational principle would mean without a "
                       "background spacetime.",
    },
}


# ---------------------------------------------------------------------------
# Front-matter helpers (kept identical in spirit to fix_log_seo.py)
# ---------------------------------------------------------------------------

def split_front_matter(text):
    """
    Split a Jekyll file into (front matter, body).

    The delimiter must be a line that is exactly '---'. Splitting on the bare
    substring would break on questions containing em-dash runs.
    """
    lines = text.splitlines(keepends=True)
    if not lines or lines[0].strip() != "---":
        return "", text
    for i in range(1, len(lines)):
        if lines[i].strip() == "---":
            return "".join(lines[:i + 1]), "".join(lines[i + 1:])
    return "", text


def upsert(front_matter, key, raw_line):
    """
    Replace or insert a front-matter line.

    The replacement goes through a lambda because titles can contain
    backslashes, which re.sub would otherwise treat as escape sequences.
    """
    pattern = re.compile(rf"^{re.escape(key)}:.*$", re.MULTILINE)
    if pattern.search(front_matter):
        return pattern.sub(lambda _m: raw_line, front_matter, count=1)
    idx = front_matter.rstrip().rfind("---")
    return front_matter[:idx] + raw_line + "\n\n" + front_matter[idx:]


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--dry-run", action="store_true",
                        help="show the planned changes without writing")
    args = parser.parse_args()

    if not os.path.isdir(LOGS_DIR):
        print(f"ERROR: log directory not found: {LOGS_DIR}")
        sys.exit(1)

    applied, deindexed, missing = 0, 0, []

    for filename, meta in CURATED.items():
        path = os.path.join(LOGS_DIR, filename)
        if not os.path.exists(path):
            missing.append(filename)
            continue

        with open(path, encoding="utf-8") as fh:
            original = fh.read()

        front, body = split_front_matter(original)
        if not front:
            missing.append(filename + "  (no front matter)")
            continue

        # title_locked stops fix_log_seo.py from overwriting this on re-runs.
        front = upsert(front, "title_locked", "title_locked: true")

        if meta.get("noindex"):
            front = upsert(front, "noindex", "noindex: true")
            front = upsert(front, "sitemap", "sitemap: false")
            deindexed += 1
            print(f"  [noindex] {filename}")
            print(f"            reason: {meta['reason']}")
        else:
            front = upsert(front, "title", f'title: "{meta["title"]}"')
            front = upsert(front, "description",
                           f'description: "{meta["description"]}"')
            # Clear any stale flags in case this page was previously demoted.
            front = re.sub(r"^noindex:.*\n?", "", front, flags=re.MULTILINE)
            front = re.sub(r"^sitemap:.*\n?", "", front, flags=re.MULTILINE)
            applied += 1
            print(f"  [title]   {meta['title']}")

        if not args.dry_run:
            with open(path, "w", encoding="utf-8") as fh:
                fh.write(front + body)

    mode = "DRY RUN — nothing written" if args.dry_run else "APPLIED"
    print()
    print("=" * 72)
    print(f"  curate_log_titles.py — {mode}")
    print("=" * 72)
    print(f"  hand-written titles applied : {applied}")
    print(f"  pages pulled from search    : {deindexed}")
    if missing:
        print(f"  files not found             : {len(missing)}")
        for m in missing:
            print(f"      {m}")
    print()


if __name__ == "__main__":
    main()
