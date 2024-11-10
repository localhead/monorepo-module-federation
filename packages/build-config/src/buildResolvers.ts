import { Configuration } from "webpack";
import { BuildOptions } from "./types/types";

export function buildResolvers(
  options: BuildOptions
): Configuration["resolve"] {
  const { paths } = options;
  return {
    // настройка TS
    extensions: [".tsx", ".ts", ".js", ".jsx"],
    alias: paths.alias,
  };
}
