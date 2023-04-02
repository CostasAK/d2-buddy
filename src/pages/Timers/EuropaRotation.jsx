import CycleCard from "../../components/CycleCard";
import { dateToTimestamp } from "functions/dateToTimestamp";
import { useQueryDatabase } from "hooks/useQueryDatabase";

export default function EuropaRotation() {
  let { data: items, isLoading } = useQueryDatabase("europaRotation");

  items?.map((item) => {
    item.timestamp = dateToTimestamp(item?.date);
    return null;
  });

  let eclipsedZoneItems = structuredClone(items)
    ?.filter((item) => item?.eclipsedZone)
    ?.map((item, index) => {
      item.id = item?.eclipsedZone;
      item.timestamp = dateToTimestamp(item?.date);
      item.element = item?.eclipsedZone;
      return item;
    });

  let empireHuntItems = structuredClone(items)
    ?.filter((item) => item?.empireHunt)
    ?.map((item, index) => {
      item.id = item?.empireHunt;
      item.timestamp = dateToTimestamp(item?.date);
      item.element = item?.empireHunt;
      return item;
    });

  let simulationItems = structuredClone(items)
    ?.filter((item) => item?.simulation)
    ?.map((item, index) => {
      item.id = item?.simulation;
      item.timestamp = dateToTimestamp(item?.date);
      item.element = item?.simulation;
      return item;
    });

  return (
    <>
      <CycleCard
        key="Europa: Eclipsed Zone"
        title="Europa: Eclipsed Zone"
        items={eclipsedZoneItems}
        isLoading={isLoading}
        titleRule
      />
      <CycleCard
        key="Empire Hunt"
        title="Empire Hunt"
        items={empireHuntItems}
        isLoading={isLoading}
        icon="https://www.bungie.net/common/destiny2_content/icons/4abbc492b40906127b7e8850c1c14135.png"
      />
      <CycleCard
        key="Europa: Simulation"
        title="Europa: Simulation"
        items={simulationItems}
        isLoading={isLoading}
        titleRule
      />
    </>
  );
}
