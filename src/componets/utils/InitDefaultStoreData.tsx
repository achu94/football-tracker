import React, { useEffect } from "react";

import useBoundStore from "../../store";

const InitDefaultStoreData: React.FC = () => {
  const initCountries = useBoundStore((state) => state.initCountries);
  const initLeagues = useBoundStore((state) => state.initLeagues);
  
  const store = useBoundStore((state) => state);

  useEffect(() => {
    // Fetch countries data when the component mounts
    initCountries();
    initLeagues();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  console.log(store);
  
  return <></>;
};

export default InitDefaultStoreData;
