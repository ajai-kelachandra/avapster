import React from "react";
import { Target, Eye } from "lucide-react";

export const About: React.FC = () => {
  return (
    <section
      id="about"
      aria-label="About AVAPSTER Technologies"
      className="py-24 sm:py-32 bg-[#F6F5F1] text-[#121417]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Marker */}
        <div className="flex items-center justify-between pb-6 mb-16 border-b border-black/[0.08]">
          <div>
            <span className="text-xs font-heading uppercase tracking-[0.2em] text-[#6D28D9] font-bold">
              ABOUT US
            </span>
          </div>
          <span className="text-xs font-mono text-[#1F2937] tracking-widest uppercase hidden sm:inline font-semibold">
            AVAPSTER PURPOSE & PRINCIPLES
          </span>
        </div>

        {/* Asymmetrical Open Editorial Layout (Zero Boxes) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Bold Headline & Open Ethos (6 cols) */}
          <div className="lg:col-span-6 lg:sticky lg:top-28">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#111315] font-heading leading-[1.04]">
              Turning ideas into{" "}
              <span className="text-[#6D28D9] underline decoration-[#6D28D9]/30 decoration-2 underline-offset-8">
                practical digital products.
              </span>
            </h2>

            {/* Open Architectural Callout with Vertical Purple Accent Line (No Box, No Shadow) */}
            <div className="mt-10 pl-6 border-l-2 border-[#7C3AED]">
              <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#6D28D9] font-bold block mb-2">
                WHAT WE DO
              </span>
              <p className="text-base sm:text-lg font-sans text-[#1C1F22] leading-relaxed">
                AVAPSTER is an IT services and digital product development company. We partner with businesses to design, build, and deploy modern web applications, mobile apps, and scalable digital systems.
              </p>
            </div>
          </div>

          {/* Right Column: Editorial Narrative, Vision, Mission & Metrics (6 cols) */}
          <div className="lg:col-span-6 flex flex-col gap-10">
            {/* Core Narrative */}
            <div className="space-y-4">
              <p className="text-lg sm:text-xl text-[#1C1F22] font-sans leading-relaxed">
                Whether you need a full-featured web platform, a native iOS or Android mobile application, or high-performance cloud architecture, our core team handles your product development from initial design to production launch.
              </p>
              <p className="text-sm sm:text-base text-[#374151] font-sans leading-relaxed">
                We combine creative UI/UX design with reliable full-stack engineering, rigorous automated QA testing, and modern cloud deployment. You work directly with experienced practitioners who understand real-world business needs.
              </p>
            </div>

            {/* Open Vision & Mission Columns (Zero Boxes, Pure Architectural Dividers) */}
            <div className="pt-8 border-t border-black/[0.08] grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-10">
              {/* Vision */}
              <div className="flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-3 text-[#6D28D9]">
                    <Eye className="w-4 h-4" />
                    <span className="text-xs font-mono uppercase tracking-[0.22em] font-bold">
                      OUR VISION
                    </span>
                  </div>
                  <blockquote className="text-base sm:text-lg font-heading font-semibold text-[#111315] leading-snug">
                    &ldquo;To empower businesses through meaningful innovation and future-ready technology.&rdquo;
                  </blockquote>
                </div>
                <span className="mt-4 text-[10px] font-mono tracking-widest uppercase text-[#565E56] font-semibold block">
                  ENDURING PARTNERSHIPS
                </span>
              </div>

              {/* Mission */}
              <div className="flex flex-col justify-between sm:border-l sm:border-black/[0.08] sm:pl-8">
                <div>
                  <div className="flex items-center gap-2 mb-3 text-[#111315]">
                    <Target className="w-4 h-4 text-[#6D28D9]" />
                    <span className="text-xs font-mono uppercase tracking-[0.22em] font-bold text-[#111315]">
                      OUR MISSION
                    </span>
                  </div>
                  <blockquote className="text-base sm:text-lg font-heading font-semibold text-[#111315] leading-snug">
                    &ldquo;To create scalable, intelligent and reliable digital solutions that make a measurable difference.&rdquo;
                  </blockquote>
                </div>
                <span className="mt-4 text-[10px] font-mono tracking-widest uppercase text-[#6D28D9] font-semibold block">
                  MEASURABLE VALUE
                </span>
              </div>
            </div>

            {/* Three Founding Pillars: Open Architectural Stats (No Box) */}
            <div className="pt-8 border-t border-black/[0.08] grid grid-cols-3 gap-6">
              <div>
                <span className="text-2xl sm:text-3xl font-bold font-heading text-[#111315] block">
                  05
                </span>
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#6D28D9] font-bold mt-1 block">
                  Founders
                </span>
                <p className="text-xs text-[#374151] mt-1 font-sans hidden sm:block">
                  Specialized in UI, Cloud, QA, AI & Full-Stack.
                </p>
              </div>

              <div>
                <span className="text-2xl sm:text-3xl font-bold font-heading text-[#111315] block">
                  100%
                </span>
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#6D28D9] font-bold mt-1 block">
                  Aligned
                </span>
                <p className="text-xs text-[#374151] mt-1 font-sans hidden sm:block">
                  Direct access to senior founding architects.
                </p>
              </div>

              <div>
                <span className="text-2xl sm:text-3xl font-bold font-heading text-[#111315] block">
                  Zero
                </span>
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#6D28D9] font-bold mt-1 block">
                  Middlemen
                </span>
                <p className="text-xs text-[#374151] mt-1 font-sans hidden sm:block">
                  Rapid engineering sprints & clear delivery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
