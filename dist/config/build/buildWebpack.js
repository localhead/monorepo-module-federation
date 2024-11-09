import { buildDevServers } from "./buildDevServers";
import { buildLoaders } from "./buildLoaders";
import { buildPlugins } from "./buildPlugins";
import { buildResolvers } from "./buildResolvers";
export function buildWebpack(options) {
    var paths = options.paths, mode = options.mode;
    var isDev = mode === "development";
    var isProd = mode === "production";
    return {
        // настройка переменной окружения. В дев режиме бандл будет читабельный, в проде - максимально сжатый
        mode: mode !== null && mode !== void 0 ? mode : "development",
        // точка входа, откуда вебпак будет брать исходный код
        entry: paths.entry,
        // точка выхода куда вебпак будет все выгружать финальную сборку
        output: {
            path: paths.output,
            // название файла будет каждый раз новое, чтобы браузер обновлял кэш. contenthash - шаблон.
            filename: "[name].[contenthash].js",
            // флаг который просто стирает старые файлы каждый билд
            clean: true,
        },
        plugins: buildPlugins(options),
        // Настройка лоудеров. Нужно чтобы вебпак работал с расширениями помимо JS
        module: {
            // настройка TS. Это loader-TS умеет обрабатывать так же и JSX. Но если бы писали без TS - то пришлось бы ставить babel-loader
            rules: buildLoaders(options),
        },
        resolve: buildResolvers(options),
        devtool: isDev && "inline-source-map",
        // настройка сервера. Смотрим в лайв режиме за изменениями. Он нужен только isDev сборке.
        devServer: isDev ? buildDevServers(options) : undefined,
    };
}
