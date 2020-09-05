import styled from "styled-components";

import { Column } from "../../primitives/column";

export const SideNavContainer = styled(Column)`
  background-color: ${(props) => props.theme.colors.lightGrey};
  position: fixed;
  height: 100vh;
  width: 200px;
`;

export const SideNavHeader = styled.div``;
