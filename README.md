# Qutaiba W. Mantfaji — Portfolio

🌐 **Live Site**: [qutiba-w.github.io/portfolio](https://qutiba-w.github.io/portfolio)

Portfolio of Qutaiba Mantfaji — engineering systems, web apps, and AI tools built at AUIS and beyond.

## Design system

- **Colors** — sampled from `assets/profile-red.jpg`, the portrait against the crimson wall. Crimson `#9d0104` is the accent (it is 68% of that image); warm paper `#fdf5ec` and warm near-black `#120a09` are the two backgrounds; green survives only on Live badges, because status has to stay scannable and nothing in the photo can carry that without reading as the accent. Defined as CSS custom properties in `assets/theme.css` (`:root` = light, `[data-theme="dark"]` = dark). Every text pair clears WCAG AA.
- **Typography** — IBM Plex Sans (headings and body), IBM Plex Mono (specs, tags, labels).
- **Layout** — left-aligned, grid-based cards, borders over shadows, 4px/8px corner radii only.
- **Hero** — a full-bleed band reproducing the wall from `profile-red.jpg`, with the portrait masked into it so the photo has no visible edge. Fixed in both themes: a photograph does not have a dark mode.
- **Status badges** — Live (deployed and clickable), Local (built, not hosted), In Progress, Archive.

## Features

- **Dark/Light Mode** — system preference detection + manual toggle (`data-theme` attribute)
- **PWA** — service worker (`qutaiba-portfolio-v3` cache) + manifest for offline capability
- **Domain routing** — `selection.html` → category pages → case studies
- **Honest project status** — every Live badge links to a working deployment
- **Download CV** — `assets/resume_qutaiba.pdf`, linked from the nav and hero

## File structure

```
portfolio/
├── index.html              # Main page: hero, projects, skills, about, contact
├── selection.html          # Domain selector (Engineering / AI / Analytics)
├── manifest.json           # PWA manifest
├── sw.js                   # Service worker (caching + offline)
├── assets/
│   ├── theme.css           # Design system: color tokens, typography, components
│   ├── resume_qutaiba.pdf  # Downloadable CV
│   └── ...                 # Images, certificates, project screenshots
├── categories/             # Domain category pages
│   ├── engineering.html
│   ├── ai.html
│   └── analytics.html
└── projects/               # Case studies
    ├── cantilever-beam.html
    ├── sawtooth-generator.html
    ├── neuroforge.html
    ├── habit-forest.html
    ├── c2c-club.html
    └── ...                 # CAD/design archive case studies
```

## Tech stack

- **HTML5** — semantic structure
- **Tailwind CSS** (CDN) — utility classes mapped to CSS custom properties
- **Vanilla JavaScript** — theme toggle, scroll reveal, service worker registration
- **Google Fonts** — Space Grotesk, DM Sans, JetBrains Mono

## Contact

- **Email**: qutibax2@gmail.com
- **LinkedIn**: [Qutaiba W. Mantfaji](https://www.linkedin.com/in/qutaiba-w-mantfaji-47351b229/)
- **GitHub**: [qutiba-W](https://github.com/qutiba-W)

## License

MIT License — feel free to use as a template.
