# feat: [Phase 15] CTA + Footer Update + Final Assembly

## Description

Update the CTA section and Footer with new v2 copy, replace remaining `WhatsAppButton` usages, and assemble the final section order in `Home.tsx`. This is the closing phase of the v2 landing page redesign.

## Related

- Depends on: Phases 11–14 (all sections must exist before final assembly)
- Part of: Landing Page v2 redesign (Phases 11–15)
- Figma: https://www.figma.com/design/39naJesWwb1Kpi1vbi6xVw/TerpafyGrow?node-id=1-2

## Implementation Details

### i18n Convention
Define keys in `pt.json` (source of truth) first. Then add translated equivalents separately to `en.json` and `es.json`. Remove any keys that are no longer used after this phase.

---

### CTA Section — `src/components/sections/CTA.tsx`

**Changes:**
- Replace `<WhatsAppButton>` → `<ChatButton variant="primary">`
- Add "Disponível agora" badge above the quote
- Update copy keys

**New layout:**
```
[Badge]    Disponível agora
[Quote]    "Toda jornada desconectada gera incerteza."
[Title]    Comece pelo Grow. O ecossistema vem com você.
[Subtitle] O Terpafy Grow está disponível agora...
[ChatButton primary]   [secondary scroll link]
[Note]     Gratuito para começar · Sem cartão de crédito · Privacidade garantida
```

Badge style: `inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary` (matches existing hero badge pattern)

### i18n — update in `pt.json`

```json
"cta": {
  "badge": "Disponível agora",
  "quote": "Toda jornada desconectada gera incerteza.",
  "title": "Comece pelo Grow. O ecossistema vem com você.",
  "subtitle": "O Terpafy Grow está disponível agora. Faça sua primeira pergunta e experimente o começo do primeiro ecossistema de inteligência cannabica do mundo.",
  "button": "Falar com o Terpafy Grow",
  "ctaSecondary": "Ver como funciona",
  "note": "Gratuito para começar · Sem cartão de crédito · Privacidade garantida"
}
```

Then update `en.json` and `es.json` with translated values.

> Remove `cta.whatsappMessage` key from all 3 locale files (no longer needed).

---

### Footer — `src/components/layout/Footer.tsx`

**Changes:**
- Remove `<WhatsAppButton>` contact link (replace with a plain `mailto:` link or remove entirely — confirm with team)
- Update tagline and ecosystem suite row

### i18n — update in `pt.json`

```json
"footer": {
  "tagline": "A inteligência que conecta a jornada da cannabis, do cultivo ao cuidado, para um bem-estar previsível e seguro.",
  "suite": "Terpafy Grow · Care · Med · Assoc · Marketplace"
}
```

> All other `footer.*` keys stay unchanged (`quickLinks`, `legal`, `copyright`, `disclaimer`).
> Remove `footer.legal.contactMessage` key from all 3 locale files if the WhatsApp contact link is removed.

Then update `en.json` and `es.json` for changed keys only.

---

### Final `Home.tsx` Assembly

Final section render order:

```tsx
<main>
  <Hero />          {/* #hero       — Phase 12 */}
  <Problem />       {/* #problem    — Phase 12 */}
  <Features />      {/* #features   — Phase 13 */}
  <Positioning />   {/* #positioning — Phase 14 */}
  <HowItWorks />    {/* #how-it-works — Phase 13 */}
  <ForWho />        {/* #for-who    — Phase 14 */}
  <MarketContext />  {/* #market     — Phase 14 */}
  <Principles />    {/* #principles  — Phase 14 */}
  <CTA />           {/* #cta        — this phase */}
</main>
```

### Header nav scroll anchors (verify against final order)

| Nav label | href | Section |
|---|---|---|
| `nav.features` | `/#features` | Features |
| `nav.howItWorks` | `/#how-it-works` | HowItWorks |
| `nav.forWho` | `/#for-who` | ForWho |

---

### WhatsApp cleanup — final check

After this phase, `WhatsAppButton` should have zero usages in the app. Run:

```bash
grep -r "WhatsAppButton" src/
grep -r "wa.me" src/
grep -r "VITE_WHATSAPP_NUMBER" src/
```

All three commands must return no results (except `WhatsAppButton.tsx` itself, which can stay as a dead file or be deleted).

## Acceptance Criteria

- [ ] CTA "Disponível agora" badge renders above the quote, using the same badge pattern as the Hero
- [ ] CTA copy matches the i18n keys defined above
- [ ] `WhatsAppButton` removed from `CTA.tsx`
- [ ] `WhatsAppButton` removed from `Footer.tsx`
- [ ] Footer tagline updated
- [ ] Footer ecosystem suite row updated (`Terpafy Grow · Care · Med · Assoc · Marketplace`)
- [ ] `grep -r "WhatsAppButton" src/components/sections/ src/components/layout/` returns no results
- [ ] `VITE_WHATSAPP_NUMBER` is no longer required for `pnpm build` to succeed
- [ ] `Home.tsx` renders all 9 sections in the correct order listed above
- [ ] All `id` scroll anchors (`#hero`, `#problem`, `#features`, `#positioning`, `#how-it-works`, `#for-who`, `#market`, `#principles`, `#cta`) resolve correctly from Header nav
- [ ] `cta.whatsappMessage` key removed from `pt.json`, `en.json`, `es.json`
- [ ] Language switcher shows no missing key fallbacks in any locale for all 9 sections
- [ ] `pnpm build && pnpm typecheck && pnpm lint` all pass with no errors

## Files to Create/Modify

- `src/components/sections/CTA.tsx` (modify — swap button, add badge, update copy keys)
- `src/components/layout/Footer.tsx` (modify — swap button, update tagline + suite)
- `src/pages/Home.tsx` (finalize section order)
- `src/i18n/locales/pt.json` (update `cta.*`, `footer.tagline`, `footer.suite`; remove `cta.whatsappMessage`)
- `src/i18n/locales/en.json` (update translated keys)
- `src/i18n/locales/es.json` (update translated keys)
