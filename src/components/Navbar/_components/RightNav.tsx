import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Download } from "@/components/ui/icons";

export const RightNav = () => {
  return (
    <div className="w-[200px]">
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
