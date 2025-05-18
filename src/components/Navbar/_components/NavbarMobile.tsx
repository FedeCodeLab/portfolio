import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Download } from "@/components/ui/icons";

export const NavbarMobile = () => {
  return (
    <div className="absolute top-0 w-full h-[85px] px-6 flex lg:hidden items-center justify-between">
      <h1 className="heading-5 inline text-slate-300 hover:text-white cursor-pointer transition-colors duration-300">
        FedeCodeLab
      </h1>
      <Link
        href="/CV_GuzmanFederico_Frontend.pdf"
        className="flex justify-center items-center"
        target="_blank"
        download={true}
      >
        <Button variant="ghost" size="small" className="group">
          <Download width={20} height={20} color="#cad5e2" />
          <span className="transition-transform text-slate-300 duration-300 group-hover:translate-x-1">
            Descargar CV
          </span>
        </Button>
      </Link>
    </div>
  );
};
