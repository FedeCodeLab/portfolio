"use client";

import { ProjectCard } from "./_components/ProjectCard";
import { Project } from "@/types/project";
import { forwardRef, useState } from "react";

const projects: Project[] = [
  {
    title: "BeBot Design",
    type: "Experiencia laboral",
    content:
      "✨ Implementé Next-intl para la internacionalización (i18n) en múltiples idiomas y apliqué renderizado del lado del servidor (SSR) para optimizar la performance y el SEO. Desarrollé animaciones complejas con Framer Motion y diseñé la interfaz con Tailwind CSS, logrando un sistema escalable, consistente y orientado a la experiencia del usuario.<br/><br/>🧪 Llevé a cabo tareas de optimización SEO técnico, identificando y resolviendo problemas de indexación y rendimiento. Finalmente, realicé el deploy con Firebase Hosting y Functions, asegurando estabilidad y disponibilidad en producción.",
    repository: "",
    deploy: "https://bebot.design/",
    logo: "/brands/bebot.jpg",
    techs: [
      "Next.js",
      "Typescript",
      "Javascript",
      "Tailwind",
      "Shadcn",
      "CSS",
      "Framer Motion",
      "i18n",
      "Firebase",
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
      "Next.js",
      "Typescript",
      "Tailwind",
      "CSS",
      "Framer Motion",
      "Firebase",
      "Octopus",
      "Voiceflow",
      "FTP",
      "Zustand",
    ],
    image: "/portadas/cux.png",
  },
  {
    title: "Spotify Clone",
    type: "Proyecto",
    content:
      "✨ Desarrollé un clon de Spotify con Astro.js, recreando la experiencia de un reproductor de música moderno y funcional.<br/><br/>🧪 Implementé la reproducción de canciones, control de volumen e interacción entre distintos álbumes, logrando una interfaz responsiva y fluida que emula la experiencia original de la plataforma.",
    repository: "https://github.com/FedeCodeLab/SpotifyClone",
    deploy: "https://spotify-clone-fedecodelab.vercel.app/",
    techs: [
      "Astro",
      "Typescript",
      "Javascript",
      "Svelte",
      "React",
      "Tailwind",
      "Vercel",
    ],
    image: "/portadas/spotify.png",
  },
  {
    title: "Expansiva",
    type: "Proyecto",
    content:
      "✨ Desarrollé el sitio web de Expansiva, una plataforma para un evento artístico que fusiona poesía, tecnología y estética visual. El sitio muestra el programa, artistas invitados, imagen generativa y contenido multimedia de una forma inmersiva y moderna.<br/><br/>🧪 Implementé una experiencia interactiva que combina diseño visual con contenido poético, integré galerías de imágenes, programación de actividades y secciones de contenido artístico, prioricé una interfaz responsiva y estilizada para dispositivos móviles y de escritorio y colaboré con el equipo creativo para reflejar el espíritu experimental del proyecto.",
    repository: "https://github.com/FedeCodeLab/Expansiva",
    deploy: "https://expansiva.vercel.app/",
    techs: ["Javascript", "CSS", "HTML"],
    image: "/portadas/expansiva.png",
  },
  {
    title: "Deliveloz",
    type: "Proyecto",
    content:
      "Pagina web de delivery de comidas en donde uno puede registrarse, ingresar, usar carrito de comprar y pagar a través de Mercado Pago.",
    repository: "https://github.com/Delivelozz/DeliVeloz",
    deploy: "https://deliveloz.netlify.app/home",
    techs: [
      "React",
      "Javascript",
      "Tailwind",
      "CSS",
      "Vercel",
      "Render",
      "Firebase",
      "Sequelize",
      "Express",
      "PostgreSQL",
      "MUI",
      "Cloudinary",
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
    techs: ["Javascript", "Jquery", "HTML", "CSS"],
    image: "/portadas/academia.png",
  },
  {
    title: "Ta Te Ti",
    type: "Proyecto",
    content:
      "Aplicación web de juego de Ta Te Ti desarrollada para poner en práctica mis conocimientos en Javascript.",
    repository: "https://github.com/FedeCodeLab/Ta-Te-Ti",
    deploy: "https://ta-te-ti-hazel.vercel.app/",
    techs: ["React", "Typescript", "Javascript", "CSS", "Vercel"],
    image: "/portadas/tateti.png",
  },
  {
    title: "Game of Thrones Quiz",
    type: "Proyecto",
    content:
      "Aplicación web de preguntas y respuestas desarrollada para poner en práctica mis conocimientos en Javascript.",
    repository: "https://github.com/FedeCodeLab/Game-Of-Thrones-Quiz",
    deploy: "https://game-of-thrones-quiz.vercel.app/",
    techs: ["React", "Typescript", "Javascript", "CSS", "Vercel"],
    image: "/portadas/gameofthrones.png",
  },
];

export const Portfolio = forwardRef<HTMLDivElement>((_, ref) => {
  const [visibleCount, setVisibleCount] = useState(3);

  const handleLoadMore = () => {
    setVisibleCount(projects.length);
  };

  return (
    <section
      ref={ref}
      className="w-[90%] max-w-[1250px] mx-auto flex flex-col items-center justify-center gap-8 pt-20"
    >
      <h2 className="heading-3">Proyectos</h2>
      <div className="grid grid-cols-1 gap-16">
        {projects.slice(0, visibleCount).map((project, idx) => (
          <ProjectCard
            key={idx}
            title={project.title}
            type={project.type}
            content={project.content}
            repository={project.repository}
            deploy={project.deploy}
            image={project.image}
            techs={project.techs}
            list={project.list}
            logo={project.logo}
          />
        ))}
      </div>

      {visibleCount < projects.length && (
        <button
          onClick={handleLoadMore}
          className="px-6 py-3 rounded-md border-blue-700 bg-blue-800 hover:bg-blue-900 text-white cursor-pointer"
        >
          Ver más
        </button>
      )}
    </section>
  );
});
