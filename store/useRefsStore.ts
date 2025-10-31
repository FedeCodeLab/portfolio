import { create } from "zustand";
import { RefObject } from "react";

interface RefsState {
  experienceRef: RefObject<HTMLDivElement | null> | null;
  portfolioRef: RefObject<HTMLDivElement | null> | null;
  skillsRef: RefObject<HTMLDivElement | null> | null;
  timelineRef: RefObject<HTMLDivElement | null> | null;
  contactRef: RefObject<HTMLDivElement | null> | null;
  setRefs: (refs: Partial<Omit<RefsState, "setRefs">>) => void;
}

export const useRefsStore = create<RefsState>((set) => ({
  experienceRef: null,
  portfolioRef: null,
  skillsRef: null,
  timelineRef: null,
  contactRef: null,
  setRefs: (refs) => set(refs),
}));
