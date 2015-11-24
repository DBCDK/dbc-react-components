'use strict';

/**
 * @file
 * Renders an order link based on the given pids and an agency id (library).
 */Object.defineProperty(exports, '__esModule', { value: true });function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { 'default': obj };}var _react = require(
'react');var _react2 = _interopRequireDefault(_react);var _OrderLinkStoreJs = require(
'./OrderLink.store.js');var _OrderLinkStoreJs2 = _interopRequireDefault(_OrderLinkStoreJs);var _OrderLinkActionJs = require(
'./OrderLink.action.js');var _OrderLinkActionJs2 = _interopRequireDefault(_OrderLinkActionJs);

var OrderLink = _react2['default'].createClass({ 

  displayName: 'OrderLink', 
  propTypes: { 
    agencyId: _react2['default'].PropTypes.string.isRequired, 
    borrowerId: _react2['default'].PropTypes.string.isRequired, 
    coverImagePids: _react2['default'].PropTypes.array.isRequired, 
    key: _react2['default'].PropTypes.number, 
    linkText: _react2['default'].PropTypes.string.isRequired, 
    orderUrl: _react2['default'].PropTypes.string.isRequired, 
    pickupAgencyId: _react2['default'].PropTypes.string.isRequired, 
    pids: _react2['default'].PropTypes.array.isRequired, 
    type: _react2['default'].PropTypes.string.isRequired, 
    userIsLoggedIn: _react2['default'].PropTypes.bool.isRequired, 
    workTypeOrder: _react2['default'].PropTypes.bool.isRequired }, 


  getInitialState: function getInitialState() {
    return { 
      canOrder: false, 
      orderUrl: this.props.orderUrl + '&pickupAgency=' + this.props.pickupAgencyId + '&borrowerId=' + this.props.borrowerId + '&coverImageIds=' + this.props.coverImagePids };}, 



  componentDidMount: function componentDidMount() {
    if (this.props.agencyId === '') {
      this.setOrderAlwaysPossible();} else 

    if (this.props.userIsLoggedIn === true) {
      _OrderLinkStoreJs2['default'].listen(this.setOrderPossible);
      if (this.props.pids) {
        (0, _OrderLinkActionJs2['default'])({ agencyId: this.props.agencyId, pids: this.props.pids });}}}, 




  setOrderAlwaysPossible: function setOrderAlwaysPossible() {
    this.setState({ 
      canOrder: true });}, 



  setOrderPossible: function setOrderPossible(store) {
    if (store[this.props.pids.toString()] === 'true') {
      this.setState({ 
        canOrder: true });}}, 




  render: function render() {
    var required = ['agencyId', 'borrowerId', 'coverImagePids', 'linkText', 'orderUrl', 'pickupAgencyId', 'pids', 'type', 'userIsLoggedIn', 'workTypeOrder'];
    for (var i in required) {
      if (!this.props.hasOwnProperty(required[i])) {
        return _react2['default'].createElement('div', { className: 'no-order-button' });}}


    var no_order = 'Gå til desktopversion for at bestille ' + this.props.type;
    if (this.props.workTypeOrder === false) {
      return _react2['default'].createElement('div', { className: 'no-mobile-order', 'data-canorder': this.state.canOrder, key: this.props.key }, no_order);}

    if (this.props.userIsLoggedIn === true && this.state.canOrder === false) {
      return _react2['default'].createElement('div', { className: 'no-mobile-order', 'data-canorder': this.state.canOrder, key: this.props.key }, no_order);}

    return _react2['default'].createElement('a', { 
      className: 'can-order-' + this.state.canOrder + ' order-button button', 
      'data-canorder': this.state.canOrder, 
      'data-identifiers': this.props.pids, 
      href: this.state.orderUrl, 
      key: this.props.key }, 
    this.props.linkText);} });exports['default'] = 



OrderLink;module.exports = exports['default'];