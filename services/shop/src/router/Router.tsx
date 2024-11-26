import { ShopPage } from "@pages/ShopPage";
import { createBrowserRouter } from "react-router-dom";
import { App } from "../App";

const routes = [
  {
    path: "/shop",
    element: <App />,
    children: [
      {
        path: "/shop",
        element: <ShopPage />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);

export default routes;
