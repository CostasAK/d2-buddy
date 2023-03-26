import { Typography, useTheme } from "@mui/material";

import { cssRgb } from "functions/cssRgb";
import PropTypes from "prop-types";
import { forwardRef } from "react";

export const ActivityDifficulty = forwardRef(
  ({ data, sx = [], ...props }, ref) => {
    const theme = useTheme();
    const difficulty = data?.selectionScreenDisplayProperties?.name;

    const difficultyColors = {
      Hero: theme.palette.rare.main,
      Legend: theme.palette.legendary.main,
      Master: theme.palette.exotic.dark,
      Grandmaster: theme.palette.grandmaster,
    };

    return (
      <Typography
        variant="h2"
        ref={ref}
        sx={[
          {
            marginBottom: 1,
            paddingBlock: `calc(0.2em + 0.5rem)`,
            justifyContent: "flex-start",
            width: "100%",
            textAlign: "center",
            position: "relative",
            "&:before": {
              content: "''",
              position: "absolute",
              zIndex: -1,
              maxWidth: "none",
              top: 0,
              right: "-1.5rem",
              bottom: 0,
              left: "-1.5rem",
              backgroundColor:
                difficultyColors?.[difficulty] || theme.palette.common.main,
              borderBottom: `1pt solid ${cssRgb(
                theme.palette.text.primary,
                0.9
              )}`,
            },
          },
          ...(Array.isArray(sx) ? sx : [sx]),
        ]}
        {...props}
      >
        {difficulty}
      </Typography>
    );
  }
);

ActivityDifficulty.propTypes = {
  data: PropTypes.object.isRequired,
};

ActivityDifficulty.defaultProps = {};
