import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

import { ErrorPage } from "pages/ErrorPage";
import Root from "layout/Root";
import Timers from "pages/Timers";
import { pascalCase } from "functions/pascalCase";
import { useDailyResetRefetch } from "./hooks/useDailyResetRefetch";

const formatNameAndPath = (child) => {
  if (!child.index) {
    child.path = pascalCase(child.name) + "/*";
    child.name = child.name
      .split(/\s*\n\s*/)
      .reduce((previous, current) => [...previous, <br />, current], [])
      .splice(1);
  }
  return child;
};

export const routes = [
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Navigate to="/Timers" /> },
      { name: "Timers", element: <Timers /> },
      { name: "Links", lazy: () => import("./pages/Links") },
    ].map(formatNameAndPath),
  },
];

// Changes to routes should also go in site.webmanifest
export const router = createBrowserRouter(routes);

export default function App() {
  useDailyResetRefetch();

  return <RouterProvider router={router} fallbackElement={<Root />} />;
}
