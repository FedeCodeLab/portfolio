"use client"; // si estás en Next.js app directory

import { Experience } from "../../../types/experience";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export const ExperienceCard = ({
  title,
  company,
  content,
  type,
  img,
  name,
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
      className="relative overflow-hidden rounded-lg p-6 md:p-12"
    >
      <div className="absolute inset-0 bg-blue-950 opacity-50 backdrop-blur-xl z-0" />

      <div className="flex flex-col gap-4 border-l-2 border-blue-600 pl-6 relative z-10">
        <div className="flex items-center gap-4">
          {img?.trim() !== "" && (
            <Image
              src={img}
              width={45}
              height={45}
              alt={name}
              className="rounded-full object-contain"
            />
          )}
          <div>
            <p className="text-lg text-neutral-800 dark:text-neutral-200">
              {title}
            </p>
            <p className="text-sm text-gray-400">{type}</p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-base font-medium text-gray-200">{company}</p>
          <p className="text-gray-400">{content}</p>
        </div>
      </div>
    </motion.article>
  );
};
