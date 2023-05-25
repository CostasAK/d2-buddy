import { Box, Tooltip, useTheme } from "@mui/material";
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
import { cloneElement, forwardRef } from "react";

import Img from "../Img";
import { isString } from "functions/isString";

const ImgIcon = forwardRef(({ src, srcSize, sx = [], ...props }, ref) => {
  const theme = useTheme();
  return (
    <Img
      ref={ref}
      src={src}
      sx={Object.assign(
        {
          aspectRatio:
            srcSize?.[0] && srcSize?.[1]
              ? `${srcSize?.[0]} / ${srcSize?.[1]}`
              : "1 / 1",
          maxWidth: srcSize?.[0] ? `min(100%, ${srcSize?.[0]}px)` : "100%",
          maxHeight: srcSize?.[1] ? `min(100%, ${srcSize?.[1]}px)` : "100%",
          height: `${theme.typography.body1.lineHeight}em`,
          lineHeight: "1",
          display: "block",
        },
        ...(Array.isArray(sx) ? sx : [sx])
      )}
      {...props}
    />
  );
});

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
    Kinetic: <ImgIcon src={kinetic_96x96} srcSize={[96, 96]} />,
    Void: "",
    Solar: "",
    Arc: "",
    Stasis: "",
    Strand: "",
  },
  ammo: {
    Primary: <ImgIcon src={primaryAmmo_192x135} srcSize={[192, 135]} />,
    Special: <ImgIcon src={specialAmmo_192x135} srcSize={[192, 135]} />,
    Heavy: <ImgIcon src={heavyAmmo_192x135} srcSize={[192, 135]} />,
  },
  activities: {
    LostSector: "",
    Destination: <ImgIcon src={location_96x96} srcSize={[96, 96]} />,
  },
  champions: {
    modifiers: {
      Overload: (
        <ImgIcon src={overloadChampionModifier_60x60} srcSize={[60, 60]} />
      ),
      Unstoppable: (
        <ImgIcon src={unstoppableChampionModifier_60x60} srcSize={[60, 60]} />
      ),
      Barrier: (
        <ImgIcon src={barrierChampionModifier_60x60} srcSize={[60, 60]} />
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
        {isString(font_symbol) ? (
          <Box
            component="span"
            color={color}
            style={{
              fontFamily: "Destiny_Keys",
            }}
            sx={[
              {
                fontSize: "1em",
                fontWeight: "normal",
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
        ) : (
          cloneElement(font_symbol, { sx, ...props })
        )}
      </Tooltip>
    );
  } catch (e) {
    console.warn(`Unknown Destiny icon: ${icon}. ${e}`);
    return null;
  }
};
