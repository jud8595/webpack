const webpack = require("webpack");
const path = require("path");

let config = {
    entry: {
        app: "./src/index.js",
        print: "./src/print.js"
    },
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