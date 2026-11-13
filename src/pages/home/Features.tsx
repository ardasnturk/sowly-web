import { Icon } from "../../components/Icon";
import { PhoneFrame, Screen } from "../../components/PhoneFrame";
import { Produce } from "../../components/Produce";
import { Reveal } from "../../components/Reveal";
import type { ScreenName } from "../../config";
import { useLanguage, type Feature } from "../../i18n";
import { useParallax } from "../../lib/motion";
import { SectionHeading } from "./shared";

/** Screenshot, backdrop colour and the two produce photos of each feature, in the order of `features.items`. */
const VISUALS: { screen: ScreenName; circle: string; produce: [string, string] }[] = [
  { screen: "today", circle: "bg-lime/70 dark:bg-brand/15", produce: ["pea", "radish"] },
  { screen: "crop", circle: "bg-sun/30 dark:bg-sun/10", produce: ["sweet_pepper", "cucumber"] },
  { screen: "bed", circle: "bg-orange/20 dark:bg-orange/10", produce: ["lettuce", "carrot"] },
  { screen: "garden", circle: "bg-mint dark:bg-brand/15", produce: ["strawberry", "blueberry"] },
];

function FeatureRow({ feature, index }: { feature: Feature; index: number }) {
  const visual = VISUALS[index];
  const flipped = index % 2 === 1;
  const scene = useParallax<HTMLDivElement>();
  return (
    <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
      <div ref={scene} className={`relative mx-auto w-full max-w-[15.5rem] sm:max-w-[17.5rem] ${flipped ? "lg:order-2" : ""}`}>
        <div aria-hidden="true" className={`parallax-slow absolute left-1/2 top-1/2 -z-10 aspect-square w-[175%] -translate-x-1/2 -translate-y-1/2`}>
          <div className={`h-full w-full rounded-full ${visual.circle}`} />
        </div>
        <Reveal variant="scale">
          <PhoneFrame>
            <Screen name={visual.screen} alt={feature.alt} />
          </PhoneFrame>
        </Reveal>
        <div className="parallax-fast absolute inset-0">
          <Produce name={visual.produce[0]} className={`absolute top-[12%] h-20 w-20 sm:h-24 sm:w-24 ${flipped ? "-left-12 sm:-left-24" : "-right-12 sm:-right-24"}`} duration={10} delay={-index} />
          <Produce name={visual.produce[1]} className={`absolute bottom-[14%] h-16 w-16 sm:h-20 sm:w-20 ${flipped ? "-right-10 sm:-right-20" : "-left-10 sm:-left-20"}`} duration={12} delay={-3 - index} rot={-5} />
        </div>
      </div>
      <div>
        <Reveal variant={flipped ? "left" : "right"}>
          <p className="inline-flex items-center rounded-full bg-lime px-3 py-1 text-sm font-bold text-ink">{feature.label}</p>
          <h3 className="mt-4 text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">{feature.title}</h3>
          <p className="muted mt-4 text-lg text-pretty">{feature.text}</p>
        </Reveal>
        <ul className="mt-7 space-y-3.5">
          {feature.points.map((point, pointIndex) => (
            <Reveal as="li" key={point} delay={100 + pointIndex * 90} className="flex items-start gap-3">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-deep text-white">
                <Icon name="check" className="h-3.5 w-3.5" />
              </span>
              <span className="font-semibold text-ink/85 dark:text-white/85">{point}</span>
            </Reveal>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function Features() {
  const { t } = useLanguage();
  const f = t.home.features;
  return (
    <section id="features" className="scroll-mt-20 overflow-clip py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow={f.eyebrow} title={f.title} text={f.subtitle} />
        <div className="mt-20 space-y-28 sm:space-y-36">
          {f.items.map((feature, index) => (
            <FeatureRow key={feature.label} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
