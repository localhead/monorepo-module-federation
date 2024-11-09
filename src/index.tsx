import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { App } from "./App";

import { createRoot } from "react-dom/client";

const container = document.getElementById("root")!;
const root = createRoot(container);

const router = createBrowserRouter([
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
]);

root.render(<RouterProvider router={router} />);
