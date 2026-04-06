import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  /** Use a different HTML element (default: section) */
  as?: React.ElementType;
  /** Extra vertical padding variant */
  size?: "sm" | "md" | "lg";
}

/**
 * Reusable section wrapper — provides consistent max-width (1200px) and
 * responsive horizontal/vertical padding matching the design system.
 */
export function Section({
  as: As = "section",
  size = "md",
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <As
      className={cn(
        "mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8",
        size === "sm" && "py-8 sm:py-12",
        size === "md" && "py-12 sm:py-16 lg:py-20",
        size === "lg" && "py-16 sm:py-24 lg:py-32",
        className,
      )}
      {...props}
    >
      {children}
    </As>
  );
}
