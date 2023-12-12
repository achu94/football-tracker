import React from "react";
import { Icon, Segment, Grid, Button, Container } from "semantic-ui-react";

const Navbar = () => {
  return (
    <Container>
      <Grid padded columns='equal' verticalAlign="middle">
          <Grid.Column>
            <Button>
              <Icon name="block layout" />
            </Button>
          </Grid.Column>
          <Grid.Column>
            <Segment tertiary={true}>Home</Segment>
          </Grid.Column>
          <Grid.Column>
            <Button>
              <Icon name="question circle outline" />
            </Button>
          </Grid.Column>
      </Grid>
    </Container>
  );
};

export default Navbar;
