import { useTranslation } from "react-i18next";
import { ArrowRight } from "vuesax-icons-react";
import { Section } from "@/components/layout/Section";
import { WhatsAppButton } from "@/components/common/WhatsAppButton";

/**
 * CTA section — Figma: coral/primary gradient background, large quote
 * headline, two action buttons.
 */
export function CTA() {
  const { t } = useTranslation();

  return (
    <section id="cta">
      <Section size="lg">
        <div className="flex flex-col items-center gap-8 text-center">
          {/* Large quote */}
          <blockquote className="font-heading text-3xl font-black leading-tight text-foreground sm:text-4xl lg:text-5xl">
            &ldquo;{t("cta.quote")}&rdquo;
          </blockquote>

          {/* Title + subtitle */}
          <div className="max-w-2xl">
            <h2 className="mb-3 text-2xl font-bold text-foreground sm:text-3xl">
              {t("cta.title")}
            </h2>
            <p className="text-lg text-foreground/60">
              {t("cta.subtitle")}
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col items-center gap-4 sm:flex-row">
            <WhatsAppButton
              variant="primary"
              messageKey="cta.whatsappMessage"
            >
              {t("cta.button")}
            </WhatsAppButton>

            <a
              href="#how-it-works"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-foreground hover:bg-muted"
            >
              {t("cta.learnMore")}
              <ArrowRight variant="Bold" className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>

          {/* Note */}
          <p className="text-sm text-foreground/50">{t("cta.note")}</p>
        </div>
      </Section>
    </section>
  );
}
