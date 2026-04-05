import { useTranslation } from "react-i18next";

/**
 * MarketContext section — two stat blocks side-by-side on desktop,
 * stacked on mobile; followed by a paradox description and closing statement.
 */
export function MarketContext() {
  const { t } = useTranslation();

  return (
    <section id="market" className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <p className="mb-4 flex items-center gap-3 text-[20px] font-normal text-[#f2594b]">
          <span className="inline-block h-px w-8 bg-[#f2594b]" aria-hidden="true" />
          {t("market.label")}
        </p>
        <h2 className="mb-12 max-w-2xl text-[40px] font-bold leading-tight text-[#3a3a3a]">
          {t("market.title")}
        </h2>

        {/* Stats grid */}
        <div className="mb-12 grid gap-6 md:grid-cols-2">
          {/* Market stat */}
          <div className="rounded-[4px] border border-[#f2594b]/20 bg-[rgba(242,89,75,0.04)] p-8">
            <p className="text-4xl font-black text-[#f2594b]">
              {t("market.stats.market.value")}
            </p>
            <p className="mt-1 text-[14px] font-semibold text-[#3a3a3a]">
              {t("market.stats.market.label")}
            </p>
            <p className="mt-2 text-[14px] leading-relaxed text-[#848484]">
              {t("market.stats.market.description")}
            </p>
          </div>

          {/* Traceability stat */}
          <div className="rounded-[4px] border border-[#f2594b]/20 bg-[rgba(242,89,75,0.04)] p-8">
            <p className="text-4xl font-black text-[#f2594b]">
              {t("market.stats.traceability.value")}
            </p>
            <p className="mt-1 text-[14px] font-semibold text-[#3a3a3a]">
              {t("market.stats.traceability.label")}
            </p>
            <p className="mt-2 text-[14px] leading-relaxed text-[#848484]">
              {t("market.stats.traceability.description")}
            </p>
          </div>
        </div>

        {/* Paradox block */}
        <div className="mb-8 rounded-[4px] border border-[#3a3a3a]/10 bg-[rgba(58,58,58,0.03)] p-8">
          <h3 className="mb-4 text-[20px] font-bold text-[#3a3a3a]">
            {t("market.paradoxTitle")}
          </h3>
          <p className="mb-3 text-[15px] leading-relaxed text-[#848484]">
            {t("market.paradoxBody1")}
          </p>
          <p className="text-[15px] leading-relaxed text-[#848484]">
            {t("market.paradoxBody2")}
          </p>
        </div>

        {/* Closing statement */}
        <p className="text-[15px] leading-relaxed text-[#848484]">
          {t("market.closing")}
        </p>
      </div>
    </section>
  );
}
