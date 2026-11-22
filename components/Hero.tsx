"use client";

import MascotPortfolioHero from "@/components/ui/mascot-portfolio-hero";
import { profile } from "@/data/projects";

// Bienvenida / Hero con CV — usa el personaje interactivo (sigue el cursor y saluda al hacer clic).
export default function Hero() {
  return (
    <section id="inicio" className="relative bg-[#ebebea] pt-[84px]">
      <MascotPortfolioHero
        height="calc(100svh - 84px)"
        minHeight="560px"
        index="SO/26"
        discipline="Frontend · UI"
        tagline="Diseño que se siente bien"
        collection={["Proyectos", "Selectos"]}
        reel={[profile.location.split(",")[0] + " · 2026", "Ingeniería de Software"]}
        year="2026"
        initials={profile.initials}
        badge="Contrátame"
        line2="Santiago"
        line3="Ortega"
        word="Diseñ"
        verticalTag="UI·UX"
        bracketed="O"
        seekingLabel="Hoja de vida*"
        seeking="Descargar CV"
        href="/cv.pdf"
        download
        secondary={{ label: "Ver proyectos →", href: "#proyectos" }}
        services={["Desarrollo Frontend", "Diseño de interfaces", "Next.js + TypeScript", "Prototipos en Figma"]}
        greetings={[
          "¡Hola! Soy Santiago 👋",
          "Diseño interfaces y las llevo a código.",
          "Psst… estoy disponible para proyectos.",
          "Vale, ya puedes dejar de picarme :)",
        ]}
        beanie="#f1f1ef"
        shirt="#f7f7f5"
        tag="#1d1d1f"
        accent="#c6f432"
        paper="#ebebea"
        ink="#0b0b10"
      />
    </section>
  );
}
