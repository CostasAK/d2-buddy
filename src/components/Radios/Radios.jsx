import { cssRgb } from "../../functions/cssRgb";
import { forwardRef } from "react";
import styled from "styled-components/macro";
import { theme } from "../../style/theme";

const checkboxSize = 1.3;

const Radio = styled.label`
  &,
  > * {
    cursor: pointer;
  }
  > input[type="checkbox"] {
    position: absolute;
    visibility: hidden;
    width: 0;
    height: 0;
  }
`;

const Inner = styled.span`
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: 1fr ${checkboxSize}em;
  align-items: safe center;

  ::after {
    content: "";
    aspect-ratio: 1 / 1;
    height: ${checkboxSize}em;
    border: 1px solid ${theme.colors.highlight.green.mid};
    border-radius: 50%;
  }

  &:hover::after {
    background-color: ${cssRgb(theme.colors.highlight.green.mid, 0.5)};
  }

  ${Radio} > input[type="radio"]:checked ~ &::after {
    background-image: radial-gradient(
      circle closest-side at center,
      ${theme.colors.highlight.green.mid} 0%,
      ${theme.colors.highlight.green.mid} 100%
    );
    background-size: calc(${checkboxSize}em - 6px) calc(${checkboxSize}em - 6px);
    background-repeat: no-repeat;
    background-position: center;
  }
`;

const Label = styled.span`
  background-image: linear-gradient(
    ${cssRgb(theme.colors.primary.foreground, 0.2)} 0%,
    ${cssRgb(theme.colors.primary.foreground, 0.2)} 100%
  );
  background-size: auto ${checkboxSize}em;
  background-repeat: no-repeat;
  background-position: center;
`;

export const Radios = forwardRef(
  ({ name, checked, onChange, children }, ref) => {
    return (
      <div ref={ref} onChange={onChange}>
        {children.map((child, index) => (
          <Radio>
            <input type="radio" name={name} checked={checked === index} />
            <Inner>
              <Label>{child}</Label>
            </Inner>
          </Radio>
        ))}
      </div>
    );
  }
);
