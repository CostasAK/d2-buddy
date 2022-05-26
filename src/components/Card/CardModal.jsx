import { CardModalText } from "./CardModalStyle";
import Modal from "../Modal";
import PropTypes from "prop-types";
import { forwardRef } from "react";

export const CardModal = forwardRef(
  (
    { children, className, modalContent, customModal, title, icon, ...props },
    ref
  ) => {
    if (!modalContent) return children;

    return (
      <Modal triggerContent={children} className={className} background={icon}>
        {customModal ? (
          modalContent
        ) : (
          <CardModalText ref={ref} {...props}>
            {title && <h1>{title}</h1>}
            <section>{modalContent}</section>
          </CardModalText>
        )}
      </Modal>
    );
  }
);

CardModal.propTypes = {
  className: PropTypes.string,
  modalContent: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  title: PropTypes.string,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  customModal: PropTypes.bool,
};

CardModal.defaultProps = {
  customModal: false,
};
