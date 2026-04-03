import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Logo } from "@/components/common/Logo";
import { WhatsAppButton } from "@/components/common/WhatsAppButton";

const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER ?? "";

/**
 * Site footer — matches Figma: coral/red background, logo, tagline,
 * legal links, product suite, copyright, and medical disclaimer.
 */
export function Footer() {
  const { t } = useTranslation();

  const currentYear = new Date().getFullYear();
  const contactMessage = encodeURIComponent(t("footer.legal.contactMessage"));
  const contactHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${contactMessage}`;

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-[1200px] px-4 py-12 sm:px-6 lg:px-8">
        {/* Main grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Logo variant="white" className="mb-4" />
            <p className="max-w-sm text-sm leading-relaxed text-primary-foreground/80">
              {t("footer.tagline")}
            </p>
            <div className="mt-6">
              <WhatsAppButton
                variant="primary"
                messageKey="footer.legal.contactMessage"
                className="border border-primary-foreground/30 bg-primary-dark hover:bg-primary-dark/80"
              >
                {t("footer.legal.contact")}
              </WhatsAppButton>
            </div>
          </div>

          {/* Legal links */}
          <nav aria-label="Links legais" className="flex flex-col gap-2">
            <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary-foreground/60">
              {t("footer.legal.title")}
            </h3>
            <Link
              to="/privacy"
              className="text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground"
            >
              {t("footer.legal.privacy")}
            </Link>
            <Link
              to="/terms"
              className="text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground"
            >
              {t("footer.legal.terms")}
            </Link>
            <a
              href={contactHref}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground"
            >
              {t("footer.legal.contact")}
            </a>
          </nav>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-primary-foreground/20" />

        {/* Bottom row */}
        <div className="flex flex-col gap-3 text-xs text-primary-foreground/60 sm:flex-row sm:items-center sm:justify-between">
          <p>{t("footer.copyright", { year: currentYear })}</p>
          <p className="text-center sm:text-right">{t("footer.suite")}</p>
        </div>

        {/* Disclaimer */}
        <p className="mt-4 text-center text-xs text-primary-foreground/50">
          {t("footer.disclaimer")}
        </p>
      </div>
    </footer>
  );
}
