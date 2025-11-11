import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    title: "BeBot Design",
    type: "Experiencia laboral",
    content:
      "✨ Implementé Next-intl para la internacionalización (i18n) en múltiples idiomas y apliqué renderizado del lado del servidor (SSR) para optimizar la performance y el SEO. Desarrollé animaciones complejas con Framer Motion y diseñé la interfaz con Tailwind CSS, logrando un sistema escalable, consistente y orientado a la experiencia del usuario.<br/><br/>🧪 Llevé a cabo tareas de optimización SEO técnico, identificando y resolviendo problemas de indexación y rendimiento. Finalmente, realicé el deploy con Firebase Hosting y Functions, asegurando estabilidad y disponibilidad en producción.",
    repository: "",
    deploy: "https://bebot.design/",
    logo: "/brands/bebot.jpg",
    techs: [
      {
        name: "Next.js",
        img: "/logos/next.svg",
      },
      {
        name: "Typescript",
        img: "/logos/typescript.png",
      },
      {
        name: "Javascript",
        img: "/logos/javascript.png",
      },
      {
        name: "Tailwind",
        img: "/logos/tailwind.svg",
      },
      {
        name: "Shadcn",
        img: "/logos/shadcn.webp",
      },
      {
        name: "CSS",
        img: "/logos/css.svg",
      },
      {
        name: "Framer Motion",
        img: "/logos/motion.svg",
      },
      {
        name: "Firebase",
        img: "/logos/firebase.svg",
      },
      {
        name: "i18n",
        img: "/logos/i18n.png",
      },
      {
        name: "Server-side rendering (SSR)",
        img: "",
      },
    ],
    image: "/portadas/bebot.PNG",
  },
  {
    title: "CUX Academy",
    type: "Experiencia laboral",
    logo: "/brands/Iso.png",
    content:
      "✨ Implementé un chatbot creado con Voiceflow, optimizando la integración y garantizando un flujo conversacional fluido. Para enriquecer la experiencia de usuario, desarrollé animaciones complejas con Framer Motion y diseñé la interfaz con Tailwind CSS, logrando un sistema escalable y consistente.<br/><br/>🧪 Realicé el deploy estático en producción vía FTP, asegurando estabilidad y disponibilidad. Además, integré un script de Octopus para la gestión de suscripciones e implementé estados globales con Zustand para un control eficiente de la aplicación.",
    repository: "",
    deploy: "https://www.cux.academy/",
    techs: [
      {
        name: "Next.js",
        img: "/logos/next.svg",
      },
      {
        name: "Typescript",
        img: "/logos/typescript.png",
      },
      {
        name: "Tailwind",
        img: "/logos/tailwind.svg",
      },
      {
        name: "CSS",
        img: "/logos/css.svg",
      },
      {
        name: "Framer Motion",
        img: "/logos/motion.svg",
      },
      {
        name: "Firebase",
        img: "/logos/firebase.svg",
      },
      {
        name: "Voiceflow",
        img: "/logos/voiceflow.png",
      },
      {
        name: "Zustand",
        img: "/logos/zustand.svg",
      },
      {
        name: "Server-side rendering (SSR)",
        img: "",
      },
      {
        name: "Octopus",
        img: "",
      },
      {
        name: "FTP",
        img: "",
      },
    ],
    image: "/portadas/cux.png",
  },
  {
    title: "Chatbot",
    type: "Proyecto",
    content:
      "✨ Chatbot interactivo que implementa el modelo LLM Gemini de Google para generar respuestas contextuales e inteligentes en tiempo real. Presenta animaciones de carga, detección dinámica de mensajes y una experiencia de conversación fluida con el asistente virtual.",
    repository: "https://github.com/FedeCodeLab/chatbot",
    deploy: "https://chatbot-fedecodelab.vercel.app/",
    techs: [
      {
        name: "Javascript",
        img: "/logos/javascript.png",
      },
      {
        name: "HTML",
        img: "/logos/html.svg",
      },
      {
        name: "CSS",
        img: "/logos/css.svg",
      },
      {
        name: "Gemini",
        img: "/logos/gemini.png",
      },
      {
        name: "LLM",
        img: "",
      },
    ],
    image: "/portadas/chatbot.png",
  },
  {
    title: "Stranger Things Countdown",
    type: "Proyecto",
    content:
      "✨ Un sitio interactivo dedicado a Stranger Things 5, con un contador regresivo para el estreno de la temporada final. Incluye secciones con avances en video, un quiz temático para poner a prueba tus conocimientos sobre la serie, y una estética inmersiva inspirada en el Upside Down.",
    repository: "https://github.com/FedeCodeLab/stranger-things-countdown",
    deploy: "https://stranger-things-countdown.vercel.app/",
    techs: [
      {
        name: "Next.js",
        img: "/logos/next.svg",
      },
      {
        name: "Typescript",
        img: "/logos/typescript.png",
      },
      {
        name: "Tailwind",
        img: "/logos/tailwind.svg",
      },
      {
        name: "CSS",
        img: "/logos/css.svg",
      },
      {
        name: "Vercel",
        img: "/logos/vercel.svg",
      },
      {
        name: "Zustand",
        img: "/logos/zustand.svg",
      },
      {
        name: "Server-side rendering (SSR)",
        img: "",
      },
    ],
    image: "/portadas/stranger.png",
  },
  {
    title: "Traductor",
    type: "Proyecto",
    content:
      "✨ AI Translator — Aplicación desarrollada con Next.js, TypeScript y Zustand que permite traducir texto en tiempo real, detectar automáticamente el idioma, convertir voz a texto y reproducir la traducción con síntesis de voz utilizando APIs nativas del navegador (Translator, LanguageDetector, SpeechRecognition y SpeechSynthesis).",
    repository: "https://github.com/FedeCodeLab/traductor",
    deploy: "https://traductor-two.vercel.app/",
    techs: [
      {
        name: "Next.js",
        img: "/logos/next.svg",
      },
      {
        name: "Typescript",
        img: "/logos/typescript.png",
      },
      {
        name: "Tailwind",
        img: "/logos/tailwind.svg",
      },
      {
        name: "Zustand",
        img: "/logos/zustand.svg",
      },
      {
        name: "API REST",
        img: "",
      },
    ],
    image: "/portadas/traductor.png",
  },
  {
    title: "Github Users Finder",
    type: "Proyecto",
    content:
      "✨ GitHub Users Finder — Aplicación desarrollada con Next.js, Zustand y Tailwind CSS que permite buscar usuarios de GitHub, visualizar su información detallada y explorar sus repositorios públicos en tiempo real mediante la API de GitHub.",
    repository: "https://github.com/FedeCodeLab/github-users-finder",
    deploy: "https://github-users-finder-sepia.vercel.app/",
    techs: [
      {
        name: "Next.js",
        img: "/logos/next.svg",
      },
      {
        name: "Typescript",
        img: "/logos/typescript.png",
      },
      {
        name: "Tailwind",
        img: "/logos/tailwind.svg",
      },
      {
        name: "Zustand",
        img: "/logos/zustand.svg",
      },
      {
        name: "API REST",
        img: "",
      },
    ],
    image: "/portadas/github.png",
  },
  {
    title: "Spotify Clone",
    type: "Proyecto",
    content:
      "✨ Desarrollé un clon de Spotify con Astro.js, recreando la experiencia de un reproductor de música moderno y funcional.<br/><br/>🧪 Implementé la reproducción de canciones, control de volumen e interacción entre distintos álbumes, logrando una interfaz responsiva y fluida que emula la experiencia original de la plataforma.",
    repository: "https://github.com/FedeCodeLab/spotify-clone",
    deploy: "https://spotify-clone-fedecodelab.vercel.app/",
    techs: [
      {
        name: "Astro",
        img: "/logos/astro.png",
      },
      {
        name: "Typescript",
        img: "/logos/typescript.png",
      },
      {
        name: "Javascript",
        img: "/logos/javascript.png",
      },
      {
        name: "Svelte",
        img: "/logos/svelte.png",
      },
      {
        name: "React",
        img: "/logos/react.svg",
      },
      {
        name: "Tailwind",
        img: "/logos/tailwind.svg",
      },
      {
        name: "Vercel",
        img: "/logos/vercel.svg",
      },
    ],
    image: "/portadas/spotify.png",
  },
  {
    title: "Expansiva",
    type: "Experiencia laboral",
    content:
      "✨ Desarrollé el sitio web de Expansiva, una plataforma para un evento artístico que fusiona poesía, tecnología y estética visual. El sitio muestra el programa, artistas invitados, imagen generativa y contenido multimedia de una forma inmersiva y moderna.<br/><br/>🧪 Implementé una experiencia interactiva que combina diseño visual con contenido poético, integré galerías de imágenes, programación de actividades y secciones de contenido artístico, prioricé una interfaz responsiva y estilizada para dispositivos móviles y de escritorio y colaboré con el equipo creativo para reflejar el espíritu experimental del proyecto.",
    repository: "https://github.com/FedeCodeLab/expansiva",
    deploy: "https://expansiva.vercel.app/",
    techs: [
      {
        name: "Javascript",
        img: "/logos/javascript.png",
      },
      {
        name: "CSS",
        img: "/logos/css.svg",
      },
      {
        name: "HTML",
        img: "/logos/html.svg",
      },
    ],
    image: "/portadas/expansiva.png",
  },
  {
    title: "Deliveloz",
    type: "Proyecto",
    content:
      "Pagina web de delivery de comidas en donde uno puede registrarse, ingresar, usar carrito de comprar y pagar a través de Mercado Pago.",
    repository: "https://github.com/Delivelozz/deliveloz",
    deploy: "https://deliveloz.netlify.app/home",
    techs: [
      {
        name: "React",
        img: "/logos/react.svg",
      },
      {
        name: "Javascript",
        img: "/logos/javascript.png",
      },
      {
        name: "Tailwind",
        img: "/logos/tailwind.svg",
      },
      {
        name: "CSS",
        img: "/logos/css.svg",
      },
      {
        name: "Vercel",
        img: "/logos/vercel.svg",
      },
      {
        name: "Render",
        img: "/logos/render.png",
      },
      {
        name: "Firebase",
        img: "/logos/firebase.svg",
      },
      {
        name: "Sequelize",
        img: "/logos/sequelize.png",
      },
      {
        name: "Express",
        img: "/logos/express.svg",
      },
      {
        name: "PostgreSQL",
        img: "/logos/postgre.svg",
      },
      {
        name: "MUI",
        img: "/logos/mui.svg",
      },
      {
        name: "Cloudinary",
        img: "",
      },
    ],
    image: "/portadas/deliveloz.png",
  },
  {
    title: "Academia de Alemán",
    type: "Proyecto",
    content:
      "Landing Page diseñada y desarrollada como proyecto final para el curso Maquetación de sitios web dinámicos con Javascript y jQuery desde cero.",
    repository: "",
    deploy: "https://curso-aleman.surge.sh/",
    techs: [
      {
        name: "Javascript",
        img: "/logos/javascript.png",
      },
      {
        name: "Jquery",
        img: "/logos/jquery.png",
      },
      {
        name: "HTML",
        img: "/logos/html.svg",
      },
      {
        name: "CSS",
        img: "/logos/css.svg",
      },
    ],
    image: "/portadas/academia.png",
  },
  {
    title: "Ta Te Ti",
    type: "Proyecto",
    content:
      "Aplicación web de juego de Ta Te Ti desarrollada para poner en práctica mis conocimientos en Javascript.",
    repository: "https://github.com/FedeCodeLab/ta-te-ti",
    deploy: "https://ta-te-ti-hazel.vercel.app/",
    techs: [
      {
        name: "React",
        img: "/logos/react.svg",
      },
      {
        name: "Typescript",
        img: "/logos/typescript.png",
      },
      {
        name: "Javascript",
        img: "/logos/javascript.png",
      },
      {
        name: "CSS",
        img: "/logos/css.svg",
      },
      {
        name: "Vercel",
        img: "/logos/vercel.svg",
      },
    ],
    image: "/portadas/tateti.png",
  },
  {
    title: "Game of Thrones Quiz",
    type: "Proyecto",
    content:
      "Aplicación web de preguntas y respuestas desarrollada para poner en práctica mis conocimientos en Javascript.",
    repository: "https://github.com/FedeCodeLab/game-of-thrones-quiz",
    deploy: "https://game-of-thrones-quiz.vercel.app/",
    techs: [
      {
        name: "React",
        img: "/logos/react.svg",
      },
      {
        name: "Typescript",
        img: "/logos/typescript.png",
      },
      {
        name: "Javascript",
        img: "/logos/javascript.png",
      },
      {
        name: "CSS",
        img: "/logos/css.svg",
      },
      {
        name: "Vercel",
        img: "/logos/vercel.svg",
      },
    ],
    image: "/portadas/gameofthrones.png",
  },
];
