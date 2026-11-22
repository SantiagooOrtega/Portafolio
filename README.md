# Portafolio · Santiago Ortega Bolaños

Portafolio personal — Proyecto final de **Diseño de Interfaces**.
Estudiante de Ingeniería de Software (5.º semestre) · Universidad Cooperativa de Colombia, Campus Pasto.

**Sitio en vivo:** https://santiago-ortega-portafolio.vercel.app

## Tecnologías

- **Next.js** (App Router) + **TypeScript**
- **Tailwind CSS** v4
- **Framer Motion** para animaciones ligadas al scroll
- **Lenis** para scroll suave
- **Lucide** para iconos
- Desplegado en **Vercel**

## Secciones

1. Menú de navegación fijo con sección activa y menú hamburguesa
2. Inicio con personaje interactivo y descarga de CV
3. Acerca de mí
4. Proyectos (4 principales con IA integrada + otros)
5. Testimonios
6. Experiencia académica y laboral
7. Contacto con formulario validado
8. Habilidades (sección adicional)
9. Pie de página

## Estructura

```
app/         layout.tsx · page.tsx (une todas las secciones) · globals.css
components/  Navbar · Hero · About · Projects · Testimonials · Experience · Contact · Skills · Footer
components/ui/ mascot-portfolio-hero.tsx
data/        projects.ts (datos tipados: perfil, proyectos, testimonios, experiencia, habilidades)
public/      cv.pdf · images/
```

## Desarrollo local

```bash
npm install
npm run dev
```

Abre http://localhost:3000
