#!/usr/bin/env python3
"""
promote_chat.py
===============

Promotes a raw WILL-AI log into the curated, search-indexed chats folder.

THE TWO FOLDERS
---------------
  assistant/logs/    Every conversation any visitor has with WILL AI. Written
                     automatically, never reviewed. Permanently noindexed and
                     kept out of the sitemap by _config.yml. Google is blind
                     to this folder.

  assistant/chats/   Conversations you have personally chosen. Indexed, in the
                     sitemap, rendered with a proper H1, summary, topic tags
                     and QAPage structured data.

Nothing reaches Google unless it passes through this script, which is the
point: the raw folder is untrusted by default and you are the gate.

TYPICAL USE
-----------
List what is available, longest and most substantial first:

    python promote_chat.py --list

Preview a specific log before deciding:

    python promote_chat.py --preview 3

Promote it, writing the SEO fields yourself:

    python promote_chat.py --promote 3 \\
        --title "How WILL RG estimates the Shapiro delay" \\
        --summary "Derives the Shapiro time delay from relational phase projections rather than from a metric on a background spacetime." \\
        --topics "Shapiro delay, gravitational time delay, relational geometry"

Or promote by filename instead of index number:

    python promote_chat.py --promote "2026-02-24How you estimate Shapiro.md" --title "..." --summary "..."

WRITING GOOD FIELDS
-------------------
  --title    What you want to appear as the blue link in Google. Aim for
             around 60 characters. Lead with the subject, not with "WILL AI".
             Write it as the question a searcher would type.

  --summary  Shown as the page lede AND as the search snippet. Aim for
             roughly 150-160 characters. Say what the conversation
             establishes, not that it is a conversation.

  --topics   Comma-separated tags. They render as chips and give the page
             extra topical signal.

The original log is left untouched; this copies it.
"""

import argparse
import os
import re
import shutil
import sys
from datetime import datetime

ROOT = os.path.dirname(os.path.abspath(__file__))
LOGS_DIR = os.path.join(ROOT, "assistant", "logs")
CHATS_DIR = os.path.join(ROOT, "assistant", "chats")

LEVEL_TOKENS = {"rigorous physicist", "humble thinker", "curious student"}


# ---------------------------------------------------------------------------
# Front matter helpers
# ---------------------------------------------------------------------------

def split_front_matter(text):
    """Split into (front matter, body). Delimiter must be a line of exactly ---."""
    lines = text.splitlines(keepends=True)
    if not lines or lines[0].strip() != "---":
        return "", text
    for i in range(1, len(lines)):
        if lines[i].strip() == "---":
            return "".join(lines[:i + 1]), "".join(lines[i + 1:])
    return "", text


def field(front_matter, key, default=""):
    m = re.search(rf'^{re.escape(key)}:\s*"?(.*?)"?\s*$', front_matter, re.MULTILINE)
    return m.group(1) if m else default


def user_messages(body):
    return [" ".join(m.split()) for m in
            re.findall(r"^\*\*User:\*\*\s*(.+?)(?=\n\s*\n|\Z)", body,
                       re.MULTILINE | re.DOTALL)]


def first_real_question(body):
    for msg in user_messages(body):
        if msg.strip().lower().rstrip(".!") not in LEVEL_TOKENS:
            return msg
    msgs = user_messages(body)
    return msgs[0] if msgs else ""


def slugify(text, maxlen=70):
    """Turn a title into a clean, lowercase, hyphenated URL segment."""
    text = text.lower()
    text = re.sub(r"[–—]", "-", text)     # en/em dash
    text = re.sub(r"[^a-z0-9]+", "-", text)
    text = re.sub(r"-{2,}", "-", text).strip("-")
    if len(text) > maxlen:
        text = text[:maxlen].rsplit("-", 1)[0]
    return text or "conversation"


def yaml_escape(text):
    """Make a string safe inside a double-quoted YAML scalar."""
    text = " ".join(str(text).split())
    text = text.replace("\\", "").replace('"', "'")
    text = re.sub(r"-{3,}", "—", text)     # --- would end the front matter
    return text


def load_logs():
    """Return every log as a dict, sorted longest conversation first."""
    if not os.path.isdir(LOGS_DIR):
        print(f"ERROR: no log directory at {LOGS_DIR}")
        sys.exit(1)
    out = []
    for name in sorted(os.listdir(LOGS_DIR)):
        if not name.endswith(".md"):
            continue
        raw = open(os.path.join(LOGS_DIR, name), encoding="utf-8",
                   errors="ignore").read()
        fm, body = split_front_matter(raw)
        out.append({
            "file": name,
            "title": field(fm, "title", "(untitled)"),
            "date": field(fm, "date"),
            "words": len(body.split()),
            "question": first_real_question(body),
            "body": body,
            "raw": raw,
        })
    out.sort(key=lambda d: d["words"], reverse=True)
    return out


def already_promoted():
    """Filenames already present in the curated folder, by source-file marker."""
    done = set()
    if not os.path.isdir(CHATS_DIR):
        return done
    for name in os.listdir(CHATS_DIR):
        if not name.endswith(".md"):
            continue
        raw = open(os.path.join(CHATS_DIR, name), encoding="utf-8",
                   errors="ignore").read()
        src = field(split_front_matter(raw)[0], "source_log")
        if src:
            done.add(src)
    return done


# ---------------------------------------------------------------------------
# Commands
# ---------------------------------------------------------------------------

def cmd_list(logs, limit):
    done = already_promoted()
    print()
    print(f"{'#':>4}  {'words':>7}  {'':2} title")
    print("-" * 92)
    for i, log in enumerate(logs[:limit], 1):
        mark = "✓" if log["file"] in done else " "
        print(f"{i:>4}  {log['words']:>7,}  {mark:2} {log['title'][:74]}")
    print()
    print(f"  {len(logs)} logs total. '✓' means already promoted.")
    print("  Inspect one with:   python promote_chat.py --preview N")
    print()


def cmd_preview(logs, index):
    log = logs[index - 1]
    print()
    print("=" * 78)
    print(f"  #{index}   {log['words']:,} words")
    print(f"  file    : {log['file']}")
    print(f"  title   : {log['title']}")
    print(f"  date    : {log['date']}")
    print("=" * 78)
    print()
    print("  OPENING QUESTION")
    print("  " + "-" * 74)
    for line in [log["question"][i:i + 74] for i in range(0, min(len(log["question"]), 740), 74)]:
        print(f"  {line}")
    print()
    heads = re.findall(r"^#{2,4}\s+(.+)$", log["body"], re.MULTILINE)[:14]
    if heads:
        print("  SECTIONS COVERED")
        print("  " + "-" * 74)
        for h in heads:
            print(f"    • {h.strip()[:70]}")
        print()
    warn = re.search(r"RESOURCE_EXHAUSTED|You exceeded your current quota", log["body"])
    if warn:
        print("  ⚠ WARNING: this log contains dumped API error output. Clean it")
        print("    before promoting, or pick a different one.")
        print()


def cmd_promote(logs, target, title, summary, topics):
    # Accept either an index number or a filename.
    if target.isdigit():
        log = logs[int(target) - 1]
    else:
        matches = [l for l in logs if l["file"] == target]
        if not matches:
            print(f"ERROR: no log named {target}")
            sys.exit(1)
        log = matches[0]

    os.makedirs(CHATS_DIR, exist_ok=True)

    slug = slugify(title)
    dest = os.path.join(CHATS_DIR, f"{slug}.md")
    if os.path.exists(dest):
        print(f"ERROR: {dest} already exists. Pick a different --title, or delete it.")
        sys.exit(1)

    date = log["date"] or datetime.utcnow().isoformat() + "Z"
    topic_list = [t.strip() for t in (topics or "").split(",") if t.strip()]

    fm = ["---",
          "layout: log",
          "curated: true",
          f'title: "{yaml_escape(title)}"',
          f'description: "{yaml_escape(summary)}"',
          f'summary: "{yaml_escape(summary)}"',
          f"permalink: /assistant/chats/{slug}/",
          f"date: {date}"]
    if topic_list:
        fm.append("topics:")
        fm += [f'  - "{yaml_escape(t)}"' for t in topic_list]
    fm.append(f'source_log: "{log["file"]}"')
    fm.append("---")
    fm.append("")

    with open(dest, "w", encoding="utf-8", newline="") as fh:
        fh.write("\n".join(fm) + log["body"].lstrip("\n"))

    print()
    print("  Promoted.")
    print(f"    from : assistant/logs/{log['file']}")
    print(f"    to   : assistant/chats/{slug}.md")
    print(f"    url  : https://willrg.com/assistant/chats/{slug}/")
    print(f"    words: {log['words']:,}")
    print()
    print("  Next: open the new file and edit the conversation itself —")
    print("  trim dead ends, fix typos in your own questions, delete any")
    print("  API error blocks. An edited page ranks better than a raw dump.")
    print()


def main():
    p = argparse.ArgumentParser(
        description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    p.add_argument("--list", action="store_true", help="list logs, longest first")
    p.add_argument("--limit", type=int, default=40, help="how many to list")
    p.add_argument("--preview", type=int, metavar="N", help="inspect log number N")
    p.add_argument("--promote", metavar="N_OR_FILE", help="promote log N (or a filename)")
    p.add_argument("--title", help="page title for the promoted chat")
    p.add_argument("--summary", help="meta description and on-page lede")
    p.add_argument("--topics", help="comma-separated topic tags")
    args = p.parse_args()

    logs = load_logs()

    if args.preview:
        cmd_preview(logs, args.preview)
    elif args.promote:
        if not args.title or not args.summary:
            print("ERROR: --promote requires both --title and --summary.")
            print("Those two fields are what Google shows. Do not skip them.")
            sys.exit(1)
        cmd_promote(logs, args.promote, args.title, args.summary, args.topics)
    else:
        cmd_list(logs, args.limit)


if __name__ == "__main__":
    main()
