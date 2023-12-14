import useBoundStore from "../store";
import { List } from "semantic-ui-react";

const Countries = () => {
  const countries = useBoundStore((state) => state.countries);

  return (
    <List divided relaxed>
      {countries.map((country) => (
        <List.Item key={country.country_id}>
          <i className="icon">
            <img
              width={38}
              height={24}
              src={country.country_logo}
              alt={`${country.country_name} Logo`}
            />
          </i>
          <List.Content>
            <List.Header as="a">{country.country_name}</List.Header>
          </List.Content>
        </List.Item>
      ))}
    </List>
  );
};

export default Countries;
