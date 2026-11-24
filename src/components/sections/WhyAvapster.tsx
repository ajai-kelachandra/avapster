"use client";

import React from "react";
import { Users2, Lightbulb, UserCheck, Cpu, ShieldCheck, RefreshCw } from "lucide-react";

interface Pillar {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const PILLARS: Pillar[] = [
  {
    icon: <Users2 className="w-6 h-6" aria-hidden="true" />,
    title: "Five Complementary Perspectives",
    description:
      "A tight, high-bandwidth founding collective spanning enterprise architecture, systems engineering, cloud, AI, and human interaction.",
  },
  {
    icon: <Lightbulb className="w-6 h-6" aria-hidden="true" />,
    title: "Innovation-Driven Thinking",
    description:
      "We avoid repetitive templates and legacy inertia, architecting modern digital solutions ready for next-decade operational shifts.",
  },
  {
    icon: <UserCheck className="w-6 h-6" aria-hidden="true" />,
    title: "User-Focused Engineering",
    description:
      "Deep technological sophistication only matters when it delivers an intuitive, frictionless, and reliable user experience.",
  },
  {
    icon: <Cpu className="w-6 h-6" aria-hidden="true" />,
    title: "Scalable Digital Solutions",
    description:
      "Engineered with clean domain boundaries and cloud-native frameworks ready to handle rapid operational expansion effortlessly.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6" aria-hidden="true" />,
    title: "Quality-Oriented Development",
    description:
      "Zero tolerance for fragile workarounds. Rigorous typing, automated validation, and continuous review cycles ensure high-integrity code.",
  },
  {
    icon: <RefreshCw className="w-6 h-6" aria-hidden="true" />,
    title: "Continuous Improvement",
    description:
      "An active culture of experimentation, telemetry monitoring, and architectural refinement that keeps systems ahead of industry curves.",
  },
];

export const WhyAvapster: React.FC = () => {
  return (
    <section
      id="why-avapster"
      aria-label="Why Partner With AVAPSTER Technologies"
      className="py-24 sm:py-32 bg-[#080A09] text-[#F5F5F0]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Marker */}
        <div className="flex items-center justify-between pb-6 mb-16 border-b border-white/10">
          <div>
            <span className="text-xs font-heading uppercase tracking-[0.2em] text-[#A78BFA] font-bold">
              WHY AVAPSTER
            </span>
          </div>
          <span className="text-xs font-mono text-[#A5ADA2] tracking-widest uppercase hidden sm:inline">
            CORE PRINCIPLES & DIFFERENTIATORS
          </span>
        </div>

        {/* Section Heading */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-20">
          <div className="lg:col-span-8">
            <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-[#F5F5F0] font-heading leading-[1.04]">
              Built on collaboration.{" "}
              <span className="text-[#A78BFA] italic font-normal font-heading">
                Driven by possibility.
              </span>
            </h2>
          </div>
          <div className="lg:col-span-4">
            <p className="text-sm sm:text-base text-[#A5ADA2] font-sans leading-relaxed">
              We eliminate the disconnect between high-level advisory and practical engineering execution.
            </p>
          </div>
        </div>

        {/* Unique Modern Non-Box Layout: Clean Architectural Matrix with Subtle Hairline Dividers & Glowing Accents */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {PILLARS.map((pillar) => (
            <div
              key={pillar.title}
              className="group relative pt-8 border-t border-white/10 hover:border-[#A78BFA] transition-all duration-500 flex flex-col justify-start"
            >
              {/* Top Accent Indicator on Hover */}
              <div
                className="absolute top-0 left-0 w-0 h-[2px] bg-[#A78BFA] transition-all duration-500 group-hover:w-full shadow-[0_0_12px_rgba(167,139,250,0.5)]"
                aria-hidden="true"
              />

              {/* Icon: Ambient Luminous Accent */}
              <div className="mb-6 inline-flex items-center justify-center w-12 h-12 bg-[#A78BFA]/10 text-[#A78BFA] border border-[#A78BFA]/25 transition-all duration-300 group-hover:bg-[#A78BFA] group-hover:text-[#080A09] group-hover:scale-105 group-hover:shadow-[0_0_20px_rgba(167,139,250,0.4)]">
                {pillar.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#F5F5F0] mb-3 group-hover:text-[#A78BFA] transition-colors duration-300 leading-snug">
                {pillar.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-[#A5ADA2] font-sans leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* Elegant Editorial Statement (Replaced heavy box with clean open typography) */}
        <div className="mt-20 pt-12 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#A78BFA] font-semibold block mb-2">
              THE AVAPSTER GUARANTEE
            </span>
            <p className="text-lg sm:text-xl font-heading font-medium text-[#F5F5F0] leading-snug">
              Every platform we build is engineered directly by its founding architects with zero layers of administrative detachment.
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-3 text-xs font-mono tracking-widest uppercase text-[#A78BFA]">
            <span>FIVE MINDS. ONE VISION.</span>
          </div>
        </div>
      </div>
    </section>
  );
};
