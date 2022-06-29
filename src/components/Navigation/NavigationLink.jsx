import { useRef, useState } from "react";

import Measure from "react-measure";
import { NavLink } from "react-router-dom";

export const NavigationLink = ({ path, children }) => {
  const ref = useRef(null);
  const [width, setWidth] = useState(1);

  const handleResize = (contentRect) => {
    const currentComputedStyle = window.getComputedStyle(ref.current);
    const textHeight = ref.current.children[0].clientHeight;

    const paddingInline =
      parseFloat(currentComputedStyle.paddingInlineStart) +
      parseFloat(currentComputedStyle.paddingInlineEnd);

    setWidth(
      contentRect.scroll.width > width + paddingInline
        ? contentRect.scroll.width + paddingInline
        : textHeight > contentRect.client.height
        ? width + 1
        : width
    );
  };

  return (
    <Measure
      innerRef={ref}
      scroll
      client
      onResize={(contentRect) => handleResize(contentRect)}
    >
      {({ measureRef }) => (
        <NavLink
          ref={measureRef}
          to={path}
          className={({ isActive }) =>
            "navigation-link" + (isActive ? " active" : "")
          }
          style={{ width: width }}
        >
          <span>{children}</span>
        </NavLink>
      )}
    </Measure>
  );
};
