import "./style.scss";

import Card from "../Card";
import Masonry from "react-masonry-css";

export function ItemizedPage(props) {
  let columnBreakpoints = { default: props.maxColumns };
  for (let i = props.maxColumns; i > 1; i--) {
    let minWidth = i * props.columnWidth + i * props.gap;
    columnBreakpoints[minWidth] = i - 1;
  }

  return (
    <div className={"itemized-page " + (props.className || "")}>
      <Masonry
        className="masonry"
        columnClassName="masonry-column"
        breakpointCols={columnBreakpoints}
      >
        {props.items.map((item) => (
          <Card
            key={item.title}
            className={item.title.replace(/ /g, "")}
            link={item.link}
            title={item.title}
            shortDescription={item.description}
            logo={item.logo}
          />
        ))}
      </Masonry>
    </div>
  );
}

ItemizedPage.defaultProps = {
  className: "",
  columnWidth: 360,
  maxColumns: 3,
  gap: 36,
};
