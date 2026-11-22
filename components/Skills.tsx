"use client";

import { motion } from "framer-motion";
import Reveal, { SectionTitle } from "./Reveal";
import { skills } from "@/data/projects";

// Sección adicional: Habilidades
export default function Skills() {
  const all = skills.flatMap((g) => g.items.map((i) => i.name));

  return (
    <section id="habilidades" className="overflow-hidden py-28 md:py-40">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <SectionTitle n="06" kicker="Adicional · Habilidades" title="Mi stack, por capas." />
      </div>

      <div className="mb-20 -rotate-2 border-y border-line bg-accent py-5 text-bg">
        <div className="marquee flex w-max gap-10 whitespace-nowrap font-display text-3xl font-bold md:text-5xl">
          {[...all, ...all].map((s, i) => (
            <span key={i} className="flex items-center gap-10">
              {s} <span aria-hidden>✦</span>
            </span>
          ))}
        </div>
      </div>

      <div className="mx-auto grid max-w-6xl gap-6 px-4 md:grid-cols-3 md:px-8">
        {skills.map((g, gi) => (
          <Reveal key={g.name} delay={gi * 0.12} className="rounded-3xl border border-line bg-surface p-7">
            <h3 className="mb-6 font-display text-xl font-bold">{g.name}</h3>
            <ul className="space-y-5">
              {g.items.map((s) => (
                <li key={s.name}>
                  <div className="mb-2 flex justify-between text-sm">
                    <span>{s.name}</span>
                    <span className="font-mono text-muted">{s.level}%</span>
                  </div>
                  <div className="h-1.5 overflow-hidden rounded-full bg-bg">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${s.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
                      className="h-full rounded-full bg-gradient-to-r from-accent-2 to-accent"
                    />
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
