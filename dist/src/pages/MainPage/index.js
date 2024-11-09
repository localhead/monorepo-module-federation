var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import placeholder from "@assets/images/placeholderImageGray.png";
import { AlarmIcon } from "@packages/icons";
import { StyledMainPage } from "./styles";
var _MainPage = function (props) {
    var restProps = __rest(props, []);
    return (_jsxs(StyledMainPage, __assign({}, restProps, { children: [_jsx("img", { src: placeholder, width: 75, height: 50 }), _jsx(AlarmIcon, { size: 50, color: "black" }), _jsx("h3", { children: __PLATFORM__ })] })));
};
export var MainPage = memo(_MainPage);
