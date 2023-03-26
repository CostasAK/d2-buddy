import { Box, Tooltip, Typography, useTheme } from "@mui/material";

import PropTypes from "prop-types";
import { forwardRef } from "react";
import DestinyIcon from "../DestinyIcon";

const known_types = [
  { class: "Overload", pattern: /Disruption|Overload/i },
  { class: "Unstoppable", pattern: /Stagger|Unstoppable/i },
  { class: "Barrier", pattern: /Shield-Piercing|Barrier/i },
];

export const ActivityChampions = forwardRef(
  ({ champions, known_champions }, ref) => {
    const theme = useTheme();

    if (!champions || champions.length < 1) {
      return null;
    }

    const parsed_champions = new Set();

    champions.map((modifier) =>
      known_types.map(
        (champion) =>
          champion.pattern.test(modifier?.displayProperties?.description) &&
          parsed_champions.add(champion.class)
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
          Champions
        </Typography>
        <Typography
          variant="bigNumber"
          sx={{ display: "flex", flexFlow: "row wrap", gap: 2 }}
        >
          {[...parsed_champions].map((champion, index) => (
            <Tooltip key={index} title={`${champion} Champions`}>
              <Box
                key={index}
                sx={{
                  display: "grid",
                  justifyItems: "flex-end",
                  alignItems: "flex-end",
                  "> *": { gridColumnStart: 1, gridRowStart: 1 },
                }}
              >
                <DestinyIcon
                  icon={["champions", "modifiers", champion]}
                  sx={{
                    zIndex: 0,
                    fontSize: "1.5em",
                    height: "1.5em",
                    display: "flex",
                    justifyContent: "safe center",
                    alignItems: "safe center",
                    "> img": { margin: "0.01em" },
                  }}
                  style={{
                    filter: `brightness(${known_champions[champion] && "75%"})`,
                  }}
                />
                {known_champions[champion] > 0 && (
                  <Typography
                    variant="bigNumber"
                    sx={{
                      zIndex: 1,
                      textShadow: `1px 1px 0.25em ${theme.palette.background.default}, 1px -1px 0.25em ${theme.palette.background.default}, -1px 1px 0.25em ${theme.palette.background.default}, -1px -1px 0.25em ${theme.palette.background.default}`,
                    }}
                  >
                    {known_champions[champion]}
                  </Typography>
                )}
              </Box>
            </Tooltip>
          ))}
        </Typography>
      </Box>
    );
  }
);

ActivityChampions.propTypes = {
  champions: PropTypes.array,
  known_champions: PropTypes.object,
};

ActivityChampions.defaultProps = {
  champions: [],
  known_champions: {},
};
