import { Box, DialogContent, Typography } from "@mui/material";

import { Img } from "components/Img/Img";
import { When } from "react-if";

export const SideDialogContent = ({
  background,
  filled,
  title,
  children,
  ...props
}) => (
  <>
    <When condition={background}>
      <Img
        src={background}
        sx={{
          position: "absolute",
          right: "2rem",
          bottom: "1.5rem",
          opacity: 0.25,
          maxWidth: "50%",
          maxHeight: "50%",
        }}
      />
    </When>
    <DialogContent
      sx={{
        padding: filled && 0,
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <When condition={title}>
        <Box sx={{ flexShrink: 1, flexBasis: "3.2rem" }} />
        <Typography variant="h1">{title}</Typography>
      </When>
      <When condition={children}>
        <Box sx={{ flexGrow: 5 }} />
        {children}
        <Box sx={{ flexGrow: 8 }} />
      </When>
    </DialogContent>
  </>
);
