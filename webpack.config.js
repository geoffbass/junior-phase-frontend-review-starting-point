const webpack = require('webpack');
const { resolve } = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [
          resolve(__dirname, 'src')
        ],
        loader: 'babel-loader',
        options: {
          presets: ['react', 'env']
        }
      }
    ]
  },
  devtool: 'source-map',
  devServer: {
    contentBase: resolve(__dirname, 'public'),
    proxy: {
      '/api': 'http://localhost:3000'
    },
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
