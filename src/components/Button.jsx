import "./Button.scss";

export default function Button({ className, href, children }) {
  return href.startsWith("steam://") ? (
    <a
      className={"button clickable" + (className ? className : "")}
      href={href}
    >
      <div className="button-inner">{children}</div>
    </a>
  ) : (
    <a
      className={"button clickable" + (className ? className : "")}
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      <div className="button-inner">{children}</div>
    </a>
  );
}
