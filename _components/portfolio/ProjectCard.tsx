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
  logo,
  list,
}: Project) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.1,
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
      <div className="relative z-10 flex flex-col lg:flex-row">
        <div className="relative block lg:hidden w-full h-[250px]">
          <Image
            src={image}
            fill
            alt="Portada"
            className="object-cover rounded-md"
          />
        </div>
        <div className="pt-6 lg:py-0 lg:pl-0 lg:pr-16 flex flex-col flex-3">
          <div className="flex flex-col justify-center gap-2">
            <div className="pb-4">
              <div className="flex items-center gap-2">
                {logo && (
                  <Image
                    src={logo}
                    alt="Portada"
                    width={32}
                    height={32}
                    className="size-[2rem] rounded-full"
                  />
                )}
                <h4 className="text-[2rem] font-semibold">{title}</h4>
              </div>
              <p className="text-[12px] py-[2px] font-semibold bg-blue-100 text-blue-800  dark:bg-[#1E293B] w-fit dark:text-white px-2 rounded-full">
                {type}
              </p>
            </div>
            <p
              className="text-gray-800 font-semibold dark:text-gray-400 lg:max-w-[500px]"
              dangerouslySetInnerHTML={{ __html: content }}
            />

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
                  className="bg-blue-100 text-blue-800 dark:bg-[#1E293B] dark:text-white text-xs px-4 py-[6px] rounded-full font-semibold flex items-center gap-2"
                >
                  {typeof tech === "object" && tech.img && tech.img !== "" ? (
                    <>
                      <Image
                        src={tech.img}
                        alt={tech.name}
                        width={100}
                        height={100}
                        className="inline-block size-[20px]"
                      />
                      {tech.name}
                    </>
                  ) : typeof tech === "object" ? (
                    tech.name
                  ) : (
                    tech
                  )}
                </span>
              ))}
            </div>
          </div>
          <div className="mt-auto md:mt-0 pt-6">
            <CTA repository={repository} deploy={deploy} />
          </div>
        </div>

        <div className="relative w-full hidden lg:block md:w-auto md:min-w-[500px] md:h-[300px] rounded-md">
          <Image
            src={image}
            fill
            alt="Portada"
            className="object-cover rounded-md"
          />
        </div>
      </div>
    </motion.article>
  );
};
