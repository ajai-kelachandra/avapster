import Link from "next/link";
import { cn } from "@/lib/utils";

export function LogoMark({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 3 20 21M12 3 4 21M7.5 15h9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="12" cy="3" r="1.9" fill="var(--color-accent)" />
    </svg>
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="AVAPSTER home"
      className={cn("inline-flex items-center text-ink", className)}
    >
      <span className="text-[13px] font-medium tracking-[0.22em]">AVAPSTER</span>
    </Link>
  );
}
