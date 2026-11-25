"use client";

import Image from "next/image";
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { ButtonLink } from "@/components/ui/Button";
const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease },
});

/* ---------- small pieces ---------- */

function Arrow() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Sparkle({ size = 18, className }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path d="M12 0c.9 6.6 5.4 11.1 12 12-6.6.9-11.1 5.4-12 12-.9-6.6-5.4-11.1-12-12C6.6 11.1 11.1 6.6 12 0z" fill="currentColor" />
    </svg>
  );
}

function Avatars() {
  const list = [
    { src: "/images/founders/ajay-kc-v3.jpg", alt: "Ajay KC" },
    { src: "/images/founders/sree-lakshmi-v4.jpg", alt: "Sree Lakshmi" },
    { src: "/images/founders/amina-taher-v2.jpg", alt: "Amina Thaher" },
  ];
  return (
    <div className="flex items-center">
      {list.map((a, i) => (
        <span key={a.src} className={`relative h-7 w-7 overflow-hidden rounded-full border-2 border-white ${i ? "-ml-2" : ""}`}>
          <Image src={a.src} alt={a.alt} fill sizes="28px" className="object-cover object-top" />
        </span>
      ))}
      <span className="-ml-2 flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-white text-xs text-ink">+</span>
    </div>
  );
}

function RotatingBadge({ reduce }: { reduce: boolean | null }) {
  return (
    <div className="relative h-[56px] w-[56px]">
      <motion.svg
        viewBox="0 0 100 100"
        className="absolute inset-0"
        animate={reduce ? undefined : { rotate: 360 }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        aria-hidden="true"
      >
        <defs>
          <path id="circ" d="M50 50 m-38 0 a38 38 0 1 1 76 0 a38 38 0 1 1 -76 0" />
        </defs>
        <text fontSize="8.2" letterSpacing="2.6" fill="#171717" fontFamily="var(--font-sans)">
          <textPath href="#circ">BUILT WITH CARE • FIVE FOUNDERS • ONE TEAM •</textPath>
        </text>
      </motion.svg>
      <Sparkle size={16} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-ink" />
    </div>
  );
}

/* ---------- hero ---------- */

export function Hero() {
  const reduce = useReducedMotion();
  const mx = useMotionValue(0);
  const px = useSpring(mx, { stiffness: 60, damping: 18 });

  const onMove = (e: React.PointerEvent<HTMLElement>) => {
    if (reduce || e.pointerType !== "mouse") return;
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
  };

  const stageX = useTransform(px, (v) => v * -16);

  return (
    <section
      id="home"
      onPointerMove={onMove}
      className="relative flex flex-col overflow-hidden bg-paper pt-24 sm:pt-28"
    >
      {/* Side cards (desktop) */}
      <motion.aside
        initial={{ opacity: 0, y: 24, rotate: -14 }}
        animate={{ opacity: 1, y: 0, rotate: -8 }}
        transition={{ duration: 1, delay: 0.5, ease }}
        className="absolute left-[calc(50%-450px)] top-[250px] z-10 hidden w-[140px] lg:block"
      >
        <motion.div
          animate={reduce ? undefined : { y: [0, -8, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="rounded-[26px] border border-white bg-white p-5 shadow-[0_24px_50px_-26px_rgba(0,0,0,0.3)]"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#f1f0ec]">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" aria-hidden="true"><path d="M5 10v4M9 6v12M13 9v6M17 4v16M21 11v2" /></svg>
          </span>
          <p className="mt-3 text-xs font-semibold leading-snug tracking-tight">Turn ideas into products.</p>
          <p className="mt-1 text-[10px] leading-relaxed text-muted">Design, build and launch with one team.</p>
        </motion.div>
      </motion.aside>

      <motion.aside
        initial={{ opacity: 0, y: 24, rotate: 14 }}
        animate={{ opacity: 1, y: 0, rotate: 8 }}
        transition={{ duration: 1, delay: 0.65, ease }}
        className="absolute right-[calc(50%-450px)] top-[225px] z-10 hidden w-[140px] lg:block"
      >
        <motion.div
          animate={reduce ? undefined : { y: [0, 9, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="rounded-[26px] border border-white bg-white p-5 shadow-[0_24px_50px_-26px_rgba(0,0,0,0.3)]"
        >
          <Avatars />
          <p className="mt-3 text-xs font-semibold leading-snug tracking-tight">Talk to the founders directly.</p>
          <p className="mt-1 text-[10px] leading-relaxed text-muted">No layers, just a small team.</p>
        </motion.div>
      </motion.aside>

      {/* Rotating badge */}
      <motion.div {...fadeUp(1)} className="absolute right-[5%] top-[120px] z-10 hidden xl:right-[7%] lg:block">
        <RotatingBadge reduce={reduce} />
      </motion.div>

      <div className="relative z-20 mx-auto w-full max-w-[1200px] px-5 text-center sm:px-8">
        <motion.h1
          {...fadeUp(0.05)}
          className="mx-auto max-w-3xl font-display text-[clamp(24px,3.6vw,40px)] leading-[1.15] tracking-[-0.03em] text-ink"
        >
          <span className="font-extrabold">Building digital products</span>
          <br />
          <span className="font-medium text-muted">that move businesses forward.</span>
        </motion.h1>
        {/* <motion.p {...fadeUp(0.2)} className="mx-auto mt-4 max-w-xs text-xs leading-relaxed text-muted sm:text-[13px]">
          We design and develop modern websites, applications, and digital solutions that turn
          ambitious ideas into reality.
        </motion.p> */}
        <motion.div {...fadeUp(0.32)} className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <ButtonLink href="#work" className="h-9 w-full text-xs sm:w-auto">
            Explore Our Work <Arrow />
          </ButtonLink>
          <ButtonLink href="/#contact" variant="secondary" className="h-10 w-full bg-white/60 text-[13px] sm:w-auto">
            <span className="h-2 w-2 rounded-full bg-accent" />
            Let&apos;s Talk
          </ButtonLink>
        </motion.div>
      </div>

      {/* Stage */}
      <div className="relative mx-auto mt-8 aspect-[3/2] w-full max-w-[620px] flex-none overflow-hidden sm:mt-6">
        <motion.div
          style={{ x: stageX }}
          className="h-full"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.35, ease }}
        >
          <motion.div
            animate={reduce ? undefined : { scale: [1, 1.025, 1] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
            style={{ transformOrigin: "50% 100%" }}
            className="relative h-full w-full"
          >
            <Image
              src="/images/hero-center.png"
              alt="Glass interface cards labelled Focus, Ideas and Plan orbiting a portrait"
              fill
              priority
              sizes="(min-width: 620px) 620px, 100vw"
              className="object-cover object-bottom [mask-image:linear-gradient(to_right,transparent,#000_12%,#000_88%,transparent)]"
            />
            <span aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-paper to-transparent" />
          </motion.div>
        </motion.div>
      </div>

      {/* Corner notes */}
      <motion.div {...fadeUp(1.1)} className="absolute bottom-32 left-[5%] hidden max-w-[180px] text-left text-[10px] leading-snug text-muted lg:block xl:left-[7%]">
        <span className="mb-3 block h-px w-7 bg-ink/30" />
        Five founders.
        <br />
        One small team.
      </motion.div>
      <motion.div {...fadeUp(1.2)} className="absolute bottom-32 right-[5%] hidden items-center gap-3 text-left text-[10px] leading-snug text-muted lg:flex xl:right-[7%]">
        <Sparkle size={14} className="text-ink" />
        <span>
          Less chaos.
          <br />
          More clarity.
        </span>
      </motion.div>
    </section>
  );
}
