import styled, { css } from "styled-components/macro";

const defaultStyle = css`
  color: ${(props) => props.theme.colors.navigation.foreground};
  transition-duration: ${(props) => props.theme.transition.shortDuration};
  transition-property: color;

  &:hover,
  &:active {
    color: #bcbdbf;
  }
`;

export const StyledA = styled.a`
  text-decoration: none;

  &:hover,
  &:active {
    text-decoration: none;
  }

  cursor: pointer;

  ${(props) => props.defaultStyle && defaultStyle}
`;
