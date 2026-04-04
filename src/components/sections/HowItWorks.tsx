import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";

const imgLogoMarks = "/assets/how-it-works-logo-marks.svg";
const imgPerson = "/assets/how-it-works-person.png";
const imgMask = "/assets/how-it-works-mask.svg";

interface ChatMsg {
  role: "user" | "bot";
  time: string;
  text: string;
}

/**
 * HowItWorks section — person + Terpafy logo marks on the left,
 * floating chat conversation on the right (no card container).
 * id="how-it-works" for smooth-scroll anchor.
 */
export function HowItWorks() {
  const { t } = useTranslation();

  const messages = t("howItWorks.transcript.messages", {
    returnObjects: true,
  }) as ChatMsg[];

  return (
    <section id="how-it-works" className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <p className="mb-4 flex items-center gap-3 text-[20px] font-normal text-[#f2594b]">
            <span className="inline-block h-px w-8 bg-[#f2594b]" aria-hidden="true" />
            {t("howItWorks.label")}
          </p>
          <h2 className="text-[40px] font-bold leading-[1.12] text-[#3a3a3a]">
            {t("howItWorks.title")}
          </h2>
        </div>

        {/* Content: person left + chat right */}
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center">
          {/* Left — Person + Logo marks composition (desktop only) */}
          <div className="relative hidden h-[520px] w-[400px] flex-shrink-0 lg:block">
            {/* Red Terpafy decorative logo marks — positioned top-right, behind person */}
            <img
              src={imgLogoMarks}
              alt=""
              aria-hidden="true"
              className="absolute right-0 top-0 h-[340px] w-[340px]"
            />
            {/* Person photo with organic circular mask */}
            <div
              className="absolute bottom-0 left-0 h-[480px] w-[360px] [transform:scaleX(-1)]"
              style={{
                maskImage: `url(${imgMask})`,
                WebkitMaskImage: `url(${imgMask})`,
                maskSize: "532px 532px",
                WebkitMaskSize: "532px 532px",
                maskPosition: "-69px 92px",
                WebkitMaskPosition: "-69px 92px",
                maskRepeat: "no-repeat",
                WebkitMaskRepeat: "no-repeat",
                maskMode: "alpha",
              } as React.CSSProperties}
            >
              <img
                src={imgPerson}
                alt="Especialista Terpafy Grow"
                className="h-full w-full object-cover object-top"
              />
            </div>
          </div>

          {/* Right — Chat messages (floating bubbles, no container card) */}
          <div className="flex flex-1 flex-col gap-4">
            {messages.map((msg, i) => {
              const isUser = msg.role === "user";
              const isLastBot = msg.role === "bot" && i === messages.length - 1;

              // Last bot message: plain text, no bubble (matches Figma node 37:1766)
              if (isLastBot) {
                return (
                  <p
                    key={i}
                    className="max-w-[90%] text-sm font-medium leading-[1.5] text-[#3a3a3a]"
                  >
                    {msg.text}
                  </p>
                );
              }

              return (
                <div
                  key={i}
                  className={cn("flex", isUser ? "justify-end" : "justify-start")}
                >
                  <div
                    className={cn(
                      "flex max-w-[80%] flex-col gap-1 overflow-hidden px-4 py-4 backdrop-blur-[16px]",
                      isUser
                        ? "rounded-[10px_10px_10px_5px] border border-[#f2594b] bg-[rgba(242,89,75,0.2)]"
                        : "rounded-[10px_10px_5px_10px] border border-[#3a3a3a] bg-gradient-to-b from-[rgba(58,58,58,0.3)] to-[rgba(160,160,160,0.03)]",
                    )}
                  >
                    <p className="text-sm font-medium leading-[150%] text-[#3a3a3a]">
                      {msg.text}
                    </p>
                    <span className="self-end text-xs font-medium leading-[150%] text-[#3a3a3a]">
                      {msg.time}
                    </span>
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

