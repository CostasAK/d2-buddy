import { LostSector } from "components/Activity";
import Modal from "components/Modal";

const { Typography } = require("@mui/material");

export function LostSectorLink({ name }) {
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
