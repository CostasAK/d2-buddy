import CycleCard from "../../components/CycleCard";
import { dateToTimestamp } from "functions/dateToTimestamp";
import { useQueryDatabase } from "hooks/useQueryDatabase";

export default function RaidRotation() {
  let { data: items, isLoading } = useQueryDatabase("raidRotation");

  items?.map((item, index) => {
    item.id = item?.name;
    item.timestamp = dateToTimestamp(item?.date);
    item.element = item?.name;
    return null;
  });

  return (
    <CycleCard
      title="Featured Raid"
      items={items}
      isLoading={isLoading}
      icon="https://www.bungie.net/common/destiny2_content/icons/8b1bfd1c1ce1cab51d23c78235a6e067.png"
    />
  );
}
