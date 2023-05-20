import { Dialog, DialogActions, Fab } from "@mui/material";
import { Outlet, useNavigate } from "react-router-dom";

import CloseIcon from "@mui/icons-material/Close";

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

  const handleClose = () => navigate(".");

  return (
    <Dialog
      onClose={handleClose}
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
          maxWidth: "100% !important",
          maxHeight: "100%",
          border: "none",
          justify: "flex-end",
          display: "flex",
          flexDirection: "column",
          justifyContent: "stretch",
        },
      }}
      {...props}
    >
      <Outlet />
      <DialogActions sx={{ justifyContent: "center" }}>
        <Fab size="small" autoFocus onClick={handleClose} variant="bungie">
          <CloseIcon />
        </Fab>
      </DialogActions>
    </Dialog>
  );
};
