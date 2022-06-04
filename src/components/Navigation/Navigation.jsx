import { NavigationLink } from "./NavigationLink";
import { PropTypes } from "prop-types";
import { StyledNav } from "./NavigationStyle";

export default function Navigation({ routes }) {
  return (
    <StyledNav id="navigation">
      <ul>
        {routes
          .filter((route) => route.name !== "Root")
          .map((route) => (
            <li key={route.name}>
              <NavigationLink path={route.path}>{route.name}</NavigationLink>
            </li>
          ))}
      </ul>
    </StyledNav>
  );
}

Navigation.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.object),
};
