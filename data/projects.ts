// Datos tipados del portafolio. Edita estos arreglos con tu información real.

export type Project = {
  title: string;
  description: string;
  image: string; // ruta dentro de /public, ej: "/images/proyecto-1.jpg"
  tags: string[];
  /** Uno o varios repositorios (ej. backend y frontend) */
  repos: { label: string; url: string }[];
  demo?: string;
  year: string;
  status: string;
  /** Proyecto principal del semestre (con IA integrada) */
  featured?: boolean;
  /** Plataforma: Móvil, Escritorio, Smartwatch, Videojuego, Web */
  platform: string;
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

// Los 4 primeros son los proyectos principales del semestre, todos con IA integrada.
export const projects: Project[] = [
  {
    title: "FootballAI",
    description:
      "App móvil de pronósticos de fútbol con análisis por inteligencia artificial. Backend propio en Express con arquitectura MVC, autenticación JWT y PostgreSQL.",
    image: "/images/proyecto-football.svg",
    tags: ["React Native", "Expo", "TypeScript", "Express", "PostgreSQL", "IA"],
    repos: [{ label: "GitHub", url: "https://github.com/SantiagooOrtega/FootballFinal" }],
    year: "2026",
    status: "IA integrada",
    platform: "📱 App móvil",
    featured: true,
  },
  {
    title: "MechanicIA",
    description:
      "Mecánico inteligente de escritorio: describes la falla de tu vehículo y la IA te ayuda a diagnosticarla, con historial de diagnósticos y mantenimiento.",
    image: "/images/proyecto-mechanic.svg",
    tags: ["Electron", "React", "TypeScript", "Express", "PostgreSQL", "IA"],
    repos: [{ label: "GitHub", url: "https://github.com/SantiagooOrtega/MechanicAi" }],
    year: "2026",
    status: "IA integrada",
    platform: "💻 App de escritorio",
    featured: true,
  },
  {
    title: "SmartTranslator",
    description:
      "Traductor de español a inglés en tiempo real que corre en un reloj Wear OS real: hablas, la IA traduce y guarda tu historial en Supabase.",
    image: "/images/proyecto-watch.svg",
    tags: ["Kotlin", "Wear OS", "Node.js", "Supabase", "IA"],
    repos: [{ label: "GitHub", url: "https://github.com/SantiagooOrtega/SmartWatchFinal" }],
    year: "2026",
    status: "IA integrada",
    platform: "⌚ Smartwatch",
    featured: true,
  },
  {
    title: "7Days",
    description:
      "Juego 3D de supervivencia zombie en tercera persona: resiste 7 días con jefes en los días 3, 5 y 7. Una IA director analiza cómo juegas y adapta las oleadas.",
    image: "/images/proyecto-7days.svg",
    tags: ["Unity", "C#", "Node.js", "TypeScript", "Prisma", "IA"],
    repos: [
      { label: "GitHub", url: "https://github.com/SantiagooOrtega/7Days" },
      { label: "Descargar (macOS)", url: "https://github.com/SantiagooOrtega/7Days/releases/tag/v1.0" },
    ],
    year: "2026",
    status: "IA integrada",
    platform: "🎮 Videojuego",
    featured: true,
  },
  {
    title: "Fuego Burger",
    description:
      "Página de pedidos para un restaurante real de hamburguesas artesanales: los clientes ven el menú y hacen su orden a domicilio en línea.",
    image: "/images/proyecto-burger.svg",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    repos: [{ label: "GitHub", url: "https://github.com/SantiagooOrtega/FuegoBurguer" }],
    demo: "https://fuego-burguer-blond.vercel.app",
    year: "2026",
    status: "Cliente real",
    platform: "🌐 Web",
  },
  {
    title: "BiomedWaste",
    description:
      "Plataforma para gestionar residuos biomédicos: recolección, transporte y tratamiento, con paneles de datos para tomar decisiones.",
    image: "/images/proyecto-biomed.svg",
    tags: ["Spring Boot", "Java", "MySQL", "React", "Docker"],
    repos: [
      { label: "Backend", url: "https://github.com/OscarHernandezVel/biomedical-waste-platform" },
      { label: "Frontend", url: "https://github.com/KmiloRosero/biomedical-fronted" },
    ],
    demo: "https://biomedwasted.vercel.app/login",
    year: "2026",
    status: "Colaborativo",
    platform: "🌐 Web",
  },
  {
    title: "Easy Buss",
    description:
      "App de rutas de bus en Pasto con mapa interactivo, geolocalización y recomendaciones con IA. Participé como ingeniero de calidad en un equipo Scrum.",
    image: "/images/proyecto-buss.svg",
    tags: ["React Native", "Node.js", "Python", "FastAPI", "Docker"],
    repos: [{ label: "GitHub", url: "https://github.com/SantiagooOrtega/Buss" }],
    demo: "https://buss-ten.vercel.app",
    year: "2026",
    status: "Equipo Scrum",
    platform: "📱 Móvil",
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
