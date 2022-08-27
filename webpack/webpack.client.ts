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
      env.hot && require.resolve("react-refresh/babel"),
    ].filter(Boolean),
  };

  return {
    name: "client",
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
      path: path.resolve(__dirname, "../dist", "public"),
      filename: env.production ? "js/[name].[chunkhash].js" : "js/[name].js",
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: [
            path.resolve(__dirname, "../node_modules"),
            path.resolve(__dirname, "../src/client/resources"),
          ],
          use: { loader: "babel-loader", options: babelConfig },
        },
        {
          test: /\.(woff2|woff|eot|ttf|otf|svg)$/,
          include: [path.resolve(__dirname, "../src/client/resources/fonts")],
          use: ["file-loader"],
        },
        {
          test: /\.(jpg|png|gif)$/,
          include: [path.resolve(__dirname, "../src/client/resources/images")],
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
      (env.hot && new ReactRefreshPlugin()) as any,
    ].filter(Boolean),
    ...(!env.production && {
      devServer: {
        hot: true,
        host: env.host,
        open: true,
        port: 3000,
        historyApiFallback: true,
        proxy: {
          "/api": {
            target: "https://test.lampastar.ru/index.php?route=",
            pathRewrite: { "^/api": "" },
            secure: true,
            changeOrigin: true,
            // onProxyReq: (proxyReq) => {
            //   console.log(proxyReq);
            // },
          },
        },
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
    }),
  };
}

export default function (e: any) {
  const env: Env = {
    hot: !!e["HOT"],
    production: !!e["PRODUCTION"],
    host: process.env.HOST || "0.0.0.0",
    https: Boolean(process.env.HTTPS) || false,
  };

  const baseConfig = createBaseConfig(env);
  const clientConfig = merge(baseConfig, createClientConfig(env));

  return [clientConfig];
}
