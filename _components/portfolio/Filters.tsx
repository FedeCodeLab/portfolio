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
              ? ""
              : "dark:bg-[#1E293B] hover:dark:bg-blue-950"
          }`}
          onClick={() => handleSetFilterType("Todos")}
        >
          Todos
        </Button>

        <Button
          size={"small"}
          className={`${
            filterType === "Proyecto"
              ? ""
              : "dark:bg-[#1E293B] hover:dark:bg-blue-950"
          }`}
          onClick={() => handleSetFilterType("Proyecto")}
        >
          Proyecto
        </Button>

        <Button
          size={"small"}
          className={`${
            filterType === "Experiencia laboral"
              ? "bg-blue-600"
              : "dark:bg-[#1E293B] hover:dark:bg-blue-950"
          }`}
          onClick={() => handleSetFilterType("Experiencia laboral")}
        >
          Experiencia laboral
        </Button>
      </div>
    </div>
  );
};
