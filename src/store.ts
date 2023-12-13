import { create } from "zustand";

import { createCountrySlice, CountrySlice } from "./stores/countryStore";

const useBoundStore = create<CountrySlice>()((...a) => ({
  ...createCountrySlice(...a),
}));

export default useBoundStore;