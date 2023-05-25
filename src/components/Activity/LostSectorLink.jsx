import { LostSector } from "components/Activity";
import Modal from "components/Modal";
import { Typography } from "@mui/material";
import { lostSector_120x120 } from "assets/bungie";

export function LostSectorLink({ name }) {
  return (
    <Modal
      triggerContent={<Typography>{name}</Typography>}
      maxWidth={false}
      width="xl"
      background={lostSector_120x120}
    >
      <LostSector name={name} />
    </Modal>
  );
}
