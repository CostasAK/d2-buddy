import {
  Box,
  AppBar as MuiAppBar,
  Slide,
  SvgIcon,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useScrollTrigger,
  useTheme,
} from "@mui/material";
import { Unless, When } from "react-if";
import { matchRoutes, useLocation } from "react-router-dom";

import { Link } from "react-router-dom";
import { NavigationDrawer } from "layout/AppBar/NavigationDrawer";
import RefreshButton from "components/RefreshButton";
import { ReactComponent as clovisCk } from "assets/clovis_ck.svg";
import { routes } from "Router";
import useDimensions from "react-cool-dimensions";

const useRouteMatch = (routes) => {
  const { pathname } = useLocation();

  return matchRoutes(routes, pathname)?.[0]?.pathnameBase.slice(1);
};

export const AppBar = () => {
  const rootRoutes = routes
    .filter((route) => route.path === "/")[0]
    .children[0].children.filter((child) => !child.index && !!child.title);

  const currentTab = useRouteMatch(rootRoutes);

  const theme = useTheme();
  const viewportIsBig = useMediaQuery(theme.breakpoints.up("md"));

  const { observe, height } = useDimensions({
    shouldUpdate: ({ currentBreakpoint, width, height, entry }) => {
      return !viewportIsBig && height > 64;
    },
  });

  const scrollTrigger = useScrollTrigger({ threshold: height || 64 });

  return (
    <>
      <Toolbar ref={observe} sx={{ visibility: "hidden" }} />
      <Slide appear={false} direction="down" in={!scrollTrigger}>
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
            <Unless condition={viewportIsBig}>
              <NavigationDrawer routes={rootRoutes} currentTab={currentTab} />
            </Unless>

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
            <When condition={viewportIsBig}>
              <Tabs
                value={currentTab}
                sx={{
                  flexGrow: 1,
                  alignSelf: "stretch",
                }}
              >
                {rootRoutes.map((route) => (
                  <Tab
                    key={route.path}
                    label={route.title}
                    value={route.path}
                    to={route.path}
                    component={Link}
                    wrapped={route.title.length > 1}
                    sx={{ height: "100%", textTransform: "uppercase" }}
                  />
                ))}
              </Tabs>
            </When>

            {/* Right-hand side buttons */}
            <Box sx={{ flexGrow: 0 }}>
              <RefreshButton />
            </Box>
          </Toolbar>
        </MuiAppBar>
      </Slide>
    </>
  );
};
