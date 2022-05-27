import CycleCard from "../../components/CycleCard";
import DestinyWeapon from "../../components/DestinyWeapon";
import { day } from "../../constants/time";

const items = [
  <DestinyWeapon id="2782847179" name="Blasphemer" />,
  <DestinyWeapon id="2164448701" name="Apostate" />,
  <DestinyWeapon id="3067821200" name="Heretic" />,
];

export default function AltarsOfSorrowWeapons() {
  return (
    <CycleCard
      title="Altars of Sorrow Weapon"
      items={items}
      start={1648832400 * 1000}
      period={day}
      icon="https://www.bungie.net/common/destiny2_content/icons/58bf5b93ae8cfefc55852fe664179757.png"
    />
  );
}
