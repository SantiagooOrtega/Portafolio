import type { Metadata } from "next";
import { Space_Grotesk, Inter, Archivo_Black } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

const display = Space_Grotesk({ variable: "--font-grotesk", subsets: ["latin"] });
const body = Inter({ variable: "--font-body", subsets: ["latin"] });
const archivo = Archivo_Black({ variable: "--font-archivo", weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Santiago Ortega · Portafolio",
  description: "Portafolio de Santiago Ortega Bolaños: desarrollo frontend y diseño de interfaces.",
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
