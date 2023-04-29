import CycleCard from "../../components/CycleCard";
import { dateToTimestamp } from "functions/dateToTimestamp";
import { useQueryDatabase } from "hooks/useQueryDatabase";

export default function CrucibleRotation() {
  let { data: items, isLoading } = useQueryDatabase("crucibleRotation");

  items?.map((item) => {
    item.timestamp = dateToTimestamp(item?.date);
    return null;
  });

  const relentlessItems = structuredClone(items)?.map((item, index) => {
    item.id = item?.relentless;
    item.element = item?.relentless;
    return item;
  });

  const partyItems = structuredClone(items)?.map((item, index) => {
    item.id = item?.party;
    item.element = item?.party;
    return item;
  });

  return (
    <>
      <CycleCard
        title="Crucible: Relentless Rotator"
        items={relentlessItems}
        isLoading={isLoading}
        icon="https://www.bungie.net/common/destiny2_content/icons/cc8e6eea2300a1e27832d52e9453a227.png"
      />
      <CycleCard
        title="Crucible: Party Rotator"
        items={partyItems}
        isLoading={isLoading}
        icon="https://www.bungie.net/common/destiny2_content/icons/cc8e6eea2300a1e27832d52e9453a227.png"
      />
    </>
  );
}
