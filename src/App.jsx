import "./App.scss";

import React, { Suspense, lazy } from "react";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Loading from "./components/Loading";
// import Links from "./pages/Links/index";
import Main from "./components/Main";
import Navigation from "./components/Navigation";
import { HashRouter as Router } from "react-router-dom";
import { Timers } from "./pages/Timers";

const Links = lazy(() => import("./pages/Links/index"));

// Changes to routes should also go in site.webmanifest
const routes = [
  {
    name: "Timers",
    path: "/Timers",
    component: <Timers />,
  },
  {
    name: "Links",
    path: "/Links",
    component: <Links />,
  },
].map((route) => {
  route.component = (
    <Suspense fallback={<Loading size="page" />}>{route.component}</Suspense>
  );
  return route;
});

export default function App() {
  return (
    <div id="app">
      <Header />

      <Router>
        <Navigation routes={routes} />

        <Main routes={routes} />
      </Router>

      <Footer />
    </div>
  );
}
