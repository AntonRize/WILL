#!/usr/bin/env python3
"""
Step 3: Comparative Integration - Concept Mapping

Quantitatively maps the core concepts of the "Relational Geometry" theory
to established mathematical frameworks using keyword-based semantic analysis.

Inputs:
  - results/logical_dependencies.json (nodes, defined_terms)
  - results/extracted_structure.json  (environments with text bodies)

Outputs:
  - results/domain_affinity.csv        (per-concept domain scores)
  - figures/domain_affinity_heatmap.png (visual heatmap)
  - results/concept_mapping.txt        (human-readable classification)
"""

import json
import csv
import re
import os
import sys
from collections import defaultdict
from pathlib import Path

import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
import matplotlib.colors as mcolors
import numpy as np

# ── paths ────────────────────────────────────────────────────────────────────
SESSION = Path("/app/sandbox/session_20260215_174654_9cad3df878d3")
DEPS_FILE = SESSION / "results" / "logical_dependencies.json"
STRUCT_FILE = SESSION / "results" / "extracted_structure.json"
CSV_OUT = SESSION / "results" / "domain_affinity.csv"
HEATMAP_OUT = SESSION / "figures" / "domain_affinity_heatmap.png"
MAPPING_OUT = SESSION / "results" / "concept_mapping.txt"

# Ensure output directories exist
(SESSION / "figures").mkdir(parents=True, exist_ok=True)
(SESSION / "results").mkdir(parents=True, exist_ok=True)

# ── domain keyword dictionaries ──────────────────────────────────────────────
# Each list contains single words and multi-word phrases (lowercased).
# Matching is case-insensitive on the LaTeX-stripped text.

DOMAIN_KEYWORDS = {
    "Topology": [
        "open set", "closed set", "neighborhood", "boundary", "manifold",
        "homeomorphism", "topological", "topology", "compact", "connected",
        "covering", "homotopy", "fundamental group", "simply connected",
        "continuous", "diffeomorphism", "fibre bundle", "fiber bundle",
        "winding number", "hopf fibration", "hopf", "fibration",
        "closure", "compactification", "embedding",
    ],
    "Graph Theory": [
        "node", "edge", "vertex", "cycle", "path", "adjacency", "degree",
        "graph", "tree", "network", "connected component", "directed",
        "acyclic", "spanning", "bipartite",
    ],
    "Differential Geometry": [
        "metric", "tensor", "curvature", "geodesic", "tangent",
        "coordinate", "riemannian", "manifold", "connection", "covariant",
        "christoffel", "ricci", "weyl", "torsion", "parallel transport",
        "differential form", "lie group", "lie algebra", "fiber bundle",
        "gauge", "holonomy", "schwarzschild", "minkowski",
    ],
    "Physics / Relativity": [
        "energy", "momentum", "mass", "velocity", "acceleration",
        "force", "gravity", "gravitational", "relativistic", "lorentz",
        "einstein", "spacetime", "rest energy", "rest mass",
        "time dilation", "length contraction", "equivalence principle",
        "inertial", "speed of light", "photon", "light",
        "conservation", "conserved", "invariant", "symmetry",
        "kinematic", "kinetic", "potential", "orbital", "orbit",
        "schwarzschild", "field equation", "angular momentum",
        "redshift", "proper time", "causality", "causal",
    ],
    "Quantum Mechanics": [
        "state", "operator", "hilbert", "observable", "wavefunction",
        "unitary", "quantum", "quantization", "quantized", "eigenvalue",
        "eigenstate", "superposition", "entanglement", "spin",
        "planck", "hbar", "de broglie", "schrodinger", "dirac",
        "pauli", "exclusion", "uncertainty", "phase shift",
        "interference", "coherent", "decoherence", "wave",
        "standing wave", "bohr", "fine structure", "chirality",
    ],
    "Set Theory / Logic": [
        "set", "subset", "union", "intersection", "mapping", "function",
        "implication", "axiom", "proof", "contradiction", "tautology",
        "bijection", "injection", "surjection", "equivalence class",
        "relation", "relational", "category", "groupoid", "functor",
        "morphism", "isomorphism", "algebraic",
    ],
    "Geometry (Classical)": [
        "circle", "sphere", "projection", "pythagorean", "hypotenuse",
        "angle", "rotation", "isotropic", "isotropy", "homogeneous",
        "euclidean", "geometric", "geometry", "trigonometric",
        "perpendicular", "orthogonal", "radius", "circumference",
        "area", "surface", "meridional", "great circle",
    ],
}

# Domains in display order
DOMAINS = list(DOMAIN_KEYWORDS.keys())

# ── helper: strip LaTeX commands ─────────────────────────────────────────────

def strip_latex(text: str) -> str:
    """Remove LaTeX commands and math delimiters, keeping word content."""
    # Remove \hypertarget, \label, \ref, \href and similar commands
    text = re.sub(r"\\(?:hypertarget|label|ref|href|textbf|textit|emph|text|boxed|underbrace|overbrace)\{[^}]*\}", " ", text)
    # Remove \commands
    text = re.sub(r"\\[a-zA-Z]+", " ", text)
    # Remove math delimiters
    text = re.sub(r"\$+", " ", text)
    text = re.sub(r"\\[\[\]\(\)]", " ", text)
    # Remove braces
    text = re.sub(r"[{}]", " ", text)
    # Collapse whitespace
    text = re.sub(r"\s+", " ", text).strip()
    return text


def count_keyword_hits(text: str, keywords: list[str]) -> int:
    """
    Count the number of keyword hits in text.
    Multi-word phrases are matched as substrings; single words as whole words.
    """
    text_lower = text.lower()
    hits = 0
    for kw in keywords:
        if " " in kw:
            # Multi-word phrase: substring match
            hits += text_lower.count(kw)
        else:
            # Single word: word-boundary match
            hits += len(re.findall(r"\b" + re.escape(kw) + r"\b", text_lower))
    return hits


# ── main ─────────────────────────────────────────────────────────────────────

def main():
    print("=" * 60)
    print("Step 3: Comparative Integration – Concept Mapping")
    print("=" * 60)

    # ── 1. Load data ─────────────────────────────────────────────────────
    print("\n[1/5] Loading input data...")
    with open(DEPS_FILE) as f:
        deps = json.load(f)
    with open(STRUCT_FILE) as f:
        struct = json.load(f)

    nodes = deps["nodes"]  # keyed by "Type: Title [file]"
    print(f"  Loaded {len(nodes)} nodes from logical_dependencies.json")

    # ── 2. Build concept corpus ──────────────────────────────────────────
    # We analyse Definition, Axiom, Principle, Theorem, Lemma, Corollary,
    # and Proposition environments (the formal elements).
    TARGET_TYPES = {"definition", "axiom", "principle", "theorem",
                    "lemma", "corollary", "proposition"}

    print("\n[2/5] Building concept corpus from extracted_structure.json...")

    # Build a lookup: (env_type, title, file) -> body text
    body_lookup: dict[tuple[str, str, str], str] = {}
    for file_key, file_data in struct.items():
        envs = file_data.get("environments", {})
        for env_type, entries in envs.items():
            if env_type.lower() not in TARGET_TYPES:
                continue
            for entry in entries:
                title = entry.get("title", "").strip()
                body = entry.get("body", "")
                key = (env_type.lower(), title, file_key)
                body_lookup[key] = body

    print(f"  Found {len(body_lookup)} environment entries with text bodies")

    # ── 3. Match nodes to bodies and score ───────────────────────────────
    print("\n[3/5] Scoring concepts against domain dictionaries...")

    # Build results list
    results = []  # list of dicts
    matched, unmatched = 0, 0

    for node_key, node_info in sorted(nodes.items(), key=lambda x: x[1].get("order", 999)):
        env_type = node_info.get("env_type", "").lower()
        title = node_info.get("title", "").strip()
        file_key = node_info.get("file", "")

        if env_type not in TARGET_TYPES:
            continue

        # Try to find matching body text
        body = body_lookup.get((env_type, title, file_key), "")

        if not body:
            # Try partial title match as fallback
            for (bt, bt_title, bt_file), bt_body in body_lookup.items():
                if bt == env_type and bt_file == file_key and bt_title == title:
                    body = bt_body
                    break

        if body:
            matched += 1
        else:
            unmatched += 1

        # Combine title + body for analysis
        combined_text = strip_latex(f"{title} {body}")

        # Score against each domain
        scores = {}
        for domain, keywords in DOMAIN_KEYWORDS.items():
            scores[domain] = count_keyword_hits(combined_text, keywords)

        # Primary domain = highest score
        max_score = max(scores.values())
        if max_score > 0:
            primary = max(scores, key=scores.get)
        else:
            primary = "Unclassified"

        results.append({
            "concept": f"{env_type.capitalize()}: {title}",
            "env_type": env_type,
            "file": file_key,
            "primary_domain": primary,
            "total_hits": sum(scores.values()),
            **scores,
        })

        if len(results) % 10 == 0:
            print(f"  Processed {len(results)} concepts...")

    print(f"  Total concepts scored: {len(results)}")
    print(f"  Body text matched: {matched}, unmatched: {unmatched}")

    # ── 4. Write CSV ─────────────────────────────────────────────────────
    print("\n[4/5] Writing outputs...")

    fieldnames = ["concept", "env_type", "file", "primary_domain", "total_hits"] + DOMAINS
    with open(CSV_OUT, "w", newline="") as f:
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        writer.writeheader()
        for row in results:
            writer.writerow(row)
    print(f"  Wrote {CSV_OUT}")

    # ── 5. Generate heatmap ──────────────────────────────────────────────
    print("  Generating heatmap...")

    # Prepare matrix
    concepts = [r["concept"] for r in results]
    matrix = np.array([[r[d] for d in DOMAINS] for r in results], dtype=float)

    # Normalize each row to [0, 1] for better visual comparison
    row_sums = matrix.sum(axis=1, keepdims=True)
    row_sums[row_sums == 0] = 1  # avoid division by zero
    matrix_norm = matrix / row_sums

    # Truncate very long concept names for readability
    short_concepts = []
    for c in concepts:
        if len(c) > 55:
            short_concepts.append(c[:52] + "...")
        else:
            short_concepts.append(c)

    fig_height = max(8, len(concepts) * 0.32)
    fig, ax = plt.subplots(figsize=(14, fig_height))

    im = ax.imshow(matrix_norm, aspect="auto", cmap="YlOrRd", interpolation="nearest")

    ax.set_xticks(range(len(DOMAINS)))
    ax.set_xticklabels(DOMAINS, rotation=45, ha="right", fontsize=8)
    ax.set_yticks(range(len(short_concepts)))
    ax.set_yticklabels(short_concepts, fontsize=6.5)

    # Annotate cells with raw counts
    for i in range(len(concepts)):
        for j in range(len(DOMAINS)):
            val = int(matrix[i, j])
            if val > 0:
                ax.text(j, i, str(val), ha="center", va="center",
                        fontsize=5.5, color="black" if matrix_norm[i, j] < 0.5 else "white")

    cbar = fig.colorbar(im, ax=ax, fraction=0.02, pad=0.02)
    cbar.set_label("Normalized Domain Affinity", fontsize=9)

    ax.set_title("WILL Relational Geometry: Concept–Domain Affinity Heatmap", fontsize=12, pad=12)
    ax.set_xlabel("Mathematical / Scientific Domain", fontsize=10)
    ax.set_ylabel("Theory Concept", fontsize=10)

    plt.tight_layout()
    fig.savefig(HEATMAP_OUT, dpi=300, bbox_inches="tight")
    plt.close(fig)
    print(f"  Wrote {HEATMAP_OUT}")

    # ── 6. Overall domain affinity ───────────────────────────────────────
    total_per_domain = {d: sum(r[d] for r in results) for d in DOMAINS}
    grand_total = sum(total_per_domain.values())
    if grand_total == 0:
        grand_total = 1

    affinity_pct = {d: 100 * total_per_domain[d] / grand_total for d in DOMAINS}

    # ── 7. Write summary text ────────────────────────────────────────────
    lines = []
    lines.append("=" * 70)
    lines.append("STEP 3: COMPARATIVE INTEGRATION — CONCEPT MAPPING SUMMARY")
    lines.append("=" * 70)
    lines.append("")
    lines.append("Methodology: Keyword-based semantic analysis of each formal")
    lines.append("element (Definition, Axiom, Principle, Theorem, Lemma,")
    lines.append("Corollary, Proposition) against domain keyword dictionaries.")
    lines.append("")

    # Overall affinity
    lines.append("-" * 70)
    lines.append("OVERALL DOMAIN AFFINITY OF THE THEORY")
    lines.append("-" * 70)
    for d in sorted(DOMAINS, key=lambda x: -affinity_pct[x]):
        bar = "#" * int(affinity_pct[d] / 2)
        lines.append(f"  {d:30s}  {affinity_pct[d]:5.1f}%  {bar}")
    lines.append(f"\n  Total keyword hits: {grand_total}")
    lines.append("")

    # Per-concept classification
    lines.append("-" * 70)
    lines.append("PER-CONCEPT CLASSIFICATION")
    lines.append("-" * 70)

    # Group by primary domain
    by_domain = defaultdict(list)
    for r in results:
        by_domain[r["primary_domain"]].append(r)

    for domain in sorted(by_domain.keys()):
        items = by_domain[domain]
        lines.append(f"\n  [{domain}] ({len(items)} concepts)")
        for r in items:
            top_scores = ", ".join(
                f"{d}: {r[d]}" for d in DOMAINS if r[d] > 0
            )
            lines.append(f"    - {r['concept']}")
            lines.append(f"      Scores: {top_scores}")
    lines.append("")

    # Per-environment-type breakdown
    lines.append("-" * 70)
    lines.append("BREAKDOWN BY ENVIRONMENT TYPE")
    lines.append("-" * 70)
    by_env = defaultdict(list)
    for r in results:
        by_env[r["env_type"]].append(r)
    for env_type in sorted(by_env.keys()):
        items = by_env[env_type]
        env_totals = {d: sum(r[d] for r in items) for d in DOMAINS}
        env_grand = sum(env_totals.values()) or 1
        lines.append(f"\n  {env_type.upper()} ({len(items)} items):")
        for d in sorted(DOMAINS, key=lambda x: -env_totals[x]):
            if env_totals[d] > 0:
                lines.append(f"    {d:30s}  {100*env_totals[d]/env_grand:5.1f}%  ({env_totals[d]} hits)")
    lines.append("")

    summary_text = "\n".join(lines)
    with open(MAPPING_OUT, "w") as f:
        f.write(summary_text)
    print(f"  Wrote {MAPPING_OUT}")

    # ── 8. Print summary to stdout ───────────────────────────────────────
    print("\n" + "=" * 60)
    print("DOMAIN AFFINITY SUMMARY")
    print("=" * 60)
    for d in sorted(DOMAINS, key=lambda x: -affinity_pct[x]):
        print(f"  {d:30s}  {affinity_pct[d]:5.1f}%")
    print(f"\n  Total concepts analysed: {len(results)}")
    print(f"  Total keyword hits:     {grand_total}")
    print("=" * 60)
    print("\nStep 3 complete.")


if __name__ == "__main__":
    main()
