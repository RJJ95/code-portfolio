import React from "react";
import styled from "styled-components";

// Components
import { Column } from "../../../primitives/column";
import MenuItem from "./menu-item";
import { ReactComponent as Add } from "../../../../assets/icons/plus-circle-outline.svg";

const Container = styled(Column)`
  justify-content: space-between;
  height: 100%;
`;

const AddIcon = styled(Add)`
  width: 50px;
  height: 50px;
  fill: ${({ theme }) => theme.colors.lightGrey};
  margin-left: 15px;
  margin-bottom: 15px;
  cursor: pointer;

  :hover {
    fill: ${({ theme }) => theme.colors.white};
  }
`;

const MenuItems = ({ menuItems, handleClick }) => (
  <Container>
    <Column>
      {menuItems.map((item, index) => (
        <MenuItem
          key={index}
          path={item.path}
          logo={item.logo}
          menuItemText={item.menuItemText}
        />
      ))}
    </Column>
    {localStorage.getItem("token") && <AddIcon onClick={handleClick} />}
  </Container>
);
export default MenuItems;
