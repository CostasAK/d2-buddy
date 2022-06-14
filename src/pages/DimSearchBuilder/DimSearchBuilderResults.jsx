import Card from "../../components/Card/index";
import Masonry from "../../components/Masonry";
import Tooltip from "../../components/Tooltip";

const DimCard = ({ children, ...props }) => {
  return (
    <Tooltip contents="Click to Copy">
      <Card {...props} onClick={() => navigator.clipboard.writeText(children)}>
        {children}
      </Card>
    </Tooltip>
  );
};

export const DimSearchBuilderResults = ({ toggles, toggleState }) => {
  const isEnabled = (option) =>
    toggleState?.[option.key] !== undefined
      ? toggleState[option.key]
      : !!option.enabled;

  const trashString =
    "/* Trash | D2 Buddy */" +
    toggles
      .map((category) =>
        category.options
          .filter(isEnabled)
          .reduce(
            (previous, current) =>
              `${previous} ${current.keep ? "-" : ""}${current.filter}`,
            ""
          )
      )
      .filter((string) => string.length > 0)
      .join(" ");

  const wishlistString =
    "/* Wishlist | D2 Buddy */" +
    toggles
      .map((category) =>
        category.options
          .filter(isEnabled)
          .reduce(
            (previous, current) =>
              `${previous} ${previous.length > 0 ? "or" : ""} ${
                current.keep ? "" : "-"
              }${current.filter}`,
            ""
          )
      )
      .filter((string) => string.length > 0)
      .join(" or ");

  return (
    <section>
      <h2>Results</h2>
      <Masonry>
        <DimCard title="Trash">{trashString}</DimCard>
        <DimCard title="Wishlist">{wishlistString}</DimCard>
      </Masonry>
    </section>
  );
};
