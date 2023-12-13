import { StateCreator } from "zustand";

// Assuming you have a function to fetch countries
import { getCountriesAsObj } from "../utils/rawData";

interface CountryProps {
  country_id: string;
  country_name: string;
  country_logo: string;
}

export interface CountrySlice {
  countries: CountryProps[];
  initCountries: () => Promise<void>; // Assuming you want to use async initialization
}

export const createCountrySlice: StateCreator<CountrySlice> = (set) => ({
  countries: [],
  initCountries: async () => {
    try {
      const fetchedCountries = await getCountriesAsObj();
      set({ countries: fetchedCountries });
    } catch (error) {
      console.error("Error initializing countries:", error);
    }
  },
});