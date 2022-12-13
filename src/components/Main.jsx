import "./Main.scss";

import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";

import Background from "./Background";

function MainInner({ children }) {
  const location = useLocation();
  return (
    <TransitionGroup component={null}>
      <CSSTransition key={location.key} classNames="fade" timeout={250}>
        <div className="main-inner">
          <Background key={location.key} />
          <div className="page-content">{children}</div>
        </div>
      </CSSTransition>
    </TransitionGroup>
  );
}

export default function Main({ routes }) {
  return (
    <main id="main">
      <Routes>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<MainInner>{route.component}</MainInner>}
          />
        ))}
        <Route path="*" element={<Navigate to="Timers" replace />} />
      </Routes>
    </main>
  );
}
