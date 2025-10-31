import { create } from "zustand";
import { RefObject } from "react";

interface RefsState {
  experienceRef: RefObject<HTMLDivElement | any> | any;
  portfolioRef: RefObject<HTMLDivElement | any> | any;
  skillsRef: RefObject<HTMLDivElement | any> | any;
  timelineRef: RefObject<HTMLDivElement | any> | any;
  contactRef: RefObject<HTMLDivElement | any> | any;
  setRefs: (refs: Partial<Omit<RefsState, "setRefs">>) => any;
}

export const useRefsStore = create<RefsState>((set) => ({
  experienceRef: null,
  portfolioRef: null,
  skillsRef: null,
  timelineRef: null,
  contactRef: null,
  setRefs: (refs) => set(refs),
}));
