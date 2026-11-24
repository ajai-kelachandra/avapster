"use client";

import React from "react";
import Image from "next/image";
import { Check } from "lucide-react";
import { portfolioProjects } from "@/data/portfolio";

export const Portfolio: React.FC = () => {
  return (
    <section
      id="work"
      aria-label="AVAPSTER Selected Works and Client Deliveries"
      className="py-24 sm:py-32 bg-[#080A09] text-[#F5F5F0] relative"
    >
      {/* Anchor alias for backwards-compatibility */}
      <span id="portfolio" className="sr-only" aria-hidden="true" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between pb-6 mb-16 border-b border-white/10">
          <div>
            <span className="text-xs font-heading uppercase tracking-[0.2em] text-[#A78BFA] font-bold">
              SELECTED WORKS
            </span>
          </div>
          <span className="text-xs font-mono text-[#A5ADA2] tracking-widest uppercase hidden sm:inline">
            PROVEN CLIENT DELIVERIES & CASE STUDIES
          </span>
        </div>

        {/* Section Title */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-[#F5F5F0] font-heading max-w-2xl leading-[1.04]">
            Featured projects built for{" "}
            <span className="text-[#A78BFA] italic font-normal font-heading">
              real-world impact.
            </span>
          </h2>
          <p className="text-sm sm:text-base text-[#A5ADA2] max-w-md font-sans leading-relaxed">
            From interactive food ordering platforms and luxury e-commerce stores to corporate infrastructure and fitness portals.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioProjects.map((project, idx) => (
            <article
              key={project.id}
              className={`group bg-[#111411] border border-white/10 flex flex-col justify-between overflow-hidden transition-all duration-300 hover:border-[#A78BFA] hover:-translate-y-1 ${
                idx === 0 ? "md:col-span-2 lg:col-span-2" : ""
              }`}
            >
              {/* Project Screenshot Frame */}
              <div
                className={`relative w-full bg-[#080A09] overflow-hidden border-b border-white/10 ${
                  idx === 0 ? "aspect-[16/9] sm:aspect-[21/9]" : "aspect-[16/10]"
                }`}
              >
                <Image
                  src={project.image}
                  alt={`${project.title} — AVAPSTER Project Screenshot`}
                  fill
                  sizes={
                    idx === 0
                      ? "(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 66vw"
                      : "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  }
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority={idx < 2}
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-[#111411] via-transparent to-transparent opacity-60 pointer-events-none"
                  aria-hidden="true"
                />
              </div>

              {/* Project Details */}
              <div className="p-6 sm:p-8 flex flex-col flex-grow justify-between">
                <div>
                  {/* Category Tag */}
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#A78BFA] font-semibold block mb-2">
                    {project.category}
                  </span>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#F5F5F0] mb-5 group-hover:text-[#A78BFA] transition-colors leading-snug">
                    {project.title}
                  </h3>

                  {/* Features List */}
                  <ul className="space-y-2.5 pt-2 border-t border-white/10" aria-label={`Key features of ${project.title}`}>
                    {project.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#A5ADA2]">
                        <Check className="w-4 h-4 text-[#A78BFA] shrink-0 mt-0.5" aria-hidden="true" />
                        <span className="leading-snug">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

