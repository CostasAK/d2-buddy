import "./App.scss";

import Footer from "./components/Footer";
import Header from "./components/Header";
import { Links } from "./pages/Links/index";
import Main from "./components/Main";
import Navigation from "./components/Navigation";
import React from "react";
import { HashRouter as Router } from "react-router-dom";
import { Timers } from "./pages/Timers";

export default function App() {
  // Changes to routes should also go in site.webmanifest
  const routes = [
    { name: "Timers", path: "/Timers", component: <Timers /> },
    { name: "Links", path: "/Links", component: <Links /> },
  ];

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
