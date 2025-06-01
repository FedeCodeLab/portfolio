import Link from "next/link";
import { Button } from "@/components/ui/Button";

export const RightNav = () => {
  return (
    <div className="w-[135px] flex justify-end">
      <Link
        href="/CV_GuzmanFederico_Frontend.pdf"
        className="flex justify-center items-center max-w-[130px] text-slate-300 hover:text-white transition duration-300 "
        target="_blank"
        download={true}
      >
        <Button variant="ghostGray" size="small" className="max-w-[130px]">
          <span className="text-[16px]">Descargar CV</span>
        </Button>
      </Link>
    </div>
  );
};
