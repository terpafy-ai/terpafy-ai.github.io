import { useTranslation } from "react-i18next";
import { CopySuccess } from "vuesax-icons-react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { ChatButton } from "@/components/common/ChatButton";

const CAPACITY_KEYS = ["diagnosis", "adaptation"] as const;

const imgLogoMarks = "/assets/how-it-works-logo-marks.svg";
const imgPerson = "/assets/how-it-works-person.png";
const imgPersonFull = "/assets/how-it-works-person-full.png";
const imgPerson2 = "/assets/how-it-works-person-2.png";

interface ChatMsg {
  role: "user" | "bot";
  time: string;
  text: string;
}

/** Shared bubble wrapper — reused for both desktop (absolute) and mobile (flex) layouts. */
function UserBubble({
  children,
  time,
  className,
}: {
  children: React.ReactNode;
  time: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-[10px_10px_10px_5px] border border-[#f2594b] bg-[rgba(242,89,75,0.2)] backdrop-blur-[16px]",
        className,
      )}
    >
      <div className="px-[10px] pt-[15px] pb-[15px]">
        <p className="text-[14px] font-medium leading-[1.5] text-[#3a3a3a]">{children}</p>
        <p className="mt-1 text-right text-[12px] font-medium leading-[1.5] text-[#3a3a3a]">
          {time}
        </p>
      </div>
    </div>
  );
}

function BotBubble({
  children,
  time,
  className,
}: {
  children: React.ReactNode;
  time: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-[10px_10px_5px_10px] bg-gradient-to-b from-[rgba(58,58,58,0.3)] to-[rgba(160,160,160,0.03)] outline outline-1 -outline-offset-1 outline-[#3a3a3a] backdrop-blur-lg",
        className,
      )}
    >
      <div className="px-[15px] pt-[15px] pb-[15px]">
        <p className="text-[14px] font-medium leading-5 text-[#3a3a3a]">{children}</p>
        <p className="mt-1 text-right text-[12px] font-medium leading-4 text-[#3a3a3a]">
          {time}
        </p>
      </div>
    </div>
  );
}

/**
 * HowItWorks — Figma node 2067:2769
 *
 * Layout: OVERLAPPING composition. Person+logo sit on the left; chat bubbles
 * float to the right starting at ~40% width, layered OVER the person image.
 * This is NOT a two-column flex layout.
 *
 * Desktop positions derived from Figma canvas coords (1440px frame, 100px
 * left margin = 1240px content) scaled to 1200px: factor ≈ 0.968
 *
 * Layer order (front → back):
 *   Bubbles        :  z=30
 *   Oval woman     :  left=49   top=43   size=403    (z=20, node 37:1674)
 *   Logo marks SVG :  left=85   top=0    width=540   (z=10, node 33:442)
 *   Full woman PNG :  left=0    top=0    width=480   (z=0,  node 33:453)
 */
export function HowItWorks() {
  const { t } = useTranslation();

  const messages = t("howItWorks.transcript.messages", {
    returnObjects: true,
  }) as ChatMsg[];

  const [userMsg1, botMsg1, userMsg2, botMsg2] = messages;

  return (
    <section id="how-it-works" className="bg-background py-16 sm:py-24">
      {/* ── Header (padded) ───────────────────────────────────────────── */}
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <p className="mb-4 flex items-center gap-3 text-[20px] font-normal text-[#f2594b]">
            <span className="inline-block h-px w-8 bg-[#f2594b]" aria-hidden="true" />
            {t("howItWorks.label")}
          </p>
          <h2 className="text-[40px] font-bold leading-[1.12] text-[#3a3a3a]">
            {t("howItWorks.title")}
          </h2>
        </div>
      </div>

      {/* ── Desktop composition (no horizontal padding — positions are from 1200px edge) ── */}
      <div className="mx-auto hidden max-w-[1200px] lg:block">
        <div className="relative overflow-visible" style={{ minHeight: 640 }}>
          {/* Full woman — transparent PNG, background behind everything (node 33:453) */}
          <img
            src={imgPersonFull}
            alt=""
            aria-hidden="true"
            className="absolute"
            style={{ left: 0, top: 0, width: 480, height: 640, objectFit: "contain", objectPosition: "bottom left", zIndex: 0 }}
          />

          {/* Logo marks — above the full woman, behind the oval crop (node 33:442) */}
          <img
            src={imgLogoMarks}
            alt=""
            aria-hidden="true"
            className="absolute"
            style={{ left: 85, top: 0, width: 540, height: 534, zIndex: 10 }}
          />

          {/* Oval woman — circular crop, on top of logo marks (node 37:1674) */}
          <div
            className="absolute overflow-hidden rounded-full"
            style={{ left: 49, top: 43, width: 403, height: 403, zIndex: 20 }}
          >
            <img
              src={imgPerson}
              alt="Especialista Terpafy Grow"
              className="h-full w-full object-cover object-top"
            />
          </div>

          {/* User bubble 1 (node 37:1682) — top-right of composition */}
          <div className="absolute" style={{ left: 478, top: 65, width: 390, zIndex: 30 }}>
            <UserBubble time={userMsg1?.time ?? ""}>{userMsg1?.text}</UserBubble>
          </div>

          {/* Bot bubble (node 37:1679) */}
          <div className="absolute" style={{ left: 545, top: 180, width: 500, zIndex: 30 }}>
            <BotBubble time={botMsg1?.time ?? ""}>{botMsg1?.text}</BotBubble>
          </div>

          {/* User bubble 2 (node 37:1773) */}
          <div className="absolute" style={{ left: 478, top: 308, width: 143, zIndex: 30 }}>
            <UserBubble time={userMsg2?.time ?? ""}>{userMsg2?.text}</UserBubble>
          </div>

          {/* Last bot message — BotBubble (node 37:1766) */}
          <div className="absolute" style={{ left: 406, top: 424, width: 677, zIndex: 30 }}>
            <BotBubble time={botMsg2?.time ?? ""}>{botMsg2?.text}</BotBubble>
          </div>
        </div>
      </div>

      {/* ── Desktop composition 2 — right-side woman (node 2058:2766) ─── */}
      <div className="mx-auto hidden max-w-[1200px] lg:block">
        <div className="relative overflow-visible" style={{ minHeight: 520 }}>
          {/* Logo marks — right side, behind oval (node 33:442) */}
          <img
            src={imgLogoMarks}
            alt=""
            aria-hidden="true"
            className="absolute"
            style={{ left: 466, top: 0, width: 480, height: 480, zIndex: 10 }}
          />

          {/* Oval woman — right side, circular crop (node 2058:2766 mask group) */}
          <div
            className="absolute overflow-hidden rounded-full"
            style={{ left: 530, top: 42, width: 500, height: 500, zIndex: 20 }}
          >
            <img
              src={imgPerson2}
              alt="Especialista Terpafy Grow"
              className="h-full w-full object-cover object-top"
            />
          </div>

          {/* User bubble 1 (node 37:1864) */}
          <div className="absolute" style={{ left: 173, top: 41, width: 403, zIndex: 30 }}>
            <UserBubble time={userMsg1?.time ?? ""}>{userMsg1?.text}</UserBubble>
          </div>

          {/* Bot bubble 1 (node 37:1858) */}
          <div className="absolute" style={{ left: 0, top: 156, width: 517, zIndex: 30 }}>
            <BotBubble time={botMsg1?.time ?? ""}>{botMsg1?.text}</BotBubble>
          </div>

          {/* User bubble 2 — "Coco coir, pH 5.9." (node 37:1867) */}
          <div className="absolute" style={{ left: 357, top: 265, width: 143, zIndex: 30 }}>
            <UserBubble time={userMsg2?.time ?? ""}>{userMsg2?.text}</UserBubble>
          </div>

          {/* Bot bubble 2 (node 37:1861) */}
          <div className="absolute" style={{ left: 0, top: 384, width: 677, zIndex: 30 }}>
            <BotBubble time={botMsg2?.time ?? ""}>{botMsg2?.text}</BotBubble>
          </div>
        </div>
      </div>

      {/* ── Mobile layout — simple stacked chat (hidden on desktop) ─────── */}
      <div className="mx-auto flex max-w-[1200px] flex-col gap-4 px-4 sm:px-6 lg:hidden">
        {messages.map((msg, i) => {
          const isUser = msg.role === "user";
          const isLastMsg = i === messages.length - 1 && !isUser;

          if (isLastMsg) {
            return (
              <div key={i} className="flex justify-start">
                <BotBubble time={msg.time} className="max-w-[80%]">
                  {msg.text}
                </BotBubble>
              </div>
            );
          }

          return (
            <div key={i} className={cn("flex", isUser ? "justify-end" : "justify-start")}>
              {isUser ? (
                <UserBubble time={msg.time} className="max-w-[80%]">
                  {msg.text}
                </UserBubble>
              ) : (
                <BotBubble time={msg.time} className="max-w-[80%]">
                  {msg.text}
                </BotBubble>
              )}
            </div>
          );
        })}
      </div>

      {/* ── Capacities ───────────────────────────────────────────────── */}
      <div className="mx-auto mt-16 max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-16">
          {CAPACITY_KEYS.map((key) => {
            const bullets = t(`howItWorks.capacities.${key}.bullets`, {
              returnObjects: true,
            }) as string[];

            return (
              <div key={key} className="flex flex-col gap-6">
                {/* Badge */}
                <span className="inline-flex self-start items-center gap-[8px] overflow-clip rounded-[4px] border border-[#f2594b] bg-[rgba(242,89,75,0.1)] pl-[32px] pr-[24px] py-[16px] text-[12px] font-normal leading-none text-[#f2594b] whitespace-nowrap">
                  {t("howItWorks.capabilityLabel")} {t(`howItWorks.capacities.${key}.number`)} · {t(`howItWorks.capacities.${key}.label`)}
                  <CopySuccess variant="Bold" className="h-5 w-5 shrink-0" aria-hidden="true" />
                </span>

                {/* Title */}
                <h3 className="max-w-[897px] text-3xl font-bold leading-9 text-[#3a3a3a]">
                  {t(`howItWorks.capacities.${key}.title`)}
                </h3>

                {/* Body */}
                <p className="max-w-[897px] text-xs font-medium leading-5 text-[#71717a]">
                  {t(`howItWorks.capacities.${key}.body`)}
                </p>

                {/* Bullets */}
                <ul className="flex flex-col gap-3">
                  {bullets.map((bullet, i) => (
                    <li key={i} className="flex items-center gap-4">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#f2594b]" aria-hidden="true">
                        <ArrowRight className="h-4 w-4 text-white" />
                      </span>
                      <span className="text-xs font-medium leading-5 text-[#71717a]">{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <ChatButton variant="primary" className="self-start">
                  {t(`howItWorks.capacities.${key}.cta`)}
                </ChatButton>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


