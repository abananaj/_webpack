const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./development/index.js",
  plugins: [new HtmlWebpackPlugin({
    template: "./development/template.html",
    scriptLoading: "module",
    inject: "body"
  })],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.html$/,
        use: ["html-loader"]
      },
     {
       test: /\.(png|svg|jpg|jpeg|gif|mp4)/,
       type: 'asset/resource'
     }
    ]
  }
};