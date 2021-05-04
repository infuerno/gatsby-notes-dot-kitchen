import React from "react";
import "minireset.css";
import Footer from "./Footer";
import Nav from "./Nav";
import GlobalStyles from "../styles/GlobalStyles";
import Typography from "../styles/Typography";
import Content from "./Content";

const Layout = ({ children }) => (
  <div>
    <GlobalStyles />
    <Typography />
    <Nav />
    <Content>{children}</Content>
    <Footer />
  </div>
);

export default Layout;
