import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

import { ErrorPage } from "pages/ErrorPage";
import Root from "layout/Root";
import { pascalCase } from "functions/pascalCase";
import { useDailyResetRefetch } from "./hooks/useDailyResetRefetch";

const formatTitleAndPath = (child) => {
  if (!child.index && !child.path && !!child.title) {
    child.path = pascalCase(child.title);
    child.title = child.title
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
      {
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <Navigate to="/Timers" /> },
          {
            title: "Timers",
            lazy: () => import("pages/Timers"),
            children: [
              {
                lazy: () => import("components/SideDialog"),
                children: [
                  {
                    errorElement: <ErrorPage />,
                    children: [
                      {
                        path: ":to",
                        lazy: () => import("pages/Timers/children"),
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            title: "Links",
            lazy: () => import("pages/Links"),
          },
          {
            path: "Weapon/:hash",
            lazy: () => import("pages/WeaponPage"),
          },
        ].map(formatTitleAndPath),
      },
    ],
  },
];

// Changes to routes should also go in site.webmanifest
export const router = createBrowserRouter(routes);

export default function App() {
  useDailyResetRefetch();

  return <RouterProvider router={router} fallbackElement={<Root />} />;
}
