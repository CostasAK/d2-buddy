import { Link, matchPath, useLocation } from "react-router-dom";
import { Tab, Tabs } from "@mui/material";

const useRouteMatch = (routes) => {
  const { pathname } = useLocation();

  for (const route of routes) {
    const possibleMatch = matchPath(route.path, pathname);

    if (possibleMatch) return possibleMatch;
  }

  return null;
};

export const NavigationTabs = ({ routes }) => {
  const currentTab = useRouteMatch(routes)?.pattern?.path;

  return (
    <Tabs
      value={currentTab}
      sx={{
        flexGrow: 1,
        display: { xs: "none", md: "flex" },
        alignSelf: "stretch",
      }}
    >
      {routes.map((route) => (
        <Tab
          key={route.path}
          label={route.name}
          value={route.path}
          to={route.path}
          component={Link}
          wrapped={route.name.includes(" ")}
          sx={{ height: "100%" }}
        />
      ))}
    </Tabs>
  );
};
