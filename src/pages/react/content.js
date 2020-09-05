import {REACT_SUBMENUPATHS} from "../../config/pathnames"

export const ReactSubMenu = [
  {
    label: "Routing",
    items: [
      {
        item: "React Router",
        path: REACT_SUBMENUPATHS.REACT_ROUTER,
      },
      {
        item: "Reach Router",
        path: REACT_SUBMENUPATHS.REACH_ROUTER,
      },
    ],
  },
  {
    label: "Styling",
    items: [
      {
        item: "Styled components",
        path: REACT_SUBMENUPATHS.STYLED_COMPONENTS,
      },
      {
        item: "Sass",
        path: REACT_SUBMENUPATHS.SASS,
      },
    ],
  },
  {
    label: "Components",
    items: [
      {
        item: "Forms",
        path: REACT_SUBMENUPATHS.FORMS,
      },
      {
        item: "Private Route",
        path: REACT_SUBMENUPATHS.PRIVATE_ROUTE,
      },
    ],
  },
];
