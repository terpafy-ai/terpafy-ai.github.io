import { cn } from "@/lib/utils";

interface LogoProps {
  /** "default" = primary red icon + dark text | "white" = all white */
  variant?: "default" | "white";
  className?: string;
}

/**
 * Terpafy Grow logotype — brand mark (asterisk) + wordmark.
 * SVG is inline so it inherits color via `currentColor`.
 */
export function Logo({ variant = "default", className }: LogoProps) {
  const iconColor =
    variant === "white" ? "text-white" : "text-primary";
  const wordColor =
    variant === "white" ? "text-white" : "text-foreground";
  const growColor =
    variant === "white" ? "text-white/80" : "text-accent-green";

  return (
    <div className={cn("flex items-center gap-2", className)}>
      {/* Brand mark — asterisk/snowflake approximation */}
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        aria-hidden="true"
        className={cn("shrink-0", iconColor)}
      >
        <line
          x1="14" y1="2" x2="14" y2="26"
          stroke="currentColor" strokeWidth="3" strokeLinecap="round"
        />
        <line
          x1="2" y1="14" x2="26" y2="14"
          stroke="currentColor" strokeWidth="3" strokeLinecap="round"
        />
        <line
          x1="5.37" y1="5.37" x2="22.63" y2="22.63"
          stroke="currentColor" strokeWidth="3" strokeLinecap="round"
        />
        <line
          x1="22.63" y1="5.37" x2="5.37" y2="22.63"
          stroke="currentColor" strokeWidth="3" strokeLinecap="round"
        />
        <circle cx="14" cy="2" r="1.5" fill="currentColor" />
        <circle cx="14" cy="26" r="1.5" fill="currentColor" />
        <circle cx="2" cy="14" r="1.5" fill="currentColor" />
        <circle cx="26" cy="14" r="1.5" fill="currentColor" />
      </svg>

      {/* Wordmark */}
      <span className={cn("font-heading text-xl font-bold leading-none", wordColor)}>
        Terpafy
        <span className={cn("ml-0.5 text-base font-normal", growColor)}>
          Grow
        </span>
      </span>
    </div>
  );
}
