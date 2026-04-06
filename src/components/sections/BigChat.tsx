import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Flash, I3DCubeScan, ArrowRight, Send } from "vuesax-icons-react";

const FEATURES = [
  { key: "defend", Icon: Flash },
  { key: "different", Icon: I3DCubeScan },
  { key: "horizon", Icon: ArrowRight },
] as const;

export function BigChat() {
  const { t } = useTranslation();
  const [value, setValue] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!value.trim()) return;
    setSubmitted(true);
  }

  return (
    <section className="bg-background py-8 sm:py-12">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        {/* Dark card — full content width, Figma node 3:734 */}
        <div className="relative overflow-hidden rounded-[16px] border border-[rgba(255,255,255,0.15)] bg-[#222] px-6 py-[72px] sm:px-[85px]">
          {/* Gradient blobs */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/4 top-[-100px] h-[500px] w-[600px] -translate-x-1/2 rounded-full bg-[#f2594b]/10 blur-[160px]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-[-50px] right-1/4 h-[400px] w-[500px] translate-x-1/2 rounded-full bg-[#f2594b]/5 blur-[140px]"
          />

          <div className="relative text-center">
            {/* Title — Figma node 3:737: "Bem-vindo ao" + highlighted "TerpafyGrow" */}
            <h2 className="mb-4 text-[48px] font-semibold leading-[1.5] tracking-[0.96px] text-[#e5e5e5]">
              {t("bigChat.title1")}{" "}
              <span className="relative inline-block">
                {/* Gradient highlight box behind "TerpafyGrow" */}
                <span
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-r from-[rgba(242,89,75,0.5)] to-transparent"
                />
                {/* Left border accent line */}
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-0 h-full w-[3px] bg-[rgba(242,89,75,0.8)]"
                />
                <span className="relative pl-2">
                  {t("bigChat.title2")}
                  <span className="text-[#f2594b]">{t("bigChat.titleBrand")}</span>
                </span>
              </span>
            </h2>

            <p className="mb-[60px] text-[16px] text-[#e5e5e5]">{t("bigChat.subtitle")}</p>

            {/* Input form / "Em breve" confirmation */}
            {!submitted ? (
              <form onSubmit={handleSubmit} className="mb-[72px]">
                <div className="flex items-center rounded-[10px] border border-white bg-[rgba(255,255,255,0.05)] px-[15px] py-[8px] backdrop-blur-[16px]">
                  <input
                    type="text"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder={t("bigChat.placeholder")}
                    className="min-w-0 flex-1 bg-transparent text-[16px] font-medium text-[#e5e5e5] placeholder-[rgba(229,229,229,0.3)] outline-none"
                  />
                  <button
                    type="submit"
                    aria-label={t("bigChat.placeholder")}
                    className="ml-3 flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-[10px] border border-[#f2594b]"
                    style={{
                      backgroundImage:
                        "linear-gradient(91.96deg, rgba(242,89,75,0.7) 16.64%, rgba(242,89,75,0.8) 117.28%)",
                    }}
                  >
                    <Send variant="Bold" className="size-[20px] text-white" />
                  </button>
                </div>
              </form>
            ) : (
              <div className="mb-[72px] flex items-center justify-center rounded-[10px] border border-white/20 bg-[rgba(255,255,255,0.05)] px-[15px] py-[17px] backdrop-blur-[16px]">
                <p className="text-[16px] font-medium text-[#e5e5e5]/50">
                  {t("bigChat.comingSoon")}
                </p>
              </div>
            )}

            {/* 3 feature columns */}
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
              {FEATURES.map(({ key, Icon }) => (
                <div key={key} className="flex flex-col items-center gap-2">
                  <Icon variant="Bold" className="size-[20px] text-[#e5e5e5]" />
                  <p className="text-[16px] font-medium text-[#e5e5e5]">
                    {t(`bigChat.${key}`)}
                  </p>
                  <p className="max-w-[202px] text-[14px] font-light text-[#e5e5e5]/60">
                    {t(`bigChat.${key}Desc`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
