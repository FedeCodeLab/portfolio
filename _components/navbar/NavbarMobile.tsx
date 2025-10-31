import { Download } from "../ui/icons";
import Link from "next/link";

export const NavbarMobile = () => {
  return (
    <div className="fixed bg-[#FFFFFF] shadow-lg dark:bg-[#0b0d18] w-full py-3 px-6 flex lg:hidden items-center justify-between z-50 ">
      <h1 className="font-pixelifySans heading-5 inline  text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-700 hover:from-pink-700 hover:to-blue-400 cursor-pointer transition-colors duration-300">
        FedeCodeLab
      </h1>
      <Link
        href="/CV_GuzmanFederico_Frontend.pdf"
        className="font-pixelifySans flex justify-center items-center gap-2 whitespace-nowrap rounded-[50px] cursor-pointer font-[500] px-4 py-2 text-[14px] border-2 border-transparent dark:border-gray-400 bg-gray-200 hover:bg-gray-300 dark:bg-transparent dark:hover:bg-[#1E293B] dark:hover:border-[#1E293B] text-neutral-800 dark:text-slate-300 dark:hover:text-white transition duration-300"
        target="_blank"
        download={true}
      >
        <span>
          <Download size={14} />
        </span>
        Descargar CV
      </Link>
    </div>
  );
};
