import React from "react";
import { Container } from "semantic-ui-react";

import Navbar from "../Navbar";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Container textAlign="center">
      <Navbar />
      {children}
    </Container>
  );
};

export default Layout;
