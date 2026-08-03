# SEO Content Audit
## qutiba-w.github.io/portfolio (Qutaiba W. Mantfaji — personal portfolio)
### Date: 2026-08-03

---

## Scope note

This is a static, single-author portfolio site (16 HTML files, no CMS, no
backend, no e-commerce). Sections of the standard framework that assume a
business — local SEO, paid search, product/review schema, content
publishing cadence — are marked N/A rather than padded out. No automated
crawler/PageSpeed data was available in this environment, so Core Web
Vitals are assessed from the code itself (asset weights, render-blocking
scripts, image loading strategy) rather than a live Lighthouse run —
flagged explicitly wherever that distinction matters. Every other finding
below was verified directly against the 16 HTML files and `sw.js`, not
estimated.

Copy recommendations follow **BRAND-VOICE.md**: numbers over adjectives,
no hype language ("cutting-edge," "innovative solutions").

---

## SEO Health Score: 58/100

Strong on-page fundamentals (headings, alt text, mobile meta) undercut by
missing site-wide infrastructure (no sitemap, no robots.txt, no
structured data, inconsistent social-share tags) that costs nothing to
fix and is pure upside.

---

## On-Page SEO Checklist

### Title Tags
**Status: Needs Work** (structurally fine, but several under-use the space)

All 16 titles are unique, under 60 characters, and end with `— Qutaiba
Mantfaji` (consistent brand suffix — good). The issue is several are too
short and under-describe the page, wasting available SERP real estate:

| Page | Current | Length | Issue |
|---|---|---|---|
| `projects/c2c-club.html` | "C2C Club — Qutaiba Mantfaji" | 29 | No description of what it is |
| `projects/neuroforge.html` | "NeuroForge — Qutaiba Mantfaji" | 31 | No description |
| `projects/habit-forest.html` | "Habit Forest — Qutaiba Mantfaji" | 33 | No description |
| `projects/hr-analytics.html` | "HR Analytics — Qutaiba Mantfaji" | 33 | No description |

Recommended pattern (matches the site's own existing convention on
better-titled pages like `cantilever-beam.html`):
- "NeuroForge — Brain Training PWA — Qutaiba Mantfaji" (31 → 51 chars)
- "Habit Forest — Gamified Habit Tracker — Qutaiba Mantfaji" (33 → 58 chars)
- "HR Analytics — Attrition Prediction, 95% Accuracy — Qutaiba Mantfaji" (33 → 70, trim to "HR Analytics — Attrition Prediction — Qutaiba Mantfaji", 56 chars)
- "C2C Club — Campus-to-Career Club Platform — Qutaiba Mantfaji" (29 → 62, trim to "C2C Club — Firebase Event Platform — Qutaiba Mantfaji", 55 chars)

### Meta Descriptions
**Status: Needs Work**

Lengths range from 88 to 176 characters against a 150–160 target. Both
directions are represented:

**Too short (under-using the snippet, Google may pull filler text instead):**
| Page | Length |
|---|---|
| `categories/ai.html` | 88 |
| `categories/analytics.html` | 94 |
| `index.html` | 103 |
| `projects/neuroforge.html` | 103 |
| `selection.html` | 107 |
| `projects/ai-design-pipeline.html` | 110 |

**Too long (will truncate in search results, ~155–160 char cutoff):**
| Page | Length |
|---|---|
| `projects/cantilever-beam.html` | 176 |
| `projects/sawtooth-generator.html` | 164 |

Example fix, `index.html` (103 → target 150–160, in-voice — a number, not
an adjective):
- Current: *"Portfolio of Qutaiba Mantfaji — engineering systems, web apps, and AI tools built at AUIS and beyond."*
- Recommended: *"Portfolio of Qutaiba Mantfaji, a Mechanical Engineering student at AUIS — strain-gauge rigs, analog circuits, and AI-integrated web apps, each shipped with measured results and documentation."*

Example fix, `cantilever-beam.html` (176 → trim below 160):
- Current: *"A strain-gauge + accelerometer rig that turns a steel cantilever into a load monitor — recovering hanging mass to ~1.5 g and extracting the 5.83 Hz natural frequency via FFT."* (176 chars)
- Recommended: *"A strain-gauge + accelerometer rig that turns a steel cantilever into a load monitor — recovers hanging mass to ~1.5 g via FFT."* (129 chars — trims the redundant second clause; the natural-frequency detail already lives in the page body)

### Heading Hierarchy
**Status: Pass**

Every one of the 16 pages has exactly one `<h1>` — clean, no violations.
Case-study pages use `.section-label` (styled as a small mono eyebrow,
not a real heading tag) for subsection titles like "The Problem" / "The
Setup" rather than `<h2>`. That's a real gap: those subsections are
genuine content structure and currently invisible to heading-based
crawlers and screen-reader heading navigation (a screen reader user
jumping by heading can't get to "The Problem" the way they can on a page
using real `<h2>`s). Recommend converting `.section-label` to an actual
`<h2>` (or `<h3>` nested under the page's `<h1>`) wherever it introduces
a real content section, and keeping a separate class for the small
mono-labels that are purely decorative eyebrows (like above the hero
`<h1>` itself, which shouldn't become a heading).

### Image Optimization
**Status: Mixed — alt text Pass, file weight Needs Work**

- **Alt text: Pass.** Every `<img>` across all 16 pages has an `alt`
  attribute — verified by direct count (img-tag count == alt-attribute
  count on every file, zero mismatches). Decorative images correctly use
  `alt=""` with `aria-hidden="true"` (the Contact mascot).
- **File naming: Pass.** Descriptive filenames throughout
  (`beam-setup-photo.jpg`, `cert-asu-full.png`), no `IMG_0042.jpg`-style names.
- **Lazy loading: Pass.** Below-fold images consistently use `loading="lazy"`.
- **File weight: Needs Work.** Several images are unusually heavy for
  what they show:
  - `assets/lab-photo.jpg` — **3.87 MB**, a clear outlier (used at
    280px display width in the About section per the existing `figure`
    markup — a 280px-wide display image should not ship a multi-MB
    file). Highest-impact single fix available on this site.
  - The four new `pose-*.png` mascot illustrations run 738 KB–1.07 MB
    each despite being small decorative accents (110–220px display
    width). Re-exporting as compressed PNG or WebP would cut these by
    an estimated 70–90% with no visible quality loss at that display size.
  - Several `icon-*.png` and `logo-*.png` files sit at 300–700 KB for
    what are small inline icons/logos — same fix.
- **Responsive images: Present but inconsistent.** Only the hero photo
  (`profile-red.jpg`) uses `srcset`. No other page ships a responsive
  `srcset`/`<picture>`, including the large `lab-photo.jpg` — the exact
  image that would benefit most.

### Internal Linking
**Status: Pass**

Breadcrumbs (Home / Case Studies / Category) are present and consistent
on every category and project page. Anchor text is descriptive throughout
("Case Study →", "Browse case studies by domain →", "← Back to domains")
— no "click here" antipatterns. `index.html` → `selection.html` →
category pages → project pages forms a clean three-level hub structure
with no orphan pages found (every project page is reachable from its
category page, every category page from `selection.html`).

One gap: `agents.html` is intentionally unlinked from all navigation
(confirmed deliberate, not a bug) — meaning it's effectively invisible
to both users and crawlers unless someone has the direct URL. That's a
real SEO cost (it will never accumulate internal link equity or get
discovered via site crawl) but is a known, deliberate tradeoff, not
flagged as an error here.

### URL Structure
**Status: Pass**

Clean, lowercase, hyphenated, descriptive paths throughout
(`/projects/cantilever-beam.html`, `/categories/engineering.html`). No
query parameters, no uppercase, no underscores.

---

## Content Quality (E-E-A-T)

| Dimension | Score | Evidence |
|---|---|---|
| **Experience** | Strong | Real photos of the physical rigs (`beam-setup-photo.jpg`, `lecture-bridgestone-1.jpg`), specific measured results (~1.5 g, 5.83 Hz, 95% accuracy) that only someone who actually ran the experiment would have |
| **Expertise** | Present | Technical depth is real and consistent (moment of inertia calculations, FFT methodology, op-amp topology) but appropriately scoped to a student's actual work — no overclaiming |
| **Authoritativeness** | Weak | No backlinks, no external mentions, no author/Person schema, credentials are self-reported (Coursera certs, linked but not third-party-verified on-page) |
| **Trustworthiness** | Present | HTTPS via GitHub Pages, real working contact email and social links, and the site's own explicit honesty convention (Live/Local/Archive badges) — but no structured data confirming identity (see Schema Markup below) |

---

## Keyword Analysis

- **Primary keyword (implicit): "Qutaiba Mantfaji"** — this is fundamentally a
  navigational/personal-brand target, not a competitive commercial keyword.
  The name appears in every title tag, which is correct for that intent.
- **Search intent alignment:** Correct — a recruiter or collaborator
  searching the name expects to land exactly here, and does.
- **Secondary opportunity, currently unclaimed:** long-tail informational
  searches tied to specific real projects — e.g. "cantilever beam strain
  gauge Arduino project," "sawtooth wave generator schmitt trigger
  circuit," "HR attrition random forest classifier." These terms appear
  naturally in the case-study body copy already, but none of the page
  `<title>` tags or meta descriptions currently lead with the technique
  name before the project's proper noun — e.g. `sawtooth-generator.html`'s
  title is "Sawtooth Wave Generator" (good, keyword-first) but
  `cantilever-beam.html` leads with the branded system name
  "Cantilever Beam Instrumentation System" rather than a more
  searched phrase like "Strain Gauge Cantilever Beam Project." Minor;
  not worth renaming pages over, but worth keeping in mind for any new
  case study.
- **Keyword stuffing:** None found — good.

---

## Technical SEO

### Robots.txt — **Missing**
No `/robots.txt` file exists at the repo root. Low individual impact
(GitHub Pages serves everything publicly by default with no accidental
blocking to worry about), but it's also the conventional place to point
crawlers at the sitemap, so it's a prerequisite for the sitemap fix below.

### XML Sitemap — **Missing**
No `/sitemap.xml`. For a 16-page site this won't make-or-break discovery
(internal linking alone lets crawlers reach every page), but it's a
5-minute addition that gives Google explicit, accurate `lastmod` signals
instead of relying on crawl frequency — free upside.

### Canonical Tags — **Missing on every page**
Zero `<link rel="canonical">` tags found across all 16 files. Low risk
today (no duplicate-content sources like URL parameters or a `www`/non-`www`
split exist for this site), but it's a one-line, zero-cost addition per
page and removes any future risk if the site is ever mirrored or proxied.

### Open Graph / Social Share Tags — **Inconsistent (real gap)**
- `og:image` present on only **2 of 16 pages** (`index.html`,
  `tire-safety-lecture.html`). The other 14 — every other project and
  category page — will show a blank or platform-default preview card
  when shared on LinkedIn, Slack, or Twitter/X. Every project page
  already has a relevant image on-page (`neuroforge-live.png`,
  `habit-forest-live.png`, `beam-setup-photo.jpg`, etc.) that could be
  reused as `og:image` with zero new asset work.
- `og:url` present on only **1 of 16 pages** (`index.html`). Without it,
  shared links can resolve their canonical URL incorrectly on some
  platforms. Cheap, mechanical fix — same pattern as the cache-busting
  version bumps already used site-wide, just per-page URLs instead.

### Structured Data (JSON-LD) — **None present**
No schema markup anywhere on the site. For a personal portfolio, the two
schema types with real payoff:
- **Person** schema on `index.html` (name, jobTitle "Mechanical
  Engineering Student", alumniOf AUIS, sameAs → GitHub/LinkedIn) — this
  is the single highest-value schema addition here, since it directly
  reinforces the personal-brand/navigational search intent identified
  above and can produce a knowledge-panel-style rich result for
  name searches.
- **BreadcrumbList** schema on every category/project page — the visual
  breadcrumb already exists in the markup; this just makes it
  machine-readable too, and is close to copy-paste across all 16 pages
  given how identical the breadcrumb structure already is.
- Product/Review/LocalBusiness/FAQ schema: **N/A** — none of these fit a
  personal portfolio.

### Favicon — **Missing**
No favicon reference found anywhere, and no favicon file found in
`assets/`. Doesn't move rankings, but Google does show favicons in
mobile search results and browser tabs — a blank/generic tab icon is a
small but real polish gap on an otherwise carefully finished site.

### Mobile-Friendliness — **Pass**
Correct `viewport` meta tag on all 16 pages, verified responsive Tailwind
classes throughout (`sm:`/`md:` breakpoints used consistently), no fixed-width
layouts found.

### Core Web Vitals — **Assessed from code, not measured live**
No Lighthouse/PageSpeed run was available in this environment, so this
is a qualitative read of the code, not a scored metric:
- **Render-blocking risk:** `<script src="https://cdn.tailwindcss.com">`
  loads the full Tailwind JIT compiler in the browser and is not
  deferred. Tailwind's own console warning fires on every page load:
  *"cdn.tailwindcss.com should not be used in production."* This is the
  single highest-impact technical fix available — it means every page's
  final styling depends on a third-party script executing, and ships a
  far larger payload than a compiled, purged production stylesheet
  would. A build-step Tailwind compile (even a simple one, no framework
  required) would likely be the single biggest Core Web Vitals win on
  this site.
- **Image weight risk:** covered above (`lab-photo.jpg` at 3.87 MB is
  the standout). On a page where that image is in the initial viewport,
  this would directly hurt LCP; as currently used (280px display width,
  inside the About section, likely below the fold on most viewports)
  the practical damage is smaller but the file is still needlessly heavy
  to transfer.
- **No CDN/compression signals evaluated** — GitHub Pages serves with
  gzip by default, so this is likely fine, but wasn't independently verified.
- **Subresource Integrity (security-adjacent, not a ranking factor):**
  neither the Tailwind CDN script nor the Google Fonts stylesheet link
  carries an `integrity`/`crossorigin` attribute on any page. If either
  CDN were compromised, the injected script/CSS would run with no
  browser-side verification. This is a second, independent reason (on
  top of the performance case above) to move off `cdn.tailwindcss.com` —
  a locally-built stylesheet has no such exposure at all. The Google
  Fonts `<link>` is lower-risk (CSS-only, not executable) but could still
  carry `integrity` cheaply if it's kept.

---

## Content Gap Analysis

For a personal portfolio, "content gaps" mostly means missing metadata
infrastructure (covered above) rather than missing topics — the existing
case studies already cover the real breadth of the person's actual work.
One legitimate gap: there is no single page that answers "who is this
person and are they available for X" as directly as a recruiter skimming
search results would want — that job is currently split across the
hero, About section, and Contact section of `index.html`, which is fine
for a human visitor but means no single meta description can capture
availability + specialty + proof in one shot. Not a fix so much as a
constraint to keep in mind when writing the `index.html` meta description.

---

## Schema Markup

| Schema Type | Applicable? | Status |
|---|---|---|
| Person | Yes | Missing |
| BreadcrumbList | Yes | Missing (visual breadcrumbs exist, not marked up) |
| WebSite/SearchAction | Marginal (16-page site, a search box is overkill) | Not recommended |
| Organization | No — individual, not an org | N/A |
| Article | Debatable for case studies | Optional, lower priority than Person/Breadcrumb |
| Product / Review / LocalBusiness / FAQ / Event | No | N/A |

---

## Prioritized Recommendations

### Critical (fix immediately — cheap, zero risk, real upside)
1. Add `og:image` (reusing each page's existing hero image) and `og:url`
   to the 14 pages currently missing them — fixes broken/blank social
   share previews site-wide.
2. Add a `robots.txt` and `sitemap.xml` at the repo root — both are
   static files, no build step required, ~15 minutes total.

### High Priority (this month)
1. Move off `cdn.tailwindcss.com` to a compiled, purged production
   stylesheet — the single biggest legitimate performance/Core-Web-Vitals
   lever available, and removes a console warning that's currently firing
   on every single page load.
2. Add Person schema to `index.html` and BreadcrumbList schema to the
   14 category/project pages that already have a visual breadcrumb.
3. Rewrite the 6 meta descriptions under 110 characters and the 2 over
   160 characters to land in the 150–160 range (drafts above for
   `index.html` and `cantilever-beam.html`; same pattern applies to the rest).
4. Compress `lab-photo.jpg` (3.87 MB → should be well under 200 KB at
   its 280px display width) and the four `pose-*.png` mascot images.

### Medium Priority (this quarter)
1. Lengthen the 4 shortest title tags (`c2c-club`, `neuroforge`,
   `habit-forest`, `hr-analytics`) to actually describe what the project
   is, not just its proper-noun name.
2. Convert `.section-label` to real `<h2>`/`<h3>` tags wherever it
   introduces genuine content structure (case-study subsections), while
   keeping a separate non-heading class for purely decorative eyebrows.
3. Add `<link rel="canonical">` to all 16 pages.

### Low Priority (when time allows)
1. Add a favicon.
2. Add `srcset` to other large images beyond the hero photo, matching
   the pattern already established there.
