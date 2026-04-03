# Terpafy Landing Page

Institutional landing page for **Terpafy** — a digital health assistant for medicinal cannabis treatment via WhatsApp.

🌐 **Live**: [terpafy.ai](https://terpafy.ai)

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 19 |
| Language | TypeScript 5 |
| Build tool | Vite 7 |
| Styling | Tailwind CSS v4 (CSS-first, `@theme`) |
| Components | shadcn/ui (Radix primitives) |
| i18n | i18next + react-i18next (PT / EN / ES) |
| Routing | React Router v7 |
| Deployment | GitHub Pages (auto-deploy on push to `main`) |

---

## Quick Start

```bash
pnpm install
pnpm dev        # http://localhost:5173
```

### Environment Variables

Copy `.env.example` to `.env` and fill in values:

```bash
cp .env.example .env
```

| Variable | Description |
|----------|-------------|
| `VITE_WHATSAPP_NUMBER` | WhatsApp phone number for CTA buttons (digits only, with country code, no `+`) |
| `VITE_API_URL` | Courier API base URL (optional, reserved for future use) |

---

## Available Scripts

```bash
pnpm dev          # Start dev server at localhost:5173
pnpm build        # Production build → dist/
pnpm preview      # Preview production build locally
pnpm typecheck    # TypeScript type checking (tsc -b --noEmit)
pnpm lint         # ESLint
pnpm format       # Prettier (write)
pnpm format:check # Prettier (check only)
```

---

## Design System

### Color Tokens

| Token | Value | Usage |
|-------|-------|-------|
| `--color-primary` | `#f2594b` | Terpafy Pulse (Red) — CTAs, accents |
| `--color-secondary` | `#eaf205` | Signal Intelligence (Yellow) — highlights |
| `--color-accent` | `#0aeded` | Connected Flow (Cyan) — badges |
| `--color-accent-green` | `#93a603` | Living Science (Olive) — nature elements |
| `--color-background` | `#f6f6f6` | Page background |
| `--color-foreground` | `#3a3a3a` | Primary text |

All tokens live in `src/index.css` under `@theme`.

### Typography

- **Headings**: Anton (Google Fonts) — `font-heading`
- **Body**: Inter (Google Fonts) — `font-body`

---

## Project Structure

```
src/
├── App.tsx                  # Router + global layout + lazy loading
├── main.tsx                 # Entry point, i18n init
├── index.css                # Tailwind v4 @theme tokens
├── components/
│   ├── common/              # Logo, LanguageSwitcher, WhatsAppButton
│   ├── layout/              # Header, Footer, Section
│   ├── sections/            # Hero, Features, HowItWorks, Benefits, CTA
│   └── ui/                  # shadcn/ui primitives (Button, Card, Badge…)
├── pages/
│   ├── Home.tsx             # Composes all homepage sections
│   ├── PrivacyPolicy.tsx    # Privacy policy (8 sections, LGPD)
│   └── TermsOfService.tsx   # Terms of service (5 sections + disclaimer)
├── i18n/
│   ├── config.ts            # i18next setup (PT default, browser detection)
│   └── locales/             # pt.json, en.json, es.json
├── hooks/                   # Custom React hooks
├── types/                   # TypeScript interfaces
└── lib/                     # Utilities (cn, etc.)
public/
├── CNAME                    # terpafy.ai
├── favicon.svg
└── robots.txt               # Allow all, sitemap link
.github/
└── workflows/
    └── deploy.yml           # CI: typecheck → lint → build → deploy to Pages
```

---

## Deployment

Deploys automatically to **GitHub Pages** on every push to `main`.

Pipeline (`.github/workflows/deploy.yml`):
1. `pnpm install --frozen-lockfile`
2. `pnpm typecheck`
3. `pnpm lint`
4. `pnpm build` → `dist/`
5. Upload artifact → Deploy to Pages

---

## Contributing

**Branch naming**: `feat/`, `fix/`, `refactor/`, `chore/` prefixes.

**Commit style**: `type: short description (#issue)`

**Before opening a PR**, ensure all checks pass locally:
```bash
pnpm typecheck && pnpm lint && pnpm build
```

