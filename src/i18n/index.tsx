import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { HTML_LANG, LANGUAGES, type Dictionary, type Language } from "./types";
import { en } from "./en";
import { tr } from "./tr";
import { de } from "./de";
import { es } from "./es";
import { fr } from "./fr";
import { it } from "./it";
import { ja } from "./ja";
import { ko } from "./ko";
import { nl } from "./nl";
import { pt } from "./pt";
import { ru } from "./ru";
import { zh } from "./zh";
import { en as homeEn } from "./home/en";
import { tr as homeTr } from "./home/tr";
import { de as homeDe } from "./home/de";
import { es as homeEs } from "./home/es";
import { fr as homeFr } from "./home/fr";
import { it as homeIt } from "./home/it";
import { ja as homeJa } from "./home/ja";
import { ko as homeKo } from "./home/ko";
import { nl as homeNl } from "./home/nl";
import { pt as homePt } from "./home/pt";
import { ru as homeRu } from "./home/ru";
import { zh as homeZh } from "./home/zh";

export * from "./types";

const DICTIONARIES: Record<Language, Dictionary> = {
  en: { ...en, home: homeEn },
  tr: { ...tr, home: homeTr },
  de: { ...de, home: homeDe },
  es: { ...es, home: homeEs },
  fr: { ...fr, home: homeFr },
  it: { ...it, home: homeIt },
  ja: { ...ja, home: homeJa },
  ko: { ...ko, home: homeKo },
  nl: { ...nl, home: homeNl },
  pt: { ...pt, home: homePt },
  ru: { ...ru, home: homeRu },
  zh: { ...zh, home: homeZh },
};
const STORAGE_KEY = "sowly-language";

function isLanguage(value: string | null | undefined): value is Language {
  return !!value && (LANGUAGES as readonly string[]).includes(value);
}

/** ?lang=de, then the saved choice, then the browser languages, then English. */
function detect(): Language {
  const query = new URLSearchParams(window.location.search).get("lang")?.toLowerCase().split("-")[0];
  if (isLanguage(query)) return query;
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (isLanguage(saved)) return saved;
  } catch {
    // Storage can be unavailable (private mode); fall through.
  }
  for (const preferred of navigator.languages ?? [navigator.language]) {
    const base = preferred.toLowerCase().split("-")[0];
    if (isLanguage(base)) return base;
  }
  return "en";
}

interface LanguageContextValue {
  language: Language;
  t: Dictionary;
  setLanguage: (language: Language) => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(detect);
  const t = DICTIONARIES[language];

  useEffect(() => {
    document.documentElement.lang = HTML_LANG[language];
  }, [language]);

  const setLanguage = (next: Language) => {
    setLanguageState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Ignore: the choice just won't be remembered.
    }
    // A ?lang= in the address would win again on reload; drop it once the visitor chooses.
    const url = new URL(window.location.href);
    if (url.searchParams.has("lang")) {
      url.searchParams.delete("lang");
      window.history.replaceState(null, "", url);
    }
  };

  return <LanguageContext.Provider value={{ language, t, setLanguage }}>{children}</LanguageContext.Provider>;
}

export function useLanguage(): LanguageContextValue {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used inside LanguageProvider");
  return context;
}
