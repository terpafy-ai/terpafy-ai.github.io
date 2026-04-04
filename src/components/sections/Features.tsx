import { useTranslation } from "react-i18next";
import { I3DCubeScan } from "vuesax-icons-react";
import { ChatButton } from "@/components/common/ChatButton";

const FEATURE_KEYS = [
  "knowledge",
  "adapts",
  "available",
  "diagnosis",
  "explains",
  "ecosystem",
] as const;

export function Features() {
  const { t } = useTranslation();

  return (
    <section id="features" className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        {/* Header two-col */}
        <div className="grid gap-8 lg:grid-cols-2 lg:items-end lg:gap-16">
          {/* Left */}
          <div>
            <p className="mb-4 flex items-center gap-3 text-[20px] font-normal text-[#f2594b]">
              <span className="inline-block h-px w-8 bg-[#f2594b]" aria-hidden="true" />
              {t("features.label")}
            </p>
            <h2 className="text-[40px] font-bold leading-tight text-[#3a3a3a]">
              {t("features.title")}
            </h2>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-6">
            <p className="text-[13px] leading-relaxed text-[#848484]">
              {t("features.subtitle")}
            </p>
            <ChatButton variant="primary" className="self-start">
              {t("features.cta")}
            </ChatButton>
          </div>
        </div>

        {/* Highlight card */}
        <div className="mt-10 flex flex-col gap-[10px] rounded-[4px] border border-[#f2594b] bg-[rgba(132,132,132,0.1)] px-[32px] py-[16px]">
          <I3DCubeScan
            variant="Bold"
            className="size-[24px] text-[#f2594b]"
            aria-hidden="true"
          />
          <p className="text-[14px] font-bold text-[#f2594b]">
            {t("features.highlightTitle")} · {t("features.highlightSub")}
          </p>
          <p className="text-[13px] font-medium text-[#f2887e]">
            {t("features.highlightBody")}
          </p>
        </div>

        {/* 6-card grid */}
        <div className="mt-8 grid grid-cols-1 gap-[30px] sm:grid-cols-2 lg:grid-cols-3">
          {FEATURE_KEYS.map((key) => (
            <div
              key={key}
              className="flex flex-col gap-[10px] rounded-[4px] border border-[#3a3a3a] bg-[rgba(132,132,132,0.1)] px-[32px] py-[16px]"
            >
              <I3DCubeScan
                variant="Bold"
                className="size-[24px] text-[#848484]"
                aria-hidden="true"
              />
              <p className="text-[14px] font-bold text-[#848484]">
                {t(`features.items.${key}.title`)}
              </p>
              <p className="text-[13px] font-medium text-[#848484]">
                {t(`features.items.${key}.description`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
