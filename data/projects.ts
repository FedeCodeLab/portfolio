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
    images: ["/portadas/bebot/bebot.PNG", "/portadas/bebot/training.mp4", "/portadas/bebot/blog.png", "/portadas/bebot/people.mp4", "/portadas/bebot/cards.png", "/portadas/bebot/contact.png", "/portadas/bebot/tab.png"]
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
    images: ["/portadas/cux/hero.png", "/portadas/cux/shapes.mp4", "/portadas/cux/courses.png", "/portadas/cux/trainingVideo.mp4", "/portadas/cux/highlight.png", "/portadas/cux/training.png"]

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
        name: "Vercel",
        img: "/logos/vercel2.png",
      },
      {
        name: "LLM",
        img: "",
      },
    ],
    image: "/portadas/chatbot.png",
    images: ["/portadas/chatbot/chatbot.png", "/portadas/chatbot/chatbot.mp4", "/portadas/chatbot/empty.png", "/portadas/chatbot/ask.png"]
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
        img: "/logos/vercel2.png",
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
    images: ["/portadas/strangerthings/stranger.png", "/portadas/strangerthings/highlight.png", "/portadas/strangerthings/videos.png", "/portadas/strangerthings/quiz.png", "/portadas/strangerthings/footer.png"]

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
        name: "Vercel",
        img: "/logos/vercel2.png",
      },
      {
        name: "API REST",
        img: "",
      },
    ],
    image: "/portadas/traductor.png",
    images: ["/portadas/traductor/chino.png", "/portadas/traductor/traductor.mp4", "/portadas/traductor/ingles.png", "/portadas/traductor/light.png", "/portadas/traductor/traductor.png"]
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
        name: "Vercel",
        img: "/logos/vercel2.png",
      },
      {
        name: "API REST",
        img: "",
      },
    ],
    image: "/portadas/github.png",
    images: ["/portadas/github/portada.png", "/portadas/github/search.png", "/portadas/github/profile.png", "/portadas/github/profile2.png", "/portadas/github/projects.png"]
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
        img: "/logos/vercel2.png",
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
      {
        name: "Vercel",
        img: "/logos/vercel2.png",
      },
    ],
    image: "/portadas/expansiva.png",
    images: ["/portadas/expansiva/hero.png", "/portadas/expansiva/video.mp4", "/portadas/expansiva/expansiva.png", "/portadas/expansiva/dates.png", "/portadas/expansiva/footer.png"]
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
        img: "/logos/vercel2.png",
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
        img: "/logos/cloudinary.webp",
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
      {
        name: "Surge",
        img: "/logos/surge.png",
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
        img: "/logos/vercel2.png",
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
        img: "/logos/vercel2.png",
      },
    ],
    image: "/portadas/gameofthrones.png",
  },
];
