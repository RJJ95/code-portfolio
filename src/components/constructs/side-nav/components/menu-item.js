import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const MenuLink = styled(Link)`
  display: flex;
  flex-direction: row;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.white};
  padding-left: 15px;
  padding-right: 30px;
  align-items: center;
  height: 60px;

  :hover {
    background-color: ${({ theme }) => theme.colors.lightGrey};
  }

  svg {
    width: 30px;
    height: 30px;
    margin-right: 15px;
  }
`;

const MenuItem = ({ path, logo, menuItemText }) => {
  return (
    <MenuLink to={path}>
      {logo}
      {menuItemText}
    </MenuLink>
  );
};

export default MenuItem;
