"use client";

import { useFilterStore } from "@/store/filterStore";
import { useRefsStore } from "@/store/useRefsStore";
import { useRef, useEffect } from "react";
import { Button } from "../ui/Button";

export const Filters = () => {
  const portfolioRef = useRef<HTMLDivElement>(null);
  const setRefs = useRefsStore((state) => state.setRefs);

  const filterType = useFilterStore((state) => state.filterType);
  const setFilterTypeCore = useFilterStore((state) => state.setFilterType);

  const handleSetFilterType = (type: string) => {
    setFilterTypeCore(type);
  };

  useEffect(() => {
    setRefs({ portfolioRef });
  }, [setRefs]);

  return (
    <div className="flex flex-col gap-2 w-full">
      <p className="font-[600] text-[14px]">Filtros:</p>
      <div className="flex gap-2 w-full justify-start">
        <Button
          size={"small"}
          className={`${
            filterType === "Todos"
              ? "text-white hover:bg-[#3098F3] hover:dark:bg-blue-800"
              : "!bg-gray-200 border-2 border-gray-400 dark:border-transparent dark:!bg-[#1E293B] hover:!bg-[#3074f3] hover:dark:!bg-blue-950 hover:text-white"
          }`}
          onClick={() => handleSetFilterType("Todos")}
        >
          Todos
        </Button>

        <Button
          size={"small"}
          className={`${
            filterType === "Proyecto"
              ? "text-white hover:bg-[#3098F3] hover:dark:bg-blue-800"
              : "!bg-gray-200 border-2 border-gray-400 dark:border-transparent dark:!bg-[#1E293B] hover:!bg-[#3074f3] hover:dark:!bg-blue-950 hover:text-white"
          }`}
          onClick={() => handleSetFilterType("Proyecto")}
        >
          Proyecto
        </Button>

        <Button
          size={"small"}
          className={`${
            filterType === "Experiencia laboral"
              ? "text-white hover:bg-[#3098F3] hover:dark:bg-blue-800"
              : "!bg-gray-200 border-2 border-gray-400 dark:border-transparent dark:!bg-[#1E293B] hover:!bg-[#3074f3] hover:dark:!bg-blue-950 hover:text-white"
          }`}
          onClick={() => handleSetFilterType("Experiencia laboral")}
        >
          Experiencia laboral
        </Button>
      </div>
    </div>
  );
};
