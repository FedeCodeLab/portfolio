import { create } from "zustand";

type ThemeState = {
  theme: "light" | "dark";
  setTheme: (t: "light" | "dark") => void;
  toggleTheme: () => void;
};

function applyHtmlClass(theme: "light" | "dark") {
  if (typeof document !== "undefined") {
    if (theme === "dark") document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }
}

export const useThemeStore = create<ThemeState>((set) => ({
  theme: "dark",
  setTheme: (t: "dark" | "light") => {
    set({ theme: t });
    applyHtmlClass(t);
  },
  toggleTheme: () => {
    set((s) => {
      const newTheme = s.theme === "dark" ? "light" : "dark";
      applyHtmlClass(newTheme);
      return { theme: newTheme };
    });
  },
}));

export default useThemeStore;
