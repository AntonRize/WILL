# Analytics events on willrg.com

All measurement lives in one file, `_includes/analytics.html`, which every layout now includes. Previously six layouts each carried their own copy of the Google tag, which is why the homepage was never being counted.

Google Analytics already records page views, outbound clicks, file downloads and a 90% scroll by itself when Enhanced Measurement is on. Everything below is what it does **not** give you.

---

## What gets recorded

### Papers, notebooks and interactive models

| Event | Fires when | Tells you |
|---|---|---|
| `paper_open` | Any link to a `.pdf` is clicked | Which paper, and whether they arrived at a specific section. A link ending `#sec:galactic-dynamics` records `deep_link: sec:galactic-dynamics`, so you learn which derivations people jump to. |
| `notebook_open` | A Colab or `.ipynb` link is clicked | Somebody is about to run your calculations themselves. |
| `desmos_open` | A Desmos link is clicked | Same intent as a notebook: they want to move the parameters rather than read about the result. |

Parameters on `paper_open`: `file_name`, `file_path`, `from_page`, `deep_link`, `result_section`.

### The predictions page

`/predictions/` carries sixty results, and every one of them offers the reader the same three choices: read the derivation, run the notebook, or open the Desmos model. A single event covers all three so they can be compared directly.

| Event | Parameters |
|---|---|
| `prediction_explored` | `result_section`, `action`, `destination` |

`action` is one of `derivation`, `notebook` or `desmos`. `result_section` is the heading the link sits under, taken from the page itself.

This answers the question you actually have about that page: **which of the sixty results do people care about, and do they read the maths or go straight to running it?**

The section name is found by walking backwards through the page to the nearest heading. I tested this against the live page: 61 PDF links, 63 Colab links and 10 Desmos links, and all 134 resolved to the correct result heading with no failures. Examples of what gets recorded:

```
derivation  <-  Equivalence Principle as a Derived Identity
notebook    <-  S2 Star (Sgr A*): RG vs GR Orbit Fit
desmos      <-  The Energy-Momentum Relation
notebook    <-  Earth-GPS Time Dilation: GR as the First-Order Limit of RG
```

### Holographic decoder

| Event | Fires when |
|---|---|
| `decoder_run_start` | The Run button is pressed. Records `mode` (guided or rigorous) and the `seed`. |
| `decoder_run_complete` | The full pipeline finishes, including the posterior sampling. Records the median values it produced. |

These are deliberately two separate events. Starting is one click. Finishing takes patience. The gap between the two counts tells you how many people abandon the simulation part way, which nothing else on the site can tell you.

This is detected by watching for the `done` class that `decoder/js/app.js` adds to `#status-strip` when it finishes, so it needs no change to your existing code. I tested this on the live page by adding the class manually and confirming it fires.

### Galactic dynamics

| Event | Fires when | Tells you |
|---|---|---|
| `galaxy_selected` | A galaxy is chosen from the dropdown | Which of the 175 people actually test |
| `galaxy_param_adjust` | A mass-to-light slider is moved | Real engagement. Records which slider, the value, the galaxy, and the resulting chi-squared. |
| `galaxy_autofit_toggle` | Auto-fit is switched on or off | |
| `galaxy_type_analysis` | The type analysis button is pressed | |
| `galaxy_zoo_filter` | A galaxy type filter is clicked at the top of the page | |

Sliders fire continuously while dragging, so the event waits until the person stops moving for 900 milliseconds and then records one event with the final value. Otherwise a single drag would produce fifty events.

### WILL AI

| Event | Fires when | Tells you |
|---|---|---|
| `will_ai_level_selected` | One of the three level buttons is pressed | Whether your audience self-identifies as a physicist or a beginner |
| `will_ai_message_sent` | A message is sent, by Enter or by the send button | Records `message_number`, so you see how deep conversations go |
| `will_ai_conversation` | Three or more messages in one visit | A real conversation rather than a single curious question |

### Reading

| Event | Fires when |
|---|---|
| `read_progress` | 25%, 50%, 75% and 100% of a page is reached |
| `engaged_60s` | Someone stays a full minute with the tab in focus |
| `text_copied` | Forty characters or more are copied |

Google's own scroll tracking only reports 90%, which on a page as long as `/predictions/` tells you almost nothing. The four marks show you where people stop.

**There is deliberately no "equation copied" event.** Selecting rendered MathJax and pressing copy produces mangled text rather than usable LaTeX, so nobody copies equations that way and the event would only ever record noise. The real signal that someone wants to work with an equation is that they open its derivation, its notebook or its Desmos model, which `prediction_explored` already covers.

### Other

| Event | Fires when |
|---|---|
| `sponsor_click` | A GitHub Sponsors or Patreon link is clicked |
| `outbound_click` | Any link leaving the site, labelled by destination host |

---

## Seeing them in Google Analytics

Events appear in **Reports, Engagement, Events** within about 24 hours. To see them immediately while testing, use **Admin, DebugView** and open the site with the browser console open.

To confirm the tracking is working, open any page, type `WILL_DEBUG_EVENTS = true` in the browser console, then click something. Every event will print to the console as it fires.

---

## Two things to set up in Analytics after deploying

I tried to do both of these for you and could not. The reasons are worth knowing.

### 1. Mark the key events

**This cannot be done until the events have fired at least once.** Google Analytics only lists events it has actually received in the last 28 days, and the only way to mark one is to click the star beside its name in that list. Right now your property has received seven events, all automatic: `click`, `file_download`, `first_visit`, `page_view`, `scroll`, `session_start`, `user_engagement`. There is no way to pre-register a name.

So: deploy, visit the site yourself and trigger each one, wait a day, then do this.

Go to **Admin, Events**, open the **Recent events** tab, and click the star beside each of:

- `notebook_open`
- `decoder_run_complete`
- `will_ai_conversation`
- `sponsor_click`

Those four represent someone genuinely engaging rather than glancing. Once starred, Analytics reports them as conversions and lets you see which pages and which traffic sources produce them.

To make them appear quickly, open the site and do the following once each: click a Colab link, run the decoder to completion, send three messages to WILL AI, and click the Patreon link.

### 2. Register the custom dimensions

Parameters are collected immediately but stay invisible in reports until registered. Unlike key events, these **can** be created before the event has ever fired.

Go to **Admin, Custom definitions, Create custom dimension** and add these, all with scope **Event**:

| Dimension name | Event parameter | What it gives you |
|---|---|---|
| Result section | `result_section` | **The most valuable one.** Which of the sixty predictions people open. |
| Action taken | `action` | Whether they read the derivation, ran the notebook, or opened Desmos |
| File name | `file_name` | Which paper |
| Galaxy | `galaxy` | Which of the 175 SPARC galaxies gets tested |
| Notebook name | `notebook_name` | Which calculation people run |
| Level | `level` | Which WILL AI engagement level people pick |

You asked for `file_name` and `galaxy`. I have listed four more because `result_section` and `action` are the payload of the predictions tracking you just asked for, and without them registered that data is collected but unreadable.

A standard property allows 50 custom dimensions, so six costs you nothing.

---

## A note on what this cannot see

People arriving at a PDF directly from a Google search are invisible. A PDF cannot run JavaScript, so nothing is recorded. Given that two thirds of your search impressions currently go to `WILL_RG_I.pdf` and `WILL_RG_II.pdf`, a large share of your real audience will never appear in Analytics at all.

Search Console is the only place that traffic shows up. The two tools measure different populations, which is why the numbers will never agree.
