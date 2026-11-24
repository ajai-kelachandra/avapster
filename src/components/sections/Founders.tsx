"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import { foundersData } from "@/data/founders";

export const Founders: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);

  // Smooth scroll by one card width
  const scrollByCard = useCallback((direction: "next" | "prev") => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const cardWidth = el.firstElementChild?.clientWidth || 300;
    const scrollAmount = direction === "next" ? cardWidth + 20 : -(cardWidth + 20);

    // If at the end, wrap smoothly to start
    if (direction === "next" && el.scrollLeft >= el.scrollWidth - el.clientWidth - 10) {
      el.scrollTo({ left: 0, behavior: "smooth" });
    } else {
      el.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  }, []);

  // Auto-scroll loop when on viewports where content overflows and requires sliding
  useEffect(() => {
    if (!isAutoScrolling) return;

    const interval = setInterval(() => {
      const el = scrollContainerRef.current;
      if (!el) return;
      // Only auto-scroll if container actually overflows (mobile / tablet / smaller laptops)
      if (el.scrollWidth > el.clientWidth) {
        scrollByCard("next");
      }
    }, 3600);

    return () => clearInterval(interval);
  }, [isAutoScrolling, scrollByCard]);

  return (
    <section
      id="founders"
      aria-label="The five founders of AVAPSTER"
      className="py-24 sm:py-32 bg-[#080A09] text-[#F5F5F0] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-6 mb-12 sm:mb-16 border-b border-white/10 gap-6">
          <div>
            <div className="mb-3">
              <span className="text-xs font-heading uppercase tracking-[0.2em] text-[#A78BFA] font-bold">
                OUR FOUNDERS
              </span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-[#F5F5F0] font-heading">
              Five perspectives.{" "}
              <span className="text-[#A78BFA] italic font-normal font-heading">
                One ambition.
              </span>
            </h2>
          </div>
        </div>

        {/* 5-Photo Layout: Single row on desktop, smooth auto-sliding scroll on responsive screens */}
        <div
          ref={scrollContainerRef}
          role="region"
          aria-label="Founding collective photo gallery"
          tabIndex={0}
          onMouseEnter={() => setIsAutoScrolling(false)}
          onMouseLeave={() => setIsAutoScrolling(true)}
          onFocus={() => setIsAutoScrolling(false)}
          onBlur={() => setIsAutoScrolling(true)}
          onKeyDown={(e) => {
            if (e.key === "ArrowLeft") {
              e.preventDefault();
              scrollByCard("prev");
            } else if (e.key === "ArrowRight") {
              e.preventDefault();
              scrollByCard("next");
            }
          }}
          className="flex lg:grid lg:grid-cols-5 gap-5 sm:gap-6 overflow-x-auto lg:overflow-x-visible pb-4 pt-1 scroll-smooth snap-x snap-mandatory no-scrollbar focus-visible:ring-2 focus-visible:ring-[#A78BFA] focus-visible:outline-none"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {foundersData.map((founder, index) => (
            <div
              key={founder.id}
              className="w-[72vw] sm:w-[42vw] md:w-[32vw] lg:w-auto shrink-0 snap-center bg-[#111411] border border-white/10 p-4 sm:p-5 flex flex-col justify-between group transition-all duration-300 hover:border-[#A78BFA] hover:-translate-y-1"
            >
              {/* Portrait Frame */}
              <div className="relative w-full aspect-[4/5] bg-[#080A09] overflow-hidden mb-4 border border-white/10">
                <Image
                  src={founder.image}
                  alt={`${founder.name} — Co-Founder at AVAPSTER Technologies`}
                  fill
                  sizes="(max-width: 640px) 72vw, (max-width: 1024px) 35vw, 20vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority={index < 3}
                />

                {/* Subtle gradient overlay at base */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#080A09]/80 via-transparent to-transparent pointer-events-none" aria-hidden="true" />
              </div>

              {/* Minimal Centered Founder Name */}
              <div className="pt-3 border-t border-white/10 text-center">
                <h3 className="text-base sm:text-lg font-bold font-heading text-[#F5F5F0] tracking-tight group-hover:text-[#A78BFA] transition-colors truncate">
                  {founder.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
