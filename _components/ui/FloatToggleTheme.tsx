"use client";

import useThemeStore from "@/store/themeStore";
import { Moon, Sun } from "../ui/icons";

export const FloatToggleTheme = () => {
  const { theme, toggleTheme } = useThemeStore();

  return (
    <button
      className="flex items-center fixed right-6 bottom-6 z-50 justify-center cursor-pointer size-14 border-2 bg-neutral-950 border-gray-400 rounded-full"
      onClick={toggleTheme}
    >
      {theme === "dark" ? (
        <Moon size={24} color="#FFFFFF" />
      ) : (
        <Sun size={24} color="#FFFFFF" />
      )}
    </button>
  );
};
