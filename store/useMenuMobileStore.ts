import { create } from "zustand";

interface MenuMobileState {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  toggleMenu: () => void;
}

export const useMenuMobileStore = create<MenuMobileState>((set) => ({
  isOpen: false,
  setIsOpen: (isOpen) => set({ isOpen }),
  toggleMenu: () => set((state) => ({ isOpen: !state.isOpen })),
}));

