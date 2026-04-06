import { useTranslation } from "react-i18next";
import { Send, Verify, Routing, TrendUp } from "vuesax-icons-react";

const FEATURES = [
  { key: "defend", Icon: Verify },
  { key: "different", Icon: Routing },
  { key: "horizon", Icon: TrendUp },
] as const;

export function BigChat() {
  const { t } = useTranslation();

  return (
    <section className="relative overflow-hidden bg-[#222] py-24">
      {/* Gradient blob — top-center, matches Figma radial */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#f2594b]/20 blur-[157px]"
      />

      <div className="relative mx-auto max-w-[900px] px-4 text-center sm:px-6 lg:px-8">
        {/* Headline */}
        <h2 className="mb-4 text-[48px] font-semibold leading-[1.5] tracking-[0.96px] text-[#e5e5e5] sm:text-[48px]">
          {t("bigChat.title1")}
          {/* TerpafyGrow brand block with gradient highlight */}
          <span className="relative inline-block whitespace-nowrap pl-2">
            {/* gradient bg: red/50 → transparent */}
            <span
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-r from-[rgba(242,89,75,0.5)] to-transparent"
            />
            {/* left border line */}
            <span
              aria-hidden="true"
              className="absolute inset-y-[8%] left-0 w-[2px] bg-[#f2594b]"
            />
            <span className="relative text-[#e5e5e5]">Terpafy</span>
            <span className="relative text-[#f2594b]">Grow</span>
          </span>
        </h2>

        <p className="mb-10 text-[16px] leading-[1.5] text-[#e5e5e5]/70">
          {t("bigChat.subtitle")}
        </p>

        {/* Input bar — decorative */}
        <div className="mb-14 flex items-center gap-2 rounded-[10px] border border-white bg-[rgba(255,255,255,0.05)] px-[15px] py-[10px] backdrop-blur-sm">
          <span className="flex-1 text-left text-[16px] font-medium text-[rgba(229,229,229,0.3)]">
            {t("bigChat.placeholder")}
          </span>
          <button
            type="button"
            aria-label={t("bigChat.placeholder")}
            className="flex h-[36px] w-[36px] shrink-0 items-center justify-center rounded-[10px] border border-[#f2594b] p-[8px]"
            style={{
              background:
                "linear-gradient(91.96deg, rgba(242,89,75,0.7) 16.64%, rgba(242,89,75,0.8) 117.28%)",
            }}
          >
            <Send variant="Bold" className="size-[20px] text-white" />
          </button>
        </div>

        {/* 3 feature columns */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {FEATURES.map(({ key, Icon }) => (
            <div key={key} className="flex flex-col items-center gap-[8px]">
              <Icon
                variant="Linear"
                className="size-[20px] text-[#e5e5e5]"
                aria-hidden="true"
              />
              <p className="text-[16px] font-medium leading-[1.5] text-[#e5e5e5]">
                {t(`bigChat.${key}`)}
              </p>
              <p className="text-[14px] font-light leading-[1.5] text-[#e5e5e5]/70">
                {t(`bigChat.${key}Desc`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

