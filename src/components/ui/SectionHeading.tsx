import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: "left" | "center" | "right";
  theme?: "light" | "dark";
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  highlight,
  description,
  align = "left",
  theme = "light",
  className,
}) => {
  const isDark = theme === "dark";
  const alignClasses = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end ml-auto",
  };

  return (
    <div className={cn("flex flex-col max-w-4xl mb-12 sm:mb-16", alignClasses[align], className)}>
      {badge && (
        <div className="flex items-center gap-2 mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-[#E85B36]" />
          <span className="text-[11px] font-mono uppercase tracking-[0.28em] text-[#E85B36] font-semibold">
            {badge}
          </span>
        </div>
      )}

      <h2
        className={cn(
          "text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight font-heading leading-[1.08]",
          isDark ? "text-[#F5F4EF]" : "text-[#171717]"
        )}
      >
        {title}{" "}
        {highlight && (
          <span className="text-[#E85B36] font-normal italic font-heading">
            {highlight}
          </span>
        )}
      </h2>

      {description && (
        <p
          className={cn(
            "mt-6 text-base sm:text-lg font-sans leading-relaxed max-w-2xl",
            isDark ? "text-[#D9D8D2]/80" : "text-[#737373]"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
};
