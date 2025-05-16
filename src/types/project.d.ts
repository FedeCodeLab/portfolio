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
  | "React";

export interface Project {
  title: string;
  type: string;
  href: string;
  content: string;
  techs: ProjectTech[];
  image: string;
}
