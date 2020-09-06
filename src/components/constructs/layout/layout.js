import React from "react";
import styled from "styled-components";

// Components
import SideNav from "../side-nav";
import { Row } from "../../primitives/row";

// Styles
const LayoutContainer = styled(Row)`
  background-color: ${({ theme }) => theme.colors.darkGrey};
  color: ${({ theme }) => theme.colors.white};
  width: 86vw;
`;

const Layout = ({ children }) => {
  return (
    <Row>
      <SideNav />
      <LayoutContainer>{children}</LayoutContainer>
    </Row>
  );
};

export default Layout;
