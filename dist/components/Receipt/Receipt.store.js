'use strict';

/**
 * @file
 * Store for the Receipt component
 */

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _reflux = require('reflux');

var _reflux2 = _interopRequireDefault(_reflux);

var _ReceiptActionJs = require('./Receipt.action.js');

var _ReceiptActionJs2 = _interopRequireDefault(_ReceiptActionJs);

var store = {};

var ReceiptStore = _reflux2['default'].createStore({
  getState: function getState() {
    return store;
  },

  init: function init() {
    this.listenTo(_ReceiptActionJs2['default'].updated, this.update);
  },

  update: function update(response) {
    var pid = response.info.pids.toString();
    if (response.result.hasOwnProperty('orderPlaced')) {
      store[pid] = response.result.orderPlaced;
    } else {
      store[pid] = 'false';
    }

    this.pushStore();
  },

  pushStore: function pushStore() {
    this.trigger(store);
  }
});

exports['default'] = ReceiptStore;
module.exports = exports['default'];