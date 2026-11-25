"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { PulseDot } from "@/components/ui/SectionMark";
import { portfolioProjects, type PortfolioProject } from "@/data/portfolio";

const ease = [0.22, 1, 0.36, 1] as const;
const tints = ["#e8eddc", "#ece8fb", "#fdeadb", "#e1effb", "#fbe5ee", "#dff3e9"];

const imgClass = (p: PortfolioProject) =>
  p.image.endsWith(".webp") ? "object-cover object-top" : "object-cover object-top";

function Arrow({ dir = "right" }: { dir?: "left" | "right" }) {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true" className={dir === "left" ? "rotate-180" : ""}>
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function CaseStudies() {
  const n = portfolioProjects.length;
  const [active, setActive] = useState(0);
  const go = (d: number) => setActive((a) => (a + d + n) % n);
  const current = portfolioProjects[active];
  const others = Array.from({ length: n - 1 }, (_, k) => (active + 1 + k) % n);

  return (
    <section id="projects" className="border-t border-line">
      <div className="mx-auto max-w-[1200px] px-5 py-20 sm:px-8 sm:py-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease }}
          className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between"
        >
          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-soft px-3.5 py-1.5 text-xs text-muted">
            <PulseDot />
            {n} projects
          </span>
          <h2 className="font-display text-2xl font-medium leading-[1.1] tracking-[-0.03em] sm:text-right sm:text-3xl lg:text-[38px]">
            Explore our projects
          </h2>
        </motion.div>

        {/* Carousel */}
        <div className="mt-10 grid gap-4 lg:grid-cols-[minmax(0,540px)_1fr] lg:gap-5">
          {/* Active card */}
          <motion.article
            key={current.id}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease }}
            className="relative flex min-h-[420px] flex-col overflow-hidden rounded-[22px] p-5 sm:min-h-[360px] sm:p-6"
            style={{ background: tints[active % tints.length] }}
          >
            <div className="max-w-[50%] sm:max-w-[44%]">
              <h3 className="font-display text-lg font-bold leading-snug tracking-[-0.02em] sm:text-xl">
                {current.title}
              </h3>
              <p className="mt-3 text-[13px] leading-relaxed text-ink/70">{current.description}</p>
            </div>

            <div className="absolute bottom-4 right-4 h-[50%] w-[50%] overflow-hidden rounded-2xl bg-white/60 sm:h-[62%]">
              <Image
                src={current.image}
                alt={`${current.title} preview`}
                fill
                sizes="300px"
                className={imgClass(current)}
                style={current.image.endsWith(".webp") ? { backgroundColor: "#171717" } : undefined}
              />
            </div>

            <div className="mt-auto flex max-w-[42%] flex-col items-start gap-2 pt-6">
              {current.features.slice(0, 2).map((f, fi) => (
                <span key={f} className={(fi ? "hidden sm:inline-block " : "") + "rounded-full border border-ink/15 bg-white/50 px-3 py-1.5 text-[11px] leading-tight text-ink/80"}>
                  {f}
                </span>
              ))}
            </div>
          </motion.article>

          {/* Next cards + details */}
          <div className="min-w-0">
            <div className="-mx-5 overflow-x-auto px-5 [scrollbar-width:none] sm:mx-0 sm:px-0 lg:overflow-hidden [&::-webkit-scrollbar]:hidden">
              <div className="flex gap-4">
                {others.map((idx) => {
                  const p = portfolioProjects[idx];
                  return (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => setActive(idx)}
                      aria-label={`Show ${p.title}`}
                      className="group relative flex h-[190px] w-[210px] flex-none flex-col justify-between overflow-hidden rounded-[20px] p-4 text-left transition-transform duration-300 hover:-translate-y-1"
                      style={{ background: tints[idx % tints.length] }}
                    >
                      <span className="max-w-[90%] font-display text-[15px] font-bold leading-snug tracking-[-0.02em]">
                        {p.title}
                      </span>
                      <span className="flex items-end justify-between">
                        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-ink transition-colors group-hover:bg-ink group-hover:text-white">
                          <Arrow />
                        </span>
                        <span className="relative h-[72px] w-[72px] overflow-hidden rounded-full border-2 border-white bg-white">
                          <Image src={p.image} alt="" fill sizes="72px" className="object-cover object-top" />
                        </span>
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            <motion.div
              key={current.id + "-details"}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease }}
              className="mt-8 max-w-md"
            >
              <p className="text-[13px] leading-relaxed text-ink/75">
                {current.category}. {current.features.join(", ")}.
              </p>
              <a
                href="#work"
                className="mt-4 inline-flex items-center gap-2 border-b border-ink/30 pb-0.5 text-[13px] text-muted transition-colors hover:border-ink hover:text-ink"
              >
                See all work <Arrow />
              </a>
            </motion.div>
          </div>
        </div>

        {/* Controls */}
        <div className="mt-8 flex items-center gap-4">
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous project"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-soft text-ink transition-colors hover:bg-ink hover:text-white"
            >
              <Arrow dir="left" />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next project"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-soft text-ink transition-colors hover:bg-ink hover:text-white"
            >
              <Arrow />
            </button>
          </div>
          <div className="h-[3px] w-full max-w-[320px] rounded-full bg-line" role="presentation">
            <motion.div
              className="h-full rounded-full bg-ink"
              animate={{ width: `${((active + 1) / n) * 100}%` }}
              transition={{ duration: 0.5, ease }}
            />
          </div>
          <span className="text-xs tabular-nums text-muted">
            {String(active + 1).padStart(2, "0")} / {String(n).padStart(2, "0")}
          </span>
        </div>
      </div>
    </section>
  );
}
