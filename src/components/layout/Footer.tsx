import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Logo } from "@/components/common/Logo";

/**
 * Site footer — logo + tagline left, legal links right, bottom row.
 * WhatsApp contact link removed in Phase 15.
 */
export function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-[1200px] px-4 py-10 sm:px-6 lg:px-8">
        {/* ── Top section: brand (left) + legal links (right) ───────────── */}
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          {/* Brand */}
          <div>
            <Logo variant="white" className="mb-3" />
            <p className="max-w-[280px] text-sm leading-relaxed text-primary-foreground/80">
              {t("footer.tagline")}
            </p>
          </div>

          {/* Legal links — horizontal inline row matching Figma */}
          <nav
            aria-label="Links legais"
            className="flex flex-col gap-3 text-sm sm:flex-row sm:items-center sm:gap-8"
          >
            <Link
              to="/terms"
              className="text-primary-foreground/80 transition-colors hover:text-primary-foreground"
            >
              {t("footer.legal.terms")}
            </Link>
            <Link
              to="/privacy"
              className="text-primary-foreground/80 transition-colors hover:text-primary-foreground"
            >
              {t("footer.legal.privacy")}
            </Link>
            <Link
              to="/privacy"
              className="text-primary-foreground/80 transition-colors hover:text-primary-foreground"
            >
              {t("footer.legal.compliance")}
            </Link>
          </nav>
        </div>

        {/* ── Divider ───────────────────────────────────────────────────── */}
        <div className="my-8 border-t border-primary-foreground/20" />

        {/* ── Bottom row: copyright (left) + suite (right) ─────────────── */}
        <div className="flex flex-col gap-2 text-xs text-primary-foreground/60 sm:flex-row sm:items-center sm:justify-between">
          <p>{t("footer.copyright", { year: currentYear })}</p>
          <p className="text-center sm:text-right">{t("footer.suite")}</p>
        </div>

        {/* ── Disclaimer ────────────────────────────────────────────────── */}
        <p className="mt-4 text-center text-xs text-primary-foreground/50">
          {t("footer.disclaimer")}
        </p>
      </div>
    </footer>
  );
}
