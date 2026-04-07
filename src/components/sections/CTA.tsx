import { useTranslation } from "react-i18next";
import { Section } from "@/components/layout/Section";
import { ChatButton } from "@/components/common/ChatButton";

export function CTA() {
  const { t } = useTranslation();

  return (
    <section id="cta" className="relative overflow-hidden">
      {/* Figma 41:480 — radial gradient glow, blur-[25px], opacity 20% */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 blur-[25px]"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(242,89,75,0.20) 22%, rgba(245,131,120,0.15) 42%, rgba(249,172,165,0.10) 61%, transparent 100%)",
        }}
      />

      <Section size="lg" className="relative">
        <div className="flex flex-col items-center gap-8 text-center">
          {/* Figma 41:484 — Inter Bold 32px, #3a3a3a, centered */}
          <h2 className="text-[32px] font-bold leading-[1.12] text-foreground">
            {t("cta.title")}
          </h2>

          {/* Figma 41:485 — outlined badge, #f2594b border + bg 10% */}
          <span className="inline-flex items-center justify-center rounded-[4px] border border-[#f2594b] bg-[rgba(242,89,75,0.1)] px-[32px] py-[16px] text-[12px] text-[#f2594b]">
            {t("cta.badge")}
          </span>

          {/* Figma 41:486 — Inter Medium 13px, #848484 */}
          <p className="max-w-xl text-[13px] font-medium leading-[1.5] text-foreground-muted">
            {t("cta.subtitle")}
          </p>

          {/* Figma 41:498 + 41:499 — primary (solid red) + secondary (lightest) */}
          <div className="flex flex-col items-center gap-4 sm:flex-row">
            <ChatButton variant="primary">{t("cta.button")}</ChatButton>

            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center rounded-[4px] bg-primary-lightest px-[32px] py-[16px] text-[16px] font-normal text-foreground transition-colors hover:bg-primary-lighter focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              {t("cta.ctaSecondary")}
            </a>
          </div>
        </div>
      </Section>
    </section>
  );
}
