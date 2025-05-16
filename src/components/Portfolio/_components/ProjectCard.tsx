import { Project } from "@/types/project";
import Image from "next/image";

export const ProjectCard = ({
  title,
  content,
  type,
  href,
  techs,
  image,
}: Project) => {
  return (
    <article>
      <div>
        <div>
          <h4>{title}</h4>
          <p>{href}</p>
          <p>{techs}</p>
        </div>
        <p>{type}</p>
      </div>
      {content}
      <Image src={image} width={200} height={200} alt="Portada" />
    </article>
  );
};
