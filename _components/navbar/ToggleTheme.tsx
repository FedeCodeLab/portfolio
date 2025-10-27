"use client";

import useThemeStore from "@/store/themeStore";
import { Moon, Sun } from "../ui/icons";

export const ToggleTheme = () => {
  const { theme, toggleTheme } = useThemeStore();

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center justify-center cursor-pointer size-10 border-2 border-transparent bg-gray-200 hover:bg-gray-300 dark:bg-transparent dark:border-gray-400 dark:hover:bg-[#1E293B] dark:hover:border-[#1E293B] rounded-[10px] text-black dark:text-white"
    >
      {theme === "dark" ? <Moon size={20} /> : <Sun size={20} />}
    </button>
  );
};
