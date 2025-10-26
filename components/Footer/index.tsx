import { CTA } from "./_components/CTA";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="relative border-t border-blue-950 flex flex-col items-center justify-center py-12 text-center">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a] to-[#394c6e] opacity-30 backdrop-blur-xl z-0" />

      <div className="w-[90%] max-w-[1250px] mx-auto ">
        <div className="relative z-10 flex flex-col items-center justify-center gap-5 ">
          <div className="flex flex-col items-center justify-center">
            <p className="text-md text-gray-300">
              Hecho con Next.js por Federico Pablo Guzmán · Todos los derechos
              reservados.
            </p>
            <Link
              href="mailto:federicoguzman.css@gmail.com"
              className="text-gray-400 text-base hover:underline"
            >
              federicoguzman.css@gmail.com
            </Link>
          </div>

          <CTA />
        </div>
      </div>
    </footer>
  );
};
