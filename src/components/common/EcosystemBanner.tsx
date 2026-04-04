import { useTranslation } from "react-i18next";

/**
 * Thin strip below the Hero announcing Terpafy Grow's place in the ecosystem.
 * "Grow" pill is always active (this is the Grow product page).
 */
export function EcosystemBanner() {
  const { t } = useTranslation();

  const pills = t("hero.ecosystemPills", { returnObjects: true }) as string[];

  return (
    <div className="border-t border-[rgba(58,58,58,0.2)] bg-background">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 py-5 md:flex-row md:items-center md:py-[28px]">
          {/* Label + divider + description */}
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-[39px]">
            <span className="shrink-0 whitespace-nowrap text-[12px] uppercase tracking-widest text-[#93a603]">
              {t("hero.ecosystemLabel")}
            </span>
            <div
              className="hidden h-[23px] w-px shrink-0 bg-[rgba(58,58,58,0.2)] md:block"
              aria-hidden="true"
            />
            <p className="max-w-[600px] text-[12px] text-foreground">
              {t("hero.ecosystemDescription")}
            </p>
          </div>

          {/* Product pills */}
          <div className="flex flex-wrap gap-x-[10px] gap-y-[7px] md:ml-auto">
            {pills.map((pill, i) =>
              i === 0 ? (
                <span
                  key={pill}
                  className="rounded-[4px] border border-[#93a603] bg-[rgba(147,166,3,0.1)] px-2.5 py-2 text-[10px] text-[#93a603]"
                >
                  {pill}
                </span>
              ) : (
                <span
                  key={pill}
                  className="rounded-[4px] border border-[#8a8a8a] bg-[rgba(138,138,138,0.1)] px-2.5 py-2 text-[10px] text-[#8a8a8a]"
                >
                  {pill}
                </span>
              ),
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
