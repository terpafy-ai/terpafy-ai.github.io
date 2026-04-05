import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Logo } from "@/components/common/Logo";

/**
 * Site footer — Figma: brand + tagline left, legal links right, bottom row.
 * Text sizes: text-xs font-medium leading-5 throughout (Figma spec).
 */
export function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* ── Decorative wing circles — two arcs creating V valley at footer top ── */}
      <div className="overflow-hidden bg-background" aria-hidden="true">
        <div className="relative h-16 sm:h-24">
          <div className="absolute left-[-8%] top-0 h-[280px] w-[55%] rounded-full bg-primary sm:h-[380px]" />
          <div className="absolute right-[-8%] top-0 h-[280px] w-[55%] rounded-full bg-primary sm:h-[380px]" />
        </div>
      </div>

      <div className="mx-auto max-w-[1200px] px-4 py-10 sm:px-6 lg:px-8">
        {/* ── Top section: brand (left) + legal links (right) ───────────── */}
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          {/* Brand + tagline */}
          <div>
            <Logo variant="white" className="mb-3" />
            <p className="max-w-[288px] text-xs font-medium leading-5 text-white/80">
              {t("footer.tagline")}
            </p>
          </div>

          {/* Legal links — horizontal inline row, text-center per Figma */}
          <nav
            aria-label="Links legais"
            className="flex flex-col gap-3 text-xs font-medium leading-5 sm:flex-row sm:items-center sm:gap-8"
          >
            <Link
              to="/terms"
              className="text-white/70 transition-colors hover:text-white"
            >
              {t("footer.legal.terms")}
            </Link>
            <Link
              to="/privacy"
              className="text-white/70 transition-colors hover:text-white"
            >
              {t("footer.legal.privacy")}
            </Link>
            <Link
              to="/compliance"
              className="text-white/70 transition-colors hover:text-white"
            >
              {t("footer.legal.compliance")}
            </Link>
          </nav>
        </div>

        {/* ── Divider ───────────────────────────────────────────────────── */}
        <div className="my-8 border-t border-white/20" />

        {/* ── Bottom row: copyright (left) + suite (right) ─────────────── */}
        <div className="flex flex-col gap-2 text-xs font-medium leading-5 text-white/70 sm:flex-row sm:items-center sm:justify-between">
          <p>{t("footer.copyright", { year: currentYear })}</p>
          <p className="sm:text-right">{t("footer.suite")}</p>
        </div>
      </div>
    </footer>
  );
}
