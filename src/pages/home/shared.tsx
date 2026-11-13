import { Reveal } from "../../components/Reveal";

export function SectionHeading({ eyebrow, title, text, align = "center", onDark = false }: {
  eyebrow?: string;
  title: string;
  text?: string;
  align?: "center" | "left";
  onDark?: boolean;
}) {
  const alignment = align === "center" ? "mx-auto text-center" : "";
  return (
    <Reveal className={`max-w-2xl ${alignment}`}>
      {eyebrow && <p className={`text-sm font-bold uppercase tracking-[0.14em] ${onDark ? "text-lime" : "accent"}`}>{eyebrow}</p>}
      <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-balance sm:text-4xl lg:text-5xl">{title}</h2>
      {text && <p className={`mt-5 text-lg text-pretty ${onDark ? "text-white/85" : "muted"}`}>{text}</p>}
    </Reveal>
  );
}
