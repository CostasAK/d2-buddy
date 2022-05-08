import "./Main.scss";

import { CSSTransition, TransitionGroup } from "react-transition-group";
import {
  Navigate,
  Route,
  Routes as Switch,
  useLocation,
} from "react-router-dom";

import Background from "./Background";

export default function Main({ routes }) {
  const location = useLocation();

  return (
    <TransitionGroup component={null}>
      <CSSTransition key={location.key} classNames="fade" timeout={250}>
        <main id="main">
          <Background key={location.key} />
          <Switch location={location}>
            <Route exact path="/" element={<Navigate to="/Timers" />} />
            {routes.map((route) => (
              <Route
                key={route.name}
                path={route.path}
                element={<div id="page-content">{route.component}</div>}
              />
            ))}
          </Switch>
        </main>
      </CSSTransition>
    </TransitionGroup>
  );
}
