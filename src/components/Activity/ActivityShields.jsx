import { Box, Tooltip, Typography, useTheme } from "@mui/material";

import DestinyIcon from "../DestinyIcon";
import PropTypes from "prop-types";
import { forwardRef } from "react";

const known_elements = [
  { name: "Arc", pattern: /arc/i },
  { name: "Solar", pattern: /solar/i },
  { name: "Void", pattern: /void/i },
  { name: "Stasis", pattern: /stasis/i },
];

export const ActivityShields = forwardRef(({ shields, known_shields }, ref) => {
  const theme = useTheme();

  if (!shields || shields.length < 1) {
    return null;
  }

  const parsed_shields = new Set();

  shields.map((modifier) =>
    known_elements.map(
      (element) =>
        element.pattern.test(modifier?.displayProperties?.description) &&
        parsed_shields.add(element.name)
    )
  );

  return (
    <Box ref={ref}>
      <Typography
        variant="h5"
        sx={{
          textAlign: "left",
          justifyContent: "flex-start",
          borderBottom: "1pt solid rgb(255 255 255 / 50%)",
        }}
      >
        Shields
      </Typography>
      <Typography
        variant="bigNumber"
        sx={{ display: "flex", flexFlow: "row wrap", gap: 2 }}
      >
        {[...parsed_shields].map((shield, index) => (
          <Tooltip title={`${shield} Shields`} key={index}>
            <Box
              key={index}
              sx={{
                display: "grid",
                justifyItems: "flex-end",
                alignItems: "flex-end",
                "> *": {
                  gridColumnStart: 1,
                  gridRowStart: 1,
                  lineHeight: 1.3,
                },
              }}
            >
              <DestinyIcon
                icon={["elements", shield]}
                color={shield}
                sx={{
                  zIndex: 0,
                  fontSize: "1.5em",
                }}
              />
              {known_shields[shield] > 0 && (
                <Typography
                  variant="bigNumber"
                  sx={{
                    zIndex: 1,
                    textShadow: `1px 1px 0.25em ${theme.palette.background.default}, 1px -1px 0.25em ${theme.palette.background.default}, -1px 1px 0.25em ${theme.palette.background.default}, -1px -1px 0.25em ${theme.palette.background.default}`,
                  }}
                >
                  {known_shields[shield]}
                </Typography>
              )}
            </Box>
          </Tooltip>
        ))}
      </Typography>
    </Box>
  );
});

ActivityShields.propTypes = {
  shields: PropTypes.array,
  known_shields: PropTypes.object,
};

ActivityShields.defaultProps = {
  shields: [],
  known_shields: {},
};
