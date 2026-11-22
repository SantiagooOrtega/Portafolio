"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { profile } from "@/data/projects";

const word = {
  hidden: { y: "110%" },
  show: (i: number) => ({ y: 0, transition: { duration: 1, delay: 0.2 + i * 0.12, ease: [0.16, 1, 0.3, 1] as const } }),
};

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const [first, ...rest] = profile.name.split(" ");

  return (
    <section id="inicio" ref={ref} className="relative flex min-h-[100svh] items-center overflow-hidden px-4 pt-28 md:px-8">
      <div className="pointer-events-none absolute -top-40 right-[-10%] h-[600px] w-[600px] rounded-full bg-accent-2/25 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-[-20%] left-[-10%] h-[500px] w-[500px] rounded-full bg-accent/10 blur-[140px]" />

      <motion.div style={{ y, scale, opacity }} className="relative mx-auto grid w-full max-w-6xl items-center gap-12 md:grid-cols-[1.4fr_1fr]">
        <div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-line px-4 py-1.5 text-sm text-muted"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Disponible para proyectos
          </motion.p>

          <h1 className="font-display text-[15vw] font-bold leading-[0.9] tracking-tighter md:text-[7.5rem]">
            {[first, rest.join(" ")].map((w, i) => (
              <span key={i} className="block overflow-hidden pb-2">
                <motion.span custom={i} variants={word} initial="hidden" animate="show" className={`block ${i ? "text-[0.42em] font-medium text-muted" : ""}`}>
                  {w}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.8 }}>
            <p className="mt-6 font-mono text-sm uppercase tracking-widest text-accent">{profile.role}</p>
            <p className="mt-4 max-w-lg text-lg text-muted md:text-xl">{profile.tagline}</p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href="/cv.pdf" download className="group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-4 font-semibold text-bg transition-transform hover:scale-105">
                Descargar CV
                <span className="transition-transform group-hover:translate-y-0.5">↓</span>
              </a>
              <a href="#proyectos" className="inline-flex items-center gap-2 rounded-full border border-line px-7 py-4 font-semibold transition-colors hover:border-fg">
                Ver proyectos →
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -6 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto aspect-[4/5] w-64 md:w-full"
        >
          <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-[2rem] border border-accent" />
          <div className="relative h-full overflow-hidden rounded-[2rem] bg-surface">
            <Image src={profile.photo} alt={`Foto de ${profile.name}`} fill priority className="object-cover" />
          </div>
        </motion.div>
      </motion.div>

      <a href="#sobre-mi" aria-label="Bajar" className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs uppercase tracking-widest text-muted md:flex">
        Scroll
        <span className="h-12 w-[1px] origin-top animate-pulse bg-gradient-to-b from-accent to-transparent" />
      </a>
    </section>
  );
}
