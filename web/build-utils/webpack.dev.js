const webpack = require("webpack");
const Dotenv = require("dotenv-webpack");

module.exports = {
  mode: "development",
  devtool: "eval-source-map",
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new Dotenv({
      path: "./.env.development"
    })
  ],
  devServer: {
    contentBase: "./dist",
    hot: true,
    host: "0.0.0.0",
    port: 3000
  }
};
