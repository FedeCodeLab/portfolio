"use client";

import { useFilterStore } from "@/store/filterStore";
import { useRefsStore } from "@/store/useRefsStore";
import { projects } from "@/data/projectsData";
import { ProjectCard } from "./ProjectCard";
import { Project } from "@/types/project";
import { useRef, useEffect } from "react";
import { Button } from "../ui/Button";
import { Filters } from "./Filters";

export const Portfolio = () => {
  const portfolioRef = useRef<HTMLDivElement>(null);
  const setRefs = useRefsStore((state) => state.setRefs);
  const filterType = useFilterStore((state) => state.filterType);
  const visibleCount = useFilterStore((state) => state.visibleCount);
  const setVisibleCount = useFilterStore((state) => state.setVisibleCount);

  useEffect(() => {
    setRefs({ portfolioRef });
  }, [setRefs]);

  const projectsFiltered =
    filterType === "Todos"
      ? projects
      : projects.filter((p: Project) => p.type === filterType);

  const handleLoadMore = () => {
    setVisibleCount(projectsFiltered.length);
  };

  return (
    <section
      ref={portfolioRef}
      className="w-[90%] max-w-[1250px] mx-auto flex flex-col items-center justify-center gap-14 pt-20 text-neutral-800 dark:text-neutral-200"
    >
      <div className="flex flex-col gap-6 items-center w-full">
        <h2 className="heading-3 md:!text-[3rem] !font-semibold">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 dark:from-blue-700 via-70% via-pink-600 to-pink-700">
            Proyectos
          </span>{" "}
          Destacados
        </h2>
        <Filters />
      </div>
      <div className="grid grid-cols-1 gap-16 w-full">
        {projectsFiltered
          .slice(0, visibleCount)
          .map((project: Project, idx: number) => (
            <ProjectCard
              key={filterType + "-" + idx}
              title={project.title}
              type={project.type}
              content={project.content}
              repository={project.repository}
              deploy={project.deploy}
              image={project.image}
              techs={project.techs}
              list={project.list}
              logo={project.logo}
            />
          ))}
      </div>
      {visibleCount < projectsFiltered.length && (
        <Button className="text-white" onClick={handleLoadMore}>
          Ver más
        </Button>
      )}
    </section>
  );
};
