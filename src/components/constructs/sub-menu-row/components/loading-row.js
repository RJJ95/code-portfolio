import React from "react";

import { Container, Label, SubMenuItemsContainer } from "../sub-menu-row-style";

import SubMenuItem from "./sub-menu-item";

const SubMenuRow = () => (
  <Container>
    <Label>Loading...</Label>
    <SubMenuItemsContainer>
      <SubMenuItem text="Loading..." />
    </SubMenuItemsContainer>
  </Container>
);

export default SubMenuRow;
