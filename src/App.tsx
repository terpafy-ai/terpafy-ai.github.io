import { lazy, Suspense, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Home } from "@/pages/Home";

const PrivacyPolicy = lazy(() =>
  import("@/pages/PrivacyPolicy").then((m) => ({ default: m.PrivacyPolicy })),
);
const TermsOfService = lazy(() =>
  import("@/pages/TermsOfService").then((m) => ({ default: m.TermsOfService })),
);

const LANG_MAP: Record<string, string> = {
  pt: "pt-BR",
  en: "en",
  es: "es",
};

function LanguageSyncEffect() {
  const { i18n } = useTranslation();

  useEffect(() => {
    const code = i18n.language?.slice(0, 2) ?? "pt";
    document.documentElement.lang = LANG_MAP[code] ?? code;
  }, [i18n.language]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <LanguageSyncEffect />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-primary-foreground focus:outline-none"
      >
        Pular para o conteúdo principal
      </a>
      <div className="flex min-h-screen flex-col bg-background text-foreground">
        <Header />
        <div
          id="main-content"
          className="flex-1"
          tabIndex={-1}
        >
          <Suspense
            fallback={
              <div className="flex min-h-[50vh] items-center justify-center">
                <div className="h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent" />
              </div>
            }
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<TermsOfService />} />
            </Routes>
          </Suspense>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
