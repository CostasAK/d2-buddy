import { Link, matchPath, useLocation } from "react-router-dom";
import { Tab, Tabs } from "@mui/material";
import { useCallback, useState } from "react";

import useDimensions from "react-cool-dimensions";

const useRouteMatch = (routes) => {
  const { pathname } = useLocation();

  for (const route of routes) {
    const possibleMatch = matchPath(route.path, pathname);

    if (possibleMatch) return possibleMatch;
  }

  return null;
};

const NavigationTab = ({ name, path, ...props }) => {
  const [width, setWidth] = useState(1);

  const handleResize = useCallback(
    ({ width, height, entry }) => {
      const currentComputedStyle = window.getComputedStyle(entry.target);

      const paddingInline =
        parseFloat(currentComputedStyle.paddingInlineStart) +
        parseFloat(currentComputedStyle.paddingInlineEnd);

      const textHeight = entry.target.children[0].clientHeight;

      setWidth(
        width > width + paddingInline
          ? width + paddingInline
          : textHeight > height / 2
          ? width + 1
          : width
      );
    },
    [setWidth]
  );

  const { observe } = useDimensions({
    onResize: handleResize,
    useBorderBoxSize: true,
  });

  const wrapped = name.includes(" ");

  return (
    <Tab
      ref={wrapped ? observe : null}
      key={path}
      label={<span>{name}</span>}
      value={path}
      to={path}
      component={Link}
      wrapped={wrapped}
      sx={{ height: "100%" }}
      style={{ width: width }}
      {...props}
    />
  );
};

export const NavigationTabs = ({ routes }) => {
  const currentTab = useRouteMatch(routes)?.pattern?.path;

  return (
    <Tabs
      value={routes.findIndex((p) => p.path === currentTab)}
      sx={{
        flexGrow: 1,
        display: { xs: "none", md: "flex" },
        alignSelf: "stretch",
      }}
    >
      {routes.map((route) => (
        <NavigationTab path={route.path} name={route.name} />
      ))}
    </Tabs>
  );
};
