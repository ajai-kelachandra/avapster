import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "lime-outline";
  size?: "sm" | "md" | "lg";
  href?: string;
  isExternal?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  href,
  isExternal = false,
  className,
  children,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-sans transition-all duration-300 select-none relative group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A78BFA] focus-visible:ring-offset-2 focus-visible:ring-offset-[#080A09] rounded-none";

  const sizeStyles = {
    sm: "text-xs px-4 py-2.5 tracking-wider uppercase font-medium",
    md: "text-xs px-6 py-3.5 tracking-widest uppercase font-semibold",
    lg: "text-sm px-8 py-4 tracking-widest uppercase font-semibold",
  };

  const variantStyles = {
    primary:
      "bg-[#A78BFA] text-[#080A09] hover:bg-[#C4B5FD] active:bg-[#906fe7] font-semibold border border-[#A78BFA] hover:shadow-[0_0_24px_rgba(167,139,250,0.3)]",
    secondary:
      "bg-[#111411] text-[#F5F5F0] hover:bg-[#181C18] border border-white/15 hover:border-[#A78BFA] hover:text-[#C4B5FD]",
    outline:
      "bg-transparent text-[#F5F5F0] border border-white/20 hover:border-[#A78BFA] hover:text-[#C4B5FD]",
    "lime-outline":
      "bg-transparent text-[#A78BFA] border border-[#A78BFA]/60 hover:border-[#A78BFA] hover:bg-[#A78BFA] hover:text-[#080A09]",
    ghost:
      "bg-transparent text-[#A5ADA2] hover:text-[#A78BFA] p-0",
  };

  const combinedClasses = cn(
    baseStyles,
    sizeStyles[size],
    variantStyles[variant],
    className
  );

  if (href) {
    return (
      <Link
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        className={combinedClasses}
      >
        <span className="relative z-10 flex items-center gap-2">{children}</span>
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </button>
  );
};
