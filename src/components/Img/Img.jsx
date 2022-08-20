import { Box, Icon } from "@mui/material";

import PropTypes from "prop-types";
import SVG from "react-inlinesvg";
import Tooltip from "../Tooltip";
import { forwardRef } from "react";

const bungie_root_path = "https://bungie.net";

const ImgBox = forwardRef(({ ...props }, ref) => (
  <Box component="img" ref={ref} loading="lazy" decoding="async" {...props} />
));

export const Img = forwardRef(({ src, alt, title, ...props }, ref) => {
  if (!src) return null;

  src = /^\/(?!static\/)[\w\d]/.test(src) ? `${bungie_root_path}${src}` : src;

  return /\.svg$/i.test(src) ? (
    <Icon
      component={SVG}
      innerRef={ref}
      src={src}
      loader={<Box ref={ref} {...props} />}
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
      <ImgBox ref={ref} src={src} alt={alt} {...props} />
    </Tooltip>
  ) : (
    <ImgBox ref={ref} src={src} alt={alt} {...props} />
  );
});

Img.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  title: PropTypes.string,
};

Img.defaultProps = {
  alt: "",
};
