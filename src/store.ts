import { create } from "zustand";

import { createCountrySlice, CountrySlice } from "./stores/countryStore";
import { createLeagueSlice, LeagueSlice } from "./stores/leaguesStore";

const useBoundStore = create<CountrySlice & LeagueSlice>()((...a) => ({
  ...createCountrySlice(...a),
  ...createLeagueSlice(...a),
}));

export default useBoundStore;