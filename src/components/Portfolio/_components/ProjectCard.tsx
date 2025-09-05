"use client";

import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { Project } from "@/types/project";
import { useEffect } from "react";
import Image from "next/image";
import { CTA } from "./CTA";

export const ProjectCard = ({
  title,
  content,
  type,
  repository,
  deploy,
  techs,
  image,
  list,
}: Project) => {
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
      className="relative overflow-hidden rounded-lg flex flex-col"
    >
      <div className="relative z-10 flex flex-col md:flex-row">
        <div className="p-6 md:p-[0] md:pr-16 flex flex-col flex-3">
          <div className="flex flex-col gap-2">
            <div>
              <h4 className="text-lg font-semibold">{title}</h4>
              <p className="text-sm text-gray-400">{type}</p>
            </div>
            <p className="text-gray-400 md:max-w-[500px]">{content}</p>

            {list && (
              <ul className="text-gray-400 text-[14px]">
                {list.map((item, index) => (
                  <li key={index}>✨ {item}</li>
                ))}
              </ul>
            )}

            <div className="flex flex-wrap gap-2 mt-2">
              {techs.map((tech, index) => (
                <span
                  key={index}
                  className="bg-blue-800 text-white text-xs px-2 py-1 rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="mt-auto pt-6">
            <CTA repository={repository} deploy={deploy} />
          </div>
        </div>

        <div className="relative w-full md:w-auto md:min-w-[500px] md:max-h-[300px]">
          <Image src={image} fill alt="Portada" className="object-cover" />
        </div>
      </div>
    </motion.article>
  );
};
