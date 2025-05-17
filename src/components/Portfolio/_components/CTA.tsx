import { Button } from "@/components/ui/Button";
import { Shortcut, Github } from "@/components/ui/icons";
import Link from "next/link";
import { ProjectLinks } from "@/types/project";

export const CTA = ({ repository, deploy }: ProjectLinks) => {
  return (
    <div className="flex gap-3">
      {deploy && (
        <Link
          href={deploy}
          className="flex justify-center items-center"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button size={"small"}>
            <Shortcut width={20} height={20} color="#ffffff" />
            Visitar
          </Button>
        </Link>
      )}
      {repository && (
        <Link
          href={repository}
          className="flex justify-center items-center"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button size={"small"}>
            <Github width={20} height={20} color="#ffffff" />
            Repositorio
          </Button>
        </Link>
      )}
    </div>
  );
};
