import { useState } from "react";
import { Send } from "vuesax-icons-react";

const CHAT_URL = import.meta.env.VITE_CHAT_URL ?? "";

/**
 * Figma reference: node 13:4600 — Chat TerpafyGrow mockup.
 * Matches the exact design from ChatPreview.tsx.
 * Send button is interactive: triggers VITE_CHAT_URL or shows "em breve".
 */

const BRAND_PATHS = [
  "M10.05 28.525H0C0.37 32.215 1.54 35.805 3.41 39.005L16.19 38.885L9.05 45.715C12.02 48.225 15.52 50.035 19.27 51.005C21.75 48.495 23.17 45.205 23.27 41.755V41.295C23.02 34.215 17.18 28.535 10.04 28.535L10.05 28.525Z",
  "M41.44 28.525C34.26 28.525 28.39 34.275 28.19 41.405L28.21 41.745C28.31 45.205 29.73 48.495 32.22 51.015C35.98 50.055 39.5 48.245 42.47 45.745L35.29 38.875L48.16 38.995C50.03 35.795 51.2 32.205 51.57 28.505H50.73H41.44V28.525Z",
  "M16.1 22.515C16.27 22.345 16.43 22.135 16.6 21.905C16.9 21.505 17.11 21.155 17.26 20.805C17.43 20.425 17.55 20.005 17.63 19.575C17.7 19.205 17.73 18.895 17.73 18.615C17.73 17.145 17.16 15.765 16.12 14.725L8.25 6.855C5.48 9.415 3.28 12.555 1.85 16.025L8.33 22.505C10.48 24.655 13.97 24.655 16.12 22.505L16.1 22.515Z",
  "M34.25 20.845C34.41 21.195 34.62 21.545 34.9 21.915C35.09 22.165 35.22 22.355 35.39 22.515C37.54 24.665 41.03 24.665 43.18 22.515L49.73 15.965C48.29 12.505 46.09 9.365 43.31 6.815L35.4 14.725C34.36 15.765 33.79 17.145 33.79 18.615C33.79 18.915 33.82 19.245 33.89 19.615C33.97 20.025 34.09 20.435 34.27 20.835L34.25 20.845Z",
  "M20.29 0.585V11.105C20.29 14.145 22.76 16.615 25.79 16.615C28.82 16.615 31.29 14.145 31.29 11.105V0.585C27.67 -0.195 23.89 -0.195 20.28 0.585H20.29Z",
];

interface MessageBubbleProps {
  text: string;
  time: string;
  isAgent?: boolean;
}

function MessageBubble({ text, time, isAgent = true }: MessageBubbleProps) {
  return (
    <div
      className={[
        "relative mx-5 overflow-hidden pb-6 backdrop-blur-md",
        "font-medium leading-[1.5] text-[13px] text-white/80",
        isAgent
          ? "mr-16 rounded-tl-[10px] rounded-tr-[10px] rounded-br-[10px] rounded-bl-[5px] border border-white/20 bg-white/5"
          : "ml-16 rounded-tl-[10px] rounded-tr-[10px] rounded-bl-[10px] rounded-br-[5px] border border-primary bg-primary/5",
      ].join(" ")}
    >
      <p className="px-3 pt-3">{text}</p>
      <span className="absolute bottom-2 right-3 text-[11px] text-white/30">{time}</span>
    </div>
  );
}

function TypingDots() {
  return (
    <div className="mx-5 mr-16 inline-flex w-fit items-center gap-[5px] overflow-hidden rounded-tl-[10px] rounded-tr-[10px] rounded-br-[10px] rounded-bl-[2px] border border-white/20 bg-white/5 px-3 py-[13px] backdrop-blur-md">
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className="size-1.5 animate-bounce rounded-full bg-white/40"
          style={{ animationDelay: `${i * 0.15}s` }}
        />
      ))}
    </div>
  );
}

export function ChatPreviewWidget() {
  const [showSoon, setShowSoon] = useState(false);

  function handleSend() {
    if (CHAT_URL) {
      window.open(CHAT_URL, "_blank", "noopener,noreferrer");
    } else {
      setShowSoon(true);
      setTimeout(() => setShowSoon(false), 2500);
    }
  }

  return (
    <div className="relative flex h-[580px] w-[355px] flex-col overflow-hidden rounded-2xl border border-white/15 bg-[#222] select-none">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0 opacity-10" aria-hidden="true">
        <div className="absolute left-1/4 top-1/2 size-56 -translate-y-1/2 rounded-full bg-primary blur-[100px]" />
      </div>

      {/* ── Header ── */}
      <div className="relative z-10 flex h-[68px] shrink-0 items-center gap-3 bg-[#1a1a1a] px-5">
        {/* Avatar: orange circle + brand mark */}
        <div className="relative size-[30px] shrink-0">
          <div className="absolute inset-0 rounded-full bg-primary" />
          <svg
            width="17"
            height="17"
            viewBox="0 0 51.57 51.015"
            fill="white"
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            aria-hidden="true"
          >
            {BRAND_PATHS.map((d, i) => (
              <path key={i} d={d} />
            ))}
          </svg>
        </div>

        {/* Title */}
        <div className="min-w-0 flex-1">
          <p className="text-[12px] font-medium leading-none text-white">Terpafy Grow</p>
          <p className="mt-1 text-[8px] leading-none text-[#4b4b4b]">Cannabis cultivation specialist</p>
        </div>

        {/* Online status */}
        <div className="flex shrink-0 items-center gap-1.5">
          <div className="size-[4px] rounded-full bg-secondary" />
          <span className="text-[9px] font-medium text-secondary">Online</span>
        </div>
      </div>

      {/* ── Messages ── */}
      <div className="relative z-10 flex flex-1 flex-col gap-4 overflow-hidden py-4">
        <MessageBubble
          isAgent
          text="Não sou um agente de IA, sou um especialista em cultivo de cannabis da Terpafy. Estou aqui para ajudar com dúvidas e fornecer orientações práticas. O que está acontecendo no seu cultivo?"
          time="11:11"
        />
        <MessageBubble
          isAgent={false}
          text="Minha planta tá com as pontas das folhas queimando. Uso coco coir."
          time="11:15"
        />
        <TypingDots />
      </div>

      {/* ── Input bar ── */}
      <div className="relative z-10 shrink-0 px-3 pb-3 pt-1">
        <div className="flex items-center gap-2 rounded-[10px] border border-white/20 bg-white/5 px-3 py-1.5 backdrop-blur-md">
          <span className="flex-1 text-[15px] font-medium text-white/30">
            Escreva sua dúvida…
          </span>
          <button
            type="button"
            onClick={handleSend}
            className="relative flex size-[44px] shrink-0 items-center justify-center rounded-[10px] border border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-[#222]"
            style={{
              background:
                "linear-gradient(91.96deg, rgba(242,89,75,0.7) 16.64%, rgba(242,89,75,0.8) 117.28%)",
            }}
            aria-label="Abrir chat"
          >
            <Send variant="Bold" className="size-5 text-white" aria-hidden="true" />
            {showSoon && (
              <span
                className="absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-white px-3 py-1.5 text-xs font-medium text-[#222]"
                role="status"
                aria-live="polite"
              >
                Em breve 🚀
              </span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
