import { CTA } from "./_components/CTA";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="relative border-t border-neutral-600 dark:border-blue-950 flex flex-col items-center justify-center py-12 text-center">
      <div className="absolute inset-0 dark:bg-gradient-to-b dark:from-[#0f172a] dark:to-[#394c6e] dark:opacity-30 dark:backdrop-blur-xl z-0" />

      <div className="w-[90%] max-w-[1250px] mx-auto ">
        <div className="relative z-10 flex flex-col items-center justify-center gap-5 ">
          <div className="flex flex-col items-center justify-center">
            <p className="text-md text-neutral-800 dark:text-gray-300 font-semibold">
              Hecho con Next.js por Federico Pablo Guzmán · Todos los derechos
              reservados.
            </p>
            <Link
              href="mailto:federicoguzman.css@gmail.com"
              className="text-neutral-800 dark:text-gray-400 text-base hover:underline"
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
