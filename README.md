# Gabilan Cleaning Corp — Website Redesign

A premium, mobile-first homepage concept for **Gabilan Cleaning Corp**, a local commercial
cleaning company based in Dutchess County, New York.

Live site (GitHub Pages): https://asifiqbalgads.github.io/gabilancleaningcorp.com/

## Brand Assets (Original)

- **Logo:** `assets/logo/gabilan-logo-original.jpg` — the exact logo used on the live site
  (blue swirl + sun + wordmark on its native gray background). No replacement logo was created.
- **Brand colors (sampled from the original logo file):**
  - Royal blue **#2230C4** — primary / hero background
  - Sun yellow **#F8D749** — accent / CTA
  - Logo native gray **#A0A0A0** — logo tile background
  - Darker shades of the brand blue (#1B26A0, #141B6E) are used for depth in dark sections.
- **Photography:** real photos from the live site (fleet vehicles, team at work — janitorial,
  window, carpet, construction, exterior cleaning), mirrored locally under `assets/images/`.

## Design

- Clean, structured, service-industry professional — not fashion/editorial.
- **Typography:** Barlow Condensed (headings, fleet-livery style) + Inter (body).
- Blue hero with yellow border rule, real fleet photo, call-first CTAs, trust values bar,
  photo service grid, 4-step process, FAQ accordion, contact + quote form.
- Fully responsive (mobile-first), sticky call bar on phones, accessible FAQ/nav (ARIA,
  keyboard-friendly), `prefers-reduced-motion` respected.

## Project Structure

```
├── index.html          # Homepage (GitHub Pages entry point)
├── css/style.css       # Design system & responsive styles (mobile-first)
├── js/script.js        # Mobile nav, FAQ accordion, quote-form mailto, footer year
├── assets/
│   ├── images/         # Real photos from the live site (optimized JPEG)
│   └── logo/           # Original Gabilan Cleaning Corp logo (unchanged)
├── .nojekyll           # Serve static files as-is on GitHub Pages
└── README.md
```

## Notes

- `<meta name="robots" content="noindex, nofollow">` is set so this concept does not compete
  with the business's existing Squarespace site in search results. Remove it before any
  production launch.
- The exact hero/background CSS hex of the live Squarespace site could not be retrieved
  (Stylesheet not publicly accessible from the build sandbox); the hero therefore uses the
  exact brand blue sampled from the original logo file (#2230C4).
- The contact form has **no backend**; submitting opens the visitor's email client via a
  `mailto:` link addressed to `gabriel@gabilancleaningcorp.com`. No fake success messages
  are shown. For true form handling, connect a service such as Formspree or Basin.
- Live-site photos were re-fetched via the public image index and optimized locally because
  direct CDN download is blocked from the build environment. Hard Floor Cleaning has no
  public photo available, so it ships as an icon card.

## Deployment (GitHub Pages)

Static site — no build step. Enable **Settings → Pages → Deploy from a branch →
`main` / root**. `index.html` at the repository root is served directly.
