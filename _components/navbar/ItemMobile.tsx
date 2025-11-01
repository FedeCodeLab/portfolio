"use client";

import { useRefsStore } from "@/store/useRefsStore";
import { useMenuMobileStore } from "@/store/useMenuMobileStore";
import { ReactNode, RefObject } from "react";

interface ItemProps {
  sectionRef: any;
  children: ReactNode;
}

export const ItemMobile = ({ sectionRef, children }: ItemProps) => {
  useRefsStore();
  const { setIsOpen } = useMenuMobileStore();

  const scrollToSection = (ref: RefObject<HTMLElement | null> | null) => {
    const element = ref?.current;
    if (element) {
      const offsetTop = element.offsetTop;
      const offset = 40;
      window.scrollTo({
        top: offsetTop - offset,
        behavior: "smooth",
      });
      setIsOpen(false);
    }
  };

  return (
    <button
      onClick={() => scrollToSection(sectionRef)}
      className="dark:hover:text-white hover:bg-neutral-300 hover:dark:bg-[#141622] py-3 cursor-pointer text-neutral-800 dark:text-slate-300"
    >
      <span className="">{children}</span>
    </button>
  );
};
