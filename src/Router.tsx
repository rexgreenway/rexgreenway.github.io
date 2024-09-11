import { createHashRouter, Navigate, RouterProvider } from "react-router-dom";

import routes from "./routes";

const router = createHashRouter([
  {
    path: "/",
    errorElement: <h1>Something Went Wrong</h1>,
    children: [
      { index: true, element: <Navigate to={routes[0].path!} replace /> },
      ...routes,
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
