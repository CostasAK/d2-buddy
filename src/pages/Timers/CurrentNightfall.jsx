import { useQueries, useQuery } from "react-query";

import Activity from "../../components/Activity/index";
import CycleCard from "../../components/CycleCard";
import Modal from "../../components/Modal";
import { week } from "../../constants/time";

export default function CurrentNightfall() {
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

  if (
    !(
      milestone.isSuccess &&
      nightfalls.every((nightfall) => nightfall.isSuccess)
    )
  ) {
    return null;
  }

  nightfalls.map((nightfall, index) => {
    nightfall.data.modifiers = activities[index].modifierHashes.map((hash) => ({
      activityModifierHash: hash,
    }));
    return nightfall;
  });

  return (
    <CycleCard
      title="Nightfall"
      start={1653411600000}
      period={week}
      items={[
        <Modal
          triggerContent={nightfalls[0].data.displayProperties.description}
          maxWidth={false}
          width="xl"
        >
          <Activity dataArray={nightfalls} />
        </Modal>,
      ]}
      icon="https://www.bungie.net/common/destiny2_content/icons/48dda413d9f412ca2b10fd56a35a2665.png"
    >
      {nightfalls[0].data.displayProperties.description}
    </CycleCard>
  );
}
