import { AdminPage } from "@pages/AdminPage";
import { createBrowserRouter } from "react-router-dom";
import { App } from "../App";

const routes = [
  {
    path: "/admin",
    element: <App />,
    children: [
      {
        path: "/admin",
        element: <AdminPage />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);

export default routes;
