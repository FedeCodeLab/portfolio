import { ProjectCard } from "./_components/ProjectCard";
import { Project } from "@/types/project";
import { forwardRef } from "react";

const projects: Project[] = [
  {
    title: "BeBot Design",
    type: "Experiencia Laboral",
    content:
      "BeBot Design es una web que presenta la propuesta de la empresa en la creación de bots con identidad propia, mediante una interfaz clara y profesional que refuerza su presencia digital.",
    repository: "",
    deploy: "https://bebot.design/",
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
    title: "Spotify Clone",
    type: "Proyecto",
    content:
      "Clon de Spotify realizado con Astro.js en el cual se puede reproducir música, interactuar con el volumen y cambiar las canciones entre albums.",
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
  return (
    <section
      ref={ref}
      className="w-[90%] max-w-[1250px] mx-auto flex flex-col items-center justify-center gap-8 pt-20"
    >
      <h2 className="heading-3">Proyectos</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {projects.map((project, idx) => (
          <ProjectCard
            key={idx}
            title={project.title}
            type={project.type}
            content={project.content}
            repository={project.repository}
            deploy={project.deploy}
            image={project.image}
            techs={project.techs}
          />
        ))}
      </div>
    </section>
  );
});
