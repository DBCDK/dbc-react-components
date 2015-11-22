'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _reflux = require('reflux');

var _reflux2 = _interopRequireDefault(_reflux);

var OrderActions = _reflux2['default'].createAction({ children: ['updated', 'failed'] });

exports['default'] = OrderActions;
module.exports = exports['default'];