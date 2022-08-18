import { DefinePlugin, Configuration } from "webpack";
import "webpack-dev-server";
import path from "path";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import { merge } from "webpack-merge";
import createBaseConfig from "./webpack.base";
import { Env } from "shared/envType";

function createServerConfig(): Configuration {
  return {
    target: "node",
    context: path.resolve(__dirname, "../src/server"),
    externalsPresets: {
      node: true,
    },
    ignoreWarnings: [
      {
        module: /express/,
        message:
          /Critical\sdependency:\sthe\srequest\sof\sa\sdependency\sis\san\sexpression/,
      },
    ],
    entry: "./app.ts",
    output: {
      path: path.resolve(__dirname, "../dist"),
      filename: "app.js",
      publicPath: "./",
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: "ts-loader",
          exclude: [
            path.resolve(__dirname, "../node_modules"),
            path.resolve(__dirname, "../src/client/resources"),
          ],
        },
        {
          test: /\.(jpg|png|gif)$/,
          include: [path.resolve(__dirname, "../src/client/resources/images")],
          use: {
            loader: "file-loader",
            options: {
              outputPath: "images",
              name: "[name].[contenthash].[ext]",
              emitFile: false,
            },
          },
        },
        {
          test: /\.svg$/,
          include: [path.resolve(__dirname, "../src/client/resources/images")],
          use: {
            loader: "@svgr/webpack",
            options: {
              svgoConfig: {
                plugins: [
                  {
                    name: "removeViewBox",
                    active: false,
                  },
                ],
              },
            },
          },
        },
        {
          test: /\.(woff2|woff|eot|ttf|otf|svg)$/,
          include: [path.resolve(__dirname, "../src/client/resources/fonts")],
          use: ["file-loader"],
        },
      ],
    },

    plugins: [
      new CleanWebpackPlugin({
        cleanOnceBeforeBuildPatterns: ["!public/**"],
      }),

      new DefinePlugin({
        __Server__: JSON.stringify(true),
      }),
    ],
  };
}

export default function (e: any) {
  const env: Env = {
    production: !!e["PRODUCTION"],
    host: process.env.HOST || "0.0.0.0",
    https: Boolean(process.env.HTTPS) || false,
  };

  const baseConfig = createBaseConfig(env);
  const serverConfig = merge(baseConfig, createServerConfig());

  return [serverConfig];
}
