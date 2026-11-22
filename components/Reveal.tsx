"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

// Aparición suave al hacer scroll, reutilizable en todas las secciones.
export default function Reveal({
  children,
  delay = 0,
  y = 40,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function SectionTitle({ n, kicker, title }: { n: string; kicker: string; title: string }) {
  return (
    <Reveal className="mb-14 md:mb-20">
      <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-accent">
        {n} / {kicker}
      </p>
      <h2 className="font-display text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
        {title}
      </h2>
    </Reveal>
  );
}
