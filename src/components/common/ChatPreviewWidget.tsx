import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Send } from "vuesax-icons-react";

const CHAT_URL = import.meta.env.VITE_CHAT_URL ?? "";

/**
 * Decorative chat widget displayed in the Hero right column.
 * Send button triggers ChatButton behavior — opens VITE_CHAT_URL or shows "em breve".
 * Figma reference: Phase 12 hero right column.
 */
export function ChatPreviewWidget() {
  const { t } = useTranslation();
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
    <div className="w-full overflow-hidden rounded-2xl border border-border bg-white shadow-lg select-none">
      {/* Header bar — dark background */}
      <div className="flex items-center gap-3 bg-foreground px-4 py-3">
        <div className="size-2 shrink-0 rounded-full bg-primary" aria-hidden="true" />
        <div className="min-w-0 flex-1">
          <p className="text-sm font-medium text-background">
            {t("hero.chatWidget.header")}
          </p>
          <p className="mt-0.5 text-xs text-background/60">
            {t("hero.chatWidget.subheader")}
          </p>
        </div>
      </div>

      {/* Message area */}
      <div className="min-h-[120px] bg-background p-4">
        <div className="max-w-[85%] rounded-lg bg-muted p-3">
          <p className="text-sm font-medium text-foreground">
            {t("hero.chatWidget.welcome")}
          </p>
          <p className="mt-1 text-xs text-foreground-muted">
            {t("hero.chatWidget.welcomeSub")}
          </p>
        </div>
      </div>

      {/* Input row */}
      <div className="relative border-t border-border bg-background px-4 py-3 flex items-center gap-2">
        <span className="flex-1 text-sm text-foreground-muted">
          {t("hero.chatWidget.placeholder")}
        </span>
        <button
          type="button"
          onClick={handleSend}
          className="flex shrink-0 items-center justify-center size-9 rounded-lg bg-primary text-primary-foreground transition-colors hover:bg-primary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          aria-label={t("hero.chatWidget.placeholder")}
        >
          <Send variant="Bold" className="size-4" aria-hidden="true" />
        </button>
        {showSoon && (
          <span
            className="absolute -top-9 right-4 whitespace-nowrap rounded-full bg-foreground px-3 py-1.5 text-xs font-medium text-background"
            role="status"
            aria-live="polite"
          >
            Em breve 🚀
          </span>
        )}
      </div>
    </div>
  );
}
