import React from "react";
import styled from "styled-components";

// Components
import SideNav from "../side-nav";
import { Row } from "../../primitives/row";

// Styles
const LayoutContainer = styled(Row)`
  margin-left: 200px;
  background-color: ${({ theme }) => theme.colors.darkGrey};
  color: ${({ theme }) => theme.colors.white};
`;

const Layout = ({ children }) => {
  return (
    <>
      <SideNav />
      <LayoutContainer>{children}</LayoutContainer>
    </>
  );
};

export default Layout;
