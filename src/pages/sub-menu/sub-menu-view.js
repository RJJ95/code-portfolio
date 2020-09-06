import React from "react";

// Styles
import { Container } from "./sub-menu-style";

// Content
import {
  reactSubMenuContent,
  vueSubMenuContent,
  angularSubMenuContent,
} from "./content";

// Components
import SubMenuRow from "../../components/constructs/sub-menu-row";
import { ReactComponent as ReactLogo } from "../../assets/images/react-logo.svg";
import { ReactComponent as VueLogo } from "../../assets/images/vue-logo.svg";
import { ReactComponent as AngularLogo } from "../../assets/images/angular-logo.svg";

const SubMenuPage = ({ page }) => {
  function getLogo() {
    switch (page) {
      case "react":
        return <ReactLogo />;
      case "vue":
        return <VueLogo />;
      case "angular":
        return <AngularLogo />;
      default:
        return reactSubMenuContent.map((subMenuRow) => (
          <SubMenuRow label={subMenuRow.label} items={subMenuRow.items} />
        ));
    }
  }

  function getSubMenuContent() {
    switch (page) {
      case "react":
        return reactSubMenuContent.map((subMenuRow) => (
          <SubMenuRow label={subMenuRow.label} items={subMenuRow.items} />
        ));
      case "vue":
        return vueSubMenuContent.map((subMenuRow) => (
          <SubMenuRow label={subMenuRow.label} items={subMenuRow.items} />
        ));
      case "angular":
        return angularSubMenuContent.map((subMenuRow) => (
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
      {getLogo()}
      {getSubMenuContent()}
    </Container>
  );
};

export default SubMenuPage;
