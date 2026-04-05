import { useTranslation } from "react-i18next";

const PERSONA_KEYS = [
  "beginner",
  "association",
  "advanced",
  "doctor",
] as const;

/**
 * ForWho section — 4 persona cards in 2-column grid.
 * Replaces the Benefits section.
 */
export function ForWho() {
  const { t } = useTranslation();

  return (
    <section id="for-who" className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <p className="mb-4 flex items-center justify-center gap-3 text-[20px] font-normal text-[#f2594b]">
            <span className="inline-block h-px w-8 bg-[#f2594b]" aria-hidden="true" />
            {t("forWho.label")}
            <span className="inline-block h-px w-8 bg-[#f2594b]" aria-hidden="true" />
          </p>
          <h2 className="mb-4 text-[40px] font-bold leading-tight text-[#3a3a3a]">
            {t("forWho.title")}
          </h2>
          <p className="mx-auto max-w-2xl text-[15px] leading-relaxed text-[#848484]">
            {t("forWho.subtitle")}
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2">
          {PERSONA_KEYS.map((key) => (
            <div
              key={key}
              className="rounded-[4px] border border-[#3a3a3a]/12 bg-[rgba(58,58,58,0.03)] p-8"
            >
              <p className="mb-1 text-[14px] font-medium text-[#f2594b]">
                {t(`forWho.personas.${key}.title`)}
              </p>
              <p className="mb-4 text-[20px] font-bold text-[#3a3a3a]">
                {t(`forWho.personas.${key}.subtitle`)}
              </p>
              <p className="text-[14px] leading-relaxed text-[#848484]">
                {t(`forWho.personas.${key}.body`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
