import { useState } from "react";
import { useTranslation } from "react-i18next";
import { MessageSquare } from "vuesax-icons-react";
import { cn } from "@/lib/utils";

const CHAT_URL = import.meta.env.VITE_CHAT_URL ?? "";

interface ChatButtonProps {
  variant?: "primary" | "inline";
  children?: React.ReactNode;
  className?: string;
}

/**
 * Reusable chat platform CTA button.
 * URL comes from VITE_CHAT_URL env var.
 * When unset, shows a visible "em breve" badge instead of navigating.
 */
export function ChatButton({
  variant = "primary",
  children,
  className,
}: ChatButtonProps) {
  const { t } = useTranslation();
  const [showSoon, setShowSoon] = useState(false);

  function handleClick(e: React.MouseEvent) {
    if (CHAT_URL) {
      window.open(CHAT_URL, "_blank", "noopener,noreferrer");
    } else {
      e.preventDefault();
      setShowSoon(true);
      setTimeout(() => setShowSoon(false), 2500);
    }
  }

  if (variant === "inline") {
    return (
      <button
        type="button"
        onClick={handleClick}
        className={cn(
          "relative inline-flex items-center gap-2 text-primary underline-offset-4 hover:underline",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-sm",
          className,
        )}
      >
        <MessageSquare variant="Bold" className="h-4 w-4" aria-hidden="true" />
        {children ?? t("cta.button")}
        {showSoon && (
          <span className="absolute -top-7 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-foreground px-2.5 py-1 text-xs font-medium text-background">
            Em breve
          </span>
        )}
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className={cn(
        "relative inline-flex items-center justify-center gap-2 rounded-[4px] bg-primary pl-8 pr-6 py-4",
        "text-base font-semibold text-primary-foreground",
        "transition-colors hover:bg-primary-dark focus-visible:outline-none",
        "focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
        className,
      )}
    >
      <MessageSquare variant="Bold" className="h-5 w-5" aria-hidden="true" />
      {children ?? t("cta.button")}
      {showSoon && (
        <span
          className="absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-foreground px-3 py-1.5 text-xs font-medium text-background"
          role="status"
          aria-live="polite"
        >
          Em breve 🚀
        </span>
      )}
    </button>
  );
}
