import CycleCard from "../../components/CycleCard";
import { dateToTimestamp } from "functions/dateToTimestamp";
import { useQueryDatabase } from "hooks/useQueryDatabase";

export default function DefiantRotation() {
  let { data: items, isLoading } = useQueryDatabase("defiantRotation");

  items?.map((item, index) => {
    item.id = item?.name;
    item.timestamp = dateToTimestamp(item?.date);
    item.element = item?.name;
    return null;
  });

  return (
    <CycleCard
      title="Defiant Battlegrounds: Legend"
      items={items}
      isLoading={isLoading}
      icon="https://bungie.net/common/destiny2_content/icons/DestinySeasonDefinition_50d80a655bccddfd26e954dbfc3b9746.png"
    />
  );
}
