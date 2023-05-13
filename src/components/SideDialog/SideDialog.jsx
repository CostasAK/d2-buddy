import { Outlet, useNavigate } from "react-router-dom";

import { Dialog } from "@mui/material";

export const SideDialog = ({
  maxWidth = "md",
  background,
  filled,
  title,
  sx = [],
  children,
  ...props
}) => {
  const navigate = useNavigate();

  return (
    <Dialog
      onClose={() => navigate(".")}
      open
      fullWidth={false}
      maxWidth={maxWidth}
      scroll="body"
      sx={[
        {
          "& .MuiDialog-container": {
            display: "flex",
            alignItems: "stretch",
            justifyContent: "flex-end",
          },
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      PaperProps={{
        sx: {
          margin: 0,
          // minWidth: "max(46.8%, min(100%, 35ch))",
          maxHeight: "100%",
          border: "none",
          justify: "flex-end",
        },
      }}
      {...props}
    >
      <Outlet />
    </Dialog>
  );
};
