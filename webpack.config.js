const path = require('path');
const Webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, './development/index.js'),
    devtool: "eval-source-map",
    output: {
        publicPath: 'production',
        filename: 'bundle.js',
        path: path.resolve(__dirname, './production'),
    },
    devServer: {
        static: path.resolve(__dirname, './production'),
        liveReload: true,
        devMiddleware: {
            publicPath: '/'
        }
    },
    resolve: {
        extensions: ['.css', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ]
    }
};