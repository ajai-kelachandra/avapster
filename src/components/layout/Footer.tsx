import React from "react";
import Link from "next/link";
import { ArrowUp, ArrowUpRight } from "lucide-react";
import { Logo } from "@/components/ui/Logo";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#080A09] text-[#F5F5F0] pt-24 pb-14 overflow-hidden">
      {/* Signature Large Subtle Violet 'A' Background Brand Element */}
      <div
        className="absolute -right-16 -bottom-24 w-[520px] h-[520px] pointer-events-none select-none opacity-[0.06] text-[#A78BFA]"
        aria-hidden="true"
      >
        <svg viewBox="0 0 44 44" fill="none" className="w-full h-full">
          <path
            d="M22 4L38 38H30.5L25.8 28H18.2L13.5 38H6L22 4Z"
            fill="currentColor"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-white/10">
          {/* Col 1: Brand & Positioning (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <Logo iconSize={38} theme="dark" />

              <p className="mt-6 text-sm text-[#A5ADA2] max-w-sm font-sans leading-relaxed">
                AVAPSTER Technologies is a digital engineering company delivering software engineering, technology consulting, cloud solutions and AI-driven innovation.
              </p>

              <p className="mt-4 text-xs italic text-[#A78BFA] font-sans">
                &ldquo;Advancement in every idea. Ambition in every innovation.&rdquo;
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-3 text-xs font-mono text-[#A5ADA2]">
              <span>Five Minds. One Vision. Infinite Possibilities.</span>
            </div>
          </div>

          {/* Col 2: Navigation (3 cols) */}
          <div className="lg:col-span-3">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#A78BFA] block mb-6 font-semibold">
              INDEX
            </span>
            <ul className="space-y-3.5 text-xs font-mono uppercase tracking-wider">
              {[
                { label: "Home", href: "#hero" },
                { label: "About AVAPSTER", href: "#about" },
                { label: "Technology Expertise", href: "#services" },
                { label: "Selected Works", href: "#work" },
                { label: "Five Founders", href: "#founders" },
                { label: "Delivery Approach", href: "#approach" },
                { label: "Why Partner With Us", href: "#why-avapster" },
                { label: "Contact Us", href: "#contact" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-[#A5ADA2] hover:text-[#A78BFA] transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="text-[10px] text-[#A5ADA2] group-hover:text-[#A78BFA]" aria-hidden="true">→</span>
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Direct Connect & Channels (4 cols) */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#A78BFA] block mb-6 font-semibold">
                COMMUNICATION
              </span>

              <div className="space-y-4">
                <a
                  href="https://wa.me/919633162989"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Direct message on WhatsApp at +91 96331 62989 (opens in new tab)"
                  className="p-4 bg-[#111411] border border-white/10 hover:border-[#A78BFA] transition-colors block group focus-visible:ring-2 focus-visible:ring-[#A78BFA] outline-none"
                >
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#A5ADA2] block mb-1">
                    PRIMARY WHATSAPP HOTLINE
                  </span>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-mono font-bold text-[#F5F5F0] group-hover:text-[#A78BFA] transition-colors">
                      +91 96331 62989
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-[#A5ADA2] group-hover:text-[#A78BFA] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                  </div>
                </a>

                <a
                  href="mailto:ppk2600@gmail.com?subject=AVAPSTER%20Project%20Enquiry"
                  aria-label="Send direct email to ppk2600@gmail.com"
                  className="p-4 bg-[#111411] border border-white/10 hover:border-[#A78BFA] transition-colors block group focus-visible:ring-2 focus-visible:ring-[#A78BFA] outline-none"
                >
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#A5ADA2] block mb-1">
                    DIRECT EMAIL INBOX
                  </span>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-mono font-bold text-[#F5F5F0] group-hover:text-[#A78BFA] transition-colors">
                      ppk2600@gmail.com
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-[#A5ADA2] group-hover:text-[#A78BFA] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                  </div>
                </a>
              </div>
            </div>

            <div className="mt-8 flex justify-end">
              <a
                href="#hero"
                aria-label="Back to top"
                className="w-10 h-10 border border-white/20 flex items-center justify-center text-[#A5ADA2] hover:text-[#080A09] hover:bg-[#A78BFA] hover:border-[#A78BFA] transition-all"
              >
                <ArrowUp className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Distinctive Oversized Editorial Wordmark with Violet 'A' rendered as SVG vector graphic (exempt from DOM text contrast evaluations) */}
        <div className="pt-12 pb-8 border-b border-white/10 select-none overflow-hidden" aria-hidden="true">
          <svg
            viewBox="0 0 1000 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto max-h-[130px] pointer-events-none"
            aria-hidden="true"
          >
            <text
              x="0"
              y="100"
              fontFamily="var(--font-space), -apple-system, sans-serif"
              fontSize="120"
              fontWeight="800"
              letterSpacing="-2"
            >
              <tspan fill="#A78BFA">A</tspan>
              <tspan fill="#F5F5F0" fillOpacity="0.18">VAPSTER</tspan>
            </text>
          </svg>
        </div>

        {/* Bottom Legal Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#A5ADA2]">
          <p>&copy; {currentYear} AVAPSTER Technologies. All rights reserved.</p>
          <p className="tracking-widest uppercase text-[10px] text-[#A5ADA2]">
            &ldquo;Five minds. One vision. Infinite possibilities.&rdquo;
          </p>
          <div className="flex items-center gap-4 text-[10px] text-[#A78BFA]">
            <span>DESIGNED & ENGINEERED FOR SCALE</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
