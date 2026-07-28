#!/usr/bin/env python3
"""
fix_log_seo.py
==============

Repairs the search-engine metadata on the WILL-AI conversation logs in
`assistant/logs/`.

THE PROBLEM THIS SOLVES
-----------------------
The logger writes the *first* user message into the `title:` field. But the
first user message is always the engagement-level button the visitor clicked,
so 72 of the 100 logs are titled "Rigorous physicist", "Humble thinker" or
"Curious student" instead of the actual question. 54 pages currently share one
identical <title>. Since <title> is one of the strongest on-page ranking
signals, those pages are invisible to search for the topics they discuss, and
Google reads a block of identical titles as duplicate content.

WHAT THIS SCRIPT DOES
---------------------
For every log file it:

  1. Finds the first *real* user message, skipping the level-selector turn.
  2. Rewrites `title:` to that question, trimmed to a clean length.
  3. Adds a `description:` field (used for the meta description / snippet).
  4. Counts the words in the conversation.
  5. Flags conversations shorter than MIN_WORDS with `noindex: true` and
     `sitemap: false`, so thin exchanges stay reachable by direct link but
     never enter the search index or the sitemap.

Nothing is deleted. Every page stays live at the same URL. Only front matter
changes.

USAGE
-----
    python fix_log_seo.py --dry-run     # show what would change, touch nothing
    python fix_log_seo.py               # apply the changes

Run it again any time new logs are added; already-fixed files are left alone.
"""

import argparse
import os
import re
import sys

# ---------------------------------------------------------------------------
# Settings
# ---------------------------------------------------------------------------

LOGS_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)),
                        "assistant", "logs")

# Conversations shorter than this are treated as too thin to index.
MIN_WORDS = 500

# If dumped API error JSON accounts for more than this fraction of a
# conversation, the page is kept out of the search index.
ERROR_THRESHOLD = 0.03

# The three engagement-level buttons. A user message that is exactly one of
# these is the level selector, not a real question.
LEVEL_TOKENS = {"rigorous physicist", "humble thinker", "curious student"}

# Target lengths. Google shows roughly 60 characters of a title and roughly
# 155 of a description before truncating.
TITLE_MAX = 72
DESC_MAX = 155


# ---------------------------------------------------------------------------
# Helpers
# ---------------------------------------------------------------------------

def split_front_matter(text):
    """
    Return (front_matter_string, body_string) for a Jekyll file.

    The delimiter must be a line that is exactly '---'. Splitting on the bare
    substring is unsafe here: user questions contain em-dash runs like
    'WILL-AI --- before I invest an afternoon', and treating those as a
    delimiter shreds the front matter.
    """
    lines = text.splitlines(keepends=True)
    if not lines or lines[0].strip() != "---":
        return "", text
    for i in range(1, len(lines)):
        if lines[i].strip() == "---":
            return "".join(lines[:i + 1]), "".join(lines[i + 1:])
    return "", text


def get_user_messages(body):
    """Pull out every '**User:** ...' turn from the conversation body."""
    messages = []
    for match in re.finditer(r"^\*\*User:\*\*\s*(.+?)(?=\n\s*\n|\Z)",
                             body, re.MULTILINE | re.DOTALL):
        messages.append(" ".join(match.group(1).split()))
    return messages


def pick_real_question(messages):
    """
    Return the first user message that is an actual question rather than the
    engagement-level button. Falls back to the first message if every turn
    looks like a selector.
    """
    for msg in messages:
        if msg.strip().lower().rstrip(".!") not in LEVEL_TOKENS:
            return msg
    return messages[0] if messages else ""


def strip_latex(text):
    r"""
    Make a string safe and readable for a YAML front-matter title.

    Raw questions often contain LaTeX such as $\kappa^{2}=2\beta^{2}$. Two
    problems with that: a backslash inside a double-quoted YAML scalar is an
    escape sequence and breaks the build, and raw markup reads badly in a
    search result. So drop the dollar signs and braces and turn "\kappa" into
    plain "kappa".
    """
    text = text.replace("$", "")
    text = re.sub(r"\\left|\\right", "", text)
    text = re.sub(r"\\text\s*\{([^}]*)\}", r"\1", text)
    text = re.sub(r"\\([A-Za-z]+)", r"\1", text)   # \beta -> beta
    text = re.sub(r"\\", "", text)                 # any stray backslashes
    text = text.replace("{", "").replace("}", "")

    # A run of three or more dashes is the YAML front-matter delimiter. If one
    # survives into a title it terminates the front matter early and corrupts
    # the file, so collapse any such run to a single em dash.
    text = re.sub(r"-{3,}", "—", text)

    return " ".join(text.split())


# Opening sentences that say nothing about the topic. If one of these is the
# first sentence, skip past it and title the page on what comes next.
FILLER_PATTERNS = [
    r"^lets?\s+switch\s+in\s*to\s+research\s+mode\b",
    r"^lets?\s+(think together|begin|start|go|continue|proceed)\b",
    r"^(hi|hey|hello|greetings)\b",
    r"^anton\s+rize\s+here\b",
    r"^(thanks|thank you|ok|okay|good|great|nice|perfect|yes|no)\b\W*$",
    r"^i\s+(just\s+)?finished\b",
    r"^research\s+mode\b",
]


# When the Gemini backend hits a rate limit or errors out, the raw JSON
# response gets written straight into the log and published. Those blocks are
# worthless to a reader and leak internal error text onto a public page.
ERROR_SIGNATURES = re.compile(
    r'RESOURCE_EXHAUSTED'
    r'|"code":\s*(?:429|500|503)'
    r'|You exceeded your current quota'
    r'|generativelanguage\.googleapis\.com'
    r'|gemini-api/docs/rate-limits',
    re.IGNORECASE)

ERROR_BLOCK = re.compile(r'\{\s*\n?\s*"error".*?\n\s*\}\s*\n', re.DOTALL)


def error_share(body):
    """
    Fraction of the conversation (0.0–1.0) taken up by dumped API error JSON.
    Used to keep broken conversations out of the search index.
    """
    if not ERROR_SIGNATURES.search(body):
        return 0.0
    blocks = ERROR_BLOCK.findall(body)
    return sum(len(b) for b in blocks) / max(len(body), 1)


def is_filler(sentence):
    """True if a sentence is a greeting or a mode-setting aside, not a question."""
    s = sentence.strip().lower()
    if len(s) < 25:
        return True
    return any(re.search(p, s) for p in FILLER_PATTERNS)


def clean_title(question):
    """
    Turn a raw question into a readable page title.

    Takes the first sentence, strips greetings that carry no search value,
    and trims to a word boundary near TITLE_MAX characters.
    """
    text = strip_latex(question).strip()

    # Drop leading greetings — "Hi WILL-AI!", "Hello WILL AI.", "Anton Rize here."
    text = re.sub(r"^(hi|hey|hello)[,!\s]+will[-\s]?ai[,.!\s]*", "", text,
                  flags=re.IGNORECASE)
    text = re.sub(r"^anton rize here[,.!\s]*", "", text, flags=re.IGNORECASE)
    text = re.sub(r"^(hi|hey|hello)[,!\s]+", "", text, flags=re.IGNORECASE)
    text = text.strip()

    # Walk the sentences and take the first substantive one. Openers like
    # "Lets switch in to research mode." carry no search value and would
    # otherwise become the page title on several different conversations.
    sentences = [s.strip() for s in re.split(r"(?<=[.?!])\s+", text) if s.strip()]
    sentence = ""
    for cand in sentences:
        # Strip a filler clause that leads INTO the real question first —
        # e.g. "Lets think together: I interpret distance as ..." is a real
        # question wearing a filler hat, and must not be discarded wholesale.
        cand = re.sub(
            r"^(lets?\s+(think together|begin|start|explore|dig in|go)|"
            r"quick question|one more thing|a question)\s*[:,\-–]\s*",
            "", cand, flags=re.IGNORECASE).strip()
        if is_filler(cand):
            continue
        if len(cand) >= 25:
            sentence = cand
            break

    if not sentence:
        sentence = sentences[0] if sentences else text

    # Trim to a word boundary.
    if len(sentence) > TITLE_MAX:
        cut = sentence[:TITLE_MAX].rsplit(" ", 1)[0]
        sentence = cut.rstrip(" ,;:") + "…"

    # Capitalise the first letter, leave the rest alone.
    if sentence and sentence[0].islower():
        sentence = sentence[0].upper() + sentence[1:]

    return sentence.replace('"', "'").strip()


def clean_description(question):
    """Build a meta description from the full question text."""
    text = strip_latex(question)
    text = re.sub(r"^(hi|hey|hello)[,!\s]+will[-\s]?ai[,.!\s]*", "", text,
                  flags=re.IGNORECASE)
    text = re.sub(r"^anton rize here[,.!\s]*", "", text, flags=re.IGNORECASE)
    text = text.strip()

    if len(text) > DESC_MAX:
        text = text[:DESC_MAX].rsplit(" ", 1)[0].rstrip(" ,;:") + "…"

    prefix = "WILL-AI conversation log: "
    if text and text[0].islower():
        text = text[0].upper() + text[1:]
    return (prefix + text).replace('"', "'").strip()


def _replace_or_insert(front_matter, key, line):
    """
    Shared writer for front-matter lines.

    The replacement is passed as a lambda because titles can contain LaTeX
    such as \\sqrt or \\beta, and re.sub would otherwise try to interpret
    those backslashes as escape sequences and crash.
    """
    pattern = re.compile(rf"^{re.escape(key)}:.*$", re.MULTILINE)
    if pattern.search(front_matter):
        return pattern.sub(lambda _m: line, front_matter, count=1)
    # Insert just before the closing '---'.
    idx = front_matter.rstrip().rfind("---")
    return front_matter[:idx] + line + "\n\n" + front_matter[idx:]


def set_field(front_matter, key, value):
    """Insert or replace a `key: "value"` line inside the front matter."""
    return _replace_or_insert(front_matter, key, f'{key}: "{value}"')


def set_flag(front_matter, key, value):
    """Insert or replace a bare `key: true/false` line (no quotes)."""
    return _replace_or_insert(front_matter, key, f"{key}: {value}")


def remove_field(front_matter, key):
    """Delete a `key: ...` line if present."""
    return re.sub(rf"^{re.escape(key)}:.*\n?", "", front_matter, flags=re.MULTILINE)


# ---------------------------------------------------------------------------
# Main
# ---------------------------------------------------------------------------

def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--dry-run", action="store_true",
                        help="print the planned changes without writing files")
    parser.add_argument("--min-words", type=int, default=MIN_WORDS,
                        help=f"noindex threshold in words (default {MIN_WORDS})")
    args = parser.parse_args()

    if not os.path.isdir(LOGS_DIR):
        print(f"ERROR: log directory not found: {LOGS_DIR}")
        sys.exit(1)

    files = sorted(f for f in os.listdir(LOGS_DIR) if f.endswith(".md"))
    if not files:
        print(f"No .md files found in {LOGS_DIR}")
        sys.exit(1)

    n_retitled = 0
    n_indexed = 0
    n_noindexed = 0
    retitled_examples = []
    noindexed_list = []
    duplicate_list = []

    # ---- Pass 1: work out the new title and word count for every file ----
    plan = {}
    for name in files:
        path = os.path.join(LOGS_DIR, name)
        with open(path, encoding="utf-8") as fh:
            text = fh.read()
        front, body = split_front_matter(text)
        if not front:
            continue
        question = pick_real_question(get_user_messages(body))
        # A page whose front matter says `title_locked: true` has been given a
        # hand-written title. Automatic titling has a quality ceiling on raw
        # chat text, so the highest-value conversations are titled by hand and
        # this script must never overwrite them.
        locked = re.search(r"^title_locked:\s*true\s*$", front, re.MULTILINE)
        existing = re.search(r'^title:\s*"?(.*?)"?\s*$', front, re.MULTILINE)
        plan[name] = {
            "title": (existing.group(1) if locked and existing
                      else (clean_title(question) if question else "")),
            "words": len(body.split()),
            "locked": bool(locked),
            "err": error_share(body),
            "forced_noindex": bool(
                re.search(r"^noindex:\s*true\s*$", front, re.MULTILINE)) and bool(locked),
        }

    # ---- Between passes: resolve near-duplicates ----
    # Some questions were asked twice and logged twice. Two pages with the
    # same title compete with each other in search and read as duplicate
    # content, so keep only the longest version of each and noindex the rest.
    by_title = {}
    for name, info in plan.items():
        key = re.sub(r"[^a-z0-9]", "", info["title"].lower())[:60]
        if key:
            by_title.setdefault(key, []).append(name)

    duplicates = set()
    for key, names in by_title.items():
        if len(names) > 1:
            names.sort(key=lambda n: plan[n]["words"], reverse=True)
            for loser in names[1:]:              # keep names[0], the longest
                duplicates.add(loser)
                duplicate_list.append((plan[loser]["title"], names[0]))

    # ---- Pass 2: write the front matter ----
    for name in files:
        path = os.path.join(LOGS_DIR, name)
        with open(path, encoding="utf-8") as fh:
            original = fh.read()

        front, body = split_front_matter(original)
        if not front:
            print(f"  SKIP (no front matter): {name}")
            continue

        old_title_match = re.search(r'title:\s*"?(.*?)"?\s*$', front, re.MULTILINE)
        old_title = old_title_match.group(1) if old_title_match else ""

        messages = get_user_messages(body)
        question = pick_real_question(messages)
        word_count = len(body.split())

        locked = plan.get(name, {}).get("locked", False)

        if locked:
            # Hand-written title — leave it exactly as it is.
            new_title = old_title
        elif question:
            new_title = clean_title(question)
        else:
            new_title = old_title

        if not new_title:
            new_title = old_title

        # --- Decide whether this conversation is worth indexing ---
        # Out of the index if it is too short to be useful, repeats a question
        # a longer conversation already covers, is largely a dumped API error,
        # or has been marked noindex by hand.
        info = plan.get(name, {})
        thin = (
            word_count < args.min_words
            or name in duplicates
            or info.get("err", 0.0) >= ERROR_THRESHOLD
            or info.get("forced_noindex", False)
        )

        new_front = front
        if new_title and new_title != old_title:
            new_front = set_field(new_front, "title", new_title)
            n_retitled += 1
            if len(retitled_examples) < 12:
                retitled_examples.append((old_title, new_title))

        if question:
            new_front = set_field(new_front, "description",
                                  clean_description(question))

        if thin:
            new_front = set_flag(new_front, "noindex", "true")
            new_front = set_flag(new_front, "sitemap", "false")
            n_noindexed += 1
            noindexed_list.append((word_count, new_title))
        else:
            # Make sure a previously-flagged file that has since grown is
            # allowed back into the index.
            new_front = remove_field(new_front, "noindex")
            new_front = remove_field(new_front, "sitemap")
            n_indexed += 1

        updated = new_front + body

        if updated != original and not args.dry_run:
            with open(path, "w", encoding="utf-8") as fh:
                fh.write(updated)

    # ---------------- Report ----------------
    mode = "DRY RUN — nothing written" if args.dry_run else "APPLIED"
    print("=" * 72)
    print(f"  fix_log_seo.py — {mode}")
    print("=" * 72)
    print(f"  log files processed      : {len(files)}")
    print(f"  titles rewritten         : {n_retitled}")
    print(f"  kept in search index     : {n_indexed}")
    print(f"  set to noindex           : {n_noindexed}"
          f"   ({n_noindexed - len(duplicates)} thin, {len(duplicates)} duplicate)")
    print()

    print("  SAMPLE OF REWRITTEN TITLES")
    print("  " + "-" * 68)
    for old, new in retitled_examples:
        print(f"    was : {old[:64]}")
        print(f"    now : {new[:64]}")
        print()

    print("  SET TO NOINDEX (still live and reachable by direct link)")
    print("  " + "-" * 68)
    for words, title in sorted(noindexed_list):
        print(f"    {words:5d} w   {title[:58]}")
    print()

    if duplicate_list:
        print("  DUPLICATE QUESTIONS — kept the longest, deindexed the rest")
        print("  " + "-" * 68)
        for title, kept in duplicate_list:
            print(f"    {title[:58]}")
        print()

    top = sorted(((v["words"], v["title"]) for v in plan.values()
                  if v["title"]), reverse=True)[:10]
    print("  LONGEST CONVERSATIONS NOW CARRYING A REAL TITLE")
    print("  " + "-" * 68)
    for words, title in top:
        print(f"    {words:6,d} w   {title[:56]}")
    print()


if __name__ == "__main__":
    main()
