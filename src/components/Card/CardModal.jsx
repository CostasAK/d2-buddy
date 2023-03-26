import { Box } from "@mui/material";
import PropTypes from "prop-types";
import { forwardRef } from "react";
import Modal from "../Modal";

export const CardModal = forwardRef(
  ({ children, modalContent, customModal, title, icon, ...props }, ref) => {
    if (!modalContent) return children;

    return (
      <Modal triggerContent={children} title={title} background={icon}>
        {customModal ? (
          modalContent
        ) : (
          <Box ref={ref} {...props}>
            <section>{modalContent}</section>
          </Box>
        )}
      </Modal>
    );
  }
);

CardModal.propTypes = {
  modalContent: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  title: PropTypes.string,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  customModal: PropTypes.bool,
};

CardModal.defaultProps = {
  customModal: false,
};
