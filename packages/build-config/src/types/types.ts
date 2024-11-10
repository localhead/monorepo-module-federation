export type EnvironmentOptions = "production" | "development";
export type PlatformOptions = "desktop" | "mobile";

export type BuildPaths = {
  entry: string;
  html: string;
  public: string;
  output: string;
  alias: any;
};

export type BuildOptions = {
  paths: BuildPaths;
  port: number;
  mode: EnvironmentOptions;

  analyzer?: boolean;
  platform?: PlatformOptions;

  SHOP_REMOTE_URL?: string;
  ADMIN_REMOTE_URL?: string;
};
