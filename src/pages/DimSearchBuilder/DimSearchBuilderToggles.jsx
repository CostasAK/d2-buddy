import Checkbox from "../../components/Checkbox";
import Masonry from "../../components/Masonry";
import Radios from "../../components/Radios";
import { mixins } from "../../style/mixins";
import styled from "styled-components/macro";
import { theme } from "../../style/theme";

const StyledSection = styled.section`
  > h2 {
    ${mixins.headers.fullWidth};
  }

  > div,
  > section {
    ${mixins.grid.reading};
    gap: ${theme.lengths.cardGap};
  }
`;

export const DimSearchBuilderToggles = ({ toggles, toggleState, onChange }) => {
  return (
    <StyledSection>
      <h2>Preferences</h2>
      <Masonry>
        {toggles.map((category, categoryIndex) => (
          <section key={categoryIndex}>
            {category.display && <h4>{category.display}</h4>}
            {category.options.map((toggle, toggleIndex) => {
              const state =
                toggleState?.[toggle.key] !== undefined
                  ? toggleState[toggle.key]
                  : toggle.default;
              const checked = state >= 0;

              return toggle.options?.length > 1 ? (
                <Radios
                  key={toggle.key}
                  name={toggle.display}
                  checked={state}
                  onChange={(e) =>
                    onChange(toggle.key, toggle.options.indexOf(e.target.value))
                  }
                >
                  {toggle.options}
                </Radios>
              ) : (
                <Checkbox
                  key={toggleIndex}
                  checked={checked}
                  onChange={() => onChange(toggle.key, checked ? -1 : 0)}
                >
                  {toggle.display}
                </Checkbox>
              );
            })}
          </section>
        ))}
      </Masonry>
    </StyledSection>
  );
};
