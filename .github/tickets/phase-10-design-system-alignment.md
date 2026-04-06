## Issue #10 — Design System Alignment: Landing Page Visual Fidelity Pass

## Description
Align `terpafy-ai.github.io` with the Figma design system across all visual layers — 
colors, typography, shadows, buttons, layout, and new UI components (Hero + Chat preview). 
This ticket consolidates the work completed in one focused session and flags any remaining 
open items for future passes on downstream sections.

## Related
- Figma file: `39naJesWwb1Kpi1vbi6xVw`
- Figma nodes: `13:4694` (Hero section), `13:4600` (Chat mockup), `13:823` (Buttons),
  `2:15794` (Fonts), `2:15780` (Shadows), `2:29` (Color Palette), `2:18807` (Header),
  `2:18850` (Logo)
- Landing page repo: `terpafy-ai/terpafy-ai.github.io`

---

## Work Completed ✅

### 1 — Header Layout
**File:** `src/components/layout/Header.tsx`
- Replaced `flex justify-between` with `grid grid-cols-3` for true center-aligned navigation
- Logo anchored to col-1, nav centered in col-2 with `justify-center`, controls right-aligned in col-3

### 2 — Logo Component
**File:** `src/components/common/Logo.tsx`
- Replaced hand-drawn asterisk SVG with real 5-path Figma vector (5-petal flower shape)
  from `viewBox="0 0 51.57 51.015"` using `fill="currentColor"`
- Fixed `growColor`: was `text-accent-green` → corrected to `text-primary` (#f2594b)

### 3 — SVG Asset Extraction
**Directory:** `public/assets/`
- `icons/` — 16 brand mark SVG variants (8 solid + 8 outline, each in a brand color)
- `logos/` — 6 wordmark/logotype SVG parts (light + dark variants)
- All use `var(--fill-0, #F2594B)` for CSS-variable theming

### 4 — Design Token: Shadow Scale
**File:** `src/index.css`
- Added 4 shadow CSS custom properties mapped from Figma Shadows node `2:15780`:
  - `--shadow-1: 0 2px 4px rgba(41,41,41,0.08)`
  - `--shadow-2: 0 4px 8px rgba(41,41,41,0.08)`
  - `--shadow-3: 0 6px 12px rgba(41,41,41,0.08)`
  - `--shadow-hover: 0 6px 12px rgba(41,41,41,0.2)` (used on button hover state)
- All existing color tokens (`--color-primary`, secondary, accent, neutrals, text, BG)
  confirmed already correct — no changes needed

### 5 — Button Component
**File:** `src/components/ui/button.tsx`
Updated `buttonVariants` (CVA) to exactly match Figma Buttons node `13:823`:
- `rounded-[4px]` (was `rounded-md` = 8px)
- Size `sm`: `px-4 py-2`, `text-[14px]`, `tracking-[-0.7px]`, 14px icons
- Size `default` (medium): `px-6 py-3`, `text-[16px]`, `tracking-[-0.8px]`, 16px icons  
- Size `lg`: `px-8 py-4`, `text-[20px]`, `tracking-[-1px]`, 20px icons
- Hover: `shadow-hover` applied (matches Figma hover shadow `rgba(41,41,41,0.2)`)
- Active/Pressed: `active:bg-primary-dark` → `#b33327` (Figma pressed state)
- `ghost` variant = Figma "Text-only" button (transparent, primary red text)

### 6 — Hero Section Redesign
**File:** `src/components/sections/Hero.tsx`
Updated to match Figma node `13:4694`:
- **Layout**: Two-column at `lg` — left: heading/CTAs; right: `<ChatPreview />`
- **Badge**: Large `rounded-[4px] border-primary bg-primary/10 px-8 py-4 text-[20px]`
  with `CheckCircle` icon (matches Figma outlined pill)
- **Heading**: Anton, `text-[70px]`, `tracking-[2.1px]`, `leading-[1.12]`, uppercase
- **Subtitle**: Inter Medium, `text-[14px]`, `text-[#848484]`
- **Primary CTA**: `rounded-[4px] px-8 py-4 text-[20px]` with `ArrowRight` icon
- **Secondary CTA**: `bg-primary-lightest` (#eedddc), same large sizing, no border
- Removed trust badge row (not present in Figma)

### 7 — Chat Preview Component (new)
**File:** `src/components/common/ChatPreview.tsx` (created)
Static, non-interactive mockup matching Figma node `13:4600`:
- `bg-[#222]`, `rounded-2xl`, `border-white/15`, `355×580px`, hidden on < `lg`
- **Header**: `bg-[#1a1a1a]` with orange avatar (primary circle + brand mark SVG at 17px),
  "Terpafy Grow" title, `text-secondary` (#eaf205) "Online" dot
- **Agent message**: `bg-white/5 border-white/20`, asymmetric corners `bl-[5px]`
- **User message**: `bg-primary/5 border-primary`, asymmetric corners `br-[5px]`
- **Typing indicator**: 3 animated dots with staggered `animationDelay`
- **Input bar**: frosted glass `bg-white/5 backdrop-blur-md`, red linear-gradient send button
- Ambient glow: blurred `bg-primary` radial blob (simplified from Figma gradient layers)

---

## Open Items / Follow-up Tickets

### A — Downstream Section Typography Audit
**Files:** `Features.tsx`, `HowItWorks.tsx`, `Benefits.tsx`, `CTA.tsx`

These sections were not reviewed in this pass. They may use button sizes, heading styles,
or color tokens that don't reflect Figma. A dedicated review should:
- Verify section headings use Anton with `tracking-[2.1px] leading-[1.12]`
- Verify body/subtitle copy uses Inter `font-medium text-[14px]` or `text-[16px]`
- Verify all CTAs use `<Button>` with `lg` size and `rounded-[4px]`
- Background colors: white sections vs. `bg-background` (#f6f6f6) alignment with Figma

### B — Gotham Font Fallback
**File:** `src/index.css`

Figma button spec references `Gotham Book` for button labels (not Inter). Gotham is a paid
typeface not loaded via Google Fonts. The current fallback chain `"Inter", "Gotham", "Montserrat", sans-serif`
covers this adequately, but if the brand requires Gotham, a web-licensed version must be
self-hosted and added to `index.html`.

### C — ChatPreview Mobile Visibility
**File:** `src/components/common/ChatPreview.tsx`

The chat widget is `hidden` below `lg`. On tablet (`md`), consider showing it in a compact
stacked layout below the CTA buttons. Figma doesn't specify a mobile layout — needs design input.

---

## Acceptance Criteria

### Completed
- [x] Header nav is truly centered (3-column grid)
- [x] Logo renders correct 5-petal brand mark from Figma paths
- [x] Logo "Grow" text is `text-primary` (#f2594b), not olive green
- [x] 22 SVG assets extracted and stored in `public/assets/`
- [x] `--shadow-1/2/3/hover` tokens available as `shadow-*` Tailwind utilities
- [x] Button `rounded-[4px]`, 3 sizes with correct `px/py/text-size/tracking`
- [x] Button hover uses `shadow-hover`, active uses `bg-primary-dark`
- [x] Hero is two-column, heading uses `tracking-[2.1px] leading-[1.12]`
- [x] Hero badge matches Figma (large, bordered, `rounded-[4px]`)
- [x] Hero secondary CTA uses `bg-primary-lightest` fill, no border
- [x] `ChatPreview` component renders full chat mockup matching Figma node `13:4600`
- [x] `pnpm typecheck && pnpm lint && pnpm build` — all pass ✓

### Pending (follow-up)
- [ ] Audit `Features`, `HowItWorks`, `Benefits`, `CTA` typography & button sizes
- [ ] Decide on Gotham font strategy (licensed web font or Inter-only)
- [ ] Design input on mobile/tablet layout for `ChatPreview`

---

## Files Created / Modified

| File | Status |
|---|---|
| `src/components/layout/Header.tsx` | Modified — grid layout |
| `src/components/common/Logo.tsx` | Modified — Figma SVG paths, color fix |
| `src/components/ui/button.tsx` | Modified — sizes, radius, hover/active |
| `src/index.css` | Modified — shadow token scale added |
| `src/components/sections/Hero.tsx` | Modified — two-column, Figma typography |
| `src/components/common/ChatPreview.tsx` | Created — chat mockup widget |
| `public/assets/icons/*.svg` | Created — 16 brand mark variants |
| `public/assets/logos/*.svg` | Created — 6 logo part variants |
