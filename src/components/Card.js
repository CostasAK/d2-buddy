import "./Card.scss";
import "./Modal.scss";

import { useCallback, useMemo } from "react";

import Modal from "./Modal";

const Card = ({ title, cardContent, modalContent, link, icon, className }) => {
  const card_text = useMemo(
    () => (
      <article className="card-text">
        {title && <h4 className="title">{title}</h4>}
        {cardContent && (
          <section className="card-content">{cardContent}</section>
        )}
      </article>
    ),
    [cardContent, title]
  );

  const card_element = useCallback(
    (content) => {
      if (modalContent) {
        return <div className={"card clickable " + className}>{content}</div>;
      } else if (link) {
        return (
          <a
            className={"card clickable " + className}
            href={link}
            target="_blank"
            rel="noreferrer"
          >
            {content}
          </a>
        );
      } else {
        return <div className={"card " + className}>{content}</div>;
      }
    },
    [className, link, modalContent]
  );

  return modalContent ? (
    <Modal triggerContent={card_element(card_text)}>
      <article className="modal-text">
        {title && <h1 className="title">{title}</h1>}
        {modalContent && (
          <section className="modal-content">{modalContent}</section>
        )}
      </article>
    </Modal>
  ) : (
    card_element(card_text)
  );
};

export default Card;
