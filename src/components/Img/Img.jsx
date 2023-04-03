import { Box, Icon } from "@mui/material";
import { Else, If, Then } from "react-if";

import PropTypes from "prop-types";
import SVG from "react-inlinesvg";
import { Tooltip } from "@mui/material";
import { forwardRef } from "react";

const bungie_root_path = "https://bungie.net";

const ImgBox = forwardRef(({ ...props }, ref) => (
  <Box component="img" ref={ref} loading="lazy" decoding="async" {...props} />
));

export const Img = forwardRef(({ src, alt, title, sx = [], ...props }, ref) => {
  if (!src) return null;

  src = /^\/(?!static\/)[\w\d]/.test(src) ? `${bungie_root_path}${src}` : src;

  return (
    <If condition={/\.svg$/i.test(src)}>
      <Then>
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
          sx={[
            {
              width: "auto",
              height: "auto",
              objectFit: "scale-down",
            },
            ...(Array.isArray(sx) ? sx : [sx]),
          ]}
          {...props}
        />
      </Then>
      <Else>
        <If condition={title}>
          <Then>
            <Tooltip title={title}>
              <ImgBox
                ref={ref}
                src={src}
                alt={alt}
                sx={[
                  {
                    maxWidth: "100%",
                    maxHeight: "100%",
                    objectFit: "scale-down",
                  },
                  ...(Array.isArray(sx) ? sx : [sx]),
                ]}
                {...props}
              />
            </Tooltip>
          </Then>
          <Else>
            <ImgBox
              ref={ref}
              src={src}
              alt={alt}
              sx={[
                {
                  maxWidth: "100%",
                  maxHeight: "100%",
                  objectFit: "scale-down",
                },
                ...(Array.isArray(sx) ? sx : [sx]),
              ]}
              {...props}
            />
          </Else>
        </If>
      </Else>
    </If>
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
