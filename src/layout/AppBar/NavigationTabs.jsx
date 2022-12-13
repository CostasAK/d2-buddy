import { Tab, Tabs } from "@mui/material";

import { Link } from "react-router-dom";

const NavigationTab = ({ name, path, ...props }) => {
  const wrapped = name.length > 1;

  return (
    <Tab
      label={<span>{name}</span>}
      value={path}
      to={path}
      component={Link}
      wrapped={wrapped}
      sx={{ height: "100%" }}
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
        <NavigationTab key={route.path} path={route.path} name={route.name} />
      ))}
    </Tabs>
  );
};
