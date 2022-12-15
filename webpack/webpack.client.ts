import { DefinePlugin, Configuration } from 'webpack';
import 'webpack-dev-server';
import path from 'path';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ReactRefreshPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import { merge } from 'webpack-merge';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import fs from 'fs';
import { Env } from 'shared/envType';
import createBaseConfig from './webpack.base';
import dotenv from 'dotenv';

dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

function createClientConfig(env: Env): Configuration {
  const babelConfig = {
    presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
    plugins: ['@babel/plugin-transform-runtime', env.hot && require.resolve('react-refresh/babel')].filter(Boolean),
  };

  return {
    name: 'client',
    target: 'web',
    context: path.resolve(__dirname, '../src/client'),
    optimization: {
      splitChunks: {
        chunks: 'all',
      },
    },
    entry: {
      index: env.development ? './Index.development.tsx' : './Index.tsx',
    },
    output: {
      path: path.resolve(__dirname, '../dist', 'public'),
      filename: env.production ? 'js/[name].[chunkhash].js' : 'js/[name].js',
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: [path.resolve(__dirname, '../node_modules'), path.resolve(__dirname, '../src/client/resources')],
          use: { loader: 'babel-loader', options: babelConfig },
        },
        {
          test: /\.(woff2|woff|eot|ttf|otf|svg)$/,
          include: [path.resolve(__dirname, '../src/client/resources/fonts')],
          use: ['file-loader'],
        },
        {
          test: /\.(jpg|png|gif)$/,
          include: [path.resolve(__dirname, '../src/client/resources/images')],
          use: {
            loader: 'file-loader',
            options: {
              outputPath: 'images',
              name: '[name].[contenthash].[ext]',
            },
          },
        },
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.svg$/,
          include: [path.resolve(__dirname, '../src/client/resources/images')],
          use: {
            loader: '@svgr/webpack',
            options: {
              svgoConfig: {
                plugins: [
                  {
                    name: 'removeViewBox',
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
        template: './index.html',
      }),
      new CopyWebpackPlugin({
        patterns: [{ from: 'resources/favicon/' }],
      }),
      new DefinePlugin({
        __SERVER__: JSON.stringify(false),
      }),
      (env.hot && new ReactRefreshPlugin()) as any,
    ].filter(Boolean),
    ...(!env.production && {
      devServer: {
        hot: true,
        host: '0.0.0.0', //env.host,
        open: [`${env.https ? 'https' : 'http'}://${env.host}:3000`],
        port: 3000,
        historyApiFallback: true,
        allowedHosts: 'all',
        proxy: {
          '/api': {
            target: env.mock_server ? 'http://localhost:4000' : env.proxy_server_url,
            pathRewrite: { '^/api': '' },
            secure: true,
            changeOrigin: true,
            // onProxyReq: (proxyReq) => {
            //   console.log(proxyReq);
            // },
          },
        },
        server: env.https
          ? {
              type: 'https',
              options: {
                key: fs.readFileSync('certificates/cert.key'),
                cert: fs.readFileSync('certificates/cert.crt'),
              },
            }
          : {},
      },
    }),
  };
}

export default function (e: any) {
  const env: Env = {
    hot: !!e['HOT'],
    mock_server: process.env.MOCK_SERVER === 'true',
    production: !!e['PRODUCTION'],
    host: process.env.HOST || '0.0.0.0',
    https: Boolean(process.env.HTTPS) || false,
    development: !!e['DEVELOPMENT'],
    proxy_server_url: process.env.PROXY_SERVER_URL ?? '',
  };

  const baseConfig = createBaseConfig(env);
  const clientConfig = merge(baseConfig, createClientConfig(env));

  return [clientConfig];
}
