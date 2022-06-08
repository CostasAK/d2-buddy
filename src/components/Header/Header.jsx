import styled, { css, keyframes } from "styled-components/macro";
import { useIsFetching, useQueryClient } from "react-query";

import Button from "../Button";
import { Img } from "../Img/Img";
import SVG from "react-inlinesvg";
import logo from "../../assets/clovis_ck.svg";
import { theme } from "../../style/theme";

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const StyledHeader = styled.header`
  isolation: isolate;
  width: 100vw;
  min-height: 78px;
  padding: ${theme.lengths.pad} ${theme.lengths.gap};
  column-gap: ${theme.lengths.margin};
  background-color: ${theme.colors.header.background};
  box-shadow: ${theme.shadows.box};
  font-family: ${theme.fonts.secondary};
  text-transform: uppercase;
  display: flex;
  flex-flow: row wrap;
  align-items: safe center;
  justify-content: safe center;

  > * {
    display: flex;
    flex-flow: row nowrap;
    align-items: safe center;
    justify-content: flex-start;
    width: max-content;
  }
`;

const Title = styled.p`
  flex: 0 0 auto;
  margin: auto;
  color: ${theme.colors.header.foreground};
  font-size: 1.5rem;
  font-weight: 400;
  gap: 0.75em;
`;

const Logo = styled(SVG)`
  color: ${theme.colors.header.foreground};
  min-width: 1.25em;
  width: 2em;
  min-height: 1.25em;
  height: 2em;
`;

const Buttons = styled.div`
  justify-content: flex-end;
  font-size: 0.875rem;
  flex: 1 0 auto;
  column-gap: ${theme.lengths.gap};
`;

const Refresh = styled(Img)`
  min-width: 1.25em;
  width: 3em;
  min-height: 1.25em;
  height: 3em;
  cursor: pointer;
  animation: ${(props) =>
    props.spin &&
    css`
      ${spin} ${theme.transition.longDuration} linear infinite
    `};
`;

export function Header() {
  const queryClient = useQueryClient();
  const isFetching = useIsFetching();

  return (
    <StyledHeader>
      <Title>
        <Logo
          src={logo}
          preProcessor={(code) =>
            code.replace(/stroke=".*?"/g, 'stroke="currentColor"')
          }
        />
        <span>Destiny 2 Buddy</span>
      </Title>
      {navigator.platform.match(/Win\d+/i) && (
        <Buttons>
          <Button href="steam://rungameid/1085660">Play Destiny 2</Button>
          <Refresh
            src="https://cdn.jsdelivr.net/gh/game-icons/icons@c10320edc7ae3f28a29d172e0dd3f029411825d7/delapouite/clockwise-rotation.svg"
            onClick={() => queryClient.invalidateQueries()}
            spin={isFetching}
          />
        </Buttons>
      )}
    </StyledHeader>
  );
}
