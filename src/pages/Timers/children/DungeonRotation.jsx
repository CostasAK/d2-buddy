import CycleCard from "../../components/CycleCard";
import { dateToTimestamp } from "functions/dateToTimestamp";
import { useQueryDatabase } from "hooks/useQueryDatabase";

export default function DungeonRotation() {
  let { data: items, isLoading } = useQueryDatabase("dungeonRotation");

  items?.map((item, index) => {
    item.id = item?.name;
    item.timestamp = dateToTimestamp(item?.date);
    item.element = item?.name;
    return null;
  });

  return (
    <CycleCard
      title="Featured Dungeon"
      items={items}
      isLoading={isLoading}
      icon="https://www.bungie.net/common/destiny2_content/icons/DestinyActivityModeDefinition_f20ebb76bee675ca429e470cec58cc7b.png"
    />
  );
}
