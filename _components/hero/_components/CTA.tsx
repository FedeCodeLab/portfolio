"use client";
import { Linkedin, Github } from "@/_components/ui/icons";
import { LinkButton } from "@/_components/ui/LinkButton";
import { Button } from "@/_components/ui/Button";
import { useRefsStore } from "@/store/useRefsStore";
import { RefObject } from "react";

export const CTA = () => {
  const { contactRef } = useRefsStore();

  const scrollToSection = (ref: RefObject<HTMLElement | null> | null) => {
    const element = ref?.current;
    if (element) {
      const offsetTop = element.offsetTop;
      const offset = 40;
      window.scrollTo({
        top: offsetTop - offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="flex flex-col md:flex-row gap-3">
      <LinkButton href="https://github.com/FedeCodeLab">
        <Github size={20} />
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

      <Button onClick={() => scrollToSection(contactRef)} variant={"ghostGray"}>
        Hablemos
      </Button>
    </div>
  );
};
