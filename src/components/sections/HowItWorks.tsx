import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";

const imgLogoMarks = "/assets/how-it-works-logo-marks.svg";
const imgPerson = "/assets/how-it-works-person.png";

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
          {/* Left — Person + Logo marks composition (desktop only)
               Based on Figma Group 39 (599.72×843.2px) scaled to 0.83×:
               — Logo marks: left 64px, top 140px, width 508px (intentionally overflows right)
               — Person circle: left 59px, top 260px, size 413×413px                           */}
          <div
            className="relative hidden flex-shrink-0 lg:block"
            style={{ width: "497px", height: "700px" }}
          >
            {/* Red Terpafy logo marks SVG — behind person (z-index default/0) */}
            <img
              src={imgLogoMarks}
              alt=""
              aria-hidden="true"
              style={{
                position: "absolute",
                left: "64px",
                top: "140px",
                width: "508px",
                height: "auto",
              }}
            />
            {/* Person photo — circular crop via border-radius, above logo (z-index 10) */}
            <div
              className="absolute z-10 overflow-hidden rounded-full"
              style={{
                left: "59px",
                top: "260px",
                width: "413px",
                height: "413px",
              }}
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

