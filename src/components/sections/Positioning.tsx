import { ArrowRight } from "vuesax-icons-react";
import { TickCircle, CloseCircle } from "vuesax-icons-react";
import { useTranslation } from "react-i18next";

const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER ?? "";

export function Positioning() {
  const { t } = useTranslation();

  const isItems = t("positioning.is", { returnObjects: true }) as string[];
  const isNotItems = t("positioning.isNot", {
    returnObjects: true,
  }) as string[];

  const message = encodeURIComponent(t("hero.whatsappMessage") as string);
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

  return (
    <section id="positioning" className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <p className="mb-4 text-center text-[20px] font-normal leading-none text-primary">
          {t("positioning.label")}
        </p>

        {/* Headline */}
        <h2 className="mb-12 text-center text-[40px] font-bold leading-[1.12] text-foreground">
          {t("positioning.title")}
        </h2>

        {/* Two-column cards */}
        <div className="grid gap-8 md:grid-cols-2">
          {/* Is column */}
          <div className="flex flex-col gap-[26px] rounded-[4px] border border-[#f2594b] bg-[rgba(242,89,75,0.2)] p-5">
            <p className="text-[16px] font-semibold leading-none text-[#f2594b]">
              {t("positioning.isLabel")}
            </p>
            <ul className="flex flex-col gap-[26px]">
              {isItems.map((item, i) => (
                <li key={i} className="flex items-center gap-4">
                  <TickCircle
                    variant="Outline"
                    className="h-[22px] w-[22px] flex-shrink-0 text-[#f2594b]"
                    aria-hidden="true"
                  />
                  <span className="text-[13px] font-normal leading-none text-foreground">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Is not column */}
          <div className="flex flex-col gap-[26px] rounded-[4px] border border-border bg-muted/30 p-5">
            <p className="text-[16px] font-semibold leading-none text-foreground-muted">
              {t("positioning.isNotLabel")}
            </p>
            <ul className="flex flex-col gap-[26px]">
              {isNotItems.map((item, i) => (
                <li key={i} className="flex items-center gap-4">
                  <CloseCircle
                    variant="Outline"
                    className="h-[22px] w-[22px] flex-shrink-0 text-foreground-muted"
                    aria-hidden="true"
                  />
                  <span className="text-[13px] font-normal leading-none text-foreground-muted">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 flex justify-center">
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-[4px] bg-primary pl-8 pr-6 py-4 text-base font-normal text-white transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            {t("positioning.cta")}
            <ArrowRight variant="Bold" className="h-5 w-5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
