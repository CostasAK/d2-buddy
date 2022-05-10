import Measure from "react-measure";
import { useState } from "react";

function MasonryItem({ element, rowGap }) {
  const [height, setHeight] = useState(0);

  return (
    <Measure
      scroll
      onResize={(contentRect) => {
        setHeight(contentRect.scroll.height);
      }}
    >
      {({ measureRef }) => (
        <div
          ref={measureRef}
          className="masonry-item"
          style={{
            gridRowEnd: "span " + (height + rowGap),
            display: "inline-block",
            height: "max-content",
            alignItems: "start",
          }}
        >
          {element}
        </div>
      )}
    </Measure>
  );
}

export default function Masonry({ rowGap = 7, className, children }) {
  return (
    <div
      className={"masonry " + (className || "")}
      style={{
        display: "grid",
        gridAutoRows: "1px",
        gridAutoFlow: "row dense",
        rowGap: "0",
        marginBottom: `-${rowGap}px`,
      }}
    >
      {children.map((child, index) => (
        <MasonryItem key={index} element={child} rowGap={rowGap} />
      ))}
    </div>
  );
}
