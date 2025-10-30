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
  | "FTP"
  | "MUI"
  | "Cloudinary"
  | "Jquery"
  | "React"
  | "Zustand"
  | "Gemini"
  | "LLM"
  | "Ssr"
  | "API REST";

export interface Project {
  title: string;
  type: string;
  logo?: string;
  list?: string[];
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
