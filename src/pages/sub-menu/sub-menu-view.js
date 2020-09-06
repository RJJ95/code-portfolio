import React from "react";

import { Container, ReactLogo } from "./sub-menu-style";

import {
  reactSubMenuContent,
  vueSubMenuContent,
  angularSubMenuContent,
} from "./content";

import SubMenuRow from "../../components/constructs/sub-menu-row";

const SubMenuPage = ({ page }) => {
  function getSubMenuContent() {
    switch (page) {
      case "react":
        return reactSubMenuContent.map((subMenuRow) => (
          <SubMenuRow label={subMenuRow.label} items={subMenuRow.items} />
        ));
      case "vue":
        vueSubMenuContent.map((subMenuRow) => (
          <SubMenuRow label={subMenuRow.label} items={subMenuRow.items} />
        ));
      case "angular":
        angularSubMenuContent.map((subMenuRow) => (
          <SubMenuRow label={subMenuRow.label} items={subMenuRow.items} />
        ));
      default:
        return reactSubMenuContent.map((subMenuRow) => (
          <SubMenuRow label={subMenuRow.label} items={subMenuRow.items} />
        ));
    }
  }

  return (
    <Container>
      <ReactLogo />
      {getSubMenuContent()}
    </Container>
  );
};

export default SubMenuPage;
