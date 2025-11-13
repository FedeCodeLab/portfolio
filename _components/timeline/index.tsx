"use client";

import { useCertificateStore } from "@/store/useCertificateStore";
import { useRefsStore } from "@/store/useRefsStore";
import { events } from "@/data/timelineData";
import { useRef, useEffect } from "react";
import { Button } from "../ui/Button";

export const Timeline = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const setRefs = useRefsStore((state) => state.setRefs);

  useEffect(() => {
    setRefs({ timelineRef });
  }, [setRefs]);

  const { openCertificate } = useCertificateStore();

  return (
    <div
      ref={timelineRef}
      className="w-[90%] max-w-[1250px] mx-auto min-h-screen pt-20"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="heading-3 text-center md:!text-[4xl] !font-bold  mb-4 text-neutral-800 dark:text-neutral-200">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 dark:from-blue-700 via-70% via-pink-600 to-pink-700">
            Formación
          </span>{" "}
          Académica
        </h2>

        <p className="text-neutral-600 dark:text-slate-400 text-center mb-12">
          Mi trayectoria educativa y certificaciones profesionales
        </p>

        <div className="relative pb-6">
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-slate-400 dark:bg-slate-700 md:left-1/2 md:-translate-x-px" />

          <div className="space-y-8">
            {events.map((event, index) => (
              <div key={event.id} className="relative">
                <div className="absolute left-4 top-6 w-4 h-4 -translate-x-2 md:left-1/2 md:-translate-x-2 z-10">
                  <div className="w-4 h-4 rounded-full bg-blue-500 ring-4 ring-slate-700 dark:ring-slate-900" />
                </div>

                <div className="pl-12 md:pl-0">
                  <div
                    className={`md:grid md:grid-cols-2 md:gap-8 md:items-start ${
                      index % 2 === 0 ? "" : "md:grid-flow-dense"
                    }`}
                  >
                    <div
                      className={`hidden md:flex md:items-start ${
                        index % 2 === 0
                          ? "md:justify-end md:pr-12"
                          : "md:col-start-2 md:pl-12"
                      }`}
                    >
                      <span className="text-lg font-bold text-slate-600 dark:text-slate-500 pt-6">
                        {event.year}
                      </span>
                    </div>

                    <div
                      className={
                        index % 2 === 0 ? "md:pl-12" : "md:pr-12 md:col-start-1"
                      }
                    >
                      <span className="inline-block md:hidden text-lg font-bold text-slate-500 mb-2">
                        {event.year}
                      </span>

                      <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-xl border border-[#E8E8E8] dark:border-slate-700 transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]">
                        <h3 className="text-xl font-bold text-neutral-800 dark:text-white mb-2">
                          {event.title}
                        </h3>
                        <p className="text-blue-600 dark:text-blue-400 text-sm font-medium mb-3">
                          {event.institution}
                        </p>
                        <p className="text-neutral-600 dark:text-slate-400 text-sm leading-relaxed mb-4">
                          {event.description}
                        </p>
                        {event.certificate && (
                          <Button
                            size={"small"}
                            className="text-white"
                            onClick={() =>
                              openCertificate(event.certificate, event.title)
                            }
                          >
                            Ver Certificado
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-start md:text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-slate-800 rounded-full border border-[#EDEBE8] dark:border-slate-700">
            <div className="w-2 h-2 bg-blue-700 dark:bg-blue-500 rounded-full animate-pulse" />
            <span className="text-slate-700 dark:text-slate-300 text-sm font-medium flex items-center gap-1">
              En constante aprendizaje
              <span className="flex items-end gap-[2px] ml-1">
                <span className="dot w-1.5 h-1.5 bg-slate-700 dark:bg-slate-300 rounded-full inline-block animate-bounce1"></span>
                <span className="dot w-1.5 h-1.5 bg-slate-700 dark:bg-slate-300 rounded-full inline-block animate-bounce2"></span>
                <span className="dot w-1.5 h-1.5 bg-slate-700 dark:bg-slate-300 rounded-full inline-block animate-bounce3"></span>
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
