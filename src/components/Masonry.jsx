import useDimensions from "react-cool-dimensions";

function MasonryItem({ children, rowGap }) {
  const { observe, height } = useDimensions();

  return (
    <div
      ref={observe}
      className="masonry-item"
      style={{
        gridRowEnd: "span " + (Math.ceil(height) + rowGap),
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
