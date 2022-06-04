import { PropTypes } from "prop-types";
import { StyledA } from "./AStyle";
import { forwardRef } from "react";

export const A = forwardRef(
  ({ className, href, children, defaultStyle, ...props }, ref) => {
    return href.startsWith("steam://") ? (
      <StyledA
        ref={ref}
        className={className}
        href={href}
        defaultStyle={defaultStyle}
      >
        {children}
      </StyledA>
    ) : (
      <StyledA
        ref={ref}
        className={className}
        href={href}
        target="_blank"
        rel="noreferrer"
        defaultStyle={defaultStyle}
      >
        {children}
      </StyledA>
    );
  }
);

A.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string,
  defaultStyle: PropTypes.bool,
};

A.defaultProps = {
  defaultStyle: true,
};
