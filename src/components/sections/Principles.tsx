import { useTranslation } from "react-i18next";

const PRINCIPLE_KEYS = [
  "science",
  "intelligence",
  "care",
  "transparency",
  "ecosystem",
  "simplify",
] as const;

export function Principles() {
  const { t } = useTranslation();

  return (
    <section id="principles" className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 max-w-2xl">
          <p className="mb-4 text-[20px] font-normal text-[#f2594b]">
            {t("principles.label")}
          </p>
          <h2 className="mb-4 text-[40px] font-bold leading-tight text-foreground">
            {t("principles.title")}
          </h2>
          <p className="text-[13px] font-medium leading-relaxed text-foreground-muted">
            {t("principles.preamble")}
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PRINCIPLE_KEYS.map((key) => (
            <div
              key={key}
              className="rounded-[4px] border border-border bg-card/80 px-[21px] pb-[26px] pt-[27px] backdrop-blur-[10px]"
            >
              {/* Number */}
              <p className="text-[10px] font-normal text-[#f2594b]">
                {t(`principles.items.${key}.number`)}
              </p>

              {/* Title */}
              <p className="mt-3 text-[14px] font-semibold text-foreground">
                {t(`principles.items.${key}.title`)}
              </p>

              {/* Body */}
              <p className="mt-3 text-[14px] font-medium leading-relaxed text-foreground-muted">
                {t(`principles.items.${key}.body`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
