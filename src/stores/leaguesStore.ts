import { StateCreator } from "zustand";

import { getLeaguesAsObj } from "../utils/rawData";

export interface LeagueProps {
  country_id: string;
  country_name: string;
  league_id: string;
  league_name: string;
  league_season: string;
  league_logo: string;
}

export interface LeagueSlice {
  leagues: LeagueProps[];
  initLeagues: () => Promise<void>;
}

export const createLeagueSlice: StateCreator<LeagueSlice> = (set) => ({
  leagues: [],
  initLeagues: async () => {
    try {
      const fetchedLeagues = await getLeaguesAsObj();
      set({ leagues: fetchedLeagues });
    } catch (error) {
      console.error("Error initializing leagues:", error);
    }
  }
})