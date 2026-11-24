"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { HeroAmbientCanvas } from "@/components/ui/HeroAmbientCanvas";

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      aria-label="AVAPSTER - Enterprise Digital Engineering"
      className="relative min-h-[92vh] flex flex-col justify-between pt-10 pb-16 sm:pt-16 sm:pb-24 bg-[#080A09] text-[#F5F5F0] overflow-hidden"
    >
      {/* Dynamic Fluid Aura & Particle Atmosphere Animation (replaces rigid line grid) */}
      <HeroAmbientCanvas />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex-grow flex flex-col justify-center">
        {/* Top Eyebrow Bar (Underline removed) */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-6 sm:mb-10 text-xs font-mono tracking-[0.24em] text-[#A5ADA2]">
          <div className="flex items-center gap-2.5">
            <span className="text-[#F5F5F0] font-semibold">AVAPSTER</span>
            <span className="text-white/20" aria-hidden="true">/</span>
            <span className="text-[#A78BFA]">DIGITAL ENGINEERING</span>
          </div>

          <div className="mt-2 sm:mt-0 flex items-center gap-3 text-[11px] text-[#A5ADA2]">
            <span>FOUNDING COLLECTIVE</span>
            <span className="text-[#F5F5F0] font-mono font-medium">EST. 2026</span>
          </div>
        </div>

        {/* Cinematic Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left / Central Area: Editorial Headline & Narrative (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[4.75rem] font-bold tracking-tight text-[#F5F5F0] font-heading leading-[1.05]">
              Building modern{" "}
              <span className="text-[#A78BFA] underline decoration-[#A78BFA]/30 decoration-2 underline-offset-8">
                web applications,
              </span>
              <br />
              mobile apps & digital products.
            </h1>

            {/* Supporting Tagline */}
            <p className="mt-6 text-lg sm:text-xl font-heading font-medium text-[#F5F5F0] tracking-tight flex items-center gap-3">
              <span className="w-6 h-px bg-[#A78BFA]" />
              &ldquo;Five minds. One vision. Infinite possibilities.&rdquo;
            </p>

            {/* Description */}
            <p className="mt-4 text-base sm:text-lg text-[#A5ADA2] font-sans leading-relaxed max-w-xl">
              We provide full-service digital consulting and software engineering — specializing in high-performance web applications, native mobile apps, custom product architecture, and scalable cloud solutions for growing businesses.
            </p>

            {/* CTAs */}
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-6 border-t border-white/10">
              <Button
                href="#services"
                variant="primary"
                size="md"
                className="group"
              >
                <span>View Our Services</span>
                <ArrowRight className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>

              <Button
                href="#contact"
                variant="outline"
                size="md"
                className="group"
              >
                <span>Let&apos;s Talk</span>
                <ArrowUpRight className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Button>
            </div>
          </div>

          {/* Right Side: High-Tech 3D Digital Product Visual with Transparent Seamless Blend (5 cols) */}
          <div className="lg:col-span-5 flex items-center justify-center relative">
            {/* Ambient atmospheric violet glow directly behind the visual to blend seamlessly with #080A09 */}
            <div
              className="absolute -inset-6 bg-[#A78BFA]/15 blur-3xl rounded-full pointer-events-none"
              aria-hidden="true"
            />

            <div className="relative w-full aspect-[4/3] flex items-center justify-center group">
              <Image
                src="/images/hero-banner.webp"
                alt="AVAPSTER 3D Digital Product Architecture and Modern Application Interface"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-contain transition-transform duration-700 group-hover:scale-105 filter drop-shadow-[0_15px_35px_rgba(167,139,250,0.2)]"
              />
            </div>
          </div>
        </div>

        {/* Bottom Technical Indicator Strip */}
        <div className="mt-12 pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono text-[#A5ADA2]">
          <div>
            <span className="text-[10px] text-[#A5ADA2] block">FOUNDING TEAM</span>
            <span className="text-[#F5F5F0] font-bold text-sm">05 Specialists</span>
          </div>
          <div>
            <span className="text-[10px] text-[#A5ADA2] block">SERVICES OFFERED</span>
            <span className="text-[#A78BFA] font-bold text-sm">Web, Mobile & Cloud</span>
          </div>
          <div>
            <span className="text-[10px] text-[#A5ADA2] block">PRODUCT DELIVERY</span>
            <span className="text-[#F5F5F0] font-bold text-sm">End-to-End Build</span>
          </div>
          <div className="flex items-center justify-end">
            <a
              href="#about"
              className="inline-flex items-center gap-1.5 text-xs text-[#A5ADA2] hover:text-[#A78BFA] transition-colors group"
            >
              <span>Learn About Us</span>
              <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:translate-y-0.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
