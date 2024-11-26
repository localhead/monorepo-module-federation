import { RouterProvider } from "react-router-dom";

import { createRoot } from "react-dom/client";
import { router } from "./router/Router";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(<RouterProvider router={router} />);
