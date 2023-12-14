import { StateCreator } from "zustand";

import { getCountriesAsObj } from "../utils/rawData";

interface CountryProps {
  country_id: string;
  country_name: string;
  country_logo: string;
}

export interface CountrySlice {
  countries: CountryProps[];
  initCountries: () => Promise<void>;
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