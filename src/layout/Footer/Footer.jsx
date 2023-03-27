import { Box, Button, SvgIcon } from "@mui/material";

import { ReactComponent as Avatar } from "assets/initialen.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import GitHubIcon from "@mui/icons-material/GitHub";
import { KofiButton } from "react-kofi-button";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
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
      columnGap={4}
      zIndex={1}
    >
      <Box
        width="max-content"
        sx={{
          display: "flex",
          flexFlow: "row",
          alignItems: "safe center",
        }}
      >
        <Box minWidth="max-content">Made by</Box>
        <Button
          variant="footer"
          href="https://costas.kokke.eu"
          target="_blank"
          rel="noreferrer"
          startIcon={
            <SvgIcon
              component={Avatar}
              inheritViewBox
              fontSize="small"
              sx={{ borderRadius: "50%" }}
            />
          }
        >
          CostasAK
        </Button>
      </Box>
      <KofiButton
        username="costasak"
        label="Support me"
        preset="thin"
        backgroundColor="kofiGrey"
      />
      <Button
        variant="footer"
        href="https://discord.gg/Rs5hdN86wJ"
        target="_blank"
        rel="noreferrer"
        startIcon={<FontAwesomeIcon icon={faDiscord} />}
      >
        Discord
      </Button>
      <Button
        variant="footer"
        href="https://github.com/CostasAK/d2-buddy"
        target="_blank"
        rel="noreferrer"
        startIcon={<GitHubIcon />}
      >
        Source
      </Button>
    </Box>
  );
}
