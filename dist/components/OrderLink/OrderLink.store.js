'use strict';

/**
 * @file
 * Store for the OrderLink component
 */

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _reflux = require('reflux');

var _reflux2 = _interopRequireDefault(_reflux);

var _OrderLinkActionJs = require('./OrderLink.action.js');

var _OrderLinkActionJs2 = _interopRequireDefault(_OrderLinkActionJs);

var store = {};

var OrderLinkStore = _reflux2['default'].createStore({
  getState: function getState() {
    return store;
  },

  init: function init() {
    this.listenTo(_OrderLinkActionJs2['default'].updated, this.update);
  },

  update: function update(response) {
    var pid = response.info.pids.toString();
    if (response.result.hasOwnProperty('canOrder')) {
      store[pid] = response.result.canOrder;
    } else {
      store[pid] = 'false';
    }

    this.pushStore();
  },

  pushStore: function pushStore() {
    this.trigger(store);
  }
});

exports['default'] = OrderLinkStore;
module.exports = exports['default'];