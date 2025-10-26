import { Download } from "../ui/icons";
import { Button } from "../ui/Button";
import Link from "next/link";

export const NavbarMobile = () => {
  return (
    <div className="absolute top-0 w-full h-[85px] px-6 flex lg:hidden items-center justify-between z-50 ">
      <h1 className="font-pixelifySans heading-5 inline  text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-700 hover:from-pink-700 hover:to-blue-400 cursor-pointer transition-colors duration-300">
        FedeCodeLab
      </h1>
      <Link
        href="/CV_GuzmanFederico_Frontend.pdf"
        className="font-pixelifySans flex justify-center items-center gap-2 whitespace-nowrap rounded-[50px] cursor-pointer font-[500] px-6 py-2 text-[14px] border-2 border-gray-400 bg-[#1E293B] hover:bg-[#32425e] dark:bg-transparent dark:hover:bg-[#1E293B] hover:border-[#1E293B] max-w-[130px] text-slate-300 hover:text-white transition duration-300 "
        target="_blank"
        download={true}
      >
        Descargar CV
      </Link>
    </div>
  );
};
