"use client";

import { NavbarMobile } from "./NavbarMobile";
import { useEffect, useState } from "react";
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
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="select-none"
    >
      <NavbarMobile />
      <div
        className={`hidden fixed z-30 top-0 h-[70px] lg:flex transition-all duration-500 w-full ${
          isScrolled
            ? "backdrop-blur-md bg-[#FFFFFF] dark:bg-neutral-950/30 shadow-lg dark:shadow-none dark:border-b dark:border-blue-950"
            : "border-b border-transparent shadow-none"
        }`}
      >
        <header className="mx-auto w-[90%] flex justify-between items-center">
          <LeftNav />
          <CenterNav />
          <CTA />
        </header>
      </div>
    </motion.div>
  );
};
