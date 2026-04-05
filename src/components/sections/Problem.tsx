import { useTranslation } from "react-i18next";
import { I3DCubeScan } from "vuesax-icons-react";
import { cn } from "@/lib/utils";
import { ChatButton } from "@/components/common/ChatButton";

const CARD_KEYS = ["generic", "late", "variation", "noFeedback"] as const;

/**
 * Problem section — Figma: 37:1672 (image) + 37:1915 (carousel cards).
 * Two-column on desktop: content left, circular photo right.
 * Cards are a horizontal snap-scroll carousel.
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

        {/* ── Content ── */}
        <div>

          {/* Text content */}
          <div>
            {/* Section label — Figma: 20px #f2594b normal */}
            <span className="text-[20px] font-normal leading-none text-[#f2594b]">
              ––– {t("problem.label")}
            </span>

            {/* Headline */}
            <h2 className="mt-4 max-w-2xl text-3xl font-bold text-foreground sm:text-4xl lg:text-[40px]">
              {t("problem.title")}
            </h2>

            {/* Stat block — Figma node 26:98: bordered card */}
            <div className="mt-8 inline-flex rounded-[4px] border border-[#f2594b] bg-[rgba(242,89,75,0.1)] px-[32px] py-[16px]">
              <div className="flex flex-col gap-[10px]">
                <p className="text-[40px] font-extrabold leading-none text-[#f2594b]">
                  {t("problem.stat")}
                </p>
                <p className="max-w-[237px] text-[14px] font-medium leading-[1.5] text-[#848484]">
                  {t("problem.statLabel")}
                </p>
              </div>
            </div>

            {/* Body */}
            <p className="mt-6 max-w-2xl text-base text-foreground-muted">
              {t("problem.body")}
            </p>

            {/* CTAs — Figma node 28:459: gap-[11px], text-[16px] */}
            <div className="mt-8 flex flex-wrap gap-[11px]">
              <ChatButton
                variant="primary"
                className="rounded-[4px] py-[16px] pl-[32px] pr-[24px] text-[16px] font-normal"
              >
                {t("problem.cta")}
              </ChatButton>
              <a
                href="#how-it-works"
                onClick={handleLearnMore}
                className={cn(
                  "inline-flex items-center justify-center rounded-[4px] px-[32px] py-[16px]",
                  "bg-primary-lightest text-[16px] font-normal text-foreground",
                  "transition-shadow hover:shadow-hover focus-visible:outline-none",
                  "focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
                )}
              >
                {t("problem.ctaSecondary")}
              </a>
            </div>
          </div>

        </div>

        {/* ── Horizontal snap carousel — Figma: 37:1915 ── */}
        <div className="mt-16 -mx-4 sm:-mx-6 lg:-mx-8">
          <div className="flex snap-x snap-mandatory gap-[30px] overflow-x-auto px-4 pb-4 sm:px-6 lg:px-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {CARD_KEYS.map((key) => (
              <div
                key={key}
                className="flex w-[300px] shrink-0 snap-start items-center overflow-clip rounded-[4px] border border-[#3a3a3a] bg-[rgba(132,132,132,0.1)] px-[32px] py-[16px] sm:w-[360px]"
              >
                <div className="flex items-start gap-[10px]">
                  <I3DCubeScan
                    variant="Bold"
                    className="size-[24px] shrink-0 text-[#848484]"
                    aria-hidden="true"
                  />
                  <div className="flex flex-col gap-[10px]">
                    <p className="text-[14px] font-bold leading-[1.5] text-[#848484]">
                      {t(`problem.cards.${key}.title`)}
                    </p>
                    <p className="text-[13px] font-medium leading-[1.5] text-[#848484]">
                      {t(`problem.cards.${key}.body`)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

