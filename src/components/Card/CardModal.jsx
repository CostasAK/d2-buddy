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
          <article ref={ref} className="modal-text" {...props}>
            {title && <h1 className="title">{title}</h1>}
            <section className="modal-content">{modalContent}</section>
          </article>
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
