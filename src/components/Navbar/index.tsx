"use client";

import { RefObject } from "react";
import { useEffect, useState } from "react";
import { LeftNav } from "./_components/LeftNav";
import { RightNav } from "./_components/RightNav";
import { NavbarMobile } from "./_components/NavbarMobile";

export const Navbar = ({
  experienceRef,
  porfolioRef,
  skillsRef,
  timelineRef,
}: NavbarProps) => {
  // ---------------- Para el cambio del fondo de la navbar al hacer scroll ----------------
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ---------------- Para scrollear a distintas secciones ----------------

  const scrollToSection = (ref: RefObject<HTMLElement>) => {
    if (ref.current) {
      const offsetTop = ref.current.offsetTop;
      const offset = 40;
      window.scrollTo({
        top: offsetTop - offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <NavbarMobile />
      <header
        className={`hidden fixed z-30 top-0 w-full h-[85px] lg:flex justify-between items-center px-6 transition-all duration-300 ${
          isScrolled ? "backdrop-blur-md bg-white/30 dark:bg-black/30" : ""
        }`}
      >
        <LeftNav />
        <nav>
          <ul className="flex gap-5 items-center text-[16px] font-[500]">
            <li>
              <button
                onClick={() => scrollToSection(skillsRef)}
                className="cursor-pointer text-slate-300 font-semibold hover:text-white"
              >
                Habilidades
              </button>
            </li>

            <li>
              <button
                onClick={() => scrollToSection(experienceRef)}
                className="cursor-pointer  text-slate-300 font-semibold hover:text-white"
              >
                Experiencia
              </button>
            </li>

            <li>
              <button
                onClick={() => scrollToSection(porfolioRef)}
                className="cursor-pointer text-slate-300  font-semibold hover:text-white"
              >
                Portafolio
              </button>
            </li>

            <li>
              <button
                onClick={() => scrollToSection(timelineRef)}
                className="cursor-pointer text-slate-300 font-semibold hover:text-white"
              >
                Certificados
              </button>
            </li>
          </ul>
        </nav>
        <RightNav />
      </header>
    </>
  );
};
