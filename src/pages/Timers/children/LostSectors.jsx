import CycleCard from "../../../components/CycleCard";
import { LostSector } from "../../../components/Activity/LostSector";
import Modal from "../../../components/Modal";
import { Typography } from "@mui/material";
import { dateToTimestamp } from "functions/dateToTimestamp";
import { useQueryDatabase } from "hooks/useQueryDatabase";

function LostSectorLink({ name }) {
  return (
    <Modal
      triggerContent={<Typography>{name}</Typography>}
      maxWidth={false}
      width="xl"
      background="https://www.bungie.net/common/destiny2_content/icons/DestinyActivityModeDefinition_7d11acd7d5a3daebc0a0c906452932d6.png"
    >
      <LostSector name={name} />
    </Modal>
  );
}

export default function LostSectors() {
  let { data: items, isLoading } = useQueryDatabase("lostSectorRotation");

  items?.map((item) => {
    item.timestamp = dateToTimestamp(item.date);
    item.id = `${item?.reward}${item?.reward?.length > 0 ? " - " : ""}${
      item?.name
    }`;
    item.element = (
      <>
        <LostSectorLink name={item?.name} /> - {item?.reward}
      </>
    );
    return null;
  });

  return (
    <CycleCard
      title="Legend & Master Lost Sector"
      items={items}
      isLoading={isLoading}
      icon="https://www.bungie.net/common/destiny2_content/icons/DestinyActivityModeDefinition_7d11acd7d5a3daebc0a0c906452932d6.png"
    />
  );
}
