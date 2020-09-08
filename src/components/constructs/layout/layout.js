import React, { useState } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

// Components
import SideNav from "../side-nav";
import { Row } from "../../primitives/row";
import AddSnippetModal from "./components/modal";

// Config
import { NO_MENU_PATHS } from "../../../config/pathnames";

// Styles
const LayoutContainer = styled(Row)`
  background-color: ${({ theme }) => theme.colors.darkGrey};
  color: ${({ theme }) => theme.colors.white};
  width: ${(props) => (props.login ? "86vw" : "100vw")};
  height: ${(props) => !props.login && "100vh"};
  align-items: ${(props) => (props.login ? null : "center")};
  justify-content: ${(props) => (props.login ? null : "center")};
`;

const Layout = ({ children }) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  let location = useLocation();
  let showSideNav = !NO_MENU_PATHS.includes(location.pathname);

  return (
    <Row>
      {showSideNav && <SideNav handleClick={() => setIsOpen(true)} />}
      <LayoutContainer login={showSideNav}>{children}</LayoutContainer>
      <AddSnippetModal modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} />
    </Row>
  );
};

export default Layout;
