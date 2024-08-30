import { create } from "zustand";

export const useAuthStore = create((set) => ({
  isAuthenticated: null,

  login: () => set({ isAuthenticated: true }),

  logout: () => set({ isAuthenticated: false }),
}));
