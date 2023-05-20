import { Button, Typography, useTheme } from "@mui/material";

import Img from "components/Img";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { cssRgb } from "functions/cssRgb";
import { forwardRef } from "react";

export const TriumphButton = forwardRef(
  ({ title, children, link, to, icon, highlight, ...props }, ref) => {
    const theme = useTheme();

    const highlightBackgroundColor =
      theme?.palette?.[highlight]?.dark ||
      theme?.palette?.[highlight]?.main ||
      theme?.palette?.[highlight] ||
      theme?.palette?.secondary?.dark;

    const highlightBorderColor =
      theme?.palette?.[highlight]?.light ||
      theme?.palette?.[highlight]?.main ||
      theme?.palette?.[highlight]?.dark ||
      theme?.palette?.[highlight] ||
      theme?.palette?.secondary?.light;

    const sxButton = Object.assign(
      {
        display: "grid",
        padding: 2,
        gridTemplateColumns: icon ? "4.5rem 1fr" : "1fr",
        columnGap: 2,
        color: theme?.palette?.[highlight]?.constrastText || "#fff",
        "&:hover": {
          background: "none",
        },
        "& > img:first-child, &:hover > svg:first-child": {
          transitionDuration: theme.transitions.duration.standard,
          transitionProperty: "opacity, transform",
        },
        "&:hover > img:first-child, &:hover > svg:first-child": {
          transform: "scale(1.1)",
        },
      },
      highlight
        ? {
            borderColor: cssRgb(highlightBorderColor, 0.9),
            backgroundColor: cssRgb(highlightBackgroundColor, 0.5),
            background: `linear-gradient(30deg, ${cssRgb(
              highlightBackgroundColor,
              0.1
            )} 0%, ${highlightBackgroundColor} 100%)`,
            "&:hover": {
              backgroundColor: cssRgb(highlightBackgroundColor, 0.5),
              background: `linear-gradient(30deg, ${cssRgb(
                highlightBackgroundColor,
                0.1
              )} 0%, ${highlightBackgroundColor} 100%)`,
            },
          }
        : {}
    );

    const sxIcon = Object.assign(
      {
        color: theme.palette.text.primary,
        width: "100%",
        objectFit: "scale-down",
      },
      {
        gridRow: "1/3",
        gridColumnStart: 1,
        alignSelf: "center",
        maxWidth: "4.5rem",
        maxHeight: "4.5rem",
        opacity: "var(--card-content-opacity)",
      }
    );

    const sxTitle = {
      gridColumnStart: icon && 2,
      "&::after": {
        content: "''",
        display: "block",
        marginBlock: "calc(0.95rem - 1px) 0.55rem",
        borderBottom: "1px solid " + theme.palette.text.primary,
      },
    };

    const linkProps =
      link || props.disabled
        ? { href: link, target: "_blank", rel: "noreferrer" }
        : to
        ? { component: Link, to }
        : {};

    return (
      <Button variant="destinyOutlined" {...linkProps} sx={sxButton} {...props}>
        <Img src={icon} sx={sxIcon} />
        <Typography variant="h4" sx={sxTitle}>
          {title}
        </Typography>
        <Typography variant="body1" sx={{ gridColumnStart: icon && 2 }}>
          {children}
        </Typography>
      </Button>
    );
  }
);

TriumphButton.propTypes = {
  title: PropTypes.string,
  link: PropTypes.string,
  icon: PropTypes.string,
  highlight: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
};

TriumphButton.defaultProps = {
  highlight: false,
};
