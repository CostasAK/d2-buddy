import {
  Box,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  SvgIcon,
  SwipeableDrawer,
  Typography,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { ReactComponent as clovisCk } from "assets/clovis_ck.svg";
import { useState } from "react";

export const NavigationDrawer = ({ routes, currentTab, ...props }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDrawerClose = () => setIsOpen(false);
  const handleDrawerOpen = () => setIsOpen(true);

  return (
    <>
      <Box flexGrow="1">
        <IconButton
          size="large"
          aria-label="navigation menu"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleDrawerOpen}
        >
          <MenuIcon />
        </IconButton>
      </Box>
      <SwipeableDrawer
        anchor="left"
        open={isOpen}
        onClose={handleDrawerClose}
        onOpen={handleDrawerOpen}
      >
        {/* Logo, Title and Close Button */}
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          p={1}
          backgroundColor="appBar.main"
          boxShadow="0 0 10px rgb(0 0 0 / 50%)"
        >
          <SvgIcon
            component={clovisCk}
            inheritViewBox
            sx={{ mx: 1, fontSize: "2rem" }}
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
          <IconButton
            size="large"
            onClick={handleDrawerClose}
            sx={{ ml: 1, flexGrow: 1 }}
          >
            <CloseIcon />
          </IconButton>
        </Box>
        <List>
          {routes.map((route, index) => (
            <ListItemButton
              key={index}
              component={Link}
              to={route.path.replace(/\/\*$/, "")}
              selected={currentTab === index}
              onClick={handleDrawerClose}
              sx={{
                "&&.Mui-selected::after": {
                  content: "''",
                  width: "100%",
                  height: "3px",
                  bgcolor: "primary.main",
                  position: "absolute",
                  bottom: "0",
                  left: "0",
                },
              }}
            >
              <ListItemText
                primary={route.name}
                sx={{ textTransform: "uppercase" }}
              />
            </ListItemButton>
          ))}
        </List>
      </SwipeableDrawer>
    </>
  );
};
