"use client";

import useThemeStore from "@/store/themeStore";
import { Moon, Sun } from "../ui/icons";

export const ToggleTheme = () => {
  const { theme, toggleTheme } = useThemeStore();

  return (
    <button
      className="flex items-center justify-center cursor-pointer size-10 border-2 border-gray-400 hover:bg-[#1E293B] hover:border-[#1E293B] rounded-[10px]"
      onClick={toggleTheme}
    >
      {theme === "dark" ? (
        <Moon size={20} color="#FFFFFF" />
      ) : (
        <Sun size={20} color="#FFFFFF" />
      )}
    </button>
  );
};
