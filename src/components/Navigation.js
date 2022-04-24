import "./Navigation.scss";

import { NavLink } from "react-router-dom";
import { PropTypes } from "prop-types";

function Navigation({ routes }) {
  return (
    <nav className="navigation">
      {routes.map((route) => (
        <NavLink
          key={route.name}
          to={route.path}
          className={({ isActive }) =>
            "navigation-link" + (isActive ? " active" : "")
          }
        >
          <div className="name">{route.name}</div>
          <div className="underline"></div>
        </NavLink>
      ))}
    </nav>
  );
}

Navigation.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.object),
};

export { Navigation };
