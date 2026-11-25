import type { Metadata } from "next";
import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SectionMark } from "@/components/ui/SectionMark";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ButtonLink } from "@/components/ui/Button";
import { foundersData } from "@/data/founders";

export const metadata: Metadata = {
  title: "Our Story | AVAPSTER Technologies",
  description:
    "AVAPSTER is a technology company founded by five people with one shared vision. Meet the founders.",
  alternates: { canonical: "/our-story" },
};

const beliefs = [
  { title: "Keep it simple", text: "Clear, uncluttered products are easier to use and easier to maintain." },
  { title: "Stay close", text: "A small team means you work directly with the people building your product." },
  { title: "Build to last", text: "We care about quality, reliability and what happens after launch." },
];

export default function OurStoryPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <section className="mx-auto max-w-[1200px] px-5 pb-16 pt-32 sm:px-8 sm:pb-24 sm:pt-40">
          <SectionMark label="Our story" />
          <h1 className="mt-5 max-w-3xl text-[30px] font-medium leading-[1.1] tracking-tight sm:text-5xl lg:text-[46px]">
            Five minds. One vision.
          </h1>
          <div className="mt-8 max-w-2xl space-y-5 text-sm leading-relaxed text-muted sm:text-base">
            <p>
              AVAPSTER began with five people who wanted to build technology differently: with
              fewer layers, clearer communication and real care for the result.
            </p>
            <p>
              Between us we cover design, frontend and full stack development, product planning and
              quality assurance. That means one small team can take an idea all the way to launch.
            </p>
          </div>
        </section>

        <section className="border-t border-line">
          <div className="mx-auto max-w-[1200px] px-5 py-16 sm:px-8 sm:py-24">
            <SectionHeader label="What we believe" title="A few simple principles" />
            <ul className="mt-12 grid gap-0 border-t border-line md:grid-cols-3 md:border-t-0">
              {beliefs.map((b, i) => (
                <Reveal as="li" key={b.title} delay={i * 80} className="border-b border-line py-6 md:border-b-0 md:border-t md:pr-8">
                  <h3 className="text-lg font-medium tracking-tight">{b.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{b.text}</p>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        <section id="founders" className="border-t border-line">
          <div className="mx-auto max-w-[1200px] px-5 py-16 sm:px-8 sm:py-24">
            <SectionHeader label="Founders" title="Meet the team" />
            <ul className="mt-12 grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-3 lg:grid-cols-5">
              {foundersData.map((f, i) => (
                <Reveal as="li" key={f.id} delay={i * 70} className="group">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-md border border-line bg-soft">
                    <Image
                      src={f.image}
                      alt={f.name}
                      fill
                      sizes="(min-width: 1024px) 220px, (min-width: 768px) 33vw, 50vw"
                      unoptimized={f.image.endsWith(".svg")}
                      className="object-cover object-top grayscale transition-all duration-500 group-hover:grayscale-0"
                    />
                  </div>
                  <h3 className="mt-4 text-sm font-medium tracking-tight">{f.name}</h3>
                  <p className="mt-0.5 text-[13px] text-accent">{f.designation}</p>
                  <p className="mt-3 text-[13px] leading-relaxed text-muted">{f.quote}</p>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        <section className="border-t border-line bg-soft">
          <div className="mx-auto flex max-w-[1200px] flex-col items-start gap-6 px-5 py-16 sm:px-8 sm:py-20 md:flex-row md:items-center md:justify-between">
            <h2 className="text-lg font-medium tracking-tight sm:text-2xl">Have an idea? Let&apos;s build it.</h2>
            <ButtonLink href="/#contact">Let&apos;s Talk</ButtonLink>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
