import { useTranslation } from "react-i18next";

export function MarketContext() {
  const { t } = useTranslation();

  return (
    <section id="market" className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <p className="mb-4 text-[20px] font-normal text-[#f2594b]">
          {t("market.label")}
        </p>
        <h2 className="mb-12 max-w-2xl text-[40px] font-bold leading-[1.12] text-[#3a3a3a]">
          {t("market.title")}
        </h2>

        {/* 2-column content grid */}
        <div className="grid gap-[20px] lg:grid-cols-2">
          {/* LEFT — Paradox card */}
          <div className="rounded-[4px] border border-[#3a3a3a] bg-[rgba(58,58,58,0.05)] pb-[27px] pl-[25px] pr-[26px] pt-[35px]">
            <p className="mb-3 text-[14px] font-semibold uppercase tracking-wide text-[#aaa]">
              {t("market.paradoxTitle")}
            </p>
            <p className="mb-6 text-[16px] font-semibold leading-snug text-[#3a3a3a]">
              {t("market.paradoxBody1")}
            </p>

            {/* Box 1: neutral/white — forums */}
            <div className="mb-3 rounded-[5px] border border-[#d6d6d6] bg-[rgba(255,255,255,0.5)] p-4 shadow-[0px_2px_4px_0px_rgba(41,41,41,0.08)]">
              <p className="text-[14px] font-medium leading-relaxed text-[#848484]">
                {t("market.paradoxBody2")}
              </p>
            </div>

            {/* Box 2: green/Terpafy */}
            <div className="mb-3 rounded-[5px] border border-[#93a603] bg-[rgba(147,166,3,0.05)] p-4 shadow-[0px_2px_4px_0px_rgba(41,41,41,0.08)]">
              <p className="text-[14px] font-medium leading-relaxed text-[#848484]">
                <span className="font-semibold text-[#93a603]">Terpafy Grow </span>
                {t("market.paradoxBox2Rest")}
              </p>
            </div>

            {/* Box 3: neutral/white — software */}
            <div className="rounded-[5px] border border-[#d6d6d6] bg-[rgba(255,255,255,0.5)] p-4 shadow-[0px_2px_4px_0px_rgba(41,41,41,0.08)]">
              <p className="text-[14px] font-medium leading-relaxed text-[#848484]">
                {t("market.paradoxBox3")}
              </p>
            </div>
          </div>

          {/* RIGHT — Stats + closing */}
          <div className="flex flex-col gap-[16px]">
            {/* Stat 1 */}
            <div className="rounded-[4px] border border-[#3a3a3a] bg-[rgba(58,58,58,0.05)] px-[21px] pb-[31px] pt-[32px]">
              <p className="text-[40px] font-extrabold leading-none text-[#f2594b]">
                {t("market.stats.market.value")}
              </p>
              <p className="mt-1 text-[14px] font-semibold text-[#3a3a3a]">
                {t("market.stats.market.label")}
              </p>
              <p className="mt-2 text-[14px] font-medium leading-relaxed text-[#848484]">
                {t("market.stats.market.description")}
              </p>
            </div>

            {/* Stat 2 */}
            <div className="rounded-[4px] border border-[#3a3a3a] bg-[rgba(58,58,58,0.05)] px-[21px] pb-[31px] pt-[32px]">
              <p className="text-[40px] font-extrabold leading-none text-[#f2594b]">
                {t("market.stats.traceability.value")}
              </p>
              <p className="mt-1 text-[14px] font-semibold text-[#3a3a3a]">
                {t("market.stats.traceability.label")}
              </p>
              <p className="mt-2 text-[14px] font-medium leading-relaxed text-[#848484]">
                {t("market.stats.traceability.description")}
              </p>
            </div>

            {/* Closing card */}
            <div className="rounded-[4px] border border-[#b33327] bg-[rgba(179,51,39,0.1)] px-[21px] pb-[26px] pt-[27px]">
              <p className="text-[14px] font-medium leading-relaxed text-[#848484]">
                {t("market.closing")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
