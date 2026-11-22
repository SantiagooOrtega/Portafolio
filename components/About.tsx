"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Reveal, { SectionTitle } from "./Reveal";
import { profile } from "@/data/projects";

const bio =
  "Soy estudiante de Ingeniería de Software y me apasiona el punto donde se encuentran el diseño y el código. Me gusta convertir ideas en interfaces claras, accesibles y agradables de usar, cuidando cada detalle: la tipografía, el espacio y el movimiento.";

const facts = [
  ["Ubicación", profile.location],
  ["Estudio", profile.semester],
  ["Enfoque", "Frontend y UI"],
  ["Intereses", "Diseño, música, videojuegos"],
];

const tech = ["HTML", "CSS", "TypeScript", "React", "Next.js", "Tailwind", "Figma", "Git"];

function Word({ children, range, progress }: { children: string; range: [number, number]; progress: ReturnType<typeof useScroll>["scrollYProgress"] }) {
  const opacity = useTransform(progress, range, [0.15, 1]);
  return <motion.span style={{ opacity }} className="mr-[0.25em] inline-block">{children}</motion.span>;
}

export default function About() {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.45"] });
  const words = bio.split(" ");

  return (
    <section id="sobre-mi" className="relative px-4 py-28 md:px-8 md:py-40">
      <div className="mx-auto max-w-6xl">
        <SectionTitle n="01" kicker="Acerca de mí" title="Diseño y código, en el mismo lugar." />

        <p ref={ref} className="font-display text-2xl font-medium leading-snug md:text-4xl">
          {words.map((w, i) => (
            <Word key={i} progress={scrollYProgress} range={[i / words.length, (i + 1) / words.length]}>
              {w}
            </Word>
          ))}
        </p>

        <div className="mt-20 grid gap-10 md:grid-cols-2 lg:grid-cols-[0.9fr_1fr_1fr]">
          <Reveal className="md:col-span-2 lg:col-span-1">
            <div className="relative mx-auto aspect-[4/5] max-w-sm">
              <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-[2rem] border border-accent" />
              <div className="relative h-full overflow-hidden rounded-[2rem] bg-surface">
                <Image src={profile.photo} alt={`Foto de ${profile.name}`} fill sizes="(min-width: 1024px) 30vw, 90vw" className="object-cover transition-transform duration-700 hover:scale-105" />
              </div>
            </div>
          </Reveal>
          <Reveal>
            <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line">
              {facts.map(([k, v]) => (
                <div key={k} className="bg-bg p-6">
                  <dt className="font-mono text-xs uppercase tracking-widest text-muted">{k}</dt>
                  <dd className="mt-2 font-display text-lg">{v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
          <Reveal delay={0.15}>
            <h3 className="mb-5 font-mono text-xs uppercase tracking-widest text-muted">Tecnologías que manejo</h3>
            <ul className="flex flex-wrap gap-2">
              {tech.map((t, i) => (
                <motion.li
                  key={t}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="rounded-full border border-line px-4 py-2 text-sm transition-colors hover:border-accent hover:text-accent"
                >
                  {t}
                </motion.li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
