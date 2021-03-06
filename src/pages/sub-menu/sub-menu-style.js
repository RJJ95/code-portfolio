import styled from "styled-components";

import { Column } from "../../components/primitives/column";

export const Container = styled(Column)`
  width: 100%;

  svg {
    width: 100px;
    height: 100px;
    margin-left: 80px;
    margin-top: 30px;
    margin-bottom: 40px;
  }
`;

export const NoDataHeader = styled.h1`
  margin-top: 100px;
  margin-left: 200px;
  width: 700px;
  text-align: center;
`;
