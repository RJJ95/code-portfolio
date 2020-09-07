import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

// Components
import SideNav from "../side-nav";
import { Row } from "../../primitives/row";

// Config
import { NO_MENU_PATHS } from "../../../config/pathnames";

// Styles
const LayoutContainer = styled(Row)`
  background-color: ${({ theme }) => theme.colors.darkGrey};
  color: ${({ theme }) => theme.colors.white};
  width: ${(props) => (props.login ? "86vw" : "100vw")};
  height: ${(props) => !props.login && "100vh"};
  align-items: center;
  justify-content: center;
`;

const Layout = ({ children }) => {
  let location = useLocation();
  let showSideNav = !NO_MENU_PATHS.includes(location.pathname);
  return (
    <Row>
      {showSideNav && <SideNav />}
      <LayoutContainer login={showSideNav}>{children}</LayoutContainer>
    </Row>
  );
};

export default Layout;
