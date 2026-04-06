# Terpafy Landing Page - AI Agent Instructions

## Project Overview
Single-page marketing site for Terpafy digital health assistant (SEC treatment support via WhatsApp). Mobile-first React SPA with i18n support (PT/EN/ES) built using Vite and Tailwind CSS.

## Architecture

### Stack
- **Build Tool**: Vite (fast dev server, HMR)
- **Framework**: React 19 with React Router for `/privacy` and `/terms` routes
- **Styling**: Tailwind CSS (utility-first) + PostCSS + Autoprefixer
- **Internationalization**: i18next + react-i18next with browser language detection

### Component Structure
```
src/
├── components/        # Landing page sections
│   ├── Hero.jsx       # Above-fold CTA with brand messaging
│   ├── Features.jsx   # Product capabilities grid
│   ├── HowItWorks.jsx # Step-by-step user journey
│   ├── Benefits.jsx   # Patient value propositions
│   ├── CTA.jsx        # Conversion section
│   ├── Footer.jsx     # Links, social, legal
│   ├── LanguageSwitcher.jsx  # PT/EN/ES toggle
│   └── ui/            # Reusable components (Button, Card)
├── pages/             # Full-page routes
│   ├── PrivacyPolicy.jsx
│   └── TermsOfService.jsx
└── i18n/
    ├── config.js      # i18next setup
    └── locales/       # PT/EN/ES translations (JSON)
```

## Development Workflows

### Setup & Run
```bash
npm install           # Install dependencies
npm run dev           # Vite dev server at http://localhost:5173
npm run build         # Production build to dist/
npm run preview       # Preview production build locally
```

### Deployment
```bash
npm run deploy        # Build + deploy to GitHub Pages (gh-pages)
# Configured in package.json: "predeploy": "npm run build"
```

### Testing
- No automated tests configured (displays error message)
- Manual browser testing required

## Code Conventions

### Styling with Tailwind
- **8-Point Grid**: Use spacing scale: `8px`, `16px`, `24px`, `32px`, `48px`, `64px`
- **Brand Colors** (defined in `tailwind.config.js`):
  - Primary: `#1E642E` (Terpafy Green)
  - Secondary: `#9ACD32` (Lime Green)
  - Success: `#388E3C`, Alert: `#DC143C`, Warning: `#FFD700`
- **Typography**:
  - Headings: Montserrat (font-bold, font-semibold)
  - Body: Open Sans (font-normal, font-medium)
  - Base: 16px, line-height 1.6
- **Responsive Design**: Mobile-first with `sm:`, `md:`, `lg:` breakpoints

### Internationalization Pattern
```jsx
import { useTranslation } from 'react-i18next';

function MyComponent() {
  const { t } = useTranslation();
  return <h1>{t('hero.title')}</h1>;  // Looks up in src/i18n/locales/{pt|en|es}.json
}
```
- **Default Language**: Portuguese (`pt`)
- **Fallback**: Portuguese if key missing in selected language
- **Storage**: Language preference persisted to localStorage
- **Detection**: Auto-detect from browser or localStorage

### Routing
- **BrowserRouter** wraps entire app in `App.jsx`
- **Routes**:
  - `/` → HomePage (all landing sections)
  - `/privacy` → PrivacyPolicy
  - `/terms` → TermsOfService

### Component Composition
- Landing page = composition of section components (`Hero` + `Features` + ...)
- Reusable UI primitives in `components/ui/` (Button, Card)
- Each section component self-contained with own i18n keys

## Project-Specific Patterns

### Vite Configuration
- **Base Path**: `/` (root deployment, not subdirectory)
- **Dev Server**: Port 5173, `host: true` for network access
- **Build Output**: `dist/` with sourcemaps enabled
- **Assets**: Bundled to `dist/assets/`

### GitHub Pages Deployment
- Uses `gh-pages` npm package to push `dist/` to `gh-pages` branch
- CNAME file at root for custom domain support
- Runs `npm run build` automatically before deploy

### i18next Setup
```javascript
// src/i18n/config.js pattern
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: { pt: {...}, en: {...}, es: {...} },
    fallbackLng: 'pt',
    lng: 'pt',  // Default to Portuguese
    detection: {
      order: ['localStorage', 'navigator'],  // Prefer saved choice
      caches: ['localStorage']
    }
  });
```

## Critical Files
- `src/App.jsx`: Router setup and HomePage composition
- `src/i18n/config.js`: i18next initialization and language detection
- `vite.config.js`: Build configuration and dev server settings
- `tailwind.config.js`: Design system tokens (colors, fonts, spacing)
- `package.json`: Scripts for dev, build, deploy workflows
- `CNAME`: Custom domain configuration for GitHub Pages

## Design Guidelines
- **WCAG AA Compliant**: Maintain accessible color contrast ratios
- **Performance Target**: Lighthouse score > 90
- **Mobile-First**: Design for mobile screens, enhance for desktop
- **Brand Consistency**: Reference `terpafy_brand_package/` for visual identity guidelines

## Translation Updates
When adding new UI text:
1. Add key to all three locale files: `src/i18n/locales/{pt,en,es}.json`
2. Use nested keys for organization (e.g., `hero.title`, `features.item1.title`)
3. Keep Portuguese as source of truth; translate to EN/ES
4. Test language switcher to verify all keys resolve correctly
