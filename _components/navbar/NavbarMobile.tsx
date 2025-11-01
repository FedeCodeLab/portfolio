"use client";

import { useMenuMobileStore } from "@/store/useMenuMobileStore";
import { Menu } from "../ui/icons";
import { useEffect } from "react";

export const NavbarMobile = () => {
  const { isOpen, toggleMenu } = useMenuMobileStore();

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <div className="fixed bg-[#FFFFFF] dark:bg-[#0b0d18] w-full py-4 px-6 flex lg:hidden items-center justify-between shadow-lg z-50">
      <h1 className="font-pixelifySans heading-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-700 hover:from-pink-700 hover:to-blue-400 transition-colors duration-300">
        FedeCodeLab
      </h1>

      <button
        aria-label="Toggle menu"
        onClick={toggleMenu}
        className="transition-transform text-neutral-700 dark:text-white cursor-pointer"
      >
        <Menu size={24} />
      </button>
    </div>
  );
};
