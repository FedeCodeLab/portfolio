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
      className="will-change-transform min-w-full flex-1 relative overflow-hidden rounded-lg p-6 md:p-12 bg-white shadow-lg dark:shadow-none dark:bg-transparent dark:bg-gradient-to-br dark:from-[#1e293b] dark:via-[#0f172a] dark:to-transparent dark:hover:from-transparent dark:hover:to-[#1e293b] transition-colors duration-300"
    >
      <div className="h-full flex flex-col gap-3 md:border-l-2 border-neutral-500 dakr:border-blue-600 md:pl-6 relative z-10">
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
            <p className="text-lg font-semibold text-neutral-900 dark:text-neutral-200">
              {title}
            </p>
            <p className="text-sm font-semibold text-[#4b5563] dark:text-gray-400">
              {type}
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-2 max-w-[900px]">
          <p className="text-base font-medium text-neutral-900 dark:text-gray-200">
            {company}
          </p>
          <p className="text-[#4b5563] dark:text-gray-400">{content}</p>
        </div>
      </div>
    </motion.article>
  );
};
