import { CTA } from "./_components/CTA";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="relative border-t border-emerald-900 flex flex-col items-center justify-center py-12">
      <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-emerald-500 opacity-10 backdrop-blur-xl z-0" />

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
    </footer>
  );
};
