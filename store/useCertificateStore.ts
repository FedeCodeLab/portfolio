import { create } from "zustand";

type CertificateState = {
  isOpen: boolean;
  certificate: {
    url: string;
    title: string;
  } | null;
  openCertificate: (url: string, title: string) => void;
  closeCertificate: () => void;
};

export const useCertificateStore = create<CertificateState>((set) => ({
  isOpen: false,
  certificate: null,
  openCertificate: (url: string, title: string) => {
    set({ isOpen: true, certificate: { url, title } });
  },
  closeCertificate: () => {
    set({ isOpen: false, certificate: null });
  },
}));
