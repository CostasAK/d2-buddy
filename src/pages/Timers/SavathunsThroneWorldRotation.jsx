import CycleCard from "../../components/CycleCard";
import DestinyWeapon from "../../components/DestinyWeapon";
import { dateToTimestamp } from "functions/dateToTimestamp";
import { useQueryDatabase } from "hooks/useQueryDatabase";

export default function SavathunsThroneWorldRotation() {
  const { data: items, isLoading } = useQueryDatabase(
    "savathunsThroneWorldRotation"
  );

  const { data: wellspringItems, isLoading: wellspringIsLoading } =
    useQueryDatabase("wellspringRotation");

  items?.map((item) => {
    item.timestamp = dateToTimestamp(item?.date);
    return null;
  });

  const campaignMissionItems = structuredClone(items)
    ?.filter((item) => item?.campaignMission)
    ?.map((item, index) => {
      item.id = item?.campaignMission;
      item.element = item?.campaignMission;
      return item;
    });

  const altarOfReflectionItems = structuredClone(items)
    ?.filter((item) => item?.altarOfReflection)
    ?.map((item, index) => {
      item.id = item?.altarOfReflection;
      item.element = item?.altarOfReflection?.split(";")?.join(" & ");
      return item;
    });

  wellspringItems?.map((item, index) => {
    item.id = item?.weaponHash;
    item.timestamp = dateToTimestamp(item?.date);
    item.element = (
      <>
        <DestinyWeapon hash={item?.weaponHash} name={item?.weapon} /> -{" "}
        {item?.boss}
      </>
    );
    return null;
  });

  return (
    <>
      <CycleCard
        title="Witch Queen Weekly Campaign Mission"
        items={campaignMissionItems}
        isLoading={isLoading}
        icon="https://www.bungie.net/common/destiny2_content/icons/e17d13013bad7d53c47b0231b9784e1e.png"
      />
      <CycleCard
        title="Wellspring Weapon"
        items={wellspringItems}
        isLoading={wellspringIsLoading}
        titleRule={true}
      />
      <CycleCard
        title="Witch Queen: Altar of Reflection"
        items={altarOfReflectionItems}
        isLoading={isLoading}
        icon="https://www.bungie.net/common/destiny2_content/icons/e17d13013bad7d53c47b0231b9784e1e.png"
      />
    </>
  );
}
