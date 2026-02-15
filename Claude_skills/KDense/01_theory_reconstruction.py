#!/usr/bin/env python3
"""
Step 1: Theory Reconstruction - Ingest WILL RG LaTeX sources and extract
structural elements (axioms, definitions, theorems, etc.) plus core vocabulary.

Outputs:
  results/data_stats.txt            – basic word/line counts per file
  results/extracted_structure.json   – categorised structural elements
  results/term_frequency.csv         – top-50 technical terms by frequency
"""

import json
import csv
import re
import os
from collections import Counter
from pathlib import Path

# ── Paths ────────────────────────────────────────────────────────────────────
SESSION = Path("/app/sandbox/session_20260215_174654_9cad3df878d3")
USER_DATA = SESSION / "user_data"
RESULTS = SESSION / "results"

SOURCE_FILES = {
    "WILL_RG_I":   USER_DATA / "WILL_RG_I.txt",
    "WILL_RG_II":  USER_DATA / "WILL_RG_II.txt",
    "WILL_RG_III": USER_DATA / "WILL_RG_III.txt",
}

# ── Stop words (English + LaTeX boilerplate) ─────────────────────────────────
STOP_WORDS = set("""
a about above after again against all am an and any are aren't as at be
because been before being below between both but by can't cannot could
couldn't did didn't do does doesn't doing don't down during each few for
from further get got had hadn't has hasn't have haven't having he he'd he'll
he's her here here's hers herself him himself his how how's i i'd i'll i'm
i've if in into is isn't it it's its itself let's me more most mustn't my
myself no nor not of off on once only or other ought our ours ourselves out
over own same shan't she she'd she'll she's should shouldn't so some such
than that that's the their theirs them themselves then there there's these
they they'd they'll they're they've this those through to too under until up
upon us very was wasn't we we'd we'll we're we've were weren't what what's
when when's where where's which while who who's whom why why's will with
won't would wouldn't you you'd you'll you're you've your yours yourself
yourselves also one two three four five first second third however therefore
thus hence since may might shall can could must need also even still just
yet already although though whether either neither much many such like
well really quite rather ever never now then often always sometimes
""".split())

# Extra LaTeX / formatting tokens to exclude
LATEX_STOP = set("""
begin end text textbf textit item label ref section subsection subsubsection
equation frac sqrt left right quad qquad hline cdot ldots cdots times
approx equiv neq leq geq infty partial nabla sum int prod lim
usepackage documentclass newcommand renewcommand newtheorem setlength
includegraphics caption centering hspace vspace noindent pagebreak newpage
footnote cite href url maketitle abstract document enumerate itemize
tabular table figure minipage multicolumn hfill vfill par smallskip
medskip bigskip textwidth linewidth columnwidth paperwidth paperheight
geometry fontenc inputenc babel hyperref booktabs xcolor graphicx amsmath
amssymb amsthm tikz tcolorbox fancyhdr natbib
boxed overline underline hat tilde bar vec dot ddot
alpha beta gamma delta epsilon zeta eta theta iota kappa lambda mu nu
xi pi rho sigma tau upsilon phi chi psi omega
sin cos tan log exp ln det max min lim sup inf arg
colback colframe coltitle fonttitle gray blue red green black white
title style width height color size type number new old
top bottom page paper used using note see part given
show shows shown work works result results found fig table
""".split())

ALL_STOP = STOP_WORDS | LATEX_STOP


# ═══════════════════════════════════════════════════════════════════════════════
# 1. Read files and compute basic statistics
# ═══════════════════════════════════════════════════════════════════════════════
print("=" * 60)
print("Step 1: Reading source files and computing basic statistics")
print("=" * 60)

file_contents = {}
stats_lines = []

for name, path in SOURCE_FILES.items():
    print(f"  Reading {name} from {path} ...")
    with open(path, "r", encoding="utf-8") as f:
        text = f.read()
    file_contents[name] = text

    lines = text.split("\n")
    words = text.split()
    chars = len(text)
    stats_lines.append(f"{name}:")
    stats_lines.append(f"  Lines : {len(lines)}")
    stats_lines.append(f"  Words : {len(words)}")
    stats_lines.append(f"  Chars : {chars}")
    stats_lines.append("")
    print(f"    -> {len(lines)} lines, {len(words)} words, {chars} chars")

stats_text = "\n".join(stats_lines)
stats_path = RESULTS / "data_stats.txt"
with open(stats_path, "w", encoding="utf-8") as f:
    f.write(stats_text)
print(f"\n  Saved basic statistics to {stats_path}\n")


# ═══════════════════════════════════════════════════════════════════════════════
# 2. Extract structural elements from LaTeX
# ═══════════════════════════════════════════════════════════════════════════════
print("=" * 60)
print("Step 2: Extracting structural elements (LaTeX environments)")
print("=" * 60)

# LaTeX environments to capture
ENV_TYPES = [
    "theorem", "lemma", "corollary", "definition", "proposition",
    "remark", "principle", "proof", "axiom", "postulate", "rule",
]

# Regex to extract \begin{env}[optional title] ... \end{env}
# Uses DOTALL so . matches newlines
def extract_environments(text, env_name):
    """Extract all occurrences of \\begin{env}[opt] ... \\end{env}."""
    pattern = re.compile(
        r"\\begin\{" + re.escape(env_name) + r"\}"
        r"(?:\[([^\]]*)\])?"          # optional [title]
        r"(.*?)"                       # body (non-greedy)
        r"\\end\{" + re.escape(env_name) + r"\}",
        re.DOTALL
    )
    results = []
    for m in pattern.finditer(text):
        title = m.group(1) or ""
        body = m.group(2).strip()
        results.append({"title": title.strip(), "body": body})
    return results

# Also extract \section / \subsection headings as structural markers
def extract_sections(text):
    """Extract section/subsection headings."""
    pattern = re.compile(
        r"\\(section|subsection|subsubsection)\{([^}]+)\}"
    )
    results = []
    for m in pattern.finditer(text):
        level = m.group(1)
        heading = m.group(2).strip()
        results.append({"level": level, "heading": heading})
    return results

# Keyword-based extraction: find paragraphs containing structural markers
# that might not be in formal environments (e.g., inline "Axiom 1:", "Rule:", etc.)
KEYWORD_MARKERS = [
    "Axiom", "Definition", "Theorem", "Principle", "Postulate",
    "Rule", "Lemma", "Corollary", "Proposition", "Law",
    "Conjecture", "Hypothesis", "Claim",
]

def extract_keyword_paragraphs(text):
    """Find paragraphs that contain structural keyword markers outside environments."""
    # Remove environment blocks first to avoid double-counting
    cleaned = text
    for env in ENV_TYPES:
        cleaned = re.sub(
            r"\\begin\{" + re.escape(env) + r"\}.*?\\end\{" + re.escape(env) + r"\}",
            "", cleaned, flags=re.DOTALL
        )
    # Split into paragraphs on double newline
    paragraphs = re.split(r"\n\s*\n", cleaned)
    results = []
    for para in paragraphs:
        para_stripped = para.strip()
        if not para_stripped:
            continue
        for kw in KEYWORD_MARKERS:
            # Match keyword followed by optional numbering (e.g., "Axiom 1", "Theorem 3.2")
            if re.search(r"\b" + re.escape(kw) + r"\b", para_stripped, re.IGNORECASE):
                results.append({"keyword": kw, "text": para_stripped})
                break  # avoid duplicate if multiple keywords in same paragraph
    return results

# Also extract numbered enumerations that serve as axiom/rule lists
def extract_enumerations(text):
    """Extract enumerate environments that might contain axioms/rules as numbered items."""
    pattern = re.compile(
        r"\\begin\{enumerate\}(.*?)\\end\{enumerate\}",
        re.DOTALL
    )
    results = []
    for m in pattern.finditer(text):
        body = m.group(1).strip()
        # Extract individual \item entries
        items = re.split(r"\\item", body)
        numbered_items = []
        for idx, item in enumerate(items):
            item = item.strip()
            if item:
                numbered_items.append(f"({idx}). {item}")
        if numbered_items:
            results.append(numbered_items)
    return results

# ── Run extraction across all files ──────────────────────────────────────────
structure = {}

for name, text in file_contents.items():
    print(f"\n  Processing {name} ...")
    file_struct = {"environments": {}, "sections": [], "keyword_paragraphs": [], "enumerations": []}

    # Environments
    for env in ENV_TYPES:
        found = extract_environments(text, env)
        if found:
            file_struct["environments"][env] = found
            print(f"    {env:>15s}: {len(found)} found")

    # Sections
    sections = extract_sections(text)
    file_struct["sections"] = sections
    print(f"    {'sections':>15s}: {len(sections)} headings")

    # Keyword paragraphs (outside formal environments)
    kw_paras = extract_keyword_paragraphs(text)
    file_struct["keyword_paragraphs"] = kw_paras
    print(f"    {'keyword paras':>15s}: {len(kw_paras)} found")

    # Enumerations
    enums = extract_enumerations(text)
    file_struct["enumerations"] = enums
    print(f"    {'enumerations':>15s}: {len(enums)} blocks")

    structure[name] = file_struct

# Save extracted structure
struct_path = RESULTS / "extracted_structure.json"
with open(struct_path, "w", encoding="utf-8") as f:
    json.dump(structure, f, indent=2, ensure_ascii=False)
print(f"\n  Saved extracted structure to {struct_path}")


# ═══════════════════════════════════════════════════════════════════════════════
# 3. Term frequency analysis
# ═══════════════════════════════════════════════════════════════════════════════
print("\n" + "=" * 60)
print("Step 3: Term frequency analysis (top 50 technical terms)")
print("=" * 60)

def clean_latex(text):
    """Strip LaTeX commands and math notation, keep meaningful words."""
    # Remove comments
    text = re.sub(r"%.*$", "", text, flags=re.MULTILINE)
    # Remove math environments content (display math)
    text = re.sub(r"\\\[.*?\\\]", " ", text, flags=re.DOTALL)
    text = re.sub(r"\$\$.*?\$\$", " ", text, flags=re.DOTALL)
    # Remove inline math
    text = re.sub(r"\$[^$]+\$", " ", text)
    # Remove \command{...} but keep the content of text-like commands
    text = re.sub(r"\\(?:textbf|textit|emph|text|href)\{([^}]*)\}", r"\1", text)
    # Remove remaining \commands
    text = re.sub(r"\\[a-zA-Z]+\*?(?:\[[^\]]*\])?(?:\{[^}]*\})*", " ", text)
    # Remove braces, brackets, special chars
    text = re.sub(r"[{}()\[\]\\|@#&~^_$%]", " ", text)
    # Remove URLs
    text = re.sub(r"https?://\S+", " ", text)
    # Remove numbers-only tokens
    text = re.sub(r"\b\d+\.?\d*\b", " ", text)
    # Normalize whitespace
    text = re.sub(r"\s+", " ", text)
    return text.strip()

# Aggregate cleaned text from all files
all_cleaned = []
for name, text in file_contents.items():
    cleaned = clean_latex(text)
    all_cleaned.append(cleaned)
    print(f"  {name}: {len(text)} raw chars -> {len(cleaned)} cleaned chars")

combined_clean = " ".join(all_cleaned)

# Tokenize and count
tokens = re.findall(r"[a-zA-Z]{3,}", combined_clean.lower())
print(f"\n  Total tokens (length >= 3): {len(tokens)}")

# Filter stop words
filtered = [t for t in tokens if t not in ALL_STOP]
print(f"  After stop-word removal: {len(filtered)}")

freq = Counter(filtered)
top50 = freq.most_common(50)

print("\n  Top 50 technical terms:")
for rank, (term, count) in enumerate(top50, 1):
    print(f"    {rank:>3d}. {term:<30s} {count}")

# Save to CSV
freq_path = RESULTS / "term_frequency.csv"
with open(freq_path, "w", newline="", encoding="utf-8") as f:
    writer = csv.writer(f)
    writer.writerow(["rank", "term", "frequency"])
    for rank, (term, count) in enumerate(top50, 1):
        writer.writerow([rank, term, count])
print(f"\n  Saved term frequencies to {freq_path}")


# ═══════════════════════════════════════════════════════════════════════════════
# Summary
# ═══════════════════════════════════════════════════════════════════════════════
print("\n" + "=" * 60)
print("Theory Reconstruction — COMPLETE")
print("=" * 60)
print(f"  data_stats.txt          : {stats_path}")
print(f"  extracted_structure.json : {struct_path}")
print(f"  term_frequency.csv       : {freq_path}")

# Count total structural elements
total_envs = 0
for name, fs in structure.items():
    for env, items in fs["environments"].items():
        total_envs += len(items)
print(f"\n  Total formal environments extracted: {total_envs}")
total_kw = sum(len(fs["keyword_paragraphs"]) for fs in structure.values())
print(f"  Total keyword paragraphs extracted: {total_kw}")
total_secs = sum(len(fs["sections"]) for fs in structure.values())
print(f"  Total section headings extracted  : {total_secs}")
print(f"  Top term: '{top50[0][0]}' (freq={top50[0][1]})")
