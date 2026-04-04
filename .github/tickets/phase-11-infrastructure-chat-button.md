# feat: [Phase 11] Infrastructure – ChatButton + Header Update

## Description

Replace the `WhatsAppButton` component with a new `ChatButton` that points to the future chat platform (`VITE_CHAT_URL`). Update the Header nav links to reflect the new section structure of the v2 landing page.

## Related

- Part of: Landing Page v2 redesign (Phases 11–15)
- Figma: https://www.figma.com/design/39naJesWwb1Kpi1vbi6xVw/TerpafyGrow?node-id=1-2
- Next: Phase 12 – Hero + Problem Sections

## Implementation Details

### i18n Convention
All copy lives in `src/i18n/locales/`. The setup uses `react-i18next` with 3 static JSON files loaded at startup via `src/i18n/config.ts`. **Never inline translations from multiple locales in the same code block.** Define keys in `pt.json` first (source of truth), then add translated equivalents separately to `en.json` and `es.json`.

```ts
// Component usage pattern (already established)
const { t } = useTranslation();
t("nav.forWho") // reads from active locale JSON
```

### ChatButton spec

Create `src/components/common/ChatButton.tsx`:

```tsx
interface ChatButtonProps {
  variant?: "primary" | "inline";
  children?: React.ReactNode;
  className?: string;
}
```

**Behavior:**
- Reads `VITE_CHAT_URL` from `import.meta.env`
- If set → `window.open(VITE_CHAT_URL, "_blank", "noopener,noreferrer")`
- If not set → show visible "em breve" user feedback (e.g. inline state toggle showing a tooltip or badge — **no `console.log`**, must be visible to the user)
- Icon: `MessageSquare` from lucide-react (distinguishes from WhatsApp's `MessageCircle`)
- Mirrors `primary` and `inline` variants from the existing `WhatsAppButton` for drop-in replacement

### Header nav update

Current `NAV_LINKS` in `Header.tsx`:
```ts
{ labelKey: "nav.features",   href: "/#features" }
{ labelKey: "nav.howItWorks", href: "/#how-it-works" }
{ labelKey: "nav.benefits",   href: "/#benefits" }     // ← replace this
```

New third link:
```ts
{ labelKey: "nav.forWho", href: "/#for-who" }
```

### .env.example

Add:
```
# Chat platform URL — leave blank to show "em breve" state on CTA buttons
VITE_CHAT_URL=
```

### i18n keys to add

**`pt.json`** (source of truth):
```json
"nav": {
  "forWho": "Para quem"
}
```

Then add translated equivalents:
- **`en.json`**: `"forWho": "For whom"`
- **`es.json`**: `"forWho": "Para quién"`

> All other `nav.*` keys already exist — only `forWho` is new.

## Acceptance Criteria

- [ ] `ChatButton` created with `primary` and `inline` variants
- [ ] Primary variant: `bg-primary` button with `MessageSquare` icon, same dimensions as current `WhatsAppButton`
- [ ] Inline variant: underline link style with icon, same as current `WhatsAppButton` inline
- [ ] Clicking button when `VITE_CHAT_URL` is set opens the URL in a new tab
- [ ] Clicking button when `VITE_CHAT_URL` is unset shows a visible "em breve" state to the user
- [ ] Header desktop CTA (`WhatsAppButton`) replaced with `ChatButton`
- [ ] Header mobile panel CTA replaced with `ChatButton`
- [ ] Nav third link points to `#for-who` with label from `nav.forWho` key
- [ ] `nav.forWho` key exists in `pt.json`, `en.json`, and `es.json`
- [ ] `VITE_CHAT_URL` added to `.env.example` with comment
- [ ] `pnpm typecheck && pnpm lint` pass with no errors

## Files to Create/Modify

- `src/components/common/ChatButton.tsx` (create)
- `src/components/layout/Header.tsx` (modify — swap `WhatsAppButton`, update `NAV_LINKS`)
- `.env.example` (modify — add `VITE_CHAT_URL`)
- `src/i18n/locales/pt.json` (add `nav.forWho`)
- `src/i18n/locales/en.json` (add translated `nav.forWho`)
- `src/i18n/locales/es.json` (add translated `nav.forWho`)
