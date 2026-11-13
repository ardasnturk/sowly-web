import { useEffect } from "react";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { LanguageProvider, useLanguage } from "./i18n";
import { Home } from "./pages/Home";
import { Legal } from "./pages/Legal";
import { Support } from "./pages/Support";

export type Page = "home" | "privacy" | "terms" | "support";

function Content({ page }: { page: Page }) {
  const { t } = useLanguage();

  useEffect(() => {
    const titles: Record<Page, string> = {
      home: t.meta.title,
      privacy: `${t.legal.privacyTitle} – Sowly`,
      terms: `${t.legal.termsTitle} – Sowly`,
      support: `${t.support.title} – Sowly`,
    };
    document.title = titles[page];
    const set = (selector: string, value: string) => document.querySelector(selector)?.setAttribute("content", value);
    set('meta[name="description"]', t.meta.description);
    set('meta[property="og:title"]', titles[page]);
    set('meta[property="og:description"]', t.meta.description);
  }, [page, t]);

  return (
    <div className="min-h-screen overflow-x-clip">
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-xl focus:bg-white focus:px-4 focus:py-2 focus:font-semibold focus:text-ink">
        {t.nav.skip}
      </a>
      <Header />
      <main id="main">
        {page === "home" && <Home />}
        {page === "privacy" && <Legal kind="privacy" />}
        {page === "terms" && <Legal kind="terms" />}
        {page === "support" && <Support />}
      </main>
      <Footer />
    </div>
  );
}

export default function App({ page }: { page: Page }) {
  return (
    <LanguageProvider>
      <Content page={page} />
    </LanguageProvider>
  );
}
