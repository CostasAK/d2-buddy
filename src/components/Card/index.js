import Popup from "reactjs-popup";
import "./style.scss";

const Card = (props) => {
  const content = (
    <div className="content">
      {props.logo && <img src={props.logo} alt="" />}
      <div className="cardText">
        {props.title && (
          <h2 className="title">
            {props.icon && <div className="icon">{props.icon} </div>}
            {props.title}
          </h2>
        )}
        {props.shortDescription && (
          <p className="short_description">{props.shortDescription}</p>
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
        <Popup trigger={<div className="Card">{content}</div>} modal>
          <div className="CardModal clickable">{content}</div>
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
