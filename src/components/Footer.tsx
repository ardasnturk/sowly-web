import { SUPPORT_EMAIL } from "../config";
import { useLanguage } from "../i18n";
import { AppStoreButton } from "./AppStoreButton";
import { LanguageSelect } from "./LanguageSelect";

export function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();
  const link = "hover:text-brand-deep hover:underline dark:hover:text-brand-soft";
  return (
    <footer className="border-t border-ink/10 bg-white/50 dark:border-white/10 dark:bg-white/[0.02]">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-2">
          <a href="/" className="flex items-center gap-2.5">
            <img src="/assets/icon.png" alt="" width={36} height={36} className="h-9 w-9 rounded-[0.7rem]" />
            <span className="text-xl font-extrabold">Sowly</span>
          </a>
          <p className="muted mt-4 max-w-sm text-sm">{t.footer.tagline}</p>
          <div className="mt-6">
            <AppStoreButton />
          </div>
        </div>
        <nav aria-label={t.footer.product}>
          <h2 className="text-sm font-bold">{t.footer.product}</h2>
          <ul className="muted mt-4 space-y-2.5 text-sm">
            <li><a className={link} href="/#how">{t.nav.how}</a></li>
            <li><a className={link} href="/#features">{t.nav.features}</a></li>
            <li><a className={link} href="/#pro">{t.nav.pro}</a></li>
            <li><a className={link} href="/#faq">{t.nav.faq}</a></li>
          </ul>
        </nav>
        <nav aria-label={t.footer.legal}>
          <h2 className="text-sm font-bold">{t.footer.legal}</h2>
          <ul className="muted mt-4 space-y-2.5 text-sm">
            <li><a className={link} href="/privacy/">{t.footer.privacy}</a></li>
            <li><a className={link} href="/terms/">{t.footer.terms}</a></li>
            <li><a className={link} href="/support/">{t.footer.support}</a></li>
            <li><a className={`break-all ${link}`} href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a></li>
          </ul>
        </nav>
      </div>
      <div className="border-t border-ink/10 dark:border-white/10">
        <div className="muted mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-6 text-xs sm:flex-row sm:px-6">
          <p className="text-center sm:text-left">© {year} Arda Sentürk. {t.footer.rights} {t.footer.trademarks}</p>
          <LanguageSelect className="shrink-0 text-ink dark:text-white" />
        </div>
      </div>
    </footer>
  );
}
