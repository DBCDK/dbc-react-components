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
    loaders: [
      {
        test: /\.js?$/,
        loaders: ['babel'],
        exclude: /node_modules/
      }
    ],
    postLoaders: [
      {
        test: /\.js$/,
        exclude: /(testlib|node_modules|__tests__|dist)\//,
        loader: 'istanbul-instrumenter'
      }
    ]
  }
};