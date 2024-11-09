import { BuildOptions } from "./types/types";

export function buildDevServers(options: BuildOptions) {
  return {
    port: options.port ?? 5000,
    open: true,
    historyApiFallback: true, // This line is important for React Router
    // Флаг который позволяет не перезагружать страницу при каждом чихе.
    // Но он нифига не работает, поэтому нужно ставить отдельный плагин - react-refresh-webpack-plugin
    hot: true,
  };
}
