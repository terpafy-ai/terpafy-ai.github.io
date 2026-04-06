import { useTranslation } from "react-i18next";
import { ArrowRight, TickCircle } from "vuesax-icons-react";
import { cn } from "@/lib/utils";
import { WhatsAppButton } from "@/components/common/WhatsAppButton";
import { ChatPreview } from "@/components/common/ChatPreview";

/**
 * Hero section — Figma reference: node 13:4694 (left column) + 13:4600 (chat preview).
 * Two-column layout at lg: heading/CTAs on left, chat mockup on right.
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
        <div className="flex items-center gap-12 lg:gap-16">
          {/* ── Left column ── */}
          <div className="min-w-0 flex-1">
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
              <WhatsAppButton
                variant="primary"
                messageKey="hero.whatsappMessage"
                className="rounded-[4px] px-8 py-4 text-[20px] font-normal"
              >
                {t("hero.cta")}
                <ArrowRight variant="Bold" className="h-5 w-5 shrink-0" aria-hidden="true" />
              </WhatsAppButton>

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

          {/* ── Right column — chat preview (desktop only) ── */}
          <div className="hidden shrink-0 lg:block">
            <ChatPreview />
          </div>
        </div>
      </div>
    </section>
  );
}
