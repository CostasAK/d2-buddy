import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

import Links from "pages/Links";
import Root from "layout/Root";
import Timers from "pages/Timers";
import { useDailyResetRefetch } from "./hooks/useDailyResetRefetch";

export const routes = [
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Navigate to="/Timers" /> },
      { name: "Timers", element: <Timers /> },
      { name: "Links", element: <Links /> },
    ].map((child) => {
      if (!child.index) {
        child.path = (" " + child.name)
          .toLowerCase()
          .replace(/[^a-zA-Z0-9]+(.)/g, (match, char) => char.toUpperCase());
        child.name = child.name
          .split(/\s*\n\s*/)
          .reduce((previous, current) => [...previous, <br />, current], [])
          .splice(1);
      }
      return child;
    }),
  },
];

// Changes to routes should also go in site.webmanifest
export const router = createBrowserRouter(routes);

export default function App() {
  useDailyResetRefetch();

  return <RouterProvider router={router} />;
}
