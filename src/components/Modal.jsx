import { Dialog, DialogTitle, Tooltip } from "@mui/material";
import { cloneElement, isValidElement, useMemo, useState } from "react";

import { PropTypes } from "prop-types";
import { When } from "react-if";

export default function Modal({
  triggerContent,
  title,
  tooltip,
  background,
  children,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const cloned_trigger_content = useMemo(
    () =>
      isValidElement(triggerContent) ? (
        cloneElement(triggerContent, { onClick: () => setIsOpen(true) })
      ) : (
        <span className="a-link" onClick={() => setIsOpen(true)}>
          {triggerContent}
        </span>
      ),
    [triggerContent]
  );

  return (
    <>
      {tooltip ? (
        <Tooltip {...tooltip}>{cloned_trigger_content}</Tooltip>
      ) : (
        cloned_trigger_content
      )}
      <Dialog
        onClose={() => setIsOpen(false)}
        open={isOpen}
        fullWidth={false}
        maxWidth="sm"
      >
        <When condition={title}>
          <DialogTitle variant="h1">{title}</DialogTitle>
        </When>
        {children}
      </Dialog>
    </>
  );
}

Modal.propTypes = {
  triggerContent: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
};
