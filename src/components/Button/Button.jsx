import "./Button.scss";

import A from "../A";
import { forwardRef } from "react";

export const Button = forwardRef(({ className, href, children }, ref) => {
  return (
    <A
      ref={ref}
      className={"button clickable" + (className ? className : "")}
      href={href}
    >
      <div className="button-inner">{children}</div>
    </A>
  );
});
