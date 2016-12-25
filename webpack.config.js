var webpack = require('webpack')
var path = require('path')

var BUILD_DIR = path.resolve(__dirname, 'client/public')
var APP_DIR = path.resolve(__dirname, 'client/app')

var config = {
  entry: APP_DIR + '/index.js',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js?/,
        exclude: /node_modules/,
        include: APP_DIR,
        loader: 'babel',
        query: { compact: false }
      }
    ]
  }
}

module.exports = config
