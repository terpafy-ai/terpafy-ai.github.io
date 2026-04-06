# Terpafy — Spacing & Grid System

> Source: Figma Design System page (`2:9` — Grid frame) + main canvas dimensions
> File: `39naJesWwb1Kpi1vbi6xVw` | Extracted via REST API on 2026-03-31

## Canvas

| Property | Value |
|----------|-------|
| Design canvas width | **1512px** |
| Design canvas height | 10349px (full-page scroll) |
| Nav bar height | **120px** |

## Column Grid (Desktop)

| Property | Value |
|----------|-------|
| Columns | **12** |
| Column width | **91px** |
| Gutter (column gap) | **20px** |
| Left margin | **100px** |
| Right margin | **100px** |

**Math check**: `12 × 91 + 11 × 20 + 2 × 100 = 1092 + 220 + 200 = 1512px` ✅

## Content Width

| Zone | Width | Calculation |
|------|-------|-------------|
| Full canvas | 1512px | — |
| Content area | 1312px | 1512 − 2 × 100 |
| Max content | ~1100px | 12 columns + 11 gutters |

## Base Spacing Unit

The grid gutter is **20px** — use this as the base spacing unit (`1 unit = 20px`):

| Multiplier | Value | Use |
|-----------|-------|-----|
| 0.25× | 5px | Tight internal padding |
| 0.5× | 10px | Small gaps, icon spacing |
| 1× | 20px | Base gap (gutter) |
| 2× | 40px | Component padding, card spacing |
| 3× | 60px | Section internal padding |
| 5× | 100px | Section margins (matches grid offset) |

## Section Vertical Spacing (from design)

Measured from absolute y-positions of top-level section frames:

| Section | Y start | Approx height |
|---------|---------|---------------|
| Navigation | 51px | 120px |
| Hero | 260px | ~1100px |
| Problem | 2047px | ~900px |
| Features | 2959px | ~1500px |
| How It Works | 4527px | ~1800px |
| Benefits / For Who | 6998px | ~520px |
| Vision / Market | 7519px | ~1400px |
| Principles | 8916px | ~400px |
| CTA | 9613px | ~265px |
| Footer | 9876px | ~1036px |

## Tailwind Config Reference

```js
// tailwind.config.js — recommended mapping
theme: {
  extend: {
    maxWidth: {
      content: '1312px',   // canvas - margins
      canvas:  '1512px',   // full design width
    },
    spacing: {
      // Grid-derived values
      'grid-gutter':  '20px',
      'grid-margin':  '100px',
      'nav-height':   '120px',
    },
  },
}
```
