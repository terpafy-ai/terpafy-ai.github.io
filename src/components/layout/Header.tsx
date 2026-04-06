import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/common/Logo";
import { LanguageSwitcher } from "@/components/common/LanguageSwitcher";

const NAV_LINKS = [
  { labelKey: "nav.features", href: "/#features" },
  { labelKey: "nav.howItWorks", href: "/#how-it-works" },
  { labelKey: "nav.benefits", href: "/#benefits" },
] as const;

/**
 * Sticky site header with logo, nav links, language switcher, and mobile menu.
 * Transitions from transparent → white on scroll (only on the home page).
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
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        solidBg
          ? "border-b border-border bg-background/95 shadow-sm backdrop-blur-sm"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          to="/"
          aria-label="Terpafy Grow — página inicial"
          className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        >
          <Logo />
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Navegação principal" className="hidden md:flex md:items-center md:gap-6">
          {NAV_LINKS.map(({ labelKey, href }) => (
            <a
              key={href}
              href={href}
              onClick={(e) => handleNavClick(e, href)}
              className="text-sm font-medium text-foreground-muted transition-colors hover:text-foreground"
            >
              {t(labelKey)}
            </a>
          ))}
        </nav>

        {/* Right: language switcher + mobile toggle */}
        <div className="flex items-center gap-3">
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
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          id="mobile-menu"
          role="navigation"
          aria-label="Menu mobile"
          className="border-t border-border bg-background/95 backdrop-blur-sm md:hidden"
        >
          <nav className="flex flex-col gap-1 px-4 py-4">
            {NAV_LINKS.map(({ labelKey, href }) => (
              <a
                key={href}
                href={href}
                onClick={(e) => handleNavClick(e, href)}
                className={cn(
                  "rounded-md px-3 py-2.5 text-sm font-medium",
                  "text-foreground transition-colors hover:bg-muted hover:text-foreground",
                )}
              >
                {t(labelKey)}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
