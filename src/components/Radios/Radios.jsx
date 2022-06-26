import { cssRgb } from "../../functions/cssRgb";
import { forwardRef } from "react";
import { mixins } from "../../style/mixins";
import styled from "styled-components/macro";
import { theme } from "../../style/theme";

const checkboxSize = 1.3;

const radioColor = ({ option }) =>
  option === "Keep"
    ? theme.colors.highlight.green.mid
    : option === "Trash"
    ? theme.colors.highlight.red
    : "#888";

const radioBackgroundColor = ({ option }) =>
  option === "Keep"
    ? theme.colors.highlight.green.mid
    : option === "Trash"
    ? theme.colors.highlight.red
    : "transparent";

const Outer = styled.div`
  background-image: linear-gradient(
    ${cssRgb(theme.colors.primary.foreground, 0.2)} 0%,
    ${cssRgb(theme.colors.primary.foreground, 0.2)} 100%
  );
  background-size: auto
    calc(100% + ${checkboxSize}em - ${theme.text.lineHeight}em);
  background-repeat: no-repeat;
  background-position: center;
`;

const Name = styled.span`
  ${mixins.headers.general}
`;

const Radio = styled.label`
  &,
  > * {
    cursor: pointer;
  }
  > input[type="radio"] {
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
  background: ${(props) => cssRgb(radioBackgroundColor(props), 0.2)};

  ${Radio}:last-child > && {
    background: none;
    background-image: linear-gradient(
      ${(props) => cssRgb(radioBackgroundColor(props), 0.2)} 0%,
      ${(props) => cssRgb(radioBackgroundColor(props), 0.2)} 100%
    );
    background-size: auto ${(theme.text.lineHeight + checkboxSize) / 2}em;
    background-repeat: no-repeat;
    background-position: top;
  }

  ::after {
    content: "";
    aspect-ratio: 1 / 1;
    height: ${checkboxSize}em;
    border: 1px solid ${radioColor};
    border-radius: 50%;
    background-color: ${theme.colors.primary.background};
    background-size: calc(100% - 2px) calc(100% - 2px);
  }

  &&:hover::after {
    background-color: ${(props) => cssRgb(radioColor(props), 0.5)};
  }

  ${Radio} > input[type="radio"]:checked ~ &&::after {
    background-image: radial-gradient(
      circle closest-side at center,
      ${radioColor} 0%,
      ${radioColor} ${(100 * checkboxSize) / theme.text.lineHeight}%,
      transparent ${5 + (100 * checkboxSize) / theme.text.lineHeight}%
    );
    background-repeat: no-repeat;
    background-position: center;
  }
`;

const Label = styled.span``;

export const Radios = forwardRef(
  ({ name, checked, onChange, children }, ref) => {
    return (
      <Outer ref={ref}>
        <Name>{name}</Name>
        {children.map((child, index) => (
          <Radio key={index}>
            <input
              type="radio"
              name={name}
              value={child}
              checked={checked === index}
              onChange={onChange}
            />
            <Inner option={child}>
              <Label>{child}</Label>
            </Inner>
          </Radio>
        ))}
      </Outer>
    );
  }
);
