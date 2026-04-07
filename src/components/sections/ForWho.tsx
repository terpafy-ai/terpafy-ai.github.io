import { useState } from "react";
import { useTranslation } from "react-i18next";
import { AddCircle, CloseCircle } from "vuesax-icons-react";

const PERSONA_KEYS = [
  "beginner",
  "advanced",
  "association",
  "doctor",
] as const;

export function ForWho() {
  const { t } = useTranslation();
  const [openCards, setOpenCards] = useState<Set<string>>(new Set());

  const toggle = (key: string) => {
    setOpenCards((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  };

  return (
    <section id="for-who" className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <p className="mb-4 text-[20px] font-normal text-primary">
            {t("forWho.label")}
          </p>
          <h2 className="mb-4 text-[40px] font-bold leading-tight text-foreground">
            {t("forWho.title")}
          </h2>
          <p className="mx-auto max-w-2xl text-[13px] leading-relaxed text-foreground-muted">
            {t("forWho.subtitle")}
          </p>
        </div>

        {/* Accordion cards — Figma 2092:2832: 2-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {PERSONA_KEYS.map((key) => {
            const isOpen = openCards.has(key);
            return (
              <div
                key={key}
                className="cursor-pointer rounded-[4px] border border-border bg-muted p-[20px]"
                onClick={() => toggle(key)}
              >
                {/* Row header */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[14px] font-medium text-primary">
                      {t(`forWho.personas.${key}.title`)}
                    </p>
                    <p className="text-[20px] font-bold text-foreground">
                      {t(`forWho.personas.${key}.subtitle`)}
                    </p>
                  </div>
                  <span
                    className="ml-4 flex-shrink-0 text-foreground"
                    aria-hidden="true"
                  >
                    {isOpen ? <CloseCircle size={24} /> : <AddCircle size={24} />}
                  </span>
                </div>

                {/* Expanded body */}
                {isOpen && (
                  <p className="mt-4 text-[14px] leading-relaxed text-foreground-muted">
                    {t(`forWho.personas.${key}.body`)}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
