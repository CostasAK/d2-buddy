import {
  Box,
  AppBar as MuiAppBar,
  SvgIcon,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { matchPath, useLocation } from "react-router-dom";

import { NavigationDrawer } from "layout/AppBar/NavigationDrawer";
import { NavigationTabs } from "layout/AppBar/NavigationTabs";
import { RefreshButton } from "layout/AppBar/RefreshButton";
import { ReactComponent as clovisCk } from "assets/clovis_ck.svg";

const useRouteMatch = (routes) => {
  const { pathname } = useLocation();

  for (const route of routes) {
    const possibleMatch = matchPath(route.path, pathname);

    if (possibleMatch)
      return routes.findIndex((p) => p.path === possibleMatch?.pattern?.path);
  }

  return null;
};

const Padding = () => (
  <MuiAppBar position="static" sx={{ visibility: "hidden" }}>
    <Toolbar />
  </MuiAppBar>
);

export const AppBar = ({ routes }) => {
  const currentTab = useRouteMatch(routes);

  const theme = useTheme();
  const viewportIsBig = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <>
      <Padding />
      <MuiAppBar
        color="appBar"
        enableColorOnDark
        sx={{
          backgroundImage: "none",
          boxShadow: "0 0 10px rgb(0 0 0 / 50%)",
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
          {!viewportIsBig && (
            <NavigationDrawer routes={routes} currentTab={currentTab} />
          )}

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
          {viewportIsBig && (
            <NavigationTabs routes={routes} currentTab={currentTab} />
          )}

          {/* Right-hand side buttons */}
          <Box sx={{ flexGrow: 0 }}>
            <RefreshButton />
          </Box>
        </Toolbar>
      </MuiAppBar>
    </>
  );
};
