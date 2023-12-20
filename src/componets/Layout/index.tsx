import React from "react";
import { Container } from "semantic-ui-react";

import Navbar from "../Navbar";
import Footer from "../Footer";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
