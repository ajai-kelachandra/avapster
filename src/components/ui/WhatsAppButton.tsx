import React from "react";
import { MessageCircle, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface WhatsAppButtonProps {
  phoneNumber?: string;
  prefilledMessage?: string;
  label?: string;
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "lime" | "outline" | "solid";
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  phoneNumber = "919633162989",
  prefilledMessage = "Hello AVAPSTER Technologies, I am interested in discussing an enterprise technology engagement.",
  label = "WhatsApp Conversation",
  className,
  size = "md",
  variant = "lime",
}) => {
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    prefilledMessage
  )}`;

  const sizeStyles = {
    sm: "text-xs px-4 py-2.5 gap-2 tracking-wider uppercase font-semibold",
    md: "text-xs px-6 py-3.5 gap-2.5 tracking-widest uppercase font-semibold",
    lg: "text-sm px-8 py-4 gap-3 tracking-widest uppercase font-semibold",
  };

  const variantStyles = {
    lime:
      "bg-[#A78BFA] text-[#080A09] hover:bg-[#C4B5FD] active:bg-[#906fe7] border border-[#A78BFA] hover:shadow-[0_0_24px_rgba(167,139,250,0.35)]",
    solid:
      "bg-[#111411] text-[#F5F5F0] hover:bg-[#181C18] border border-white/20 hover:border-[#A78BFA] hover:text-[#C4B5FD]",
    outline:
      "bg-transparent text-[#A78BFA] border border-[#A78BFA]/60 hover:border-[#A78BFA] hover:bg-[#A78BFA] hover:text-[#080A09]",
  };

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Chat with AVAPSTER Technologies on WhatsApp: +${phoneNumber}`}
      className={cn(
        "inline-flex items-center justify-center font-sans transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A78BFA] group cursor-pointer rounded-none",
        sizeStyles[size],
        variantStyles[variant],
        className
      )}
    >
      <MessageCircle
        className="w-4 h-4 shrink-0 transition-transform duration-300 group-hover:scale-110"
        aria-hidden="true"
      />
      <span>{label}</span>
      <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </a>
  );
};
