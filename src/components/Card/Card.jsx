import { Button, Typography, useTheme } from "@mui/material";

import Img from "components/Img";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { forwardRef } from "react";

export const Card = forwardRef(
  ({ title, children, link, to, icon, ...props }, ref) => {
    const theme = useTheme();

    const sxButton = {
      display: "block",
      padding: 2,
      columnGap: 2,
      color: "#fff",
      "&:hover": {
        background: "none",
      },
    };

    const sxIcon = {
      color: theme.palette.text.primary,
      width: "100%",
      objectFit: "scale-down",
      float: "left",
      margin: "0 0.5rem -1px 0",
      maxWidth: "3rem",
      maxHeight: "3rem",
      opacity: 1,
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
        <Typography variant="h4">{title}</Typography>
        <Typography variant="body1">{children}</Typography>
      </Button>
    );
  }
);

Card.propTypes = {
  title: PropTypes.string,
  link: PropTypes.string,
  icon: PropTypes.string,
  className: PropTypes.string,
};
