"use client";

import React, { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { X, Sparkles, MessageSquare, ChevronUp } from "lucide-react";

type MascotState =
  | "hero"
  | "about"
  | "founders"
  | "services"
  | "work"
  | "approach"
  | "why-avapster"
  | "contact";

interface SectionConfig {
  id: string;
  state: MascotState;
  message: string;
  badge: string;
}

const SECTIONS: SectionConfig[] = [
  {
    id: "hero",
    state: "hero",
    message: "Welcome to AVAPSTER! Scroll to explore our digital engineering world.",
    badge: "HELLO! 👋",
  },
  {
    id: "about",
    state: "about",
    message: "Discover who we are, our mission, and what drives our collective.",
    badge: "WHO WE ARE 👉",
  },
  {
    id: "founders",
    state: "founders",
    message: "Five specialized founders united with one transformative vision!",
    badge: "OUR TEAM 🌟",
  },
  {
    id: "services",
    state: "services",
    message: "Explore our full-stack engineering, cloud architecture, and AI solutions.",
    badge: "EXPERTISE ⚡",
  },
  {
    id: "work",
    state: "work",
    message: "Check out real platforms, mobile apps, and systems we've shipped!",
    badge: "PROVEN WORK 👍",
  },
  {
    id: "approach",
    state: "approach",
    message: "Our battle-tested 4-stage engineering blueprint from discover to scale.",
    badge: "BLUEPRINT ⚙️",
  },
  {
    id: "why-avapster",
    state: "why-avapster",
    message: "Why visionary businesses and global partners choose to build with us.",
    badge: "WHY US 🚀",
  },
  {
    id: "contact",
    state: "contact",
    message: "Ready to launch your vision? Let's start a conversation right now!",
    badge: "LET'S TALK 💻",
  },
];

export const ScrollMascot: React.FC = () => {
  const [activeSection, setActiveSection] = useState<MascotState>("hero");
  const [isMinimized, setIsMinimized] = useState<boolean>(false);
  const [showBubble, setShowBubble] = useState<boolean>(true);
  const [isSpinning, setIsSpinning] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [scrollVelocity, setScrollVelocity] = useState<number>(0);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const characterRef = useRef<HTMLDivElement | null>(null);
  const bubbleTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const lastScrollYRef = useRef<number>(0);
  const velocityTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Initialize GSAP ScrollTrigger for section awareness
  useEffect(() => {
    if (typeof window === "undefined") return;

    gsap.registerPlugin(ScrollTrigger);

    const triggers: ScrollTrigger[] = [];

    // Setup ScrollTriggers for each section on the page
    SECTIONS.forEach((section) => {
      const element = document.getElementById(section.id);
      if (!element) return;

      const trigger = ScrollTrigger.create({
        trigger: element,
        start: "top 65%",
        end: "bottom 35%",
        onEnter: () => handleSectionChange(section.state),
        onEnterBack: () => handleSectionChange(section.state),
      });

      triggers.push(trigger);
    });

    // Detect scroll velocity for natural body tilting
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollYRef.current;
      lastScrollYRef.current = currentScrollY;

      // Clamp velocity between -15 and 15
      const clamped = Math.max(-15, Math.min(15, delta * 0.4));
      setScrollVelocity(clamped);

      if (velocityTimeoutRef.current) {
        clearTimeout(velocityTimeoutRef.current);
      }
      velocityTimeoutRef.current = setTimeout(() => {
        setScrollVelocity(0);
      }, 150);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      triggers.forEach((t) => t.kill());
      window.removeEventListener("scroll", handleScroll);
      if (bubbleTimeoutRef.current) clearTimeout(bubbleTimeoutRef.current);
      if (velocityTimeoutRef.current) clearTimeout(velocityTimeoutRef.current);
    };
  }, []);

  const handleSectionChange = (newState: MascotState) => {
    setActiveSection(newState);
    setShowBubble(true);

    // Auto-dim speech bubble after 6 seconds to never distract
    if (bubbleTimeoutRef.current) {
      clearTimeout(bubbleTimeoutRef.current);
    }
    bubbleTimeoutRef.current = setTimeout(() => {
      setShowBubble(false);
    }, 6000);
  };

  // Click mascot to trigger playful cheer spin
  const handleMascotClick = () => {
    if (isSpinning) return;
    setIsSpinning(true);
    setShowBubble(true);

    if (characterRef.current) {
      gsap.to(characterRef.current, {
        rotation: "+=360",
        scale: 1.15,
        duration: 0.7,
        ease: "back.out(1.6)",
        onComplete: () => {
          gsap.to(characterRef.current, {
            scale: 1,
            duration: 0.3,
            ease: "power2.out",
          });
          setIsSpinning(false);
        },
      });
    }
  };

  const currentConfig =
    SECTIONS.find((s) => s.state === activeSection) || SECTIONS[0];

  return (
    <aside
      ref={containerRef}
      aria-label="AVAPSTER Interactive Digital Mascot"
      className="fixed bottom-4 sm:bottom-7 right-4 sm:right-7 z-40 pointer-events-none select-none transition-all duration-500 ease-out font-sans"
    >
      {/* Minimized Floating Pill Avatar */}
      {isMinimized ? (
        <button
          type="button"
          onClick={() => {
            setIsMinimized(false);
            setShowBubble(true);
          }}
          className="pointer-events-auto p-2.5 sm:p-3 bg-[#111411]/90 hover:bg-[#1A1E1A] border border-[#A78BFA]/50 hover:border-[#A78BFA] text-[#A78BFA] rounded-full shadow-[0_0_25px_rgba(167,139,250,0.35)] backdrop-blur-md flex items-center gap-2 group transition-all duration-300 hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A78BFA]"
          title="Summon AvapBot Mascot"
          aria-label="Expand AvapBot assistant"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#A78BFA] opacity-75" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#A78BFA]" />
          </span>
          <span className="text-[11px] font-mono font-bold tracking-wider text-[#F5F5F0]">
            AVAPBOT
          </span>
          <ChevronUp className="w-3.5 h-3.5 text-[#A5ADA2] group-hover:text-[#A78BFA] transition-transform" />
        </button>
      ) : (
        <div className="flex flex-col items-end gap-2.5 max-w-[280px] sm:max-w-[320px]">
          {/* Dynamic Context Speech Bubble */}
          <div
            className={`pointer-events-auto transition-all duration-400 ease-out origin-bottom-right ${
              showBubble
                ? "opacity-100 scale-100 translate-y-0"
                : "opacity-0 scale-95 translate-y-2 pointer-events-none"
            }`}
          >
            <div className="relative bg-[#111411]/95 border border-[#A78BFA]/30 rounded-2xl p-3.5 sm:p-4 shadow-[0_8px_32px_rgba(0,0,0,0.85)] backdrop-blur-xl">
              {/* Header Bar inside bubble */}
              <div className="flex items-center justify-between gap-3 pb-2 mb-2 border-b border-white/10">
                <div className="flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3 text-[#A78BFA]" />
                  <span className="text-[10px] font-mono uppercase tracking-widest font-bold text-[#A78BFA]">
                    {currentConfig.badge}
                  </span>
                </div>
                {/* Control buttons with accessible touch targets */}
                <div className="flex items-center gap-2 -mr-1">
                  <button
                    type="button"
                    onClick={() => setShowBubble(false)}
                    className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center text-[#A5ADA2] hover:text-[#F5F5F0] hover:bg-white/10 rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A78BFA]"
                    aria-label="Dismiss message bubble"
                    title="Dismiss bubble"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsMinimized(true)}
                    className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center text-[#A5ADA2] hover:text-[#A78BFA] hover:bg-white/10 rounded-full transition-colors text-sm font-bold focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A78BFA]"
                    aria-label="Minimize mascot"
                    title="Minimize AvapBot"
                  >
                    –
                  </button>
                </div>
              </div>

              {/* Message Content */}
              <p className="text-xs text-[#F5F5F0] leading-relaxed font-sans font-normal pr-1">
                {currentConfig.message}
              </p>

              {/* Subtle Call to Action link if in contact or works section */}
              {activeSection === "contact" && (
                <a
                  href="#contact"
                  className="mt-2.5 inline-flex items-center gap-1 text-[11px] font-mono font-bold text-[#A78BFA] hover:text-[#C4B5FD] underline underline-offset-4"
                >
                  Jump to contact form →
                </a>
              )}
              {activeSection === "work" && (
                <a
                  href="#work"
                  className="mt-2.5 inline-flex items-center gap-1 text-[11px] font-mono font-bold text-[#A78BFA] hover:text-[#C4B5FD] underline underline-offset-4"
                >
                  Browse all 5 client projects →
                </a>
              )}

              {/* Dialogue Pointer Tail */}
              <div className="absolute -bottom-1.5 right-8 w-3 h-3 bg-[#111411] border-r border-b border-[#A78BFA]/30 rotate-45 transform" />
            </div>
          </div>

          {/* Interactive Mascot Character Wrapper */}
          <div
            ref={characterRef}
            onClick={handleMascotClick}
            onMouseEnter={() => {
              setIsHovered(true);
              setShowBubble(true);
            }}
            onMouseLeave={() => setIsHovered(false)}
            style={{
              transform: `rotate(${scrollVelocity * 0.4}deg)`,
              transition: "transform 0.2s cubic-bezier(0.2, 0.8, 0.2, 1)",
            }}
            className="pointer-events-auto relative cursor-pointer group flex flex-col items-center origin-bottom focus:outline-none"
            role="button"
            tabIndex={0}
            aria-label="AvapBot mascot: Click to make him spin!"
            title="Click me to wave!"
          >
            {/* The 3D Rendered Vector Mascot */}
            <MascotSvg state={activeSection} isHovered={isHovered} />

            {/* Floating Energy Shadow beneath the mascot */}
            <div
              className={`w-14 sm:w-16 h-3 rounded-full bg-[#A78BFA]/25 blur-[6px] transition-all duration-300 ${
                isHovered ? "scale-125 opacity-70" : "scale-100 opacity-40"
              }`}
            />
          </div>
        </div>
      )}
    </aside>
  );
};

/**
 * 3D SVG Developer Robot Mascot ("AvapBot")
 * Features multi-layered volumetric shading, dynamic LED eyes, animated arms,
 * hovering thruster glow, and props (holographic laptop, orbiting tech particles, thumbs-up, pointers).
 */
const MascotSvg: React.FC<{ state: MascotState; isHovered: boolean }> = ({
  state,
  isHovered,
}) => {
  return (
    <svg
      width="110"
      height="125"
      viewBox="0 0 110 125"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-20 h-24 sm:w-24 sm:h-28 drop-shadow-[0_10px_25px_rgba(0,0,0,0.85)]"
      style={{
        animation: "avapbot-idle-float 3s ease-in-out infinite",
      }}
    >
      <defs>
        {/* Shading & Lighting Gradients */}
        <radialGradient
          id="mascotVisorDark"
          cx="50%"
          cy="40%"
          r="65%"
          fx="45%"
          fy="30%"
        >
          <stop offset="0%" stopColor="#252A30" />
          <stop offset="60%" stopColor="#121518" />
          <stop offset="100%" stopColor="#08090A" />
        </radialGradient>

        <linearGradient id="mascotShell" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#E6E9F0" />
          <stop offset="40%" stopColor="#CED4DA" />
          <stop offset="85%" stopColor="#868E96" />
          <stop offset="100%" stopColor="#495057" />
        </linearGradient>

        <linearGradient id="mascotVioletGlow" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#C4B5FD" />
          <stop offset="100%" stopColor="#8B5CF6" />
        </linearGradient>

        <radialGradient
          id="thrusterJet"
          cx="50%"
          cy="0%"
          r="80%"
          fx="50%"
          fy="0%"
        >
          <stop offset="0%" stopColor="#C4B5FD" stopOpacity="0.95" />
          <stop offset="40%" stopColor="#8B5CF6" stopOpacity="0.75" />
          <stop offset="100%" stopColor="#7C3AED" stopOpacity="0" />
        </radialGradient>

        {/* Specular glass reflection */}
        <linearGradient id="glassSheen" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.5" />
          <stop offset="45%" stopColor="#FFFFFF" stopOpacity="0.1" />
          <stop offset="55%" stopColor="#FFFFFF" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Thruster Jet Flame (Pulsing levitation energy) */}
      <g className="animate-pulse">
        <ellipse cx="55" cy="103" rx="13" ry="5" fill="#A78BFA" opacity="0.6" />
        <polygon points="46,103 55,116 64,103" fill="url(#thrusterJet)" />
        <ellipse cx="55" cy="104" rx="7" ry="2.5" fill="#FFFFFF" opacity="0.8" />
      </g>

      {/* Robot Torso & Chest Engine */}
      <g id="torso">
        {/* Core chassis */}
        <rect
          x="38"
          y="68"
          width="34"
          height="32"
          rx="12"
          fill="url(#mascotShell)"
          stroke="#495057"
          strokeWidth="1.2"
        />

        {/* Chest Plate with AVAPSTER Geometric Symbol */}
        <rect
          x="44"
          y="74"
          width="22"
          height="20"
          rx="6"
          fill="#0D1117"
          stroke="#A78BFA"
          strokeWidth="0.8"
        />

        {/* Geometric 'A' glowing brand core */}
        <path
          d="M55 77L61 90H58L56.5 86.5H53.5L52 90H49L55 77Z"
          fill="url(#mascotVioletGlow)"
        />
        <polygon points="55,80 56,84 54,84" fill="#0D1117" />
        <circle cx="55" cy="88" r="1" fill="#FFFFFF" />

        {/* Mini status indicator LEDs */}
        <circle cx="48" cy="72" r="1.2" fill="#34D399" />
        <circle cx="62" cy="72" r="1.2" fill="#A78BFA" />
      </g>

      {/* Antenna with Blinking Violet Orb */}
      <g id="antenna">
        <line
          x1="55"
          y1="22"
          x2="55"
          y2="10"
          stroke="#868E96"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <circle
          cx="55"
          cy="9"
          r="4"
          fill="url(#mascotVioletGlow)"
          className="animate-pulse"
        />
        <circle cx="54" cy="8" r="1.2" fill="#FFFFFF" opacity="0.9" />
      </g>

      {/* Left Robotic Ear / Audio Sensor */}
      <rect
        x="18"
        y="36"
        width="6"
        height="14"
        rx="3"
        fill="#495057"
        stroke="#868E96"
        strokeWidth="1"
      />
      <circle cx="21" cy="43" r="1.5" fill="#A78BFA" />

      {/* Right Robotic Ear / Audio Sensor */}
      <rect
        x="86"
        y="36"
        width="6"
        height="14"
        rx="3"
        fill="#495057"
        stroke="#868E96"
        strokeWidth="1"
      />
      <circle cx="89" cy="43" r="1.5" fill="#A78BFA" />

      {/* 3D Helmet Head */}
      <g id="head">
        {/* Outer White Helmet */}
        <rect
          x="21"
          y="20"
          width="68"
          height="50"
          rx="22"
          fill="url(#mascotShell)"
          stroke="#495057"
          strokeWidth="1.5"
        />

        {/* Glossy Black Curved Visor Screen */}
        <rect
          x="26"
          y="25"
          width="58"
          height="40"
          rx="17"
          fill="url(#mascotVisorDark)"
          stroke="#1F2429"
          strokeWidth="1.5"
        />

        {/* Visor Glass Reflection */}
        <path
          d="M28 32C32 27 42 26 55 26C68 26 78 27 82 32C78 36 68 37 55 37C42 37 32 36 28 32Z"
          fill="url(#glassSheen)"
        />

        {/* Dynamic LED Expressive Eyes per Section */}
        <MascotEyes state={state} isHovered={isHovered} />
      </g>

      {/* Left & Right Articulated Robotic Arms & Props */}
      <MascotArmsAndProps state={state} />
    </svg>
  );
};

/**
 * Expressive Digital LED Visor Eyes
 */
const MascotEyes: React.FC<{ state: MascotState; isHovered: boolean }> = ({
  state,
  isHovered,
}) => {
  // If hovered or in hero -> Happy smiling eyes
  if (isHovered || state === "hero") {
    return (
      <g id="eyes-happy">
        {/* Left Curved Happy Eye */}
        <path
          d="M38 46C38 41 43 38 47 41C49 42 50 45 49 47"
          stroke="#A78BFA"
          strokeWidth="3.2"
          strokeLinecap="round"
          fill="none"
          className="drop-shadow-[0_0_6px_#A78BFA]"
        />
        {/* Right Curved Happy Eye */}
        <path
          d="M61 46C61 41 66 38 70 41C72 42 73 45 72 47"
          stroke="#A78BFA"
          strokeWidth="3.2"
          strokeLinecap="round"
          fill="none"
          className="drop-shadow-[0_0_6px_#A78BFA]"
        />
        {/* Little cyber blushing cheeks */}
        <ellipse cx="36" cy="51" rx="2.5" ry="1.2" fill="#F472B6" opacity="0.6" />
        <ellipse cx="74" cy="51" rx="2.5" ry="1.2" fill="#F472B6" opacity="0.6" />
      </g>
    );
  }

  // About Section -> Curious focused gaze looking left towards the content
  if (state === "about") {
    return (
      <g id="eyes-curious">
        <circle
          cx="42"
          cy="44"
          r="4.5"
          fill="#A78BFA"
          className="drop-shadow-[0_0_7px_#A78BFA]"
        />
        <circle cx="40" cy="42" r="1.5" fill="#FFFFFF" />
        <circle
          cx="64"
          cy="44"
          r="4.5"
          fill="#A78BFA"
          className="drop-shadow-[0_0_7px_#A78BFA]"
        />
        <circle cx="62" cy="42" r="1.5" fill="#FFFFFF" />
      </g>
    );
  }

  // Founders / Team Section -> Starry Celebration Eyes
  if (state === "founders") {
    return (
      <g id="eyes-stars">
        {/* Left Star */}
        <path
          d="M44 38L45.5 42.5L50 44L45.5 45.5L44 50L42.5 45.5L38 44L42.5 42.5Z"
          fill="#FDE047"
          className="drop-shadow-[0_0_8px_#FDE047]"
        />
        {/* Right Star */}
        <path
          d="M66 38L67.5 42.5L72 44L67.5 45.5L66 50L64.5 45.5L60 44L64.5 42.5Z"
          fill="#FDE047"
          className="drop-shadow-[0_0_8px_#FDE047]"
        />
      </g>
    );
  }

  // Services Section -> Analytical Scanning Visor
  if (state === "services") {
    return (
      <g id="eyes-scanner">
        <line
          x1="36"
          y1="44"
          x2="74"
          y2="44"
          stroke="#60A5FA"
          strokeWidth="3"
          strokeLinecap="round"
          className="drop-shadow-[0_0_8px_#60A5FA]"
        />
        <circle cx="55" cy="44" r="3" fill="#FFFFFF" className="animate-ping" />
      </g>
    );
  }

  // Work / Portfolio Section -> Winking Thumbs-Up Confidence
  if (state === "work") {
    return (
      <g id="eyes-wink">
        {/* Left open bright eye */}
        <circle
          cx="43"
          cy="44"
          r="4.8"
          fill="#A78BFA"
          className="drop-shadow-[0_0_7px_#A78BFA]"
        />
        <circle cx="41.5" cy="42.5" r="1.6" fill="#FFFFFF" />
        {/* Right winking eye */}
        <path
          d="M63 46L68 42L73 46"
          stroke="#A78BFA"
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          className="drop-shadow-[0_0_6px_#A78BFA]"
        />
      </g>
    );
  }

  // Approach & Why Avapster -> Tech Blueprint / Engineering Focus
  if (state === "approach" || state === "why-avapster") {
    return (
      <g id="eyes-blueprint">
        <rect
          x="39"
          y="40"
          width="9"
          height="7"
          rx="2"
          fill="none"
          stroke="#34D399"
          strokeWidth="2"
          className="drop-shadow-[0_0_6px_#34D399]"
        />
        <rect
          x="62"
          y="40"
          width="9"
          height="7"
          rx="2"
          fill="none"
          stroke="#34D399"
          strokeWidth="2"
          className="drop-shadow-[0_0_6px_#34D399]"
        />
        <line x1="48" y1="43.5" x2="62" y2="43.5" stroke="#34D399" strokeWidth="1.5" />
      </g>
    );
  }

  // Contact Section -> Developer Coding Eyes / Friendly Smile
  return (
    <g id="eyes-contact">
      <circle
        cx="44"
        cy="43"
        r="4.5"
        fill="#A78BFA"
        className="drop-shadow-[0_0_7px_#A78BFA]"
      />
      <circle cx="42.5" cy="41.5" r="1.5" fill="#FFFFFF" />
      <circle
        cx="66"
        cy="43"
        r="4.5"
        fill="#A78BFA"
        className="drop-shadow-[0_0_7px_#A78BFA]"
      />
      <circle cx="64.5" cy="41.5" r="1.5" fill="#FFFFFF" />
      {/* Friendly digital mouth line */}
      <path
        d="M51 51C53 53 57 53 59 51"
        stroke="#A78BFA"
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
      />
    </g>
  );
};

/**
 * Articulated Arms, Gestures and Props per Section
 */
const MascotArmsAndProps: React.FC<{ state: MascotState }> = ({ state }) => {
  // Hero: Waving Hand animation
  if (state === "hero") {
    return (
      <g id="hero-arms">
        {/* Left arm resting */}
        <path
          d="M38 74C30 78 28 84 30 89"
          stroke="#CED4DA"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <circle cx="30" cy="90" r="3.5" fill="#868E96" />

        {/* Right Arm Waving up high */}
        <g style={{ transformOrigin: "72px 74px", animation: "avapbot-wave 1.4s ease-in-out infinite" }}>
          <path
            d="M72 74C80 70 86 60 90 52"
            stroke="#CED4DA"
            strokeWidth="5"
            strokeLinecap="round"
          />
          {/* Hand palm & fingers */}
          <circle cx="91" cy="51" r="4.2" fill="#A78BFA" />
          <path
            d="M89 47L92 44M93 48L96 46M93 52L97 52"
            stroke="#A78BFA"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </g>
      </g>
    );
  }

  // About: Pointing towards the left content
  if (state === "about") {
    return (
      <g id="about-arms">
        {/* Left arm pointing dramatically towards the website content */}
        <g>
          <path
            d="M38 75C26 73 16 68 8 64"
            stroke="#CED4DA"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <circle cx="7" cy="63" r="4" fill="#A78BFA" />
          {/* Extended pointing index finger */}
          <line
            x1="7"
            y1="63"
            x2="-2"
            y2="60"
            stroke="#A78BFA"
            strokeWidth="2.8"
            strokeLinecap="round"
          />
          {/* Directional beam ripple */}
          <circle
            cx="-2"
            cy="60"
            r="4"
            stroke="#C4B5FD"
            strokeWidth="1.2"
            fill="none"
            className="animate-ping"
          />
        </g>
        {/* Right arm balanced on hip */}
        <path
          d="M72 75C78 80 77 86 73 90"
          stroke="#CED4DA"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <circle cx="73" cy="91" r="3.5" fill="#868E96" />
      </g>
    );
  }

  // Founders / Team: Celebration, both hands up
  if (state === "founders") {
    return (
      <g id="founders-arms">
        {/* Left arm up */}
        <path
          d="M38 74C30 65 24 55 20 45"
          stroke="#CED4DA"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <circle cx="19" cy="44" r="4" fill="#FDE047" />

        {/* Right arm up */}
        <path
          d="M72 74C80 65 86 55 90 45"
          stroke="#CED4DA"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <circle cx="91" cy="44" r="4" fill="#FDE047" />

        {/* Floating party sparkles */}
        <circle cx="14" cy="36" r="1.8" fill="#A78BFA" className="animate-ping" />
        <circle cx="96" cy="36" r="1.8" fill="#FDE047" className="animate-ping" />
        <circle cx="55" cy="5" r="2.2" fill="#34D399" className="animate-pulse" />
      </g>
    );
  }

  // Services: Holding / gesturing to a holographic service sphere
  if (state === "services") {
    return (
      <g id="services-arms">
        {/* Left arm holding holographic sphere */}
        <path
          d="M38 75C28 80 20 82 14 78"
          stroke="#CED4DA"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <circle cx="13" cy="77" r="4" fill="#60A5FA" />

        {/* Holographic glowing orb with tech lines */}
        <circle
          cx="10"
          cy="70"
          r="9"
          fill="#3B82F6"
          fillOpacity="0.25"
          stroke="#60A5FA"
          strokeWidth="1.2"
          strokeDasharray="3 2"
          className="animate-spin"
          style={{ animationDuration: "6s" }}
        />
        <circle cx="10" cy="70" r="3.5" fill="#60A5FA" />

        {/* Right arm gesturing forward */}
        <path
          d="M72 75C80 80 84 84 86 89"
          stroke="#CED4DA"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <circle cx="87" cy="90" r="3.5" fill="#868E96" />
      </g>
    );
  }

  // Work: Big 3D Thumbs-Up
  if (state === "work") {
    return (
      <g id="work-arms">
        {/* Left arm resting on body */}
        <path
          d="M38 75C32 80 30 86 33 91"
          stroke="#CED4DA"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <circle cx="33" cy="92" r="3.5" fill="#868E96" />

        {/* Right arm delivering prominent Thumbs-Up */}
        <path
          d="M72 75C82 78 88 80 92 76"
          stroke="#CED4DA"
          strokeWidth="5"
          strokeLinecap="round"
        />
        {/* Fist */}
        <circle cx="93" cy="75" r="4.5" fill="#CED4DA" stroke="#868E96" strokeWidth="1" />
        {/* Upright Thumb */}
        <line
          x1="93"
          y1="75"
          x2="93"
          y2="64"
          stroke="#A78BFA"
          strokeWidth="4"
          strokeLinecap="round"
          className="drop-shadow-[0_0_6px_#A78BFA]"
        />
        <circle cx="93" cy="62" r="2.5" fill="#C4B5FD" />
        {/* Sparkle on thumb */}
        <circle cx="97" cy="60" r="1.5" fill="#FFFFFF" className="animate-ping" />
      </g>
    );
  }

  // Approach & Why-Avapster: Orbiting Tech Icons
  if (state === "approach" || state === "why-avapster") {
    return (
      <g id="tech-arms">
        {/* Left & Right hands in tech wizard posture */}
        <path
          d="M38 75C28 78 22 75 18 70"
          stroke="#CED4DA"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <circle cx="17" cy="69" r="4" fill="#34D399" />

        <path
          d="M72 75C82 78 88 75 92 70"
          stroke="#CED4DA"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <circle cx="93" cy="69" r="4" fill="#34D399" />

        {/* Orbiting micro tech cubes / icons */}
        <g className="animate-spin" style={{ transformOrigin: "55px 70px", animationDuration: "8s" }}>
          {/* React atom node */}
          <circle cx="14" cy="52" r="3.5" fill="#0EA5E9" opacity="0.9" />
          {/* Cloud micro badge */}
          <circle cx="96" cy="52" r="3.5" fill="#A78BFA" opacity="0.9" />
          {/* AI Sparkle node */}
          <circle cx="55" cy="115" r="3" fill="#34D399" opacity="0.9" />
        </g>
      </g>
    );
  }

  // Contact: Holographic Laptop & Typing Hands
  return (
    <g id="contact-arms">
      {/* Mini glowing Holographic Laptop on chest/front */}
      <g id="laptop" transform="translate(38, 78)">
        {/* Laptop base */}
        <polygon points="0,18 34,18 30,22 4,22" fill="#374151" stroke="#4B5563" strokeWidth="0.8" />
        {/* Keyboard illuminated */}
        <rect x="6" y="19" width="22" height="2" fill="#A78BFA" opacity="0.8" />
        {/* Laptop Screen tilted up */}
        <polygon
          points="2,18 32,18 31,5 3,5"
          fill="#111827"
          stroke="#A78BFA"
          strokeWidth="1"
        />
        {/* Code lines on screen */}
        <line x1="6" y1="8" x2="20" y2="8" stroke="#34D399" strokeWidth="1" />
        <line x1="6" y1="11" x2="28" y2="11" stroke="#A78BFA" strokeWidth="1" />
        <line x1="6" y1="14" x2="16" y2="14" stroke="#60A5FA" strokeWidth="1" />
        {/* Screen glow onto mascot face */}
        <polygon points="3,5 31,5 34,-2 0,-2" fill="#A78BFA" opacity="0.08" />
      </g>

      {/* Typing robotic hands */}
      <path
        d="M38 75C34 82 36 90 41 94"
        stroke="#CED4DA"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <circle cx="42" cy="94" r="3" fill="#868E96" />

      <path
        d="M72 75C76 82 74 90 69 94"
        stroke="#CED4DA"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <circle cx="68" cy="94" r="3" fill="#868E96" />
    </g>
  );
};

