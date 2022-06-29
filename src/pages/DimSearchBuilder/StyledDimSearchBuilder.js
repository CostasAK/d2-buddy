import styled from "styled-components/macro";
import { theme } from "../../style/theme";

export const StyledDimSearchBuilder = styled.article`
  & > div:not(:first-child) {
    display: flex;
    flex-flow: column;
    margin: ${theme.lengths.margin} auto;
    gap: ${theme.lengths.margin};
  }
`;
