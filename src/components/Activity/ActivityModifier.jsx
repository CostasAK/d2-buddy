import { Box, Typography } from "@mui/material";

import Description from "components/Description";
import Img from "../Img";
import { PropTypes } from "prop-types";
import { forwardRef } from "react";
import { maxDimensions } from "functions/maxDimensions";

export const ActivityModifier = forwardRef(({ data }, ref) => {
  const name = data?.displayProperties?.name;
  const icon = data?.displayProperties?.icon;

  const description = data?.displayProperties?.description ? (
    <Description>
      {data?.displayProperties?.description
        .replace(/(?:[\s.,]*\n+[\s.,]*)+/g, "; ")
        .replace(/(\[Disruption|Stagger\])/g, "|$1|")
        .split("|")}
    </Description>
  ) : null;

  if (!(icon && name)) {
    return null;
  }

  const known_elements = [
    { class: "arc", pattern: /arc/i },
    { class: "solar", pattern: /solar/i },
    { class: "void", pattern: /void/i },
    { class: "stasis", pattern: /stasis/i },
    { class: "strand", pattern: /strand/i },
  ];

  return (
    <Box
      ref={ref}
      sx={{
        display: "flex",
        flexFlow: "row",
        textAlign: "left",
        gap: "0.5em",
        width: "fit-content",
      }}
    >
      <Img
        src={icon}
        title={name}
        sx={{
          margin: "0.25em 0",
          height: "2.5em",
          ...maxDimensions(60, 60, true),
        }}
      />
      <Box
        sx={{
          display: "flex",
          flexFlow: "column",
          alignItems: "flexStart",
          height: "max-content",
        }}
      >
        <Typography
          variant="h6"
          color={known_elements
            .filter((element) => element.pattern.test(name))
            .map((element) => element.class)}
        >
          {name}
        </Typography>
        <Typography variant="body1">{description}</Typography>
      </Box>
    </Box>
  );
});

ActivityModifier.propTypes = {
  data: PropTypes.object.isRequired,
};

ActivityModifier.defaultProps = {};
