import { useTranslation } from "react-i18next";
import { ArrowRight } from "vuesax-icons-react";
import { Section } from "@/components/layout/Section";
import { ChatButton } from "@/components/common/ChatButton";

/**
 * CTA section — "Disponível agora" badge above quote, two action buttons.
 * WhatsAppButton replaced with ChatButton (Phase 15).
 */
export function CTA() {
  const { t } = useTranslation();

  return (
    <section id="cta">
      <Section size="lg">
        <div className="flex flex-col items-center gap-8 text-center">
          {/* Badge */}
          <span className="inline-flex items-center gap-2 rounded-full border border-[#f2594b]/40 bg-[rgba(242,89,75,0.05)] px-4 py-1.5 text-sm font-medium text-[#f2594b]">
            {t("cta.badge")}
          </span>

          {/* Large quote */}
          <blockquote className="font-heading text-3xl font-black leading-tight text-foreground sm:text-4xl lg:text-5xl">
            &ldquo;{t("cta.quote")}&rdquo;
          </blockquote>

          {/* Title + subtitle */}
          <div className="max-w-2xl">
            <h2 className="mb-3 text-2xl font-bold text-foreground sm:text-3xl">
              {t("cta.title")}
            </h2>
            <p className="text-lg text-foreground/60">{t("cta.subtitle")}</p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col items-center gap-4 sm:flex-row">
            <ChatButton variant="primary">{t("cta.button")}</ChatButton>

            <a
              href="#how-it-works"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-foreground hover:bg-muted"
            >
              {t("cta.ctaSecondary")}
              <ArrowRight
                variant="Bold"
                className="h-4 w-4"
                aria-hidden="true"
              />
            </a>
          </div>

          {/* Note */}
          <p className="text-sm text-foreground/50">{t("cta.note")}</p>
        </div>
      </Section>
    </section>
  );
}
