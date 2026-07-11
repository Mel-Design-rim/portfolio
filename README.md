# MEL DESIGN — Portfolio

> TOP SECRET // CASE #2026 — a tech-noir investigation-themed portfolio.

Personal portfolio of **Mel Design Rim** (Cheikh Malaynine Aboubacrin) — Fullstack Developer & Digital Designer based in Nouakchott, Mauritania.

**Design language:** dark evidence-board aesthetic — HUD overlays, custom cursor, red investigation thread drawn on scroll, decryption loader and an "EVIDENCE BOARD" project slider.

## Tech Stack

- [Next.js](https://nextjs.org) (App Router) + TypeScript
- [GSAP](https://gsap.com) + ScrollTrigger — reveals, thread drawing, entrance animations
- [Lenis](https://lenis.darkroom.engineering) — smooth scrolling
- `next/font` — Playfair Display, Rethink Sans, Space Mono
- Pure CSS (custom properties, no UI framework)

## Project Structure

```
app/
  layout.tsx        # fonts + metadata
  page.tsx          # page composition
  globals.css       # full tech-noir theme
components/
  Effects.tsx       # Lenis + scroll reveals + marquee
  Loader.tsx        # decryption loader (curtains, terminal, counter)
  Hud.tsx           # fixed HUD corners (REC, timecode, live feed)
  Cursor.tsx        # custom cursor + coordinates readout
  Thread.tsx        # red thread SVG drawn while scrolling
  Hero.tsx          # hero with spotlight + floating evidence items
  EvidenceBoard.tsx # projects slider/list + project viewer + lightbox
  About.tsx         # SUBJECT PROFILE (identity / report / skills)
  GithubCta.tsx     # source-mode CTA
  Contact.tsx       # INITIATE CONTACT terminal
lib/
  projects.ts       # all project (evidence) data
public/assets/
  images/           # project artwork & covers
```

## Getting Started

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # production build
```

## Contact

- **Email:** mel.design.rim@gmail.com
- **GitHub:** [@Mel-Design-rim](https://github.com/Mel-Design-rim)
- **LinkedIn:** [cheikhmalaynineaboubacrin](https://www.linkedin.com/in/cheikhmalaynineaboubacrin)

---

© 2026 MEL DESIGN RIM — SECURE LINE ESTABLISHED
