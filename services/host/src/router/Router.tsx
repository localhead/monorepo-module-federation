import { MainPage } from "@pages/MainPage";
import { createBrowserRouter } from "react-router-dom";
import { App } from "../App";
// @ts-ignore
import adminRoutes from "admin/Router";
// @ts-ignore
import shopRoutes from "shop/Router";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      ...shopRoutes,
      ...adminRoutes,
    ],
  },
];

export const router = createBrowserRouter(routes);
