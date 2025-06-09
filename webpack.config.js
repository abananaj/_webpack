const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: { index: path.resolve(__dirname, "development/index.js") },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "development/template.html"),
      scriptLoading: "module",
      inject: "body"
    })],
  module: {
    rules: [
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