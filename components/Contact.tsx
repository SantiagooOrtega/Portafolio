"use client";

import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Reveal, { SectionTitle } from "./Reveal";
import { profile } from "@/data/projects";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [copied, setCopied] = useState(false);

  const channels = [
    { label: "Correo", value: profile.email, href: `mailto:${profile.email}` },
    { label: "GitHub", value: "@SantiagooOrtega", href: profile.github },
    { label: "WhatsApp", value: "+57 310 459 3584", href: `https://wa.me/${profile.phone}` },
  ];

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const body = `Hola, soy ${f.get("nombre")} (${f.get("correo")}).%0D%0A%0D%0A${encodeURIComponent(String(f.get("mensaje")))}`;
    window.location.href = `mailto:${profile.email}?subject=Contacto desde el portafolio&body=${body}`;
    setSent(true);
    e.currentTarget.reset();
    setTimeout(() => setSent(false), 5000);
  };

  const input =
    "peer w-full rounded-2xl border border-line bg-bg px-5 pb-3 pt-7 outline-none transition-colors focus:border-accent invalid:[&:not(:placeholder-shown)]:border-red-400";
  const label =
    "pointer-events-none absolute left-5 top-5 text-muted transition-all peer-focus:top-2 peer-focus:text-xs peer-focus:text-accent peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-xs";

  return (
    <section id="contacto" className="px-4 py-28 md:px-8 md:py-40">
      <div className="mx-auto max-w-6xl">
        <SectionTitle n="05" kicker="Contacto" title="Hablemos." />

        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <Reveal>
            <ul className="divide-y divide-line border-y border-line">
              {channels.map((c) => (
                <li key={c.label}>
                  <a href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="group flex items-center justify-between py-6">
                    <span>
                      <span className="block font-mono text-xs uppercase tracking-widest text-muted">{c.label}</span>
                      <span className="font-display text-xl transition-colors group-hover:text-accent">{c.value}</span>
                    </span>
                    <span className="text-2xl transition-transform group-hover:-rotate-45">→</span>
                  </a>
                </li>
              ))}
            </ul>
            <button
              onClick={() => { navigator.clipboard?.writeText(profile.email); setCopied(true); setTimeout(() => setCopied(false), 2000); }}
              className="mt-6 rounded-full border border-line px-5 py-2 text-sm hover:border-accent hover:text-accent"
            >
              {copied ? "¡Correo copiado! ✓" : "Copiar correo"}
            </button>
          </Reveal>

          <Reveal delay={0.15}>
            <form onSubmit={onSubmit} className="relative space-y-4 rounded-[2rem] border border-line bg-surface p-6 md:p-10">
              <div className="relative">
                <input id="nombre" name="nombre" required minLength={2} placeholder=" " className={input} />
                <label htmlFor="nombre" className={label}>Nombre *</label>
              </div>
              <div className="relative">
                <input id="correo" name="correo" type="email" required placeholder=" " className={input} />
                <label htmlFor="correo" className={label}>Correo *</label>
              </div>
              <div className="relative">
                <textarea id="mensaje" name="mensaje" required minLength={10} rows={5} placeholder=" " className={`${input} resize-none`} />
                <label htmlFor="mensaje" className={label}>Mensaje *</label>
              </div>
              <button type="submit" className="w-full rounded-full bg-accent py-4 font-semibold text-bg transition-transform hover:scale-[1.02] active:scale-95">
                Enviar mensaje
              </button>

              <AnimatePresence>
                {sent && (
                  <motion.p
                    role="status"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="rounded-2xl border border-accent/40 bg-accent/10 p-4 text-center text-accent"
                  >
                    ✓ ¡Gracias! Tu mensaje está listo para enviarse. Te responderé pronto.
                  </motion.p>
                )}
              </AnimatePresence>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
