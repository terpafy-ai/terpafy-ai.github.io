# Landing Page Rewrite Plan

> **Status**: Proposed  
> **Date**: 2026-03-26  
> **Project**: terpafy-ai.github.io  

---

## 1. Context & Problem Statement

The current landing page was built as an MVP using plain React 19 + Vite + Tailwind CSS 3 with hand-rolled UI components. While functional, it needs a complete visual refresh to align with the new **TerpafyGrow** branding from Figma (`PrgZ31vDh8QrStUw3OkJyB`), and the codebase should adopt modern best practices and TypeScript.

### What We're Solving
- Align the landing page with the new TerpafyGrow brand identity
- Modernize the tech stack (TypeScript, Tailwind v4, shadcn/ui)
- Improve developer experience (type safety, component library, better tooling)
- Maintain all existing legal, i18n, and SEO capabilities
- Keep the GitHub Pages CI/CD deployment working

### Constraints
- **Public repository** — no secrets, API keys, internal URLs, or sensitive business data in code
- **GitHub Pages hosting** — static SPA output to `dist/`
- **CNAME**: `terpafy.ai` must be preserved
- **Legal content**: Privacy Policy and Terms of Service must be preserved (pt-BR, en, es)
- **i18n**: Must keep Portuguese, English, and Spanish support

---

## 2. Figma Design (Blocked — Action Required)

### Current Status
The Figma MCP server cannot access the design file due to account limitations:
- **Account**: `henriquehirako@gmail.com`
- **Plan**: Starter (View seat) — limited to 6 MCP calls/month
- **File**: `PrgZ31vDh8QrStUw3OkJyB` (TerpafyGrow)

### Required Action (Before Implementation)
Choose one of these approaches to unblock design access:

| Option | Effort | Description |
|--------|--------|-------------|
| **A. Upgrade Figma plan** | Low | Upgrade to Pro/Org plan with Full/Dev seat for full MCP integration |
| **B. Manual export** | Medium | Export from Figma: color tokens, typography, spacing, assets (SVG/PNG), and screenshots of each section |
| **C. Share design specs** | Low | Share Figma file with the MCP-authenticated account, or generate a Figma Dev Mode link |

### What We Need from Figma
Once access is resolved, extract:
1. **Color palette** — primary, secondary, accent, neutral, semantic colors
2. **Typography** — font families, sizes, weights, line heights
3. **Spacing system** — base unit, scale
4. **Component designs** — hero, features, CTA, footer, navigation
5. **Logo & brand assets** — SVG logo, favicon, OG images
6. **Layout specs** — breakpoints, grid system, section spacing
7. **Imagery/illustrations** — any custom graphics or illustrations

---

## 3. Tech Stack Decision

### Current Stack → New Stack

| Layer | Current | New | Rationale |
|-------|---------|-----|-----------|
| **Language** | JavaScript (JSX) | **TypeScript (TSX)** | Type safety, better DX, catches bugs at compile time |
| **Framework** | React 19 | **React 19** | Keep — still latest and stable |
| **Build Tool** | Vite 7 | **Vite 7** | Keep — fast, excellent DX |
| **CSS** | Tailwind CSS 3 | **Tailwind CSS 4** | Major upgrade: CSS-first config, faster builds, smaller output |
| **UI Components** | Hand-rolled Button/Card | **shadcn/ui** | Production-quality accessible components, consistent with Greenhouse |
| **Icons** | lucide-react | **lucide-react** | Keep — comprehensive, tree-shakeable |
| **i18n** | i18next + react-i18next | **i18next + react-i18next** | Keep — battle-tested, works well |
| **Routing** | react-router-dom v7 | **react-router-dom v7** | Keep — latest stable |
| **Linting** | None | **ESLint + typescript-eslint** | Code quality enforcement |
| **Formatting** | None | **Prettier** | Consistent code formatting |
| **Package Manager** | npm | **pnpm** | Faster installs, disk efficient, consistent with Greenhouse |
| **Node.js** | 18 | **22 LTS** | Current LTS, better performance |

### Alternatives Considered

#### Option A: Next.js (SSG)
- **Pros**: Built-in SSG, image optimization, routing, SEO
- **Cons**: Overkill for a landing page, adds complexity, GitHub Pages deployment is clunky with Next.js static export
- **Verdict**: Rejected — Vite + React is simpler and perfectly suited for a static SPA

#### Option B: Astro
- **Pros**: Partial hydration, excellent static site performance, built for content sites
- **Cons**: Different paradigm from Greenhouse (React SPA), learning curve, component reuse is indirect
- **Verdict**: Rejected — keeping React for consistency with the Greenhouse project

#### Option C: Vite + React + TypeScript (Selected)
- **Pros**: Same paradigm as current project, TypeScript upgrade, Tailwind v4, shadcn/ui consistency with Greenhouse
- **Cons**: No SSR/SSG (acceptable for a landing page)
- **Verdict**: **Selected** — minimal migration risk, maximal DX improvement

---

## 4. Project Structure

```
terpafy-ai.github.io/
├── .github/
│   └── workflows/
│       └── deploy.yml              # Updated: pnpm + Node 22
├── public/
│   ├── favicon.ico                 # New brand favicon
│   ├── og-image.png                # Open Graph social image
│   ├── robots.txt                  # SEO crawl directives
│   └── assets/
│       └── logo.svg                # Brand logo from Figma
├── src/
│   ├── main.tsx                    # React entry point
│   ├── App.tsx                     # Router + layout wrapper
│   ├── index.css                   # Tailwind v4 imports + global styles
│   ├── vite-env.d.ts               # Vite type declarations
│   ├── components/
│   │   ├── ui/                     # shadcn/ui primitives
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── badge.tsx
│   │   │   ├── separator.tsx
│   │   │   └── ...
│   │   ├── layout/
│   │   │   ├── Header.tsx          # Sticky nav with logo + language switcher
│   │   │   ├── Footer.tsx          # Footer with links, legal, disclaimer
│   │   │   └── Section.tsx         # Reusable page section wrapper
│   │   ├── sections/               # Homepage sections (not standalone pages)
│   │   │   ├── Hero.tsx
│   │   │   ├── Features.tsx
│   │   │   ├── HowItWorks.tsx
│   │   │   ├── Benefits.tsx
│   │   │   └── CTA.tsx
│   │   └── common/
│   │       ├── LanguageSwitcher.tsx
│   │       ├── WhatsAppButton.tsx  # Reusable WhatsApp CTA
│   │       └── SEOHead.tsx         # Meta tags component
│   ├── pages/
│   │   ├── Home.tsx                # Composes all sections
│   │   ├── PrivacyPolicy.tsx       # Legal page
│   │   └── TermsOfService.tsx      # Legal page
│   ├── i18n/
│   │   ├── config.ts              # i18next setup (typed)
│   │   └── locales/
│   │       ├── pt.json             # Portuguese (primary)
│   │       ├── en.json             # English
│   │       └── es.json             # Spanish
│   ├── lib/
│   │   └── utils.ts               # cn() helper + shared utilities
│   └── types/
│       └── i18n.d.ts              # i18next type augmentations
├── .gitignore
├── .prettierrc                     # Prettier config
├── CNAME                           # terpafy.ai
├── components.json                 # shadcn/ui configuration
├── eslint.config.js                # ESLint flat config
├── index.html                      # HTML template
├── package.json                    # Project config
├── pnpm-lock.yaml                  # Lock file
├── postcss.config.js               # PostCSS (if needed for Tailwind v4)
├── README.md                       # Updated documentation
├── tailwind.config.ts              # Tailwind v4 config (if not CSS-first)
├── tsconfig.json                   # TypeScript config (solution-style)
├── tsconfig.app.json               # App-specific TS config
├── tsconfig.node.json              # Node/Vite TS config
├── vite.config.ts                  # Vite configuration
└── docs/
    └── REWRITE_PLAN.md             # This file
```

---

## 5. Content Inventory (What to Preserve)

### Must Keep (Content Only — Restyle Everything)

| Content | Source | Notes |
|---------|--------|-------|
| **Homepage sections** | Hero, Features, HowItWorks, Benefits, CTA | Text from i18n locale files |
| **Privacy Policy** | Full legal document in pt/en/es | LGPD compliance — review with legal if changing |
| **Terms of Service** | Full legal document in pt/en/es | Legal content — review if changing |
| **i18n translations** | `src/i18n/locales/*.json` | All 3 locale files — update keys if structure changes |
| **CNAME** | `terpafy.ai` | DNS configuration |
| **WhatsApp number** | `+55 11 96001-1592` (env var override) | `VITE_WHATSAPP_NUMBER` |
| **Contact email** | `terpafy.ai@gmail.com` | In legal pages |
| **Medical disclaimer** | Footer text | Required for compliance |

### Must Remove / Review for Public Repo

- No internal infrastructure details
- No API endpoints or backend URLs (beyond env vars)
- No team member personal information
- No internal business metrics or strategy
- Ensure WhatsApp number is in env var, not hardcoded in source

---

## 6. Design Token System

### Current Tokens (to be replaced by Figma branding)
```
Primary:     #1E642E → TBD from Figma
Secondary:   #9ACD32 → TBD from Figma
Fonts:       Montserrat + Open Sans → TBD from Figma
```

### Token Architecture (Tailwind v4)
Tailwind CSS 4 uses a CSS-first configuration approach:

```css
/* src/index.css */
@import "tailwindcss";

@theme {
  /* Colors — populated from Figma brand */
  --color-primary: /* from Figma */;
  --color-primary-dark: /* from Figma */;
  --color-secondary: /* from Figma */;
  --color-secondary-dark: /* from Figma */;
  --color-accent: /* from Figma */;
  
  /* Semantic */
  --color-success: /* from Figma */;
  --color-warning: /* from Figma */;
  --color-error: /* from Figma */;
  
  /* Neutrals */
  --color-background: /* from Figma */;
  --color-foreground: /* from Figma */;
  --color-muted: /* from Figma */;
  --color-border: /* from Figma */;
  
  /* Typography */
  --font-heading: /* from Figma */;
  --font-body: /* from Figma */;
  
  /* Spacing (8pt grid) */
  --spacing-xs: 0.25rem;
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;
  --spacing-lg: 1.5rem;
  --spacing-xl: 2rem;
  --spacing-2xl: 3rem;
  --spacing-3xl: 4rem;
  
  /* Border radius */
  --radius-sm: 0.25rem;
  --radius-md: 0.5rem;
  --radius-lg: 0.75rem;
  --radius-xl: 1rem;
}
```

---

## 7. Implementation Tasks

### Phase 0: Figma Design Extraction (Prerequisite)
> **Blocked until Figma access is resolved (see Section 2)**

- [ ] Resolve Figma MCP access (upgrade plan or export manually)
- [ ] Extract color palette, typography, spacing from Figma
- [ ] Export brand assets (logo SVG, favicon, OG image)
- [ ] Document component designs and layout specs
- [ ] Screenshot each section for reference during implementation

### Phase 1: Project Scaffolding
> New project setup with TypeScript, Tailwind v4, and tooling

- [ ] Initialize new project: `pnpm create vite terpafy-landing --template react-ts`
- [ ] Configure TypeScript (`tsconfig.json`, `tsconfig.app.json`, `tsconfig.node.json`)
- [ ] Install and configure Tailwind CSS 4 (`@tailwindcss/vite`)
- [ ] Install and configure shadcn/ui (`components.json`, `lib/utils.ts`)
- [ ] Set up ESLint flat config + typescript-eslint
- [ ] Set up Prettier
- [ ] Configure Vite (`vite.config.ts` — base `/`, port 5173, sourcemaps)
- [ ] Copy `CNAME` file to `public/`
- [ ] Update `index.html` template with meta tags, OG tags, favicon
- [ ] Create `.gitignore`

### Phase 2: Design System & Tokens
> Apply Figma branding to Tailwind theme

- [ ] Configure Tailwind v4 theme tokens in `src/index.css` (colors, fonts, spacing, radii)
- [ ] Import Google Fonts (or self-host fonts from Figma) in `index.html`
- [ ] Install shadcn/ui base components: Button, Card, Badge, Separator
- [ ] Create `Section.tsx` layout wrapper component (consistent padding, max-width)
- [ ] Verify design token output with a simple test page

### Phase 3: i18n Setup
> Migrate existing translations to TypeScript setup

- [ ] Install `i18next`, `react-i18next`, `i18next-browser-languagedetector`
- [ ] Create typed i18n config (`src/i18n/config.ts`)
- [ ] Copy locale files (`pt.json`, `en.json`, `es.json`) — review and update keys if section structure changed
- [ ] Add i18next type augmentations (`src/types/i18n.d.ts`) for autocomplete
- [ ] Implement `LanguageSwitcher.tsx` with new design

### Phase 4: Layout & Navigation
> App shell with header and footer

- [ ] Create `App.tsx` with React Router (routes: `/`, `/privacy`, `/terms`)
- [ ] Create `Header.tsx` — sticky nav with logo, nav links, language switcher
- [ ] Create `Footer.tsx` — brand info, quick links, legal links, medical disclaimer
- [ ] Create `WhatsAppButton.tsx` — reusable CTA with env var support (`VITE_WHATSAPP_NUMBER`)
- [ ] Implement responsive mobile navigation (hamburger menu or similar)

### Phase 5: Homepage Sections
> Build each section matching Figma designs

- [ ] `Hero.tsx` — headline, subtext, WhatsApp CTA, trust badges, hero visual
- [ ] `Features.tsx` — feature cards grid (Monitoring, Reminders, Security, Education)
- [ ] `HowItWorks.tsx` — 3-step process with connectors
- [ ] `Benefits.tsx` — dual-column patient/professional benefits
- [ ] `CTA.tsx` — final call-to-action with WhatsApp button
- [ ] `Home.tsx` — compose all sections in order
- [ ] Verify responsive behavior at all breakpoints (mobile, tablet, desktop)

### Phase 6: Legal Pages
> Migrate Privacy Policy and Terms of Service

- [ ] `PrivacyPolicy.tsx` — styled legal page with i18n content
- [ ] `TermsOfService.tsx` — styled legal page with i18n content  
- [ ] Verify all legal content is preserved exactly (compare with current locale files)
- [ ] Add back-to-home navigation

### Phase 7: SEO & Performance
> Meta tags, accessibility, performance optimization

- [ ] Add comprehensive `<head>` meta tags (description, keywords, OG tags, Twitter card)
- [ ] Add `robots.txt` to `public/`
- [ ] Add structured data (JSON-LD) for Organization schema
- [ ] Ensure all images have alt text
- [ ] Verify WCAG AA compliance (color contrast, keyboard nav, screen reader)
- [ ] Run Lighthouse audit — target >90 on all categories
- [ ] Optimize font loading (preconnect, font-display: swap)

### Phase 8: CI/CD & Deployment
> Update GitHub Actions for new stack

- [ ] Update `.github/workflows/deploy.yml`:
  - Node.js 22 LTS (from 18)
  - pnpm (from npm) with caching
  - `pnpm install --frozen-lockfile`
  - `pnpm build`
  - Keep `actions/upload-pages-artifact@v3` + `actions/deploy-pages@v4`
- [ ] Ensure `CNAME` is copied to `dist/` during build (Vite copies from `public/`)
- [ ] Test deployment to GitHub Pages
- [ ] Verify custom domain `terpafy.ai` resolves correctly

### Phase 9: Documentation & Cleanup
> Final polish

- [ ] Update `README.md` with new stack, setup instructions, design system docs
- [ ] Remove all old JSX files and unused dependencies
- [ ] Final review: no secrets, internal URLs, or sensitive data in public repo
- [ ] Cross-browser testing (Chrome, Firefox, Safari, mobile browsers)

---

## 8. Updated GitHub Actions Workflow

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Install pnpm
        uses: pnpm/action-setup@v4
        with:
          version: 9

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '22'
          cache: 'pnpm'

      - name: Install dependencies
        run: pnpm install --frozen-lockfile

      - name: Type check
        run: pnpm typecheck

      - name: Lint
        run: pnpm lint

      - name: Build
        run: pnpm build

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

---

## 9. Package.json Scripts

```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "preview": "vite preview",
    "typecheck": "tsc -b --noEmit",
    "lint": "eslint .",
    "format": "prettier --write .",
    "format:check": "prettier --check ."
  }
}
```

---

## 10. Dependencies

### Production
```
react ^19.x
react-dom ^19.x
react-router-dom ^7.x
i18next ^25.x
react-i18next ^16.x
i18next-browser-languagedetector ^8.x
lucide-react ^0.x
class-variance-authority (shadcn/ui dep)
clsx (shadcn/ui dep)
tailwind-merge (shadcn/ui dep)
```

### Development
```
typescript ^5.x
@types/react
@types/react-dom
@vitejs/plugin-react ^5.x
vite ^7.x
@tailwindcss/vite (Tailwind v4 Vite plugin)
tailwindcss ^4.x
eslint ^9.x
@eslint/js
typescript-eslint
eslint-plugin-react-hooks
eslint-plugin-react-refresh
prettier
prettier-plugin-tailwindcss
```

---

## 11. Migration Strategy

### Approach: Clean Rewrite (not incremental migration)

**Rationale**: Since we're changing from JS→TS, Tailwind 3→4, and completely new branding, an incremental migration would be more complex than a clean rewrite. The content (i18n files, legal text) can be directly copied.

### Steps:
1. **Create a feature branch**: `feat/landing-page-rewrite`
2. **Delete old src/ contents** (keep i18n locale JSON files)
3. **Scaffold new project in-place** (keep `.github/`, `CNAME`, `docs/`)
4. **Build incrementally** (Phase 1 → Phase 9)
5. **PR review** with before/after screenshots
6. **Merge to main** → auto-deploys via GitHub Actions

### Rollback Plan
- The old code is preserved in git history
- Can revert the merge commit if issues are found post-deploy
- Consider keeping a `legacy` tag or branch before merging

---

## 12. Public Repo Security Checklist

Since this is a **public repository**, verify before every commit:

- [ ] No API keys, tokens, or secrets in source code
- [ ] WhatsApp number only referenced via `VITE_WHATSAPP_NUMBER` env var (with safe fallback)
- [ ] No internal infrastructure URLs (Courier API, Ollama, DB connection strings)
- [ ] No team member personal information beyond public contact email
- [ ] No business strategy, metrics, or internal documentation
- [ ] No `.env` files committed (only `.env.example` with placeholder values)
- [ ] `CNAME` only contains the public domain (`terpafy.ai`)
- [ ] OG images and assets don't contain sensitive information

---

## 13. Risks & Mitigations

| Risk | Impact | Likelihood | Mitigation |
|------|--------|------------|------------|
| **Figma access blocked** | Cannot implement new branding | High (current state) | Resolve Figma plan/permissions first; fallback: export manually |
| **Tailwind v4 breaking changes** | Build failures, class name changes | Medium | Review Tailwind v4 migration guide; test thoroughly |
| **shadcn/ui + Tailwind v4 compatibility** | Component styling issues | Medium | Verify shadcn/ui supports Tailwind v4; use latest version |
| **i18n key changes** | Missing translations | Low | Diff old vs new locale files; keep translation keys stable |
| **GitHub Pages caching** | Users see old version | Low | Vite content hashing handles this; verify cache headers |
| **SEO ranking impact** | Temporary traffic drop | Low | Keep same URL structure; add redirects if routes change |
| **Legal content accuracy** | Compliance risk | High | Copy legal text verbatim; have legal review any formatting changes |

---

## 14. Open Questions

1. **Figma access** — which option (A/B/C from Section 2) will be used to unblock design extraction?
2. **Font choices** — does the new branding keep Montserrat + Open Sans, or use different fonts?
3. **Color palette** — what are the exact new brand colors from the TerpafyGrow Figma?
4. **Animations** — should we add scroll animations (e.g., Framer Motion) or keep it simple?
5. **Analytics** — should we add Google Analytics, Plausible, or similar? (consider privacy implications for a healthcare app)
6. **Cookie consent** — is a cookie banner needed given LGPD compliance?
7. **Dark mode** — should the new design support dark mode?
8. **Blog/content section** — is there a plan to add a blog or content section in the future?

---

## 15. Definition of Done

- [ ] All homepage sections match Figma designs pixel-perfect on mobile, tablet, and desktop
- [ ] All 3 languages (pt, en, es) render correctly with no missing translations
- [ ] Privacy Policy and Terms of Service preserved with correct legal content
- [ ] Lighthouse scores >90 on Performance, Accessibility, Best Practices, SEO
- [ ] WCAG AA compliance verified
- [ ] GitHub Actions deploys successfully to GitHub Pages
- [ ] Custom domain `terpafy.ai` resolves and serves the new site
- [ ] No secrets or sensitive data in the public repository
- [ ] TypeScript compiles with no errors (`pnpm typecheck`)
- [ ] ESLint passes with no errors (`pnpm lint`)
- [ ] Cross-browser tested (Chrome, Firefox, Safari, mobile)
- [ ] README.md updated with new setup and development instructions
