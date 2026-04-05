import { useTranslation } from "react-i18next";
import { TickCircle } from "vuesax-icons-react";
import { cn } from "@/lib/utils";
import { ChatButton } from "@/components/common/ChatButton";
import { ChatPreviewWidget } from "@/components/common/ChatPreviewWidget";

/**
 * Hero section — Figma reference: node 13:4694 (left column) + 13:4600 (chat preview).
 * Two-column layout at lg: heading/CTAs on left, chat mockup on right.
 */
export function Hero() {
  const { t } = useTranslation();
  const orientaTags = t("hero.orientaTags", { returnObjects: true }) as unknown as string[];
  const ecosystemPills = t("hero.ecosystemPills", { returnObjects: true }) as unknown as string[];

  function handleLearnMore(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section
      id="hero"
      className="relative flex flex-col bg-background pt-16"
    >
      {/* ── Main hero content ── */}
      <div className="flex flex-1 items-center">
        <div className="mx-auto w-full max-w-[1200px] px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
            {/* ── Left column ── */}
            <div className="min-w-0">
              {/* Badge — Figma: bordered pill with checkmark icon */}
              <div className="mb-8 inline-flex items-center gap-2 rounded-[4px] border border-primary bg-primary/10 px-8 py-4">
                <span className="text-[20px] font-normal text-primary">{t("hero.badge")}</span>
                <TickCircle variant="Bold" className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
              </div>

              {/* Headline — Figma: Anton 70px, uppercase, tracking-[2.1px], leading-[1.12] */}
              <h1
                className={cn(
                  "font-heading max-w-2xl uppercase text-foreground",
                  "text-5xl leading-[1.12] tracking-[2.1px]",
                  "md:text-[64px] lg:text-[70px]",
                )}
              >
                {t("hero.titleLine1")}
                <br />
                {t("hero.titleLine2")}{" "}
                <span className="text-primary">Grow</span>
                <br />
                {t("hero.titleLine3")}
              </h1>

              {/* Subtitle — Figma: Inter Medium 14px, #848484 */}
              <p className="mt-6 max-w-xl text-[14px] font-medium leading-relaxed text-[#848484]">
                {t("hero.subtitle")}
              </p>

              {/* CTA row — Figma: Large buttons, rounded-[4px] */}
              <div className="mt-8 flex flex-wrap gap-4">
                <ChatButton
                  variant="primary"
                  className="rounded-[4px] px-8 py-4 text-[20px] font-normal"
                >
                  {t("hero.cta")}
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
                  {t("hero.ctaSecondary")}
                </a>
              </div>
            </div>

            {/* ── Right column — chat preview widget ── */}
            <div className="lg:flex lg:items-center">
              <ChatPreviewWidget />
            </div>
          </div>
        </div>
      </div>

      {/* ── ORIENTA — full-bleed strip, Figma: 41:1049 ── */}
      <div className="border-t border-[rgba(58,58,58,0.2)] bg-background">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-3 py-5 md:flex-row md:items-center md:gap-[39px] md:py-[30px]">
            <span className="shrink-0 text-[12px] text-foreground">{t("hero.orientaLabel")}</span>
            <div className="hidden h-[23px] w-px shrink-0 bg-[rgba(58,58,58,0.2)] md:block" aria-hidden="true" />
            <div className="flex flex-wrap items-center gap-x-[39px] gap-y-2 md:flex-nowrap">
              {orientaTags.map((tag) => (
                <div key={tag} className="flex shrink-0 items-center gap-2">
                  <span className="block h-5 w-5 shrink-0 bg-foreground" aria-hidden="true" />
                  <span className="whitespace-nowrap text-[12px] text-foreground">{tag}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Ecosystem — full-bleed strip, Figma: 41:1065 ── */}
      <div className="border-t border-[rgba(58,58,58,0.2)] bg-background">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 py-5 md:flex-row md:items-center md:py-[28px]">
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-[39px]">
              <span className="shrink-0 whitespace-nowrap text-[12px] uppercase tracking-widest text-[#93a603]">
                {t("hero.ecosystemLabel")}
              </span>
              <div className="hidden h-[23px] w-px shrink-0 bg-[rgba(58,58,58,0.2)] md:block" aria-hidden="true" />
              <p className="max-w-[600px] text-[12px] text-foreground">{t("hero.ecosystemDescription")}</p>
            </div>
            <div className="flex flex-wrap gap-x-[10px] gap-y-[7px] md:ml-auto">
              {ecosystemPills.map((pill, i) => (
                <span
                  key={pill}
                  className={
                    i === 0
                      ? "rounded-[4px] border border-[#93a603] bg-[rgba(147,166,3,0.1)] px-2.5 py-2 text-[10px] text-[#93a603]"
                      : "rounded-[4px] border border-[#8a8a8a] bg-[rgba(138,138,138,0.1)] px-2.5 py-2 text-[10px] text-[#8a8a8a]"
                  }
                >
                  {pill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
