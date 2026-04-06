# feat: [Phase 14] New Sections – Positioning, ForWho, MarketContext, Principles

## Description

Create 4 new content sections and deprecate the existing `Benefits` section. Each section is independent and can be built and committed separately within this phase.

## Related

- Depends on: Phase 11 (`ChatButton`), Phase 12 (section label pattern)
- Part of: Landing Page v2 redesign (Phases 11–15)
- Figma: https://www.figma.com/design/39naJesWwb1Kpi1vbi6xVw/TerpafyGrow?node-id=1-2
- Next: Phase 15 (CTA + Footer + Final Assembly)

## Pre-Implementation Checklist (Figma)

Before writing code, open Figma `node-id=1-2` and extract:
- [ ] **ForWho section** — full body copy for each of the 4 persona cards (not visible in the text export). Open the "Para quem" frame and copy each card's description text before adding i18n keys.
- [ ] **Positioning table** — are check/X icons from lucide (`Check`, `X`) or custom SVG?
- [ ] **Principles cards** — number badge only, or is there an icon alongside the number?
- [ ] Any new background surface colors used in these sections (add tokens to `src/index.css` `@theme` if needed)

## Implementation Details

### i18n Convention
Define keys in `pt.json` (source of truth) first. Then add translated equivalents separately to `en.json` and `es.json`. Never write multiple locales inline. Remove `benefits.*` keys from all 3 locale files when `Benefits.tsx` is deprecated.

---

## 1. Positioning — `src/components/sections/Positioning.tsx`

**Section ID:** `#positioning`
**Position in `Home.tsx`:** after `<Features />`

Two-column comparison table. Left: green check + text. Right: muted X + text.
Mobile: both columns stacked, left column first.

**Layout:**
```
[Section label]  ––– (label not shown in Figma — omit or confirm in design)
[Headline]       Não é mais um grupo. É orientação com responsabilidade.

┌─────────────────────────────────┬─────────────────────────────────────┐
│ ✓ Terpafy Grow é:               │ ✗ Terpafy Grow não é:               │
├─────────────────────────────────┼─────────────────────────────────────┤
│ Orientação técnica especializada │ Um fórum ou grupo informal          │
│ Diagnóstico contextual           │ Uma busca sem contexto              │
│ Linguagem adaptada ao seu nível  │ Um software de gestão isolado       │
│ A porta de entrada do ecossistema│ Uma plataforma para uso recreativo  │
│ Disponível agora                 │ Uma ferramenta desconectada         │
└─────────────────────────────────┴─────────────────────────────────────┘
```

Implementation: CSS grid (`grid-cols-1 md:grid-cols-2`), no third-party table library.
Icons: lucide `Check` (green) and `X` (muted) unless Figma shows custom SVG.

### i18n — add to `pt.json`

```json
"positioning": {
  "title": "Não é mais um grupo. É orientação com responsabilidade.",
  "isLabel": "Terpafy Grow é:",
  "isNotLabel": "Terpafy Grow não é:",
  "is": [
    "Orientação técnica especializada em cannabis",
    "Diagnóstico contextual, não resposta genérica",
    "Linguagem adaptada ao seu nível",
    "A porta de entrada do ecossistema Terpafy",
    "Disponível agora, para qualquer cultivador"
  ],
  "isNot": [
    "Um fórum ou grupo de WhatsApp informal",
    "Uma busca com resultados sem contexto",
    "Um software de gestão isolado",
    "Uma plataforma para cultivo recreativo",
    "Uma ferramenta desconectada do cuidado"
  ]
}
```

Then add translated equivalents to `en.json` and `es.json`.

---

## 2. ForWho — `src/components/sections/ForWho.tsx`

**Section ID:** `#for-who`
**Position in `Home.tsx`:** after `<HowItWorks />`
**Action:** Remove `<Benefits />` from `Home.tsx` and deprecate `Benefits.tsx`. Remove `benefits.*` keys from all 3 locale files.

4 persona cards in `grid-cols-1 sm:grid-cols-2`. Each card shows role title, subtitle, and body description.

### i18n — add to `pt.json`

> ⚠️ The `body` values below are placeholders — extract actual copy from Figma `node-id=1-2` → "Para quem" frame before implementing.

```json
"forWho": {
  "label": "Para quem",
  "title": "Cada perfil. Um ganho real.",
  "subtitle": "O Terpafy Grow foi construído para quem está na ponta da produção — e para quem depende da qualidade dessa ponta para cuidar de pessoas.",
  "personas": {
    "beginner": {
      "title": "Cultivador Iniciante",
      "subtitle": "O que está começando",
      "body": "[EXTRACT FROM FIGMA — Para quem frame, card 1]"
    },
    "association": {
      "title": "Diretor de Associação",
      "subtitle": "O gestor que precisa garantir",
      "body": "[EXTRACT FROM FIGMA — Para quem frame, card 2]"
    },
    "advanced": {
      "title": "Cultivador Avançado",
      "subtitle": "O grower que quer precisão",
      "body": "[EXTRACT FROM FIGMA — Para quem frame, card 3]"
    },
    "doctor": {
      "title": "Médico Prescritor",
      "subtitle": "O clínico que precisa de base",
      "body": "[EXTRACT FROM FIGMA — Para quem frame, card 4]"
    }
  }
}
```

Then add translated equivalents to `en.json` and `es.json` once pt.json body copy is confirmed from Figma.

---

## 3. MarketContext — `src/components/sections/MarketContext.tsx`

**Section ID:** `#market`
**Position in `Home.tsx`:** after `<ForWho />`

Stat blocks layout: side-by-side on desktop (`grid-cols-2`), stacked on mobile.

**Stat value style:** `text-4xl font-black text-primary`
**Stat label style:** `text-sm font-semibold text-foreground mt-1`
**Stat description style:** `text-sm text-foreground-muted mt-2 leading-relaxed`

### i18n — add to `pt.json`

```json
"market": {
  "label": "Contexto de mercado",
  "title": "O mercado cresceu em regulação. Não em orientação.",
  "paradoxTitle": "O paradoxo da indústria",
  "paradoxBody1": "A cannabis medicinal tem mais acesso e regulação do que nunca, mas o cultivador ainda decide com base em fóruns e intuição.",
  "paradoxBody2": "Grupos e fóruns oferecem informação em volume, mas sem contexto, sem responsabilidade técnica e sem conhecimento do cultivo específico de cada produtor.",
  "stats": {
    "market": {
      "value": "US$ 57bi",
      "label": "Mercado global de cannabis em 2028",
      "description": "Crescimento impulsionado por regulamentação e demanda por tratamentos baseados em evidências. Rastreabilidade e padronização passam a ser requisitos, não diferenciais."
    },
    "traceability": {
      "value": "+90%",
      "label": "Das operações sem rastreabilidade estruturada",
      "description": "A maioria dos cultivadores licenciados ainda depende de processos manuais. O padrão regulatório que avança exige infraestrutura de dados e começa pela orientação."
    }
  },
  "closing": "O Terpafy Grow não compete com fóruns nem com softwares de cultivo. Ele define uma categoria nova: o ponto de entrada de um ecossistema que conecta cultivo ao cuidado. O diferencial é o ciclo que começa em cada conversa."
}
```

Then add translated equivalents to `en.json` and `es.json`.

---

## 4. Principles — `src/components/sections/Principles.tsx`

**Section ID:** `#principles`
**Position in `Home.tsx`:** after `<MarketContext />`

6 cards in `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`.

**Number badge style:** `text-5xl font-black leading-none text-foreground/10`
**Label style:** `text-xs font-mono uppercase tracking-widest text-primary mt-3`
**Title style:** `text-lg font-bold text-foreground mt-1`
**Body style:** `text-sm text-foreground-muted mt-3 leading-relaxed`

> ⚠️ If Figma shows an icon alongside the number badge, extract and use it. Otherwise number badge only.

### i18n — add to `pt.json`

```json
"principles": {
  "title": "Os filtros que guiam cada orientação.",
  "preamble": "Estes não são valores decorativos. São os critérios que determinam como o especialista orienta, o que a plataforma faz e como cada participante do ecossistema é tratado.",
  "items": {
    "science":      { "number": "01", "title": "Ciência como Bússola",     "body": "Cada orientação é sustentada por validação técnica — não por achismo. Priorizamos a evidência sobre a intuição, do substrato à dosagem." },
    "intelligence": { "number": "02", "title": "Inteligência Conectada",   "body": "O valor não está na orientação isolada. Está na conexão entre o que acontece no cultivo e o que isso significa para o paciente no final da cadeia." },
    "care":         { "number": "03", "title": "Cuidado em Cada Ação",     "body": "O que é produzido aqui chega a pessoas que dependem disso para o bem-estar. Cada orientação é feita com empatia e responsabilidade." },
    "transparency": { "number": "04", "title": "Transparência Radical",    "body": "Somos abertos sobre o que sabemos e as limitações de qualquer orientação. A confiança do cultivador é construída pela honestidade." },
    "ecosystem":    { "number": "05", "title": "Fortalecer o Ecossistema", "body": "O cultivador que aprende e cresce fortalece o ecossistema inteiro. Construímos para dar autonomia — não para criar dependência." },
    "simplify":     { "number": "06", "title": "Simplificar o Complexo",   "body": "Nossa responsabilidade é tornar a complexidade da cannabis acessível para que qualquer cultivador tome decisões melhores." }
  }
}
```

Then add translated equivalents to `en.json` and `es.json`.

---

## Acceptance Criteria

- [ ] `Benefits.tsx` removed from `Home.tsx` import and render
- [ ] `benefits.*` keys removed from `pt.json`, `en.json`, `es.json`
- [ ] `Positioning` comparison table rows align correctly; stacks on mobile
- [ ] Check/X icons render (lucide or custom per Figma — confirm before coding)
- [ ] `ForWho` 4 persona cards render with title, subtitle, and body from locale files
- [ ] `ForWho` body copy fields filled with text from Figma (not placeholder text)
- [ ] `MarketContext` stat value renders as large typographic element (`text-4xl`)
- [ ] `Principles` 6 cards render in 3-col grid with large muted number badges
- [ ] All new `pt.json` keys have translated equivalents in `en.json` and `es.json`
- [ ] Language switcher shows no missing key fallbacks in any of the 4 new sections
- [ ] All 4 new sections added to `Home.tsx` in correct order (see Phase 15 for final order)
- [ ] `pnpm typecheck && pnpm lint` pass with no errors

## Files to Create/Modify

- `src/components/sections/Positioning.tsx` (create)
- `src/components/sections/ForWho.tsx` (create)
- `src/components/sections/MarketContext.tsx` (create)
- `src/components/sections/Principles.tsx` (create)
- `src/components/sections/Benefits.tsx` (delete)
- `src/pages/Home.tsx` (remove `<Benefits />`, add 4 new sections)
- `src/i18n/locales/pt.json` (add 4 sections + remove `benefits.*`)
- `src/i18n/locales/en.json` (add translated keys + remove `benefits.*`)
- `src/i18n/locales/es.json` (add translated keys + remove `benefits.*`)
