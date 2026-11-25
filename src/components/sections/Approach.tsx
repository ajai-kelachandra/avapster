import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";

const steps = [
  { n: "01", title: "Discover", text: "We listen, ask questions and define what success looks like." },
  { n: "02", title: "Design", text: "We shape the experience with clear flows and clean interfaces." },
  { n: "03", title: "Develop", text: "We build, test and refine with regular check-ins." },
  { n: "04", title: "Deliver", text: "We launch, hand over and stay available afterwards." },
];

export function Approach() {
  return (
    <section id="approach" className="border-t border-line">
      <div className="mx-auto max-w-[1200px] px-5 py-20 sm:px-8 sm:py-28">
        <SectionHeader label="Our approach" title="Simple, from idea to launch" />
        <ol className="mt-12 grid gap-0 border-t border-line md:grid-cols-4 md:border-t-0">
          {steps.map((s, i) => (
            <Reveal as="li" key={s.n} delay={i * 80} className="border-b border-line py-6 md:border-b-0 md:border-t md:pr-8 md:pt-6">
              <span className="text-sm text-accent">{s.n}</span>
              <h3 className="mt-3 text-lg font-medium tracking-tight">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{s.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
