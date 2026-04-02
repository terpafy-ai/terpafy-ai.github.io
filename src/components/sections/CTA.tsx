import { useTranslation } from "react-i18next";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { WhatsAppButton } from "@/components/common/WhatsAppButton";

/**
 * CTA section — Figma: coral/primary gradient background, large quote
 * headline, two action buttons.
 */
export function CTA() {
  const { t } = useTranslation();

  return (
    <section id="cta" className="bg-primary">
      <Section size="lg">
        <div className="flex flex-col items-center gap-8 text-center text-primary-foreground">
          {/* Large quote */}
          <blockquote className="font-heading text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
            &ldquo;{t("cta.quote")}&rdquo;
          </blockquote>

          {/* Title + subtitle */}
          <div className="max-w-2xl">
            <h2 className="mb-3 text-2xl font-bold sm:text-3xl">
              {t("cta.title")}
            </h2>
            <p className="text-lg text-primary-foreground/80">
              {t("cta.subtitle")}
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col items-center gap-4 sm:flex-row">
            <WhatsAppButton
              variant="primary"
              messageKey="cta.whatsappMessage"
              className="bg-white text-primary hover:bg-white/90"
            >
              {t("cta.button")}
            </WhatsAppButton>

            <a
              href="#how-it-works"
              className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/40 px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:border-primary-foreground hover:bg-primary-foreground/10"
            >
              {t("cta.learnMore")}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>

          {/* Note */}
          <p className="text-sm text-primary-foreground/60">{t("cta.note")}</p>
        </div>
      </Section>
    </section>
  );
}
