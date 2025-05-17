import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Shortcut } from "@/components/ui/icons";

export const CTA = () => {
  return (
    <div className="flex justify-center gap-3">
      <Link
        href="#contact"
        className="flex justify-center items-center"
        target="_blank"
      >
        <Button>
          <Shortcut width={20} height={20} color="#ffffff" />
          Github
        </Button>
      </Link>

      <Link
        href="#projects"
        className="flex justify-center items-center"
        target="_blank"
      >
        <Button>
          <Shortcut width={20} height={20} color="#ffffff" />
          Linkedin
        </Button>
      </Link>

      <Link
        href="#projects"
        className="flex justify-center items-center"
        target="_blank"
      >
        <Button variant={"ghost"}>
          <Shortcut width={20} height={20} color="#ffffff" />
          Contactame
        </Button>
      </Link>
    </div>
  );
};
