import React from "react";
import { servicesData } from "@/data/services";

export const Services: React.FC = () => {
  return (
    <section
      id="services"
      aria-label="Core Technology Capabilities of AVAPSTER Technologies"
      className="py-24 sm:py-32 bg-[#F3F2EC] text-[#121417]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between pb-6 mb-16 border-b border-black/[0.08]">
          <div>
            <span className="text-xs font-heading uppercase tracking-[0.2em] text-[#6D28D9] font-bold">
              OUR SERVICES
            </span>
          </div>
          <span className="text-xs font-mono text-[#374151] tracking-widest uppercase hidden sm:inline font-semibold">
            CORE CAPABILITIES & SOLUTIONS
          </span>
        </div>

        {/* Section Title */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-[#111315] font-heading max-w-2xl leading-[1.04]">
            Engineering the next chapter of{" "}
            <span className="text-[#6D28D9] italic font-normal font-heading">
              digital business.
            </span>
          </h2>
          <p className="text-xs sm:text-sm text-[#374151] max-w-md font-sans leading-relaxed">
            From strategic advisory to high-throughput platforms and applied artificial intelligence, we construct scalable digital architectures.
          </p>
        </div>

        {/* Full-Width Clean Capability Breakdown - Modern, Minimal & Accessible */}
        <div className="border-t border-black/[0.08] divide-y divide-black/[0.08]">
          {servicesData.map((service) => {
            return (
              <div
                key={service.id}
                className="group py-10 sm:py-14 transition-all duration-300 hover:bg-white/70 px-4 -mx-4 rounded-lg"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start">
                  {/* Title & Tagline (5 cols) */}
                  <div className="lg:col-span-5">
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-heading text-[#111315] group-hover:text-[#6D28D9] transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm font-sans font-medium text-[#6D28D9]">
                      {service.tagline}
                    </p>
                  </div>

                  {/* Description & Deliverables (7 cols) */}
                  <div className="lg:col-span-7 flex flex-col justify-between">
                    <p className="text-sm sm:text-base text-[#374151] leading-relaxed font-sans mb-5">
                      {service.description}
                    </p>

                    {/* Key Technical Schematics / Tags */}
                    <div className="flex flex-wrap gap-2 pt-1" aria-label={`Deliverables for ${service.title}`}>
                      {service.deliverables.map((d) => (
                        <span
                          key={d}
                          className="text-xs font-mono px-3 py-1 bg-white text-[#1C1F22] border border-black/[0.08] shadow-xs group-hover:border-[#6D28D9]/40 transition-colors"
                        >
                          {d}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
