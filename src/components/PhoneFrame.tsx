import type { ReactNode } from "react";
import { screenshot, type ScreenName } from "../config";
import { useLanguage } from "../i18n";

/** An iPhone-shaped frame around a screenshot. */
export function PhoneFrame({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`relative rounded-[3rem] bg-ink p-[0.55rem] shadow-2xl shadow-brand-deep/30 ring-1 ring-black/10 dark:bg-black dark:shadow-black/60 dark:ring-white/15 ${className}`}>
      <div className="relative aspect-[1206/2622] w-full overflow-hidden rounded-[2.5rem] bg-paper">
        {children}
        <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-[1.4%] h-[3.6%] w-[31%] -translate-x-1/2 rounded-full bg-black" />
      </div>
    </div>
  );
}

/** A screenshot from `public/screens`, in the visitor's language when it exists, otherwise English. */
export function Screen({ name, alt, eager = false }: { name: ScreenName; alt: string; eager?: boolean }) {
  const { language } = useLanguage();
  return (
    <img src={screenshot(language, name)} alt={alt} width={780} height={1696} loading={eager ? "eager" : "lazy"}
      decoding="async" className="block h-full w-full object-cover" />
  );
}
