import { create } from "zustand";

import { createCountrySlice, CountrySlice } from "./stores/countryStore";
import { createLeagueSlice, LeagueSlice } from "./stores/leaguesStore";
import { createMatchSlice, MatchSlice } from "./stores/matchStore";

const useBoundStore = create<CountrySlice & LeagueSlice & MatchSlice>()((...a) => ({
  ...createCountrySlice(...a),
  ...createLeagueSlice(...a),
  ...createMatchSlice(...a),
}));

export default useBoundStore;