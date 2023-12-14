import React, { useEffect } from "react";

import useBoundStore from "../../store";

const InitDefaultStoreData: React.FC = () => {
  const initCountries = useBoundStore((state) => state.initCountries);

  useEffect(() => {
    // Fetch countries data when the component mounts
    initCountries();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return <></>;
};

export default InitDefaultStoreData;
