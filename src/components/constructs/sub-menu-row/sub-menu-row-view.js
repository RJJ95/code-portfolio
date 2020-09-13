import React from "react";

import { Container, Label, SubMenuItemsContainer } from "./sub-menu-row-style";

import SubMenuItem from "./components/sub-menu-item";

const SubMenuRow = ({ label, items, framework }) => (
  <Container>
    <Label>{label}</Label>
    <SubMenuItemsContainer>
      {items &&
        Object.entries(items).map((keyName, index) => (
          <SubMenuItem
            key={index}
            text={keyName[1].title}
            id={keyName[0]}
            category={label}
            framework={framework}
          />
        ))}
    </SubMenuItemsContainer>
  </Container>
);

export default SubMenuRow;
