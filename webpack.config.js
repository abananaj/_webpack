const path = require('path');

module.exports = {
  mode: 'development',
  entry: './development/index.js',
  output: {
    path: path.resolve(__dirname, 'production'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        include: 
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  }
};