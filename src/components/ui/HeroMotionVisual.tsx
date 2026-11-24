"use client";

import React, { useEffect, useRef, useState } from "react";

interface ElementState {
  id: number;
  name: string;
  discipline: string;
  targetX: number;
  targetY: number;
  currentX: number;
  currentY: number;
  initialX: number;
  initialY: number;
}

export const HeroMotionVisual: React.FC<{ className?: string }> = ({ className = "" }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const svgRef = useRef<SVGSVGElement | null>(null);
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    let animationFrameId: number;
    const startTime = performance.now();

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      const timer = setTimeout(() => setProgress(1), 0);
      return () => clearTimeout(timer);
    }

    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      mouse.targetX = (e.clientX / innerWidth - 0.5) * 20;
      mouse.targetY = (e.clientY / innerHeight - 0.5) * 20;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const p = Math.min(elapsed / 2200, 1);
      const eased = p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2;
      setProgress(eased);

      // Smooth mouse interpolation directly on SVG ref to avoid React render cycles
      mouse.x += (mouse.targetX - mouse.x) * 0.08;
      mouse.y += (mouse.targetY - mouse.y) * 0.08;

      if (svgRef.current) {
        svgRef.current.style.transform = `translate3d(${mouse.x}px, ${mouse.y}px, 0)`;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const elements: ElementState[] = [
    {
      id: 1,
      name: "01",
      discipline: "Architecture",
      initialX: 250,
      initialY: 40,
      targetX: 250,
      targetY: 80,
      currentX: 0,
      currentY: 0,
    },
    {
      id: 2,
      name: "02",
      discipline: "Engineering",
      initialX: 90,
      initialY: 130,
      targetX: 130,
      targetY: 170,
      currentX: 0,
      currentY: 0,
    },
    {
      id: 3,
      name: "03",
      discipline: "Cloud",
      initialX: 410,
      initialY: 120,
      targetX: 370,
      targetY: 170,
      currentX: 0,
      currentY: 0,
    },
    {
      id: 4,
      name: "04",
      discipline: "Intelligence",
      initialX: 110,
      initialY: 380,
      targetX: 170,
      targetY: 330,
      currentX: 0,
      currentY: 0,
    },
    {
      id: 5,
      name: "05",
      discipline: "Experience",
      initialX: 390,
      initialY: 390,
      targetX: 330,
      targetY: 330,
      currentX: 0,
      currentY: 0,
    },
  ];

  const interpolated = elements.map((el) => {
    const x = el.initialX + (el.targetX - el.initialX) * progress;
    const y = el.initialY + (el.targetY - el.initialY) * progress;
    return { ...el, currentX: x, currentY: y };
  });

  return (
    <div
      ref={containerRef}
      className={`relative w-full aspect-[5/4] max-w-xl mx-auto select-none ${className}`}
      aria-label="Interactive geometric composition representing the five interconnected minds of AVAPSTER"
      role="img"
    >
      <svg
        ref={svgRef}
        viewBox="0 0 500 420"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full will-change-transform"
      >
        <defs>
          <linearGradient id="limeLineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#A78BFA" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#C4B5FD" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#A78BFA" stopOpacity="0.8" />
          </linearGradient>
        </defs>

        {/* Technical Architectural Perimeter Guide */}
        <rect
          x="30"
          y="30"
          width="440"
          height="360"
          stroke="#FFFFFF"
          strokeOpacity="0.06"
          strokeWidth="1"
          strokeDasharray="4 6"
        />

        {/* Center Target Indicator */}
        <line x1="250" y1="210" x2="250" y2="230" stroke="#A78BFA" strokeWidth="1" strokeOpacity="0.4" />
        <line x1="240" y1="220" x2="260" y2="220" stroke="#A78BFA" strokeWidth="1" strokeOpacity="0.4" />

        {/* Thin Connecting Lines forming Coordinated Pentagonal Matrix */}
        {progress > 0.3 && (
          <g opacity={Math.min((progress - 0.3) * 1.5, 1)}>
            <line
              x1={interpolated[0].currentX}
              y1={interpolated[0].currentY}
              x2={interpolated[1].currentX}
              y2={interpolated[1].currentY}
              stroke="url(#limeLineGrad)"
              strokeWidth="1.2"
            />
            <line
              x1={interpolated[0].currentX}
              y1={interpolated[0].currentY}
              x2={interpolated[2].currentX}
              y2={interpolated[2].currentY}
              stroke="url(#limeLineGrad)"
              strokeWidth="1.2"
            />
            <line
              x1={interpolated[1].currentX}
              y1={interpolated[1].currentY}
              x2={interpolated[3].currentX}
              y2={interpolated[3].currentY}
              stroke="url(#limeLineGrad)"
              strokeWidth="1.2"
            />
            <line
              x1={interpolated[2].currentX}
              y1={interpolated[2].currentY}
              x2={interpolated[4].currentX}
              y2={interpolated[4].currentY}
              stroke="url(#limeLineGrad)"
              strokeWidth="1.2"
            />
            <line
              x1={interpolated[3].currentX}
              y1={interpolated[3].currentY}
              x2={interpolated[4].currentX}
              y2={interpolated[4].currentY}
              stroke="#A78BFA"
              strokeWidth="1.2"
              strokeDasharray="4 4"
            />

            <line
              x1={interpolated[1].currentX}
              y1={interpolated[1].currentY}
              x2={interpolated[2].currentX}
              y2={interpolated[2].currentY}
              stroke="#FFFFFF"
              strokeOpacity="0.15"
              strokeWidth="1"
            />
            <line
              x1={interpolated[0].currentX}
              y1={interpolated[0].currentY}
              x2="250"
              y2="220"
              stroke="#A78BFA"
              strokeOpacity="0.5"
              strokeWidth="1"
              strokeDasharray="2 3"
            />
          </g>
        )}

        {/* Central Core Harmonic Nexus Node */}
        {progress > 0.6 && (
          <g opacity={Math.min((progress - 0.6) * 2.5, 1)}>
            <circle cx="250" cy="220" r="8" fill="#111411" stroke="#A78BFA" strokeWidth="1.5" />
            <circle cx="250" cy="220" r="2.5" fill="#A78BFA" />
          </g>
        )}

        {/* Five Distinctive Geometric Elements */}
        <g transform={`translate(${interpolated[0].currentX}, ${interpolated[0].currentY})`}>
          <polygon
            points="0,-18 16,-9 16,9 0,18 -16,9 -16,-9"
            fill="#A78BFA"
            stroke="#080A09"
            strokeWidth="2"
          />
          <circle cx="0" cy="0" r="3" fill="#080A09" />
          <text
            x="0"
            y="-24"
            textAnchor="middle"
            fill="#A78BFA"
            fontFamily="'Space Grotesk', monospace"
            fontSize="8"
            fontWeight="700"
            letterSpacing="1"
          >
            01 / ARCHITECTURE
          </text>
        </g>

        <g transform={`translate(${interpolated[1].currentX}, ${interpolated[1].currentY})`}>
          <rect
            x="-14"
            y="-14"
            width="28"
            height="28"
            fill="#111411"
            stroke="#F5F5F0"
            strokeWidth="1.5"
            transform="rotate(45)"
          />
          <circle cx="0" cy="0" r="2.5" fill="#A78BFA" />
          <text
            x="-22"
            y="-20"
            textAnchor="end"
            fill="#A5ADA2"
            fontFamily="'Space Grotesk', monospace"
            fontSize="8"
            fontWeight="600"
            letterSpacing="1"
          >
            02 / SYSTEMS
          </text>
        </g>

        <g transform={`translate(${interpolated[2].currentX}, ${interpolated[2].currentY})`}>
          <rect
            x="-14"
            y="-14"
            width="28"
            height="28"
            fill="#111411"
            stroke="#C4B5FD"
            strokeWidth="1.8"
          />
          <line x1="-14" y1="0" x2="14" y2="0" stroke="#C4B5FD" strokeWidth="1" />
          <line x1="0" y1="-14" x2="0" y2="14" stroke="#C4B5FD" strokeWidth="1" />
          <text
            x="22"
            y="-20"
            textAnchor="start"
            fill="#C4B5FD"
            fontFamily="'Space Grotesk', monospace"
            fontSize="8"
            fontWeight="600"
            letterSpacing="1"
          >
            03 / CLOUD
          </text>
        </g>

        <g transform={`translate(${interpolated[3].currentX}, ${interpolated[3].currentY})`}>
          <circle cx="0" cy="0" r="15" fill="#111411" stroke="#F5F5F0" strokeWidth="1.2" />
          <circle cx="0" cy="0" r="6" fill="#A78BFA" />
          <text
            x="-22"
            y="28"
            textAnchor="end"
            fill="#A5ADA2"
            fontFamily="'Space Grotesk', monospace"
            fontSize="8"
            fontWeight="600"
            letterSpacing="1"
          >
            04 / INTELLIGENCE
          </text>
        </g>

        <g transform={`translate(${interpolated[4].currentX}, ${interpolated[4].currentY})`}>
          <circle cx="0" cy="0" r="16" fill="none" stroke="#A78BFA" strokeWidth="1.8" strokeDasharray="3 3" />
          <rect x="-5" y="-5" width="10" height="10" fill="#F5F5F0" />
          <text
            x="22"
            y="28"
            textAnchor="start"
            fill="#A78BFA"
            fontFamily="'Space Grotesk', monospace"
            fontSize="8"
            fontWeight="600"
            letterSpacing="1"
          >
            05 / EXPERIENCE
          </text>
        </g>

        <text x="36" y="52" fill="#A5ADA2" fontFamily="'Space Grotesk', monospace" fontSize="8" letterSpacing="1.5">
          STATUS: {progress >= 1 ? "COORDINATED_STATE // 100%" : "CONVERGING // PHASE_INIT"}
        </text>
        <text x="464" y="52" textAnchor="end" fill="#A78BFA" fontFamily="'Space Grotesk', monospace" fontSize="8" letterSpacing="1.5">
          AVAPSTER_SYS.05
        </text>
        <text x="36" y="378" fill="#A5ADA2" fontFamily="'Inter', monospace" fontSize="7.5" letterSpacing="1">
          FIVE CONVERGENT DISCIPLINES
        </text>
        <text x="464" y="378" textAnchor="end" fill="#A5ADA2" fontFamily="'Inter', monospace" fontSize="7.5" letterSpacing="1">
          ENTERPRISE ARCHITECTURE
        </text>
      </svg>
    </div>
  );
};
