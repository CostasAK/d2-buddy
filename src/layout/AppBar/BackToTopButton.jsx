import { Fab, Fade, useScrollTrigger } from "@mui/material";

import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

export const BackToTopButton = () => {
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
        sx={{ position: "fixed", bottom: 16, right: 16 }}
      >
        <KeyboardArrowUpIcon />
      </Fab>
    </Fade>
  );
};
