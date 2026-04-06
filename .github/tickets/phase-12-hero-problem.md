# feat: [Phase 12] Hero Redesign + Problem Section

## Description

Redesign the Hero section to include ORIENTA tags, Ecosystem pills, and a decorative Chat Preview Widget. Create the new Problem section with a stat block and 4 pain-point cards, positioned immediately after the Hero.

## Related

- Depends on: Phase 11 (ChatButton must exist before this phase)
- Part of: Landing Page v2 redesign (Phases 11–15)
- Figma: https://www.figma.com/design/39naJesWwb1Kpi1vbi6xVw/TerpafyGrow?node-id=1-2

## Pre-Implementation Checklist (Figma)

Before writing code, open the Figma file and verify:
- [ ] Logo mark — is the asterisk SVG in `Logo.tsx` unchanged, or updated in the header frame?
- [ ] Primary button border-radius — `rounded-lg` (8px) or `rounded-xl` (12px)?
- [ ] `–––` section label — is this CSS text (`font-mono`) or an SVG divider?
- [ ] Chat preview widget card — exact border radius and shadow from Figma inspect panel

## Implementation Details

### i18n Convention
Define new keys in `pt.json` (source of truth), then add translated equivalents separately to `en.json` and `es.json`. Never write multiple locales inline.

---

### Hero Section — changes to `src/components/sections/Hero.tsx`

**Keep unchanged:** badge, 2-line headline, subtitle copy, secondary CTA scroll anchor to `#how-it-works`.

**Replace:** `<WhatsAppButton>` → `<ChatButton variant="primary">` (from Phase 11).

**Add — ORIENTA tag list** (below subtitle, above CTAs):
```
Cultivadores iniciantes · Produtores intermediários · Growers avançados · Associação de pacientes
```
Style: `flex flex-wrap gap-x-3 text-sm text-foreground-muted` with `·` as separator character.

**Add — Ecosystem pill row** (below ORIENTA list):
- Label: `PARTE DO ECOSSISTEMA` — `text-xs font-medium uppercase tracking-widest text-foreground-muted`
- Pills layout: `flex flex-wrap gap-2 items-center mt-2`
- Active pill (`Grow`): `bg-primary text-primary-foreground rounded-full px-3 py-1 text-xs font-medium`
- Inactive pills (`Care`, `Med`, `Assoc`, `Marketing`): `bg-muted text-foreground-muted rounded-full px-3 py-1 text-xs`

**Add — Chat Preview Widget** (extract to `ChatPreviewWidget.tsx`):
- Position: right column on `lg:` breakpoint via `lg:grid lg:grid-cols-2 lg:gap-16`; below CTAs on mobile
- Send button: decorative only — clicking triggers `ChatButton` behavior (same as main CTA)

### Chat Preview Widget layout

```
┌──────────────────────────────────────────────┐
│ ▪  Terpafy Grow · Cultivation Specialist     │  ← header bar, dark bg
│    Talk to Terpafy Grow now.                 │
├──────────────────────────────────────────────┤
│                                              │
│    Bem-vindo ao TerpafyGrow                  │  ← welcome message bubble
│    Um especialista em cultivo de cannabis    │
│    disponível para orientar sua planta       │
│                                              │
│  ┌─────────────────────────────┬──────────┐  │
│  │  Escreva sua dúvida...      │  [→]     │  │  ← decorative input row
│  └─────────────────────────────┴──────────┘  │
└──────────────────────────────────────────────┘
```

Card: `rounded-2xl border border-border bg-white shadow-lg overflow-hidden`
Input area: `border-t border-border bg-background px-4 py-3 flex items-center gap-2`

### i18n — add to `pt.json`

```json
"hero": {
  "orientaTags": [
    "Cultivadores iniciantes",
    "Produtores intermediários",
    "Growers avançados",
    "Associação de pacientes"
  ],
  "ecosystemLabel": "PARTE DO ECOSSISTEMA",
  "ecosystemPills": ["Grow", "Care", "Med", "Assoc", "Marketing"],
  "chatWidget": {
    "header": "Terpafy Grow · Cultivation Specialist",
    "subheader": "Talk to Terpafy Grow now.",
    "welcome": "Bem-vindo ao TerpafyGrow",
    "welcomeSub": "Um especialista em cultivo de cannabis disponível para orientar sua planta",
    "placeholder": "Escreva sua dúvida..."
  }
}
```

Then add translated equivalents to `en.json` and `es.json`.

---

### Problem Section — `src/components/sections/Problem.tsx`

**Section ID:** `#problem`
**Position in `Home.tsx`:** immediately after `<Hero />`

#### Section label pattern (to be reused across all new sections in this redesign)

```tsx
<span className="font-mono text-xs uppercase tracking-widest text-foreground-muted">
  ––– {t("problem.label")}
</span>
```

> ⚠️ If Figma shows this as an SVG divider instead of text, implement as an SVG. Verify before coding.

#### Layout

```
[Section label]     ––– O problema
[Headline]          O cultivador tem dúvida. A internet tem opinião...
[Stat block]        73%  +  label text
[Body paragraph]
[ChatButton primary]   [secondary scroll link to #how-it-works]
[4 pain point cards — grid-cols-1 sm:grid-cols-2]
```

Stat block style: `text-5xl font-black text-primary` for the number, `text-base text-foreground-muted` for the label.

#### 4 pain point cards

Each card: `rounded-xl border border-border bg-background p-6` with title + body.

| Key | Title | Body |
|---|---|---|
| `generic` | Respostas genéricas que não resolvem | Fóruns e grupos entregam opiniões contraditórias. O cultivador aplica a orientação errada e perde tempo — e às vezes o lote inteiro. |
| `late` | Problemas identificados tarde demais | Deficiências, desvios de pH, pragas — sem orientação no momento certo, o dano já está feito quando o cultivador percebe. |
| `variation` | Variação entre lotes sem explicação | O cultivador repete o processo e obtém resultados diferentes. Sem orientação estruturada, impossível saber o que mudou. |
| `noFeedback` | Nenhum retorno sobre o que o produto produz | O cultivador entrega e não sabe mais nada. Não há ciclo de informação entre o que é produzido e o que o paciente experimenta. |

### i18n — add to `pt.json`

```json
"problem": {
  "label": "O problema",
  "title": "O cultivador tem dúvida. A internet tem opinião. São coisas diferentes.",
  "stat": "73%",
  "statLabel": "dos pacientes relatam variação de resultado entre lotes do mesmo produto.",
  "body": "Fóruns, grupos de WhatsApp e buscas no Google oferecem informação em quantidade — mas sem contexto, sem responsabilidade técnica e sem conhecimento do seu cultivo específico. O resultado é tentativa, erro e lote comprometido.",
  "cta": "Falar com o Terpafy Grow",
  "ctaSecondary": "Ver como funciona",
  "cards": {
    "generic":    { "title": "Respostas genéricas que não resolvem",       "body": "Fóruns e grupos entregam opiniões contraditórias. O cultivador aplica a orientação errada e perde tempo — e às vezes o lote inteiro." },
    "late":       { "title": "Problemas identificados tarde demais",        "body": "Deficiências, desvios de pH, pragas — sem orientação no momento certo, o dano já está feito quando o cultivador percebe." },
    "variation":  { "title": "Variação entre lotes sem explicação",         "body": "O cultivador repete o processo e obtém resultados diferentes. Sem orientação estruturada, impossível saber o que mudou." },
    "noFeedback": { "title": "Nenhum retorno sobre o que o produto produz", "body": "O cultivador entrega e não sabe mais nada. Não há ciclo de informação entre o que é produzido e o que o paciente experimenta." }
  }
}
```

Then add translated equivalents to `en.json` and `es.json`.

## Acceptance Criteria

- [ ] Hero layout switches to 2-col at `lg:` breakpoint (content left, widget right)
- [ ] ORIENTA tag list renders below subtitle and wraps correctly on mobile
- [ ] Ecosystem pill row renders with `Grow` visually active (primary color)
- [ ] `ChatPreviewWidget` renders in correct position (right column desktop / below CTAs mobile)
- [ ] Widget send button triggers `ChatButton` behavior (VITE_CHAT_URL or "em breve")
- [ ] `WhatsAppButton` usage removed from `Hero.tsx`
- [ ] Problem section renders at `#problem` with `id="problem"` attribute
- [ ] 73% stat renders as large prominent typographic block
- [ ] 4 pain point cards render in `grid-cols-1 sm:grid-cols-2`
- [ ] All i18n keys above exist in `pt.json`, `en.json`, and `es.json`
- [ ] `<Problem />` added to `Home.tsx` immediately after `<Hero />`
- [ ] `pnpm typecheck && pnpm lint` pass with no errors

## Files to Create/Modify

- `src/components/sections/Hero.tsx` (modify)
- `src/components/common/ChatPreviewWidget.tsx` (create)
- `src/components/sections/Problem.tsx` (create)
- `src/pages/Home.tsx` (add `<Problem />` after `<Hero />`)
- `src/i18n/locales/pt.json` (add `hero.*` additions + full `problem.*`)
- `src/i18n/locales/en.json` (add translated keys)
- `src/i18n/locales/es.json` (add translated keys)
