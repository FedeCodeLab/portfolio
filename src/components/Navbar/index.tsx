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
    <div className="select-none">
      <NavbarMobile />
      <div
        className={`hidden fixed z-30 top-0 h-[85px] lg:flex transition-all duration-500 w-full ${
          isScrolled ? "backdrop-blur-md bg-white/30 dark:bg-black/30" : ""
        }`}
      >
        <header className="mx-auto w-[90%] flex justify-between items-center">
          <LeftNav />
          <nav>
            <ul className="flex gap-5 items-center text-[17px] font-[400]">
              <li>
                <button
                  onClick={() => scrollToSection(skillsRef)}
                  className="group cursor-pointer text-slate-300"
                >
                  <span className="text-blue-400 group-hover:text-blue-200 transition-color duration-500">
                    01.{" "}
                  </span>
                  <span className="group-hover:text-white">Habilidades</span>
                </button>
              </li>

              <li>
                <button
                  onClick={() => scrollToSection(experienceRef)}
                  className="group cursor-pointer text-slate-300"
                >
                  <span className="text-blue-400 group-hover:text-blue-200 transition-color duration-500">
                    02.{" "}
                  </span>
                  <span className="group-hover:text-white">Experiencia</span>
                </button>
              </li>

              <li>
                <button
                  onClick={() => scrollToSection(porfolioRef)}
                  className="group cursor-pointer text-slate-300"
                >
                  <span className="text-blue-400 group-hover:text-blue-200 transition-color duration-500">
                    03.{" "}
                  </span>
                  <span className="group-hover:text-white">Portfolio</span>
                </button>
              </li>

              <li>
                <button
                  onClick={() => scrollToSection(timelineRef)}
                  className="group cursor-pointer text-slate-300"
                >
                  <span className="text-blue-400 group-hover:text-blue-200 transition-color duration-500">
                    04.{" "}
                  </span>
                  <span className="group-hover:text-white">Certificados</span>
                </button>
              </li>
            </ul>
          </nav>
          <RightNav />
        </header>
      </div>
    </div>
  );
};
