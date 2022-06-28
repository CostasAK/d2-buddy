import { cssRgb } from "../../functions/cssRgb";
import { forwardRef } from "react";
import styled from "styled-components/macro";
import { theme } from "../../style/theme";

const checkboxSize = 1.3;

const checkboxColor = ({ option }) => {
  return option === "Keep"
    ? theme.colors.highlight.green.mid
    : option === "Trash"
    ? theme.colors.highlight.red
    : "#888";
};

const checkboxBackgroundColor = ({ option }) =>
  option === "Keep"
    ? theme.colors.highlight.green.mid
    : option === "Trash"
    ? theme.colors.highlight.red
    : "transparent";

const Outer = styled.label`
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
    border: 1px solid ${checkboxColor};
  }

  &&:hover::after {
    background-color: ${(props) => cssRgb(checkboxColor(props), 0.5)};
  }

  ${Outer} > input[type="checkbox"]:checked ~ &&::after {
    background-image: linear-gradient(
      ${checkboxColor} 0%,
      ${checkboxColor} 100%
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
    ),
    linear-gradient(
      ${(props) => cssRgb(checkboxBackgroundColor(props), 0.2)} 0%,
      ${(props) => cssRgb(checkboxBackgroundColor(props), 0.2)} 100%
    );
  background-size: auto ${checkboxSize}em;
  background-repeat: no-repeat;
  background-position: center;
  padding-left: ${theme.text.lineHeight - checkboxSize}em;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Value = styled.input`
  margin-left: auto;
  background: ${theme.colors.primary.background};
  color: ${theme.colors.primary.foreground};
  border: 1px solid ${checkboxColor};
  width: 3em;
  height: ${checkboxSize}rem;
`;

export const Checkbox = forwardRef(
  (
    {
      checked,
      option,
      onChange,
      value,
      onValueChange,
      valueMin,
      valueMax,
      children,
    },
    ref
  ) => {
    return (
      <Outer ref={ref}>
        <input type="checkbox" checked={checked} onChange={onChange} />
        <Inner option={option}>
          <Label option={option}>
            {children}
            {value !== undefined && (
              <Value
                type="number"
                inputmode="numeric"
                value={value}
                onChange={onValueChange}
                min={valueMin || 0}
                max={valueMax || 99}
              />
            )}
          </Label>
        </Inner>
      </Outer>
    );
  }
);
