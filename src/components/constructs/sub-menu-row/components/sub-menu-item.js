import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SubMenuItemContainer = styled(Link)`
  text-decoration: none;
  width: 250px;
  height: 125px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.mediumGrey};
`;

const SubMenuItem = ({ path, text }) => {
  return (
    <SubMenuItemContainer path={path}>
      <h3>{text}</h3>
    </SubMenuItemContainer>
  );
};

export default SubMenuItem;
