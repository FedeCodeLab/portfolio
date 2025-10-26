import Link from "next/link";
import { Button } from "../ui/Button";
import { Download } from "../ui/icons";

export const NavbarMobile = () => {
  return (
    <div className="absolute top-0 w-full h-[85px] px-6 flex lg:hidden items-center justify-between z-50 ">
      <h1 className="font-pixelifySans heading-5 inline  text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-700 hover:from-pink-700 hover:to-blue-400 cursor-pointer transition-colors duration-300">
        FedeCodeLab
      </h1>
      <Link
        href="/CV_GuzmanFederico_Frontend.pdf"
        className="flex justify-center items-center"
        target="_blank"
        download={true}
      >
        <Button variant="ghostGray" size="small" className="group">
          <Download width={20} height={20} color="#cad5e2" />
          <span className="transition-transform text-slate-300 duration-300 group-hover:translate-x-1">
            Descargar CV
          </span>
        </Button>
      </Link>
    </div>
  );
};
