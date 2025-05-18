import { CTA } from "./_components/CTA";

export const Footer = () => {
  return (
    <footer className="border-t border-emerald-900 flex flex-col items-center justify-center gap-5 py-12">
      <div className="flex flex-col gap-2 items-center justify-center">
        <p className="text-md text-gray-300">
          Hecho con Next.js por Federico Pablo Guzmán · Todos los derechos
          reservados.
        </p>
        <p className="text-gray-400 text-base">federicoguzman.css@gmail.com</p>
      </div>

      <CTA />
    </footer>
  );
};
