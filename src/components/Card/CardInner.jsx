import { cloneElement, isValidElement, useMemo } from "react";

import PropTypes from "prop-types";
import classNames from "classnames";

export const CardInner = ({ children, icon }) => {
  const icon_element = useMemo(() => {
    if (!icon) return null;

    if (isValidElement(icon))
      return cloneElement(icon, {
        className: classNames("icon", icon.props.className),
      });

    return <img className="icon" src={icon} alt="" />;
  }, [icon]);

  return (
    <>
      {icon_element && icon_element}
      {children}
    </>
  );
};

CardInner.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

CardInner.defaultProps = {};
