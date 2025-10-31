"use client";

import { useRefsStore } from "@/store/useRefsStore";
import { useEffect, useState } from "react";
import { Item } from "./Item";

function getActiveSection(
  refs: Array<{
    key: string;
    ref: React.RefObject<HTMLDivElement | null> | null;
  }>
) {
  let activeKey = null;
  let minDistance = Number.POSITIVE_INFINITY;
  let winTop = 0;
  refs.forEach(({ key, ref }) => {
    const el = ref?.current as HTMLDivElement | null;
    if (el) {
      const rect = el.getBoundingClientRect();
      const dist = Math.abs(rect.top - winTop);
      if (
        rect.top < window.innerHeight * 0.45 &&
        rect.bottom > window.innerHeight * 0.15
      ) {
        if (dist < minDistance) {
          minDistance = dist;
          activeKey = key;
        }
      }
    }
  });
  return activeKey;
}

export const CenterNav = () => {
  const { experienceRef, portfolioRef, skillsRef, timelineRef, contactRef } =
    useRefsStore();

  const sections = [
    { key: "skills", ref: skillsRef },
    { key: "experience", ref: experienceRef },
    { key: "portfolio", ref: portfolioRef },
    { key: "timeline", ref: timelineRef },
    { key: "contact", ref: contactRef },
  ];
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    function onScroll() {
      setActive(getActiveSection(sections));
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav>
      <ul className="flex gap-5 items-center text-[16px] font-[400]">
        <Item span="01." sectionRef={skillsRef} isActive={active === "skills"}>
          Habilidades
        </Item>
        <Item
          span="02."
          sectionRef={experienceRef}
          isActive={active === "experience"}
        >
          Experiencia
        </Item>
        <Item
          span="03."
          sectionRef={portfolioRef}
          isActive={active === "portfolio"}
        >
          Portfolio
        </Item>
        <Item
          span="04."
          sectionRef={timelineRef}
          isActive={active === "timeline"}
        >
          Certificados
        </Item>
        <Item
          span="05."
          sectionRef={contactRef}
          isActive={active === "contact"}
        >
          Contacto
        </Item>
      </ul>
    </nav>
  );
};
