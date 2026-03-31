# Terpafy — Component Tokens

> Source: Figma Design System page (`1:151`)
> File: `39naJesWwb1Kpi1vbi6xVw` | Extracted via REST API on 2026-03-31
> Nodes: Buttons `13:862`, Shadows `2:15780`, Switch `3:570`

---

## Buttons

Component set node: `13:862` (inside frame `13:823`)

### Sizes

| Size | Height | Font size | Min width (text) | Min width (text+icon) | Icon-only |
|------|--------|-----------|------------------|-----------------------|-----------|
| Small | 30px | 14px | 77px | 91px | 30×30px |
| Medium | 40px | 16px | 99px | 119px | 40×40px |
| Large | 52px | 20px | 127px | 147px | 52×52px |

**Corner radius**: 4px (all sizes)  
**Font**: Gotham-Book (`Gotham`, weight 400)

### Types

| Type | Background | Border | Text color |
|------|-----------|--------|------------|
| Primary | `#F2594B` | — | White |
| Text-only | Transparent | — | Inherits (dark on light) |

### States

| State | Primary background | Stroke | Notes |
|-------|--------------------|--------|-------|
| Default | `#F2594B` | — | |
| Hover | `#F2594B` | — | Opacity/brightness shift via CSS |
| Pressed | `#B33327` | — | Darker red |
| Disabled | `#D6D6D6` | — | Grey, non-interactive |
| Focused | `#F2594B` | `#F2BCB7` (light pink) | Accessibility ring |

### Content variants

| Content | Description |
|---------|-------------|
| Text | Label only |
| Text-icon | Label + trailing icon (arrow-right) |
| Icon | Icon only (no label) |

### CSS reference

```css
/* Primary button — medium */
.btn-primary {
  height: 40px;
  padding: 0 16px;
  background-color: #F2594B;
  border-radius: 4px;
  font-family: 'Gotham', 'Montserrat', 'Inter', sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: #ffffff;
  border: none;
}

.btn-primary:hover  { background-color: #f26d62; }   /* lighten */
.btn-primary:active { background-color: #B33327; }
.btn-primary:focus-visible { outline: 2px solid #F2BCB7; outline-offset: 2px; }
.btn-primary:disabled { background-color: #D6D6D6; cursor: not-allowed; }
```

---

## Shadows

Node: `2:15780` (Shadows frame, Design System page)

All shadows share the same color: `rgba(41, 41, 41, 0.08)`

| Name | CSS value | Use case |
|------|-----------|----------|
| Shadow S | `box-shadow: 0 2px 4px rgba(41,41,41,0.08)` | Subtle cards, chips |
| Shadow M | `box-shadow: 0 4px 8px rgba(41,41,41,0.08)` | Cards, panels |
| Shadow L | `box-shadow: 0 6px 12px rgba(41,41,41,0.08)` | Modals, elevated surfaces |

```css
:root {
  --shadow-s: 0 2px 4px rgba(41, 41, 41, 0.08);
  --shadow-m: 0 4px 8px rgba(41, 41, 41, 0.08);
  --shadow-l: 0 6px 12px rgba(41, 41, 41, 0.08);
}
```

---

## Switch

Node: `3:570` (component set, Design System page)

**Size**: 100×50px

| State | Track color | Knob color | Label |
|-------|-------------|------------|-------|
| Off | `#E8E8E8` (light grey) | `#FAAF1D` (yellow) | `Property 1=Frame 1` |
| On | `#232323` (near-black) | `#FAAF1D` (yellow) | `Property 1=Frame 2` |

The knob is a circle (~35px diameter) with a yellow fill (`#FAAF1D`) in both states.
Track changes from light grey → dark when toggled.

---

## Logo

Component set node: `13:811`

The Logo component set contains multiple color variants (12+). Key variants used on the landing page:

| Variant | Usage |
|---------|-------|
| Green (default) | Primary brand logo on light backgrounds |
| White | On dark / colored backgrounds |
| Dark | On light grey backgrounds |

See `assets/logo.svg` and `assets/logo-icon.svg` for exported files.

Node `2:15771` (`Logo Pulse`) is an animated logo variant (used for loading states).
