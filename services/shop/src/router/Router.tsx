import { App } from "@/App";
import { createBrowserRouter } from "react-router-dom";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/about",
        element: <div>About</div>,
      },
    ],
  },
];
export const router = createBrowserRouter(routes);

export default routes;
