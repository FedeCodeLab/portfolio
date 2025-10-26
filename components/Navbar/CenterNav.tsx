"use client";

import { useRefsStore } from "@/store/useRefsStore";
import { RefObject } from "react";

export const CenterNav = () => {
  const { experienceRef, portfolioRef, skillsRef, timelineRef } =
    useRefsStore();

  const scrollToSection = (ref: RefObject<HTMLElement> | null) => {
    if (ref?.current) {
      const offsetTop = ref.current.offsetTop;
      const offset = 40;
      window.scrollTo({
        top: offsetTop - offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav>
      <ul className="flex gap-5 items-center text-[17px] font-[400]">
        <li>
          <button
            onClick={() => scrollToSection(skillsRef)}
            className="group cursor-pointer text-slate-300"
          >
            <span className="text-blue-400 group-hover:text-blue-200 transition-color duration-500">
              01.{" "}
            </span>
            <span className="group-hover:text-white">Habilidades</span>
          </button>
        </li>

        <li>
          <button
            onClick={() => scrollToSection(experienceRef)}
            className="group cursor-pointer text-slate-300"
          >
            <span className="text-blue-400 group-hover:text-blue-200 transition-color duration-500">
              02.{" "}
            </span>
            <span className="group-hover:text-white">Experiencia</span>
          </button>
        </li>

        <li>
          <button
            onClick={() => scrollToSection(portfolioRef)}
            className="group cursor-pointer text-slate-300"
          >
            <span className="text-blue-400 group-hover:text-blue-200 transition-color duration-500">
              03.{" "}
            </span>
            <span className="group-hover:text-white">Portfolio</span>
          </button>
        </li>

        <li>
          <button
            onClick={() => scrollToSection(timelineRef)}
            className="group cursor-pointer text-slate-300"
          >
            <span className="text-blue-400 group-hover:text-blue-200 transition-color duration-500">
              04.{" "}
            </span>
            <span className="group-hover:text-white">Certificados</span>
          </button>
        </li>
      </ul>
    </nav>
  );
};
