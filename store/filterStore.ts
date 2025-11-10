import { create } from "zustand";

interface FilterState {
  filterType: string;
  setFilterType: (type: string) => void;
  resetFilter: () => void;
  visibleCount: number;
  setVisibleCount: (count: number) => void;
}

export const useFilterStore = create<FilterState>((set) => ({
  filterType: "Todos",
  setFilterType: (type) => set({ filterType: type, visibleCount: 4 }),
  resetFilter: () => set({ filterType: "Todos", visibleCount: 4 }),
  visibleCount: 4,
  setVisibleCount: (count) => set({ visibleCount: count }),
}));
