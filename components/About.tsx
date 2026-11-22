"use client";

import { useRef } from "react";
import Image from "next/image";
import { Bike, Mountain, Coffee, Gamepad2, Users, Tractor, Asterisk, type LucideIcon } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import Reveal, { SectionTitle } from "./Reveal";
import { profile } from "@/data/projects";

const bio =
  "Soy Santiago, estudiante de quinto semestre de Ingeniería de Software en la Universidad Cooperativa de Colombia. Desarrollo tanto el backend como el frontend: me gusta que lo que no se ve sea sólido y que lo que se ve se sienta bien. Vengo del campo, soy técnico agropecuario, y de ahí traigo la constancia, la paciencia y las ganas de construir cosas que sirvan de verdad.";

const hobbies: [LucideIcon, string, string][] = [
  [Bike, "Bicicleta y deporte", "Rodar es mi forma de despejar la mente y cargar energía."],
  [Mountain, "Recorrer pueblos", "Conocer lugares nuevos, su gente y sus historias."],
  [Coffee, "Amante del buen café", "Nariño tiene de los mejores, y lo sé apreciar."],
  [Gamepad2, "Videojuegos", "Me inspiran a diseñar experiencias que atrapen."],
  [Users, "Familia y amigos", "Compartir con los míos es lo que más valoro."],
  [Tractor, "Ganadería", "Técnico agropecuario de corazón; el campo me enseñó a ser constante."],
];

const facts = [
  ["Ubicación", "Pasto, Nariño"],
  ["Semestre", "5.º · Ing. de Software"],
  ["Universidad", "U. Cooperativa · Pasto"],
  ["Enfoque", "Backend + Frontend"],
];

const tech = ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind", "Node.js", "Java", "SQL", "APIs REST", "Git"];

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

        <Reveal className="mt-24">
          <h3 className="mb-8 font-display text-3xl font-bold md:text-4xl">
            Fuera del código <Asterisk className="inline h-8 w-8 text-accent" aria-hidden />
          </h3>
        </Reveal>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {hobbies.map(([Icon, title, text], i) => (
            <motion.li
              key={title}
              initial={{ opacity: 0, y: 40, rotate: i % 2 ? 2 : -2 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, delay: (i % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6 }}
              className="group rounded-3xl border border-line bg-surface p-6 transition-colors hover:border-accent/60"
            >
              <span className="mb-5 grid h-14 w-14 place-items-center rounded-2xl border border-line bg-bg text-accent transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 group-hover:border-accent group-hover:bg-accent group-hover:text-bg"><Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden /></span>
              <p className="font-display text-xl font-bold">{title}</p>
              <p className="mt-2 text-muted">{text}</p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
