import { Box, SvgIcon, Typography } from "@mui/material";

import A from "components/A";
import { ReactComponent as Avatar } from "assets/initialen.svg";
import GitHubIcon from "@mui/icons-material/GitHub";
import { KofiButton } from "react-kofi-button";
import { fontFamily2 } from "theme/typography";

export default function Footer() {
  return (
    <Box
      component="footer"
      bgcolor="#141a1f"
      minHeight="4em"
      p="0.67em"
      fontSize="0.875rem"
      fontFamily={fontFamily2}
      letterSpacing="normal"
      display="flex"
      justifyContent="safe center"
      alignItems="safe center"
      flexDirection="row"
      flexWrap="wrap"
      rowGap="0.5em"
      columnGap="3em"
    >
      <Box
        width="max-content"
        sx={{
          display: "flex",
          flexFlow: "row",
          alignItems: "safe center",
        }}
      >
        <Typography minWidth="max-content">Made by</Typography>  
        <A
          href="https://costas.kokke.eu"
          sx={{
            display: "flex",
            flexFlow: "row nowrap",
            alignItems: "safe center",
          }}
        >
          <SvgIcon
            component={Avatar}
            inheritViewBox
            fontSize="small"
            sx={{ borderRadius: "50%" }}
          />
           <span>CostasAK</span>
        </A>
      </Box>
      <KofiButton
        username="costasak"
        label="Support me"
        preset="thin"
        backgroundColor="kofiGrey"
      />
      <A
        href="https://github.com/CostasAK/d2-buddy"
        sx={{
          display: "flex",
          flexFlow: "row nowrap",
          alignItems: "safe center",
        }}
      >
        <GitHubIcon fontSize="small" /> <span>Source</span>
      </A>
    </Box>
  );
}
