import Image from "next/image";
import { Button } from "../ui/Button";
import { Download } from "../ui/icons";
import Link from "next/link";

export const Navbar = () => {
  return (
    <header className="absolute z-30 top-0 w-full h-[85px] flex justify-between items-center px-6">
      <h1 className="heading-5 w-[200px]">FedeCodeLab</h1>
      <nav>
        <ul className="flex gap-5 items-center text-[16px] font-[500]">
          <li>
            <button className="cursor-pointer">Experiencia</button>
          </li>

          <li>
            <button className="cursor-pointer">Portafolio</button>
          </li>

          <li>
            <button className="cursor-pointer">Habilidades</button>
          </li>

          <li>
            <button className="cursor-pointer">Certificados</button>
          </li>
        </ul>
      </nav>

      <div className=" w-[200px]">
        <Link
          href="#projects"
          className="flex justify-center items-center"
          target="_blank"
        >
          <Button variant={"ghost"} size={"small"}>
            <Download width={20} height={20} color="#ffffff" />
            Descargar CV
          </Button>
        </Link>
      </div>
    </header>
  );
};
