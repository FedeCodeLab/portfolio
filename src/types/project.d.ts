export type ProjectTech =
  | "Next.js"
  | "CSS"
  | "Redux"
  | "HTML"
  | "Javascript"
  | "Typescript"
  | "Figma"
  | "Node.js"
  | "Firebase"
  | "Framer Motion"
  | "Tailwind"
  | "Vercel"
  | "Express"
  | "PostgreSQL"
  | "Sequelize"
  | "Shadcn"
  | "Framer Motion"
  | "i18n"
  | "Firebase"
  | "Astro"
  | "Svelte"
  | "Render"
  | "Octopus"
  | "Voiceflow"
  | "MUI"
  | "Cloudinary"
  | "Jquery"
  | "React";

export interface Project {
  title: string;
  type: string;
  repository: string;
  deploy: string;
  content: string;
  techs: ProjectTech[];
  image: string;
}

export interface ProjectLinks {
  repository: string;
  deploy: string;
}
