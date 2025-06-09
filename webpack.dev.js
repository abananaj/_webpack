const path = require("path");
const { merge } = require("webpack-merge");
const config = require("./webpack.config");

module.exports = merge(config, {
    mode: 'development',
    output: {
        filename: "bundle.js",
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