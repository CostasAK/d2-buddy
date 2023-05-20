import { SideDialog } from "components/SideDialog";
import { Typography } from "@mui/material";
import { useRouteError } from "react-router-dom";

export const ErrorDialog = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <SideDialog title="Error">
      <Typography variant="body1" marginBottom={4}>
        Sorry, an unexpected error has occurred.
      </Typography>
      <Typography variant="body2" marginBottom={4}>
        {error.statusText || error.message}
      </Typography>
    </SideDialog>
  );
};
