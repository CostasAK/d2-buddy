import "./Button.scss";

import { forwardRef } from "react";

export const Button = forwardRef(({ className, href, children }, ref) => {
  return href.startsWith("steam://") ? (
    <a
      ref={ref}
      className={"button clickable" + (className ? className : "")}
      href={href}
    >
      <div className="button-inner">{children}</div>
    </a>
  ) : (
    <a
      ref={ref}
      className={"button clickable" + (className ? className : "")}
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      <div className="button-inner">{children}</div>
    </a>
  );
});
