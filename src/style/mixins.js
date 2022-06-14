import { css } from "styled-components/macro";
import { cssRgb } from "../functions/cssRgb";
import { theme } from "./theme";

const commonHeader = css`
  overflow-wrap: break-word;
  line-height: 1.1;
  padding-block: 0.2em;
  color: ${theme.colors.heading};
`;

export const mixins = {
  headers: {
    fullWidth: css`
      ${commonHeader};
      position: relative;
      margin-bottom: ${theme.lengths.pad};
      padding-block: calc(0.2em + ${theme.lengths.pad});
      padding-inline: ${theme.lengths.pad};
      text-align: center;
      &:before {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        left: -50vw;
        z-index: -1;
        width: 150vw;
        max-width: none;
        background-color: ${cssRgb(theme.colors.primary.foreground, 0.2)};
        border-bottom: 1pt solid ${cssRgb(theme.colors.primary.foreground, 0.9)};
      }
    `,
    general: css`
      font-weight: 600;
      font-style: normal;
      font-size: ${20 / 22}rem;
      letter-spacing: 0.03em;
      text-transform: uppercase;
    `,
  },
  grid: {
    reading: css`
      display: grid;
      gap: ${theme.lengths.gap};
      grid-template-columns: repeat(auto-fit, minmax(min(100%, 45ch), 1fr));
    `,
  },
};
