import { useTranslation } from "react-i18next";
import { Section } from "@/components/layout/Section";
import { ChatButton } from "@/components/common/ChatButton";

export function CTA() {
  const { t } = useTranslation();

  return (
    <section id="cta">
      <Section size="lg">
        <div className="flex flex-col items-center gap-8 text-center">
          {/* Title */}
          <h2 className="text-3xl font-bold leading-9 text-[#3a3a3a]">
            {t("cta.title")}
          </h2>

          {/* Badge */}
          <span className="inline-flex items-center justify-center rounded px-8 py-4 text-xs font-normal leading-3 text-[#f2594b] outline outline-1 -outline-offset-1 outline-[#f2594b] bg-[rgba(242,89,75,0.1)]">
            {t("cta.badge")}
          </span>

          {/* Subtitle */}
          <p className="max-w-xl text-xs font-medium leading-5 text-[#71717a]">
            {t("cta.subtitle")}
          </p>

          {/* Buttons */}
          <div className="flex flex-col items-center gap-4 sm:flex-row">
            <ChatButton variant="primary">{t("cta.button")}</ChatButton>

            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center rounded bg-[#eedddc] px-8 py-4 text-base font-normal leading-4 text-[#3a3a3a] transition-colors hover:bg-[#e5d0ce]"
            >
              {t("cta.ctaSecondary")}
            </a>
          </div>
        </div>
      </Section>
    </section>
  );
}
