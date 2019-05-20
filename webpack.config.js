const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

let config = {
    entry: {
        app: "./src/index.js",
        print: "./src/print.js"
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Output Management'
        }),
        new BundleAnalyzerPlugin({
            analyzerHost: '10.0.2.15'
        })
    ],
    output: {
      path: path.resolve(__dirname, "./public"),
      filename: "[name].bundle.js"
    },
    module: {
        rules: [{
          test: /\.js$/,
          exclude: /node_modules/,
          loader: "babel-loader"
        }]
      }
  }
  
  module.exports = config;