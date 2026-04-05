import { useTranslation } from "react-i18next";
import { Check, X } from "lucide-react";

/**
 * Positioning section — two-column comparison table.
 * Left: green ✓ rows ("Terpafy Grow é:").
 * Right: muted ✗ rows ("Terpafy Grow não é:").
 * Mobile: stacked, left column first.
 */
export function Positioning() {
  const { t } = useTranslation();

  const isItems = t("positioning.is", { returnObjects: true }) as string[];
  const isNotItems = t("positioning.isNot", {
    returnObjects: true,
  }) as string[];

  return (
    <section id="positioning" className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        {/* Headline */}
        <h2 className="mb-12 max-w-2xl text-[40px] font-bold leading-tight text-[#3a3a3a]">
          {t("positioning.title")}
        </h2>

        {/* Two-column table */}
        <div className="grid gap-8 md:grid-cols-2">
          {/* Is column */}
          <div className="rounded-[4px] border border-[#93a603]/30 bg-[rgba(147,166,3,0.04)] p-8">
            <p className="mb-6 text-[14px] font-semibold uppercase tracking-widest text-[#93a603]">
              {t("positioning.isLabel")}
            </p>
            <ul className="space-y-4">
              {isItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check
                    className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#93a603]"
                    aria-hidden="true"
                  />
                  <span className="text-[15px] leading-relaxed text-[#3a3a3a]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Is not column */}
          <div className="rounded-[4px] border border-[#848484]/20 bg-[rgba(132,132,132,0.04)] p-8">
            <p className="mb-6 text-[14px] font-semibold uppercase tracking-widest text-[#848484]">
              {t("positioning.isNotLabel")}
            </p>
            <ul className="space-y-4">
              {isNotItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <X
                    className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#848484]"
                    aria-hidden="true"
                  />
                  <span className="text-[15px] leading-relaxed text-[#848484]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
