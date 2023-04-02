import { useQueries, useQuery } from "react-query";

import Activity from "components/Activity";
import CycleCard from "components/CycleCard";
import Modal from "components/Modal";
import { dateToTimestamp } from "functions/dateToTimestamp";
import { useQueryDatabase } from "hooks/useQueryDatabase";

export default function CurrentNightfall() {
  let { data: items, isLoading } = useQueryDatabase("nightfallRotation");

  items?.map((item) => {
    item.timestamp = dateToTimestamp(item.date);
    item.element = `${item?.reward}${item?.reward?.length > 0 ? " - " : ""}${
      item?.name
    }`;
    item.id = item.element;
    return null;
  });

  const milestone = useQuery("Milestones");

  const activities =
    milestone?.data?.[1942283261]?.activities?.filter(
      (activity) => activity?.activityHash !== 743628305
    ) || [];

  let nightfalls = useQueries(
    activities.map((activity) => ({
      queryKey: ["DestinyActivityDefinition", activity.activityHash],
      enabled: !!activity?.activityHash,
    }))
  );

  nightfalls?.map((nightfall, index) => {
    if (nightfall?.data?.modifiers) {
      nightfall.data.modifiers = activities[index].modifierHashes.map(
        (hash) => ({
          activityModifierHash: hash,
        })
      );
    }
    return null;
  });

  if (
    milestone.isSuccess &&
    nightfalls.every((nightfall) => nightfall.isSuccess) &&
    !isLoading
  ) {
    items =
      items?.map((item) => {
        if (item?.name === nightfalls[0].data.displayProperties.description) {
          item.element = (
            <Modal triggerContent={item?.element} maxWidth={false} width="xl">
              <Activity dataArray={nightfalls} />
            </Modal>
          );
        }
        return item;
      }) || items;
  }

  return (
    <CycleCard
      title="Nightfall"
      items={items}
      isLoading={isLoading}
      icon="https://www.bungie.net/common/destiny2_content/icons/48dda413d9f412ca2b10fd56a35a2665.png"
    />
  );
}
