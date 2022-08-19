import "./App.scss";

import { Suspense, lazy } from "react";

import AppBar from "layout/AppBar";
import Footer from "./layout/Footer";
import Loading from "./components/Loading";
import Main from "./components/Main";
import { HashRouter as Router } from "react-router-dom";
import { useDailyResetRefetch } from "./hooks/useDailyResetRefetch";

const Timers = lazy(() => import("./pages/Timers"));
const Links = lazy(() => import("./pages/Links"));
const DimSearchBuilder = lazy(() => import("./pages/DimSearchBuilder"));

// Changes to routes should also go in site.webmanifest
const routes = [
  {
    name: "Timers",
    component: <Timers />,
  },
  {
    name: "DIM Search Builder",
    component: <DimSearchBuilder />,
  },
  {
    name: "Links",
    component: <Links />,
  },
].map((route) => {
  route.component = (
    <Suspense fallback={<Loading size="page" />}>{route.component}</Suspense>
  );
  route.path = (" " + route.name)
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]+(.)/g, (match, char) => char.toUpperCase());
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
