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
  margin-top: ${(props) => props.theme.lengths.pad};
`;

export const UpcomingItems = styled.section`
  ${flexColumnCenter}
  gap: ${(props) => props.theme.lengths.gap};

  & > h3 {
    margin: auto;
    margin-top: ${(props) => props.theme.lengths.gap};
    order: -1;
  }
`;
