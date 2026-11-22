"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SectionTitle } from "./Reveal";
import { testimonials } from "@/data/projects";

export default function Testimonials() {
  const [i, setI] = useState(0);
  const [dir, setDir] = useState(1);
  const [paused, setPaused] = useState(false);
  const t = testimonials[i];

  const go = (d: number) => {
    setDir(d);
    setI((x) => (x + d + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => go(1), 6000);
    return () => clearInterval(id);
  }, [paused, i]);

  return (
    <section id="testimonios" className="relative overflow-hidden px-4 py-28 md:px-8 md:py-40">
      <div className="mx-auto max-w-6xl">
        <SectionTitle n="03" kicker="Testimonios" title="Lo que dicen de trabajar conmigo." />

        <div
          className="relative rounded-[2rem] border border-line bg-surface p-8 md:p-16"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <span aria-hidden className="absolute -top-10 left-8 font-display text-[10rem] leading-none text-accent md:left-14">
            “
          </span>
          <div className="relative min-h-[260px] md:min-h-[220px]" aria-live="polite">
            <AnimatePresence mode="wait" custom={dir}>
              <motion.figure
                key={i}
                custom={dir}
                initial={{ opacity: 0, x: dir * 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: dir * -60 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={(_, info) => Math.abs(info.offset.x) > 80 && go(info.offset.x < 0 ? 1 : -1)}
                className="cursor-grab active:cursor-grabbing"
              >
                {t.rating > 0 ? (
                <div className="mb-6 flex gap-1 text-accent" aria-label={`${t.rating} de 5 estrellas`}>
                  {Array.from({ length: 5 }, (_, k) => (
                    <span key={k} className={k < t.rating ? "" : "opacity-20"}>★</span>
                  ))}
                </div>
                ) : (
                  <span className="mb-6 inline-block rounded-full border border-dashed border-accent px-3 py-1 font-mono text-xs uppercase tracking-widest text-accent">Pendiente de permiso</span>
                )}
                <blockquote className="font-display text-2xl font-medium leading-snug md:text-4xl">{t.text}</blockquote>
                <figcaption className="mt-8 flex items-center gap-4">
                  <span className="grid h-14 w-14 place-items-center rounded-full bg-accent-2 font-display font-bold">{t.avatar}</span>
                  <span>
                    <span className="block font-semibold">{t.name}</span>
                    <span className="text-sm text-muted">{t.role}</span>
                  </span>
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>

          <div className="mt-10 flex items-center justify-between">
            <div className="flex gap-2">
              {testimonials.map((_, k) => (
                <button
                  key={k}
                  onClick={() => { setDir(k > i ? 1 : -1); setI(k); }}
                  aria-label={`Testimonio ${k + 1}`}
                  className={`h-2 rounded-full transition-all duration-500 ${k === i ? "w-10 bg-accent" : "w-2 bg-line hover:bg-muted"}`}
                />
              ))}
            </div>
            <div className="flex items-center gap-3">
              <span className="font-mono text-sm text-muted">{i + 1} / {testimonials.length}</span>
              <button onClick={() => go(-1)} aria-label="Anterior" className="grid h-12 w-12 place-items-center rounded-full border border-line transition-colors hover:border-accent hover:text-accent">←</button>
              <button onClick={() => go(1)} aria-label="Siguiente" className="grid h-12 w-12 place-items-center rounded-full border border-line transition-colors hover:border-accent hover:text-accent">→</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
