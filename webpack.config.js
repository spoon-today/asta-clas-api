var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: './client/index.js',

  output: {
    path: __dirname + '/public/',
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel?' + JSON.stringify({
            cacheDirectory: true,
            presets: ['es2015', 'react']
        })],
        exclude: /node_modules/,
      }
    ]
  },

  resolve: {
    root: path.resolve('./client')
  }
};
