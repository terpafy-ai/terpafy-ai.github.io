import { useTranslation } from "react-i18next";
import { ChatButton } from "@/components/common/ChatButton";

export function Manifesto() {
  const { t } = useTranslation();

  return (
    <section id="manifesto" className="py-16 sm:py-24">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="w-full rounded-tl-[10px] rounded-tr-[10px] rounded-bl-[10px] rounded-br-[5px] bg-gradient-to-b from-[#f2594b]/80 to-red-500/50 px-4 py-7 outline outline-1 -outline-offset-1 outline-[#3a3a3a] backdrop-blur-lg">
          <div className="flex flex-col items-center gap-12 p-2.5">
            {/* Quote + description */}
            <div className="flex flex-col items-center gap-2.5 text-center">
              <p className="max-w-[620px] text-4xl font-semibold leading-10 text-white">
                &ldquo;{t("cta.quote")}&rdquo;
              </p>
              <p className="max-w-[620px] text-sm font-medium leading-5 text-white">
                {t("manifesto.description")}
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col items-center gap-2.5 sm:flex-row">
              <ChatButton variant="primary">{t("cta.button")}</ChatButton>

              <a
                href="#how-it-works"
                className="inline-flex w-60 items-center justify-center rounded bg-white px-8 py-4 text-base font-normal leading-4 text-[#3a3a3a] transition-colors hover:bg-white/90"
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
