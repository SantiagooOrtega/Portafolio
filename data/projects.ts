// Datos tipados del portafolio. Edita estos arreglos con tu información real.

export type Project = {
  title: string;
  description: string;
  image: string; // ruta dentro de /public, ej: "/images/proyecto-1.jpg"
  tags: string[];
  github: string;
  demo: string;
  year: string;
};

export type Testimonial = {
  name: string;
  role: string; // Profesor, Compañera, Cliente…
  avatar: string; // iniciales o ruta de imagen
  text: string;
  rating: number; // 1 a 5
};

export type Experience = {
  type: "academica" | "laboral";
  title: string;
  place: string;
  start: string;
  end: string;
  description: string;
};

export type SkillGroup = {
  name: string;
  items: { name: string; level: number }[];
};

export const profile = {
  name: "Santiago Ortega Bolaños",
  shortName: "Santiago",
  initials: "SO",
  role: "Desarrollador Backend & Frontend",
  tagline: "Construyo de punta a punta: APIs sólidas por dentro e interfaces que se disfrutan por fuera.",
  location: "Pasto, Nariño, Colombia",
  university: "Universidad Cooperativa de Colombia · Campus Pasto",
  semester: "Ingeniería de Software · 5.º semestre",
  email: "stevensantiago451@gmail.com",
  phone: "573104593584", // formato internacional sin + para WhatsApp
  github: "https://github.com/SantiagooOrtega",
  photo: "/images/yo.jpg",
};

export const projects: Project[] = [
  {
    title: "Proyecto Uno",
    description:
      "Aplicación web con autenticación, panel de usuario y diseño responsive. Reemplaza esta descripción por la de tu proyecto real.",
    image: "/images/proyecto-1.svg",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    github: "https://github.com/SantiagooOrtega",
    demo: "https://vercel.com",
    year: "2026",
  },
  {
    title: "Proyecto Dos",
    description:
      "Interfaz para consumir una API pública con filtros, búsqueda y estados de carga cuidados.",
    image: "/images/proyecto-2.svg",
    tags: ["React", "API", "CSS"],
    github: "https://github.com/SantiagooOrtega",
    demo: "https://vercel.com",
    year: "2025",
  },
  {
    title: "Proyecto Tres",
    description:
      "Prototipo de alta fidelidad llevado a código: sistema de componentes y micro‑interacciones.",
    image: "/images/proyecto-3.svg",
    tags: ["Figma", "Next.js", "Framer Motion"],
    github: "https://github.com/SantiagooOrtega",
    demo: "https://vercel.com",
    year: "2025",
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Nombre del Profesor",
    role: "Profesor · Diseño de Interfaces",
    avatar: "NP",
    text: "Excelente compromiso y creatividad en cada entrega. Cuida los detalles de la interfaz como pocos.",
    rating: 5,
  },
  {
    name: "Nombre Compañera",
    role: "Compañera de proyecto",
    avatar: "NC",
    text: "Trabajar con él en equipo fue fácil y muy productivo. Siempre propone soluciones claras.",
    rating: 5,
  },
  {
    name: "Nombre Cliente",
    role: "Cliente",
    avatar: "CL",
    text: "Entregó mi página a tiempo y superó lo que esperaba. La recomiendo totalmente.",
    rating: 5,
  },
];

// Ordenado de lo más reciente a lo más antiguo
export const experience: Experience[] = [
  {
    type: "laboral",
    title: "Desarrollador freelance",
    place: "Proyectos independientes",
    start: "2025",
    end: "Hoy",
    description: "Sitios web y landing pages para emprendimientos locales.",
  },
  {
    type: "academica",
    title: "Ingeniería de Software · 5.º semestre",
    place: "Universidad Cooperativa de Colombia · Campus Pasto",
    start: "2024",
    end: "Hoy",
    description: "Desarrollo backend y frontend, estructuras de datos, bases de datos, arquitectura de software y diseño de interfaces.",
  },
  {
    type: "academica",
    title: "Técnico Agropecuario",
    place: "Formación técnica",
    start: "2022",
    end: "2023",
    description: "Formación en producción agropecuaria y ganadería: disciplina, trabajo de campo y gestión de procesos, una base que hoy aplico a resolver problemas reales con software.",
  },
];

export const skills: SkillGroup[] = [
  {
    name: "Frontend",
    items: [
      { name: "HTML", level: 90 },
      { name: "CSS / Tailwind", level: 85 },
      { name: "TypeScript", level: 70 },
      { name: "React / Next.js", level: 75 },
    ],
  },
  {
    name: "Backend",
    items: [
      { name: "Java", level: 70 },
      { name: "Node.js", level: 65 },
      { name: "SQL / Bases de datos", level: 75 },
      { name: "APIs REST", level: 70 },
    ],
  },
  {
    name: "Diseño",
    items: [
      { name: "Figma", level: 80 },
      { name: "UI / UX", level: 75 },
      { name: "Prototipado", level: 70 },
    ],
  },
  {
    name: "Herramientas",
    items: [
      { name: "Git / GitHub", level: 80 },
      { name: "Vercel", level: 75 },
      { name: "VS Code", level: 90 },
    ],
  },
];
