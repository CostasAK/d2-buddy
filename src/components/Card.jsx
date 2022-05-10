import "./Card.scss";
import "./Modal.scss";

import { cloneElement, isValidElement, useCallback, useMemo } from "react";

import Modal from "./Modal";
import PropTypes from "prop-types";

export default function Card({
  title,
  cardContent,
  modalContent,
  link,
  icon,
  className,
  floatIcon,
  order,
  ref,
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
      <>
        {icon_element && icon_element}
        {card_text}
      </>
    ),
    [icon_element]
  );

  const card_element = useCallback(
    (content) => {
      if (modalContent) {
        return (
          <article
            ref={ref}
            className={
              "card clickable " +
              className +
              " " +
              (floatIcon ? "floating-icon" : icon_element ? "side-icon" : "")
            }
            style={{ order }}
          >
            {content}
          </article>
        );
      } else if (link) {
        if (link.startsWith("steam://")) {
          return (
            <a
              ref={ref}
              className={
                "card clickable " +
                className +
                " " +
                (floatIcon ? "floating-icon" : icon_element ? "side-icon" : "")
              }
              href={link}
              style={{ order }}
            >
              {content}
            </a>
          );
        } else {
          return (
            <a
              ref={ref}
              className={
                "card clickable " +
                className +
                " " +
                (floatIcon ? "floating-icon" : icon_element ? "side-icon" : "")
              }
              href={link}
              target="_blank"
              rel="noreferrer"
              style={{ order }}
            >
              {content}
            </a>
          );
        }
      } else {
        return (
          <article
            ref={ref}
            className={
              "card " +
              className +
              " " +
              (floatIcon ? "floating-icon" : icon_element ? "side-icon" : "")
            }
            style={{ order }}
          >
            {content}
          </article>
        );
      }
    },
    [className, floatIcon, icon_element, link, modalContent, order, ref]
  );

  return modalContent ? (
    <Modal
      triggerContent={card_element(card_inner(card_text))}
      className={className}
      background={icon}
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
