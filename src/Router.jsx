import { Navigate, createBrowserRouter } from "react-router-dom";

import { formatRouteTitleAndPath } from "functions/formatRouteTitleAndPath";
import Root from "layout/Root";
import { ErrorPage } from "pages/ErrorPage";
import { RouterProvider } from "react-router-dom";

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
            path: "Weapons/:hash",
            lazy: () => import("pages/WeaponPage"),
          },
        ].map(formatRouteTitleAndPath),
      },
    ],
  },
];

// Changes to routes should also go in site.webmanifest
const router = createBrowserRouter(routes);

export default function Router() {
  return <RouterProvider router={router} fallbackElement={<Root />} />;
}
