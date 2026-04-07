import { useTranslation } from "react-i18next";
import { I3DCubeScan } from "vuesax-icons-react";
import { cn } from "@/lib/utils";
import { ChatButton } from "@/components/common/ChatButton";

const CARD_KEYS = ["generic", "late", "variation", "noFeedback"] as const;

const IMG_DECO = "/assets/problem-logo-marks.svg";
const IMG_PERSON = "/assets/problem-person.png";
const IMG_PERSON_FULL = "/assets/problem-person-full.png";

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

        {/* ── Two-column: content left, logo marks right ── */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">

          {/* Left — text content */}
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
                <p className="max-w-[237px] text-[14px] font-medium leading-[1.5] text-foreground-muted">
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

          {/* Right — 3-layer composition (Figma: 2072:2772 logo_image_woman)      */}
          {/* Fixed 600×843 frame matching Figma. Overflows right intentionally.   */}
          {/* Section has no overflow clip — elements bleed naturally to viewport.  */}
          <div className="relative hidden lg:block" style={{ width: 600, height: 843 }}>

            {/* Layer 1 (back) — Oval/circle crop of kitchen-background photo */}
            {/* Rendered via CSS mask on Rectangle (33:441) at page x=687,y=1916 */}
            {/* Frame-relative: circle at left=70, top=314, size=497×497            */}
            {/* Photo inside: position relative to circle = left=4, top=-259        */}
            <div
              className="absolute overflow-hidden rounded-full"
              style={{ left: 70, top: 314, width: 497, height: 497, zIndex: 0 }}
            >
              <img
                src={IMG_PERSON}
                alt=""
                aria-hidden="true"
                className="absolute max-w-none"
                style={{ left: 4, top: -259, width: 521 }}
              />
            </div>

            {/* Layer 2 (middle) — Logo marks, horizontal-flip transform */}
            {/* Figma 33:442: inset-[19.73%_9.91%_75.11%_47.89%], canvas 1280×10349  */}
            {/* frame-relative left=0 (47.89%×1280−613=0), top=181 (19.73%×10349−1861) */}
            <img
              src={IMG_DECO}
              alt=""
              aria-hidden="true"
              className="absolute"
              style={{
                left: 0,
                top: 181,
                width: 540,
                height: 534,
                zIndex: 10,
                transform: "rotate(180deg) scaleY(-1)",
              }}
            />

            {/* Layer 3 (front) — Full woman cutout (transparent-background PNG) */}
            {/* Figma: 33:453 at frame-relative left=37, top=0, size=563×843      */}
            <img
              src={IMG_PERSON_FULL}
              alt="Cultivadora satisfeita com a orientação do Terpafy Grow"
              className="absolute"
              style={{ left: 37, top: 0, width: 563, height: 843, zIndex: 20 }}
            />
          </div>

        </div>

        {/* ── Horizontal snap carousel — Figma: 37:1915 ── */}
        <div className="mt-16 -mx-4 sm:-mx-6 lg:-mx-8">
          <div className="flex snap-x snap-mandatory gap-[30px] overflow-x-auto px-4 pb-4 sm:px-6 lg:px-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {CARD_KEYS.map((key) => (
              <div
                key={key}
                className="flex w-[300px] shrink-0 snap-start items-center overflow-clip rounded-[4px] border border-border bg-muted px-[32px] py-[16px] sm:w-[360px]"
              >
                <div className="flex items-start gap-[10px]">
                  <I3DCubeScan
                    variant="Bold"
                    className="size-[24px] shrink-0 text-foreground-muted"
                    aria-hidden="true"
                  />
                  <div className="flex flex-col gap-[10px]">
                    <p className="text-[14px] font-bold leading-[1.5] text-foreground-muted">
                      {t(`problem.cards.${key}.title`)}
                    </p>
                    <p className="text-[13px] font-medium leading-[1.5] text-foreground-muted">
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

