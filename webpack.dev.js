const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.config");

module.exports = merge(common, {
    mode: 'development',
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "production"),
        assetModuleFilename: "media/[name][ext][query]"
    },
    devServer: {
        static: path.resolve(__dirname, './production'),
        liveReload: true,
        devMiddleware: {
            publicPath: '/'
        }
    },
    ignoreWarnings: [ { module: /node_modules/ }   ]

});