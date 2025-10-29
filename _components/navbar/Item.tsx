"use client";

import { useRefsStore } from "@/store/useRefsStore";
import { ReactNode, RefObject } from "react";

interface ItemProps {
  sectionRef: any;
  span: string;
  children: ReactNode;
}

export const Item = ({ sectionRef, span, children }: ItemProps) => {
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
        className="group cursor-pointer text-neutral-800 dark:text-slate-300"
      >
        <span className="text-blue-500 dark:text-blue-400 group-hover:text-pink-700 dark:group-hover:text-pink-600 transition-color duration-500">
          {span}{" "}
        </span>
        <span className="group-hover:text-blue-800 dark:group-hover:text-white">
          {children}
        </span>
      </button>
    </li>
  );
};
