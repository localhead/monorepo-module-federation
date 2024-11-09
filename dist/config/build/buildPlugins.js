import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
export function buildPlugins(options) {
    var mode = options.mode, paths = options.paths, analyzer = options.analyzer, platform = options.platform;
    var isDev = mode === "development";
    var isProd = mode === "production";
    var plugins = [
        // плагин который отвечает за обработку html. Он подставляет скрипты в финальную HTML
        new HtmlWebpackPlugin({
            template: paths.html,
        }),
        // Плагин который дает возможность пользоваться переменными окружения в проекте.
        new webpack.DefinePlugin({
            __MODE__: JSON.stringify(mode),
            __PLATFORM__: JSON.stringify(platform),
        }),
        new ForkTsCheckerWebpackPlugin(),
    ];
    // ProgressPlugin -бестолковый плагин который в терминале показывает % готовности бандла. Сильно тормозит сборку. Использовать только на "development"
    if (isDev) {
        plugins.push(new webpack.ProgressPlugin());
    }
    if (isProd && analyzer) {
        plugins.push(new BundleAnalyzerPlugin());
    }
    if (isProd) {
        // плагины для прод режима
    }
    return plugins;
}
