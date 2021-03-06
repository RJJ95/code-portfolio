import styled from "styled-components";

import { Column } from "../../primitives/column";
import { Row } from "../../primitives/row";

export const Container = styled(Column)`
  margin-bottom: 60px;
  margin-left: 100px;
`;

export const Label = styled.label`
  margin-bottom: 20px;
  text-transform: uppercase;
`;

export const SubMenuItemsContainer = styled(Row)`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
`;
