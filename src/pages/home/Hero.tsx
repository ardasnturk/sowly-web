import { AppStoreButton } from "../../components/AppStoreButton";
import { Icon, type IconName } from "../../components/Icon";
import { PhoneFrame, Screen } from "../../components/PhoneFrame";
import { Produce } from "../../components/Produce";
import { useLanguage } from "../../i18n";
import { useParallax } from "../../lib/motion";

function Chip({ icon, tone, children }: { icon: IconName; tone: string; children: string }) {
  return (
    <div className="flex items-center gap-2 rounded-full bg-white/95 py-2 pl-2 pr-4 text-sm font-bold whitespace-nowrap text-ink shadow-soft ring-1 ring-ink/5 dark:bg-night-card/95 dark:text-white dark:ring-white/10">
      <span className={`flex h-7 w-7 items-center justify-center rounded-full ${tone}`}>
        <Icon name={icon} className="h-4 w-4" />
      </span>
      {children}
    </div>
  );
}

export function Hero() {
  const { t } = useLanguage();
  const h = t.home.hero;
  const scene = useParallax<HTMLDivElement>();

  return (
    <section className="relative overflow-clip pt-28 pb-20 sm:pt-36 lg:pb-28">
      {/* Pale-green circles behind everything. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-48 -right-40 h-[38rem] w-[38rem] rounded-full bg-lime/55 dark:bg-brand/12" />
        <div className="absolute top-[26rem] -left-56 h-[30rem] w-[30rem] rounded-full bg-mint/90 dark:bg-brand/8" />
        <div className="animate-float absolute top-28 left-[8%] h-5 w-5 rounded-full bg-sun/80" />
        <div className="animate-float absolute bottom-24 left-[42%] h-3 w-3 rounded-full bg-orange/80 [animation-delay:-3s]" />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-16 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
        <div className="text-center lg:text-left">
          <p className="hero-in accent inline-flex items-center gap-2 rounded-full bg-white/80 px-3.5 py-1.5 text-sm font-bold shadow-sm ring-1 ring-brand/15 dark:bg-white/5 dark:ring-white/10">
            <Icon name="sprout" className="h-4 w-4" />
            {h.eyebrow}
          </p>
          <h1 className="hero-in mt-6 text-[2.6rem] leading-[1.05] font-black tracking-tight text-balance sm:text-6xl lg:text-[4.2rem]" style={{ animationDelay: "80ms" }}>
            {h.title}{" "}
            <span className="relative whitespace-normal text-brand-deep dark:text-brand-soft">
              {h.highlight}
            </span>
          </h1>
          <p className="hero-in muted mx-auto mt-6 max-w-xl text-lg text-pretty lg:mx-0" style={{ animationDelay: "160ms" }}>{h.subtitle}</p>
          <div className="hero-in mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start" style={{ animationDelay: "240ms" }}>
            <AppStoreButton />
            <a href="#how" className="group inline-flex items-center gap-2 rounded-2xl px-4 py-3 font-bold transition hover:text-brand-deep dark:hover:text-brand-soft">
              {h.secondary}
              <Icon name="arrowRight" className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>
          </div>
          <ul className="hero-in muted mt-7 flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm font-semibold lg:justify-start" style={{ animationDelay: "320ms" }}>
            {h.badges.map((badge) => (
              <li key={badge} className="flex items-center gap-1.5">
                <Icon name="check" className="accent h-4 w-4" />
                {badge}
              </li>
            ))}
          </ul>
        </div>

        <div ref={scene} className="relative mx-auto w-full max-w-[16.5rem] sm:max-w-[19rem]">
          {/* Orbit rings, like the app's onboarding. */}
          <div aria-hidden="true" className="absolute left-1/2 top-1/2 -z-10 h-[125%] w-[185%] -translate-x-1/2 -translate-y-1/2">
            <div className="absolute inset-[8%] rounded-full bg-lime/70 dark:bg-brand/15" />
            <div className="animate-spin-slow absolute inset-0 rounded-full border border-dashed border-brand/30" />
          </div>

          <div className="parallax-slow">
            <div className="hero-in" style={{ animationDelay: "200ms" }}>
              <PhoneFrame>
                <Screen name="today" alt={h.screenshotAlt} eager />
              </PhoneFrame>
            </div>
          </div>

          {/* Produce drifting around the phone. */}
          <div className="parallax-fast absolute inset-0">
            <Produce name="tomato" className="absolute -right-12 top-[6%] h-20 w-20 sm:-right-24 sm:h-28 sm:w-28" duration={9} />
            <Produce name="lettuce" className="absolute -left-12 top-[24%] h-[4.5rem] w-[4.5rem] sm:-left-28 sm:h-24 sm:w-24" duration={11} delay={-3} dx={8} />
            <Produce name="lemon" className="absolute -right-10 bottom-[20%] h-[4.5rem] w-[4.5rem] sm:-right-28 sm:h-24 sm:w-24" duration={10} delay={-5} rot={-5} />
            <Produce name="carrot" className="absolute -left-10 bottom-[1%] h-20 w-20 sm:-left-24 sm:h-28 sm:w-28" duration={12} delay={-2} dy={14} />
            <Produce name="strawberry" className="absolute -left-12 -top-[6%] hidden h-16 w-16 lg:block" duration={8} delay={-6} />
            <Produce name="basil" className="absolute -right-16 top-[40%] hidden h-16 w-16 lg:block xl:-right-40" duration={13} delay={-4} />
          </div>

          {/* What the Today screen tells you. */}
          <div aria-hidden="true" className="pointer-events-none absolute inset-0">
            <div className="hero-in absolute -left-6 top-[43%] sm:-left-24" style={{ animationDelay: "600ms" }}>
              <div className="animate-float"><Chip icon="sprout" tone="bg-lime text-brand-deep">{h.chipSow}</Chip></div>
            </div>
            <div className="hero-in absolute -right-6 top-[62%] sm:-right-24" style={{ animationDelay: "800ms" }}>
              <div className="animate-float [animation-delay:-2s]"><Chip icon="basket" tone="bg-orange/20 text-orange">{h.chipHarvest}</Chip></div>
            </div>
            <div className="hero-in absolute -left-4 top-[80%] hidden sm:-left-20 sm:block" style={{ animationDelay: "1000ms" }}>
              <div className="animate-float [animation-delay:-4s]"><Chip icon="snow" tone="bg-sky/15 text-sky">{h.chipFrost}</Chip></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
