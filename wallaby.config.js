'use strict';
let wallabyWebpack = require('wallaby-webpack');
let webpackConfig = require('./webpack.test.config');
let webpackPostprocessor = wallabyWebpack(webpackConfig);
let babel = require('babel');

module.exports = function() {
  return {
    files: [
      {pattern: 'testlib/phantomPolyfill.js', instrument: false}, // required when testing react components to polyfill the bind() method
      {pattern: 'src/**/__tests__/testStore.js', load: false},
      {pattern: 'src/**/*.component.js', load: false},
      {pattern: 'src/**/*.action.js', load: false},
      {pattern: 'src/**/*.store.js', load: false}
    ],

    tests: [
      {pattern: 'src/**/__tests__/*.test.js', load: false}
    ],

    preprocessors: {
      '**/*.js': [
          file => babel.transform(file.content, {sourceMaps: true})
      ]
    },

    postprocessor: webpackPostprocessor,

    bootstrap: function() {
      // required to trigger tests loading
      window.__moduleBundler.loadTests();
    },

    testFramework: 'mocha@2.2.4'
  };
};
