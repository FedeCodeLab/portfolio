"use client";

import UseVelocity from "./_components/UseVelocity";
import { useRefsStore } from "@/store/useRefsStore";
import { ListLogos } from "./_components/ListLogos";
import { useRef, useEffect } from "react";

export default function Tecnologies() {
  const skillsRef = useRef<HTMLDivElement>(null);
  const setRefs = useRefsStore((state) => state.setRefs);

  useEffect(() => {
    setRefs({ skillsRef });
  }, [setRefs]);

  return (
    <section ref={skillsRef} className="relative overflow-hidden">
      <div className="overflow-visible flex flex-col gap-14 md:pt-16">
        <h2 className="heading-3 text-center md:!text-[4xl] !font-bold text-neutral-800 dark:text-neutral-200">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 dark:from-blue-700 via-70% via-pink-600 to-pink-700">
            Habilidades
          </span>{" "}
          Técnicas
        </h2>

        <div className="flex flex-col gap-6">
          <UseVelocity baseVelocity={1.5}>
            <ListLogos start={0} end={11} animation="left" />
          </UseVelocity>
          <UseVelocity baseVelocity={-1.5}>
            <ListLogos start={11} end={22} animation="right" />
          </UseVelocity>
        </div>
      </div>
    </section>
  );
}
