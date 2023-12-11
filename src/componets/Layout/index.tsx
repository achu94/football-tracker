import React from "react";
import { Container } from "semantic-ui-react";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return <Container textAlign="center">{children}</Container>;
};

export default Layout;
