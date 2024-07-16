import { create } from "zustand";

export const useVacancyHidden = create((set) => ({
    hiddenVacancy: [],
    addVacancy: (id) => set((state) => ({ hiddenVacancy: [...state.hiddenVacancy, id] })),
    removeVacancy: (id) => set((state) => ({ hiddenVacancy: state.hiddenVacancy.filter(el => el !== id) })),
    clearHiddenvacancy: () => set({ hiddenVacancy: [] })
  }))