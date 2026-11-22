"use client";

import { useRef, useState } from "react";
import { motion, useScroll } from "framer-motion";
import { GraduationCap, Briefcase } from "lucide-react";
import { SectionTitle } from "./Reveal";
import { experience } from "@/data/projects";

const tabs = [
  { id: "todo", label: "Todo" },
  { id: "academica", label: "Académica" },
  { id: "laboral", label: "Laboral" },
] as const;

export default function Experience() {
  const [tab, setTab] = useState<(typeof tabs)[number]["id"]>("todo");
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.8", "end 0.6"] });
  const items = experience.filter((e) => tab === "todo" || e.type === tab);

  return (
    <section id="experiencia" className="px-4 py-28 md:px-8 md:py-40">
      <div className="mx-auto max-w-6xl">
        <SectionTitle n="04" kicker="Experiencia" title="Académica y laboral." />

        <div className="mb-12 inline-flex rounded-full border border-line p-1">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`relative rounded-full px-5 py-2 text-sm transition-colors ${tab === t.id ? "text-bg" : "text-muted hover:text-fg"}`}
            >
              {tab === t.id && <motion.span layoutId="exp-tab" className="absolute inset-0 -z-10 rounded-full bg-accent" />}
              {t.label}
            </button>
          ))}
        </div>

        <ol ref={ref} className="relative ml-3 md:ml-0">
          <span className="absolute left-0 top-0 h-full w-[2px] bg-line md:left-[180px]" />
          <motion.span style={{ scaleY: scrollYProgress }} className="absolute left-0 top-0 h-full w-[2px] origin-top bg-accent md:left-[180px]" />
          {items.map((e, i) => (
            <motion.li
              key={e.title + tab}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              className="relative grid gap-2 pb-14 pl-8 md:grid-cols-[180px_1fr] md:gap-12 md:pl-0"
            >
              <span className="absolute left-[-7px] top-1.5 h-4 w-4 rounded-full border-2 border-accent bg-bg md:left-[173px]" />
              <p className="font-mono text-sm text-muted md:pr-8 md:text-right">
                {e.start} — {e.end}
              </p>
              <div className="md:pl-4">
                <span className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-surface px-3 py-1 text-xs text-accent">
                  {e.type === "academica" ? <GraduationCap className="h-3.5 w-3.5" aria-hidden /> : <Briefcase className="h-3.5 w-3.5" aria-hidden />}
                  {e.type === "academica" ? "Académica" : "Laboral"}
                </span>
                <h3 className="font-display text-2xl font-bold md:text-3xl">{e.title}</h3>
                <p className="mt-1 text-fg/80">{e.place}</p>
                <p className="mt-3 max-w-xl text-muted">{e.description}</p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
