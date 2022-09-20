import useDimensions from "react-cool-dimensions";
import { useState } from "react";

function MasonryItem({ children, rowGap }) {
  const [heightState, setHeight] = useState(0);

  const { observe } = useDimensions({
    onResize: ({ height }) => setHeight(Math.ceil(height)),
    useBorderBoxSize: true,
  });

  console.log(heightState);

  return (
    <div
      ref={observe}
      className="masonry-item"
      style={{
        gridRowEnd: "span " + (heightState + rowGap),
        display: "inline-block",
        height: "max-content",
        alignItems: "start",
      }}
    >
      {children}
    </div>
  );
}

export default function Masonry({ rowGap = 7, className, children }) {
  children = children.length ? children : [children];

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
        <MasonryItem key={index} rowGap={rowGap}>
          {child}
        </MasonryItem>
      ))}
    </div>
  );
}
