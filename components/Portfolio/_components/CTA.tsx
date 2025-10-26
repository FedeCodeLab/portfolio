import { Shortcut, Github } from "../../ui/icons";
import { LinkButton } from "../../ui/LinkButton";
import { ProjectLinks } from "../../../types/project";

export const CTA = ({ repository, deploy }: ProjectLinks) => {
  return (
    <div className="flex gap-3">
      {deploy && (
        <LinkButton href={deploy} size={"small"}>
          <Shortcut width={20} height={20} color="#ffffff" />
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            Visitar
          </span>
        </LinkButton>
      )}
      {repository && (
        <LinkButton href={repository} size={"small"} variant={"ghostGray"}>
          <Github width={20} height={20} color="#ffffff" />
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            Repositorio
          </span>
        </LinkButton>
      )}
    </div>
  );
};
