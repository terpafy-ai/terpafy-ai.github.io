# docs: Design System – Figma Node References

## Description

Central reference document mapping every reusable design asset to its Figma node. Use these links when implementing or auditing any visual component in the landing page. Fill in any `TBD` entries the next time you open the Figma file.

---

## Figma File

**File:** TerpafyGrow  
**URL:** https://www.figma.com/design/39naJesWwb1Kpi1vbi6xVw/TerpafyGrow

---

## Node Map

### 🎨 Color Palette

> Fill in the exact node-id from the Figma "Colors / Tokens" frame.

| Asset | Figma Link | Status |
|-------|------------|--------|
| Full color palette / tokens | https://www.figma.com/design/39naJesWwb1Kpi1vbi6xVw/TerpafyGrow?node-id=2-29 | ✅ Known |
| Primary (`#F2594B` + dark variant) | https://www.figma.com/design/39naJesWwb1Kpi1vbi6xVw/TerpafyGrow?node-id=2-29 | ✅ Known |
| Neutral / foreground scale | https://www.figma.com/design/39naJesWwb1Kpi1vbi6xVw/TerpafyGrow?node-id=2-29 | ✅ Known |
| Surface / background tokens | https://www.figma.com/design/39naJesWwb1Kpi1vbi6xVw/TerpafyGrow?node-id=2-29 | ✅ Known |

> **Implemented in:** `src/index.css` under `@theme { … }` — `--color-primary`, `--color-primary-dark`, `--color-foreground`, `--color-foreground-muted`, `--color-background`, `--color-border`, shadow tokens `--shadow-1/2/3/hover`.
> **Shadow tokens node:** https://www.figma.com/design/39naJesWwb1Kpi1vbi6xVw/TerpafyGrow?node-id=2-15780
> **Fonts node:** https://www.figma.com/design/39naJesWwb1Kpi1vbi6xVw/TerpafyGrow?node-id=2-15794

---

### 🔘 Buttons

> Fill in the exact node-id from the Figma "Buttons" component frame.

| Asset | Figma Link | Status |
|-------|------------|--------|
| Button component (all variants) | https://www.figma.com/design/39naJesWwb1Kpi1vbi6xVw/TerpafyGrow?node-id=13-823 | ✅ Known |
| Primary button spec (`rounded-[4px]`, tracking, shadow) | https://www.figma.com/design/39naJesWwb1Kpi1vbi6xVw/TerpafyGrow?node-id=13-823 | ✅ Known |
| Ghost / outline button | https://www.figma.com/design/39naJesWwb1Kpi1vbi6xVw/TerpafyGrow?node-id=13-823 | ✅ Known |

> **Implemented in:** `src/components/ui/button.tsx` — 3 sizes (sm/md/lg), `rounded-[4px]`, Figma letter-spacing/padding, hover shadow, active `bg-primary-dark`.

---

### 🖼 Logos & Brand Marks

> Fill in the exact node-id from the Figma "Brand / Logos" frame.

| Asset | Figma Link | Status |
|-------|------------|--------|
| Terpafy wordmark (full) | https://www.figma.com/design/39naJesWwb1Kpi1vbi6xVw/TerpafyGrow?node-id=2-18850 | ✅ Known |
| Asterisk mark / logomark only | https://www.figma.com/design/39naJesWwb1Kpi1vbi6xVw/TerpafyGrow?node-id=2-18850 | ✅ Known |
| Logo on dark background | TBD — `node-id=?` | ⚠️ Needs link |

> **Implemented in:** `src/components/layout/Logo.tsx` + SVG assets extracted to `public/assets/` (22 files total).

---

### 🧩 Icons — Vuesax Bold Library

| Asset | Figma Link |
|-------|------------|
| **Full Vuesax Bold icon set** | https://www.figma.com/design/39naJesWwb1Kpi1vbi6xVw/TerpafyGrow?node-id=2-8915 |

> **npm package:** `vuesax-icons-react` v1.0.2  
> **API:** `<IconName variant="Bold" size={24} color="currentColor" className="..." />`  
> **Color:** default `color="currentColor"` — Tailwind `text-*` classes control fill via CSS `color` inheritance  
> **Note:** Package exports `HambergerMenu` (typo) — not `HamburguerMenu` or `HamburgerMenu`

**Icon mapping used in this project** (Lucide → Vuesax Bold):

| Lucide (removed) | Vuesax Bold (in use) | Used in |
|-----------------|----------------------|---------|
| `ArrowRight` | `ArrowRight` | Hero, CTA |
| `ArrowLeft` | `ArrowLeft` | TermsOfService, PrivacyPolicy |
| `CheckCircle` / `CheckCircle2` | `TickCircle` | Hero, Benefits |
| `Send` | `Send` | ChatPreview |
| `MessageCircle` | `MessageCircle` | WhatsAppButton |
| `MessageSquare` | `MessageSquare` | TermsOfService, Header (Phase 11) |
| `Activity` | `Activity` | Features |
| `Bell` | `Notification` | PrivacyPolicy |
| `Shield` | `Shield` | Features |
| `ShieldCheck` | `ShieldTick` | Features, PrivacyPolicy |
| `BookOpen` | `Book1` | Features |
| `ChevronDown` | `ArrowDown` | LanguageSwitcher |
| `Globe` | `Global` | LanguageSwitcher |
| `Leaf` | `Tree` | HowItWorks |
| `Sparkles` | `LampOn` | HowItWorks |
| `Menu` | `HambergerMenu` | Header |
| `X` | `CloseCircle` | Header |
| `Zap` | `Flash` | Benefits |
| `Smartphone` | `Mobile` | TermsOfService |
| `FileText` | `DocumentText` | TermsOfService |
| `AlertTriangle` | `Warning2` | TermsOfService |
| `FileCheck` | `DocumentForward` | TermsOfService |
| `Mail` | `Sms` | TermsOfService, PrivacyPolicy |
| `User` | `User` | PrivacyPolicy |
| `Database` | `Data` | PrivacyPolicy |
| `Share2` | `Share` | PrivacyPolicy |
| `Lock` | `Lock` | PrivacyPolicy |
| `Scale` | `Weight` | PrivacyPolicy |
| `Archive` | `Archive` | PrivacyPolicy |

---

### 🖥 Layout Frames (Phases 11–15)

All phase tickets reference the same top-level layout frame:

| Asset | Figma Link |
|-------|------------|
| Landing page v2 — full layout | https://www.figma.com/design/39naJesWwb1Kpi1vbi6xVw/TerpafyGrow?node-id=1-2 |

> **Per-section node-ids** (fill in as each section frame is inspected in Figma):

| Section | Expected `node-id` | Status |
|---------|-------------------|--------|
| Header | https://www.figma.com/design/39naJesWwb1Kpi1vbi6xVw/TerpafyGrow?node-id=2-18807 | ✅ Known |
| Hero | https://www.figma.com/design/39naJesWwb1Kpi1vbi6xVw/TerpafyGrow?node-id=13-4694 | ✅ Known |
| Chat Preview widget | https://www.figma.com/design/39naJesWwb1Kpi1vbi6xVw/TerpafyGrow?node-id=13-4600 | ✅ Known |
| Problem | TBD | ⚠️ Needs link |
| Features | TBD | ⚠️ Needs link |
| Positioning | TBD | ⚠️ Needs link |
| HowItWorks | TBD | ⚠️ Needs link |
| ForWho | TBD | ⚠️ Needs link |
| MarketContext | TBD | ⚠️ Needs link |
| Principles | TBD | ⚠️ Needs link |
| CTA | TBD | ⚠️ Needs link |
| Footer | TBD | ⚠️ Needs link |

---

## How to Extract a Node ID

1. Open the Figma file
2. Click the frame/component you want to reference
3. Copy the URL from the browser — the `node-id=X-Y` part is the node reference
4. Update the table above and replace `TBD — node-id=?` with the full URL

---

## Acceptance Criteria

- [ ] All `TBD` entries in the Color Palette table are filled with real Figma links
- [ ] All `TBD` entries in the Buttons table are filled
- [ ] All `TBD` entries in the Logos table are filled
- [ ] Per-section node-ids in the Layout Frames table are filled for all 11 sections
- [ ] This document is updated whenever a new design asset is implemented

## Files to Modify

- This file — fill in TBD links as they are discovered
- `src/index.css` — design token source of truth
- `src/components/ui/button.tsx` — button spec source of truth
- `src/components/layout/Logo.tsx` — logo source of truth
