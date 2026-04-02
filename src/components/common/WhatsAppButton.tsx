import { useTranslation } from "react-i18next";
import { MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const WHATSAPP_NUMBER =
  import.meta.env.VITE_WHATSAPP_NUMBER ?? "5511960011592";

interface WhatsAppButtonProps {
  /** "primary" = large full-width-ish CTA button | "inline" = ghost-like link */
  variant?: "primary" | "inline";
  /** Override the pre-filled WhatsApp message (uses cta.whatsappMessage by default) */
  messageKey?: string;
  className?: string;
  children?: React.ReactNode;
}

/**
 * Reusable WhatsApp CTA button.
 * Phone number comes from VITE_WHATSAPP_NUMBER env var.
 */
export function WhatsAppButton({
  variant = "primary",
  messageKey = "cta.whatsappMessage",
  className,
  children,
}: WhatsAppButtonProps) {
  const { t } = useTranslation();

  const message = encodeURIComponent((t as (key: string) => string)(messageKey));
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

  if (variant === "inline") {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "inline-flex items-center gap-2 text-primary underline-offset-4 hover:underline",
          className,
        )}
      >
        <MessageCircle className="h-4 w-4" aria-hidden="true" />
        {children ?? t("cta.button")}
      </a>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3",
        "text-base font-semibold text-primary-foreground",
        "transition-colors hover:bg-primary-dark focus-visible:outline-none",
        "focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
        className,
      )}
    >
      <MessageCircle className="h-5 w-5" aria-hidden="true" />
      {children ?? t("cta.button")}
    </a>
  );
}
