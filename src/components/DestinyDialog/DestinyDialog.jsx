import { Box, Dialog, DialogContent, Slide, Typography } from "@mui/material";
import { useNavigate, useRoutes } from "react-router-dom";

import Img from "components/Img";
import { When } from "react-if";
import { forwardRef } from "react";
import { pascalCase } from "functions/pascalCase";

export const DestinyDialog = ({
  path,
  loader,
  action,
  lazy,
  maxWidth = "md",
  background,
  title,
  filled,
  children,
  ...props
}) => {
  const navigate = useNavigate();

  const element = useRoutes([
    {
      path: path || pascalCase(title),
      loader,
      action,
      lazy,
      element: (
        <Dialog
          onClose={() => navigate(-1)}
          open={true}
          fullWidth={false}
          maxWidth={maxWidth}
          scroll={"body"}
          TransitionComponent={forwardRef((props, ref) => (
            <Slide direction="left" ref={ref} {...props} />
          ))}
          sx={{
            "& .MuiDialog-container": {
              display: "flex",
              alignItems: "stretch",
              justifyContent: "flex-end",
            },
          }}
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
              <Typography variant="h2">{title}</Typography>
            </When>
            <Box sx={{ flexGrow: 5 }} />
            {children}
            <Box sx={{ flexGrow: 8 }} />
          </DialogContent>
        </Dialog>
      ),
    },
  ]);

  if (!path && !title) return null;

  return element;
};
