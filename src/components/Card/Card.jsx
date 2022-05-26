import { CardInner } from "./CardInner";
import { CardModal } from "./CardModal";
import { CardOuter } from "./CardOuter";
import PropTypes from "prop-types";
import { forwardRef } from "react";

export const Card = forwardRef(
  (
    {
      title,
      titleRule,
      children,
      modalContent,
      customModal,
      link,
      icon,
      className,
      floatIcon,
      highlight,
      ...props
    },
    ref
  ) => (
    <CardModal
      className={className}
      modalContent={modalContent}
      title={title}
      icon={icon}
      customModal={customModal}
    >
      <CardOuter
        ref={ref}
        hasModal={!!modalContent}
        href={link}
        icon={icon}
        floatIcon={floatIcon}
        highlight={highlight}
        {...props}
      >
        <CardInner
          icon={icon}
          floatIcon={floatIcon}
          title={title}
          titleRule={titleRule === undefined ? !floatIcon : titleRule}
        >
          {children}
        </CardInner>
      </CardOuter>
    </CardModal>
  )
);

Card.propTypes = {
  title: PropTypes.string,
  titleRule: PropTypes.bool,
  modalContent: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    ),
  ]),
  link: PropTypes.string,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  className: PropTypes.string,
  floatIcon: PropTypes.bool,
  highlight: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  customModal: PropTypes.bool,
};

Card.defaultProps = {
  floatIcon: false,
  highlight: false,
  customModal: false,
};
