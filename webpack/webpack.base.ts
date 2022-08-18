import { Configuration, DefinePlugin } from "webpack";
import { TsconfigPathsPlugin } from "tsconfig-paths-webpack-plugin";
import { Env } from "shared/envType";
import dotenv from "dotenv";

dotenv.config({ override: true });

export default function createBaseConfig(env: Env): Configuration {
  return {
    mode: env.production ? "production" : "development",

    devtool: env.production ? false : "source-map",

    resolve: {
      extensions: [".ts", ".tsx", ".js"],
      plugins: [new TsconfigPathsPlugin()],
    },

    plugins: [
      new DefinePlugin({
        __PRODUCTION__: JSON.stringify(env.production),
      }),
    ],
  };
}
