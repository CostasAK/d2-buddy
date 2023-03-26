import { baseTheme } from "theme/baseTheme";
import { components } from "theme/components";
import { createTheme } from "@mui/material";
import { deepmerge } from "@mui/utils";

export const theme = createTheme(
  deepmerge(baseTheme, {
    components,
  })
);
