import React from "react";

// Components
import MenuItems from "./components/menu-items";

// Content
import { menuItems } from "./content";

// Styled components
import { SideNavContainer, SideNavHeader } from "./side-nav-style";

const SideNav = () => {
  return (
    <SideNavContainer>
      <SideNavHeader>mycode</SideNavHeader>
      <MenuItems menuItems={menuItems} />
    </SideNavContainer>
  );
};

export default SideNav;
