import {
  Box,
  IconButton,
  AppBar as MuiAppBar,
  SvgIcon,
  Toolbar,
  Typography,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import { NavigationTabs } from "components/AppBar/NavigationTabs";
import { RefreshButton } from "components/AppBar/RefreshButton";
import { ReactComponent as clovisCk } from "assets/clovis_ck.svg";

const Padding = () => (
  <MuiAppBar position="static" sx={{ visibility: "hidden" }}>
    <Toolbar />
  </MuiAppBar>
);

export const AppBar = ({ routes }) => {
  return (
    <>
      <Padding />
      <MuiAppBar
        color="appBar"
        enableColorOnDark
        sx={{
          backgroundImage: "none",
          boxShadow: "0 0 10px rgb(0 0 0 / 50%)",
          width: "calc(100vw - 8px)",
          marginRight: "8px",
        }}
      >
        <Toolbar
          disableGutters
          sx={{
            // height: "4.975rem", // This is Bungie's header height
            px: 2,
            maxWidth: "xl",
            mx: "auto",
            width: "100%",
          }}
        >
          {/* Navigation Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="navigation menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              // onClick={handleOpenNavMenu}
            >
              <MenuIcon />
            </IconButton>
          </Box>

          {/* Logo and Title */}
          <SvgIcon
            component={clovisCk}
            inheritViewBox
            sx={{ mr: 1, fontSize: "2rem" }}
          />
          <Typography
            variant="title"
            sx={{
              mr: 2,
              fontSize: { xs: "1.5rem", md: "1.25rem" },
              flexGrow: { xs: 1, md: 0 },
            }}
          >
            D2 Buddy
          </Typography>

          {/* Navigation Tabs */}
          <NavigationTabs routes={routes} />

          {/* Right-hand side buttons */}
          <Box sx={{ flexGrow: 0 }}>
            <RefreshButton />
          </Box>
        </Toolbar>
      </MuiAppBar>
    </>
  );
};
