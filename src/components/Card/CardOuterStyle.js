import styled, { css, keyframes } from "styled-components/macro";

import { cssRgb } from "../../functions/cssRgb";
import { pxToRem } from "../../functions/pxToRem";

const StyledIcon = css`
  display: ${({ floatIcon }) => (!floatIcon ? "grid" : "block")};
  ${({ floatIcon }) =>
    !floatIcon &&
    css`
      grid-template-columns: 4.5rem 1fr;
      column-gap: ${({ theme }) => theme.lengths.gap};
    `};
`;

const Highlight = (highlight, theme) => {
  const highlights = theme?.colors?.highlight;

  const background_color =
    highlights?.[highlight]?.dim ||
    highlights?.[highlight]?.mid ||
    highlights?.green?.dim;

  const border_color =
    highlights?.[highlight]?.bright ||
    highlights?.[highlight]?.mid ||
    highlights?.[highlight]?.dim ||
    highlights?.green?.bright;

  return `
  border-color: ${cssRgb(border_color, 0.9)};
  background-color: ${cssRgb(background_color, 0.5)};
  background: linear-gradient(30deg, ${cssRgb(
    background_color,
    0.1
  )} 0%, ${cssRgb(background_color)} 100%); 
`;
};

const borderAnimation = keyframes`
  42% {
    inset: initial;
  }
  43% {
    inset: ${pxToRem(-9)};
    opacity: 0;
  }
  100% {
    inset: ${pxToRem(-5)};
    opacity: 0.9;
  }`;

const Hover = css`
  &:hover,
  &:active {
    --card-content-opacity: 1;
    border-color: ${(props) => props.theme.colors.primary.foreground};

    &::before {
      background-color: ${(props) =>
        cssRgb(props.theme.colors.primary.foreground, 0.2)};
    }

    &::after {
      animation: ${borderAnimation}
        ${(props) => (parseFloat(props.theme.transition.duration) * 7) / 6}s
        both;
    }
  }
`;

export const StyledArticle = styled.article`
  --card-content-opacity: 0.9;

  position: relative;
  border: 1px solid
    ${({ theme }) =>
      cssRgb(theme.colors.primary.foreground, "var(--card-content-opacity)")};
  color: ${({ theme }) => theme.colors.primary.foreground};
  transition-duration: ${({ theme }) => theme.transition.duration};
  transition-property: border-color;
  padding: 1rem;

  &::before {
    content: "";
    z-index: -1;
    position: absolute;
    inset: 0;
    background: ${({ theme }) => cssRgb(theme.colors.primary.background, 0.5)};
    transition: background-color ${({ theme }) => theme.transition.duration};
  }

  ${({ icon }) => !!icon && StyledIcon}

  ${({ highlight, theme }) => highlight && Highlight(highlight, theme)}

  ${({ hasModal, href }) =>
    (hasModal || href) &&
    css`
      user-select: none;
      cursor: pointer;

      * {
        pointer-events: none;
      }

      &::after {
        content: "";
        position: absolute;
        max-width: none;
        inset: 0;
        border: ${pxToRem(2)} solid
          ${({ theme }) => theme.colors.primary.foreground};
        opacity: 0;
      }

      ${Hover}
    `}
`;
