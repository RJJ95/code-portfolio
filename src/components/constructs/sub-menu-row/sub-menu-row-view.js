import React from "react";

import { Container, Label, SubMenuItemsContainer } from "./sub-menu-row-style";

import SubMenuItem from "./components/sub-menu-item";

const SubMenuRow = ({ label, items }) => {
  return (
    <Container>
      <Label>{label}</Label>
      <SubMenuItemsContainer>
        {items &&
          Object.entries(items).map((keyName, index) => (
            <SubMenuItem key={index} text={keyName[1].title} />
          ))}
      </SubMenuItemsContainer>
    </Container>
  );
};

export default SubMenuRow;
