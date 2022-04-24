import "./Card.scss";
import "./Modal.scss";

import { cloneElement, isValidElement, useCallback, useMemo } from "react";

import { Modal } from "./Modal";
import PropTypes from "prop-types";

function Card({
  title,
  cardContent,
  modalContent,
  link,
  icon,
  className,
  floatIcon,
  order,
}) {
  const card_text = useMemo(
    () => (
      <>
        {title && <h4 className="title">{title}</h4>}
        {cardContent && (
          <section className="card-content">{cardContent}</section>
        )}
      </>
    ),
    [cardContent, title]
  );

  const icon_element = useMemo(() => {
    if (icon) {
      return isValidElement(icon) ? (
        cloneElement(icon, {
          className: "icon " + (icon.props.className || ""),
        })
      ) : (
        <img className="icon" src={icon} alt="" />
      );
    }
    return null;
  }, [icon]);

  const card_inner = useCallback(
    (card_text) => (
      <article
        className={
          "card-text " +
          (floatIcon ? "floating-icon" : icon_element ? "side-icon" : "")
        }
      >
        {icon_element ? (
          floatIcon ? (
            <>
              {icon_element}
              <section>{card_text}</section>
            </>
          ) : (
            <>
              <div className="icon-wrapper">{icon_element}</div>
              <div className="text-wrapper">{card_text}</div>
            </>
          )
        ) : (
          card_text
        )}
      </article>
    ),
    [floatIcon, icon_element]
  );

  const card_element = useCallback(
    (content) => {
      if (modalContent) {
        return (
          <div className={"card clickable " + className} style={{ order }}>
            {content}
          </div>
        );
      } else if (link) {
        return (
          <a
            className={"card clickable " + className}
            href={link}
            target="_blank"
            rel="noreferrer"
            style={{ order }}
          >
            {content}
          </a>
        );
      } else {
        return (
          <div className={"card " + className} style={{ order }}>
            {content}
          </div>
        );
      }
    },
    [className, link, modalContent, order]
  );

  return modalContent ? (
    <Modal
      triggerContent={card_element(card_inner(card_text))}
      className={className}
    >
      <article className="modal-text">
        {title && <h1 className="title">{title}</h1>}
        {modalContent && (
          <section className="modal-content">{modalContent}</section>
        )}
      </article>
    </Modal>
  ) : (
    card_element(card_inner(card_text))
  );
}

Card.propTypes = {
  title: PropTypes.string,
  cardContent: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  modalContent: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  link: PropTypes.string,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  className: PropTypes.string,
  floatIcon: PropTypes.bool,
};

Card.defaultProps = {
  floatIcon: false,
};

export { Card };
