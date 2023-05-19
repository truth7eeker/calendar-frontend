const HtmlWebpackPlugin = require("html-webpack-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const path = require("path");
const webpack = require("webpack");
const Dotenv = require('dotenv-webpack');

const isDevelopment = process.env.NODE_ENV !== "production";

module.exports = {
   mode: isDevelopment ? 'development' : 'production',
   entry: './src/index.tsx',
   devServer: {
      hot: true,
      historyApiFallback: true,
   },
   target: 'web',
   output: {
      filename: 'bundle.[hash].js',
      path: path.resolve(__dirname, 'build'),
   },
   plugins: [
      new HtmlWebpackPlugin({
         template: './src/index.html',
      }),
      isDevelopment && new webpack.HotModuleReplacementPlugin(),
      isDevelopment && new ReactRefreshWebpackPlugin(),
      new Dotenv(),
   ],
   resolve: {
      modules: [__dirname, 'src', 'node_modules'],
      extensions: ['*', '.js', '.jsx', '.tsx', '.ts'],
   },
   module: {
      rules: [
         {
            test: /\.ts$|tsx/,
            exclude: /node_modules/,
            loader: require.resolve('babel-loader'),
            options: {
               plugins: [isDevelopment && require.resolve('react-refresh/babel')].filter(Boolean),
            },
         },
         {
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'sass-loader'],
         },
         {
            test: /\.png|svg|jpg|gif$/,
            use: ['file-loader'],
         },
      ],
   },
};

