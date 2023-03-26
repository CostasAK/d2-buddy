import "./App.scss";

import { lazy, Suspense } from "react";

import AppBar from "layout/AppBar";
import { HashRouter as Router } from "react-router-dom";
import Loading from "./components/Loading";
import Main from "./components/Main";
import { useDailyResetRefetch } from "./hooks/useDailyResetRefetch";
import Footer from "./layout/Footer";

const Timers = lazy(() => import("./pages/Timers"));
const Links = lazy(() => import("./pages/Links"));

// Changes to routes should also go in site.webmanifest
const routes = [
  {
    name: "Timers",
    component: <Timers />,
  },
  {
    name: "Links",
    description:
      "I have no affiliation with the sites listed. I just think they're great.",
    component: <Links />,
  },
].map((route) => {
  route.component = (
    <Suspense fallback={<Loading size="page" />}>{route.component}</Suspense>
  );
  route.path = (" " + route.name)
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]+(.)/g, (match, char) => char.toUpperCase());
  route.name = route.name
    .split(/\s*\n\s*/)
    .reduce((previous, current) => [...previous, <br />, current], [])
    .splice(1);
  return route;
});

export default function App() {
  useDailyResetRefetch();

  return (
    <>
      <Router>
        <AppBar routes={routes} />

        <Main routes={routes} />
      </Router>

      <Footer />
    </>
  );
}
