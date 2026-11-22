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
  /** Frase destacada (extraída textualmente del testimonio) */
  highlight: string;
  text: string;
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
    platform: "App móvil",
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
    platform: "App de escritorio",
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
    platform: "Smartwatch",
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
    platform: "Videojuego",
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
    platform: "Web",
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
    platform: "Web",
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
    platform: "Móvil",
  },
];

// Testimonios reales, publicados con permiso de cada compañero.
export const testimonials: Testimonial[] = [
  {
    name: "Miguel Pantoja",
    role: "Compañero · Scrum Master en Easy Buss",
    avatar: "MP",
    highlight: "Termina asumiendo el papel de líder, pero no de una manera autoritaria.",
    text: "He tenido la oportunidad de compartir varios trabajos y proyectos de la universidad con Santiago Ortega y puedo decir que es un muy buen compañero, especialmente cuando se trata de trabajar en equipo. Algo que siempre he destacado de él es que no espera a que los demás le digan qué hacer, sino que normalmente toma la iniciativa para organizar el grupo y empezar a desarrollar las actividades. Muchas veces termina asumiendo el papel de líder, pero no de una manera autoritaria, sino tratando de que todos podamos aportar nuestras ideas y participar. También es una persona con la que se puede hablar fácilmente cuando hay alguna dificultad o cuando no estamos de acuerdo en algo. Busca la manera de solucionar los problemas y de que el trabajo salga bien. Durante estos semestres he visto que se preocupa por cumplir con lo que le corresponde y por ayudar a que el equipo avance. Considero que Santiago tiene buenas capacidades para liderar, trabajar con otras personas y asumir los retos que se presentan durante nuestra formación como ingenieros de software.",
  },
  {
    name: "Camilo Rosero",
    role: "Compañero · Ingeniería de Software",
    avatar: "CR",
    highlight: "Aporta ideas, demuestra interés por obtener buenos resultados y ayuda a mantener al grupo enfocado.",
    text: "Como compañero de Santiago Ortega durante nuestra carrera de Ingeniería de Software, he podido conocer su manera de trabajar y la actitud que tiene frente a las diferentes actividades académicas. Algo que me parece importante destacar es que es una persona comprometida con los trabajos que realizamos. Cuando tenemos que desarrollar un proyecto en grupo, Santiago suele ser de los primeros en proponer cómo podemos organizarnos, qué actividades debemos realizar y de qué manera podemos aprovechar mejor el tiempo. Además, es un compañero que se preocupa porque el trabajo no se quede estancado. Si surge algún inconveniente, trata de buscar alternativas y aportar soluciones para que podamos continuar. También tiene una buena disposición para escuchar las opiniones de los demás y colaborar cuando alguien necesita apoyo. En lo personal, considero que trabajar con Santiago es una buena experiencia porque aporta ideas, demuestra interés por obtener buenos resultados y ayuda a mantener al grupo enfocado en lo que tenemos que entregar. Son cualidades que considero importantes tanto en la universidad como en el ámbito profesional.",
  },
  {
    name: "Johan Mosquera",
    role: "Compañero · Ingeniería de Software",
    avatar: "JM",
    highlight: "Su iniciativa, liderazgo y capacidad para trabajar con otras personas son fortalezas.",
    text: "Durante estos cinco semestres de Ingeniería de Software he tenido la oportunidad de compartir diferentes espacios académicos con Santiago Ortega y algo que he podido notar es que tiene una buena capacidad para desenvolverse cuando trabajamos en grupo. Es una persona que suele tener iniciativa, le gusta aportar ideas y no tiene problema en asumir responsabilidades cuando es necesario. En varios trabajos ha demostrado que puede tomar el liderazgo del equipo, organizar las actividades y buscar que todos tengamos claro lo que debemos hacer. Otra cosa que destaco de Santiago es que tiene interés por aprender y mejorar sus conocimientos, especialmente en los temas relacionados con nuestra carrera. Cuando se presentan dificultades en algún proyecto, procura entender el problema y encontrar una solución, en lugar de simplemente dejarlo para después. También considero que tiene una buena forma de comunicarse con sus compañeros, ya que escucha diferentes puntos de vista y trata de llegar a acuerdos que beneficien al grupo. Para mí, Santiago es un compañero con el que se puede trabajar de manera agradable, porque además de aportar sus conocimientos, también demuestra disposición para colaborar y sacar adelante las actividades. Creo que su iniciativa, liderazgo y capacidad para trabajar con otras personas son fortalezas que le van a servir bastante en su futuro como ingeniero de software.",
  },
];

// Ordenado de lo más reciente a lo más antiguo
export const experience: Experience[] = [
  {
    type: "laboral",
    title: "Desarrollador web · Fuego Burger",
    place: "Cliente real · Restaurante",
    start: "2026",
    end: "2026",
    description: "Diseño y desarrollo de la página de pedidos en línea del restaurante, con Next.js, TypeScript y Tailwind, publicada en Vercel.",
  },
  {
    type: "laboral",
    title: "Líder de equipo y desarrollador",
    place: "Proyectos académicos · Ingeniería de Software",
    start: "2024",
    end: "Hoy",
    description: "Coordino equipos en los proyectos de semestre: reparto de tareas, seguimiento de avances y organización de entregas. Soy el punto de contacto con los docentes y diseño y desarrollo las interfaces.",
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
