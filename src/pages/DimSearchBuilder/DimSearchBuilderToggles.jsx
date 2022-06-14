import Checkbox from "../../components/Checkbox";
import Masonry from "../../components/Masonry";

export const DimSearchBuilderToggles = ({ toggles, toggleState, onChange }) => {
  return (
    <section>
      <h2>Preferences</h2>
      <Masonry>
        {toggles.map((category, categoryIndex) => (
          <section key={categoryIndex}>
            {category.display && <h4>{category.display}</h4>}
            {category.options.map((toggle, toggleIndex) => {
              const checked =
                toggleState?.[toggle.key] !== undefined
                  ? toggleState[toggle.key]
                  : toggle.enabled;

              return (
                <Checkbox
                  key={toggleIndex}
                  checked={checked}
                  onChange={() => onChange(toggle.key, checked)}
                >
                  {toggle.display}
                </Checkbox>
              );
            })}
          </section>
        ))}
      </Masonry>
    </section>
  );
};
