"use client";

import { motion } from "framer-motion";
import { SectionMark } from "@/components/ui/SectionMark";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
import { servicesData } from "@/data/services";

const ease = [0.22, 1, 0.36, 1] as const;

export function Services() {
  return (
    <section id="services" className="border-t border-line">
      <div className="mx-auto grid max-w-[1200px] gap-10 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[1.8fr_1fr] lg:gap-16">
        {/* Heading: right on desktop, first on mobile */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease }}
          className="lg:order-2 lg:sticky lg:top-28 lg:self-start lg:text-right"
        >
          <div className="lg:flex lg:justify-end">
            <SectionMark label="Services" />
          </div>
          <h2 className="mt-3 font-display text-2xl leading-[1.15] tracking-[-0.03em] sm:text-3xl lg:text-[34px]">
            <span className="font-extrabold">What we build</span>
            <br />
            <span className="font-medium text-muted">from first idea to launch.</span>
          </h2>
        </motion.div>

        {/* Services grid: left on desktop */}
        <ul className="grid border-l border-t border-line sm:grid-cols-2 lg:order-1">
          {servicesData.map((s, i) => (
            <motion.li
              key={s.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.6, delay: (i % 2) * 0.08, ease }}
              className="group border-b border-r border-line p-6 transition-colors duration-300 hover:bg-soft sm:p-7"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink transition-colors duration-300 group-hover:border-ink group-hover:bg-ink group-hover:text-white">
                <span className="scale-[0.8]">
                  <ServiceIcon name={s.icon} />
                </span>
              </span>
              <h3 className="mt-6 text-[15px] font-medium tracking-tight">{s.title}</h3>
              <p className="mt-1.5 text-[13px] leading-relaxed text-muted">{s.description}</p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
