"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";

interface Step {
  number: string;
  title: string;
  tagline: string;
  description: string;
  deliverable: string;
}

const STEPS: Step[] = [
  {
    number: "01",
    title: "Discover",
    tagline: "Understand the business challenge.",
    description:
      "We immerse ourselves in your domain, interview stakeholders, audit existing systems, and establish clear technical KPIs and delivery milestones.",
    deliverable: "Architecture Blueprint & Scope",
  },
  {
    number: "02",
    title: "Architect",
    tagline: "Design systems for performance and scale.",
    description:
      "We define tech stacks, design scalable data schemas, map cloud infrastructure, and build high-fidelity interactive design prototypes.",
    deliverable: "System Design & Interactive Prototype",
  },
  {
    number: "03",
    title: "Engineer",
    tagline: "Agile sprints with production-grade code.",
    description:
      "Two-week development sprints with continuous integration, automated test suites, accessibility audits, and weekly staging demo deployments.",
    deliverable: "Working Software & CI/CD Pipelines",
  },
  {
    number: "04",
    title: "Scale",
    tagline: "Deploy, monitor, and iteratively enhance.",
    description:
      "Production deployment with zero-downtime cutover, real-time observability telemetry, security hardening, and dedicated post-launch support.",
    deliverable: "Production Release & SLA Coverage",
  },
];

export const Approach: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section
      id="approach"
      aria-label="AVAPSTER Delivery Framework"
      className="py-24 sm:py-32 bg-[#F6F5F1] text-[#121417]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between pb-6 mb-16 border-b border-black/[0.08]">
          <div>
            <span className="text-xs font-heading uppercase tracking-[0.2em] text-[#6D28D9] font-bold">
              OUR APPROACH
            </span>
          </div>
          <span className="text-xs font-mono text-[#1F2937] tracking-widest uppercase hidden sm:inline font-semibold">
            STRUCTURED DELIVERY TIMELINE
          </span>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-[#111315] font-heading max-w-2xl leading-[1.04]">
            From an idea to{" "}
            <span className="text-[#6D28D9] italic font-normal font-heading">
              real-world impact.
            </span>
          </h2>
          <p className="text-xs sm:text-sm text-[#374151] max-w-md font-sans leading-relaxed">
            A disciplined four-stage process combining enterprise rigor with rapid agile engineering cycles.
          </p>
        </div>

        {/* Desktop Four-Stage Progress Line with Violet Accent */}
        <div className="hidden lg:block">
          <div className="relative mb-12">
            {/* Base line */}
            <div className="absolute top-4 left-0 right-0 h-px bg-black/[0.08]" />
            {/* Active violet line */}
            <div
              className="absolute top-4 left-0 h-[2px] bg-[#7C3AED] transition-all duration-500 shadow-[0_0_12px_rgba(124,58,237,0.35)]"
              style={{ width: `${(activeStep / (STEPS.length - 1)) * 100}%` }}
            />

            <div className="grid grid-cols-4 gap-8 relative z-10" aria-label="Project delivery stages">
              {STEPS.map((step, idx) => {
                const isSelected = activeStep === idx;

                return (
                  <button
                    key={step.number}
                    type="button"
                    id={`stage-step-${idx}`}
                    aria-label={`Stage ${step.number}: ${step.title} - ${step.tagline}`}
                    aria-pressed={isSelected}
                    onClick={() => setActiveStep(idx)}
                    className={cn(
                      "text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7C3AED] p-5 cursor-pointer rounded-xl transition-all duration-300",
                      isSelected
                        ? "bg-white border-2 border-[#7C3AED] shadow-[0_8px_30px_rgba(124,58,237,0.1)] -translate-y-1"
                        : "bg-white/60 hover:bg-white border border-black/[0.06] hover:border-black/10 shadow-xs"
                    )}
                  >
                    <div className="flex items-center gap-2.5 mb-5">
                      <span
                        className={cn(
                          "w-8 h-8 rounded-full flex items-center justify-center font-mono text-xs font-bold transition-all duration-300",
                          isSelected
                            ? "bg-[#7C3AED] text-white shadow-[0_0_12px_rgba(124,58,237,0.4)]"
                            : "bg-[#111315] text-[#F9FAFB] border border-black/20"
                        )}
                      >
                        {step.number}
                      </span>
                      <span className="text-[10px] font-mono tracking-widest uppercase text-[#1F2937] font-semibold">
                        STAGE {step.number}
                      </span>
                    </div>

                    <h3
                      className={cn(
                        "text-2xl font-bold font-heading transition-colors mb-2",
                        isSelected ? "text-[#6D28D9]" : "text-[#111315] group-hover:text-[#6D28D9]"
                      )}
                    >
                      {step.title}
                    </h3>

                    <p className="text-xs font-medium text-[#1C1F22] font-sans leading-snug mb-3">
                      {step.tagline}
                    </p>

                    <p className="text-xs text-[#374151] font-sans leading-relaxed">
                      {step.description}
                    </p>

                    <div className="mt-4 pt-3 border-t border-black/[0.06] text-[10px] font-mono text-[#6D28D9] font-semibold">
                      Deliverable: {step.deliverable}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile Vertical Timeline */}
        <div className="lg:hidden flex flex-col gap-8 relative pl-6 border-l border-black/[0.08]">
          {STEPS.map((step, idx) => (
            <div key={step.number} className="relative p-5 bg-white border border-black/[0.06] rounded-xl shadow-xs">
              <span className="absolute -left-[37px] top-4 w-5 h-5 rounded-full bg-[#7C3AED] text-white flex items-center justify-center text-[10px] font-mono font-bold shadow-sm">
                {idx + 1}
              </span>

              <span className="text-[10px] font-mono uppercase tracking-widest text-[#6D28D9] font-bold block mb-1">
                STAGE {step.number}
              </span>

              <h3 className="text-2xl font-bold font-heading text-[#111315] mb-1">
                {step.title}
              </h3>

              <p className="text-xs font-semibold text-[#1C1F22] mb-2">
                {step.tagline}
              </p>

              <p className="text-xs text-[#374151] leading-relaxed mb-3">
                {step.description}
              </p>

              <div className="text-[10px] font-mono text-[#6D28D9] font-semibold bg-[#F5F3FF] p-2 inline-block border border-[#7C3AED]/20 rounded">
                Deliverable: {step.deliverable}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
