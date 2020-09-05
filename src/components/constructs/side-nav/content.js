import React from "react";

// Config
import { PATHNAMES } from "../../../config/pathnames";

// Logo's
import { ReactComponent as ReactLogo } from "../../../assets/images/react-logo.svg";
import { ReactComponent as VueLogo } from "../../../assets/images/vue-logo.svg";
import { ReactComponent as AngularLogo } from "../../../assets/images/angular-logo.svg";

export const menuItems = [
  {
    menuItemText: "React",
    path: PATHNAMES.REACT,
    logo: <ReactLogo />,
  },
  {
    menuItemText: "Vue.js",
    path: PATHNAMES.VUE,
    logo: <VueLogo />,
  },
  {
    menuItemText: "Angular",
    path: PATHNAMES.ANGULAR,
    logo: <AngularLogo />,
  },
];
