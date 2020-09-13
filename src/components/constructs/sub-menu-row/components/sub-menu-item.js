import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SubMenuItemContainer = styled(Link)`
  text-decoration: none;
  width: 250px;
  height: 125px;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  background-color: ${({ theme }) => theme.colors.mediumGrey};
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 60px;
  flex: 0 0 auto;

  :hover {
    background-color: ${({ theme }) => theme.colors.lightGrey};
  }
`;

const SubMenuItem = ({ id, text, category, framework }) => {
  return (
    <SubMenuItemContainer to={`/snippets/${framework}/${category}/${id}`}>
      <h3>{text}</h3>
    </SubMenuItemContainer>
  );
};

export default SubMenuItem;
