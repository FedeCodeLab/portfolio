"use client";

import { useRefsStore } from "@/store/useRefsStore";
import { ReactNode, RefObject } from "react";

interface ItemProps {
  sectionRef: any;
  children: ReactNode;
}

export const Item = ({ sectionRef, children }: ItemProps) => {
  useRefsStore();

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
    <li>
      <button
        onClick={() => scrollToSection(sectionRef)}
        className="cursor-pointer hover:text-blue-800 dark:hover:text-neutral-200"
      >
        {children}
      </button>
    </li>
  );
};
