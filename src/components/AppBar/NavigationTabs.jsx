import { Tab, Tabs } from "@mui/material";
import { useCallback, useState } from "react";

import { Link } from "react-router-dom";
import useDimensions from "react-cool-dimensions";

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

export const NavigationTabs = ({ routes, currentTab }) => {
  return (
    <Tabs
      value={currentTab}
      sx={{
        flexGrow: 1,
        alignSelf: "stretch",
      }}
    >
      {routes.map((route) => (
        <NavigationTab path={route.path} name={route.name} />
      ))}
    </Tabs>
  );
};
