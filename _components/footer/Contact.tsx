"use client";

import { useRefsStore } from "@/store/useRefsStore";
import { Button } from "../ui/Button";
import { RefObject } from "react";

export const Contact = () => {
  const { contactRef } = useRefsStore();

  const scrollToSection = (ref: RefObject<HTMLElement | null> | null) => {
    const element = ref?.current;
    if (element) {
      const offsetTop = element.offsetTop;
      const offset = 40;
      window.scrollTo({
        top: offsetTop - offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center lg:justify-start text-center lg:text-start gap-6 flex-1 max-w-[400px]">
      <div className="flex flex-col">
        <div className="h-[40px]">
          <h4 className="text-[1.1rem] font-[600] dark:text-gray-400">
            ¿Tienes un proyecto?
          </h4>
        </div>

        <div className="flex flex-col gap-3">
          <p>¡Hablemos y hagámoslo realidad!</p>
          <Button
            onClick={() => scrollToSection(contactRef)}
            className="text-white !bg-[#3098F3] hover:!bg-blue-700  dark:!bg-blue-800 dark:hover:!bg-blue-900"
          >
            Comenzar proyecto
          </Button>
        </div>
      </div>
    </div>
  );
};
