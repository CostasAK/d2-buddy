import "./style.scss"

import { OverlayScrollbarsComponent } from "overlayscrollbars-react"
import Popup from "reactjs-popup"
import ReactTooltip from "react-tooltip"
import parse from "html-react-parser"

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
      <section className="card-text">
        {props.title && (
          <h4 className="title">
            {props.icon && <div className="icon">{props.icon} </div>}
            {props.title}
          </h4>
        )}
        {props.shortDescription && (
          <section className="short-description">{short_description}</section>
        )}
      </section>
    </article>
  );

  const modal_content = (
    <div className="content">
      {props.logo && (
        <img src={props.logo} alt="" className="logo" align="left" />
      )}
      <div className="card-text">
        {props.title && (
          <h1 className="title">
            {props.icon && <div className="icon">{props.icon} </div>}
            {props.title}
          </h1>
        )}
        {props.longDescription && (
          <p className="long-description">{long_description}</p>
        )}
      </div>
    </div>
  );

  return (
    <div
      className={"card-wrapper " + (props.className ? props.className : "")}
      style={props.order && { order: props.order }}
    >
      {props.longDescription ? (
        <Popup
          trigger={
            <div className="card clickable" onClose={() => ReactTooltip.hide()}>
              {content}
            </div>
          }
          modal
        >
          <OverlayScrollbarsComponent className="card-modal os-theme-light">
            {modal_content}
          </OverlayScrollbarsComponent>
        </Popup>
      ) : props.link ? (
        <a
          className="card clickable"
          href={props.link}
          target="_blank"
          rel="noreferrer"
        >
          {content}
        </a>
      ) : (
        <div className="card">{content}</div>
      )}
    </div>
  );
};

export default Card;
