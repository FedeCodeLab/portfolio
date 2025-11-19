"use client";

import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { CTA } from "./CTA";

export const Hero = () => {
  return (
    <section className="will-change-transform w-[90%] min-h-screen lg:max-w-[1250px] mx-auto flex items-center justify-center md:justify-start">
      <div className="md:max-w-[600px] flex flex-col gap-6">
        <div className="flex flex-col text-center md:text-start">
          <motion.div
            className="md:min-h-[72px] font-inter font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 dark:from-blue-600 via-pink-700 dark:via-pink-600 to-pink-700 text-[2.2rem] md:text-[48px]"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Hola, soy Federico
          </motion.div>

          <motion.div
            className="text-neutral-900 dark:text-white font-inter font-bold"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <TypeAnimation
              cursor={true}
              sequence={[
                "Desarrollador Fullstack",
                3000,
                "",
                "Desarrollador Frontend Ssr",
                3000,
                "",
                "Desarrollador React",
                3000,
                "",
              ]}
              wrapper="h3"
              className="!text-[1.4rem] md:!text-[1.8rem] leading-[36px]"
              repeat={Infinity}
            />
          </motion.div>
        </div>

        <div className="flex flex-col gap-6">
          <motion.p
            className="text-lg text-gray-700 dark:text-gray-400 text-center md:text-start font-medium"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Mi expertise en Frontend consiste en crear interfaces web accesibles
            y de alto rendimiento. Utilizo React y Next.js para desarrollar
            aplicaciones modernas optimizadas (SEO). Combino la solidez técnica
            con una obsesión por la experiencia del usuario (UX) y el detalle
            estético.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="w-full md:auto"
          >
            <CTA />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
