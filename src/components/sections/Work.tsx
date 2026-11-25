import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { portfolioProjects, type PortfolioProject } from "@/data/portfolio";

/**
 * Bento layout (desktop, 4 columns x 2 rows):
 *
 *   [ 1 ][            ][  3  wide  ]
 *   [ 2 ][   0  big   ][ ink ][ 4 ]
 */
const placement = [
  "col-span-2 row-span-2 lg:col-span-1 lg:col-start-2 lg:row-start-1", // 0 big
  "lg:col-start-1 lg:row-start-1", // 1
  "lg:col-start-1 lg:row-start-2", // 2
  "col-span-2 lg:col-span-2 lg:col-start-3 lg:row-start-1", // 3 wide
  "lg:col-start-4 lg:row-start-2", // 4
  "lg:col-start-3 lg:row-start-2", // 5 phone
];

function Tile({ project, index }: { project: PortfolioProject; index: number }) {
  const big = index === 0;
  const phone = project.image.endsWith(".webp");
  return (
    <Reveal
      as="article"
      delay={index * 70}
      className={`group relative overflow-hidden rounded-2xl ${phone ? "bg-ink" : "bg-soft"} ${placement[index]}`}
    >
      <Image
        src={project.image}
        alt={`${project.title} preview`}
        fill
        sizes={big ? "(min-width: 1024px) 520px, 100vw" : "(min-width: 1024px) 300px, 50vw"}
        className={(phone ? "object-cover object-top " : "object-cover ") + "transition-transform duration-700 ease-out group-hover:scale-[1.04]"}
      />
      <div
        className={
          "absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent p-3.5 text-white transition-opacity duration-300 sm:p-4 " +
          (big ? "" : "lg:opacity-0 lg:group-hover:opacity-100")
        }
      >
        <p className={"text-[10px] uppercase tracking-wider text-white/70 " + (big ? "" : "hidden sm:block")}>{project.category}</p>
        <h3 className={"mt-1 font-medium leading-snug " + (big ? "text-sm sm:text-base" : "text-xs")}>
          {project.title}
        </h3>
        {big && (
          <p className="mt-1.5 hidden max-w-sm text-xs leading-relaxed text-white/80 sm:block">
            {project.description}
          </p>
        )}
      </div>
    </Reveal>
  );
}

export function Work() {
  return (
    <section id="work" className="border-t border-line">
      <div className="mx-auto max-w-[1200px] px-5 py-20 sm:px-8 sm:py-28">
        <SectionHeader label="Selected work" title="Things we have built" />

        <div className="mt-12 grid auto-rows-[170px] grid-cols-2 gap-3 sm:auto-rows-[200px] sm:gap-4 lg:grid-cols-[1fr_2.6fr_1fr_1fr] lg:auto-rows-[220px]">
          {portfolioProjects.slice(0, 6).map((p, i) => (
            <Tile key={p.id} project={p} index={i} />
          ))}

        </div>
      </div>
    </section>
  );
}
