import { CTA } from "./_components/CTA";

export const Hero = () => {
  return (
    <section className="min-h-svh flex items-center justify-center">
      <div className="max-w-[600px] flex flex-col gap-6">
        <div className="flex flex-col text-center">
          <h3 className="text-lg heading-[20px] text-emerald-500">
            &lt;Frontend Developer /&gt;
          </h3>
          <h1 className="text-[48px]">Federico Guzmán</h1>
        </div>
        <div className="flex flex-col items-center justify-center text-center gap-6">
          <p className="text-lg">
            Un apasionado desarrollador front-end con un enfoque en crear
            experiencias web cautivadoras. Desde diseños elegantes hasta
            funcionalidades dinámicas, mi objetivo es combinar creatividad y
            habilidades técnicas para dar vida a proyectos innovadores.
          </p>
          <CTA />
        </div>
      </div>
    </section>
  );
};
