# Copy Analysis & Suggestions: qutiba-w.github.io/portfolio
**Date:** 2026-08-03
**Page Type:** Personal portfolio (homepage + 3 category index pages + 10 project case studies) — not a SaaS/e-commerce/pricing page, so several stock frameworks below are marked N/A rather than force-fit.
**Copy Score:** 66/100

## A note before the scores

This skill's default rubric rewards persuasion tactics (urgency, hard
CTAs, emotional amplification) that would directly contradict
**BRAND-VOICE.md**, which this site already follows consistently: no
hype adjectives, no exclamation marks, evidence over emotion, honest
about status rather than oversold. Where the rubric and the established
voice conflict, this report follows the voice — a low "Emotion" or
"Persuasion" score below is often the voice working as intended, not a
defect, and is called out explicitly rather than "fixed" by making the
copy louder. Pricing-page, e-commerce, and urgency/color-psychology CTA
guidance from the skill template is dropped entirely as N/A for a static
portfolio.

---

## Executive Summary

The existing copy is unusually strong for what it is: specific, honest,
and consistent, with real measured numbers doing the work that
adjectives usually do on portfolio sites. The actual gaps are narrow and
mechanical, not tonal — a handful of meta descriptions run too short or
too long for search snippets (already flagged in SEO-AUDIT.md), and the
Engineering category intro is the one place on the site that reads as a
flat feature list instead of using the em-dash-plus-proof rhythm the
other two category pages already use. Nothing here calls for a voice
change; it calls for finishing what's already 90% consistent.

---

## Voice & Tone Profile

| Dimension | Rating (1–5) | Note |
|---|---|---|
| Formality | 3.5/5 | Professional but uses contractions; never slang |
| Emotion | 2/5 | Deliberately low — evidence-first by design, see BRAND-VOICE.md |
| Complexity | 3.5/5 | Technical but self-explaining (always states the "why") |
| Humor | 1.5/5 | Dry, understated; occasional aphoristic closer, never a joke |
| Authority | 3.5/5 | Expert-adjacent but scoped honestly to a student's real work |

This matches BRAND-VOICE.md's existing dimension scores closely — no
inconsistency found between the two analyses.

---

## Score Breakdown

| Dimension | Score | Justification |
|---|---|---|
| Clarity | 8/10 | Plain language throughout; jargon always explained in the same breath |
| Persuasion | 6/10 | Understated by design — doesn't chase the reader, which fits a portfolio audience (recruiters, collaborators) better than a hard sell would |
| Specificity | 9/10 | Real, unrounded numbers everywhere (~1.5 g, 5.83 Hz, 95%, 80% pressure threshold) |
| Emotion | 4/10 | Intentionally low per brand voice; raising this via typical tactics (exclamation marks, "amazing," urgency) would break the voice, not improve it |
| Action | 6/10 | CTAs are clear and correctly worded, but some pages (category pages) have no forward CTA beyond the persistent header nav — see CTA section |

**Total: 33/50 → 66/100**

---

## Value Proposition Canvas

```
TARGET CUSTOMER: Recruiters, hiring managers, and collaborators evaluating
                 a Mechanical Engineering student for internships/projects
PROBLEM:         Most student portfolios are unverifiable claims — "I'm
                 passionate about X" with no way to check if it's true
SOLUTION:        Every project ships with a specific measured result and
                 enough documentation to verify it
UNIQUE MECHANISM: Numbers instead of adjectives, as a site-wide convention
                 (status badges, measured results, explained decisions)
KEY BENEFIT:     A reader can verify competence in under a minute, per project
PROOF:           ~1.5 g mass recovery, 5.83 Hz natural frequency, 95%
                 classifier accuracy, a real delivered Bridgestone session
```

No missing elements — this canvas was already legible directly from the
existing copy, which is itself a good sign.

---

## Headline Recommendations

**Current H1 (homepage): "I build things that work."**

| Criteria | Score | Note |
|---|---|---|
| Clarity | 9/10 | Immediately understandable |
| Specificity | 4/10 | Deliberately non-specific — the subhead one line down carries the specifics (AUIS, beams, circuits, web apps) |
| Relevance | 8/10 | Speaks directly to what a technical evaluator wants: does it work? |
| Differentiation | 7/10 | Plain confidence stands out against the typical "Hi, I'm X, a passionate developer" student-portfolio opener |
| Emotion | 5/10 | Quiet confidence, not an emotional appeal — matches voice |

**Recommendation: keep it.** This headline already tests well against
its own voice; the alternatives below are reference options only, not a
suggested replacement — swapping a working, distinctive headline for a
generic-framework one would be a step backward here.

*Swipe file (reference only, not recommended over the current line):*
1. "I build things, then prove they work." (leans harder into the evidence theme)
2. "Engineering student. Builder of real things." (already listed as Alt B in the page's own HTML comments — reasonable, more literal)
3. "Mechanical engineer who also ships software." (Alt C in the page's own comments — clearest for a recruiter skimming fast, least distinctive)

---

## Section-by-Section Copy Suggestions

### Category intro: Engineering (the one real gap)
**Current:**
> "Structural instrumentation, analog circuit design, parametric CAD, and CNC laser fabrication."

**Issue:** This is the only one of the three category intros that's a
bare feature list with no closing clause — both AI & Software ("each
built to run, not just to show") and Analytics ("finding signal in
real-world datasets") already use an em-dash-plus-proof closer. This is
the exact gap BRAND-VOICE.md flagged as the site's flattest copy.

**Recommended:**
> "Structural instrumentation, analog circuit design, parametric CAD, and CNC laser fabrication — each one measured, not just modeled."

**Why:** Reuses the site's own established rhythm (list → em-dash →
proof-oriented closer) and the exact tension the Cantilever Beam case
study is built around ("measured, not modeled") — so it's not a new
idea, just extending one the site already proved works.

### CTA gap on category pages
**Current:** Category pages (`engineering.html`, `ai.html`,
`analytics.html`) end with only "← Back to domains" — no forward path.
The persistent sticky header does carry a Contact link on every page, so
this is a soft gap, not a broken one.

**Recommended (optional, low priority):** add one plain-text line above
the divider, in voice:
> "Something here worth building on? → [Contact](#contact)"

**Why:** Matches the existing plain-verb CTA style exactly (no
urgency, no exclamation point) and gives a reader who's browsed an
entire category a next step besides the browser back button.

---

## CTA Audit

| CTA | Location | Assessment |
|---|---|---|
| "See My Projects" | Hero | Good — first-person-adjacent, clear, no change needed |
| "Download CV" | Hero, header | Good — literal, no friction language needed |
| "Case Study →" | Every project card | Good — consistent, scannable, correct use of arrow as a directional cue not decoration |
| "Browse case studies by domain →" | Homepage Projects section | Good |
| "← Back to domains" / "← Back to all projects" | Category/selection pages | Good, but see CTA gap note above — consider pairing with a forward link, not replacing |
| "→ Live Site" / "→ Case Study" | Live project cards | Good — the dual-link pattern (live demo vs. write-up) is clear and not redundant |

No CTA on the site uses generic text ("Click Here," "Submit," "Learn
More") — this was already checked and is clean. **No changes recommended
to CTA wording itself** — the only gap is the missing forward CTA on
category pages, addressed above.

---

## Before/After Examples

**1. Category intro (Engineering) — see above.**

**2. Meta description, `index.html` (103 → target 150–160):**
- Before: *"Portfolio of Qutaiba Mantfaji — engineering systems, web apps, and AI tools built at AUIS and beyond."*
- After: *"Portfolio of Qutaiba Mantfaji, a Mechanical Engineering student at AUIS — strain-gauge rigs, analog circuits, and AI-integrated web apps, each shipped with measured results and documentation."*
- Why: adds the "who" (AUIS, Mechanical Engineering) that a name-search snippet needs, without a single adjective that isn't backed by the site's own content.

**3. Meta description, `categories/ai.html` (88 → target 150–160):**
- Before: *"Web apps, PWAs, and AI-integrated tools — from brain training games to club platforms."*
- After: *"Web apps, PWAs, and AI-integrated tools — from a six-game brain-training PWA to a Firestore-backed club platform, each one live and documented."*

**4. Meta description, `categories/analytics.html` (94 → target 150–160):**
- Before: *"Data analysis and predictive modeling with Python — EDA, classification, feature importance."*
- After: *"Data analysis and predictive modeling with Python — EDA, classification, and feature importance, including a Random Forest model at 95% accuracy."*

**5. Meta description, `projects/cantilever-beam.html` (176 → trim below 160):**
- Before: *"A strain-gauge + accelerometer rig that turns a steel cantilever into a load monitor — recovering hanging mass to ~1.5 g and extracting the 5.83 Hz natural frequency via FFT."*
- After: *"A strain-gauge and accelerometer rig that turns a steel cantilever into a load monitor — recovers hanging mass to within ~1.5 g via FFT."*

---

## Swipe File

**Meta description rewrites (remaining flagged pages, all in-voice, no new claims):**
- `projects/neuroforge.html`: *"Brain training PWA with six games and full offline support — a service worker caches everything, so it runs in the browser with no install required."*
- `selection.html`: *"Browse case studies by domain — engineering, AI and software, and data analytics — each documented with real measured results, not just descriptions."*
- `projects/ai-design-pipeline.html`: *"Multi-agent LLM workflow that parses vague technical requirements and outputs structured, ready-to-use engineering specifications — no manual reformatting."*
- `projects/sawtooth-generator.html` (164 → trim): *"Analog op-amp circuit generating asymmetric sawtooth waveforms — Schmitt trigger driving an integrator through a diode RC network on breadboard."*

**CTA alternatives:** none recommended — existing CTAs already pass review (see CTA Audit above). Generating alternatives here would just be manufacturing change for its own sake.

**Pricing page headlines / social proof framing / color psychology:** N/A — no pricing page, and the "social proof" slot (a companies/logos bar) was explicitly ruled out by the user for this site; not reintroduced here even as a suggestion.

---

## Implementation Priority

### High priority (mechanical, zero voice risk)
1. Apply the 8 meta description rewrites above (fixes the SEO-AUDIT.md length findings and this report's drafts are ready to paste in directly).
2. Fix the Engineering category intro — one clause added, matches existing site pattern exactly.

### Low priority (optional polish)
1. Add the single forward CTA line to the three category pages, only if it doesn't feel redundant next to the persistent header Contact link — judgment call, not a real gap.

### Not recommended
1. Changing the homepage H1 — already strong, alternatives are reference-only.
2. Adding urgency, emotional amplification, or a companies/social-proof bar — would work against the established voice and, for the logos bar, against explicit prior instruction.
