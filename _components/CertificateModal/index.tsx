"use client";

import { useCertificateStore } from "@/store/useCertificateStore";
import { Download, Close } from "../ui/icons";
import { useEffect } from "react";

export const CertificateModal = () => {
  const { isOpen, certificate, closeCertificate } = useCertificateStore();

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeCertificate();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      return () => document.removeEventListener("keydown", handleEscape);
    }
  }, [isOpen, closeCertificate]);

  if (!isOpen || !certificate) return null;

  const isPDF = (url: string) => {
    return url.toLowerCase().endsWith(".pdf") || url.includes("pdf");
  };

  return (
    <div
      className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[9999] flex items-center justify-center p-4"
      onClick={closeCertificate}
    >
      <div
        className="relative bg-slate-900 rounded-xl max-w-6xl w-full h-[90vh] flex flex-col shadow-2xl border border-slate-700"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-4 border-b border-slate-700 bg-slate-800 rounded-t-xl">
          <h3 className="text-white font-semibold truncate pr-4 flex items-center gap-2">
            {certificate.title}
          </h3>
          <div className="flex items-center gap-2">
            <a
              href={certificate.url}
              download
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-700 rounded-lg transition-all cursor-pointer"
              title="Descargar certificado"
            >
              <Download size={20} />
            </a>
            <button
              onClick={closeCertificate}
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-700 rounded-lg transition-all cursor-pointer"
              title="Cerrar"
            >
              <Close size={20} />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-hidden bg-slate-950 rounded-b-xl">
          {isPDF(certificate.url) ? (
            <iframe
              src={certificate.url}
              className="w-full h-full"
              title={certificate.title}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center p-4 overflow-auto">
              <img
                src={certificate.url}
                alt={certificate.title}
                className="max-w-full max-h-full object-contain rounded-lg"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
