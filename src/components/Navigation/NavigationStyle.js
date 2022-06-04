import styled from "styled-components/macro";

export const StyledNav = styled.nav`
  width: 100%;
  background: ${(props) => props.theme.colors.navigation.background};
  text-align: center;
  font-size: 1.067rem;
  text-transform: uppercase;

  > ul {
    display: flex;
    flex-flow: row wrap;
    align-items: safe center;
    justify-content: safe center;
    list-style: none;
    margin-block: 0;
    padding-left: 0;

    > li > .navigation-link {
      display: flex;
      flex-flow: column;
      align-items: safe center;
      justify-content: safe center;
      color: ${(props) => props.theme.colors.navigation.foreground};
      margin-block: 3px;
      position: relative;
      line-height: 1.1;
      padding-block: ${1.067 / 2}rem;
      padding-inline: 1.25em;
      height: ${2 * 1.1 * 1.067 + 1.067}rem;

      &::after {
        content: "";
        position: absolute;
        bottom: -3px;
        left: -1px;
        right: -1px;
        max-width: none;
        transform: scaleX(0);
        height: 3px;
        background: ${(props) => props.theme.colors.highlight.yellow.mid};
        transition-property: transform;
        transition-duration: ${(props) => props.theme.transition.duration};
      }

      &:hover,
      &:focus,
      &:active,
      &.active {
        color: ${(props) => props.theme.colors.navigation.foreground};

        &::after {
          transform: scaleX(1);
        }
      }
    }
  }
`;
