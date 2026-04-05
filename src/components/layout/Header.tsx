import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { HambergerMenu, CloseCircle } from "vuesax-icons-react";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/common/Logo";
import { LanguageSwitcher } from "@/components/common/LanguageSwitcher";
import { ChatButton } from "@/components/common/ChatButton";

const NAV_LINKS = [
  { labelKey: "nav.home", href: "/" },
  { labelKey: "nav.problem", href: "/#problem" },
  { labelKey: "nav.features", href: "/#features" },
  { labelKey: "nav.howItWorks", href: "/#how-it-works" },
  { labelKey: "nav.forWho", href: "/#for-who" },
] as const;

/**
 * Sticky site header with logo, nav links, language switcher, and
 * a full-screen mobile menu overlay.
 * Transitions from transparent → opaque on scroll (home page only).
 */
export function Header() {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const isHome = pathname === "/";

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 20);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Lock body scroll while mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  function handleNavClick(
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) {
    if (!href.startsWith("/#")) return;

    const targetId = href.slice(2);

    if (isHome) {
      e.preventDefault();
      const el = document.getElementById(targetId);
      el?.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
    // If not on home page, let the browser navigate normally (/#section)
  }

  const solidBg = scrolled || !isHome || menuOpen;

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          solidBg
            ? "border-b border-border bg-background/95 shadow-sm backdrop-blur-sm"
            : "bg-transparent",
        )}
      >
        <div className="mx-auto flex h-16 max-w-[1200px] items-center gap-4 px-4 sm:px-6 lg:px-8">
          {/* Logo — shrink-0 so it never compresses */}
          <Link
            to="/"
            aria-label="Terpafy Grow — página inicial"
            className="shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            <Logo />
          </Link>

          {/* Desktop nav — grows to fill available space, centred */}
          <nav aria-label="Navegação principal" className="hidden flex-1 items-center justify-center gap-4 md:flex lg:gap-8">
            {NAV_LINKS.map(({ labelKey, href }) => (
              <a
                key={href}
                href={href}
                onClick={(e) => handleNavClick(e, href)}
                className="whitespace-nowrap text-sm font-medium text-foreground-muted transition-colors hover:text-foreground"
              >
                {t(labelKey)}
              </a>
            ))}
          </nav>

          {/* Right: language switcher + mobile toggle — shrink-0 so it never compresses */}
          <div className="ml-auto flex shrink-0 items-center gap-3 md:ml-0">
            <LanguageSwitcher />
            <button
              type="button"
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMenuOpen((prev) => !prev)}
              className={cn(
                "flex items-center justify-center rounded-md p-2 md:hidden",
                "text-foreground-muted transition-colors hover:text-foreground",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
              )}
            >
              {menuOpen ? (
                <CloseCircle variant="Bold" className="h-5 w-5" aria-hidden="true" />
              ) : (
                <HambergerMenu variant="Bold" className="h-5 w-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/*
       * ── Mobile menu — rendered outside <header> so the fixed panel can
       * span full-screen without inheriting the header's paint layer.
       */}

      {/* Backdrop */}
      <div
        aria-hidden="true"
        className={cn(
          "fixed inset-0 z-40 bg-foreground/30 backdrop-blur-sm md:hidden",
          "transition-opacity duration-300",
          menuOpen ? "opacity-100" : "pointer-events-none opacity-0",
        )}
        onClick={() => setMenuOpen(false)}
      />

      {/* Slide-down panel */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-label="Menu de navegação"
        aria-modal="true"
        aria-hidden={!menuOpen}
        className={cn(
          "fixed inset-x-0 top-16 z-50 bg-background shadow-2xl md:hidden",
          "transition-all duration-300 ease-in-out",
          menuOpen
            ? "translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0",
        )}
      >
        {/* Nav links */}
        <nav className="flex flex-col px-4 pt-4 pb-2">
          {NAV_LINKS.map(({ labelKey, href }) => (
            <a
              key={href}
              href={href}
              onClick={(e) => handleNavClick(e, href)}
              className={cn(
                "rounded-xl px-4 py-4 text-base font-medium",
                "text-foreground transition-colors hover:bg-muted",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset",
              )}
            >
              {t(labelKey)}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="border-t border-border px-4 py-4">
          <ChatButton variant="primary" className="w-full justify-center">
            {t("nav.cta")}
          </ChatButton>
        </div>
      </div>
    </>
  );
}
