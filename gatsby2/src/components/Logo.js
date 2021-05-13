import React from "react";
import styled from "styled-components";
import logo from "../assets/images/logo.svg";

const LogoStyles = styled.div`
  background: white url(${logo});
`;

const Logo = () => <LogoStyles />;

export default Logo;
