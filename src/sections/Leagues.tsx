import useBoundStore from "../store";
import { List } from "semantic-ui-react";

const Leagues = () => {
  const leagues = useBoundStore((state) => state.leagues);

  return (
    <List divided relaxed>
      {leagues.map((league) => (
        <List.Item key={league.league_id}>
          <i className="icon">
            <img
              width={38}
              height={38}
              src={league.league_logo}
              alt={`${league.league_name} Logo`}
            />
          </i>
          <List.Content>
            <List.Header as="a">{league.league_name}</List.Header>
          </List.Content>
        </List.Item>
      ))}
    </List>
  );
};

export default Leagues;
