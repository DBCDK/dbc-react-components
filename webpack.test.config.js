/**
 * Config file for webpack
 */

var webpack = require('webpack');

/**
 * Setup webpack to transpile ES6 and jsx + handle scss files
 *
 * @type {{entry: {app: string}, output: {path: string, filename: string}, module: {loaders: *[]}, plugins: *[]}}
 */
module.exports = {
  module: {
    preLoaders: [{
      test: /\.js?$/,
      loaders: ['babel'],
      exclude: /node_modules/
    }, {
      test: /\.js$/,
      exclude: /(test|node_modules|bower|__tests__)\//,
      loader: 'isparta'
    }]
  }
};