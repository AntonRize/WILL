# Search Console and Analytics baseline, 2 August 2026

Recorded the day after the SEO changes went live, so this is the **before** picture. Compare against it in four to six weeks to see whether the changes worked.

Search Console data covers 1 May to 31 July 2026. Analytics covers 5 July to 1 August 2026. The fixes deployed on 28 July, so essentially none of this reflects them.

---

## 1. The headline numbers

| Measure | Value | What it means |
|---|---|---|
| Clicks from Google, 3 months | **9** | Roughly one visitor every ten days |
| Impressions, 3 months | 1,740 | The site was shown in results 1,740 times |
| Click-through rate | **0.5%** | Of every 200 people who saw it, one clicked |
| Average position | 13.5 | Bottom of page two |
| Pages indexed | **30** | Out of about 199 Google knows about |
| Pages not indexed | **169** | |
| Google organic users, 28 days | **2** | Two people arrived from a Google search in a month |

---

## 2. Google currently sees a PDF archive, not a website

This is the most consequential finding. Two thirds of everything Google showed was a PDF.

| Page | Impressions | Clicks |
|---|---|---|
| `documents/WILL_RG_I.pdf` | 832 | 4 |
| `documents/WILL_RG_II.pdf` | 327 | 2 |
| `/results/` | 130 | 1 |
| `/galactic_dynamics/` | **161** | **0** |
| `/` (homepage) | **128** | **0** |
| `/will-ai/` | 112 | 0 |
| `/logos_map/` | 51 | 0 |
| `/about/` | 38 | 0 |
| `/predictions/` | 33 | 1 |

**1,159 of 1,740 impressions went to two PDF files.** That is 67%.

Why this matters: a PDF has no navigation, so a reader who lands in one cannot get to the rest of the site. It cannot be styled, its snippet is whatever Google extracts, and it shows a PDF label in results, which lowers clicks. Your actual web pages are being shown far less than your documents.

The other half of the problem: `/galactic_dynamics/` was shown 161 times and clicked zero times. The homepage, 128 times and zero clicks. Whatever Google was displaying for those pages did not persuade anyone. That is a title and description problem, which is what the recent work addressed.

---

## 3. Why 169 pages are not indexed

| Reason | Pages | Comment |
|---|---|---|
| Discovered, currently not indexed | **131** | Google found the URL and chose not to crawl it |
| Blocked by robots.txt | 19 | The old `/assistant/logs/` block |
| Not found (404) | 10 | Worth finding and fixing |
| Crawled, currently not indexed | 7 | Crawled and judged not worth listing |
| Soft 404 | 1 | A page returning "OK" but looking empty |
| Duplicate without a chosen canonical | 1 | |
| Excluded by noindex | **0** | Google has not yet seen the new noindex tags |

"Discovered, currently not indexed" at 131 is the dominant number. It means Google was told about these URLs through the sitemap, looked at them, and decided they were not worth fetching. That is close to the 100 chat logs plus the other low-value URLs, and it is exactly the problem the recent changes target: the sitemap was offering Google a large volume of pages it did not want.

The zero against "Excluded by noindex" confirms the timing. Google has not recrawled since the change.

---

## 4. What people actually searched

| Query | Impressions | Clicks |
|---|---|---|
| arccos triangle escape probability legs hypotenuse difference | **144** | 0 |
| dirac fine-structure formula hydrogen energy levels | 52 | 0 |
| relational geometry | 41 | 1 |
| will ai | 21 | 0 |
| will ml | 15 | 0 |
| galactic dynamics | 10 | 0 |
| ai will | 5 | 0 |

Only 38 distinct queries in three months.

Three things stand out. The single largest source of impressions is a random geometry homework question that has nothing to do with the research, almost certainly matching text inside a chat log. Several queries are people looking for something called "will ai" or "will ml", which is a naming collision with the English word rather than genuine interest. And "galactic dynamics", the term you most want, produced ten impressions and no clicks.

---

## 5. Analytics: the audience is smaller than it looks

| Measure | Value |
|---|---|
| Active users, 28 days | 87 |
| New users | 82 |
| Average engagement time | 1m 53s |

| Source | Users | Sessions |
|---|---|---|
| direct, no referrer | **84** | 113 |
| google organic | **2** | 12 |
| cn.bing.com | | 3 |
| facebook | 1 | 1 |

| City | Active users |
|---|---|
| **Singapore** | **66 of 87** |
| Brisbane | 3 |
| Ciudad Juarez | 2 |
| Columbia | 2 |
| everything else | 1 each |

**Seventy-six percent of your users are recorded as being in Singapore, and ninety-seven percent arrived with no referrer.** That combination is not what a real readership looks like. It is the signature of automated traffic: cloud data centres in Singapore host a large share of the world's scraping and monitoring infrastructure.

Worth checking directly: your WILL-AI proxy runs on Vercel, which has a Singapore region. If anything in that pipeline loads pages from willrg.com in a way that runs JavaScript, it would be counted here.

Until that is settled, treat the real human audience as roughly the twenty non-Singapore users, not eighty-seven.

Engagement time of 1m 53s is genuinely decent. The people who do arrive are reading.

Bounce rate by page: Predictions 76.9%, Galactic Dynamics 55.6%, homepage 53.8%, WILL-AI 48.1%, Documents 47.4%, conversation logs 35.3%.

---

## 6. What to do

**Now**

1. In Search Console, open each of the 404 and Soft 404 rows and note the URLs. Ten broken links is small enough to fix by hand.
2. Resubmit the sitemap. It should have dropped from about 190 URLs to about 90.
3. Use URL Inspection to request indexing for `/`, `/predictions/`, `/galactic_dynamics/`, `/relativistic-foundations/` and `/rom/`.
4. In Analytics, create a filter or comparison that excludes Singapore, so you can see your real numbers.
5. Check whether the WILL-AI proxy is loading pages from willrg.com.

**Over the next month**

6. Watch "Discovered, currently not indexed" fall from 131. That is the single best indicator that the sitemap cleanup worked.
7. Watch "Excluded by noindex" rise from 0. That means Google has read the new tags on the log pages and is dropping them properly.
8. Watch click-through rate move off 0.5%. The rewritten titles and descriptions are aimed squarely at this number.

**The structural issue**

9. Your two main PDFs pull two thirds of all impressions between them. That traffic is landing in documents with no way back to the site. The fix is to publish the substance of Part I and Part II as HTML pages as well, keeping the PDFs for download. An HTML page can carry navigation, internal links and a proper description, and it can be updated without breaking anything.

---

## Compare against this on 1 September 2026

| Measure | 2 Aug 2026 | Target direction |
|---|---|---|
| Pages indexed | 30 | up |
| Discovered, not indexed | 131 | **down** |
| Excluded by noindex | 0 | up, then stable |
| Blocked by robots.txt | 19 | down to 0 |
| Click-through rate | 0.5% | up |
| Average position | 13.5 | down (lower is better) |
| Google organic users, 28 days | 2 | up |
