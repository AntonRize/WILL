#!/usr/bin/env python3
"""
Step 2: Internal Consistency Audit
===================================
Analyzes the logical structure of the extracted WILL theory to map
dependencies between elements, identify the axiomatic basis, and detect
potential logical flaws (circular dependencies, undefined terms, ordering issues).

Inputs:
    results/extracted_structure.json  (from Step 1)

Outputs:
    results/logical_dependencies.json  (graph structure)
    results/consistency_report.txt     (human-readable summary)
"""

import json
import re
import sys
from collections import defaultdict
from pathlib import Path

# ---------------------------------------------------------------------------
# Configuration
# ---------------------------------------------------------------------------
SESSION_DIR = Path("/app/sandbox/session_20260215_174654_9cad3df878d3")
INPUT_FILE = SESSION_DIR / "results" / "extracted_structure.json"
OUTPUT_GRAPH = SESSION_DIR / "results" / "logical_dependencies.json"
OUTPUT_REPORT = SESSION_DIR / "results" / "consistency_report.txt"

# Environment types that carry formal content (ordered by typical logical priority)
FORMAL_ENV_TYPES = [
    "axiom", "principle", "definition", "postulate",
    "lemma", "proposition", "theorem", "corollary", "remark", "proof",
]


# ---------------------------------------------------------------------------
# Helpers
# ---------------------------------------------------------------------------
def load_structure(path: Path) -> dict:
    """Load the extracted structure JSON."""
    with open(path, "r", encoding="utf-8") as f:
        return json.load(f)


def extract_labels(body: str) -> list[str]:
    r"""Extract \label{...} identifiers from LaTeX body text."""
    return re.findall(r"\\label\{([^}]+)\}", body)


def extract_refs(body: str) -> list[str]:
    r"""Extract \ref{...}, \eqref{...}, ~\ref{...} citations from body."""
    # Covers \ref, \eqref, \autoref, \hyperref (bracket form not captured)
    return re.findall(r"\\(?:eq)?ref\{([^}]+)\}", body)


def extract_defined_terms(body: str) -> list[str]:
    r"""Heuristically extract terms defined in \textbf{...} or \emph{...}
    that appear near the start of a definition body."""
    terms = []
    # Look for \textbf{...} patterns
    for m in re.finditer(r"\\textbf\{([^}]+)\}", body):
        term = m.group(1).strip().lower()
        if len(term) > 1 and not term.startswith("\\"):
            terms.append(term)
    # Look for \emph{...} patterns (only first few occurrences to avoid noise)
    for i, m in enumerate(re.finditer(r"\\emph\{([^}]+)\}", body)):
        if i >= 5:
            break
        term = m.group(1).strip().lower()
        if len(term) > 1 and not term.startswith("\\"):
            terms.append(term)
    return terms


def clean_for_search(text: str) -> str:
    """Strip LaTeX commands from text for term searching."""
    text = re.sub(r"\\[a-zA-Z]+\{([^}]*)\}", r"\1", text)
    text = re.sub(r"\\[a-zA-Z]+", "", text)
    text = re.sub(r"[{}$\\]", "", text)
    return text.lower()


# ---------------------------------------------------------------------------
# Main analysis
# ---------------------------------------------------------------------------
def main():
    print("=" * 60)
    print("Step 2: Internal Consistency Audit")
    print("=" * 60)

    # ------------------------------------------------------------------
    # 1. Load data
    # ------------------------------------------------------------------
    print("\n[1/6] Loading extracted structure ...")
    data = load_structure(INPUT_FILE)
    print(f"  Loaded {len(data)} source file groups.")

    # ------------------------------------------------------------------
    # 2. Flatten all formal elements with sequential ordering
    # ------------------------------------------------------------------
    print("[2/6] Flattening elements and extracting labels/refs ...")
    elements = []  # list of dicts: {id, file, env_type, title, body, labels, refs, order}
    label_to_id = {}   # label -> element id
    order_counter = 0

    for file_key in sorted(data.keys()):  # deterministic order across files
        file_data = data[file_key]
        envs = file_data.get("environments", {})
        for env_type in FORMAL_ENV_TYPES:
            items = envs.get(env_type, [])
            for idx, item in enumerate(items):
                title = item.get("title", "").strip()
                body = item.get("body", "")
                labels = extract_labels(body)
                refs = extract_refs(body)

                # Build a human-readable id
                if title:
                    elem_id = f"{env_type.capitalize()}: {title} [{file_key}]"
                else:
                    elem_id = f"{env_type.capitalize()} #{idx+1} [{file_key}]"

                elem = {
                    "id": elem_id,
                    "file": file_key,
                    "env_type": env_type,
                    "title": title,
                    "body": body,
                    "labels": labels,
                    "refs": refs,
                    "order": order_counter,
                }
                elements.append(elem)

                # Register labels
                for lbl in labels:
                    lbl_clean = lbl.strip()
                    if lbl_clean in label_to_id:
                        print(f"  WARNING: Duplicate label '{lbl_clean}' "
                              f"(first: {label_to_id[lbl_clean]}, dup: {elem_id})")
                    label_to_id[lbl_clean] = elem_id

                order_counter += 1

    print(f"  Total formal elements: {len(elements)}")
    print(f"  Total labels registered: {len(label_to_id)}")

    # ------------------------------------------------------------------
    # 3. Build dependency graph
    # ------------------------------------------------------------------
    print("[3/6] Building dependency graph ...")
    # Nodes = all elements that carry at least one label
    # Edges = element A -> element B  means  A references a label owned by B
    nodes = {}  # id -> {env_type, title, file, labels, order}
    edges = []  # list of {from, to, via_label}
    unresolved_refs = []  # refs that point to labels not in our registry

    for elem in elements:
        if elem["labels"]:
            nodes[elem["id"]] = {
                "env_type": elem["env_type"],
                "title": elem["title"],
                "file": elem["file"],
                "labels": elem["labels"],
                "order": elem["order"],
            }

    # Also add elements that have no labels but do reference others
    for elem in elements:
        if elem["refs"] and elem["id"] not in nodes:
            nodes[elem["id"]] = {
                "env_type": elem["env_type"],
                "title": elem["title"],
                "file": elem["file"],
                "labels": elem["labels"],
                "order": elem["order"],
            }

    for elem in elements:
        for ref_label in elem["refs"]:
            ref_clean = ref_label.strip()
            target_id = label_to_id.get(ref_clean)
            if target_id:
                if target_id != elem["id"]:  # ignore self-refs
                    edges.append({
                        "from": elem["id"],
                        "to": target_id,
                        "via_label": ref_clean,
                    })
            else:
                unresolved_refs.append({
                    "ref_label": ref_clean,
                    "source_element": elem["id"],
                })

    print(f"  Graph nodes: {len(nodes)}")
    print(f"  Graph edges: {len(edges)}")
    print(f"  Unresolved references: {len(unresolved_refs)}")

    # ------------------------------------------------------------------
    # 4. Cycle detection (DFS-based)
    # ------------------------------------------------------------------
    print("[4/6] Detecting cycles ...")
    # Build adjacency list
    adj = defaultdict(set)
    for e in edges:
        adj[e["from"]].add(e["to"])

    # Tarjan-style cycle detection
    WHITE, GRAY, BLACK = 0, 1, 2
    color = {nid: WHITE for nid in nodes}
    cycles = []
    parent_path = {}

    def dfs_cycle(node, path):
        color[node] = GRAY
        path.append(node)
        for neighbor in adj[node]:
            if neighbor not in color:
                continue  # neighbor not in our node set
            if color[neighbor] == GRAY:
                # Found a cycle — extract it
                cycle_start = path.index(neighbor)
                cycle = path[cycle_start:] + [neighbor]
                cycles.append(cycle)
            elif color[neighbor] == WHITE:
                dfs_cycle(neighbor, path)
        path.pop()
        color[node] = BLACK

    for nid in nodes:
        if color[nid] == WHITE:
            dfs_cycle(nid, [])

    if cycles:
        print(f"  CYCLES DETECTED: {len(cycles)}")
        for c in cycles:
            short = " -> ".join(c)
            print(f"    {short}")
    else:
        print("  No circular dependencies detected.")

    # ------------------------------------------------------------------
    # 5. Root & Leaf analysis
    # ------------------------------------------------------------------
    print("[5/6] Identifying roots and leaves ...")
    in_degree = defaultdict(int)
    out_degree = defaultdict(int)
    for e in edges:
        out_degree[e["from"]] += 1
        in_degree[e["to"]] += 1

    roots = []  # nodes with no incoming edges (foundational / axiomatic)
    leaves = []  # nodes with no outgoing edges (terminal results)
    orphans = []  # nodes with no edges at all

    for nid in nodes:
        has_in = in_degree.get(nid, 0) > 0
        has_out = out_degree.get(nid, 0) > 0
        if not has_in and not has_out:
            orphans.append(nid)
        elif not has_in:
            roots.append(nid)
        elif not has_out:
            leaves.append(nid)

    # Sort for deterministic output
    roots.sort(key=lambda x: nodes[x]["order"])
    leaves.sort(key=lambda x: nodes[x]["order"])
    orphans.sort(key=lambda x: nodes[x]["order"])

    print(f"  Roots (axiomatic basis): {len(roots)}")
    print(f"  Leaves (terminal results): {len(leaves)}")
    print(f"  Orphans (isolated, no refs in/out): {len(orphans)}")

    # ------------------------------------------------------------------
    # 6. Definition-Usage ordering check
    # ------------------------------------------------------------------
    print("[6/6] Checking definition-usage ordering ...")
    # Extract defined terms from Definition environments
    defined_terms = {}  # term -> (element_id, order)
    for elem in elements:
        if elem["env_type"] == "definition":
            terms = extract_defined_terms(elem["body"])
            for t in terms:
                if t not in defined_terms:
                    defined_terms[t] = (elem["id"], elem["order"])

    print(f"  Extracted {len(defined_terms)} defined terms from Definition environments.")

    # Check if terms are used before being defined
    ordering_issues = []
    for elem in elements:
        if elem["env_type"] == "definition":
            continue  # skip definitions themselves
        body_clean = clean_for_search(elem["body"])
        for term, (def_id, def_order) in defined_terms.items():
            if len(term) < 3:
                continue  # skip very short terms to avoid false positives
            # Use word boundary matching
            pattern = r"\b" + re.escape(term) + r"\b"
            if re.search(pattern, body_clean):
                if elem["order"] < def_order:
                    ordering_issues.append({
                        "term": term,
                        "used_in": elem["id"],
                        "used_order": elem["order"],
                        "defined_in": def_id,
                        "defined_order": def_order,
                    })

    if ordering_issues:
        print(f"  Definition ordering issues found: {len(ordering_issues)}")
    else:
        print("  No definition ordering issues found.")

    # ------------------------------------------------------------------
    # Save outputs
    # ------------------------------------------------------------------
    print("\nSaving outputs ...")

    # 1. Dependency graph JSON
    graph_data = {
        "metadata": {
            "total_elements": len(elements),
            "total_labeled_nodes": sum(1 for n in nodes.values() if n["labels"]),
            "total_edges": len(edges),
            "total_cycles": len(cycles),
            "total_roots": len(roots),
            "total_leaves": len(leaves),
            "total_orphans": len(orphans),
            "total_unresolved_refs": len(unresolved_refs),
        },
        "nodes": {
            nid: {
                "env_type": info["env_type"],
                "title": info["title"],
                "file": info["file"],
                "labels": info["labels"],
                "order": info["order"],
                "in_degree": in_degree.get(nid, 0),
                "out_degree": out_degree.get(nid, 0),
            }
            for nid, info in nodes.items()
        },
        "edges": edges,
        "label_registry": label_to_id,
        "unresolved_refs": unresolved_refs,
        "cycles": [list(c) for c in cycles],
        "roots": roots,
        "leaves": leaves,
        "orphans": orphans,
        "defined_terms": {t: {"defined_in": did, "order": o} for t, (did, o) in defined_terms.items()},
        "ordering_issues": ordering_issues,
    }

    with open(OUTPUT_GRAPH, "w", encoding="utf-8") as f:
        json.dump(graph_data, f, indent=2, ensure_ascii=False)
    print(f"  Saved: {OUTPUT_GRAPH}")

    # 2. Human-readable consistency report
    report_lines = []
    report_lines.append("=" * 70)
    report_lines.append("INTERNAL CONSISTENCY AUDIT REPORT")
    report_lines.append("WILL Relational Geometry — Logical Structure Analysis")
    report_lines.append("=" * 70)
    report_lines.append("")

    report_lines.append("1. SUMMARY STATISTICS")
    report_lines.append("-" * 40)
    report_lines.append(f"  Total formal elements parsed:     {len(elements)}")
    report_lines.append(f"  Elements with labels:             {sum(1 for n in nodes.values() if n['labels'])}")
    report_lines.append(f"  Dependency graph nodes:           {len(nodes)}")
    report_lines.append(f"  Dependency graph edges:           {len(edges)}")
    report_lines.append(f"  Circular dependencies:            {len(cycles)}")
    report_lines.append(f"  Unresolved references:            {len(unresolved_refs)}")
    report_lines.append(f"  Defined terms extracted:          {len(defined_terms)}")
    report_lines.append(f"  Definition ordering issues:       {len(ordering_issues)}")
    report_lines.append("")

    report_lines.append("2. AXIOMATIC BASIS (Root Elements)")
    report_lines.append("-" * 40)
    report_lines.append("These elements have no incoming dependencies — they are the")
    report_lines.append("foundational axioms/principles on which other results depend.")
    report_lines.append("")
    if roots:
        for i, r in enumerate(roots, 1):
            info = nodes[r]
            report_lines.append(f"  [{i}] {r}")
            report_lines.append(f"      Type: {info['env_type']}  |  Labels: {', '.join(info['labels'])}")
    else:
        report_lines.append("  (No root elements identified — all labeled elements have dependencies)")
    report_lines.append("")

    report_lines.append("3. TERMINAL RESULTS (Leaf Elements)")
    report_lines.append("-" * 40)
    report_lines.append("These elements reference other results but are not themselves")
    report_lines.append("referenced — they represent the end points of the deductive chain.")
    report_lines.append("")
    if leaves:
        for i, l in enumerate(leaves, 1):
            info = nodes[l]
            report_lines.append(f"  [{i}] {l}")
            report_lines.append(f"      Type: {info['env_type']}  |  References out: {out_degree.get(l, 0)}")
    else:
        report_lines.append("  (No leaf elements identified)")
    report_lines.append("")

    report_lines.append("4. CIRCULAR DEPENDENCIES")
    report_lines.append("-" * 40)
    if cycles:
        report_lines.append(f"  WARNING: {len(cycles)} cycle(s) detected!")
        for i, c in enumerate(cycles, 1):
            report_lines.append(f"  Cycle {i}: {' -> '.join(c)}")
    else:
        report_lines.append("  PASS: No circular dependencies detected.")
        report_lines.append("  The logical deduction chain is acyclic (well-founded).")
    report_lines.append("")

    report_lines.append("5. ORPHAN ELEMENTS")
    report_lines.append("-" * 40)
    report_lines.append("Elements with labels but no reference connections (neither cited")
    report_lines.append("nor citing other labeled elements).")
    report_lines.append("")
    if orphans:
        for i, o in enumerate(orphans, 1):
            info = nodes[o]
            report_lines.append(f"  [{i}] {o}")
            report_lines.append(f"      Type: {info['env_type']}  |  Labels: {', '.join(info['labels'])}")
    else:
        report_lines.append("  (No orphan elements — all labeled elements participate in the graph)")
    report_lines.append("")

    report_lines.append("6. UNRESOLVED REFERENCES")
    report_lines.append("-" * 40)
    report_lines.append("References to labels not found among extracted formal environments.")
    report_lines.append("These may point to equations, sections, or items defined outside")
    report_lines.append("the formal environment structure.")
    report_lines.append("")
    if unresolved_refs:
        seen = set()
        for ur in unresolved_refs:
            key = ur["ref_label"]
            if key not in seen:
                seen.add(key)
                sources = [x["source_element"] for x in unresolved_refs if x["ref_label"] == key]
                report_lines.append(f"  \\ref{{{key}}}")
                for s in sources:
                    report_lines.append(f"      cited by: {s}")
        report_lines.append(f"\n  Total unique unresolved labels: {len(seen)}")
    else:
        report_lines.append("  PASS: All references resolve to known labels.")
    report_lines.append("")

    report_lines.append("7. DEFINITION-USAGE ORDERING")
    report_lines.append("-" * 40)
    report_lines.append("Checks whether terms introduced in Definition environments are")
    report_lines.append("used only AFTER they are formally defined (by linear order).")
    report_lines.append("")
    if ordering_issues:
        for i, issue in enumerate(ordering_issues, 1):
            report_lines.append(f"  [{i}] Term: \"{issue['term']}\"")
            report_lines.append(f"      Used in:    {issue['used_in']}  (order {issue['used_order']})")
            report_lines.append(f"      Defined in: {issue['defined_in']}  (order {issue['defined_order']})")
    else:
        report_lines.append("  PASS: All extracted defined terms appear to be used after")
        report_lines.append("  their formal definition (or not used at all).")
    report_lines.append("")

    report_lines.append("8. DEPENDENCY CHAIN HIGHLIGHTS")
    report_lines.append("-" * 40)
    # Show the most-referenced (highest in-degree) elements
    if nodes:
        by_indeg = sorted(nodes.items(), key=lambda x: in_degree.get(x[0], 0), reverse=True)
        report_lines.append("  Most-referenced elements (highest in-degree):")
        for nid, info in by_indeg[:10]:
            ideg = in_degree.get(nid, 0)
            if ideg == 0:
                break
            report_lines.append(f"    in-degree={ideg}  {nid}")

        report_lines.append("")
        by_outdeg = sorted(nodes.items(), key=lambda x: out_degree.get(x[0], 0), reverse=True)
        report_lines.append("  Most-dependent elements (highest out-degree):")
        for nid, info in by_outdeg[:10]:
            odeg = out_degree.get(nid, 0)
            if odeg == 0:
                break
            report_lines.append(f"    out-degree={odeg}  {nid}")
    report_lines.append("")

    report_lines.append("9. LABEL REGISTRY")
    report_lines.append("-" * 40)
    for lbl in sorted(label_to_id.keys()):
        report_lines.append(f"  {lbl:35s} -> {label_to_id[lbl]}")
    report_lines.append("")

    report_lines.append("=" * 70)
    report_lines.append("END OF REPORT")
    report_lines.append("=" * 70)

    report_text = "\n".join(report_lines)
    with open(OUTPUT_REPORT, "w", encoding="utf-8") as f:
        f.write(report_text)
    print(f"  Saved: {OUTPUT_REPORT}")

    # Final summary
    print("\n" + "=" * 60)
    print("Consistency Audit Complete")
    print(f"  Nodes: {len(nodes)}  |  Edges: {len(edges)}  |  Cycles: {len(cycles)}")
    print(f"  Roots: {len(roots)}  |  Leaves: {len(leaves)}  |  Orphans: {len(orphans)}")
    print(f"  Unresolved refs: {len(unresolved_refs)}  |  Ordering issues: {len(ordering_issues)}")
    print("=" * 60)


if __name__ == "__main__":
    main()
