import { useTranslation } from "react-i18next";
import { Send } from "vuesax-icons-react";

const FEATURE_KEYS = ["defend", "different", "horizon"] as const;

export function BigChat() {
  const { t } = useTranslation();

  return (
    <section className="relative overflow-hidden bg-[#222] py-24">
      {/* Gradient blobs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/4 top-0 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#f2594b]/10 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-1/4 h-[300px] w-[300px] translate-x-1/2 translate-y-1/2 rounded-full bg-[#f2594b]/5 blur-[100px]"
      />

      <div className="relative mx-auto max-w-[700px] px-4 text-center sm:px-6 lg:px-8">
        {/* Headline */}
        <h2 className="mb-4 text-[48px] font-semibold leading-tight text-white">
          {t("bigChat.title1")}{" "}
          <span className="text-[#f2594b]">{t("bigChat.titleBrand")}</span>
        </h2>
        <p className="mb-10 text-[16px] text-white/70">{t("bigChat.subtitle")}</p>

        {/* Input bar — decorative */}
        <div className="mb-14 flex items-center gap-3 rounded-[10px] border border-white/20 bg-white/5 px-5 py-3">
          <span className="flex-1 text-left text-[15px] text-white/30">
            {t("bigChat.placeholder")}
          </span>
          <button
            type="button"
            aria-label={t("bigChat.placeholder")}
            className="flex h-[38px] w-[38px] items-center justify-center rounded-[8px] bg-gradient-to-r from-[#f2594b] to-[#ff8c69]"
          >
            <Send variant="Bold" className="size-[18px] text-white" />
          </button>
        </div>

        {/* 3 feature columns */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {FEATURE_KEYS.map((key) => (
            <div key={key} className="flex flex-col items-center gap-2">
              <p className="text-[16px] font-medium text-white">{t(`bigChat.${key}`)}</p>
              <p className="text-[14px] font-light text-white/60">
                {t(`bigChat.${key}Desc`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
