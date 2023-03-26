import { lazy, Suspense } from "react";
import {
  HashRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import { Box } from "@mui/material";
import AppBar from "layout/AppBar";
import { BackToTopButton } from "layout/AppBar/BackToTopButton";
import Background from "layout/Background";
import Page from "layout/Page";
import Loading from "./components/Loading";
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
    <Box
      sx={{
        height: "100vh",
        display: "grid",
        gridTemplateColumns: "1fr",
        gridTemplateRows: "auto 1fr auto",
        alignItems: "stretch",
      }}
    >
      <Router>
        <Background />
        <AppBar routes={routes} />

        <Routes>
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={
                <Page title={route.name} description={route.description}>
                  {route.component}
                </Page>
              }
            />
          ))}
          <Route path="*" element={<Navigate to="Timers" replace />} />
        </Routes>
      </Router>

      <Footer />
      <BackToTopButton />
    </Box>
  );
}
