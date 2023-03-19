import { Button, Typography, useTheme } from "@mui/material";

import Img from "components/Img";
import PropTypes from "prop-types";
import { forwardRef } from "react";
import { CardInner } from "./CardInner";
import { CardModal } from "./CardModal";
import { CardOuter } from "./CardOuter";

export const Card = forwardRef(
  (
    {
      title,
      titleRule,
      children,
      modalContent,
      customModal,
      link,
      icon,
      className,
      floatIcon,
      highlight,
      ...props
    },
    ref
  ) => {
    const theme = useTheme();

    return (
      <>
        <CardModal
          className={className}
          modalContent={modalContent}
          title={title}
          icon={icon}
          customModal={customModal}
        >
          <CardOuter
            ref={ref}
            hasModal={!!modalContent}
            href={link}
            icon={icon}
            floatIcon={floatIcon}
            highlight={highlight}
            {...props}
          >
            <CardInner
              icon={icon}
              floatIcon={floatIcon}
              title={title}
              titleRule={titleRule === undefined ? !floatIcon : titleRule}
            >
              {children}
            </CardInner>
          </CardOuter>
        </CardModal>
        {/* <MuiCard
          sx={{
            "--card-content-opacity": 0.9,
            position: "relative",
            border:
              "1px solid " +
              cssRgb(theme.palette.text.primary, "var(--card-content-opacity)"),
            color: theme.palette.text.primary,
            transitionDuration: theme.transitions.duration.shortest,
            transitionProperty: "border-color, transform",
            background: "none",
            "&::before": {
              content: "''",
              zIndex: -1,
              position: "absolute",
              inset: 0,
              backgroundImage: "none",
              backgroundColor: "rgba(4, 4, 15, 0.5)",
              "@supports (backdrop-filter: blur(16px))": {
                backdropFilter: "blur(16px) saturate(180%)",
                WebkitBackdropFilter: "blur(16px) saturate(180%)",
                backgroundColor: "rgba(4, 4, 15, 0.25)",
              },
              transition:
                "background-color " + theme.transitions.duration.standard,
            },
          }}
        >
          <CardActionArea
            sx={{
              display: !floatIcon ? "grid" : "block",
              padding: 2,
              gridTemplateColumns: !floatIcon && "4.5rem 1fr",
              columnGap: 2,
            }}
          >
            <Img src={icon} />
            <CardContent sx={{ padding: 0 }}>
              <Typography variant="h4">{title}</Typography>
              <Typography>{children}</Typography>
            </CardContent>
          </CardActionArea>
        </MuiCard> */}
        <Button
          variant="triumph"
          sx={{
            display: !floatIcon ? "grid" : "block",
            padding: 2,
            gridTemplateColumns: !floatIcon && "4.5rem 1fr",
            columnGap: 2,
            textAlign: "left",
          }}
        >
          <Img src={icon} sx={{ gridRow: "1/3", gridColumnStart: 1 }} />
          <Typography variant="h4">{title}</Typography>
          <Typography variant="body1">{children}</Typography>
        </Button>
      </>
    );
  }
);

Card.propTypes = {
  title: PropTypes.string,
  titleRule: PropTypes.bool,
  modalContent: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    ),
  ]),
  link: PropTypes.string,
  icon: PropTypes.string,
  className: PropTypes.string,
  floatIcon: PropTypes.bool,
  highlight: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  customModal: PropTypes.bool,
};

Card.defaultProps = {
  floatIcon: false,
  highlight: false,
  customModal: false,
};
