"use client";

import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { Experience } from "@/types/experience";
import { useEffect } from "react";
import Image from "next/image";

export const ExperienceCard = ({
  title,
  company,
  content,
  type,
  img,
  name,
  techs,
}: Experience) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  return (
    <motion.article
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: "easeOut" },
        },
      }}
      className="flex-1 relative overflow-hidden rounded-lg p-8 bg-slate-800 border border-slate-700 hover:border-slate-600 shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]"
    >
      <div className="h-full flex flex-col gap-3 relative z-10">
        <div className="flex items-center gap-3">
          {img?.trim() !== "" && (
            <Image
              src={img}
              width={40}
              height={40}
              alt={name}
              className="rounded-full object-contain"
            />
          )}
          <div>
            <p className="text-lg font-semibold text-white">{title}</p>
            <p className="text-sm font-semibold text-blue-400">{type}</p>
          </div>
        </div>

        <div className="flex flex-col gap-2 max-w-[900px]">
          <p className="text-base font-medium text-white">{company}</p>
          <p className="text-slate-400 text-[15px] font-medium">{content}</p>
        </div>

        {techs && techs.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4 max-w-[900px] select-none">
            {techs.map((tech, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-800 dark:bg-[#151f30] dark:text-white text-xs px-4 py-[6px] rounded-full font-semibold flex items-center gap-2"
              >
                {tech.img && tech.img !== "" ? (
                  <>
                    <Image
                      src={tech.img}
                      alt={tech.name}
                      width={20}
                      height={20}
                      className="inline-block size-[20px]"
                    />
                    <p>{tech.name}</p>
                  </>
                ) : (
                  tech.name
                )}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.article>
  );
};
