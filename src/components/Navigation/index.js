import "./style.scss";

import { NavLink } from "react-router-dom";

export function Navigation(props) {
  return (
    <nav className="navigation">
      {props.routes.map((route) => (
        <NavLink
          key={route.name}
          to={route.path}
          className={({ isActive }) => "navigation-link" + (isActive ? " active" : "")}
        >
          <div className="name">{route.name}</div>
          <div className="underline"></div>
        </NavLink>
      ))}
    </nav>
  );
}
