import { Reveal } from "./Reveal";
import { SectionMark } from "./SectionMark";

export function SectionHeader({
  label,
  title,
  children,
}: {
  label: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <Reveal className="max-w-2xl">
      <SectionMark label={label} />
      <h2 className="mt-3 text-2xl font-medium leading-[1.2] tracking-tight sm:text-3xl lg:text-[34px]">
        {title}
      </h2>
      {children && <p className="mt-5 text-sm leading-relaxed text-muted sm:text-base">{children}</p>}
    </Reveal>
  );
}
