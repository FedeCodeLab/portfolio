import { CTA } from "./_components/CTA";

export const Hero = () => {
  return (
    <section className="hero">
      <div>
        <h3>&lt;Frontend Developer /&gt;</h3>
        <h1>Federico Guzmán</h1>
      </div>
      <div>
        <p>
          Un apasionado desarrollador front-end con un enfoque en crear
          experiencias web cautivadoras. Desde diseños elegantes hasta
          funcionalidades dinámicas, mi objetivo es combinar creatividad y
          habilidades técnicas para dar vida a proyectos innovadores.
        </p>
        <CTA />
      </div>
    </section>
  );
};
