export const LANGUAGES = ["en", "tr", "de", "es", "fr", "it", "ja", "ko", "nl", "pt", "ru", "zh"] as const;
export type Language = (typeof LANGUAGES)[number];

export const LANGUAGE_NAMES: Record<Language, string> = {
  en: "English",
  tr: "Türkçe",
  de: "Deutsch",
  es: "Español",
  fr: "Français",
  it: "Italiano",
  ja: "日本語",
  ko: "한국어",
  nl: "Nederlands",
  pt: "Português (Brasil)",
  ru: "Русский",
  zh: "简体中文",
};

/** Value for <html lang> and hreflang. */
export const HTML_LANG: Record<Language, string> = {
  en: "en",
  tr: "tr",
  de: "de",
  es: "es",
  fr: "fr",
  it: "it",
  ja: "ja",
  ko: "ko",
  nl: "nl",
  pt: "pt-BR",
  ru: "ru",
  zh: "zh-Hans",
};

export interface Item {
  title: string;
  text: string;
}

export interface LegalSection {
  title: string;
  paragraphs: string[];
}

/** Texts shared by every page: header, footer, legal and support pages. Lives in `src/i18n/<language>.ts`. */
export interface BaseDictionary {
  meta: { title: string; description: string };
  nav: {
    how: string;
    features: string;
    pro: string;
    privacy: string;
    faq: string;
    language: string;
    menu: string;
    skip: string;
  };
  appStore: {
    /** Small line above "App Store" once the app is released, e.g. "Download on the". */
    small: string;
    large: string;
    /** Header button once the app is released. */
    download: string;
    /** Small line above "App Store" before release, e.g. "Coming soon to the". */
    soonSmall: string;
    /** Short label for the header before release, e.g. "Coming soon". */
    soon: string;
  };
  footer: { tagline: string; product: string; legal: string; privacy: string; terms: string; support: string; rights: string; trademarks: string };
  legal: {
    updated: string;
    back: string;
    privacyTitle: string;
    privacyIntro: string;
    privacySections: LegalSection[];
    termsTitle: string;
    termsIntro: string;
    termsSections: LegalSection[];
  };
  support: {
    title: string;
    intro: string;
    emailLabel: string;
    emailHint: string;
    faqTitle: string;
    topics: Item[];
  };
}

export interface Feature {
  /** Short name of the screen, shown as a pill above the title. */
  label: string;
  title: string;
  text: string;
  points: string[];
  /** Alt text of the screenshot. */
  alt: string;
}

/** Texts of the landing page. Lives in `src/i18n/home/<language>.ts`. */
export interface HomeDictionary {
  hero: {
    eyebrow: string;
    /** Headline, split so the second part can be coloured. */
    title: string;
    highlight: string;
    subtitle: string;
    secondary: string;
    badges: string[];
    screenshotAlt: string;
    /** Floating cards around the phone. */
    chipSow: string;
    chipHarvest: string;
    chipFrost: string;
  };
  /** Four steps: climate, forecast, soil, your plan. */
  how: { eyebrow: string; title: string; subtitle: string; steps: [Item, Item, Item, Item] };
  /** Four screens: Today, crop page, draw your garden, journal. */
  features: { eyebrow: string; title: string; subtitle: string; items: [Feature, Feature, Feature, Feature] };
  pro: {
    eyebrow: string;
    title: string;
    subtitle: string;
    /** Year planner, smart alerts, garden assistant, garden memory, unlimited gardens and sowings. */
    items: [Item, Item, Item, Item, Item];
    plansTitle: string;
    /** Yearly (7-day free trial), 3 months, monthly, lifetime. No prices. */
    plans: [string, string, string, string];
    note: string;
    screenshotAlt: string;
  };
  privacy: {
    eyebrow: string;
    title: string;
    text: string;
    points: [Item, Item, Item, Item];
    staysTitle: string;
    stays: string[];
    leavesTitle: string;
    leaves: string[];
    link: string;
  };
  faq: { eyebrow: string; title: string; items: { q: string; a: string }[] };
  cta: { title: string; text: string };
}

export interface Dictionary extends BaseDictionary {
  home: HomeDictionary;
}
