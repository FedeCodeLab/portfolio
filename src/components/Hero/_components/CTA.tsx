import Link from "next/link";

export const CTA = () => {
  return (
    <div className="cta">
      <Link href="#contact" className="btn">
        Github
      </Link>
      <Link href="#projects" className="btn btn-light">
        Linkedin
      </Link>
      <Link href="#projects" className="btn btn-light">
        Contactame
      </Link>
    </div>
  );
};
