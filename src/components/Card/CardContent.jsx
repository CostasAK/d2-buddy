import PropTypes from "prop-types";

export const CardContent = ({ children, title, ...props }) => {
  return (
    <>
      {title && <h4 className="title">{title}</h4>}
      {children && <section className="card-content">{children}</section>}
    </>
  );
};

CardContent.propTypes = {
  title: PropTypes.string,
};

CardContent.defaultProps = {};
