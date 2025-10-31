import Link from "next/link";
import { CTA } from "./CTA";
import { Email } from "../ui/icons";

export const Links = () => {
  return (
    <div className="flex flex-col justify-center items-center lg:justify-start text-start gap-6 flex-1 max-w-[400px]">
      <div className="flex flex-col justify-center lg:justify-start text-center lg:text-start">
        <div className="h-[40px]">
          <h4 className="text-[1.1rem] font-[600]">Conecta conmigo</h4>
        </div>

        <div className="flex flex-col justify-center lg:justify-start gap-3 text-white">
          <CTA />
          <div className="flex gap-1 items-center text-neutral-800 dark:text-gray-400">
            <Email size={20} />
            <Link
              href="mailto:federicoguzman.css@gmail.com"
              className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-500 text-base underline"
            >
              federicoguzman.css@gmail.com
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
