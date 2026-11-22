"use client";

import MascotPortfolioHero from "@/components/ui/mascot-portfolio-hero";

// Bienvenida / Hero con CV — usa el personaje interactivo (sigue el cursor y saluda al hacer clic).
export default function Hero() {
  return (
    <section id="inicio" className="relative bg-[#ebebea] pt-[84px]">
      <MascotPortfolioHero
        height="calc(100svh - 84px)"
        minHeight="560px"
        index="SO/26"
        discipline="Backend · Frontend"
        tagline="Del servidor a la pantalla"
        collection={["Proyectos", "Selectos"]}
        reel={["Pasto, Nariño · 2026", "Ing. de Software · 5.º sem"]}
        year="2026"
        initials="IA"
        badge="Contrátame"
        badgeHref="#contacto"
        line2="Santiago"
        line3="Ortega"
        word="Code"
        verticalTag="FULL STACK"
        bracketed="R"
        seekingLabel="Hoja de vida*"
        seeking="Descargar CV"
        href="/cv.pdf"
        download
        secondary={{ label: "Ver proyectos", href: "#proyectos" }}
        services={["Desarrollo Backend", "Desarrollo Frontend", "APIs y bases de datos", "Interfaces con Next.js"]}
        greetings={[
          "¡Hola! Soy Santiago.",
          "Hago backend y frontend.",
          "¿Un café y hablamos de tu proyecto?",
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
