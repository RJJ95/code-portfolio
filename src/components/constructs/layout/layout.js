import React from "react";
import styled from "styled-components";

// Components
import SideNav from "../side-nav";
import { Row } from "../../primitives/row";

// Styles
const LayoutContainer = styled(Row)`
  background-color: ${({ theme }) => theme.colors.darkGrey};
  color: ${({ theme }) => theme.colors.white};
  width: ${(props) => (props.login ? "100vw" : "86vw")};
  height: ${(props) => props.login && "100vh"};
`;

const Layout = ({ children }) => {
  function checkLoginPage() {
    return window.location.pathname.split("/")[1] === "login";
  }

  return (
    <Row>
      {!checkLoginPage() && <SideNav />}
      <LayoutContainer login={checkLoginPage()}>{children}</LayoutContainer>
    </Row>
  );
};

export default Layout;
