import type { Metadata } from "next";
import { Space_Grotesk, Inter, Archivo_Black } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

const display = Space_Grotesk({ variable: "--font-grotesk", subsets: ["latin"] });
const body = Inter({ variable: "--font-body", subsets: ["latin"] });
const archivo = Archivo_Black({ variable: "--font-archivo", weight: "400", subsets: ["latin"] });

const SITE_URL = "https://santiago-ortega-portafolio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Santiago Ortega · Desarrollador Backend & Frontend",
  description:
    "Portafolio de Santiago Ortega Bolaños, estudiante de Ingeniería de Software en Pasto: proyectos con IA en móvil, escritorio, smartwatch y videojuegos.",
  authors: [{ name: "Santiago Ortega Bolaños", url: "https://github.com/SantiagooOrtega" }],
  keywords: ["Santiago Ortega", "portafolio", "desarrollador full stack", "Next.js", "Pasto", "Ingeniería de Software"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${display.variable} ${body.variable} ${archivo.variable} scroll-smooth antialiased`}>
      <body className="min-h-screen overflow-x-hidden">
        <SmoothScroll />
        <div className="grain" aria-hidden />
        {children}
      </body>
    </html>
  );
}
