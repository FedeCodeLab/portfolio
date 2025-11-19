export interface ProjectTechObject {
  name: string;
  img?: string;
}

export type ProjectTech = string | ProjectTechObject;

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
  images?: string[];
}

export interface ProjectLinks {
  repository: string;
  deploy: string;
}
