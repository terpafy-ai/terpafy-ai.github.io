import { useTranslation } from "react-i18next";
import { ChatButton } from "@/components/common/ChatButton";
import { ChatTranscript, type Message } from "@/components/common/ChatTranscript";

const CAPACITY_KEYS = ["diagnosis", "adaptation"] as const;

/**
 * HowItWorks section — chat transcript + two Capacidade detail cards.
 * id="how-it-works" for smooth-scroll anchor.
 */
export function HowItWorks() {
  const { t } = useTranslation();

  const messages = t("howItWorks.transcript.messages", {
    returnObjects: true,
  }) as Message[];

  return (
    <section id="how-it-works" className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <p className="mb-4 flex items-center gap-3 text-[20px] font-normal text-[#f2594b]">
            <span className="inline-block h-px w-8 bg-[#f2594b]" aria-hidden="true" />
            {t("howItWorks.label")}
          </p>
          <h2 className="text-[40px] font-bold leading-tight text-[#3a3a3a]">
            {t("howItWorks.title")}
          </h2>
        </div>

        {/* Two-column layout */}
        <div className="lg:grid lg:grid-cols-2 lg:gap-16">
          {/* Left — chat transcript */}
          <ChatTranscript messages={messages} />

          {/* Right — Capacidade cards */}
          <div className="mt-8 flex flex-col gap-6 lg:mt-0">
            {CAPACITY_KEYS.map((key) => {
              const bullets = t(`howItWorks.capacities.${key}.bullets`, {
                returnObjects: true,
              }) as string[];

              return (
                <div
                  key={key}
                  className="rounded-xl border border-border bg-background p-6"
                >
                  <p className="text-4xl font-black leading-none text-foreground/10">
                    {t(`howItWorks.capacities.${key}.number`)}
                  </p>
                  <p className="mt-2 font-mono text-xs uppercase tracking-widest text-primary">
                    {t(`howItWorks.capacities.${key}.label`)}
                  </p>
                  <h3 className="mt-1 text-xl font-bold text-foreground">
                    {t(`howItWorks.capacities.${key}.title`)}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/70">
                    {t(`howItWorks.capacities.${key}.body`)}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {bullets.map((bullet, i) => (
                      <li key={i} className="text-sm text-foreground/70">
                        · {bullet}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <ChatButton variant="inline">
                      {t(`howItWorks.capacities.${key}.cta`)}
                    </ChatButton>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

