# Terpafy — Typography Tokens

> Source: Figma Design System page (`2:15794` — Fonts frame) + actual page text nodes
> File: `39naJesWwb1Kpi1vbi6xVw` | Extracted via REST API on 2026-03-31

## Font Families

| Role | Family | Weights used | Import |
|------|--------|-------------|--------|
| Headings / Display | **Anton** | 400 (Anton is single-weight) | Google Fonts |
| Body / UI | **Inter** | 400, 500, 700, 800 | Google Fonts |
| Buttons | **Gotham** (`Gotham-Book`) | 400 | Commercial (Hoefler & Co.) |

```css
/* Google Fonts import */
@import url('https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@400;500;700;800&display=swap');

/* Gotham — commercial font, requires license */
/* Fallback stack: */
/* font-family: 'Gotham', 'Montserrat', 'Inter', sans-serif; */
```

## Type Scale (from actual page nodes)

| Name | Family | Size | Weight | Line Height | Usage |
|------|--------|------|--------|-------------|-------|
| Hero Display | Anton | 70px | 400 | ~1.04 | Main hero headline (`h1`) |
| Heading XL | Inter | 50px | 700 | ~1.16 | Sub-hero, large callout text |
| Heading L | Inter | 40px | 700 | ~1.2 | Section headings (`h2`) |
| Stat / Emphasis | Inter | 40px | 800 | ~1.2 | Numbers, bold stats |
| Heading M | Inter | 32px | 700 | ~1.25 | CTA headings, card titles |
| Body XL | Inter | 20px | 400 | ~1.5 | Lead paragraph, large body |
| Body | Inter | 16px | 400 | ~1.5 | Default body text |
| Label / Sub | Inter | 14px | 500 | ~1.4 | Labels, chat text, badges |
| Caption | Inter | 13px | 500 | ~1.4 | Descriptions, helper text |
| Micro | Inter | 12px | 400–500 | ~1.4 | Meta, timestamps |

## Font Weights

| Value | Usage |
|-------|-------|
| 400 | Anton headlines; Inter regular body |
| 500 | Inter labels, captions, sub-text |
| 700 | Inter section headings, button labels |
| 800 | Inter stats, heavy emphasis |

## Letter Spacing

All text nodes use `letter-spacing: 0` (no adjustment needed in CSS).

## Button Font: Gotham

| Role | Family | PostScript Name | Weights | Sizes |
|------|--------|----------------|---------|-------|
| Buttons (all types) | **Gotham** | `Gotham-Book` | 400 | 14px / 16px / 20px |

```css
/* Gotham is a commercial font (Hoefler & Co.) — not on Google Fonts.
   Use font-face with a licensed copy or a fallback stack: */
font-family: 'Gotham', 'Montserrat', 'Inter', sans-serif;
font-weight: 400;
```

> **Note**: Gotham-Book at weight 400 is the only variant used in the design.
> It maps to the **Small** (14px), **Medium** (16px), and **Large** (20px) button sizes.

## Design System Specimen (reference)

The Fonts frame (`2:15794`) shows two specimen blocks:
- **Anton Regular** — full alphabet + numerals at 24px and 48px label
- **Inter Bold** — full alphabet + numerals at 24px and 48px label

## Responsive Overrides (Current)

In the landing page components, headings follow this responsive pattern:
```html
<!-- Hero heading example -->
<h1 class="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-primary">…</h1>
<!-- Subheading example -->
<p class="text-xl md:text-2xl text-neutral-medium font-body">…</p>
```
