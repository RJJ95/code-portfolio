import React from "react";

// Components
import MenuItems from "./components/menu-items";

// Content
import { menuItems } from "./content";

// Styled components
import { SideNavContainer, SideNavHeader } from "./side-nav-style";

const SideNav = ({ handleClick }) => (
  <SideNavContainer>
    <SideNavHeader>mycode</SideNavHeader>
    <MenuItems menuItems={menuItems} handleClick={handleClick} />
  </SideNavContainer>
);

export default SideNav;
