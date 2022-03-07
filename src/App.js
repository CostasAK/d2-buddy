import React from "react";
import {
  HashRouter as Router,
  Navigate,
  Route,
  Routes as Switch,
} from "react-router-dom";
import "./App.scss";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Navigation } from "./components/Navigation";
import { Timers } from "./components/Timers";

function App() {
  const routes = [{ name: "Timers", path: "/Timers", component: <Timers /> }];

  return (
    <div className="App">
      <Header />

      <Router>
        <Navigation routes={routes} />

        <main className="main">
          <Switch>
            <Route exact path="/" element={<Navigate to="/Timers" />} />
            {routes.map((route) => (
              <Route path={route.path} element={route.component} />
            ))}
          </Switch>
        </main>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
