import { forwardRef } from "react";
import { ExperienceCard } from "./_components/ExperienceCard";

const experiences = [
  {
    title: "Desarrollador Front-end",
    type: "Contrato Temporal",
    company: "BeBot (Argentina - Remoto) | Oct 2024 • Actualidad",
    name: "BeBot",
    img: "/brands/bebot.jpg",
    content:
      "Actualmente formo parte del equipo de desarrollo como Desarrollador Frontend, donde me especializo en construir interfaces intuitivas e interactivas. Trabajo en estrecha colaboración con el equipo de diseño UX/UI para garantizar una experiencia de usuario coherente, accesible y visualmente atractiva. Utilizo tecnologías modernas como Next.js, TypeScript, Tailwind CSS y ShadCN, y he implementado soporte multilenguaje con i18n para escalar la aplicación a usuarios globales.",
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

export const WorkExperience = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <section
      ref={ref}
      className="w-[90%] max-w-[1250px] mx-auto flex flex-col items-center justify-center gap-8 pt-20"
    >
      <h2 className="heading-3">Experiencia Laboral</h2>
      <div className="flex flex-col gap-6">
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
});
