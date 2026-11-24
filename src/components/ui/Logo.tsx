import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  variant?: "full" | "icon" | "mark";
  theme?: "dark" | "light";
  className?: string;
  iconSize?: number;
  showSubtitle?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  variant = "full",
  theme = "dark",
  className,
  iconSize = 34,
  showSubtitle = false,
}) => {
  const isDark = theme === "dark";
  const whiteText = isDark ? "text-[#F5F5F0]" : "text-[#080A09]";
  const subText = isDark ? "text-[#A5ADA2]" : "text-[#626A5F]";
  const violetAccent = "#A78BFA";

  return (
    <Link
      href="#hero"
      aria-label="AVAPSTER - Return to home"
      className={cn(
        "inline-flex items-center gap-3.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A78BFA] rounded py-1",
        className
      )}
    >
      {/* Signature Custom Geometric 'A' Symbol in Violet Accent */}
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 transition-transform duration-300 group-hover:scale-105"
        aria-hidden="true"
      >
        {/* Custom Precision Geometric A Icon */}
        {/* Outer angled frame */}
        <path
          d="M22 4L38 38H30.5L25.8 28H18.2L13.5 38H6L22 4Z"
          fill={violetAccent}
        />
        {/* Inner void cut forming precision engineering chevron */}
        <polygon points="22,13 25,23 19,23" fill={isDark ? "#080A09" : "#F5F5F0"} />
        {/* Five founders rhythmic architectural nodes across the crossbar */}
        <circle cx="10" cy="38" r="1.5" fill={isDark ? "#F5F5F0" : "#080A09"} />
        <circle cx="18" cy="28" r="1.5" fill={violetAccent} />
        <circle cx="22" cy="4" r="1.8" fill={violetAccent} />
        <circle cx="26" cy="28" r="1.5" fill={violetAccent} />
        <circle cx="34" cy="38" r="1.5" fill={isDark ? "#F5F5F0" : "#080A09"} />
      </svg>

      {/* Signature Wordmark: Violet 'A' + White 'VAPSTER' */}
      {variant !== "icon" && (
        <div className="flex flex-col text-left leading-none select-none tracking-tight">
          <div
            className={cn(
              "font-bold font-heading uppercase transition-colors tracking-[0.16em] flex items-baseline",
              iconSize > 32 ? "text-xl sm:text-2xl" : "text-lg"
            )}
          >
            {/* The signature Violet A */}
            <span className="text-[#A78BFA] font-extrabold mr-[1px]">A</span>
            {/* The VAPSTER text in white */}
            <span className={whiteText}>VAPSTER</span>
          </div>

          {showSubtitle && (
            <span
              className={cn(
                "text-[7.5px] sm:text-[8px] font-mono font-medium tracking-[0.38em] uppercase mt-1",
                subText
              )}
            >
              TECHNOLOGIES
            </span>
          )}
        </div>
      )}
    </Link>
  );
};
