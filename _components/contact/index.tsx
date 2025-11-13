"use client";

import { useRefsStore } from "@/store/useRefsStore";
import { useRef, useEffect } from "react";
import ContactForm from "./ContactForm";

export const Contact = () => {
  const contactRef = useRef<HTMLDivElement>(null);
  const setRefs = useRefsStore((state) => state.setRefs);

  useEffect(() => {
    setRefs({ contactRef });
  }, [setRefs]);

  return (
    <div
      ref={contactRef}
      className="w-full md:w-[90%] max-w-[1250px] mx-auto flex flex-col items-center justify-center pt-20 md:py-20 gap-14 text-neutral-800 dark:text-neutral-200"
    >
      <h2 className="heading-3 text-center md:!text-[4xl] !font-bold text-neutral-800 dark:text-neutral-200">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 dark:from-blue-700 via-70% via-pink-600 to-pink-700">
          Formulario
        </span>{" "}
        de Contacto
      </h2>

      <ContactForm />
    </div>
  );
};
