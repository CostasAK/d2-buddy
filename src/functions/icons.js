import {
  GiClockwiseRotation,
  GiPistolGun,
  GiStarFlag,
  GiUpgrade,
  GiVerticalBanner,
  GiWrench,
} from "react-icons/gi";

const known_icons = {
  maintenance: <GiWrench />,
  event: <GiStarFlag />,
  reset: <GiClockwiseRotation />,
  update: <GiUpgrade />,
  season: <GiVerticalBanner />,
  weapon: <GiPistolGun />,
};

export default function icons(key) {
  return known_icons[key];
}
