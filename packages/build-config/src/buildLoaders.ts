import { ModuleOptions } from "webpack";
import { BuildOptions } from "./types/types";
const ReactRefreshTypeScript = require("react-refresh-typescript");

export function buildLoaders(options: BuildOptions): ModuleOptions["rules"] {
  const { mode } = options;

  const isDev = mode === "development";

  const tsLoader = {
    test: /\.tsx?$/,
    exclude: /node_modules/,
    use: [
      {
        loader: "ts-loader",
        options: {
          // Плагин который не будет рефрешить стр. при каждом чихе
          getCustomTransformers: () => ({
            before: isDev ? [ReactRefreshTypeScript()] : [],
          }),
          // true - не будет проверять типы перед билдом. Билд будет быстрее. Но придется перед билдом проверять type-check-ом
          transpileOnly: true,
        },
      },
    ],
  };

  const assetsLoader = {
    test: /\.(png|jpg|jpeg|gif)$/i,
    type: "asset/resource",
  };

  const svgrLoader = {
    test: /\.svg$/i,
    use: [
      {
        loader: "@svgr/webpack",
        options: {
          icon: true,
          svgoConfig: {
            plugins: [
              {
                name: "convertColors",
                params: {
                  currentColor: true,
                },
              },
            ],
          },
        },
      },
    ],
  };

  return [tsLoader, assetsLoader, svgrLoader];
}
