import { useTranslation } from "react-i18next";

/**
 * ChatCTA — centered label + headline + subtitle that introduces the BigChat section.
 * Figma: node 2067:2768
 *   label:    Inter 20px / normal  / #F2594B  / centered
 *   headline: Inter 50px / bold    / #3A3A3A  / centered / line-height 100%
 *   subtitle: Inter 13px / medium  / #848484  / centered / line-height 150%
 */
export function ChatCTA() {
  const { t } = useTranslation();

  return (
    <section className="bg-background py-16 sm:py-20">
      <div className="mx-auto max-w-[1200px] px-4 text-center sm:px-6 lg:px-8">
        <p className="mb-[36px] text-[20px] font-normal leading-none text-[#f2594b]">
          {t("hero.ctaTagline")}
        </p>
        <h2 className="mb-[28px] text-[50px] font-bold leading-none text-[#3a3a3a]">
          {t("hero.ctaHeadline")}
        </h2>
        <p className="mx-auto max-w-[713px] text-[13px] font-medium leading-[150%] text-[#848484]">
          {t("hero.ctaSubtitle")}
        </p>
      </div>
    </section>
  );
}
