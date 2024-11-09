import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { MainPage } from "@pages/MainPage";
import { GlobalStyle } from "@utils/globalStyle";
import { Outlet } from "react-router-dom";
export var App = function () {
    return (_jsxs("div", { className: "App", children: [_jsx(GlobalStyle, {}), _jsx(MainPage, {}), _jsx(Outlet, {})] }));
};
