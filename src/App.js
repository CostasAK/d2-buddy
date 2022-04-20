import "./App.scss";

import {
  Navigate,
  Route,
  HashRouter as Router,
  Routes as Switch,
} from "react-router-dom";

import DIMSearches from "./pages/DIMSearches";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Links } from "./pages/Links";
import { Navigation } from "./components/Navigation";
import React from "react";
import { Timers } from "./pages/Timers";

function App() {
  // Changes to routes should also go in site.webmanifest
  const routes = [
    { name: "Timers", path: "/Timers", component: <Timers /> },
    { name: "DIM Searches", path: "/DIMSearches", component: <DIMSearches /> },
    {
      name: "Links",
      path: "/Links",
      component: <Links />,
    },
  ];

  return (
    <>
      <Header />

      <Router>
        <Navigation routes={routes} />

        <main className="main">
          <Switch>
            <Route exact path="/" element={<Navigate to="/Timers" />} />
            {routes.map((route) => (
              <Route
                key={route.name}
                path={route.path}
                element={route.component}
              />
            ))}
          </Switch>
        </main>
      </Router>

      <Footer />
    </>
  );
}

export default App;
