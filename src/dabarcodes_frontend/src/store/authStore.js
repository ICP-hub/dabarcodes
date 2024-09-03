import { create } from "zustand";

export const useAuthStore = create((set) => ({
  isAuthenticated: true,

  login: () => set({ isAuthenticated: true }),
  logout: () => set({ isAuthenticated: false }),

  // Country state
  selectedCountryCode: "US", // Default country code
  selectedCountryName: "United States", // Default country name
  selectedCountryImage: "https://flagcdn.com/w320/us.png", // Default country image URL

  // Actions to set country state
  setCountry: (code, name, image) =>
    set({
      selectedCountryCode: code,
      selectedCountryName: name,
      selectedCountryImage: `https://flagcdn.com/w320/${code.toLowerCase()}.png`,
    }),
}));
