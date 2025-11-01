import { useMenuMobileStore } from "@/store/useMenuMobileStore";
import { Close, Download, Email } from "../ui/icons";
import { useRefsStore } from "@/store/useRefsStore";
import { ToggleTheme } from "./ToggleTheme";
import { ItemMobile } from "./ItemMobile";
import { CTA } from "../ui/CTA";
import Link from "next/link";

export const MenuMobile = () => {
  const { experienceRef, portfolioRef, skillsRef, timelineRef, contactRef } =
    useRefsStore();
  const { isOpen, setIsOpen } = useMenuMobileStore();
  return (
    <div
      className={`fixed top-0 right-0 h-screen w-full bg-white dark:bg-[#0b0d18] transform transition-transform duration-300 ease-in-out flex flex-col justify-between ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } z-50`}
    >
      <div className="flex flex-col w-full">
        <div className="w-[90%] mx-auto py-6 flex justify-between items-center">
          <ToggleTheme />
          <button
            onClick={() => setIsOpen(false)}
            className="cursor-pointer text-neutral-700 dark:text-white"
          >
            <Close size={24} />
          </button>
        </div>
        <div className="flex flex-col divide-y divide-gray-300 text-center dark:divide-gray-700  border-gray-300 dark:border-gray-700">
          <button
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
              setIsOpen(false);
            }}
            className="hover:bg-neutral-300 hover:dark:bg-[#141622] py-3 group cursor-pointer text-neutral-800 dark:text-slate-300"
          >
            <span className="dark:hover:text-white">Inicio</span>
          </button>
          <ItemMobile sectionRef={skillsRef}>Habilidades</ItemMobile>
          <ItemMobile sectionRef={experienceRef}>Experiencia</ItemMobile>
          <ItemMobile sectionRef={portfolioRef}>Portfolio</ItemMobile>
          <ItemMobile sectionRef={timelineRef}>Certificados</ItemMobile>
          <ItemMobile sectionRef={contactRef}>Contacto</ItemMobile>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="flex justify-between gap-3 p-6">
          <div className="flex flex-col justify-start items-start gap-3">
            <p className="font-[600] text-[14px] text-neutral-600 dark:text-neutral-400">
              Conecta conmigo
            </p>
            <CTA />
          </div>

          <div className="flex justify-end items-end">
            <Link
              href="/CV_GuzmanFederico_Frontend.pdf"
              className="font-pixelifySans flex justify-center items-center gap-2 whitespace-nowrap rounded-[50px] cursor-pointer font-[500] px-4 py-2 text-[14px] border-2 border-transparent dark:border-gray-400 bg-gray-200 hover:bg-gray-300 dark:bg-transparent dark:hover:bg-[#1E293B] dark:hover:border-[#1E293B] text-neutral-800 dark:text-slate-300 dark:hover:text-white transition duration-300"
              target="_blank"
              download
            >
              <Download size={14} />
              Descargar CV
            </Link>
          </div>
        </div>

        <div className="border-t dark:border-gray-700  border-gray-300 text-center">
          <div className="flex flex-col gap-3 p-6 text-[14px] text-blue-600 dark:text-blue-400">
            <Link
              href="mailto:federicoguzman.css@gmail.com"
              className="flex gap-2 items-center justify-center underline"
            >
              <Email size={18} />
              <p className="text-center font-semibold">
                federicoguzman.css@gmail.com
              </p>
            </Link>
            <p className="text-[14px] text-center font-semibold text-neutral-600 dark:text-neutral-400">
              ✨ 2025 · Federico Pablo Guzmán · Hecho con Next.js
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
