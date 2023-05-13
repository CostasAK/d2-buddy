import CycleCard from "components/CycleCard";
import DestinyWeapon from "../../components/DestinyWeapon";
import { dateToTimestamp } from "functions/dateToTimestamp";
import { useQueryDatabase } from "hooks/useQueryDatabase";

export default function MoonRotation() {
  let { data: items, isLoading } = useQueryDatabase("moonRotation");

  items?.map((item, index) => {
    item.id = item.altarsOfSorrowWeaponHash;
    item.timestamp = dateToTimestamp(item.date);
    item.element = (
      <DestinyWeapon
        hash={item.altarsOfSorrowWeaponHash}
        name={item.altarsOfSorrowWeaponName}
      />
    );
    return null;
  });

  return (
    <CycleCard
      title="Altars of Sorrow Weapon"
      items={items}
      isLoading={isLoading}
      icon="https://www.bungie.net/common/destiny2_content/icons/58bf5b93ae8cfefc55852fe664179757.png"
    />
  );
}
