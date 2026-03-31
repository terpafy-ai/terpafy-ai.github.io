# Component Specifications

> **Source**: Extracted from Figma via API — Design System page + Main V.1 page.
> **Figma file**: [TerpafyGrow](https://www.figma.com/design/PrgZ31vDh8QrStUw3OkJyB/TerpafyGrow?node-id=0-1)
> **Screenshots**: [buttons.png](screenshots/design-system/buttons.png) · [logos.png](screenshots/design-system/logos.png) · [logo-pulse.png](screenshots/design-system/logo-pulse.png)

## Buttons

> **Screenshot**: [buttons.png](screenshots/design-system/buttons.png)
> **Figma node**: `13:862` (COMPONENT_SET)

### Button Properties

The button component set uses a **variant system** with these axes:

| Property | Values |
|----------|--------|
| **Content** | Text, Text-icon, Icon |
| **Size** | Small, Medium, Large |
| **Type** | Primary, Text-only |
| **State** | Default, Hover, Pressed, Focused, Disabled |
| **Style** | Light, Dark |

### Button Sizes

| Size | Height | Corner Radius | Padding (T/R/B/L) |
|------|--------|---------------|-------------------|
| Small | 30px | 4px | 8/16/8/16 |
| Medium | 40px | 4px | 12/24/12/24 |
| Large | 52px | 4px | 16/32/16/32 |

**Text-icon padding** (icon adds extra space on one side):
| Size | Padding (T/R/B/L) |
|------|-------------------|
| Small | 8/12/8/16 |
| Medium | 12/20/12/24 |
| Large | 16/24/16/32 |

### Button Colors by State (Primary, Light style)

| State | Fill | Text Color |
|-------|------|------------|
| Default | `#f2594b` (Terpafy Pulse) | `#ffffff` |
| Hover | `#f2594b` | `#ffffff` |
| Pressed | `#b33327` (darker) | `#ffffff` |
| Focused | `#f2594b` + `#f2bcb7` stroke | `#ffffff` |
| Disabled | `#d6d6d6` | `#ffffff` |

### Button Typography

| Property | Value |
|----------|-------|
| Font | Gotham |
| Size | 14px |
| Weight | 400 (Regular) |

## Logo

> **Screenshot**: [logos.png](screenshots/design-system/logos.png)
> **Figma node**: `13:811` (COMPONENT_SET)
> **SVG exports**: [assets/logo-all-variants.svg](assets/logo-all-variants.svg) · [assets/logo-orange.svg](assets/logo-orange.svg)

The logo icon is a stylized flower/pulse mark. Available in 16 color variants:

| Variant | ID | Style |
|---------|----|-------|
| orange | `13:808` | Filled — primary brand |
| yellow | `13:806` | Filled |
| blue | `13:804` | Filled |
| green | `13:800` | Filled |
| brown | `13:807` | Filled |
| bege | `13:805` | Filled |
| gray | `13:801` | Filled |
| black | `13:802` | Filled |
| out orange | `13:803` | Outline |
| out yellow | `13:799` | Outline |
| out blue | `13:810` | Outline |
| out green | `13:809` | Outline |
| out brown | `13:798` | Outline |
| out bege | `13:797` | Outline |
| out gray | `13:796` | Outline |
| out black | `13:795` | Outline |

## Logo Pulse (Wordmark)

> **Screenshot**: [logo-pulse.png](screenshots/design-system/logo-pulse.png)
> **Figma node**: `2:15771` (COMPONENT_SET)
> **SVG exports**: [assets/logo-pulse-dark.svg](assets/logo-pulse-dark.svg) · [assets/logo-pulse-light.svg](assets/logo-pulse-light.svg)

Full "Terpafy Grow" wordmark with logo icon. Two variants:

| Variant | ID | Description |
|---------|-----|-------------|
| GrowDark | `3:576` | Dark text — for light backgrounds |
| GrowLight | `3:619` | Light text — for dark backgrounds |

## Switch

> **Figma node**: `3:570` (COMPONENT_SET)

Toggle switch component with two states:
- Frame 1 (`3:569`) — state 1
- Frame 2 (`3:568`) — state 2

## Shadows

> **Screenshot**: [shadows.png](screenshots/design-system/shadows.png)
> **Figma node**: `2:15780`

Three elevation levels defined in the design system:

| Level | Type | Radius | Spread | Offset (x, y) | Color | Opacity |
|-------|------|--------|--------|----------------|-------|---------|
| 1 (low) | DROP_SHADOW | 4px | 0 | (0, 2) | `#292929` | 8% |
| 2 (medium) | DROP_SHADOW | 8px | 0 | (0, 4) | `#292929` | 8% |
| 3 (high) | DROP_SHADOW | 12px | 0 | (0, 6) | `#292929` | 8% |

### CSS Equivalents

```css
/* Level 1 */
box-shadow: 0px 2px 4px rgba(41, 41, 41, 0.08);
/* Level 2 */
box-shadow: 0px 4px 8px rgba(41, 41, 41, 0.08);
/* Level 3 */
box-shadow: 0px 6px 12px rgba(41, 41, 41, 0.08);
```

## Icons

The Figma file includes a comprehensive **vuesax/bold** icon library with categories:
- **Essentials**: add, close, menu, send, trash, verify, info, danger, filter, etc.
- **Location**: map, gps, routing, location pins, globe, etc.
- **General**: home, flash, crown, sort, archive, share, chart, etc.

These are Figma components and can be exported individually as needed.
- Heart, MessageCircle, Shield, Activity (Hero)
- Activity, Bell, Shield, BookOpen (Features)
- MessageCircle, ClipboardCheck, TrendingUp (How It Works)
- Users, Stethoscope, Lock, Clock (Benefits)
- MessageCircle, ArrowRight (CTA)
- Heart, Phone (Footer)
