import { create } from "zustand";

type ProjectModalState = {
  isOpen: boolean;
  mediaUrl: string | null;
  mediaType: "image" | "video" | null;
  openProjectModal: (url: string, type: "image" | "video") => void;
  closeProjectModal: () => void;
};

export const useProjectStore = create<ProjectModalState>((set) => ({
  isOpen: false,
  mediaUrl: null,
  mediaType: null,
  openProjectModal: (url: string, type: "image" | "video") => {
    set({ isOpen: true, mediaUrl: url, mediaType: type });
  },
  closeProjectModal: () => {
    set({ isOpen: false, mediaUrl: null, mediaType: null });
  },
}));
