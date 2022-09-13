import {
  Dialog,
  DialogContent,
  DialogTitle,
  Link,
  Tooltip,
} from "@mui/material";
import { Else, If, Then, When } from "react-if";
import { cloneElement, isValidElement, useMemo, useState } from "react";

import { PropTypes } from "prop-types";

export default function Modal({
  triggerContent,
  title,
  tooltip,
  background,
  filled,
  children,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const cloned_trigger_content = useMemo(
    () =>
      isValidElement(triggerContent) ? (
        cloneElement(triggerContent, { onClick: () => setIsOpen(true) })
      ) : (
        <Link onClick={() => setIsOpen(true)}>{triggerContent}</Link>
      ),
    [triggerContent]
  );

  return (
    <>
      <If condition={tooltip}>
        <Then>
          <Tooltip {...tooltip}>{cloned_trigger_content}</Tooltip>
        </Then>
        <Else>{cloned_trigger_content}</Else>
      </If>
      <Dialog
        onClose={() => setIsOpen(false)}
        open={isOpen}
        fullWidth={false}
        maxWidth="sm"
      >
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
