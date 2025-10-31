import { create } from "zustand";
import { RefObject } from "react";

type DivRef = RefObject<HTMLDivElement>;

interface RefsState {
  experienceRef: DivRef | null;
  portfolioRef: DivRef | null;
  skillsRef: DivRef | null;
  timelineRef: DivRef | null;
  contactRef: DivRef | null;
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
