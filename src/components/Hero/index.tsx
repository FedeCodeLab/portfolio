import { CTA } from "./_components/CTA";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="w-[90%] min-h-svh lg:max-w-[1250px] mx-auto flex items-center justify-center">
      <div className="md:max-w-[600px] flex flex-col gap-6">
        <div className="flex flex-col text-center gap-3 md:gap-0">
          <motion.h3
            className="text-lg heading-[20px] text-emerald-500"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            &lt;Frontend Developer /&gt;
          </motion.h3>

          <motion.div
            className="hidden md:block min-h-[72px]"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <TypeAnimation
              cursor={true}
              sequence={["Federico Guzmán"]}
              wrapper="h1"
              className="!text-[48px]"
            />
          </motion.div>

          <motion.div
            className="block md:hidden  min-h-[72px]"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <TypeAnimation
              cursor={true}
              sequence={["Federico Guzmán"]}
              wrapper="h2"
              className="!text-[42px] leading-[36px]"
            />
          </motion.div>
        </div>

        <div className="flex flex-col items-center justify-center text-center gap-6">
          <motion.p
            className="text-lg"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            Un apasionado desarrollador front-end con un enfoque en crear
            experiencias web cautivadoras. Desde diseños elegantes hasta
            funcionalidades dinámicas, mi objetivo es combinar creatividad y
            habilidades técnicas para dar vida a proyectos innovadores.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="w-full md:auto"
          >
            <CTA />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
