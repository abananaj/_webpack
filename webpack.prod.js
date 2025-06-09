const path = require('path');
const { merge } = require("webpack-merge");
const config = require("./webpack.config");
const TerserPlugin = require('terser-webpack-plugin');

module.exports = merge(config, {
    mode: 'production',
    output: {
        filename: "bundle.[contenthash].js",
        path: path.resolve(__dirname, "production"),
        assetModuleFilename: "media/[name].[hash][ext][query]",
        clean: true,
    },
    optimization: {
        realContentHash: true,
        minimizer: [
            new TerserPlugin({
                parallel: true,
                extractComments: false,
                terserOptions: {
                    // https://github.com/webpack-contrib/terser-webpack-plugin#terseroptions
                },
            }),
        ],
    }
});