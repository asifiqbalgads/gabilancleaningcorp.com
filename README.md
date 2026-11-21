# Gabilan Cleaning Corp — Website Redesign

A premium, mobile-first homepage concept for **Gabilan Cleaning Corp**, a local commercial
cleaning company based in Dutchess County, New York.

Live site (GitHub Pages): https://asifiqbalgads.github.io/gabilancleaningcorp.com/

## Overview

- **Business:** Gabilan Cleaning Corp — janitorial &amp; facility services for all industries
- **Location:** Dutchess County, NY (Poughkeepsie area)
- **Phone:** (845) 721-6619
- **Email:** gabriel@gabilancleaningcorp.com
- **Services:** Janitorial · Window · Carpet · Hard Floor · Construction · Exterior Building Cleaning
- **Social:** [Instagram](https://www.instagram.com/gabilan.cleaning.corp/) · [Facebook](https://www.facebook.com/gabilancleaningcorp/)

## Project Structure

```
├── index.html          # Homepage (GitHub Pages entry point)
├── css/style.css       # Design system & responsive styles (mobile-first)
├── js/script.js        # Mobile nav, FAQ accordion, quote-form mailto, footer year
├── assets/
│   ├── images/         # Photography (AI-generated conceptual visuals)
│   ├── logo/           # Gabilan Cleaning Corp SVG logo & mark
├── .nojekyll           # Serve static files as-is on GitHub Pages
└── README.md
```

## Design Direction

- **Palette:** Deep spruce green `#0e3527`, warm ivory `#f5f1e6`, brushed brass `#c9a452`
- **Typography:** Fraunces (editorial serif display) + Inter (body)
- **Style:** Editorial, industry-specific — arch-framed hero, rotating badge, numbered
  service grid, full-bleed service-area band. No generic template patterns.

## Notes

- `<meta name="robots" content="noindex, nofollow">` is set so this concept does not compete
  with the business's existing Squarespace site in search results. Remove it before any
  production launch.
- The contact form has **no backend**; submitting opens the visitor's email client via a
  `mailto:` link addressed to `gabriel@gabilancleaningcorp.com`. No fake success messages
  are shown. For true form handling, connect a service such as Formspree or Basin.
- Business facts (services, contact details, values) are taken from the public
  gabilancleaningcorp.com site. Photography in `assets/images/` is AI-generated conceptual
  imagery, not actual customer job photos.
- Original Squarespace CDN images could not be re-hosted here, so optimized local assets
  were created instead.

## Deployment (GitHub Pages)

Static site — no build step. Enable **Settings → Pages → Deploy from a branch →
`main` / root**. `index.html` at the repository root is served directly.
