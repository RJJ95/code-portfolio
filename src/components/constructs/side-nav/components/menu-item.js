import React from "react";
import { Link } from "react-router-dom";

const MenuItem = ({ path, logo, menuItemText }) => {
  return (
    <Link to={path}>
      {logo}
      {menuItemText}
    </Link>
  );
};

export default MenuItem;
