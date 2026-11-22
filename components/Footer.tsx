import { profile } from "@/data/projects";

const quick = [
  ["Inicio", "inicio"],
  ["Sobre mí", "sobre-mi"],
  ["Proyectos", "proyectos"],
  ["Testimonios", "testimonios"],
  ["Experiencia", "experiencia"],
  ["Contacto", "contacto"],
  ["Habilidades", "habilidades"],
];

const icons = {
  GitHub: "M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.3 4.7 18.3 5 18.3 5c.7 1.6.2 2.8.1 3.2.8.8 1.3 1.9 1.3 3.1 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .5Z",
  LinkedIn: "M20.4 20.5h-3.6v-5.6c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9v5.7H9.4V9h3.4v1.6c.5-.9 1.6-1.8 3.4-1.8 3.6 0 4.3 2.4 4.3 5.5v6.2ZM5.3 7.4a2.1 2.1 0 1 1 0-4.2 2.1 2.1 0 0 1 0 4.2ZM7.1 20.5H3.6V9h3.5v11.5Z",
  Correo: "M2 5h20v14H2V5Zm2 2v.5l8 5 8-5V7H4Zm16 2.8-8 5-8-5V17h16V9.8Z",
};

export default function Footer() {
  const socials = [
    { name: "GitHub", href: profile.github },
    { name: "LinkedIn", href: profile.linkedin },
    { name: "Correo", href: `mailto:${profile.email}` },
  ] as const;

  return (
    <footer className="border-t border-line px-4 pb-10 pt-20 md:px-8">
      <div className="mx-auto max-w-6xl">
        <a href="#contacto" className="group block font-display text-[13vw] font-bold leading-none tracking-tighter md:text-[8rem]">
          ¿Trabajamos <span className="text-accent transition-colors group-hover:text-fg">juntos?</span>
        </a>

        <div className="mt-16 grid gap-10 md:grid-cols-3">
          <div>
            <p className="font-display text-xl font-bold">{profile.name}</p>
            <p className="mt-2 text-muted">{profile.tagline}</p>
          </div>
          <nav aria-label="Enlaces rápidos">
            <p className="mb-4 font-mono text-xs uppercase tracking-widest text-muted">Enlaces rápidos</p>
            <ul className="grid grid-cols-2 gap-2">
              {quick.map(([l, id]) => (
                <li key={id}>
                  <a href={`#${id}`} className="hover:text-accent">{l}</a>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <p className="mb-4 font-mono text-xs uppercase tracking-widest text-muted">Redes</p>
            <div className="flex gap-3">
              {socials.map((s) => (
                <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.name} className="grid h-12 w-12 place-items-center rounded-full border border-line transition-colors hover:border-accent hover:bg-accent hover:text-bg">
                  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current"><path d={icons[s.name]} /></svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-line pt-8 text-sm text-muted md:flex-row">
          <p>© 2026 {profile.name}. Hecho con Next.js + Tailwind.</p>
          <a href="#inicio" className="group inline-flex items-center gap-2 rounded-full border border-line px-5 py-2 hover:border-accent hover:text-accent">
            Volver arriba <span className="transition-transform group-hover:-translate-y-1">↑</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
