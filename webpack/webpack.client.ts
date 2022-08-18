import { DefinePlugin, Configuration } from "webpack";
import "webpack-dev-server";
import path from "path";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import ReactRefreshPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import { merge } from "webpack-merge";
import CopyWebpackPlugin from "copy-webpack-plugin";
import fs from "fs";
import { Env } from "shared/envType";
import createBaseConfig from "./webpack.base";

function createClientConfig(env: Env): Configuration {
  const babelConfig = {
    presets: [
      "@babel/preset-env",
      "@babel/preset-react",
      "@babel/preset-typescript",
    ],
    plugins: [
      "@babel/plugin-transform-runtime",
      require.resolve("react-refresh/babel"),
    ].filter(Boolean),
  };

  return {
    target: "web",
    context: path.resolve(__dirname, "../src/client"),
    optimization: {
      splitChunks: {
        chunks: "all",
      },
    },
    entry: {
      index: "./Index.tsx",
    },
    output: {
      path: path.resolve(__dirname, "dist", "public"),
      filename: env.production ? "js/[name].[chunkhash].js" : "js/[name].js",
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: { loader: "babel-loader", options: babelConfig },
        },
        {
          test: /\.(woff2|woff|eot|ttf|otf|svg)$/,
          include: /fonts/,
          use: ["file-loader"],
        },
        {
          test: /\.(jpg|png|gif)$/,
          use: {
            loader: "file-loader",
            options: {
              outputPath: "images",
              name: "[name].[contenthash].[ext]",
            },
          },
        },
        {
          test: /\.svg$/,
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
      ],
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: "./index.html",
      }),
      new CopyWebpackPlugin({
        patterns: [{ from: "resources/favicon/" }],
      }),
      new DefinePlugin({
        __SERVER__: JSON.stringify(false),
      }),
      new ReactRefreshPlugin(),
    ].filter(Boolean),
    devServer: {
      hot: true,
      host: env.host,
      open: true,
      port: 3000,
      historyApiFallback: true,
      server: env.https
        ? {
            type: "https",
            options: {
              key: fs.readFileSync("certificates/cert.key"),
              cert: fs.readFileSync("certificates/cert.crt"),
            },
          }
        : {},
    },
  };
}

export default function (e: any) {
  const env: Env = {
    production: !!e["PRODUCTION"],
    host: process.env.HOST || "0.0.0.0",
    https: Boolean(process.env.HTTPS) || false,
  };

  const baseConfig = createBaseConfig(env);
  const clientConfig = merge(baseConfig, createClientConfig(env));

  return [clientConfig];
}
