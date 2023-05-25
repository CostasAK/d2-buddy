import { Box, Tooltip, useTheme } from "@mui/material";
import { Else, If, Then } from "react-if";
import {
  barrierChampionModifier_60x60,
  heavyAmmo_192x135,
  kinetic_96x96,
  location_96x96,
  overloadChampionModifier_60x60,
  primaryAmmo_192x135,
  specialAmmo_192x135,
  unstoppableChampionModifier_60x60,
} from "assets/bungie";

import Img from "../Img";
import { cloneElement } from "react";

const ImgIcon = ({ src, style = [] }) => (
  <Img
    src={src}
    style={Object.assign(
      {
        aspectRatio: "1 / 1",
        maxWidth: "100%",
        maxHeight: "100%",
        height: "1.5em",
        lineHeight: "1",
        display: "block",
      },
      ...(Array.isArray(style) ? style : [style])
    )}
  />
);

const font_symbols = {
  weapons: {
    "Combat Bow": "",
    "Auto Rifle": "",
    "Pulse Rifle": "",
    "Scout Rifle": "",
    "Hand Cannon": "",
    "Submachine Gun": "",
    Sidearm: "",
    Shotgun: "",
    "Sniper Rifle": "",
    "Fusion Rifle": "",
    "Grenade Launcher": "",
    Glaive: "",
    "Rocket Launcher": "",
    "Heavy Grenade Launcher": "",
    "Linear Fusion Rifle": "",
    Sword: "",
    "Machine Gun": "",
    "Trace Rifle": "",
  },
  elements: {
    Kinetic: (
      <ImgIcon
        src={kinetic_96x96}
        style={{ maxWidth: "96px", maxHeight: "96px" }}
      />
    ),
    Void: "",
    Solar: "",
    Arc: "",
    Stasis: "",
    Strand: "",
  },
  ammo: {
    Primary: (
      <ImgIcon
        src={primaryAmmo_192x135}
        style={{ maxWidth: "192px", maxHeight: "135px" }}
      />
    ),
    Special: (
      <ImgIcon
        src={specialAmmo_192x135}
        style={{ maxWidth: "192px", maxHeight: "135px" }}
      />
    ),
    Heavy: (
      <ImgIcon
        src={heavyAmmo_192x135}
        style={{ maxWidth: "192px", maxHeight: "135px" }}
      />
    ),
  },
  activities: {
    LostSector: "",
    Destination: (
      <ImgIcon
        src={location_96x96}
        style={{ maxWidth: "96px", maxHeight: "96px" }}
      />
    ),
  },
  champions: {
    modifiers: {
      Overload: (
        <ImgIcon
          src={overloadChampionModifier_60x60}
          style={{ maxWidth: "60px", maxHeight: "60px" }}
        />
      ),
      Unstoppable: (
        <ImgIcon
          src={unstoppableChampionModifier_60x60}
          style={{ maxWidth: "60px", maxHeight: "60px" }}
        />
      ),
      Barrier: (
        <ImgIcon
          src={barrierChampionModifier_60x60}
          style={{ maxWidth: "60px", maxHeight: "60px" }}
        />
      ),
    },
  },
  controllers: {
    playstation: {
      Cross: "",
    },
  },
};

export const DestinyIcon = ({
  icon,
  onClick,
  tooltip,
  color,
  sx = [],
  ...props
}) => {
  const theme = useTheme();

  try {
    const font_symbol = icon.reduce(
      (previous, current) => previous[current],
      font_symbols
    );

    color = color
      ? color.toLowerCase()
      : icon.includes("Arc")
      ? "arc"
      : icon.includes("Solar")
      ? "solar"
      : icon.includes("Void")
      ? "void"
      : icon.includes("Stasis")
      ? "stasis"
      : icon.includes("Strand")
      ? "strand"
      : "";

    return (
      <Tooltip title={tooltip}>
        <If condition={typeof font_symbol.length === "string"}>
          <Then>{cloneElement(font_symbol, { sx, ...props })}</Then>
          <Else>
            <Box
              component="span"
              color={color}
              style={{
                fontFamily: "Destiny_Keys",
              }}
              sx={[
                {
                  fontSize: "1em",
                  textTransform: "uppercase",
                  lineHeight: theme.typography.body1.lineHeight,
                  width: "max-content",
                  height: "min-content",
                  display: "inline-block",
                },
                ...(Array.isArray(sx) ? sx : [sx]),
              ]}
              onClick={onClick}
              {...props}
            >
              {font_symbol}
            </Box>
          </Else>
        </If>
      </Tooltip>
    );
  } catch (e) {
    console.warn(`Unknown Destiny icon: ${icon}. ${e}`);
    return null;
  }
};
