"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Expertise", href: "#services" },
  { label: "Works", href: "#work" },
  { label: "Founders", href: "#founders" },
  { label: "Approach", href: "#approach" },
  { label: "Why Us", href: "#why-avapster" },
  { label: "Contact", href: "#contact" },
];

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <>
      {/* Skip to Content for 100% Keyboard Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[150] focus:px-4 focus:py-2 focus:bg-[#A78BFA] focus:text-[#080A09] focus:font-bold focus:shadow-2xl focus:outline-none"
      >
        Skip to main content
      </a>

      {/* Main Top Header */}
      <header
        className={cn(
          "sticky top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
          isScrolled
            ? "bg-[#080A09]/95 backdrop-blur-xl border-white/10 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.8)]"
            : "bg-transparent border-white/5 py-5 sm:py-6"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4 lg:gap-8">
            {/* Logo */}
            <Logo iconSize={34} theme="dark" className="shrink-0" />

            {/* Desktop Navigation Links (>= lg: fluid spacing, no wrapping, generous breathing room) */}
            <div className="hidden lg:flex items-center gap-4 xl:gap-8 2xl:gap-10 shrink-0">
              <nav className="flex items-center gap-3.5 xl:gap-6 2xl:gap-8" aria-label="Main Navigation">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-[11px] xl:text-xs uppercase tracking-wider xl:tracking-[0.16em] font-mono text-[#A5ADA2] hover:text-[#A78BFA] transition-colors duration-200 relative group py-1 whitespace-nowrap shrink-0"
                  >
                    {link.label}
                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#A78BFA] transition-all duration-300 group-hover:w-full" />
                  </Link>
                ))}
              </nav>

              {/* Direct Highlighted CTA */}
              <Link
                href="#contact"
                className="inline-flex items-center gap-1.5 text-[11px] xl:text-xs uppercase tracking-wider xl:tracking-widest font-semibold font-sans px-3.5 xl:px-5 py-2 xl:py-2.5 bg-[#A78BFA] text-[#080A09] hover:bg-[#C4B5FD] transition-all duration-300 hover:shadow-[0_0_20px_rgba(167,139,250,0.35)] shrink-0 whitespace-nowrap group"
              >
                <span>Let&apos;s Talk</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>

            {/* Mobile / Tablet (< lg) Actions: Compact CTA + Left Drawer Menu Trigger */}
            <div className="flex items-center gap-3 lg:hidden">
              <Link
                href="#contact"
                className="inline-flex items-center gap-1 text-[11px] uppercase tracking-wider font-semibold font-sans px-3 py-1.5 bg-[#A78BFA] text-[#080A09] hover:bg-[#C4B5FD] transition-colors"
              >
                <span>Let&apos;s Talk</span>
                <ArrowUpRight className="w-3 h-3" />
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="p-2 text-[#F5F5F0] hover:text-[#A78BFA] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A78BFA]"
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-nav-panel"
                aria-label="Open mobile navigation menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Responsive Left-Side Collapse Drawer & Backdrop Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-[100] lg:hidden transition-all duration-300",
          mobileMenuOpen ? "pointer-events-auto visible" : "pointer-events-none invisible"
        )}
        aria-hidden={!mobileMenuOpen}
      >
        {/* Dark Dim Backdrop with Blur - Click to close */}
        <div
          onClick={() => setMobileMenuOpen(false)}
          className={cn(
            "fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-300",
            mobileMenuOpen ? "opacity-100" : "opacity-0"
          )}
        />

        {/* Left Side Slide-in Drawer */}
        <div
          id="mobile-nav-panel"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
          className={cn(
            "fixed inset-y-0 left-0 w-[84vw] max-w-sm bg-[#080A09] border-r border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.95)] flex flex-col justify-between p-6 overflow-y-auto transition-transform duration-300 ease-out z-10",
            mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          )}
        >
          {/* Drawer Top Header: Logo + Close Button */}
          <div className="flex items-center justify-between pb-6 border-b border-white/10">
            <Logo iconSize={30} theme="dark" />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 -mr-2 text-[#A5ADA2] hover:text-[#F5F5F0] transition-colors focus-visible:ring-2 focus-visible:ring-[#A78BFA] outline-none"
              aria-label="Close navigation menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col divide-y divide-white/10 py-6" aria-label="Mobile Links">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-4 text-xl sm:text-2xl font-heading font-bold text-[#F5F5F0] hover:text-[#A78BFA] transition-colors flex items-center justify-between group"
              >
                <span>{link.label}</span>
                <span className="text-xs font-mono text-[#A5ADA2] group-hover:text-[#A78BFA] transition-colors">
                  →
                </span>
              </Link>
            ))}
          </nav>

          {/* Drawer Footer Actions */}
          <div className="pt-6 border-t border-white/10 flex flex-col gap-4">
            <Link
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3.5 bg-[#A78BFA] text-[#080A09] text-center text-xs uppercase tracking-widest font-bold font-sans hover:bg-[#C4B5FD] transition-colors flex items-center justify-center gap-2"
            >
              <span>Let&apos;s Talk</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>

            <a
              href="https://wa.me/919633162989?text=Hello%20AVAPSTER%20Technologies"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Connect on WhatsApp at +91 96331 62989 (opens in new tab)"
              className="text-center text-xs font-mono text-[#A5ADA2] hover:text-[#A78BFA] py-2 border border-white/10 transition-colors"
            >
              WhatsApp: +91 96331 62989
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
