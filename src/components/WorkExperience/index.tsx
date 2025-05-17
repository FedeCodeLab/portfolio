import { ExperienceCard } from "./_components/ExperienceCard";

const experiences = [
  {
    title: "Desarrollador Front-end",
    type: "Contrato Temporal",
    company: "BeBot (Argentina - Remoto) | Oct 2024 • Actualidad",
    content:
      "Actualmente formo parte del equipo de desarrollo como Desarrollador Frontend. Mis responsabilidades incluyen la creación de interfaces de usuario interactivas, trabajando en colaboración con el equipo de diseño UX/UI para garantizar una experiencia de usuario coherente y visualmente atractiva. Utilizo tecnologías como Next.js, JavaScript, TypeScript, Tailwind CSS y ShadCN.",
  },
  {
    title: "Desarrollador Front-end",
    type: "Contrato de Prácticas",
    company: "Kiura (Colombia - Remoto) | May 2024 • Oct 2024",
    content:
      "Formé parte del equipo de desarrollo, contribuyendo al diseño y desarrollo de interfaces de usuario interactivas. También colaboré con el equipo back-end en la integración de APIs y trabajé junto a diseñadores UX/UI para asegurar una experiencia de usuario coherente y visualmente atractiva. Utilicé tecnologías como React, JavaScript, TypeScript, Tailwind CSS, Material UI y Redux para construir y optimizar las interfaces, garantizando una alta calidad en el diseño y la funcionalidad.",
  },
  {
    title: "Desarrollador FullStack",
    type: "Freelance",
    company: "Perniciosa Ediciones (Argentina - Remoto) | Ene 2023 • Nov 2023",
    content:
      "Desarrollé y diseñé el sitio web para una editorial de libros de poesía, con sede en San Luis, Argentina. Utilicé HTML, CSS, JavaScript, jQuery, PHP y MySQL para construir la página. También diseñé la base de datos, implementé la conexión entre el frontend y el backend, y aseguré la correcta integración y funcionalidad de los formularios y consultas. Además, creé un diseño web visualmente atractivo y funcional, adaptado a las necesidades de la editorial.",
  },
];

export const WorkExperience = () => {
  return (
    <section className="w-[90%] mx-auto flex flex-col items-center justify-center gap-8 py-20">
      <h2 className="heading-3">Experiencia Laboral</h2>
      <div className="flex flex-col gap-6">
        {experiences.map((exp, idx) => (
          <ExperienceCard
            key={idx}
            title={exp.title}
            type={exp.type}
            company={exp.company}
            content={exp.content}
          />
        ))}
      </div>
    </section>
  );
};
