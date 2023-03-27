import {
  Dialog,
  DialogContent,
  DialogTitle,
  Link,
  Tooltip,
} from "@mui/material";
import { Else, If, Then, When } from "react-if";
import { cloneElement, isValidElement, useMemo, useState } from "react";

import Img from "components/Img";
import { PropTypes } from "prop-types";

export default function Modal({
  triggerContent,
  title,
  tooltip,
  background,
  filled,
  children,
  maxWidth = "md",
  ...props
}) {
  const [isOpen, setIsOpen] = useState(false);

  const trigger_link = useMemo(
    () =>
      isValidElement(triggerContent) ? (
        cloneElement(triggerContent, {
          onClick: () => setIsOpen(true),
          as: Link,
        })
      ) : (
        <Link onClick={() => setIsOpen(true)}>{triggerContent}</Link>
      ),
    [triggerContent]
  );

  return (
    <>
      <If condition={tooltip}>
        <Then>
          <Tooltip {...tooltip}>{trigger_link}</Tooltip>
        </Then>
        <Else>{trigger_link}</Else>
      </If>
      <Dialog
        onClose={() => setIsOpen(false)}
        open={isOpen}
        fullWidth={false}
        maxWidth={maxWidth}
        {...props}
      >
        <When condition={background}>
          <Img
            src={background}
            sx={{
              position: "absolute",
              right: 4,
              bottom: 4,
              opacity: 0.25,
              maxWidth: "50%",
              maxHeight: "50%",
            }}
          />
        </When>
        <When condition={title}>
          <DialogTitle variant="h1">{title}</DialogTitle>
        </When>
        <DialogContent sx={{ padding: filled && 0 }}>{children}</DialogContent>
      </Dialog>
    </>
  );
}

Modal.propTypes = {
  triggerContent: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  title: PropTypes.string,
  tooltip: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  background: PropTypes.string,
  filled: PropTypes.bool,
};
