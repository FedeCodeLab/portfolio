import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Shortcut } from "@/components/ui/icons";

export const CTA = () => {
  return (
    <div className="flex flex-col md:flex-row gap-3">
      <Link
        href="https://github.com/FedeCodeLab"
        className="flex justify-center items-center"
        target="_blank"
      >
        <Button className="group w-full">
          <Shortcut width={20} height={20} color="#ffffff" />
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            Github
          </span>
        </Button>
      </Link>

      <Link
        href="https://www.linkedin.com/in/fedecodelab/"
        className="flex justify-center items-center"
        target="_blank"
      >
        <Button className="group w-full">
          <Shortcut width={20} height={20} color="#ffffff" />
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            Linkedin
          </span>
        </Button>
      </Link>

      <Link
        href="mailto:federicoguzman.css@gmail.com"
        className="hidden md:flex justify-center items-center"
        target="_blank"
      >
        <Button variant={"ghost"} className="group">
          <Shortcut width={20} height={20} color="#ffffff" />
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            Contactame
          </span>
        </Button>
      </Link>
    </div>
  );
};
