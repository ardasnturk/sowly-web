import { AppStoreButton } from "../../components/AppStoreButton";
import { Icon, type IconName } from "../../components/Icon";
import { PhoneFrame, Screen } from "../../components/PhoneFrame";
import { Produce } from "../../components/Produce";
import { Reveal } from "../../components/Reveal";
import { useLanguage } from "../../i18n";
import { useParallax } from "../../lib/motion";
import { SectionHeading } from "./shared";

const PRO_ICONS: IconName[] = ["calendar", "bell", "sparkles", "history", "infinity"];

export function Pro() {
  const { t } = useLanguage();
  const p = t.home.pro;
  const scene = useParallax<HTMLDivElement>();
  return (
    <section id="pro" className="scroll-mt-20 px-4 py-12 sm:px-6 sm:py-16">
      <div className="relative mx-auto max-w-6xl overflow-clip rounded-[2rem] bg-gradient-to-br from-brand-deep to-[#145c3a] px-5 py-16 text-white shadow-soft sm:rounded-[2.5rem] sm:px-10 lg:px-14 lg:py-20">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute -top-32 -right-24 h-96 w-96 rounded-full bg-white/8" />
          <div className="absolute -bottom-40 -left-24 h-[28rem] w-[28rem] rounded-full border border-white/15" />
        </div>
        <div className="relative grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <SectionHeading eyebrow={p.eyebrow} title={p.title} text={p.subtitle} align="left" onDark />
            <ul className="mt-10 grid gap-4 sm:grid-cols-2">
              {p.items.map((item, index) => (
                <Reveal as="li" key={item.title} delay={index * 80} className={index === 4 ? "sm:col-span-2" : ""}>
                  <div className="h-full rounded-3xl bg-white/10 p-5 ring-1 ring-white/15">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-lime">
                      <Icon name={PRO_ICONS[index]} />
                    </span>
                    <h3 className="mt-4 text-lg font-extrabold">{item.title}</h3>
                    <p className="mt-1.5 text-[0.95rem] leading-relaxed text-white/85">{item.text}</p>
                  </div>
                </Reveal>
              ))}
            </ul>
            <Reveal className="mt-10">
              <h3 className="text-sm font-bold uppercase tracking-[0.14em] text-lime">{p.plansTitle}</h3>
              <ul className="mt-4 flex flex-wrap gap-2.5">
                {p.plans.map((plan, index) => (
                  <li key={plan} className={`rounded-full px-4 py-2 text-sm font-bold ${index === 0 ? "bg-sun text-ink" : "bg-white/12 ring-1 ring-white/20"}`}>{plan}</li>
                ))}
              </ul>
              <p className="mt-4 max-w-xl text-sm text-white/80">{p.note}</p>
            </Reveal>
          </div>
          <div ref={scene} className="relative mx-auto w-full max-w-[15.5rem] sm:max-w-[17rem]">
            <div className="parallax-slow">
              <Reveal variant="scale">
                <PhoneFrame className="shadow-black/40">
                  <Screen name="planner" alt={p.screenshotAlt} />
                </PhoneFrame>
              </Reveal>
            </div>
            <div className="parallax-fast absolute inset-0">
              <Produce name="pumpkin" className="absolute -left-12 top-[18%] h-20 w-20 sm:-left-20 sm:h-24 sm:w-24" duration={11} />
              <Produce name="lemon" className="absolute -right-10 bottom-[16%] h-16 w-16 sm:-right-16 sm:h-20 sm:w-20" duration={9} delay={-4} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const PRIVACY_ICONS: IconName[] = ["user", "eyeOff", "phone", "sparkles"];

export function Privacy() {
  const { t } = useLanguage();
  const p = t.home.privacy;
  return (
    <section id="privacy" className="scroll-mt-20 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow={p.eyebrow} title={p.title} text={p.text} />
        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {p.points.map((item, index) => (
            <Reveal as="li" key={item.title} delay={index * 90}>
              <div className="card h-full p-6">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-lime text-brand-deep">
                  <Icon name={PRIVACY_ICONS[index]} />
                </span>
                <h3 className="mt-4 text-lg font-extrabold">{item.title}</h3>
                <p className="muted mt-1.5 text-[0.95rem] leading-relaxed">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </ul>
        <div className="mt-5 grid gap-5 lg:grid-cols-2">
          <Reveal variant="left">
            <div className="card h-full p-6 sm:p-8">
              <h3 className="flex items-center gap-3 text-lg font-extrabold">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-deep text-white"><Icon name="lock" className="h-5 w-5" /></span>
                {p.staysTitle}
              </h3>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {p.stays.map((line) => (
                  <li key={line} className="flex items-start gap-2.5 font-semibold text-ink/85 dark:text-white/85">
                    <Icon name="check" className="accent mt-0.5 h-5 w-5 shrink-0" />
                    {line}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal variant="right" delay={100}>
            <div className="card h-full p-6 sm:p-8">
              <h3 className="flex items-center gap-3 text-lg font-extrabold">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sun text-ink"><Icon name="send" className="h-5 w-5" /></span>
                {p.leavesTitle}
              </h3>
              <ul className="mt-5 space-y-3">
                {p.leaves.map((line) => (
                  <li key={line} className="flex items-start gap-2.5 text-ink/85 dark:text-white/85">
                    <Icon name="arrowRight" className="mt-0.5 h-5 w-5 shrink-0 text-[#b65a10] dark:text-orange" />
                    {line}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
        <Reveal className="mt-8 text-center">
          <a href="/privacy/" className="accent group inline-flex items-center gap-2 font-bold hover:underline">
            {p.link}
            <Icon name="arrowRight" className="h-4 w-4 transition group-hover:translate-x-1" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

export function Faq() {
  const { t } = useLanguage();
  const f = t.home.faq;
  return (
    <section id="faq" className="scroll-mt-20 py-24 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionHeading eyebrow={f.eyebrow} title={f.title} />
        <div className="mt-12 space-y-3">
          {f.items.map((item, index) => (
            <Reveal key={item.q} delay={index * 60}>
              <details className="card group px-6 py-1">
                <summary className="flex cursor-pointer items-center justify-between gap-4 py-4 text-left text-lg font-bold">
                  {item.q}
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-lime text-ink">
                    <Icon name="chevron" className="faq-chevron h-4 w-4 transition-[rotate] duration-300" />
                  </span>
                </summary>
                <p className="muted pb-5 leading-relaxed">{item.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CallToAction() {
  const { t } = useLanguage();
  const c = t.home.cta;
  return (
    <section id="get" className="scroll-mt-20 px-4 pb-24 sm:px-6 sm:pb-28">
      <Reveal variant="scale">
        <div className="relative mx-auto max-w-6xl overflow-clip rounded-[2rem] bg-lime px-6 py-20 text-center text-ink sm:rounded-[2.5rem] sm:py-24">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/35" />
            <div className="animate-spin-slow absolute left-1/2 top-1/2 h-[46rem] w-[46rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-brand-deep/30" />
          </div>
          <Produce name="tomato" className="absolute -left-6 top-8 h-24 w-24 sm:left-12 sm:h-32 sm:w-32" duration={10} />
          <Produce name="basil" className="absolute -right-6 top-10 h-20 w-20 sm:right-16 sm:h-28 sm:w-28" duration={12} delay={-3} />
          <Produce name="carrot" className="absolute bottom-6 left-[12%] hidden h-24 w-24 md:block" duration={11} delay={-5} />
          <Produce name="strawberry" className="absolute bottom-8 right-[12%] hidden h-24 w-24 md:block" duration={9} delay={-2} />
          <div className="relative">
            <img src="/assets/icon.png" alt="" width={80} height={80} className="mx-auto h-20 w-20 rounded-[1.4rem] shadow-soft" />
            <h2 className="mx-auto mt-8 max-w-2xl text-4xl font-black tracking-tight text-balance sm:text-5xl">{c.title}</h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-pretty text-ink/80">{c.text}</p>
            <div className="mt-9 flex justify-center">
              <AppStoreButton inverted />
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
