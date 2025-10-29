"use client";

import { useRefsStore } from "@/store/useRefsStore";
import { Item } from "./Item";

export const CenterNav = () => {
  const { experienceRef, portfolioRef, skillsRef, timelineRef, contactRef } =
    useRefsStore();

  return (
    <nav>
      <ul className="flex gap-5 items-center text-[16px] font-[400]">
        <Item span="01." sectionRef={skillsRef}>
          Habilidades
        </Item>

        <Item span="02." sectionRef={experienceRef}>
          Experiencia
        </Item>

        <Item span="03." sectionRef={portfolioRef}>
          Portfolio
        </Item>

        <Item span="04." sectionRef={timelineRef}>
          Certificados
        </Item>

        <Item span="05." sectionRef={contactRef}>
          Contacto
        </Item>
      </ul>
    </nav>
  );
};
