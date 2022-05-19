import PropTypes from "prop-types";
import classNames from "classnames";
import { forwardRef } from "react";

const bungie_root_path = "https://bungie.net";

export const Img = forwardRef(({ className, src, alt, ...props }, ref) => {
  return (
    <img
      ref={ref}
      className={classNames(className)}
      src={/^\/[\w\d]/.test(src) ? `${bungie_root_path}${src}` : src}
      alt={alt || ""}
      {...props}
    />
  );
});

Img.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

Img.defaultProps = {};
