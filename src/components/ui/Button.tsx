import { cn } from "@/lib/utils";

type Props = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: "primary" | "secondary";
  size?: "sm" | "md";
};

export function ButtonLink({ variant = "primary", size = "md", className, ...rest }: Props) {
  return (
    <a
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full text-[13px] font-medium transition-colors duration-200",
        size === "md" ? "h-10 px-5" : "h-8 px-4",
        variant === "primary"
          ? "bg-ink text-white hover:bg-accent"
          : "border border-line text-ink hover:border-ink",
        className
      )}
      {...rest}
    />
  );
}
