"use client";

import { useProjectStore } from "@/store/useProjectStore";
import { Close } from "../ui/icons";
import { useEffect } from "react";
import Image from "next/image";

export const ProjectModal = () => {
  const { isOpen, mediaUrl, mediaType, closeProjectModal } = useProjectStore();

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeProjectModal();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
      return () => {
        document.removeEventListener("keydown", handleEscape);
        document.body.style.overflow = "unset";
      };
    }
  }, [isOpen, closeProjectModal]);

  if (!isOpen || !mediaUrl) return null;

  return (
    <div
      className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[9999] flex items-center justify-center p-4"
      onClick={closeProjectModal}
    >
        <button
          onClick={closeProjectModal}
          className="absolute top-4 right-4 p-2 text-white/70 hover:text-white bg-neutral-800/50 hover:bg-neutral-800 rounded-full transition-all cursor-pointer z-50"
          title="Cerrar"
        >
          <Close size={22} />
        </button>
      <div
        className="relative bg-transparent max-w-6xl w-full h-[90vh] flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >

        <div className="w-full h-full flex items-center justify-center overflow-hidden rounded-xl">
          {mediaType === "video" ? (
            <video
              src={mediaUrl}
              controls
              autoPlay
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            />
          ) : (
            <div className="relative w-full h-full">
              <Image
                src={mediaUrl}
                alt="Project Media"
                fill
                className="object-contain"
                quality={100}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
