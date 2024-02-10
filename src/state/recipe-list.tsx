import { create } from "zustand";

interface RecipeListState {
  minimized: boolean;
  setIsMinimized: (minimized: boolean) => void;
}

export const useRecipeListStore = create<RecipeListState>()((set) => ({
  minimized: false,
  setIsMinimized: (minimized: boolean) => set({ minimized }),
}));
