import styled from "styled-components";

import { Column } from "../../primitives/column";

export const SideNavContainer = styled(Column)`
  background-color: ${({ theme }) => theme.colors.mediumGrey};
  position: sticky;
  top: 0;
  height: 100vh;
  width: 14vw;
`;

export const SideNavHeader = styled.h2`
  color: ${({ theme }) => theme.colors.white};
  margin-left: 15px;
`;
