import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../i18n";
import { AppStorePill } from "./AppStoreButton";
import { Icon } from "./Icon";
import { LanguageSelect } from "./LanguageSelect";

export function Header() {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const progress = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      setScrolled(window.scrollY > 8);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      progress.current?.style.setProperty("--scroll", max > 0 ? String(Math.min(1, window.scrollY / max)) : "0");
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const links = [
    { href: "/#how", label: t.nav.how },
    { href: "/#features", label: t.nav.features },
    { href: "/#pro", label: t.nav.pro },
    { href: "/#privacy", label: t.nav.privacy },
    { href: "/#faq", label: t.nav.faq },
  ];
  const solid = scrolled || open;

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${solid ? "border-b border-ink/10 bg-paper/85 backdrop-blur-xl dark:border-white/10 dark:bg-night/80" : "border-b border-transparent"}`}>
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
        <a href="/" className="flex shrink-0 items-center gap-2.5" onClick={() => setOpen(false)}>
          <img src="/assets/icon.png" alt="" width={36} height={36} className="h-9 w-9 rounded-[0.7rem] shadow-sm" />
          <span className="text-xl font-extrabold tracking-tight">Sowly</span>
        </a>
        <nav aria-label={t.nav.menu} className="hidden items-center gap-6 text-sm font-semibold text-ink/75 lg:flex dark:text-white/75">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="transition hover:text-ink dark:hover:text-white">{link.label}</a>
          ))}
        </nav>
        <div className="flex items-center gap-2 sm:gap-3">
          <LanguageSelect />
          <AppStorePill className="hidden sm:inline-flex" />
          <button type="button" aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen((value) => !value)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 lg:hidden dark:border-white/15">
            <span className="sr-only">{t.nav.menu}</span>
            <Icon name={open ? "close" : "menu"} className="h-4 w-4" />
          </button>
        </div>
      </div>
      <div id="mobile-menu" hidden={!open} className="border-t border-ink/10 px-4 pb-5 pt-2 lg:hidden dark:border-white/10">
        <nav aria-label={t.nav.menu} className="flex flex-col">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}
              className="flex items-center justify-between border-b border-ink/8 py-3.5 text-base font-bold last:border-0 dark:border-white/8">
              {link.label}
              <Icon name="arrowRight" className="h-4 w-4 opacity-40" />
            </a>
          ))}
        </nav>
        <AppStorePill className="mt-3 flex w-full py-3 sm:hidden" />
      </div>
      <div aria-hidden="true" ref={progress} className="scroll-progress absolute inset-x-0 bottom-[-1px] h-0.5 bg-gradient-to-r from-brand via-sun to-orange" />
    </header>
  );
}
