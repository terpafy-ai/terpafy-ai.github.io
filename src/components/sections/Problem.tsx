import { useTranslation } from "react-i18next";
import { I3DCubeScan } from "vuesax-icons-react";
import { cn } from "@/lib/utils";
import { ChatButton } from "@/components/common/ChatButton";

const CARD_KEYS = ["generic", "late", "variation", "noFeedback"] as const;

// Figma assets — node 37:1672 (expires after 7 days; replace with permanent assets)
const IMG_PHOTO = "https://www.figma.com/api/mcp/asset/cdac3113-9675-4ffc-8080-a488b1a59f18";
const IMG_DECO = "https://www.figma.com/api/mcp/asset/392d828f-e33d-4444-ada6-3b4db0a15285";

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

        {/* ── Two-column: content + image ── */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">

          {/* Left — text content */}
          <div>
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
          </div>

          {/* Right — circular photo with decorative overlay */}
          <div className="flex items-center justify-center lg:justify-end">
            <div className="relative h-[420px] w-[380px] sm:h-[480px] sm:w-[440px]">
              {/* Decorative Terpafy asterisk behind photo */}
              <img
                src={IMG_DECO}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 m-auto h-[90%] w-[90%] object-contain"
              />
              {/* Circular photo on top */}
              <img
                src={IMG_PHOTO}
                alt={t("problem.imageAlt")}
                className="relative z-10 mx-auto h-full w-full rounded-full object-cover object-top"
              />
            </div>
          </div>
        </div>

        {/* ── Horizontal snap carousel — Figma: 37:1915 ── */}
        <div className="mt-16 -mx-4 sm:-mx-6 lg:-mx-8">
          <div className="flex snap-x snap-mandatory gap-[30px] overflow-x-auto px-4 pb-4 sm:px-6 lg:px-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {CARD_KEYS.map((key) => (
              <div
                key={key}
                className="flex w-[300px] shrink-0 snap-start flex-col gap-[10px] rounded-[4px] border border-[#3a3a3a] bg-[rgba(132,132,132,0.1)] px-[32px] py-[16px] sm:w-[360px]"
              >
                <div className="flex items-start gap-[10px]">
                  <I3DCubeScan
                    variant="Bold"
                    className="mt-0.5 size-[24px] shrink-0 text-[#848484]"
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

