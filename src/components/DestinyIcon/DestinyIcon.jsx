import { Box, Tooltip, useTheme } from "@mui/material";

import Img from "../Img";

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
    "Combat Bow": { symbol: "", name: "Bow" },
    "Auto Rifle": { symbol: "", name: "Auto Rifle" },
    "Pulse Rifle": { symbol: "", name: "Pulse Rifle" },
    "Scout Rifle": { symbol: "", name: "Scout Rifle" },
    "Hand Cannon": { symbol: "", name: "Hand Cannon" },
    "Submachine Gun": { symbol: "", name: "Submachine Gun" },
    Sidearm: { symbol: "", name: "Sidearm" },
    Shotgun: { symbol: "", name: "Shotgun" },
    "Sniper Rifle": { symbol: "", name: "Sniper Rifle" },
    "Fusion Rifle": { symbol: "", name: "Fusion Rifle" },
    "Grenade Launcher": { symbol: "", name: "Grenade Launcher" },
    Glaive: { symbol: "", name: "Glaive" },
    "Rocket Launcher": { symbol: "", name: "Rocket Launcher" },
    "Heavy Grenade Launcher": { symbol: "", name: "Heavy Grenade Launcher" },
    "Linear Fusion Rifle": { symbol: "", name: "Linear Fusion Rifle" },
    Sword: { symbol: "", name: "Sword" },
    "Machine Gun": { symbol: "", name: "Machine Gun" },
    "Trace Rifle": { symbol: "", name: "Trace Rifle" },
  },
  elements: {
    Kinetic: {
      symbol: (
        <ImgIcon
          src={
            "https://www.bungie.net/img/destiny_content/damage_types/destiny2/kinetic_trans.png"
          }
          style={{ maxWidth: "96px", maxHeight: "96px" }}
        />
      ),
      name: "Kinetic",
    },
    Void: { symbol: "", name: "Void" },
    Solar: { symbol: "", name: "Solar" },
    Arc: { symbol: "", name: "Arc" },
    Stasis: { symbol: "", name: "Stasis" },
    Strand: { symbol: "", name: "Strand" },
  },
  activities: {
    LostSector: { symbol: "", name: "Lost Sector" },
    Destination: {
      symbol: (
        <ImgIcon
          src={
            "https://www.bungie.net/common/destiny2_content/icons/c60303e278aa5fc566a04e98c3d8024c.png"
          }
          style={{ maxWidth: "96px", maxHeight: "96px" }}
        />
      ),
      name: "Destination",
    },
  },
  champions: {
    modifiers: {
      Overload: {
        symbol: (
          <ImgIcon
            src={
              "https://bungie.net/common/destiny2_content/icons/c4d9c4f1ec3167e272286bb155dc15f4.png"
            }
            style={{ maxWidth: "60px", maxHeight: "60px" }}
          />
        ),
        name: "Overload Champions",
      },
      Unstoppable: {
        symbol: (
          <ImgIcon
            src={
              "https://bungie.net/common/destiny2_content/icons/0e40371c49f0beac97e5fd9dc2ea9348.png"
            }
            style={{ maxWidth: "60px", maxHeight: "60px" }}
          />
        ),
        name: "Unstoppable Champions",
      },
      Barrier: {
        symbol: (
          <ImgIcon
            src={
              "https://bungie.net/common/destiny2_content/icons/2ac9bcf4a961c3b3e31da7b76a5a87f9.png"
            }
            style={{ maxWidth: "60px", maxHeight: "60px" }}
          />
        ),
        name: "Barrier Champions",
      },
    },
  },
  controllers: {
    playstation: {
      Cross: { symbol: "", name: "Cross" },
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

    return (
      <Tooltip title={tooltip}>
        <Box
          component="span"
          color={
            color
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
              : ""
          }
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
          {font_symbol.symbol}
        </Box>
      </Tooltip>
    );
  } catch (e) {
    console.warn(`Unknown Destiny icon: ${icon}. ${e}`);
    return null;
  }
};
