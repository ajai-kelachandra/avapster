"use client";

import { motion, useReducedMotion } from "framer-motion";

/** Accent dot with a soft pulse ring. */
export function PulseDot() {
  const reduce = useReducedMotion();
  return (
    <span className="relative flex h-2 w-2 shrink-0" aria-hidden="true">
      {!reduce && (
        <motion.span
          className="absolute inset-0 rounded-full bg-accent"
          animate={{ scale: [1, 3], opacity: [0.45, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut" }}
        />
      )}
      <span className="relative h-2 w-2 rounded-full bg-accent" />
    </span>
  );
}

/** Section label: pulsing dot, text, and a hairline that draws in on scroll. */
export function SectionMark({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-2.5">
      <PulseDot />
      <span className="text-[13px] text-accent">{label}</span>
      <motion.span
        aria-hidden="true"
        className="h-px w-10 origin-left bg-accent/40"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      />
    </div>
  );
}
