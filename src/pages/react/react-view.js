import React from "react";

import { Container, ReactLogo } from "./react-style";

import { ReactSubMenuContent } from "./content";

import SubMenuRow from "../../components/constructs/sub-menu-row";

const ReactPage = () => {
  return (
    <Container>
      <ReactLogo />
      {ReactSubMenuContent.map((subMenuRow) => (
        <SubMenuRow label={subMenuRow.label} items={subMenuRow.items} />
      ))}
    </Container>
  );
};

export default ReactPage;
