import { Project } from "@/types/project";
import Image from "next/image";
import { CTA } from "./CTA";

export const ProjectCard = ({
  title,
  content,
  type,
  repository,
  deploy,
  techs,
  image,
}: Project) => {
  return (
    <article className="relative overflow-hidden rounded-lg flex flex-col">
      <div className="absolute inset-0 bg-neutral-900 opacity-50 backdrop-blur-xl z-0" />

      <div className="relative z-10 flex flex-col h-full">
        <div className="p-6 flex flex-col flex-1">
          <div className="flex flex-col gap-2">
            <div>
              <h4 className="text-lg">{title}</h4>
              <p className="text-sm text-gray-400">{type}</p>
            </div>
            <p className="text-gray-400">{content}</p>

            <div className="flex flex-wrap gap-2 mt-2">
              {techs.map((tech, index) => (
                <span
                  key={index}
                  className="bg-emerald-800 text-white text-xs px-2 py-1 rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="mt-auto pt-6">
            <CTA repository={repository} deploy={deploy} />
          </div>
        </div>

        <div className="aspect-video w-full relative">
          <Image src={image} fill alt="Portada" className="object-cover" />
        </div>
      </div>
    </article>
  );
};
