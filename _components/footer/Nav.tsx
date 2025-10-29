"use client";

import { useRefsStore } from "@/store/useRefsStore";
import { Item } from "./Item";

export const Nav = () => {
  const { experienceRef, portfolioRef, skillsRef, timelineRef } =
    useRefsStore();

  return (
    <div className="flex-1 text-center lg:text-start flex flex-col items-center justify-center gap-6 max-w-[400px]">
      <div className="flex flex-col">
        <div className="h-[40px]">
          <h4 className="text-[1.1rem] font-[600]">Enlaces</h4>
        </div>

        <ul className="flex flex-col gap-2">
          <li>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="cursor-pointer hover:text-blue-800 dark:hover:text-neutral-200"
            >
              Inicio
            </button>
          </li>

          <Item sectionRef={skillsRef}>Habilidades</Item>

          <Item sectionRef={experienceRef}>Experiencia</Item>

          <Item sectionRef={portfolioRef}>Portfolio</Item>

          <Item sectionRef={timelineRef}>Certificados</Item>
        </ul>
      </div>
    </div>
  );
};
