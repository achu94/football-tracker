import { useEffect } from "react";
import useBoundStore from "../store";
import { List } from "semantic-ui-react";

const Events = () => {
  const matches = useBoundStore((state) => state.matches);
  const initMatches = useBoundStore((state) => state.initMatches);

  useEffect(() => {
    initMatches();
  }, [initMatches]);

  return (
    <>
      {matches.map((match) => (
        <List.Item key={match.match_id}>
          <List.Content>
            <List.Header as="a">{`${match.match_hometeam_name} - ${match.match_awayteam_name}`}</List.Header>
          </List.Content>
        </List.Item>
      ))}
    </>
  );
};

export default Events;
