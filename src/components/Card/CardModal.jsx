import { CardModalText } from "./CardModalStyle";
import Modal from "../Modal";
import PropTypes from "prop-types";
import { forwardRef } from "react";

export const CardModal = forwardRef(
  ({ children, modalContent, customModal, title, icon, ...props }, ref) => {
    if (!modalContent) return children;

    return (
      <Modal triggerContent={children} title={title} background={icon}>
        {customModal ? (
          modalContent
        ) : (
          <CardModalText ref={ref} {...props}>
            <section>{modalContent}</section>
          </CardModalText>
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
