import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { ArrowDown, Global } from "vuesax-icons-react";
import { cn } from "@/lib/utils";

const LANGUAGES = [
  { code: "pt", label: "PT" },
  { code: "en", label: "EN" },
  { code: "es", label: "ES" },
] as const;

type LangCode = (typeof LANGUAGES)[number]["code"];

interface LanguageSwitcherProps {
  className?: string;
}

/**
 * Accessible language switcher dropdown.
 * Calls i18next.changeLanguage() on selection; persists to localStorage via
 * the i18n LanguageDetector config (key: terpafy_lang).
 */
export function LanguageSwitcher({ className }: LanguageSwitcherProps) {
  const { i18n, t } = useTranslation();
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const currentLang = (i18n.language?.slice(0, 2) ?? "pt") as LangCode;
  const currentLabel =
    LANGUAGES.find((l) => l.code === currentLang)?.label ?? "PT";

  function selectLang(code: LangCode) {
    void i18n.changeLanguage(code);
    setOpen(false);
  }

  // Close on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close on Escape
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div ref={containerRef} className={cn("relative", className)}>
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={t("lang.pt")}
        onClick={() => setOpen((prev) => !prev)}
        className={cn(
          "flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-sm font-medium",
          "text-foreground-muted transition-colors hover:text-foreground",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
        )}
      >
        <Global variant="Bold" className="h-4 w-4" aria-hidden="true" />
        {currentLabel}
        <ArrowDown
          variant="Bold"
          className={cn(
            "h-3.5 w-3.5 transition-transform",
            open && "rotate-180",
          )}
          aria-hidden="true"
        />
      </button>

      {open && (
        <ul
          role="listbox"
          aria-label="Language"
          className={cn(
            "absolute right-0 top-full z-50 mt-1 min-w-[7rem] overflow-hidden",
            "rounded-md border border-border bg-background shadow-md",
          )}
        >
          {LANGUAGES.map(({ code, label }) => (
            <li key={code} role="option" aria-selected={code === currentLang}>
              <button
                type="button"
                onClick={() => selectLang(code)}
                className={cn(
                  "flex w-full items-center gap-2 px-3 py-2 text-sm",
                  "transition-colors hover:bg-muted",
                  code === currentLang
                    ? "font-semibold text-primary"
                    : "text-foreground",
                )}
              >
                {label}
                <span className="text-foreground-muted text-xs">
                  {t(`lang.${code}` as `lang.${LangCode}`)}
                </span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
