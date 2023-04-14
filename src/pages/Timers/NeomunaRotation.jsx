import CycleCard from "../../components/CycleCard";
import DestinyWeapon from "components/DestinyWeapon";
import { dateToTimestamp } from "functions/dateToTimestamp";
import { useQueryDatabase } from "hooks/useQueryDatabase";

export default function NeomunaRotation() {
  const { data: items, isLoading } = useQueryDatabase("neomunaRotation");

  const { data: terminalOverloadItems, isLoading: terminalOverloadIsLoading } =
    useQueryDatabase("terminalOverloadRotation");

  items?.map((item) => {
    item.timestamp = dateToTimestamp(item?.date);
    return null;
  });

  terminalOverloadItems?.map((item) => {
    item.timestamp = dateToTimestamp(item?.date);
    item.id = item?.location;
    item.element = (
      <>
        <DestinyWeapon hash={item?.weaponHash} name={item?.weapon} /> -{" "}
        {item?.location}
      </>
    );
    return null;
  });

  const vexIncursionItems = structuredClone(items)
    ?.filter((item) => item?.vexIncursion)
    ?.map((item, index) => {
      item.id = item?.vexIncursion;
      item.element = item?.vexIncursion;
      return item;
    });

  const campaignMissionItems = structuredClone(items)
    ?.filter((item) => item?.campaignMission)
    ?.map((item, index) => {
      item.id = item?.campaignMission;
      item.element = item?.campaignMission;
      return item;
    });

  const partitionItems = structuredClone(items)
    ?.filter((item) => item?.partition)
    ?.map((item, index) => {
      item.id = item?.partition;
      item.element = item?.partition;
      return item;
    });

  return (
    <>
      <CycleCard
        key="Lightfall Weekly Campaign Mission"
        title="Lightfall Campaign Mission"
        items={campaignMissionItems}
        isLoading={isLoading}
        icon="https://www.bungie.net/common/destiny2_content/icons/DestinyMilestoneDefinition_67326996f903b5961421421e60ba128c.png"
      />
      <CycleCard
        key="Neomuna: Terminal Overload"
        title="Neomuna: Terminal Overload"
        items={terminalOverloadItems}
        isLoading={terminalOverloadIsLoading}
        icon="https://www.bungie.net/common/destiny2_content/icons/70cbe108aa054523eac9defadfa27a57.png"
      />
      <CycleCard
        key="Neomuna: Partition"
        title="Neomuna: Partition"
        items={partitionItems}
        isLoading={isLoading}
        icon="https://www.bungie.net/common/destiny2_content/icons/DestinyMilestoneDefinition_67326996f903b5961421421e60ba128c.png"
      />
      <CycleCard
        key="Neomuna: Vex Incursion"
        title="Neomuna: Vex Incursion"
        items={vexIncursionItems}
        isLoading={isLoading}
        titleRule
      />
    </>
  );
}
