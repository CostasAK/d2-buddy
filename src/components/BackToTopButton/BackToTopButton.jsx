import { Fab, Fade, useScrollTrigger } from "@mui/material";

import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

export const BackToTopButton = ({ sx = [] }) => {
  const scrollTrigger = useScrollTrigger({ disableHysteresis: true });

  return (
    <Fade in={scrollTrigger}>
      <Fab
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }}
        size="small"
        aria-label="scroll back to top"
        sx={[
          {
            position: "sticky",
            bottom: "1rem",
            float: "right",
            marginInline: "1rem",
          },
          ...(Array.isArray(sx) ? sx : [sx]),
        ]}
      >
        <KeyboardArrowUpIcon />
      </Fab>
    </Fade>
  );
};
