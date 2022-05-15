import { PropTypes } from "prop-types";
import classNames from "classnames";
import { forwardRef } from "react";

export const CardOuter = forwardRef(
  ({ children, className, hasModal, link, ...props }, ref) => {
    const class_name = classNames(
      "card",
      { clickable: hasModal || link },
      className
    );

    if (hasModal)
      return (
        <article ref={ref} className={class_name} {...props}>
          {children}
        </article>
      );

    if (link)
      return link.startsWith("steam://") ? (
        <a ref={ref} className={class_name} href={link} {...props}>
          {children}
        </a>
      ) : (
        <a
          ref={ref}
          className={class_name}
          href={link}
          target="_blank"
          rel="noreferrer"
          {...props}
        >
          {children}
        </a>
      );

    return (
      <article ref={ref} className={class_name} {...props}>
        {children}
      </article>
    );
  }
);

CardOuter.propTypes = {
  className: PropTypes.string,
  hasModal: PropTypes.bool,
  link: PropTypes.string,
};
