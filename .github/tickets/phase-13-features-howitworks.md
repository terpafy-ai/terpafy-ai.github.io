# feat: [Phase 13] Update Features (6 cards) + Rewrite HowItWorks

## Description

Update the existing Features section from 4 to 6 capability cards with new copy. Rewrite the HowItWorks section replacing the 3-step list with a static chat transcript demo and two Capacidade detail cards.

## Related

- Depends on: Phase 11 (`ChatButton`), Phase 12 (section label pattern)
- Part of: Landing Page v2 redesign (Phases 11–15)
- Figma: https://www.figma.com/design/39naJesWwb1Kpi1vbi6xVw/TerpafyGrow?node-id=1-2

## Implementation Details

### i18n Convention
Define keys in `pt.json` first (source of truth). Add translated equivalents separately to `en.json` and `es.json`. Old removed keys must be deleted from all 3 locale files.

---

### Features Section — `src/components/sections/Features.tsx`

**Section ID:** `#features` (keep unchanged)

**Changes:**
- Grid update: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3` (was 2-col)
- Replace `<WhatsAppButton>` → `<ChatButton variant="primary">`
- Replace all 4 card copy items with 6 new items (see keys below)

**Cards to remove from all 3 locale files:** `features.items.monitoring`, `features.items.reminders`, `features.items.security`, `features.items.education`

### i18n — update in `pt.json`

```json
"features": {
  "label": "O Terpafy Grow",
  "title": "Um especialista em cultivo. Disponível agora.",
  "subtitle": "Não é uma busca. Não é um fórum. É uma conversa com um especialista em cultivo de cannabis que entende o seu contexto e orienta com base no que está acontecendo na sua planta agora.",
  "cta": "Falar com o Terpafy Grow",
  "items": {
    "knowledge":  { "title": "Conhecimento especializado",  "description": "VPD, pH, EC, perfil de terpenos, manejo de nutrientes, pragas, poda, floração — profundidade técnica real sobre cannabis." },
    "adapts":     { "title": "Adapta ao seu nível",         "description": "Iniciante ou avançado. A linguagem, a profundidade e o tipo de orientação mudam de acordo com quem está perguntando." },
    "available":  { "title": "Na hora que você precisa",    "description": "Problemas de cultivo não esperam. A orientação está disponível quando o cultivador identifica o problema — não no dia seguinte." },
    "diagnosis":  { "title": "Diagnóstico contextual",      "description": "Pergunta o que precisa antes de orientar. Não entrega respostas prontas — entrega diagnósticos baseados no seu caso." },
    "explains":   { "title": "Explica o porquê",            "description": "Além da orientação imediata, explica o raciocínio. Você aprende enquanto resolve — e na próxima vez identifica sozinho." },
    "ecosystem":  { "title": "Parte do ecossistema",        "description": "O Terpafy Grow é a porta de entrada. Com o tempo, o que acontece aqui conecta o cultivo ao cuidado ao paciente." }
  }
}
```

Then update `en.json` and `es.json` with the same 6-item structure (translated), replacing the old 4-item structure.

---

### HowItWorks Section — `src/components/sections/HowItWorks.tsx`

**Section ID:** `#how-it-works` (keep unchanged)

**Full rewrite** — remove 3-step list, replace with:
1. Section label + headline
2. Chat transcript (left) + Capacidade cards (right) on desktop; stacked on mobile

#### Desktop layout

```
[Section label]  ––– Como funciona
[Headline]       Cada conversa. Uma orientação real.

[ChatTranscript component]     [Capacidade 01 card]
                               [Capacidade 02 card]
```

Layout: `lg:grid lg:grid-cols-2 lg:gap-16`

---

### ChatTranscript component — `src/components/common/ChatTranscript.tsx`

Static/decorative component. Messages passed as props.

```tsx
type Message = { role: "user" | "bot"; time: string; text: string };

interface ChatTranscriptProps {
  messages: Message[];
  className?: string;
}
```

**Bubble styles:**
- User: `ml-auto max-w-[80%] rounded-xl rounded-br-sm bg-muted px-4 py-3 text-sm text-foreground`
- Bot: `max-w-[80%] rounded-xl rounded-bl-sm bg-primary/10 px-4 py-3 text-sm text-foreground`
- Timestamp: `text-xs text-foreground-muted mt-1`
- Container: `flex flex-col gap-4 rounded-2xl border border-border bg-background p-6`

Messages are sourced from the `howItWorks.transcript.messages` i18n key. The component renders them by mapping over the array.

---

### Capacidade cards

Each card: `rounded-xl border border-border bg-background p-6`

Number badge: `text-4xl font-black text-foreground/10 leading-none` (large, very muted)
Label: `text-xs font-mono uppercase tracking-widest text-primary mt-2`
Title: `text-xl font-bold text-foreground mt-1`
Body: `text-sm text-foreground-muted mt-3 leading-relaxed`
Bullet list: `mt-4 space-y-2` with `text-sm text-foreground-muted` and `·` or `–` prefix
CTA: `<ChatButton variant="inline">` at bottom of card

### i18n — update `pt.json`

Remove old `howItWorks.steps` key. Add:

```json
"howItWorks": {
  "label": "Como funciona",
  "title": "Cada conversa. Uma orientação real.",
  "transcript": {
    "messages": [
      { "role": "user", "time": "11:15", "text": "As folhas do meio estão com manchas amarelas entre as nervuras." },
      { "role": "bot",  "time": "11:15", "text": "Manchas entre nervuras — boa observação. Para confirmar: qual substrato e qual pH você está irrigando?" },
      { "role": "user", "time": "11:18", "text": "Coco coir, pH 5.9." },
      { "role": "bot",  "time": "11:19", "text": "Coco em pH 5.9 bloqueia a absorção de magnésio — esse é o quadro clássico de deficiência de Mg por pH baixo. Corrija para 6.0–6.2 e adicione 1g/L de sulfato de magnésio por 2 semanas. Quer o passo a passo?" }
    ]
  },
  "capacities": {
    "diagnosis": {
      "number": "01",
      "label": "Diagnóstico",
      "title": "Pergunta o que precisa saber antes de orientar.",
      "body": "O Terpafy Grow não entrega respostas prontas. Entende o contexto do seu cultivo — fase, substrato, sintomas, condições — antes de indicar qualquer ação. Isso faz a diferença entre uma orientação que funciona e uma que piora o problema.",
      "bullets": [
        "Faz as perguntas certas para entender o seu caso, sem jargão desnecessário",
        "Identifica a causa mais provável antes de recomendar a solução",
        "Orienta como confirmar o diagnóstico pelos sinais visuais da planta",
        "Indica quando o problema é urgente versus quando pode ser monitorado"
      ],
      "cta": "Falar com o Terpafy Grow"
    },
    "adaptation": {
      "number": "02",
      "label": "Adaptação",
      "title": "Do iniciante ao avançado, sem trocar de canal.",
      "body": "O Terpafy Grow identifica o seu nível e adapta a profundidade da orientação. Quem está começando não recebe uma aula técnica. Quem já domina o básico não recebe respostas simplificadas.",
      "bullets": [
        "Linguagem acessível para quem está plantando as primeiras mudas, sem intimidar",
        "Profundidade técnica real para quem trabalha com VPD, DLI, EC e perfil de terpenos",
        "Explica o raciocínio, não só a ação, para quem quer aprender junto",
        "O mesmo especialista acompanha a evolução do cultivador ao longo do tempo"
      ],
      "cta": "Falar com o Terpafy Grow"
    }
  }
}
```

Then update `en.json` and `es.json`:
- Remove `howItWorks.steps` key
- Add full `howItWorks.transcript` + `howItWorks.capacities` structure (translated)
- Transcript messages in en/es should be translated equivalents, not the Portuguese originals

## Acceptance Criteria

- [ ] Features renders exactly 6 cards in a `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3` grid
- [ ] Old 4 feature item keys (`monitoring`, `reminders`, `security`, `education`) removed from `pt.json`, `en.json`, `es.json`
- [ ] `WhatsAppButton` replaced with `ChatButton` in Features
- [ ] `ChatTranscript` component accepts `messages: Message[]` prop and renders user/bot bubbles with timestamps
- [ ] Transcript messages sourced from `howItWorks.transcript.messages` i18n key
- [ ] Capacidade cards render with large muted number badge, label, title, body, bullet list, inline CTA
- [ ] Old `howItWorks.steps` key removed from all 3 locale files
- [ ] All new i18n keys present in `pt.json`, `en.json`, and `es.json`
- [ ] `pnpm typecheck && pnpm lint` pass with no errors

## Files to Create/Modify

- `src/components/sections/Features.tsx` (modify — grid, 6 cards, swap CTA)
- `src/components/sections/HowItWorks.tsx` (rewrite)
- `src/components/common/ChatTranscript.tsx` (create)
- `src/i18n/locales/pt.json` (update `features.items`, rewrite `howItWorks`)
- `src/i18n/locales/en.json` (same structure changes, translated)
- `src/i18n/locales/es.json` (same structure changes, translated)
