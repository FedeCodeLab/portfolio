"use client";

import { ExperienceCard } from "./_components/ExperienceCard";
import { useRefsStore } from "@/store/useRefsStore";
import { experiences } from "@/data/experiences";
import { useEffect, useRef } from "react";

export const WorkExperience = () => {
  const experienceRef = useRef<HTMLDivElement>(null);
  const setRefs = useRefsStore((state) => state.setRefs);

  useEffect(() => {
    setRefs({ experienceRef });
  }, [setRefs]);

  return (
    <section
      ref={experienceRef}
      className="will-change-transform w-[90%] max-w-[1250px] mx-auto flex flex-col items-center justify-center gap-14 pt-20"
    >
      <h2 className="heading-3 text-center md:!text-[4xl] !font-bold text-neutral-800 dark:text-neutral-200">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 dark:from-blue-700 via-70% via-pink-600 to-pink-700">
          Experiencia
        </span>{" "}
        Laboral
      </h2>

      <div className="flex flex-col gap-6 min-w-full">
        {experiences.map((exp, idx) => (
          <ExperienceCard
            key={idx}
            title={exp.title}
            type={exp.type}
            company={exp.company}
            content={exp.content}
            img={exp.img}
            name={exp.name}
            techs={exp.techs}
          />
        ))}
      </div>
    </section>
  );
};
