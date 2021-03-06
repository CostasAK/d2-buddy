import PropTypes from "prop-types";
import SVG from "react-inlinesvg";
import Tooltip from "../Tooltip";
import { forwardRef } from "react";

const bungie_root_path = "https://bungie.net";

export const Img = forwardRef(
  ({ className, src, alt, title, ...props }, ref) => {
    if (!src) return null;

    src = /^\/(?!static\/)[\w\d]/.test(src) ? `${bungie_root_path}${src}` : src;

    return /\.svg$/i.test(src) ? (
      <SVG
        innerRef={ref}
        className={className}
        src={src}
        loader={<div ref={ref} className={className} />}
        preProcessor={(svg) =>
          svg
            .replace(/fill=".*?"/g, 'fill="currentColor"')
            .replace(/stroke=".*?"/g, 'stroke="currentColor"')
            .replace(/<path(?:(?!fill|stroke).)*(?:<\/\s?path>|\/>)/g, "")
        }
        {...props}
      />
    ) : title ? (
      <Tooltip contents={title}>
        <img ref={ref} className={className} src={src} alt={alt} {...props} />
      </Tooltip>
    ) : (
      <img ref={ref} className={className} src={src} alt={alt} {...props} />
    );
  }
);

Img.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
  title: PropTypes.string,
};

Img.defaultProps = {
  alt: "",
};
