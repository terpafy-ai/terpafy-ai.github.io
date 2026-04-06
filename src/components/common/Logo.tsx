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
    variant === "white" ? "text-white/80" : "text-primary";

  return (
    <div className={cn("flex items-center gap-2", className)}>
      {/* Brand mark — exact Figma paths extracted from design system */}
      <svg
        width="32"
        height="32"
        viewBox="0 0 51.57 51.015"
        fill="currentColor"
        aria-hidden="true"
        className={cn("shrink-0", iconColor)}
      >
        <path d="M10.05 28.525H0C0.37 32.215 1.54 35.805 3.41 39.005L16.19 38.885L9.05 45.715C12.02 48.225 15.52 50.035 19.27 51.005C21.75 48.495 23.17 45.205 23.27 41.755V41.295C23.02 34.215 17.18 28.535 10.04 28.535L10.05 28.525Z" />
        <path d="M41.44 28.525C34.26 28.525 28.39 34.275 28.19 41.405L28.21 41.745C28.31 45.205 29.73 48.495 32.22 51.015C35.98 50.055 39.5 48.245 42.47 45.745L35.29 38.875L48.16 38.995C50.03 35.795 51.2 32.205 51.57 28.505H50.73H41.44V28.525Z" />
        <path d="M16.1 22.515C16.27 22.345 16.43 22.135 16.6 21.905C16.9 21.505 17.11 21.155 17.26 20.805C17.43 20.425 17.55 20.005 17.63 19.575C17.7 19.205 17.73 18.895 17.73 18.615C17.73 17.145 17.16 15.765 16.12 14.725L8.25 6.855C5.48 9.415 3.28 12.555 1.85 16.025L8.33 22.505C10.48 24.655 13.97 24.655 16.12 22.505L16.1 22.515Z" />
        <path d="M34.25 20.845C34.41 21.195 34.62 21.545 34.9 21.915C35.09 22.165 35.22 22.355 35.39 22.515C37.54 24.665 41.03 24.665 43.18 22.515L49.73 15.965C48.29 12.505 46.09 9.365 43.31 6.815L35.4 14.725C34.36 15.765 33.79 17.145 33.79 18.615C33.79 18.915 33.82 19.245 33.89 19.615C33.97 20.025 34.09 20.435 34.27 20.835L34.25 20.845Z" />
        <path d="M20.29 0.585V11.105C20.29 14.145 22.76 16.615 25.79 16.615C28.82 16.615 31.29 14.145 31.29 11.105V0.585C27.67 -0.195 23.89 -0.195 20.28 0.585H20.29Z" />
      </svg>

      {/* Wordmark */}
      <span className={cn("font-heading text-[1.25rem] font-bold leading-none tracking-tight", wordColor)}>
        Terpafy
        <span className={cn("ml-1 text-[0.7rem] font-normal tracking-normal", growColor)}>
          Grow
        </span>
      </span>
    </div>
  );
}
