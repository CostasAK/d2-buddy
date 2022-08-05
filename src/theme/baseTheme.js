import { createTheme } from "@mui/material";
import { palette } from "theme/palette";
import { shape } from "theme/shape";
import { transitions } from "theme/transitions";
import { typography } from "theme/typography";

export const baseTheme = createTheme({
  palette,
  shape,
  typography,
  transitions,
});
