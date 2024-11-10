import path from "path";
import webpack from "webpack";

import { BuildOptions, buildWebpack } from "@packages/build-config";

import packageJson from "./package.json";

interface EnvVariables extends Omit<BuildOptions, "paths"> {}

export default (env: EnvVariables) => {
  const config: webpack.Configuration = buildWebpack({
    mode: env.mode ?? "development",
    paths: {
      entry: path.resolve(__dirname, "src", "index.tsx"),
      html: path.resolve(__dirname, "public", "index.html"),
      output: path.resolve(__dirname, "build"),
      public: path.resolve(__dirname, "public"),
      alias: {
        "@pages": path.resolve(__dirname, "src/pages"),
        "@utils": path.resolve(__dirname, "src/utils"),
        "@assets": path.resolve(__dirname, "src/assets"),
        "@packages": path.resolve(__dirname, "src/packages"),
      },
    },
    port: env.port ?? 3000,
    analyzer: env.analyzer ?? false,
    platform: env.platform ?? "desktop",
  });

  config.plugins.push(
    new webpack.container.ModuleFederationPlugin({
      name: "shop",
      filename: "remoteEntry.js",
      exposes: {
        "./Router": "./src/router/Router.tsx",
      },
      shared: {
        ...packageJson.dependencies,
        react: {
          eager: true,
          requiredVersion: packageJson.dependencies["react"],
        },
        "react-router-dom": {
          eager: true,
          requiredVersion: packageJson.dependencies["react-router-dom"],
        },
        "react-dom": {
          eager: true,
          requiredVersion: packageJson.dependencies["react-dom"],
        },
      },
    })
  );
  return config;
};
