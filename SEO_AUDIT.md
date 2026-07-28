# willrg.com: what was wrong, what changed, what is left

Written 28 July 2026.

A short glossary first, because some of this is unavoidably technical.

| Term | What it means |
|---|---|
| Crawl | Google fetching a page to read it. |
| Index | Google storing a page so it can appear in results. Crawling and indexing are separate steps. |
| `robots.txt` | A file at the top of the site telling search engines which folders to stay out of. It blocks crawling only. |
| `noindex` | A line inside a page telling search engines not to list it. Google has to crawl the page to see this line. |
| Sitemap | A list of every page you want Google to know about. Yours is generated automatically. |
| Front matter | The block between `---` lines at the top of a Markdown file. Jekyll reads it to decide the title, layout and so on. |

---

## 1. What was actually wrong

Your site was never removed from Google. Pages like `/about/` and `/galactic_dynamics/` were listed and did appear for searches naming your work. Several separate faults were holding it back.

### The chat logs were the biggest one

Your sitemap listed about 190 pages. **100 of them were raw WILL AI conversations** in `assistant/logs/`. Three things went wrong there at once.

**First, two settings contradicted each other.** `robots.txt` told Google to stay out of that folder. The sitemap told Google to go look at all 100 pages in it. Google reports that as an error on every one of those pages, and it makes the whole sitemap less trusted.

**Second, and this is the part that matters most:** blocking a folder in `robots.txt` stops Google reading the pages, but does not stop it listing them. And because Google was not allowed to fetch them, it could never see a `noindex` line telling it to drop them. They were stuck: unreadable, but still counted.

**Third, the page titles were broken.** This is separate from the filenames, which are fine. Your filenames come from the question and are all different. But inside each file there is a `title:` line, and that is what becomes the page title Google displays. Your logger was writing the *first* message into it. The first message is always the button the visitor pressed to choose a maths level. Result:

| | filenames | the `title:` line |
|---|---|---|
| different values across 101 files | 101 | **29** |
| most repeated value | none repeat | `Rigorous physicist`, 54 times |

54 pages carrying an identical title is read as duplicate content. Page title is one of the strongest signals Google uses, so those pages had nothing to match a search against.

Alongside that, 11 logs contained raw error text from the Google API that powers WILL AI, and the longest one (26,000 words) had somebody's Pokémon trading spreadsheet pasted into the middle of it.

### Nothing on the site had a link preview picture

When anyone pasted a willrg.com link into X, Facebook, LinkedIn or Slack, it appeared as bare text with no picture. The cause: the plugin that writes those tags only looks for a picture set on an individual page, and never checks the site-wide setting you had filled in. So the setting did nothing, and no page on the site had one.

Separately, the picture file itself was 5.8 MB. Most of those services refuse anything that large.

### There was no site icon at all

The little icon in the browser tab. Three problems: the file browsers look for by default (`/favicon.ico`) did not exist, the icon that *was* declared was a 7.4 MB image (no browser will download that for a 16-pixel icon), and your live homepage did not link to any icon at all.

That last part had a bigger consequence. Your homepage uses the `homeclean` layout, and that layout was missing a shared block of code the other layouts include. So the homepage had no icon, no structured summary for Google, **and no Google Analytics tag**. Your homepage traffic was never being counted.

### Thirteen pages were served with no layout

Some Markdown files had no front matter, so Jekyll served them as bare text with no header, no navigation, no title and no tracking. Among them: `rom_equations.md`, all five orbital decay reports, and `S1_S2_proof_test.md`.

### An internal document was public

`documents/WILL_RG_Strategy_Plan.md`, your April notes on outreach and YouTube plans, was being served on the site.

---

## 2. What changed

### The chat logs now work on a permission model

You chose this design and it is the right one. There are two folders:

`assistant/logs/` holds every conversation anyone has with WILL AI. Nobody reviews these before they go live, so the whole folder is now set to `noindex` and kept out of the sitemap. Google will never list anything in it. The pages stay public for anyone with the link.

`assistant/chats/` holds conversations you have picked yourself. These are listed normally, with a proper title, a summary and a hidden description Google can read.

`promote_chat.py` moves a conversation from the first folder to the second. It will not let you promote anything without writing a title and a summary, because those two things are what Google displays. Five conversations are already in there as a starting point.

`robots.txt` no longer blocks the logs folder. That sounds backwards but it is deliberate: Google has to be able to fetch those pages in order to read the `noindex` line and drop them. There is a comment in the file explaining this so it does not get "fixed" later.

### The homepage

The visible page is unchanged apart from one added block of text about scope, method and reproducibility. No results are claimed on it and there are no link boxes.

Three invisible fixes: it now has the site icon, the Google Analytics tag, and the summary block Google reads. Also, if a visitor has JavaScript switched off the page used to render completely blank, because every section starts invisible and only fades in through a script. There is now a fallback.

### Site icon

New icon in every size browsers ask for, all under 35 KB, built from your Ouroboros mark simplified down (the small symbols inside the ring turn to mush below 32 pixels). `/favicon.ico` now exists.

### Link previews

Fixed by writing the picture tag explicitly rather than relying on the plugin. New preview image at the right shape, 60 KB instead of 5.8 MB, and without the "Made with GAMMA" watermark that was on the old one. Your original is kept as `WILL_OG_original_5.8MB.png.bak`.

Also fixed: the Twitter tag was outputting `@Anton Rize`, with a space in it, which is not a valid handle.

### Pages given a proper layout

Front matter added to `rom_equations.md`, `S1_S2_proof_test.md`, `Predictions table.md`, `addon/ROM_FULL_TEST.md`, `addon/NOTEBOOK_CATALOG.md`, and all five reports in `reports/orbital_decay/`. Descriptions were taken from each document's own opening lines. Nothing was characterised beyond what the document says about itself.

`Relational_Decay_Law.md` and `ROM_RADIATIVE_DECAY.md` are the same document. The first now points at the second as the original so they stop competing.

`Predictions table.md` had a space in its web address. It now lives at `/predictions-table/`, with the old address redirecting.

`quantazation.html` was titled with the misspelling "quantazation", which cannot match anyone searching for *quantization*. Retitled and moved to `/quantization/`, old addresses redirecting.

### Taken off the website

`README.md` and `documents/WILL_RG_Strategy_Plan.md`. Both stay in the repository and README still shows on your GitHub page exactly as before. README is 98.6% identical to `WILL_RG_MAP.md`, which is already published at `/research_map/`, so it was being served twice.

**A correction:** I first excluded `WILL_RG_MAP.md` too, without reading it. That would have deleted your `/research_map/` page. It is back. I also excluded the whole `WILL DATABASE/` folder, which would have removed a research report from it. Only the video upload notes are excluded now.

---

## 3. What to do after pushing

1. In Google Search Console, resubmit the sitemap. It should shrink from about 190 pages to about 90, and the errors about blocked pages should clear.
2. Use the URL inspection tool to request indexing for `/`, `/galactic_dynamics/`, `/predictions/` and `/assistant/chats/`.
3. Watch the logs folder disappear from the index over the next few weeks. **Do not add the block back to `robots.txt` until it reaches zero.** Adding it early freezes those pages in Google permanently.
4. Fix the logger. Whatever code writes the log files stores the maths-level button as the title. It should skip that first message and store the real question instead. Otherwise every new log arrives broken.
5. Promote more conversations when you feel like it. `python promote_chat.py --list` ranks them by length.

---

## 3a. Mobile layout

Checked every page at 390 pixels wide (a normal phone) and again at 320 (the narrowest still in common use).

Four pages were scrolling sideways. When that happens the header and all the text get dragged out of position, and the page feels broken even though only one element is too wide.

| Page | How far off the screen it ran |
|---|---|
| `/rom/` | 928 px |
| `/research_map/` | 475 px |
| `/relativistic-foundations/` | 331 px |
| `/predictions/` | 231 px |

Two causes. Wide tables, and equations written inside a sentence rather than on their own line.

The equations were the harder one. The usual fix is to tell the equation it may not exceed the screen width, but that instruction is simply ignored by anything drawn inline in a line of text. It has to be told to behave as its own block first. Once it is, it scrolls sideways on its own instead of dragging the page with it.

Your WILL AI page already had this fix, but only for equations on their own line and only inside the chat bubbles. That is why long inline expressions in a reply could still push it around.

The fix now lives in one file, `_includes/responsive.html`, included by every layout. After it, all four pages measure clean at both widths, and so does every other page on the site.

Two things checked and already fine: the typing box on the WILL AI page uses 18 pixel text, which is above the size that makes iPhones zoom in when you tap a field, and every button is large enough to tap comfortably.

---

## 4. Two things left undone

### Your pages load a large tool they do not need

Every page pulls in a styling tool called Tailwind from an outside address. The version you are pulling is the one meant for testing, not for a live site. It ships the entire builder, and the visitor's browser has to run it and work out all your styles before the page looks right. That is roughly 400 KB of extra download plus processing time, on every page load, for something that could be a finished file sitting on your own server.

Two consequences. Visitors see a moment of unstyled text before it snaps into place. And Google measures how fast pages become usable and takes it into account when ranking.

You already did most of the work to fix this. `package.json` has a command that builds the finished file, and the finished file exists at `assets/css/tailwind.css` at 47 KB. **Nothing points to it.**

I did not switch it over. Doing so means telling the builder which files to scan for styles, rebuilding, and then checking every page to see nothing broke visually. If it misses something, pages break in ways I cannot see from here. It is worth doing, with the site open in front of you.

### Some images are very large

`Gemini_Generated_Image_...png` is 6.5 MB. `WILL_RG_INFOGRAPH.png` is 6.0 MB. `LOGOS-MAP-FULL-PAGE.png` is 2.0 MB. Any page showing these is slow on a phone. Resizing them to the size they actually display at would cut them by roughly 90% with no visible difference.

---

## 5. What this will and will not do

Everything above makes your pages *eligible* to appear in search. None of it makes them beat arXiv, Oxford Academic or ResearchGate for a competitive search like "alternatives to dark matter". Those sites win on accumulated citations and links from other sites, and no amount of configuration changes that.

What these fixes realistically achieve:

- Google stops receiving contradictory instructions from your site.
- 100 unreviewed pages stop counting against it.
- Your links show a picture when shared, which affects whether anyone clicks.
- The site has an icon, which affects whether it looks maintained.
- Pages can now match searches for words that appear on them.

The thing that actually moves competitive rankings is other sites linking to yours. Your Zenodo DOI, ResearchGate profile and YouTube channel are the levers for that. Preprint servers and discussion threads that link back will do more than any further work on the site itself.
