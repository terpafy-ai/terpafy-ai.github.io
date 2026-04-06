# Figma Export — TerpafyGrow

> **Figma File**: `39naJesWwb1Kpi1vbi6xVw`
> **URL**: https://www.figma.com/design/39naJesWwb1Kpi1vbi6xVw/TerpafyGrow?node-id=0-1
> **Owner**: `gomes.carlosjr@gmail.com` (Full seat, student plan)
> **Related ticket**: [#3 — Phase 0: Figma Design Extraction](https://github.com/terpafy-ai/terpafy-ai.github.io/issues/3)
> **Auth method**: Figma Personal Access Token via REST API (`X-Figma-Token` header)

## Status

| Artifact | Status | Notes |
|----------|--------|-------|
| `colors.md` | ✅ Complete | Extracted from Figma Design System (node `2:29`) — red/yellow/cyan/olive palette |
| `typography.md` | ✅ Complete | Anton (headings) + Inter (body) + Gotham-Book (buttons) — nodes `2:15794` + page text |
| `spacing.md` | ✅ Complete | 12-col grid, 91px cols, 20px gutter, 100px margins, 1512px canvas |
| `components.md` | ✅ Complete | Button system (3 sizes, 5 states), shadows (S/M/L), switch — nodes `13:862`, `2:15780`, `3:570` |
| `layout.md` | ✅ Complete | 11 page sections with node IDs, dimensions, content — frame `1:2` (1280×10349px) |
| `screenshots/` | ✅ Complete | 8 section PNGs exported at 2× via REST API |
| `assets/logo.svg` | ✅ Complete | Full wordmark (copy of `logo-terpafy-wordmark.svg`) |
| `assets/logo-icon.svg` | ✅ Complete | Icon mark (leaf symbol), node `13:800` (green variant) |
| `assets/logo-terpafy-wordmark.svg` | ✅ Complete | Full horizontal wordmark |
| `assets/logo-grow-text.svg` | ✅ Complete | "Grow" text lockup |
| `assets/favicon.svg` | ✅ Complete | Icon mark exported as SVG from node `13:800` |
| `assets/og-image.png` | ⚠️ Placeholder | Hero chat mockup (node `13:4600`); needs a dedicated 1200×630 frame in Figma |

## Design File Structure

The file contains two pages:
- **Main V.1** (`0:1`) — single full-page frame `1:2` "Home - TerpafyGrow" (1280×10349px)
- **Design System** (`1:151`) — logo components, color palette, icons, typography, buttons

### Key Section Node IDs (Main V.1 / frame `1:2`)

| Node ID | Name | y position | Exported as |
|---------|------|-----------|-------------|
| `2:18807` | Navigation Bars | 51 | `screenshots/header.png` |
| `13:4694` | Hero heading group | 260 | `screenshots/hero.png` |
| `28:462` | Problem section (Frame 112) | 2047 | `screenshots/problem.png` |
| `37:2011` | Features header (Frame 132) | 2959 | `screenshots/features.png` |
| `64:1245` | How it works (Frame 181) | 4527 | `screenshots/how-it-works.png` |
| `64:1464` | For who (Frame 194) | 6998 | `screenshots/benefits.png` |
| `37:1981` | Vision/market (Frame 127) | 7519 | `screenshots/cta.png` |
| `41:640` | Footer (Group 19) | 9876 | `screenshots/footer.png` |

## Directory Structure

```
figma-export/
├── README.md               ← this file
├── colors.md               ← actual Figma color palette (red/yellow/cyan/olive + neutrals)
├── typography.md           ← Anton (headings) + Inter (body), type scale
├── spacing.md              ← 12-col grid, 1512px canvas, gutters, margins
├── components.md           ← button system, shadows, switch component tokens
├── layout.md               ← 11 page sections with node IDs and dimensions
├── screenshots/
│   ├── README.md
│   ├── header.png          ← navigation bar
│   ├── hero.png            ← hero heading
│   ├── problem.png         ← problem/pain section
│   ├── features.png        ← features header
│   ├── how-it-works.png    ← how it works
│   ├── benefits.png        ← for-who / benefits
│   ├── cta.png             ← vision + call to action
│   └── footer.png          ← footer
└── assets/
    ├── README.md
    ├── logo.svg            ← brand logo (wordmark — per issue spec)
    ├── logo-icon.svg       ← icon mark only
    ├── logo-terpafy-wordmark.svg
    ├── logo-grow-text.svg
    ├── favicon.svg         ← browser tab icon
    └── og-image.png        ← social preview (placeholder)
```

## Usage in Downstream Tickets

- **Ticket #4 (Scaffolding)**: Use `colors.md` + `typography.md` to configure `tailwind.config.js`
- **Ticket #5 (Design System)**: Import tokens into components
- **Ticket #7 (Layout/Nav)**: Reference `screenshots/header.png` for nav structure
- **Ticket #8 (Homepage Sections)**: Reference all section screenshots for layout fidelity
