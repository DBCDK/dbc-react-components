'use strict';

/**
 * @File
 * Actions for the OrderLink component
 */Object.defineProperty(exports, '__esModule', { value: true });function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { 'default': obj };}var _reflux = require(

'reflux');var _reflux2 = _interopRequireDefault(_reflux);var _dbcNodeServiceproviderSocketclient = require(
'dbc-node-serviceprovider-socketclient');var _dbcNodeServiceproviderSocketclient2 = _interopRequireDefault(_dbcNodeServiceproviderSocketclient);

var event = (0, _dbcNodeServiceproviderSocketclient2['default'])('getOrderPolicy');

var OrderLinkActions = _reflux2['default'].createAction({ 
  children: ['updated', 'failed'] });


OrderLinkActions.listen(event.request);
event.response(OrderLinkActions.updated);exports['default'] = 

OrderLinkActions;module.exports = exports['default'];