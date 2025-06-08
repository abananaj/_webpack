const path = require('path');
const Webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

module.exports = {
    mode: 'development',
    devtool: 'eval-source-map',
    entry: './development/index.css',
    output: {
        publicPath: 'production',
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'production'),
    },
    devServer: {
        static: path.resolve(__dirname, 'production'),
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
                test: /\.(css)$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    }
};