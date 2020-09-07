import styled from "styled-components";

import { Column } from "../../components/primitives/column";

export const Container = styled(Column)`
  width: 600px;
  height: 300px;
  background-color: ${({ theme }) => theme.colors.mediumGrey};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  justify-content: center;
  align-items: center;
`;

export const H1 = styled.h1`
  margin-left: 20px;
`;
