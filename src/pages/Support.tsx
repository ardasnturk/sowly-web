import { Icon } from "../components/Icon";
import { SUPPORT_EMAIL } from "../config";
import { useLanguage } from "../i18n";

export function Support() {
  const { t } = useLanguage();
  return (
    <div className="mx-auto max-w-3xl px-4 pt-28 pb-24 sm:px-6">
      <a href="/" className="muted inline-flex items-center gap-2 text-sm font-semibold hover:underline">
        <Icon name="arrowLeft" className="h-4 w-4" />
        {t.legal.back}
      </a>
      <h1 className="mt-6 text-4xl font-extrabold tracking-tight">{t.support.title}</h1>
      <p className="mt-4 text-lg text-ink/85 dark:text-white/85">{t.support.intro}</p>
      <div className="mt-10 rounded-card bg-gradient-to-br from-brand-deep to-[#17603e] p-7 text-white shadow-soft sm:p-8">
        <p className="text-sm font-bold uppercase tracking-wider text-lime">{t.support.emailLabel}</p>
        <a href={`mailto:${SUPPORT_EMAIL}`} className="mt-2 inline-flex items-center gap-3 text-xl font-extrabold break-all hover:underline focus-visible:outline-white sm:text-2xl">
          <Icon name="mail" className="h-7 w-7 shrink-0" />
          {SUPPORT_EMAIL}
        </a>
        <p className="mt-4 text-sm text-white/90">{t.support.emailHint}</p>
      </div>
      <h2 className="mt-14 text-2xl font-extrabold tracking-tight">{t.support.faqTitle}</h2>
      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        {t.support.topics.map((topic) => (
          <section key={topic.title} className="card p-6">
            <h3 className="font-bold">{topic.title}</h3>
            <p className="muted mt-2 text-sm leading-relaxed">{topic.text}</p>
          </section>
        ))}
      </div>
      <p className="muted mt-10 text-sm">
        <a className="accent font-semibold hover:underline" href="/privacy/">{t.footer.privacy}</a>
        {" · "}
        <a className="accent font-semibold hover:underline" href="/terms/">{t.footer.terms}</a>
      </p>
    </div>
  );
}
