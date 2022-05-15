import "./Card.scss";

import { CardInner } from "./CardInner";
import { CardModal } from "./CardModal";
import { CardOuter } from "./CardOuter";
import PropTypes from "prop-types";
import classNames from "classnames";
import { forwardRef } from "react";

export const Card = forwardRef(
  (
    {
      title,
      titleRule,
      cardContent,
      modalContent,
      customModal,
      link,
      icon,
      className,
      floatIcon,
      order,
    },
    ref
  ) => {
    return (
      <CardModal
        className={className}
        modalContent={modalContent}
        title={title}
        icon={icon}
        customModal={customModal}
      >
        <CardOuter
          className={classNames(className, {
            "floating-icon": floatIcon,
            "side-icon": !floatIcon && icon,
          })}
          hasModal={!!modalContent}
          link={link}
          style={{ order }}
        >
          <CardInner
            icon={icon}
            title={title}
            titleRule={titleRule === undefined ? !floatIcon : titleRule}
          >
            {cardContent}
          </CardInner>
        </CardOuter>
      </CardModal>
    );
  }
);

Card.propTypes = {
  title: PropTypes.string,
  titleRule: PropTypes.bool,
  cardContent: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  modalContent: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  link: PropTypes.string,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  className: PropTypes.string,
  floatIcon: PropTypes.bool,
  customModal: PropTypes.bool,
};

Card.defaultProps = {
  floatIcon: false,
  customModal: false,
};
