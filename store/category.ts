import { create } from 'zustand';

type Sate = {
  activeId: number;
};

type Action = {
  setActiveId: (activeId: number) => void;
};
export const useCategoryStore = create<Sate & Action>((set) => ({
  activeId: 1,
  setActiveId: (activeId: number) => set({ activeId }),
}));
