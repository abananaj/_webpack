const path = require('path');
const Webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

module.exports = {
    mode: 'development',
    devtool: 'eval-source-map',
    entry: './development/index.ts',
    output: {
        publicPath: 'production',
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'production'),
    },
    devServer: {
        static: path.resolve(__dirname, 'production'),
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    module: {
        rules:
            [{
                test: /\.ts$/,
                exclude: /node_modules/,
                use: 'ts-loader',
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
                // {
                //     test: /\.js$/,
                //     exclude: /node_modules/,
                //     use: {
                //         loader: 'babel-loader',
                //         options: {
                //             presets: ['@babel/preset-env']
                //         }
                //     }
                // }
            ]
    }
};