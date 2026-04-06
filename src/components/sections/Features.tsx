import { useTranslation } from "react-i18next";
import { Activity, Notification, Shield, Book1 } from "vuesax-icons-react";
import { Section } from "@/components/layout/Section";
import { WhatsAppButton } from "@/components/common/WhatsAppButton";

const FEATURE_ICONS = {
  monitoring: Activity,
  reminders: Notification,
  security: Shield,
  education: Book1,
} as const;

/**
 * Features section — Figma: two-column layout with label, headline, and
 * description on the right. Feature cards below.
 */
export function Features() {
  const { t } = useTranslation();

  return (
    <section id="features" className="bg-white">
      {/* Primary 2-col intro — matches Figma features.png */}
      <Section size="lg">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          {/* Left */}
          <div>
            <p className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-primary">
              <span className="inline-block h-px w-6 bg-primary" aria-hidden="true" />
              {t("features.label")}
            </p>
            <h2 className="font-heading text-4xl font-black leading-tight text-foreground sm:text-5xl">
              {t("features.title")}
            </h2>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-6">
            <p className="text-lg leading-relaxed text-foreground-muted">
              {t("features.subtitle")}
            </p>
            <WhatsAppButton
              variant="primary"
              messageKey="hero.whatsappMessage"
              className="self-start"
            >
              {t("features.cta")}
            </WhatsAppButton>
          </div>
        </div>
      </Section>

      {/* Feature cards grid */}
      <Section size="sm" className="pt-0">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {(Object.keys(FEATURE_ICONS) as Array<keyof typeof FEATURE_ICONS>).map(
            (key) => {
              const Icon = FEATURE_ICONS[key];
              return (
                <div
                  key={key}
                  className="rounded-xl border border-border bg-background p-6"
                >
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10">
                    <Icon variant="Bold" className="h-5 w-5 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="mb-2 font-semibold text-foreground">
                    {t(`features.items.${key}.title`)}
                  </h3>
                  <p className="text-sm leading-relaxed text-foreground-muted">
                    {t(`features.items.${key}.description`)}
                  </p>
                </div>
              );
            },
          )}
        </div>
      </Section>
    </section>
  );
}
