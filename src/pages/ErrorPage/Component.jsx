import { Button, Typography } from "@mui/material";
import { Link, useRouteError } from "react-router-dom";

import Page from "layout/Page";

export const Component = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <Page title="Error" description="Sorry, an unexpected error has occurred.">
      <Typography variant="body2" marginBottom={4}>
        {error.statusText || error.message}
      </Typography>
      <Button component={Link} to="/" variant="bungie">
        {"Home"}
      </Button>
    </Page>
  );
};
