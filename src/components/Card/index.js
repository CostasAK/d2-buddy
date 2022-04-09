import "./style.scss";

import Popup from "reactjs-popup";
import ReactTooltip from "react-tooltip";
import parse from "html-react-parser";

const Card = (props) => {
  let short_description =
    typeof props.shortDescription === "string" ||
    props.shortDescription instanceof String
      ? parse(props.shortDescription)
      : props.shortDescription;

  let long_description =
    typeof props.longDescription === "string" ||
    props.longDescription instanceof String
      ? parse(props.longDescription)
      : props.longDescription;

  const content = (
    <article className="content">
      {props.logo && (
        <img src={props.logo} alt="" className="logo" align="left" />
      )}
      <section className="cardText">
        {props.title && (
          <h1 className="title">
            {props.icon && <div className="icon">{props.icon} </div>}
            {props.title}
          </h1>
        )}
        {props.shortDescription && (
          <section className="short_description">{short_description}</section>
        )}
      </section>
    </article>
  );

  const modal_content = (
    <div className="content">
      {props.logo && (
        <img src={props.logo} alt="" className="logo" align="left" />
      )}
      <div className="cardText">
        {props.title && (
          <h2 className="title">
            {props.icon && <div className="icon">{props.icon} </div>}
            {props.title}
          </h2>
        )}
        {props.longDescription && (
          <p className="long_description">{long_description}</p>
        )}
      </div>
    </div>
  );

  return (
    <div
      className={"CardWrapper " + (props.className ? props.className : "")}
      style={props.order && { order: props.order }}
    >
      {props.longDescription ? (
        <Popup
          trigger={
            <div className="Card clickable" onClose={() => ReactTooltip.hide()}>
              {content}
            </div>
          }
          modal
        >
          <div className="CardModal">{modal_content}</div>
        </Popup>
      ) : props.link ? (
        <a
          className="Card clickable"
          href={props.link}
          target="_blank"
          rel="noreferrer"
        >
          {content}
        </a>
      ) : (
        <div className="Card">{content}</div>
      )}
    </div>
  );
};

export default Card;
