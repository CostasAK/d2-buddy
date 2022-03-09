import "./style.scss";

export function Card(props) {
  const content = (
    <div className="content">
      {props.logo && <img src={props.logo} alt="" />}
      <div className="cardText">
        {props.title && <h2 className="title">{props.title}</h2>}
        {props.shortDescription && (
          <p className="short_description">{props.shortDescription}</p>
        )}
      </div>
    </div>
  );
  return props.link ? (
    <a className={"Card"} href={props.link} target="_blank" rel="noreferrer">
      {content}
    </a>
  ) : (
    <div className={"Card"}>{content}</div>
  );
}
