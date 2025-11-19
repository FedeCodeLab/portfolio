"use client";

import { useInView } from "react-intersection-observer";
import { ChevronLeft, ChevronRight } from "../ui/icons";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Project } from "@/types/project";
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
  images,
  logo,
  list,
}: Project) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  useEffect(() => {
    if (!images || images.length === 0 || isHovered || !inView) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images?.length, isHovered, inView]);

  const nextSlide = () => {
    if (!images) return;
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    if (!images) return;
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const isVideo = (url: string) => url.endsWith(".mp4");

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
      className="will-change-transform relative overflow-hidden rounded-lg flex flex-col"
    >
      <div className="relative z-10 flex flex-col lg:flex-row">
        {/* -------- Mobile Image/Carousel -------- */}
        <div className="relative block lg:hidden w-full h-[250px]">
          {images && images.length > 0 ? (
            <AnimatePresence mode="popLayout">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 w-full h-full"
              >
                {isVideo(images[currentIndex]) ? (
                  <video
                    src={images[currentIndex]}
                    autoPlay
                    muted
                    loop
                    className="object-cover w-full h-full rounded-md"
                  />
                ) : (
                  <Image
                    src={images[currentIndex]}
                    fill
                    alt="Portada"
                    quality={100}
                    sizes="(max-width: 768px) 100vw, 500px"
                    className="object-cover rounded-md"
                  />
                )}
              </motion.div>
            </AnimatePresence>
          ) : (
            <Image
              src={image}
              fill
              alt="Portada"
              quality={100}
              sizes="(max-width: 768px) 100vw, 500px"
              className="object-cover rounded-md"
            />
          )}
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
                  className="select-none bg-white text-neutral-800 dark:bg-[#24334d] dark:text-white text-xs px-4 py-[6px] rounded-full font-semibold flex items-center gap-2 border border-[#E8E8E8] dark:dark:border-slate-700"
                >
                  {typeof tech === "object" && tech.img && tech.img !== "" ? (
                    <>
                      <Image
                        src={tech.img}
                        alt={tech.name}
                        width={100}
                        height={100}
                        className="inline-block size-[20px] object-contain"
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

        <div className="relative w-full hidden lg:flex flex-col gap-4 md:w-auto md:min-w-[500px]">
          {images && images.length > 0 ? (
            <div className="flex flex-col gap-4">
              <div 
                className="relative w-full h-[300px] rounded-md group"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <AnimatePresence mode="popLayout">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 w-full h-full"
                  >
                    {isVideo(images[currentIndex]) ? (
                      <video
                        src={images[currentIndex]}
                        autoPlay
                        muted
                        loop
                        className="object-cover w-full h-full rounded-md"
                      />
                    ) : (
                      <Image
                        src={images[currentIndex]}
                        fill
                        alt="Portada"
                        quality={100}
                        sizes="(max-width: 1200px) 50vw, 600px"
                        className="object-cover rounded-md"
                      />
                    )}
                  </motion.div>
                </AnimatePresence>
                
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    prevSlide();
                  }}
                  className="absolute size-10 flex items-center justify-center left-2 top-1/2 -translate-y-1/2 bg-blue-800/50 hover:bg-blue-800 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-20"
                >
                  <ChevronLeft size={22} />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    nextSlide();
                  }}
                  className="absolute size-10 flex items-center justify-center right-2 top-1/2 -translate-y-1/2 bg-blue-800/50 hover:bg-blue-800 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-20"
                >
                  <ChevronRight size={22} />
                  
                </button>
              </div>

              <div className="grid grid-cols-3 gap-4 h-[100px]">
                {[1, 2, 3].map((offset) => {
                  const index = (currentIndex + offset) % images.length;
                  const item = images[index];
                  return (
                    <div key={index} className="relative w-full h-full rounded-md overflow-hidden cursor-pointer" onClick={() => setCurrentIndex(index)}>
                      {isVideo(item) ? (
                        <video
                          src={item}
                          className="absolute inset-0 object-cover w-full h-full"
                        />
                      ) : (
                        <Image
                          src={item}
                          fill
                          alt={`Thumbnail ${index}`}
                          quality={100}
                          sizes="200px"
                          className="object-cover"
                        />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            <div className="relative w-full h-[300px] rounded-md">
              <Image
                src={image}
                fill
                alt="Portada"
                quality={100}
                sizes="(max-width: 1200px) 50vw, 600px"
                className="object-cover rounded-md"
              />
            </div>
          )}
        </div>
      </div>
    </motion.article>
  );
};

