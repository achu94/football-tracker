import React, { useEffect } from "react";

import useBoundStore from "../../store";

const InitDefaultStoreData: React.FC = () => {
  const initCountries = useBoundStore((state) => state.initCountries);
  const initLeagues = useBoundStore((state) => state.initLeagues);

  useEffect(() => {
    // Fetch countries data when the component mounts
    initCountries();
    initLeagues();
  }, []);
  
  return <></>;
};

export default InitDefaultStoreData;
