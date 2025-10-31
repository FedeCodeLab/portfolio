"use client";

import useThemeStore from "@/store/themeStore";
import { Moon, Sun } from "../ui/icons";

export const ToggleTheme = () => {
  const { theme, toggleTheme } = useThemeStore();

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center justify-center cursor-pointer size-10 bg-gray-200 hover:bg-gray-300 dark:bg-[#1E293B] dark:hover:bg-[#334155] rounded-[10px] text-black dark:text-white"
    >
      {theme === "dark" ? <Moon size={20} /> : <Sun size={20} />}
    </button>
  );
};
