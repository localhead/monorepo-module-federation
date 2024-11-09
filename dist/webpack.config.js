import path from "path";
import { buildWebpack } from "./config/build/buildWebpack";
export default (function (env) {
    var _a, _b, _c, _d;
    var config = buildWebpack({
        mode: (_a = env.mode) !== null && _a !== void 0 ? _a : "development",
        paths: {
            entry: path.resolve(__dirname, "src", "index.tsx"),
            html: path.resolve(__dirname, "public", "index.html"),
            output: path.resolve(__dirname, "build"),
            alias: {
                "@pages": path.resolve(__dirname, "src/pages"),
                "@utils": path.resolve(__dirname, "src/utils"),
                "@assets": path.resolve(__dirname, "src/assets"),
                "@packages": path.resolve(__dirname, "src/packages"),
            },
        },
        port: (_b = env.port) !== null && _b !== void 0 ? _b : 3000,
        analyzer: (_c = env.analyzer) !== null && _c !== void 0 ? _c : false,
        platform: (_d = env.platform) !== null && _d !== void 0 ? _d : "desktop",
    });
    return config;
});
