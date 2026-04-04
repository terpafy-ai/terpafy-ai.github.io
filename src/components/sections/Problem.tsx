import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";
import { ChatButton } from "@/components/common/ChatButton";

const CARD_KEYS = ["generic", "late", "variation", "noFeedback"] as const;

/**
 * Problem section — highlights the 4 pain points that Terpafy Grow solves.
 * Positioned immediately after the Hero in Home.tsx (id="problem").
 */
export function Problem() {
  const { t } = useTranslation();

  function handleLearnMore(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section id="problem" className="bg-background py-16 sm:py-24">
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <span className="font-mono text-xs uppercase tracking-widest text-foreground-muted">
          ––– {t("problem.label")}
        </span>

        {/* Headline */}
        <h2 className="mt-4 max-w-2xl text-3xl font-bold text-foreground sm:text-4xl lg:text-[40px]">
          {t("problem.title")}
        </h2>

        {/* Stat block */}
        <div className="mt-8">
          <p className="text-5xl font-black text-primary">{t("problem.stat")}</p>
          <p className="mt-2 max-w-xl text-base text-foreground-muted">
            {t("problem.statLabel")}
          </p>
        </div>

        {/* Body */}
        <p className="mt-6 max-w-2xl text-base text-foreground-muted">
          {t("problem.body")}
        </p>

        {/* CTAs */}
        <div className="mt-8 flex flex-wrap gap-4">
          <ChatButton
            variant="primary"
            className="rounded-[4px] px-8 py-4 text-[20px] font-normal"
          >
            {t("problem.cta")}
          </ChatButton>
          <a
            href="#how-it-works"
            onClick={handleLearnMore}
            className={cn(
              "inline-flex items-center justify-center rounded-[4px] px-8 py-4",
              "bg-primary-lightest text-[20px] font-normal text-foreground",
              "transition-shadow hover:shadow-hover focus-visible:outline-none",
              "focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
            )}
          >
            {t("problem.ctaSecondary")}
          </a>
        </div>

        {/* Pain point cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {CARD_KEYS.map((key) => (
            <div key={key} className="rounded-xl border border-border bg-background p-6">
              <h3 className="text-base font-semibold text-foreground">
                {t(`problem.cards.${key}.title`)}
              </h3>
              <p className="mt-2 text-sm text-foreground-muted">
                {t(`problem.cards.${key}.body`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
