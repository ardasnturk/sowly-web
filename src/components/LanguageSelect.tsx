import { HTML_LANG, LANGUAGES, LANGUAGE_NAMES, useLanguage, type Language } from "../i18n";
import { Icon } from "./Icon";

export function LanguageSelect({ className = "" }: { className?: string }) {
  const { language, setLanguage, t } = useLanguage();
  return (
    <label className={`relative inline-flex items-center ${className}`}>
      <span className="sr-only">{t.nav.language}</span>
      <Icon name="globe" className="pointer-events-none absolute left-3 h-4 w-4 opacity-70" />
      <select value={language} onChange={(event) => setLanguage(event.target.value as Language)}
        className="max-w-[9.5rem] appearance-none truncate rounded-full border border-ink/15 bg-white/60 py-2 pl-9 pr-8 text-sm font-semibold hover:border-ink/30 dark:border-white/15 dark:bg-white/5 dark:hover:border-white/30">
        {LANGUAGES.map((code) => (
          <option key={code} value={code} lang={HTML_LANG[code]} className="text-ink">{LANGUAGE_NAMES[code]}</option>
        ))}
      </select>
      <Icon name="chevron" className="pointer-events-none absolute right-2.5 h-4 w-4 opacity-70" />
    </label>
  );
}
