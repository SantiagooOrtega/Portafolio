"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Reveal, { SectionTitle } from "./Reveal";
import { projects, type Project } from "@/data/projects";

function Links({ p }: { p: Project }) {
  return (
    <div className="mt-6 flex flex-wrap gap-3">
      {p.repos.map((r) => (
        <a key={r.url} href={r.url} target="_blank" rel="noopener noreferrer" className="flex-1 whitespace-nowrap rounded-full border border-line px-4 py-3 text-center text-sm font-semibold transition-colors hover:border-fg">
          {r.label} ↗
        </a>
      ))}
      {p.demo && (
        <a href={p.demo} target="_blank" rel="noopener noreferrer" className="flex-1 whitespace-nowrap rounded-full bg-accent px-4 py-3 text-center text-sm font-semibold text-bg transition-transform hover:scale-[1.03]">
          Demo en vivo ↗
        </a>
      )}
    </div>
  );
}

function Tags({ tags }: { tags: string[] }) {
  return (
    <ul className="mt-5 flex flex-wrap gap-2">
      {tags.map((t) => (
        <li key={t} className={`rounded-full px-3 py-1 font-mono text-xs ${t === "IA" ? "bg-accent text-bg" : "bg-bg text-accent"}`}>
          {t}
        </li>
      ))}
    </ul>
  );
}

export default function Projects() {
  const main = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="proyectos" className="px-4 py-28 md:px-8 md:py-40">
      <div className="mx-auto max-w-6xl">
        <SectionTitle n="02" kicker="Proyectos" title="Cosas que he construido." />

        <Reveal className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-accent">★ Proyectos principales del semestre</p>
            <h3 className="mt-2 font-display text-2xl font-bold md:text-3xl">Cuatro plataformas, una constante: IA integrada.</h3>
          </div>
          <p className="max-w-sm text-muted">Móvil, escritorio, reloj inteligente y videojuego, cada uno con inteligencia artificial en su núcleo.</p>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2">
          {main.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 80, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.9, delay: (i % 2) * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="group relative flex flex-col overflow-hidden rounded-[2rem] border border-line bg-surface transition-colors hover:border-accent"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image src={p.image} alt={`Portada de ${p.title}`} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-110" />
                <span className="absolute left-4 top-4 rounded-full bg-bg/80 px-3 py-1 font-mono text-xs backdrop-blur">
                  {String(i + 1).padStart(2, "0")} · {p.platform}
                </span>
                <span className="absolute right-4 top-4 rounded-full bg-accent px-3 py-1 text-xs font-bold text-bg">✦ {p.status}</span>
              </div>
              <div className="flex flex-1 flex-col p-7 md:p-8">
                <h3 className="font-display text-3xl font-bold">{p.title}</h3>
                <p className="mt-3 flex-1 text-muted">{p.description}</p>
                <Tags tags={p.tags} />
                <Links p={p} />
              </div>
            </motion.article>
          ))}
        </div>

        <Reveal className="mb-8 mt-24">
          <p className="font-mono text-xs uppercase tracking-widest text-muted">Otros proyectos</p>
          <h3 className="mt-2 font-display text-2xl font-bold md:text-3xl">Clientes reales y trabajo en equipo.</h3>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: (i % 3) * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="group flex flex-col overflow-hidden rounded-3xl border border-line bg-surface transition-colors hover:border-accent/60"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image src={p.image} alt={`Portada de ${p.title}`} fill sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-110" />
                <span className="absolute left-4 top-4 rounded-full bg-bg/80 px-3 py-1 font-mono text-xs backdrop-blur">
                  {p.platform} · {p.status}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-2xl font-bold">{p.title}</h3>
                <p className="mt-3 flex-1 text-muted">{p.description}</p>
                <Tags tags={p.tags} />
                <Links p={p} />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
