import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SubMenuItemContainer = styled(Link)`
  text-decoration: none;
  width: 250px;
  height: 125px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.mediumGrey};
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 100px;

  :hover {
    background-color: ${({ theme }) => theme.colors.lightGrey};
  }
`;

const SubMenuItem = ({ path, text }) => {
  return (
    <SubMenuItemContainer to={path}>
      <h3>{text}</h3>
    </SubMenuItemContainer>
  );
};

export default SubMenuItem;
