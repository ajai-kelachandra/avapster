import { SectionMark } from "@/components/ui/SectionMark";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

export function About() {
  return (
    <section id="about" className="border-t border-line">
      <div className="mx-auto grid max-w-[1200px] gap-8 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <SectionMark label="About" />
          <h2 className="mt-3 text-2xl font-medium leading-[1.2] tracking-tight sm:text-3xl lg:text-[34px]">
            Small team. Big ideas. Meaningful technology.
          </h2>
        </Reveal>
        <Reveal delay={100} className="space-y-5 text-sm leading-relaxed text-muted sm:text-base lg:pt-9">
          <p>
            AVAPSTER is a technology company founded by five people who share one belief: good
            software should be simple, reliable and genuinely useful.
          </p>
          <p>
            We stay small on purpose, so every project gets our direct attention, from the first
            conversation to the final launch.
          </p>
          <Link href="/our-story" className="inline-block text-ink underline decoration-line underline-offset-4 transition-colors hover:text-accent">
            Read our story and meet the founders →
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
