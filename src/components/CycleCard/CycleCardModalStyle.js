import styled, { css } from "styled-components/macro";

const flexColumnCenter = css`
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  align-items: safe center;
  text-align: center;
  margin: auto;
`;

export const CurrentItem = styled.section`
  ${flexColumnCenter}
  margin-top: 1em;
`;

export const UpcomingItems = styled.section`
  ${flexColumnCenter}
  gap: ${(props) => props.theme.lengths.gap};

  & > h3 {
    margin: auto;
    margin-top: 1em;
    order: -1;
  }
`;
