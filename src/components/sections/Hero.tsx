import { useTranslation } from "react-i18next";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { WhatsAppButton } from "@/components/common/WhatsAppButton";

/**
 * Hero section — Figma reference: large Anton heading with "Grow" in primary
 * red, subtitle, primary CTA + secondary "See how it works" link.
 */
export function Hero() {
  const { t } = useTranslation();

  function handleLearnMore(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section
      id="hero"
      className="relative flex min-h-[90dvh] items-center bg-background pt-16"
    >
      <div className="mx-auto w-full max-w-[1200px] px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        {/* Badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/5 px-4 py-1.5">
          <span className="h-2 w-2 rounded-full bg-primary" aria-hidden="true" />
          <span className="text-sm font-medium text-primary">{t("hero.badge")}</span>
        </div>

        {/* Headline */}
        <h1
          className={cn(
            "font-heading max-w-3xl text-5xl font-black uppercase leading-[1.05] tracking-tight",
            "text-foreground sm:text-6xl lg:text-7xl",
          )}
        >
          {t("hero.titleLine1")}
          <br />
          {t("hero.titleLine2")}{" "}
          <span className="text-primary">Grow</span>{" "}
          {t("hero.titleLine3")}
        </h1>

        {/* Subtitle */}
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-foreground-muted sm:text-xl">
          {t("hero.subtitle")}
        </p>

        {/* CTA row */}
        <div className="mt-8 flex flex-wrap gap-4">
          <WhatsAppButton
            variant="primary"
            messageKey="hero.whatsappMessage"
            className="text-base"
          >
            {t("hero.cta")}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </WhatsAppButton>

          <a
            href="#how-it-works"
            onClick={handleLearnMore}
            className={cn(
              "inline-flex items-center justify-center rounded-lg px-6 py-3",
              "border border-border bg-background text-base font-semibold text-foreground",
              "transition-colors hover:bg-muted focus-visible:outline-none",
              "focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
            )}
          >
            {t("hero.ctaSecondary")}
          </a>
        </div>

        {/* Trust badges */}
        <div className="mt-10 flex flex-wrap items-center gap-6">
          {(["secure", "medical", "easy"] as const).map((key) => (
            <div key={key} className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-accent-green" aria-hidden="true" />
              <span className="text-sm font-medium text-foreground-muted">
                {t(`hero.badges.${key}`)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
