"use client";

import { ExperienceCard } from "./_components/ExperienceCard";
import { useRefsStore } from "@/store/useRefsStore";
import { useEffect, useRef } from "react";

const experiences = [
  {
    title: "Desarrollador Front-end",
    type: "Contrato Temporal",
    company: "BeBot (Argentina - Remoto) | Oct 2024 • Actualidad",
    name: "BeBot",
    img: "/brands/bebot.jpg",
    content:
      "Actualmente formo parte del equipo de desarrollo como Desarrollador Frontend, donde construyo interfaces escalables, mantenibles y orientadas al detalle. Desarrollo componentes reutilizables y animaciones con Framer Motion, aplicando Tailwind CSS para lograr un diseño coherente y visualmente atractivo. Implemento un chatbot con Voiceflow, optimizo la integración y aplico SSR para mejorar el rendimiento y el SEO. Además, gestiono el estado global con Zustand, integro i18n con Next-intl para la internacionalización y realizo despliegues en Firebase y vía FTP, garantizando estabilidad y entregas confiables. Trabajo en conjunto con el equipo de diseño UX para asegurar una experiencia de usuario fluida y consistente.",
  },
  {
    title: "Desarrollador Front-end",
    type: "Contrato de Prácticas",
    company: "Kiura (Colombia - Remoto) | May 2024 • Oct 2024",
    name: "Kiura",
    img: "/brands/kiura.png",
    content:
      "Formé parte del equipo de desarrollo, contribuyendo al diseño y desarrollo de interfaces de usuario interactivas. También colaboré con el equipo back-end en la integración de APIs y trabajé junto a diseñadores UX/UI para asegurar una experiencia de usuario coherente y visualmente atractiva. Utilicé tecnologías como React, JavaScript, TypeScript, Tailwind CSS, Material UI y Redux para construir y optimizar las interfaces, garantizando una alta calidad en el diseño y la funcionalidad.",
  },
];

export const WorkExperience = () => {
  const experienceRef = useRef<HTMLDivElement>(null);
  const setRefs = useRefsStore((state) => state.setRefs);

  useEffect(() => {
    setRefs({ experienceRef });
  }, [setRefs]);

  return (
    <section
      ref={experienceRef}
      className="w-[90%] max-w-[1250px] mx-auto flex flex-col items-center justify-center gap-14 pt-20"
    >
      <h2 className="heading-3 md:!text-[3rem] !font-semibold text-neutral-800 dark:text-neutral-200">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 dark:from-blue-700 via-70% via-pink-600 to-pink-700">
          Experiencia
        </span>{" "}
        Laboral
      </h2>
      <div className="flex flex-col gap-6 min-w-full">
        {experiences.map((exp, idx) => (
          <ExperienceCard
            key={idx}
            title={exp.title}
            type={exp.type}
            company={exp.company}
            content={exp.content}
            img={exp.img}
            name={exp.name}
          />
        ))}
      </div>
    </section>
  );
};
