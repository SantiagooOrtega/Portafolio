"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionTitle } from "./Reveal";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="proyectos" className="px-4 py-28 md:px-8 md:py-40">
      <div className="mx-auto max-w-6xl">
        <SectionTitle n="02" kicker="Proyectos" title="Cosas que he construido." />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: (i % 3) * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="group flex flex-col overflow-hidden rounded-3xl border border-line bg-surface transition-colors hover:border-accent/60"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image src={p.image} alt={`Captura de ${p.title}`} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                <span className="absolute left-4 top-4 rounded-full bg-bg/80 px-3 py-1 font-mono text-xs backdrop-blur">
                  {String(i + 1).padStart(2, "0")} · {p.year}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-2xl font-bold">{p.title}</h3>
                <p className="mt-3 flex-1 text-muted">{p.description}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <li key={t} className="rounded-full bg-bg px-3 py-1 font-mono text-xs text-accent">
                      {t}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex gap-3">
                  <a href={p.github} target="_blank" rel="noopener noreferrer" className="flex-1 rounded-full border border-line py-3 text-center text-sm font-semibold transition-colors hover:border-fg">
                    GitHub
                  </a>
                  <a href={p.demo} target="_blank" rel="noopener noreferrer" className="flex-1 rounded-full bg-accent py-3 text-center text-sm font-semibold text-bg transition-transform hover:scale-[1.03]">
                    Demo en vivo ↗
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
