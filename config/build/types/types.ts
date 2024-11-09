export type EnvironmentOptions = "production" | "development";
export type PlatformOptions = "desktop" | "mobile";

export type BuildOptions = {
  paths: BuildPaths;
  port: number;
  mode: EnvironmentOptions;

  analyzer?: boolean;
  platform?: PlatformOptions;
};

export type BuildPaths = {
  entry: string;
  html: string;
  public: string;
  output: string;
  alias: any;
};
