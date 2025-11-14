"use client";

import { NavbarMobile } from "./NavbarMobile";
import { useEffect, useState } from "react";
import { MenuMobile } from "./MenuMobile";
import { CenterNav } from "./CenterNav";
import { motion } from "framer-motion";
import { LeftNav } from "./LeftNav";
import { CTA } from "./CTA";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="select-none">
      <NavbarMobile />
      <MenuMobile />
      <div
        className={`hidden fixed z-30 top-0 h-[70px] lg:flex transition-all duration-500 w-full bg-[#FFFFFF] dark:bg-transparent ${
          isScrolled
            ? "dark:backdrop-blur-md dark:bg-neutral-950/30 border-b border-[#E8E8E8] dark:border-blue-950"
            : "border-b border-[#E8E8E8] dark:border-0 dark:border-transparent"
        }`}
      >
        <motion.header
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0 }}
          className="will-change-transform mx-auto w-[90%] flex justify-between items-center"
        >
          <LeftNav />
          <CenterNav />
          <CTA />
        </motion.header>
      </div>
    </div>
  );
};
