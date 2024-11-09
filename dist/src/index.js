import { jsx as _jsx } from "react/jsx-runtime";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { App } from "./App";
import { createRoot } from "react-dom/client";
var container = document.getElementById("root");
var root = createRoot(container);
var router = createBrowserRouter([
    {
        path: "/",
        element: _jsx(App, {}),
        children: [
            {
                path: "/about",
                element: _jsx("div", { children: "About" }),
            },
        ],
    },
]);
root.render(_jsx(RouterProvider, { router: router }));
