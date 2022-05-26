import { PropTypes } from "prop-types";
import { StyledArticle } from "./CardOuterStyle";
import { forwardRef } from "react";

export const CardOuter = forwardRef(
  ({ children, hasModal, href, ...props }, ref) => {
    if (hasModal)
      return (
        <StyledArticle ref={ref} hasModal={hasModal} {...props}>
          {children}
        </StyledArticle>
      );

    if (href)
      return href.startsWith("steam://") ? (
        <StyledArticle as="a" ref={ref} href={href} {...props}>
          {children}
        </StyledArticle>
      ) : (
        <StyledArticle
          as="a"
          ref={ref}
          href={href}
          target="_blank"
          rel="noreferrer"
          {...props}
        >
          {children}
        </StyledArticle>
      );

    return (
      <StyledArticle ref={ref} {...props}>
        {children}
      </StyledArticle>
    );
  }
);

CardOuter.propTypes = {
  className: PropTypes.string,
  hasModal: PropTypes.bool,
  href: PropTypes.string,
};
