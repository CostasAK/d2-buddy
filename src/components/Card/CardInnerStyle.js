import styled, { css } from "styled-components/macro";

import Img from "../Img";
import { StyledArticle } from "./CardOuterStyle";

const StyledIconFloat = css`
  float: left;
  margin: 0 0.5rem -1px 0;
  max-width: 3rem;
  max-height: 3rem;
  opacity: 1;
`;

const StyledIconSide = css`
  grid-row: 1 / 3;
  grid-column-start: 1;
  align-self: center;
`;

export const StyledIcon = styled(Img)`
  color: ${(props) => props.theme.colors.heading};
  width: 100% !important;
  max-width: 4.5rem;
  height: auto !important;
  max-height: 4.5rem;
  object-fit: scale-down;
  opacity: var(--card-content-opacity);
  transition-duration: ${({ theme }) => theme.transition.duration};
  transition-property: opacity, transform;
  ${({ $floatIcon }) => ($floatIcon ? StyledIconFloat : StyledIconSide)};

  ${StyledArticle}:hover &,
  ${StyledArticle}:active & {
    transform: scale(1.1);
  }
`;

export const StyledTitle = styled.h4`
  &::after {
    content: ${({ titleRule }) => (titleRule ? "''" : "none")};
    display: block;
    margin-block: calc(0.95rem - 1px) 0.55rem;
    border-bottom: 1px solid ${({ theme }) => theme.colors.primary.foreground};
    opacity: var(--card-content-opacity);
    transition-duration: ${({ theme }) => theme.transition.duration};
    transition-property: opacity;
  }
`;

export const StyledSection = styled.section`
  opacity: var(--card-content-opacity);
  transition-duration: ${({ theme }) => theme.transition.duration};
  transition-property: opacity;
`;
