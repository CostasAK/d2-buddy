import "./style.scss";

import { capitalizeSentence } from "../../functions/capitalizeSentence";

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
    Kinetic: { symbol: "", name: "Kinetic" },
    Void: { symbol: "", name: "Void" },
    Solar: { symbol: "", name: "Void" },
    Arc: { symbol: "", name: "Void" },
    Stasis: { symbol: "", name: "Void" },
  },
  activities: {
    LostSector: { symbol: "", name: "Lost Sector" },
    Destination: {
      symbol: (
        <img
          src={
            "https://www.bungie.net/common/destiny2_content/icons/c60303e278aa5fc566a04e98c3d8024c.png"
          }
          alt=""
          style={{
            aspectRatio: "1 / 1",
            maxWidth: "96px",
            maxHeight: "96px",
            height: "1.5em",
            lineHeight: "1",
          }}
        />
      ),
      name: "Destination",
    },
  },
  controllers: {
    playstation: {
      Cross: { symbol: "", name: "Cross" },
    },
  },
};

const known_elements = ["Kinetic", "Arc", "Solar", "Void", "Stasis"];
const known_colors = [...known_elements];

function DestinyIcon({ icon, color }) {
  try {
    const font_symbol = icon.reduce(
      (previous, current) => previous[current],
      font_symbols
    );

    return (
      <figure
        className={"DestinyIcon " + (known_colors.includes(color) ? color : "")}
        title={
          (known_elements.includes(color)
            ? capitalizeSentence(color) + " "
            : "") + font_symbol.name
        }
      >
        {font_symbol.symbol}
      </figure>
    );
  } catch {
    console.warn(`Unknown Destiny icon: ${icon}`);
    return null;
  }
}

export default DestinyIcon;
