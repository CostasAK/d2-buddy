import { StyledSection, StyledTitle } from "./CardInnerStyle.js";
import { isValidElement, useMemo } from "react";

import Img from "../Img";
import { PropTypes } from "prop-types";

export const CardInner = ({ children, title, titleRule, icon }) => {
  const icon_element = useMemo(() => {
    if (!icon) return null;

    if (isValidElement(icon)) return icon;

    return <Img src={icon} />;
  }, [icon]);

  return (
    <>
      {icon_element && icon_element}
      {title && <StyledTitle titleRule={titleRule}>{title}</StyledTitle>}
      {children && <StyledSection>{children}</StyledSection>}
    </>
  );
};

CardInner.propTypes = {
  title: PropTypes.string,
  titleRule: PropTypes.bool,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

CardInner.defaultProps = {
  titleRule: false,
};
