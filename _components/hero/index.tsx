"use client";

import { TypeAnimation } from "react-type-animation";
import { CTA } from "./_components/CTA";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="w-[90%] min-h-screen lg:max-w-[1250px] mx-auto flex items-center justify-center md:justify-start">
      <div className="md:max-w-[600px] flex flex-col gap-6">
        <div className="flex flex-col gap-3 md:gap-0 text-center md:text-start">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 dark:from-blue-400 via-pink-700 font-[500] font-pixelifySans text-[17px]"
          >
            Hola, mi nombre es
          </motion.p>
          <motion.div
            className="hidden md:block min-h-[72px] font-inter font-bold !text-neutral-800 dark:!text-[#BFCCEE]"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <TypeAnimation
              cursor={true}
              sequence={["Federico Guzmán"]}
              wrapper="h1"
              className="!text-[48px]"
            />
          </motion.div>
          <motion.div
            className="block md:hidden !text-neutral-800 dark:!text-[#BFCCEE]"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <TypeAnimation
              cursor={true}
              sequence={["Federico Guzmán"]}
              wrapper="h2"
              className="!text-[42px] leading-[36px]"
            />
          </motion.div>

          <motion.h3
            className="text-lg text-transparent bg-clip-text bg-gradient-to-r from-blue-600 dark:from-blue-400 via-pink-700 heading-4 font-[500] font-pixelifySans"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            &lt;Desarrollador Frontend /&gt;
          </motion.h3>
        </div>

        <div className="flex flex-col gap-6">
          <motion.p
            className="text-lg text-gray-700 dark:text-gray-400 text-center md:text-start font-medium"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.8 }}
          >
            Enfocado en construir interfaces web funcionales, accesibles y de
            alta calidad. Combino conocimientos técnicos con atención al detalle
            para crear soluciones modernas y orientadas a la experiencia del
            usuario.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 2.1 }}
            className="w-full md:auto"
          >
            <CTA />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
