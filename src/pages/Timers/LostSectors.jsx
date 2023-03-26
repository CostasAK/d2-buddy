import { Typography } from "@mui/material";
import { useMemo } from "react";
import { useQuery } from "react-query";
import { LostSector } from "../../components/Activity/LostSector";
import CycleCard from "../../components/CycleCard";
import Modal from "../../components/Modal";
import { lcm } from "../../functions/gcd";

function LostSectorLink({ location }) {
  return (
    <Modal
      triggerContent={
        <Typography sx={{ cursor: "pointer" }}>
          {location.name} - {location.location}
        </Typography>
      }
      maxWidth={false}
      width="xl"
      background="https://www.bungie.net/common/destiny2_content/icons/DestinyActivityModeDefinition_7d11acd7d5a3daebc0a0c906452932d6.png"
    >
      <LostSector name={location.name} />
    </Modal>
  );
}

const useBuddyData = () => {
  const { data } = useQuery(["buddyData", "lostSectors"]);

  const period = data?.schedule?.period;
  const start = data?.schedule?.start;

  let locations = data?.schedule?.locations;
  const locationsLength = locations?.length;

  if (locations?.[locationsLength - 1] === null) {
    if (start + (locationsLength - 1) * period < Date.now())
      locations = undefined;
    else locations = [locations?.[locationsLength - 2]];
  }

  if (locations !== undefined)
    locations = locations.map((l) => ({
      name: l,
      location: data?.info?.[l]?.location,
    }));

  return {
    period,
    start,
    locations,
    drops:
      data?.schedule?.drops?.length < 4
        ? [data?.schedule?.drops?.[data?.schedule?.drops?.length - 1]]
        : data?.schedule?.drops,
  };
};

export default function LostSectors() {
  const { period, start, locations, drops } = useBuddyData();

  const items = useMemo(() => {
    let items = [];

    do {
      items.push(
        <div>
          <LostSectorLink
            location={locations?.[items.length % locations?.length]}
          />
          {" ("}
          {drops?.[items.length % drops?.length]}
          {")"}
        </div>
      );
    } while (items.length < lcm(drops?.length, locations?.length));

    return items;
  }, [drops, locations]);

  if (locations === undefined) return null;

  return (
    <CycleCard
      title="Legend & Master Lost Sector"
      items={items}
      start={start}
      period={period}
      icon="https://www.bungie.net/common/destiny2_content/icons/DestinyActivityModeDefinition_7d11acd7d5a3daebc0a0c906452932d6.png"
    />
  );
}
