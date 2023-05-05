import DestinyDialog from "components/DestinyDialog";

export const Modals = () => {
  return (
    <>
      <DestinyDialog
        path="LostSector/:name"
        lazy={() => import("../../components/Activity/LostSector")}
      >
        Hello world!
      </DestinyDialog>
    </>
  );
};
