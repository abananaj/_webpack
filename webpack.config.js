const path = require('path');

module.exports = {
  mode: 'development',
  entry: './development/index.js',
  output: {
    path: path.resolve(__dirname, 'production'),
    filename: 'bundle.js',
  },
  devServer: {
    static: path.resolve(__dirname, './production'),
    liveReload: true,
    devMiddleware: {
      publicPath: '/'
    }

  },
    module: {
      rules: [
        {
           test: /\.s[ac]ss$/i,
          exclude: path.resolve(__dirname, './node_modules'),
          use: ['style-loader', 'css-loader', 'sass-loader']
        }
      ]
  },
  ignoreWarnings: [
    {
        module: /node_modules/
      }
    ]
    
}