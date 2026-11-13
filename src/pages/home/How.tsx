import { Icon, type IconName } from "../../components/Icon";
import { Reveal } from "../../components/Reveal";
import { useLanguage } from "../../i18n";
import { SectionHeading } from "./shared";

const STEPS: { icon: IconName; tone: string }[] = [
  { icon: "globe", tone: "bg-sky/15 text-sky" },
  { icon: "rain", tone: "bg-sun/25 text-[#9a6b00] dark:text-sun" },
  { icon: "thermometer", tone: "bg-orange/20 text-[#b65a10] dark:text-orange" },
  { icon: "sprout", tone: "bg-lime text-brand-deep" },
];

export function How() {
  const { t } = useLanguage();
  const h = t.home.how;
  return (
    <section id="how" className="scroll-mt-20 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow={h.eyebrow} title={h.title} text={h.subtitle} />
        <ol className="relative mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {/* The line the four steps sit on (desktop). */}
          <div aria-hidden="true" className="absolute inset-x-[12%] top-[3.4rem] hidden border-t-2 border-dashed border-brand/30 lg:block" />
          {h.steps.map((step, index) => (
            <Reveal as="li" key={step.title} delay={index * 110} className="relative">
              <div className="card h-full p-6 transition duration-300 hover:-translate-y-1">
                <div className="flex items-center justify-between">
                  <span className={`flex h-14 w-14 items-center justify-center rounded-full ${STEPS[index].tone}`}>
                    <Icon name={STEPS[index].icon} className="h-7 w-7" />
                  </span>
                  <span aria-hidden="true" className="text-4xl font-black text-ink/10 dark:text-white/10">{index + 1}</span>
                </div>
                <h3 className="mt-5 text-lg font-extrabold">{step.title}</h3>
                <p className="muted mt-2 text-[0.95rem] leading-relaxed">{step.text}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
