import React from "react";

import { Container, Label, SubMenuItemsContainer } from "./sub-menu-row-style";

import SubMenuItem from "./components/sub-menu-item";

const SubMenuRow = ({ label, items }) => {
  return (
    <Container>
      <Label>{label}</Label>
      <SubMenuItemsContainer>
        {items.map((item, index) => (
          <SubMenuItem key={index} path={item.path} text={item.text} />
        ))}
      </SubMenuItemsContainer>
    </Container>
  );
};

export default SubMenuRow;
