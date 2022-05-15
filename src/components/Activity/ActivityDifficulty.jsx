import PropTypes from "prop-types";
import classNames from "classnames";
import { forwardRef } from "react";

export const ActivityDifficulty = forwardRef(
  ({ className, data, ...props }, ref) => {
    const difficulty = data?.Response?.selectionScreenDisplayProperties?.name;
    return (
      <h2
        ref={ref}
        className={classNames(
          "activity-difficulty",
          difficulty.toLowerCase(),
          className
        )}
        {...props}
      >
        {difficulty}
      </h2>
    );
  }
);

ActivityDifficulty.propTypes = {
  className: PropTypes.string,
  data: PropTypes.object.isRequired,
};

ActivityDifficulty.defaultProps = {};
