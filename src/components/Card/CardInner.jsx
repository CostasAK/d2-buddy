import { StyledIcon, StyledSection, StyledTitle } from "./CardInnerStyle.js";

import { PropTypes } from "prop-types";
import { useMemo } from "react";

export const CardInner = ({ children, title, titleRule, floatIcon, icon }) => {
  const icon_element = useMemo(() => {
    if (!icon) return null;

    return <StyledIcon $floatIcon={floatIcon} src={icon} />;
  }, [floatIcon, icon]);

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
