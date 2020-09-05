import React from "react";

// Components
import MenuItem from "./components/menu-item";

// Content
import { menuItems } from "./content";

// Styled components
import { SideNavContainer, SideNavHeader } from "./side-nav-style";

const SideNav = () => {
  return (
    <SideNavContainer>
      <SideNavHeader />
      {menuItems.map((item) => (
        <MenuItem
          path={item.path}
          logo={item.logo}
          menuItemText={item.menuItemText}
        />
      ))}
    </SideNavContainer>
  );
};

export default SideNav;
