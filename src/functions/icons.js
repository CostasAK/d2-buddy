import {
  GiCalendar,
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
  duty: <GiVerticalBanner />,
  weapon: <GiPistolGun />,
  season: <GiCalendar />,
};

export default function icons(key) {
  return known_icons[key];
}
