export function buildDevServers(options) {
    var _a;
    return {
        port: (_a = options.port) !== null && _a !== void 0 ? _a : 5000,
        open: true,
        historyApiFallback: true, // This line is important for React Router
        hot: true,
    };
}
