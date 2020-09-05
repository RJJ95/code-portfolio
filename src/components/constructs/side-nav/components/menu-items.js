import React from "react";
import styled from "styled-components";

import { Column } from "../../../primitives/column";
import MenuItem from "./menu-item";

const MenuItemsContainer = styled(Column)`
    
`;

const MenuItems = ({ menuItems }) => {
  return (
    <MenuItemsContainer>
      {menuItems.map((item) => (
        <MenuItem
          path={item.path}
          logo={item.logo}
          menuItemText={item.menuItemText}
        />
      ))}
    </MenuItemsContainer>
  );
};

export default MenuItems;
