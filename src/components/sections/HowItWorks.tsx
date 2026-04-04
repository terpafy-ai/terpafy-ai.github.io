import { useTranslation } from "react-i18next";
import { MessageCircle, Tree, LampOn } from "vuesax-icons-react";
import { Section } from "@/components/layout/Section";

const STEP_ICONS = [MessageCircle, Tree, LampOn] as const;
const STEP_KEYS = ["connect", "track", "monitor"] as const;

/**
 * HowItWorks section — Figma: 3 numbered steps (01/02/03) with icons.
 * id="how-it-works" for smooth-scroll anchor.
 */
export function HowItWorks() {
  const { t } = useTranslation();

  return (
    <section id="how-it-works" className="bg-muted/40">
      <Section size="lg">
        {/* Header */}
        <div className="mb-12 text-center">
          <p className="mb-3 flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-wider text-primary">
            <span className="inline-block h-px w-6 bg-primary" aria-hidden="true" />
            {t("howItWorks.label")}
            <span className="inline-block h-px w-6 bg-primary" aria-hidden="true" />
          </p>
          <h2 className="font-heading text-4xl font-black leading-tight text-foreground sm:text-5xl">
            {t("howItWorks.title")}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-foreground-muted">
            {t("howItWorks.subtitle")}
          </p>
        </div>

        {/* Steps */}
        <div className="relative grid gap-8 sm:grid-cols-3">
          {/* Connector line — desktop only */}
          <div
            className="absolute left-1/6 right-1/6 top-10 hidden h-px bg-border sm:block"
            aria-hidden="true"
          />

          {STEP_KEYS.map((key, index) => {
            const Icon = STEP_ICONS[index];
            const stepNumber = String(index + 1).padStart(2, "0");
            return (
              <div
                key={key}
                className="relative flex flex-col items-center gap-4 text-center"
              >
                {/* Step number badge */}
                <div className="relative z-10 flex h-20 w-20 flex-col items-center justify-center rounded-full border-2 border-primary/20 bg-background">
                  <span className="text-xs font-semibold text-primary/60">
                    {stepNumber}
                  </span>
                  <Icon variant="Bold" className="h-6 w-6 text-primary" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-bold text-foreground">
                    {t(`howItWorks.steps.${key}.title`)}
                  </h3>
                  <p className="text-sm leading-relaxed text-foreground-muted">
                    {t(`howItWorks.steps.${key}.description`)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Section>
    </section>
  );
}
