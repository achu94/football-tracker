import React, { useEffect } from "react";
import useBoundStore from "./store";
import Layout from "./componets/Layout";
import "semantic-ui-css/semantic.min.css";

import { List } from "semantic-ui-react";

function App() {
  const countries = useBoundStore((state) => state.countries);
  const initCountries = useBoundStore((state) => state.initCountries);

  useEffect(() => {
    // Fetch countries data when the component mounts
    initCountries();
  }, [initCountries]);

  const getCountryElements = () => {
    return countries.map((country) => (
      <List.Item key={country.country_id}>
        <i className="icon">
          <img width={38} height={24} src={country.country_logo} />
        </i>
        <List.Content>
          <List.Header as='a'>{country.country_name}</List.Header>
        </List.Content>
      </List.Item>
    ));
  };

  return (
    <Layout>
      {
        <List divided relaxed>
          {getCountryElements()}
        </List>
      }
    </Layout>
  );
}

export default App;
