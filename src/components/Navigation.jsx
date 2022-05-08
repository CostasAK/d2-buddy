import "./Navigation.scss";

import { NavLink } from "react-router-dom";
import { PropTypes } from "prop-types";

export default function Navigation({ routes }) {
  return (
    <nav className="navigation">
      <ul>
        {routes.map((route) => (
          <li key={route.name}>
            <NavLink
              to={route.path}
              className={({ isActive }) =>
                "navigation-link" + (isActive ? " active" : "")
              }
            >
              {route.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

Navigation.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.object),
};