export function buildResolvers(options) {
    var paths = options.paths;
    return {
        // настройка TS
        extensions: [".tsx", ".ts", ".js", ".jsx"],
        alias: paths.alias,
    };
}
