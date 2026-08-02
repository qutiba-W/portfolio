# Qutaiba W. Mantfaji — Portfolio

🌐 **Live Site**: [qutiba-w.github.io/portfolio](https://qutiba-w.github.io/portfolio)

Portfolio of Qutaiba Mantfaji — engineering systems, web apps, and AI tools built at AUIS and beyond.

## Design system

- **Colors** — sampled from `assets/profile-red.jpg`, the portrait against the crimson wall. Crimson `#9d0104` is the accent (it is 68% of that image); warm paper `#fdf5ec` and warm near-black `#120a09` are the two backgrounds; green survives only on Live badges, because status has to stay scannable and nothing in the photo can carry that without reading as the accent. Defined as CSS custom properties in `assets/theme.css` (`:root` = light, `[data-theme="dark"]` = dark). Every text pair clears WCAG AA.
- **Typography** — Archivo for display, run wide on its width axis so headlines read like a machine faceplate; Newsreader (a serif) for body; JetBrains Mono for readings, tags and labels. The serif is in the *body*, not the display — the inversion of the usual pairing, because what separates this work from other student work is that it gets written up, and a paper face says that before a word is read.
- **The reading is the unit of content** — every project leads with what was actually measured on it: `5.83 Hz`, `±12 V`, `80%`. Projects with no measurement show `—` and say `not measured` rather than borrowing a figure from somewhere else. The blank ones are what make the filled ones worth believing.
- **Layout** — left-aligned, grid-based cards, borders over shadows, 4px/8px corner radii only.
- **Landing page** — a single-screen dashboard, not a document. The portrait is the left panel, fading down into its own wall; the right side holds the project tiles and three compact panels. On desktop the page itself never scrolls: opening a project draws its detail *over* the tile panel, so the page height cannot change. Panels that outgrow their box scroll inside it — "no scrolling" must never become "content hidden". Below 1024px it falls back to ordinary flow, because a phone cannot honestly fit this.
- **Tiles carry the reading, nothing else** — a number, a method, a name, a status. Prose lives in the detail view and the case study. Each detail panel has an empty `.detail-demo` slot for a live widget later (FFT trace, waveform, pressure check); it is hidden while empty so it costs nothing.
- **Status badges** — Live (deployed and clickable), Local (built, not hosted), In Progress, Archive.

## Features

- **Dark/Light Mode** — system preference detection + manual toggle (`data-theme` attribute)
- **PWA** — service worker (`qutaiba-portfolio-v8` cache) + manifest for offline capability. Bump both the cache name in `sw.js` and the `?v=` on `theme.css` in every page whenever the CSS changes, or returning visitors keep the old stylesheet.
- **Domain routing** — `selection.html` → category pages → case studies
- **Honest project status** — every Live badge links to a working deployment
- **Download CV** — `assets/resume_qutaiba.pdf`, linked from the identity panel

## File structure

```
portfolio/
├── index.html              # Single-screen dashboard: identity, project tiles, detail view
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
    ├── tire-safety-lecture.html
    ├── c2c-club.html
    └── ...                 # CAD/design archive case studies
```

## Tech stack

- **HTML5** — semantic structure
- **Tailwind CSS** (CDN) — utility classes mapped to CSS custom properties
- **Vanilla JavaScript** — theme toggle, tile detail view, service worker registration
- **Google Fonts** — Archivo (display), Newsreader (body), JetBrains Mono (readings)

## Contact

- **Email**: qutibax2@gmail.com
- **LinkedIn**: [Qutaiba W. Mantfaji](https://www.linkedin.com/in/qutaiba-w-mantfaji-47351b229/)
- **GitHub**: [qutiba-W](https://github.com/qutiba-W)

## License

MIT License — feel free to use as a template.
