import { ToggleTheme } from "./ToggleTheme";
import Link from "next/link";

export const CTA = () => {
  return (
    <div className="flex gap-4 items-center">
      <ToggleTheme />
      <Link
        href="/CV_GuzmanFederico_Frontend.pdf"
        className="font-pixelifySans flex justify-center items-center gap-2 whitespace-nowrap rounded-[50px] cursor-pointer font-[500] px-6 py-2 text-[14px] border-2 border-transparent dark:border-gray-400 bg-gray-200 hover:bg-gray-300 dark:bg-transparent dark:hover:bg-[#1E293B] dark:hover:border-[#1E293B] max-w-[130px] text-neutral-800 dark:text-slate-300 dark:hover:text-white transition duration-300 "
        target="_blank"
        download={true}
      >
        Descargar CV
      </Link>
    </div>
  );
};
