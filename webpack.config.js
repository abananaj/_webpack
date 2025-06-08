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
        extensions: ['.scss', '.css', '.js'],
    },
    module: {
        rules: [

            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            } 
        ]
    }
};