import { Linkedin, Shortcut, Github } from "@/components/ui/icons";
import { LinkButton } from "@/components/ui/LinkButton";

export const CTA = () => {
  return (
    <div className="flex flex-col md:flex-row gap-3 text-slate-300">
      <LinkButton href="https://github.com/FedeCodeLab">
        <Github size={20} color="#ffffff" />
        <span className="transition-transform duration-300 group-hover:translate-x-1">
          Github
        </span>
      </LinkButton>

      <LinkButton href="https://www.linkedin.com/in/federico-guzman/">
        <Linkedin size={20} color="#ffffff" />
        <span className="transition-transform duration-300 group-hover:translate-x-1">
          Linkedin
        </span>
      </LinkButton>

      <LinkButton
        href="mailto:federicoguzman.css@gmail.com"
        variant={"ghostGray"}
      >
        <Shortcut size={20} color="#ffffff" />
        <span className="transition-transform duration-300 group-hover:translate-x-1">
          ¡Hablemos!
        </span>
      </LinkButton>
    </div>
  );
};
