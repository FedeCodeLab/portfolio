import { ProjectCard } from "./_components/ProjectCard";
import { Project } from "@/types/project";

const projects: Project[] = [
  {
    title: "BeBot Design",
    type: "Experiencia Laboral",
    content:
      "BeBot Design es una página web diseñada para destacar la propuesta de la empresa en la creación de bots con identidad y personalidad únicas. Este proyecto refleja una interfaz clara y profesional que organiza toda la información esencial de la empresa, potenciando su presencia digital.",
    href: "#",
    techs: ["Javascript", "Typescript", "Tailwind"],
    image: "/portfolio.png",
  },
  {
    title: "Spotify Clone",
    type: "Proyecto",
    content:
      "Clon de Spotify realizado con Astro.js en el cual se puede reproducir música, interactuar con el volumen y cambiar las canciones entre albums.",
    href: "#",
    techs: ["Javascript", "Typescript", "Tailwind"],
    image: "/portfolio.png",
  },
  {
    title: "Deliveloz",
    type: "Proyecto",
    content:
      "Pagina web de delivery de comidas en donde uno puede registrarse, ingresar, usar carrito de comprar y pagar a través de Mercado Pago.",
    href: "#",
    techs: ["Javascript", "Typescript", "Tailwind"],
    image: "/portfolio.png",
  },
  {
    title: "Academia de Alemán",
    type: "Proyecto final para el curso de maquetación con Javascript",
    content:
      "Landing Page diseñada y desarrollada como proyecto final para el curso Maquetación de sitios web dinámicos con Javascript y jQuery desde cero.",
    href: "#",
    techs: ["Javascript", "Typescript", "Tailwind"],
    image: "/portfolio.png",
  },
  {
    title: "Ta Te Ti",
    type: "Proyecto",
    content:
      "Aplicación web de juego de Ta Te Ti desarrollada para poner en práctica mis conocimientos en Javascript.",
    href: "#",
    techs: ["Javascript", "Typescript", "Tailwind"],
    image: "/portfolio.png",
  },
  {
    title: "Game of Thrones Quiz",
    type: "Proyecto",
    content:
      "Aplicación web de preguntas y respuestas desarrollada para poner en práctica mis conocimientos en Javascript.",
    href: "#",
    techs: ["Javascript", "Typescript", "Tailwind"],
    image: "/portfolio.png",
  },
];

export const Portfolio = () => {
  return (
    <section>
      <h2>Experiencia Laboral</h2>
      {projects.map((project, idx) => (
        <ProjectCard
          key={idx}
          title={project.title}
          type={project.type}
          content={project.content}
          href={project.href}
          image={project.image}
          techs={project.techs}
        />
      ))}
    </section>
  );
};
