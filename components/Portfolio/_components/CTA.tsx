import { Shortcut, Github } from "@/components/ui/icons";
import { LinkButton } from "@/components/ui/LinkButton";
import { ProjectLinks } from "@/types/project";

export const CTA = ({ repository, deploy }: ProjectLinks) => {
  return (
    <div className="flex gap-3 text-white dark:text-[#1e293b]">
      {deploy && (
        <LinkButton href={deploy} size={"small"}>
          <Shortcut size={20} color="#ffffff" />
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            Visitar
          </span>
        </LinkButton>
      )}
      {repository && (
        <LinkButton href={repository} size={"small"} variant={"ghostGray"}>
          <Github size={20} color="#ffffff" />
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            Repositorio
          </span>
        </LinkButton>
      )}
    </div>
  );
};
