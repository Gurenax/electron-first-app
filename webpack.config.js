const path = require('path')
const webpack = require('webpack')
module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'App.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'] // Loads .babelrc
      }
    ]
  },
  stats: {
    colors: true
  },
  devtool: 'inline-source-map' // Uncomment in production
}