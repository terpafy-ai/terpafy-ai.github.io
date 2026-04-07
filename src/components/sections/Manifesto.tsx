import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";
import { ChatButton } from "@/components/common/ChatButton";

export function Manifesto() {
  const { t } = useTranslation();

  function handleLearnMore(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section id="manifesto" className="py-16 sm:py-24">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        {/* Figma 37:1981 — red gradient card, backdrop blur */}
        <div className="w-full rounded-tl-[10px] rounded-tr-[10px] rounded-bl-[10px] rounded-br-[5px] border border-border bg-gradient-to-b from-primary/80 to-primary/[0.48] px-[16px] py-[30px] backdrop-blur-[16px]">
          <div className="flex flex-col items-center gap-[50px] p-[10px]">

            {/* Text block — quote + description */}
            <div className="flex flex-col items-center gap-[10px] text-center">
              <p className="max-w-[620px] text-[40px] font-semibold leading-[1.02] text-white">
                &ldquo;{t("cta.quote")}&rdquo;
              </p>
              <p className="max-w-[620px] text-[14px] font-medium leading-[1.5] text-white/90">
                {t("manifesto.description")}
              </p>
            </div>

            {/* Buttons — Figma: gap-[11px], both w-[244px] */}
            <div className="flex flex-col items-center gap-[11px] sm:flex-row">
              <ChatButton
                variant="primary"
                className="w-full sm:w-[244px] justify-center"
              >
                {t("cta.button")}
              </ChatButton>

              <a
                href="#how-it-works"
                onClick={handleLearnMore}
                className={cn(
                  "inline-flex w-full sm:w-[244px] items-center justify-center rounded-[4px]",
                  "bg-white px-[32px] py-[16px] text-[16px] font-normal text-background-dark",
                  "transition-colors hover:bg-white/90 focus-visible:outline-none",
                  "focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2",
                )}
              >
                {t("cta.ctaSecondary")}
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
